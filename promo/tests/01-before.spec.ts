import { test, expect } from "@playwright/test";

async function smoothMove(page, x, y, steps = 25) {
  await page.mouse.move(x, y, { steps });
}


test("record-01-before", async ({ page }) => {
  await page.goto("/promo/before");
  await page.waitForSelector("[data-testid="before-dashboard"]");
  await page.waitForTimeout(1000);

  // Smooth mouse move over metric cards
  await smoothMove(page, 450, 180, 20);
  await page.waitForTimeout(600);

  // Move to search bar and type
  const searchInput = page.locator("[data-testid="before-search"]");
  const box = await searchInput.boundingBox();
  if (box) {
    await smoothMove(page, box.x + box.width / 2, box.y + box.height / 2, 20);
    await searchInput.click();
    await page.keyboard.type("agent-04", { delay: 50 });
    await page.waitForTimeout(500);
  }

  // Hover over deploy button
  const cta = page.locator("[data-testid="before-cta"]");
  const ctaBox = await cta.boundingBox();
  if (ctaBox) {
    await smoothMove(page, ctaBox.x + ctaBox.width / 2, ctaBox.y + ctaBox.height / 2, 20);
    await page.waitForTimeout(500);
  }

  // Hover over task row
  const row = page.locator("[data-testid="before-task-row-0"]");
  const rowBox = await row.boundingBox();
  if (rowBox) {
    await smoothMove(page, rowBox.x + rowBox.width / 2, rowBox.y + rowBox.height / 2, 20);
    await page.waitForTimeout(500);
  }

  await page.waitForTimeout(1000);
});
