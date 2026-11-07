import { test, expect } from '@playwright/test';

test.describe('CV downloads', () => {
  test('downloads the English CV', async ({ page }) => {
    await page.goto('/');

    const downloadPromise = page.waitForEvent('download');

    await page
      .locator('#home')
      .getByRole('link', { name: /download cv/i })
      .click();

    const download = await downloadPromise;

    expect(download.suggestedFilename()).toBe('Angel_David_Nunez_CV_EN.pdf');
  });

  test('downloads the Spanish CV', async ({ page }) => {
    await page.goto('/');

    await page.getByRole('button', { name: /spanish/i }).click();
    await expect(page.locator('html')).toHaveAttribute('lang', 'es');

    const downloadPromise = page.waitForEvent('download');

    await page
      .locator('#home')
      .getByRole('link', { name: /descargar cv/i })
      .click();

    const download = await downloadPromise;

    expect(download.suggestedFilename()).toBe('Angel_David_Nunez_CV_ES.pdf');
  });
});
