import { test, expect } from "@playwright/test";

async function smoothMove(page, x, y, steps = 25) {
  await page.mouse.move(x, y, { steps });
}


test("record-03-after", async ({ page }) => {
  await page.goto("/promo/after");
  await page.waitForSelector("[data-testid="after-dashboard"]");
  await page.waitForTimeout(900);

  // 1. Move to Dynamic Island and click to expand
  const island = page.locator("[data-testid="after-dynamic-island"]");
  const islandBox = await island.boundingBox();
  if (islandBox) {
    await smoothMove(page, islandBox.x + islandBox.width / 2, islandBox.y + islandBox.height / 2, 20);
    await page.waitForTimeout(400);
    await island.click();
    await page.waitForTimeout(1200);
  }

  // 2. Move to Metric Card and hover (demonstrating spring physics)
  const metricCards = page.locator("[data-testid="after-metric-cards"] > div");
  const firstCard = metricCards.first();
  const cardBox = await firstCard.boundingBox();
  if (cardBox) {
    await smoothMove(page, cardBox.x + cardBox.width / 2, cardBox.y + cardBox.height / 2, 20);
    await page.waitForTimeout(700);
  }

  // 3. Move to GlowButton showing magnetic cursor attraction
  const glowBtn = page.locator("[data-testid="after-glow-button"] button");
  const glowBox = await glowBtn.boundingBox();
  if (glowBox) {
    await smoothMove(page, glowBox.x + 10, glowBox.y + glowBox.height / 2, 15);
    await smoothMove(page, glowBox.x + glowBox.width - 10, glowBox.y + glowBox.height / 2, 20);
    await page.waitForTimeout(500);
  }

  // 4. Move to Tool Approval and Approve
  const approveBtn = page.locator("[data-testid="after-tool-approval"] button:has-text("Approve")");
  if (await approveBtn.isVisible()) {
    const approveBox = await approveBtn.boundingBox();
    if (approveBox) {
      await smoothMove(page, approveBox.x + approveBox.width / 2, approveBox.y + approveBox.height / 2, 20);
      await page.waitForTimeout(400);
      await approveBtn.click();
      await page.waitForTimeout(1600);
    }
  }

  await page.waitForTimeout(1000);
});
