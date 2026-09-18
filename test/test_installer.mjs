import assert from "assert";
import {
  mkdtempSync,
  rmSync,
  existsSync,
  readFileSync,
  writeFileSync,
  mkdirSync,
  symlinkSync,
} from "fs";
import { tmpdir } from "os";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { execFileSync } from "child_process";
import { compareSemver, getLocalVersion, readCache, writeCache } from "../bin/updater.mjs";
import { upsertRuleContent, copySkillPackage, AI_HARNESSES } from "../bin/installer.mjs";
import { copyComponentFiles, safePath } from "../bin/index.mjs";

console.log("Running Motion UI installer & updater tests...");

// 1. Semver comparison tests
assert.strictEqual(compareSemver("1.0.1", "1.0.0"), 1);
assert.strictEqual(compareSemver("1.0.0", "1.0.1"), -1);
assert.strictEqual(compareSemver("1.0.0", "1.0.0"), 0);
assert.strictEqual(compareSemver("2.0.0", "1.9.9"), 1);
assert.strictEqual(compareSemver("v2.1.0", "2.0.5"), 1);

// 2. Local version detection: must match v2.0.0
const ver = getLocalVersion();
assert.strictEqual(ver, "2.0.0", "Version should match package.json and SKILL.md v2.0.0");

// 3. Cache read/write
const tempDir = mkdtempSync(join(tmpdir(), "motion-ui-test-"));
try {
  const cachePath = join(tempDir, ".test_cache");
  writeCache("2.0.0", cachePath);
  assert.ok(existsSync(cachePath));
  const cached = readCache(cachePath);
  assert.strictEqual(cached?.latestVersion, "2.0.0");

  // 4. Upsert rule content
  const ruleFile = join(tempDir, "CLAUDE.md");
  upsertRuleContent(ruleFile, "TEST_RULE", "Line 1\nLine 2");
  let content = readFileSync(ruleFile, "utf-8");
  assert.ok(content.includes("<!-- BEGIN TEST_RULE -->"));
  assert.ok(content.includes("Line 1\nLine 2"));
  assert.ok(content.includes("<!-- END TEST_RULE -->"));

  // Upsert again: must update in place without duplicating markers
  upsertRuleContent(ruleFile, "TEST_RULE", "Line Updated");
  content = readFileSync(ruleFile, "utf-8");
  assert.ok(content.includes("Line Updated"));
  assert.ok(!content.includes("Line 1"));
  const count = (content.match(/BEGIN TEST_RULE/g) || []).length;
  assert.strictEqual(count, 1, "Should not duplicate rule block markers");

  // 5. Harness detection in mock directory
  const mockCursorDir = join(tempDir, "mock-cursor");
  writeFileSync(join(tempDir, ".cursorrules"), "");
  const cursorHarness = AI_HARNESSES.find((h) => h.id === "cursor");
  assert.ok(cursorHarness.detect(tempDir), "Should detect Cursor when .cursorrules exists");

  // 6. Test copySkillPackage in dry-run and real
  const targetSkill = join(tempDir, "installed-skill");
  copySkillPackage(targetSkill, { dryRun: true });
  assert.ok(!existsSync(targetSkill), "Dry run should not create folder");

  copySkillPackage(targetSkill, { dryRun: false });
  assert.ok(existsSync(join(targetSkill, "SKILL.md")), "SKILL.md must be copied");
  assert.ok(existsSync(join(targetSkill, "catalog.json")), "catalog.json must be copied");
  assert.ok(existsSync(join(targetSkill, "lib", "styles.ts")), "lib/styles.ts must be copied");
  assert.ok(!existsSync(join(targetSkill, "node_modules")), "node_modules must not be copied");

  // 7. Deduplication test
  const dedupeTarget = join(tempDir, "dedupe-skill");
  const copiedDirs = new Set();
  copySkillPackage(dedupeTarget, { copiedDirs });
  assert.ok(copiedDirs.has(dedupeTarget), "copiedDirs should record target path");
  // Second call must be a no-op
  copySkillPackage(dedupeTarget, { copiedDirs });
  assert.strictEqual(copiedDirs.size, 1);

  // 8. Node component installer containment and atomic planning
  assert.throws(() => safePath(tempDir, "../outside.tsx"), /stay relative/);
  const incompleteDest = join(tempDir, "incomplete");
  assert.throws(
    () =>
      copyComponentFiles(
        { component_files: ["components/buttons/three-d-button.tsx", "missing.tsx"] },
        incompleteDest
      ),
    /Required source file missing/
  );
  assert.ok(
    !existsSync(join(incompleteDest, "components", "buttons", "three-d-button.tsx")),
    "An invalid install plan must not copy any files"
  );

  const sentinel = join(tempDir, "sentinel.txt");
  const linkedTarget = join(tempDir, "linked", "components", "buttons", "three-d-button.tsx");
  mkdirSync(dirname(linkedTarget), { recursive: true });
  writeFileSync(sentinel, "keep");
  symlinkSync(sentinel, linkedTarget);
  assert.throws(
    () =>
      copyComponentFiles(
        { component_files: ["components/buttons/three-d-button.tsx"] },
        join(tempDir, "linked")
      ),
    /Symlinks are not allowed/
  );
  assert.strictEqual(readFileSync(sentinel, "utf-8"), "keep");

  // 9. The documented npx package must remain publishable
  const pkg = JSON.parse(readFileSync(new URL("../package.json", import.meta.url), "utf-8"));
  assert.notStrictEqual(pkg.private, true);
  assert.strictEqual(pkg.bin["motion-ui-skill"], "./bin/index.mjs");

  const cliLink = join(tempDir, "motion-ui-skill");
  symlinkSync(fileURLToPath(new URL("../bin/index.mjs", import.meta.url)), cliLink);
  assert.strictEqual(execFileSync(process.execPath, [cliLink, "--version"], { encoding: "utf-8" }).trim(), "v2.0.0");
} finally {
  rmSync(tempDir, { recursive: true, force: true });
}

console.log("All tests passed! ✨");
