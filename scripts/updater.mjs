#!/usr/bin/env node
export * from "../bin/updater.mjs";
import { checkAndAutoUpdate } from "../bin/updater.mjs";

const force = process.argv.includes("--force") || process.argv.includes("-f");
const silent = process.argv.includes("--silent") || process.argv.includes("-s");
checkAndAutoUpdate({ force, silent })
  .then(() => process.exit(0))
  .catch(() => process.exit(0));
