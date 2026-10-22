import { chromium } from "playwright";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { spawn } from "child_process";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "../../");
const OUTPUT_RAW = path.resolve(ROOT, "promo/output/raw");

fs.mkdirSync(OUTPUT_RAW, { recursive: true });

async function smoothMove(page, x, y, steps = 25) {
  await page.mouse.move(x, y, { steps });
}

async function startServerIfNeeded() {
  // Check if server is already running on port 5173
  try {
    const res = await fetch("http://localhost:5173/promo/before");
    if (res.ok) {
      console.log("Found existing server running on http://localhost:5173");
      return null;
    }
  } catch (e) {
    // Server not running, let us start vite preview
  }

  console.log("Starting preview server on http://localhost:5173...");
  const server = spawn("npx", ["vite", "preview", "--port", "5173", "--host"], {
    cwd: ROOT,
    stdio: "inherit",
  });

  // Wait for server to become responsive
  for (let i = 0; i < 30; i++) {
    try {
      const res = await fetch("http://localhost:5173/");
      if (res.status < 500) {
        console.log("Server is ready on port 5173");
        break;
      }
    } catch (e) {
      await new Promise((r) => setTimeout(r, 250));
    }
  }

  return server;
}

async function recordScenario(browser, name, runner) {
  console.log(`\n🎬 Recording: ${name}...`);
  const tempDir = path.resolve(OUTPUT_RAW, `temp_${Date.now()}`);
  fs.mkdirSync(tempDir, { recursive: true });

  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 },
    recordVideo: {
      dir: tempDir,
      size: { width: 1920, height: 1080 },
    },
    reducedMotion: "no-preference",
    colorScheme: "dark",
  });

  const page = await context.newPage();

  try {
    await runner(page);
  } catch (err) {
    console.error(`Error during recording ${name}:`, err);
  }

  const video = page.video();
  await context.close();

  if (video) {
    const videoPath = await video.path();
    const finalPath = path.resolve(OUTPUT_RAW, `${name}.webm`);
    fs.copyFileSync(videoPath, finalPath);
    console.log(`✅ Saved: ${finalPath} (${(fs.statSync(finalPath).size / 1024).toFixed(1)} KB)`);
  }

  fs.rmSync(tempDir, { recursive: true, force: true });
}

async function main() {
  const server = await startServerIfNeeded();

  const browser = await chromium.launch({
    headless: true,
  });

  try {
    // 01-before
    await recordScenario(browser, "01-before", async (page) => {
      await page.goto("http://localhost:5173/promo/before");
      await page.waitForSelector("[data-testid=\"before-dashboard\"]");
      await page.waitForTimeout(1000);

      await smoothMove(page, 550, 200, 20);
      await page.waitForTimeout(600);

      const searchInput = page.locator("[data-testid=\"before-search\"]");
      const box = await searchInput.boundingBox();
      if (box) {
        await smoothMove(page, box.x + box.width / 2, box.y + box.height / 2, 20);
        await searchInput.click();
        await page.keyboard.type("agent-04", { delay: 60 });
        await page.waitForTimeout(500);
      }

      const row = page.locator("[data-testid=\"before-task-row-0\"]");
      const rowBox = await row.boundingBox();
      if (rowBox) {
        await smoothMove(page, rowBox.x + rowBox.width / 2, rowBox.y + rowBox.height / 2, 20);
        await page.waitForTimeout(500);
      }

      await page.waitForTimeout(1000);
    });

    // 02-install
    await recordScenario(browser, "02-install", async (page) => {
      await page.goto("http://localhost:5173/promo/install");
      await page.waitForSelector("[data-testid=\"install-showcase\"]");
      await page.waitForTimeout(3800);
      await smoothMove(page, 960, 680, 25);
      await page.waitForTimeout(1000);
    });

    // 03-after
    await recordScenario(browser, "03-after", async (page) => {
      await page.goto("http://localhost:5173/promo/after");
      await page.waitForSelector("[data-testid=\"after-dashboard\"]");
      await page.waitForTimeout(900);

      const island = page.locator("[data-testid=\"after-dynamic-island\"]");
      const islandBox = await island.boundingBox();
      if (islandBox) {
        await smoothMove(page, islandBox.x + islandBox.width / 2, islandBox.y + islandBox.height / 2, 20);
        await page.waitForTimeout(400);
        await island.click();
        await page.waitForTimeout(1200);
      }

      const metricCards = page.locator("[data-testid=\"after-metric-cards\"] > div");
      const cardBox = await metricCards.first().boundingBox();
      if (cardBox) {
        await smoothMove(page, cardBox.x + cardBox.width / 2, cardBox.y + cardBox.height / 2, 20);
        await page.waitForTimeout(700);
      }

      const glowBtn = page.locator("[data-testid=\"after-glow-button\"] button");
      const glowBox = await glowBtn.boundingBox();
      if (glowBox) {
        await smoothMove(page, glowBox.x + 10, glowBox.y + glowBox.height / 2, 15);
        await smoothMove(page, glowBox.x + glowBox.width - 10, glowBox.y + glowBox.height / 2, 20);
        await page.waitForTimeout(500);
      }

      const approveBtn = page.locator("[data-testid=\"after-tool-approval\"] button:has-text(\"Approve\")");
      if (await approveBtn.isVisible()) {
        const approveBox = await approveBtn.boundingBox();
        if (approveBox) {
          await smoothMove(page, approveBox.x + approveBox.width / 2, approveBox.y + approveBox.height / 2, 20);
          await page.waitForTimeout(400);
          await approveBtn.click();
          await page.waitForTimeout(1800);
        }
      }

      await page.waitForTimeout(800);
    });

    // 04-components
    await recordScenario(browser, "04-components", async (page) => {
      await page.goto("http://localhost:5173/promo/components");
      await page.waitForSelector("[data-testid=\"component-showcase\"]");
      await page.waitForTimeout(800);

      const island = page.locator("[data-testid=\"showcase-dynamic-island\"]");
      const islandBox = await island.boundingBox();
      if (islandBox) {
        await smoothMove(page, islandBox.x + islandBox.width / 2, islandBox.y + islandBox.height / 2, 20);
        await page.mouse.click(islandBox.x + islandBox.width / 2, islandBox.y + islandBox.height / 2);
        await page.waitForTimeout(800);
      }

      const glowBtn = page.locator("[data-testid=\"showcase-glow-button\"] button");
      const glowBox = await glowBtn.boundingBox();
      if (glowBox) {
        await smoothMove(page, glowBox.x + glowBox.width / 2 - 20, glowBox.y + 10, 20);
        await smoothMove(page, glowBox.x + glowBox.width / 2 + 20, glowBox.y + glowBox.height - 10, 20);
        await page.waitForTimeout(600);
      }

      const approveBtn = page.locator("[data-testid=\"showcase-tool-approval\"] button:has-text(\"Approve\")");
      if (await approveBtn.isVisible()) {
        const btnBox = await approveBtn.boundingBox();
        if (btnBox) {
          await smoothMove(page, btnBox.x + btnBox.width / 2, btnBox.y + btnBox.height / 2, 20);
          await approveBtn.click();
          await page.waitForTimeout(1600);
        }
      }

      await page.waitForTimeout(1000);
    });

    // 05-agent-ui
    await recordScenario(browser, "05-agent-ui", async (page) => {
      await page.goto("http://localhost:5173/promo/agent-ui");
      await page.waitForSelector("[data-testid=\"agent-ui-showcase\"]");
      await page.waitForTimeout(800);

      const actBox = await page.locator("[data-testid=\"agent-activity-card\"]").boundingBox();
      if (actBox) {
        await smoothMove(page, actBox.x + actBox.width / 2, actBox.y + 200, 25);
        await page.waitForTimeout(1000);
      }

      const approveBtn = page.locator("[data-testid=\"agent-approval-card\"] button:has-text(\"Approve\")");
      if (await approveBtn.isVisible()) {
        const approveBox = await approveBtn.boundingBox();
        if (approveBox) {
          await smoothMove(page, approveBox.x + approveBox.width / 2, approveBox.y + approveBox.height / 2, 20);
          await approveBtn.click();
          await page.waitForTimeout(1800);
        }
      }

      await page.waitForTimeout(1000);
    });

    // 06-styles
    await recordScenario(browser, "06-styles", async (page) => {
      await page.goto("http://localhost:5173/promo/styles");
      await page.waitForSelector("[data-testid=\"style-preset-showcase\"]");
      await page.waitForTimeout(400);

      const presets = ["origin", "enterprise", "glow", "ios", "brutalist", "minimal"];
      for (const preset of presets) {
        const btn = page.locator(`[data-testid="preset-btn-${preset}"]`);
        const box = await btn.boundingBox();
        if (box) {
          await smoothMove(page, box.x + box.width / 2, box.y + box.height / 2, 12);
          await btn.click();
          await page.waitForTimeout(750);
        }
      }

      await page.waitForTimeout(600);
    });

    // 07-finale
    await recordScenario(browser, "07-finale", async (page) => {
      await page.goto("http://localhost:5173/promo/finale");
      await page.waitForSelector("[data-testid=\"finale-card\"]");
      await page.waitForTimeout(1200);

      await smoothMove(page, 960, 720, 30);
      await page.waitForTimeout(1000);

      await smoothMove(page, 960, 800, 20);
      await page.waitForTimeout(1200);
    });

  } finally {
    await browser.close();
    if (server) {
      server.kill();
    }
  }

  console.log("\n🎉 All 7 promotional raw takes successfully recorded!");
}

main().catch((err) => {
  console.error("Fatal recording error:", err);
  process.exit(1);
});
