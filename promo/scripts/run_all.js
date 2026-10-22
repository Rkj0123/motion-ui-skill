import { spawnSync } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "../../");

console.log("================================================================");
console.log("🚀 STARTING FULL MOTION UI SKILL PROMOTIONAL CAMPAIGN PIPELINE");
console.log("================================================================");

// Step 1: Build Vite Production Assets
console.log("\n[Step 1/3] Building production demo pages...");
const build = spawnSync("npx", ["vite", "build"], { cwd: ROOT, stdio: "inherit" });
if (build.status !== 0) {
  console.error("❌ Vite build failed!");
  process.exit(1);
}

// Step 2: Record all Playwright Takes
console.log("\n[Step 2/3] Operating virtual camera with Playwright across 7 scenes...");
const record = spawnSync("node", ["promo/scripts/record.js"], { cwd: ROOT, stdio: "inherit" });
if (record.status !== 0) {
  console.error("❌ Playwright recording failed!");
  process.exit(1);
}

// Step 3: Assemble Videos & Social Deliverables
console.log("\n[Step 3/3] Assembling videos, GIF, thumbnails, and copy with FFmpeg...");
const assemble = spawnSync("python3", ["promo/scripts/build_videos.py"], { cwd: ROOT, stdio: "inherit" });
if (assemble.status !== 0) {
  console.error("❌ Video assembly failed!");
  process.exit(1);
}

console.log("\n================================================================");
console.log("🎉 PROMOTIONAL CAMPAIGN GENERATION COMPLETE!");
console.log("================================================================");
console.log("Deliverables generated:");
console.log("  • 16:9 Master Video:     promo/output/final/motion-ui-launch-16x9.mp4");
console.log("  • 9:16 Vertical Video:   promo/output/final/motion-ui-launch-9x16.mp4");
console.log("  • 1:1 Square Video:      promo/output/final/motion-ui-launch-square.mp4");
console.log("  • README Before/After:   assets/motion-ui-comparison.gif & .mp4");
console.log("  • Social Thumbnails:     promo/output/thumbnails/ (X & Vertical)");
console.log("  • Launch Copy:           promo/output/copy/ (X, Reddit, Followups)");
console.log("================================================================\n");
