import { test, expect } from '@playwright/test';

test.describe('Internationalization', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('starts in English by default', async ({ page }) => {
    await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  });

  test('changes the interface to Spanish', async ({ page }) => {
    await page.getByRole('button', { name: /spanish/i }).click();

    await expect(page.locator('html')).toHaveAttribute('lang', 'es');
    await expect(
      page.getByRole('button', { name: /español/i }),
    ).toHaveAttribute('aria-pressed', 'true');
    await expect(page.getByRole('button', { name: /inglés/i })).toHaveAttribute(
      'aria-pressed',
      'false',
    );
  });

  test('changes the interface back to English', async ({ page }) => {
    await page.getByRole('button', { name: /spanish/i }).click();
    await expect(page.locator('html')).toHaveAttribute('lang', 'es');

    await page.getByRole('button', { name: /inglés/i }).click();
    await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  });

  test('persists the selected language after reload', async ({ page }) => {
    await page.getByRole('button', { name: /spanish/i }).click();

    await page.reload();

    await expect(page.locator('html')).toHaveAttribute('lang', 'es');
    await expect(
      page.getByRole('button', { name: /español/i }),
    ).toHaveAttribute('aria-pressed', 'true');
  });
});
