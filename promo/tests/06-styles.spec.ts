import { test, expect } from "@playwright/test";

async function smoothMove(page, x, y, steps = 25) {
  await page.mouse.move(x, y, { steps });
}


test("record-06-styles", async ({ page }) => {
  await page.goto("/promo/styles");
  await page.waitForSelector("[data-testid="style-preset-showcase"]");
  await page.waitForTimeout(400);

  const presets = ["origin", "enterprise", "glow", "ios", "brutalist", "minimal"];
  for (const preset of presets) {
    const btn = page.locator(`[data-testid="preset-btn-${preset}"]`);
    const box = await btn.boundingBox();
    if (box) {
      await smoothMove(page, box.x + box.width / 2, box.y + box.height / 2, 12);
      await btn.click();
      await page.waitForTimeout(700);
    }
  }

  await page.waitForTimeout(600);
});
