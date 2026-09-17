#!/usr/bin/env node

/**
 * Motion UI - Universal AI Harness Installer
 * Auto-detects installed AI tools (Claude Code, Cursor, Windsurf, Codex,
 * Antigravity, OpenCode, VS Code / Continue / Cline / Copilot) and sets up the
 * Motion UI skill and rules seamlessly.
 */

import { existsSync, mkdirSync, readFileSync, writeFileSync, cpSync } from "fs";
import { createInterface } from "readline";
import { homedir, platform } from "os";
import { join, dirname, resolve } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const SKILL_ROOT = resolve(__dirname, "..");

const COLORS = {
  reset: "\x1b[0m",
  bold: "\x1b[1m",
  dim: "\x1b[2m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  cyan: "\x1b[36m",
  magenta: "\x1b[35m",
  red: "\x1b[31m",
};

const c = (color, text) => `${COLORS[color]}${text}${COLORS.reset}`;

// Files and directories to copy when installing the skill
const SKILL_COPY_ITEMS = [
  "SKILL.md",
  "catalog.json",
  "package.json",
  "agents",
  "bin",
  "components",
  "lib",
  "references",
  "scripts",
];

/**
 * Safely copy the skill package into the target directory.
 */
export function copySkillPackage(targetDir, options = {}) {
  const { dryRun = false, copiedDirs } = options;
  if (dryRun) return;

  const resolvedTarget = resolve(targetDir);
  if (copiedDirs) {
    if (copiedDirs.has(resolvedTarget)) {
      return;
    }
    copiedDirs.add(resolvedTarget);
  }

  if (!existsSync(targetDir)) {
    mkdirSync(targetDir, { recursive: true });
  }

  for (const item of SKILL_COPY_ITEMS) {
    const src = join(SKILL_ROOT, item);
    const dest = join(targetDir, item);
    if (existsSync(src)) {
      cpSync(src, dest, {
        recursive: true,
        filter: (srcPath) => {
          const base = srcPath.split(/[/\\]/).pop();
          return !["node_modules", ".git", ".last_update_check", "__pycache__"].includes(base);
        },
      });
    }
  }
}

/**
 * Append or update a rule section in a text/markdown file.
 */
export function upsertRuleContent(filePath, marker, content, options = {}) {
  const { dryRun = false } = options;
  if (dryRun) return;

  const dir = dirname(filePath);
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });

  let existing = "";
  if (existsSync(filePath)) {
    existing = readFileSync(filePath, "utf-8");
  }

  const startMarker = `<!-- BEGIN ${marker} -->`;
  const endMarker = `<!-- END ${marker} -->`;
  const block = `${startMarker}\n${content.trim()}\n${endMarker}\n`;

  if (existing.includes(startMarker) && existing.includes(endMarker)) {
    const regex = new RegExp(`${startMarker}[\\s\\S]*?${endMarker}\\n?`, "g");
    existing = existing.replace(regex, block);
  } else {
    existing = existing.trimEnd() ? `${existing.trimEnd()}\n\n${block}` : block;
  }

  writeFileSync(filePath, existing);
}

// ── AI Harness Definitions ──

export const AI_HARNESSES = [
  {
    id: "claude-code",
    name: "Claude Code",
    detect: (cwd = process.cwd()) => {
      return (
        existsSync(join(homedir(), ".claude.json")) ||
        existsSync(join(homedir(), ".claude")) ||
        existsSync(join(cwd, "CLAUDE.md")) ||
        existsSync(join(cwd, ".claude"))
      );
    },
    installProject: (cwd, opts) => {
      const skillDest = join(cwd, ".agents", "skills", "motion-ui");
      copySkillPackage(skillDest, opts);

      const claudeMd = join(cwd, "CLAUDE.md");
      const rule = [
        "## Motion UI Skill",
        "- For high-performance animated UI components and design systems, reference `.agents/skills/motion-ui/SKILL.md`.",
        "- On skill activation, run: `node .agents/skills/motion-ui/bin/updater.mjs --silent` to ensure components and physics tokens are up to date.",
        "- Follow `.agents/skills/motion-ui/catalog.json` for component source files and dependencies.",
      ].join("\n");
      upsertRuleContent(claudeMd, "MOTION_UI_SKILL", rule, opts);
      return [skillDest, claudeMd];
    },
    installGlobal: (opts) => {
      const globalSkill = join(homedir(), ".claude", "skills", "motion-ui");
      copySkillPackage(globalSkill, opts);
      return [globalSkill];
    },
  },
  {
    id: "cursor",
    name: "Cursor",
    detect: (cwd = process.cwd()) => {
      return (
        existsSync(join(homedir(), ".cursor")) ||
        existsSync(join(cwd, ".cursor")) ||
        existsSync(join(cwd, ".cursorrules")) ||
        (platform() === "darwin" && existsSync("/Applications/Cursor.app"))
      );
    },
    installProject: (cwd, opts) => {
      const skillDest = join(cwd, ".agents", "skills", "motion-ui");
      copySkillPackage(skillDest, opts);

      const ruleFile = join(cwd, ".cursor", "rules", "motion-ui.mdc");
      const ruleMdc = [
        "---",
        "description: Motion UI animated components library and design system",
        "globs: **/*.{tsx,jsx,ts,js,css}",
        "alwaysApply: false",
        "---",
        "",
        "# Motion UI Integration",
        "",
        "When building animated UI components, widgets, or craft surfaces:",
        "1. Check for latest skill version before activation: `node .agents/skills/motion-ui/bin/updater.mjs --silent`.",
        "2. Consult `.agents/skills/motion-ui/SKILL.md` and `.agents/skills/motion-ui/catalog.json`.",
        "3. Provide required component source code and shared utilities (`@/lib/styles`, `@/lib/ease`, `@/lib/utils`, `@/lib/hooks/*`).",
        "4. Follow the 6 style presets (minimal, origin, enterprise, glow, ios, brutalist) as defined in `lib/styles.ts`.",
      ].join("\n");

      if (!opts.dryRun) {
        mkdirSync(dirname(ruleFile), { recursive: true });
        writeFileSync(ruleFile, ruleMdc + "\n");
      }
      return [skillDest, ruleFile];
    },
    installGlobal: (opts) => {
      const globalDest = join(homedir(), ".cursor", "skills", "motion-ui");
      copySkillPackage(globalDest, opts);
      return [globalDest];
    },
  },
  {
    id: "windsurf",
    name: "Windsurf",
    detect: (cwd = process.cwd()) => {
      return (
        existsSync(join(homedir(), ".codeium", "windsurf")) ||
        existsSync(join(homedir(), ".windsurf")) ||
        existsSync(join(cwd, ".windsurf")) ||
        existsSync(join(cwd, ".windsurfrules")) ||
        (platform() === "darwin" && existsSync("/Applications/Windsurf.app"))
      );
    },
    installProject: (cwd, opts) => {
      const skillDest = join(cwd, ".agents", "skills", "motion-ui");
      copySkillPackage(skillDest, opts);

      const rulesFile = join(cwd, ".windsurf", "rules", "motion-ui.md");
      const ruleContent = [
        "# Motion UI Rules",
        "When user asks for animations or UI components:",
        "- Check for updates: `node .agents/skills/motion-ui/bin/updater.mjs --silent`",
        "- Consult `.agents/skills/motion-ui/SKILL.md`",
        "- Include required shared utilities from `lib/` and respect reduced-motion preferences.",
      ].join("\n");

      if (!opts.dryRun) {
        mkdirSync(dirname(rulesFile), { recursive: true });
        writeFileSync(rulesFile, ruleContent + "\n");
      }
      return [skillDest, rulesFile];
    },
    installGlobal: (opts) => {
      const globalDest = join(homedir(), ".codeium", "windsurf", "skills", "motion-ui");
      copySkillPackage(globalDest, opts);
      return [globalDest];
    },
  },
  {
    id: "codex",
    name: "Codex (CLI + App)",
    detect: (cwd = process.cwd()) => {
      return (
        existsSync(join(homedir(), ".codex")) ||
        existsSync(join(cwd, ".codex")) ||
        existsSync(join(cwd, "agents", "openai.yaml"))
      );
    },
    installProject: (cwd, opts) => {
      const skillDest = join(cwd, ".agents", "skills", "motion-ui");
      copySkillPackage(skillDest, opts);
      return [skillDest];
    },
    installGlobal: (opts) => {
      const globalDest = join(homedir(), ".codex", "skills", "motion-ui");
      copySkillPackage(globalDest, opts);
      return [globalDest];
    },
  },
  {
    id: "antigravity",
    name: "Antigravity",
    detect: (cwd = process.cwd()) => {
      return (
        existsSync(join(homedir(), ".gemini", "antigravity")) ||
        existsSync(join(homedir(), ".config", "antigravity")) ||
        existsSync(join(cwd, ".agents"))
      );
    },
    installProject: (cwd, opts) => {
      const skillDest = join(cwd, ".agents", "skills", "motion-ui");
      copySkillPackage(skillDest, opts);
      return [skillDest];
    },
    installGlobal: (opts) => {
      const globalDest = join(homedir(), ".gemini", "antigravity", "skills", "motion-ui");
      copySkillPackage(globalDest, opts);
      return [globalDest];
    },
  },
  {
    id: "opencode",
    name: "OpenCode",
    detect: (cwd = process.cwd()) => {
      return (
        existsSync(join(homedir(), ".config", "opencode")) ||
        existsSync(join(cwd, "opencode.json")) ||
        existsSync(join(cwd, ".opencode"))
      );
    },
    installProject: (cwd, opts) => {
      const skillDest = join(cwd, ".opencode", "skills", "motion-ui");
      copySkillPackage(skillDest, opts);
      return [skillDest];
    },
    installGlobal: (opts) => {
      const globalDest = join(homedir(), ".config", "opencode", "skills", "motion-ui");
      copySkillPackage(globalDest, opts);
      return [globalDest];
    },
  },
  {
    id: "copilot",
    name: "GitHub Copilot",
    detect: (cwd = process.cwd()) => {
      return (
        existsSync(join(cwd, ".github")) ||
        existsSync(join(cwd, ".vscode")) ||
        existsSync(join(homedir(), ".config", "github-copilot"))
      );
    },
    installProject: (cwd, opts) => {
      const skillDest = join(cwd, ".agents", "skills", "motion-ui");
      copySkillPackage(skillDest, opts);

      const copilotFile = join(cwd, ".github", "copilot-instructions.md");
      const rule = [
        "## Motion UI Skill Integration",
        "Use the Motion UI skill located at `.agents/skills/motion-ui/SKILL.md` for animated components.",
        "On activation, check version: `node .agents/skills/motion-ui/bin/updater.mjs --silent`.",
      ].join("\n");
      upsertRuleContent(copilotFile, "MOTION_UI_SKILL", rule, opts);
      return [skillDest, copilotFile];
    },
    installGlobal: () => [],
  },
  {
    id: "cline-roo",
    name: "Cline & Roo Code",
    detect: (cwd = process.cwd()) => {
      return (
        existsSync(join(cwd, ".clinerules")) ||
        existsSync(join(cwd, ".roomodes")) ||
        existsSync(join(cwd, ".roo"))
      );
    },
    installProject: (cwd, opts) => {
      const skillDest = join(cwd, ".agents", "skills", "motion-ui");
      copySkillPackage(skillDest, opts);

      const clineFile = join(cwd, ".clinerules");
      const rule = [
        "## Motion UI Animated Components",
        "- Skill instructions and catalog: `.agents/skills/motion-ui/SKILL.md`",
        "- Check for updates before activation: `node .agents/skills/motion-ui/bin/updater.mjs --silent`",
      ].join("\n");
      upsertRuleContent(clineFile, "MOTION_UI_SKILL", rule, opts);
      return [skillDest, clineFile];
    },
    installGlobal: () => [],
  },
];

function ask(question) {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer.trim());
    });
  });
}

/**
 * Main interactive installer entrypoint.
 */
export async function runInstaller(args = []) {
  const cwd = process.cwd();
  const isGlobal = args.includes("--global");
  const isAll = args.includes("--all") || args.includes("-y") || args.includes("--yes");
  const isDryRun = args.includes("--dry-run");
  const isList = args.includes("--list");

  console.log();
  console.log(c("bold", "  ┌──────────────────────────────────────────────┐"));
  console.log(
    c("bold", "  │") +
      c("cyan", "  motion-ui") +
      c("dim", " — AI Agent Skill Auto-Installer  ") +
      c("bold", "│")
  );
  console.log(c("bold", "  └──────────────────────────────────────────────┘"));
  console.log();

  console.log(c("bold", "  Detecting AI harnesses..."));
  console.log();

  const detected = AI_HARNESSES.filter((h) => {
    try {
      return h.detect(cwd);
    } catch {
      return false;
    }
  });

  if (detected.length === 0) {
    console.log(c("yellow", "  No specific AI harnesses detected in current workspace."));
    console.log(c("dim", "  Installing to universal standard: .agents/skills/motion-ui/"));
    console.log();
    const defaultDest = join(cwd, ".agents", "skills", "motion-ui");
    if (!isDryRun) {
      copySkillPackage(defaultDest);
      console.log(c("green", "  ✓ Universal Skill") + c("dim", ` → ${defaultDest}`));
    }
    return;
  }

  for (let i = 0; i < detected.length; i++) {
    console.log(c("green", `  [${i + 1}] ✓ ${detected[i].name}`));
  }
  console.log();

  if (isList) {
    return;
  }

  let selected = detected;

  if (!isAll && process.stdin.isTTY) {
    const prompt = c("bold", `  Install to all ${detected.length} detected harnesses? [Y/n] `);
    const answer = await ask(prompt);
    if (answer && answer.toLowerCase().startsWith("n")) {
      const selectAnswer = await ask(c("bold", "  Enter numbers to install (e.g. 1, 3): "));
      const indices = selectAnswer
        .split(",")
        .map((s) => parseInt(s.trim(), 10) - 1)
        .filter((idx) => idx >= 0 && idx < detected.length);
      if (indices.length > 0) {
        selected = indices.map((idx) => detected[idx]);
      }
    }
  }

  console.log(c("bold", `  Installing Motion UI skill (${isGlobal ? "global" : "project-scoped"})...`));
  console.log();

  const copiedDirs = new Set();
  const installOpts = { dryRun: isDryRun, copiedDirs };
  const installedPaths = [];
  for (const tool of selected) {
    try {
      const paths = isGlobal ? tool.installGlobal(installOpts) : tool.installProject(cwd, installOpts);
      for (const p of paths) {
        console.log(c("green", `  ✓ ${tool.name}`) + c("dim", ` → ${p}`));
        installedPaths.push(p);
      }
    } catch (err) {
      console.log(c("red", `  ✗ ${tool.name}: ${err.message}`));
    }
  }

  console.log();
  console.log(c("bold", "  🎉 Done! Motion UI is installed and configured."));
  console.log();
  console.log(c("dim", "  • Auto-update check is enabled on skill activation."));
  console.log(c("dim", "  • 339 animated components and 6 style presets ready."));
  console.log(c("dim", "  • Run manually anytime: node .agents/skills/motion-ui/bin/updater.mjs"));
  console.log();
  console.log(c("cyan", "  Just ask your agent:") + c("bold", ' "Build an animated card using motion-ui"'));
  console.log();
}

if (process.argv[1] === __filename) {
  runInstaller(process.argv.slice(2)).catch((err) => {
    console.error(c("red", `\nInstaller error: ${err.message}\n`));
    process.exit(1);
  });
}
