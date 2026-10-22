import { test, expect } from "@playwright/test";

async function smoothMove(page, x, y, steps = 25) {
  await page.mouse.move(x, y, { steps });
}


test("record-04-components", async ({ page }) => {
  await page.goto("/promo/components");
  await page.waitForSelector("[data-testid="component-showcase"]");
  await page.waitForTimeout(800);

  // 1. Dynamic Island interaction
  const island = page.locator("[data-testid="showcase-dynamic-island"]");
  const islandBox = await island.boundingBox();
  if (islandBox) {
    await smoothMove(page, islandBox.x + islandBox.width / 2, islandBox.y + islandBox.height / 2, 20);
    await page.mouse.click(islandBox.x + islandBox.width / 2, islandBox.y + islandBox.height / 2);
    await page.waitForTimeout(800);
  }

  // 2. Magnetic Glow Button interaction
  const glowBtn = page.locator("[data-testid="showcase-glow-button"] button");
  const glowBox = await glowBtn.boundingBox();
  if (glowBox) {
    await smoothMove(page, glowBox.x + glowBox.width / 2 - 20, glowBox.y + 5, 20);
    await smoothMove(page, glowBox.x + glowBox.width / 2 + 20, glowBox.y + glowBox.height - 5, 20);
    await page.waitForTimeout(600);
  }

  // 3. Tool Approval card approval
  const approveBtn = page.locator("[data-testid="showcase-tool-approval"] button:has-text("Approve")");
  if (await approveBtn.isVisible()) {
    const btnBox = await approveBtn.boundingBox();
    if (btnBox) {
      await smoothMove(page, btnBox.x + btnBox.width / 2, btnBox.y + btnBox.height / 2, 20);
      await approveBtn.click();
      await page.waitForTimeout(1500);
    }
  }

  await page.waitForTimeout(1000);
});
