import { test, expect } from "@playwright/test";

async function smoothMove(page, x, y, steps = 25) {
  await page.mouse.move(x, y, { steps });
}


test("record-05-agent-ui", async ({ page }) => {
  await page.goto("/promo/agent-ui");
  await page.waitForSelector("[data-testid="agent-ui-showcase"]");
  await page.waitForTimeout(800);

  // Move over Agent Activity stream
  const activityCard = page.locator("[data-testid="agent-activity-card"]");
  const actBox = await activityCard.boundingBox();
  if (actBox) {
    await smoothMove(page, actBox.x + actBox.width / 2, actBox.y + 200, 25);
    await page.waitForTimeout(1000);
  }

  // Move to Tool Approval and Approve
  const approveBtn = page.locator("[data-testid="agent-approval-card"] button:has-text("Approve")");
  if (await approveBtn.isVisible()) {
    const approveBox = await approveBtn.boundingBox();
    if (approveBox) {
      await smoothMove(page, approveBox.x + approveBox.width / 2, approveBox.y + approveBox.height / 2, 20);
      await approveBtn.click();
      await page.waitForTimeout(1600);
    }
  }

  // Move to Streaming Response card
  const streamCard = page.locator("[data-testid="agent-streaming-card"]");
  const streamBox = await streamCard.boundingBox();
  if (streamBox) {
    await smoothMove(page, streamBox.x + streamBox.width / 2, streamBox.y + streamBox.height / 2, 20);
  }

  await page.waitForTimeout(1000);
});
