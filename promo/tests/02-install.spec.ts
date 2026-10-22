import { test, expect } from "@playwright/test";

async function smoothMove(page, x, y, steps = 25) {
  await page.mouse.move(x, y, { steps });
}


test("record-02-install", async ({ page }) => {
  await page.goto("/promo/install");
  await page.waitForSelector("[data-testid="install-showcase"]");
  await page.waitForTimeout(800);

  // Wait for typing and skill discovery sequence
  await page.waitForTimeout(3000);

  // Move mouse to activated card
  await smoothMove(page, 960, 680, 25);
  await page.waitForTimeout(1200);
});
