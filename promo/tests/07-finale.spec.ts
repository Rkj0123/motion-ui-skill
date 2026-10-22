import { test, expect } from "@playwright/test";

async function smoothMove(page, x, y, steps = 25) {
  await page.mouse.move(x, y, { steps });
}


test("record-07-finale", async ({ page }) => {
  await page.goto("/promo/finale");
  await page.waitForSelector("[data-testid="finale-card"]");
  await page.waitForTimeout(1200);

  // Move smoothly across the GitHub card
  await smoothMove(page, 960, 720, 30);
  await page.waitForTimeout(1000);

  // Move to star CTA
  await smoothMove(page, 960, 800, 20);
  await page.waitForTimeout(1200);
});
