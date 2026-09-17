#!/usr/bin/env node

/**
 * Motion UI - Auto-Updater
 * Checks upstream repository/registry for updates and applies them in-place.
 * Runs on skill activation with caching to prevent network latency.
 */

import { existsSync, readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import https from "https";
import { execSync } from "child_process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const SKILL_ROOT = join(__dirname, "..");

const CACHE_FILE = join(SKILL_ROOT, ".last_update_check");
const CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour cache
const UPSTREAM_RAW_URL = "https://raw.githubusercontent.com/Rkj0123/motion-ui-skill/main/package.json";

/**
 * Read the locally installed version of Motion UI skill.
 */
export function getLocalVersion(skillRoot = SKILL_ROOT) {
  try {
    const pkgPath = join(skillRoot, "package.json");
    if (existsSync(pkgPath)) {
      const pkg = JSON.parse(readFileSync(pkgPath, "utf-8"));
      if (pkg.version) return pkg.version;
    }
  } catch {
    // Fall back to SKILL.md
  }

  try {
    const skillPath = join(skillRoot, "SKILL.md");
    if (existsSync(skillPath)) {
      const content = readFileSync(skillPath, "utf-8");
      const match = content.match(/version:\s*["']?([^"'\n\r]+)["']?/);
      if (match) return match[1].trim();
    }
  } catch {
    // Default fallback
  }

  return "1.0.0";
}

/**
 * Compare two semver strings (v1 > v2 => 1, v1 < v2 => -1, v1 == v2 => 0)
 */
export function compareSemver(v1, v2) {
  const parse = (v) => (v || "").replace(/^v/, "").split(".").map((n) => parseInt(n, 10) || 0);
  const p1 = parse(v1);
  const p2 = parse(v2);
  const len = Math.max(p1.length, p2.length);
  for (let i = 0; i < len; i++) {
    const num1 = p1[i] || 0;
    const num2 = p2[i] || 0;
    if (num1 > num2) return 1;
    if (num1 < num2) return -1;
  }
  return 0;
}

/**
 * Fetch latest version from upstream GitHub with a strict timeout.
 */
export function fetchUpstreamVersion(timeoutMs = 2500) {
  return new Promise((resolve) => {
    const req = https.get(
      UPSTREAM_RAW_URL,
      {
        headers: { "User-Agent": "motion-ui-updater" },
        timeout: timeoutMs,
      },
      (res) => {
        if (res.statusCode !== 200) {
          resolve(null);
          return;
        }
        let data = "";
        res.on("data", (chunk) => (data += chunk));
        res.on("end", () => {
          try {
            const parsed = JSON.parse(data);
            resolve(parsed.version || null);
          } catch {
            resolve(null);
          }
        });
      }
    );

    req.on("timeout", () => {
      req.destroy();
      resolve(null);
    });

    req.on("error", () => {
      resolve(null);
    });
  });
}

/**
 * Read cached update check if still within TTL.
 */
export function readCache(cachePath = CACHE_FILE) {
  try {
    if (existsSync(cachePath)) {
      const cache = JSON.parse(readFileSync(cachePath, "utf-8"));
      if (Date.now() - (cache.timestamp || 0) < CACHE_TTL_MS) {
        return cache;
      }
    }
  } catch {
    // Ignore cache corruption
  }
  return null;
}

/**
 * Save update check result to cache.
 */
export function writeCache(latestVersion, cachePath = CACHE_FILE) {
  try {
    writeFileSync(
      cachePath,
      JSON.stringify({ timestamp: Date.now(), latestVersion }, null, 2) + "\n"
    );
  } catch {
    // Ignore cache write failures
  }
}

/**
 * Perform in-place update of the skill.
 */
export async function applyUpdate(skillRoot = SKILL_ROOT) {
  const isGit = existsSync(join(skillRoot, ".git"));
  if (isGit) {
    try {
      execSync("git pull --ff-only", { cwd: skillRoot, stdio: "pipe", timeout: 15000 });
      return { success: true, method: "git" };
    } catch {
      // Fallback if git fails
    }
  }

  const archiveUrl = "https://codeload.github.com/Rkj0123/motion-ui-skill/tar.gz/main";
  try {
    const tempTar = join(skillRoot, ".update.tar.gz");
    execSync(`curl -sL "${archiveUrl}" -o "${tempTar}"`, { timeout: 15000 });
    if (existsSync(tempTar)) {
      execSync(
        `tar -xzf "${tempTar}" --strip-components=1 -C "${skillRoot}" --exclude=".git"`,
        { timeout: 15000 }
      );
      try {
        execSync(`rm -f "${tempTar}"`);
      } catch {}
      return { success: true, method: "tarball" };
    }
  } catch (err) {
    return { success: false, error: err.message };
  }

  return { success: false, error: "Failed to apply update" };
}

/**
 * Main update function called on skill activation or via CLI.
 */
export async function checkAndAutoUpdate(options = {}) {
  const { force = false, silent = false, skillRoot = SKILL_ROOT, fetchVersion = fetchUpstreamVersion } = options;
  const currentVersion = getLocalVersion(skillRoot);

  if (!force) {
    const cached = readCache(join(skillRoot, ".last_update_check"));
    if (cached && cached.latestVersion) {
      if (compareSemver(cached.latestVersion, currentVersion) <= 0) {
        if (!silent) console.log(`[motion-ui] v${currentVersion} (up to date, cached)`);
        return { updated: false, currentVersion };
      }
    }
  }

  const latestVersion = await fetchVersion();
  if (!latestVersion) {
    if (!silent) console.log(`[motion-ui] v${currentVersion} (offline mode)`);
    return { updated: false, currentVersion, offline: true };
  }

  writeCache(latestVersion, join(skillRoot, ".last_update_check"));

  if (compareSemver(latestVersion, currentVersion) > 0) {
    console.log(`\n🔄 [motion-ui] New version available: v${latestVersion} (installed: v${currentVersion})`);
    console.log(`⏳ Auto-updating skill before activation...`);

    const result = await applyUpdate(skillRoot);
    if (result.success) {
      console.log(`✨ [motion-ui] Successfully updated to v${latestVersion}!\n`);
      return { updated: true, previousVersion: currentVersion, currentVersion: latestVersion };
    } else {
      console.warn(`⚠️  [motion-ui] Auto-update failed: ${result.error}. Continuing with v${currentVersion}.\n`);
      return { updated: false, currentVersion, error: result.error };
    }
  }

  if (!silent) {
    console.log(`[motion-ui] v${currentVersion} (up to date)`);
  }
  return { updated: false, currentVersion };
}

if (process.argv[1] === __filename) {
  const force = process.argv.includes("--force") || process.argv.includes("-f");
  const silent = process.argv.includes("--silent") || process.argv.includes("-s");
  checkAndAutoUpdate({ force, silent })
    .then(() => process.exit(0))
    .catch((err) => {
      console.error(`Update check error: ${err.message}`);
      process.exit(0);
    });
}
