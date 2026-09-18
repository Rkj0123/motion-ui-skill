#!/usr/bin/env node

/**
 * Motion UI - Unified CLI
 * Supports:
 * - npx motion-ui-skill (auto-detects and installs skill)
 * - motion-ui-skill update (checks upstream and updates skill)
 * - motion-ui-skill search <query> (searches 339 components)
 * - motion-ui-skill list [category] (lists components)
 * - motion-ui-skill add <slug> (installs component into project)
 */

import { existsSync, readFileSync, mkdirSync, writeFileSync, lstatSync, realpathSync } from "fs";
import { join, dirname, resolve, isAbsolute, sep } from "path";
import { fileURLToPath } from "url";
import { runInstaller } from "./installer.mjs";
import { checkAndAutoUpdate, getLocalVersion } from "./updater.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const SKILL_ROOT = resolve(__dirname, "..");

function loadCatalog() {
  const catalogPath = join(SKILL_ROOT, "catalog.json");
  if (!existsSync(catalogPath)) {
    console.error("Error: catalog.json not found in " + SKILL_ROOT);
    process.exit(1);
  }
  return JSON.parse(readFileSync(catalogPath, "utf-8"));
}

function printHelp() {
  const version = getLocalVersion(SKILL_ROOT);
  console.log(`
Motion UI Skill CLI (v${version})
Universal animated UI component library for React and Next.js.

USAGE:
  npx motion-ui-skill                 Auto-detect AI tools and install skill
  motion-ui-skill <command> [options]

COMMANDS:
  install, setup        Auto-detect AI harnesses and install skill
                        Flags: --all / -y, --global, --dry-run, --list
  update                Check upstream for updates and auto-update
                        Flags: --force, --silent
  search <query>        Search 339 components by name, tag, or description
  list [category]       List components (motion, agents, blocks, craft)
  add <slug>            Install component files into your project
                        Flags: --dest <dir> (default: ./src), --style <preset>

OPTIONS:
  -v, --version         Print version
  -h, --help            Print help
`);
}

function handleSearch(query) {
  if (!query) {
    console.log("Please specify a search term: motion-ui-skill search <query>");
    return;
  }
  const catalog = loadCatalog();
  const q = query.toLowerCase();
  const matches = Object.values(catalog.components || {}).filter(
    (c) =>
      c.slug.toLowerCase().includes(q) ||
      c.name.toLowerCase().includes(q) ||
      c.description.toLowerCase().includes(q) ||
      (c.category && c.category.toLowerCase().includes(q))
  );

  console.log(`\nFound ${matches.length} matching component(s):\n`);
  for (const item of matches) {
    const deps = item.dependencies?.length ? ` [deps: ${item.dependencies.join(", ")}]` : "";
    console.log(`• \x1b[36m${item.name}\x1b[0m (\x1b[33m${item.slug}\x1b[0m) [${item.category}]${deps}`);
    console.log(`  ${item.description}\n`);
  }
}

function handleList(category) {
  const catalog = loadCatalog();
  const components = Object.values(catalog.components || {});
  const filtered = category
    ? components.filter((c) => c.category?.toLowerCase() === category.toLowerCase())
    : components;

  console.log(`\n📦 Motion UI Components (Total: ${filtered.length})\n`);
  const categories = ["motion", "agents", "blocks", "craft"];

  for (const cat of categories) {
    const items = filtered.filter((c) => c.category === cat);
    if (!items.length) continue;
    console.log(`=== ${cat.toUpperCase()} (${items.length} components) ===`);
    for (const item of items) {
      console.log(`  • \x1b[33m${item.slug.padEnd(28)}\x1b[0m ${item.name}`);
    }
    console.log();
  }
}

export function safePath(root, relative) {
  if (typeof relative !== "string" || !relative || isAbsolute(relative)) {
    throw new Error(`Path must stay relative to ${root}: ${relative}`);
  }

  const parts = relative.split(/[/\\]/);
  if (parts.includes("..")) {
    throw new Error(`Path must stay relative to ${root}: ${relative}`);
  }

  const resolvedRoot = resolve(root);
  const target = resolve(resolvedRoot, ...parts);
  if (target !== resolvedRoot && !target.startsWith(resolvedRoot + sep)) {
    throw new Error(`Path escapes ${resolvedRoot}: ${relative}`);
  }

  let current = resolvedRoot;
  for (const part of parts) {
    current = join(current, part);
    if (existsSync(current) && lstatSync(current).isSymbolicLink()) {
      throw new Error(`Symlinks are not allowed in install paths: ${relative}`);
    }
  }
  return target;
}

export function copyComponentFiles(comp, destDir, stylePreset = null) {
  const files = [...(comp.component_files || []), ...(comp.util_files || [])];
  if (stylePreset) {
    if (!files.includes("lib/styles.ts")) files.push("lib/styles.ts");
    if (!files.includes("lib/ease.ts")) files.push("lib/ease.ts");
  }

  const plan = files.map((rel) => {
    const src = safePath(SKILL_ROOT, rel);
    const dest = safePath(destDir, rel);
    if (!existsSync(src) || !lstatSync(src).isFile()) {
      throw new Error(`Required source file missing: ${src}`);
    }
    return { rel, src, dest };
  });

  for (const { src, dest } of plan) {
    mkdirSync(dirname(dest), { recursive: true });
    writeFileSync(dest, readFileSync(src));
  }
  return plan.map(({ rel }) => rel);
}

function handleAdd(slug, args) {
  if (!slug) {
    console.log("Please specify a component slug: motion-ui-skill add <slug>");
    return;
  }
  const catalog = loadCatalog();
  const comp = catalog.components?.[slug];
  if (!comp) {
    console.error(`Error: Component '${slug}' not found in catalog.`);
    process.exit(1);
  }

  const destIdx = args.indexOf("--dest");
  const destDir = resolve(destIdx !== -1 && args[destIdx + 1] ? args[destIdx + 1] : "./src");

  console.log(`\n🚀 Installing \x1b[36m${comp.name}\x1b[0m (${slug}) into: ${destDir}\n`);

  const styleIdx = args.indexOf("--style");
  const stylePreset = styleIdx !== -1 ? args[styleIdx + 1] : null;
  const validStyles = ["minimal", "origin", "enterprise", "glow", "ios", "brutalist"];
  if (stylePreset && !validStyles.includes(stylePreset)) {
    console.error(`Error: Unknown style preset '${stylePreset}'. Valid presets: ${validStyles.join(", ")}`);
    process.exit(1);
  }

  for (const rel of copyComponentFiles(comp, destDir, stylePreset)) {
    console.log(`  \x1b[32m✓\x1b[0m Copied ${rel}`);
  }

  if (stylePreset) {
    console.log(`  \x1b[32m✓\x1b[0m Included style preset tokens for '${stylePreset}'`);
  }

  if (comp.dependencies?.length) {
    console.log(`\n📦 Required dependencies:`);
    console.log(`  npm install ${comp.dependencies.join(" ")}\n`);
  }
  console.log(`✨ Component '${slug}' installed successfully!\n`);
}

async function main() {
  const args = process.argv.slice(2);
  const command = args[0];

  if (!command || command.startsWith("-")) {
    if (args.includes("-v") || args.includes("--version")) {
      console.log(`v${getLocalVersion(SKILL_ROOT)}`);
      return;
    }
    if (args.includes("-h") || args.includes("--help")) {
      printHelp();
      return;
    }
    // Default action without arguments: Run the installer!
    await runInstaller(args);
    return;
  }

  switch (command) {
    case "install":
    case "setup":
      await runInstaller(args.slice(1));
      break;
    case "update":
    case "check-update": {
      const force = args.includes("--force") || args.includes("-f");
      const silent = args.includes("--silent") || args.includes("-s");
      await checkAndAutoUpdate({ force, silent, skillRoot: SKILL_ROOT });
      break;
    }
    case "search":
      handleSearch(args[1]);
      break;
    case "list":
      handleList(args[1]);
      break;
    case "add":
    case "install-component":
      handleAdd(args[1], args.slice(2));
      break;
    default:
      printHelp();
      break;
  }
}

if (process.argv[1] && realpathSync(process.argv[1]) === __filename) {
  main().catch((err) => {
    console.error("Error:", err.message);
    process.exit(1);
  });
}
