import { test, expect } from '@playwright/test';

test.describe('Theme system', () => {
  test('changes to dark theme', async ({ page }) => {
    await page.goto('/');

    await page
      .getByRole('button', {
        name: 'Dark',
      })
      .click();

    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  });

  test('changes to light theme', async ({ page }) => {
    await page.goto('/');

    await page
      .getByRole('button', {
        name: 'Dark',
      })
      .click();

    await page
      .getByRole('button', {
        name: 'Light',
      })
      .click();

    await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
  });

  test('persists dark theme after reload', async ({ page }) => {
    await page.goto('/');

    await page
      .getByRole('button', {
        name: 'Dark',
      })
      .click();

    await page.reload();

    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');

    const storedTheme = await page.evaluate(() => {
      return localStorage.getItem('portfolio-theme');
    });

    expect(storedTheme).toBe('dark');
  });

  test('supports system theme', async ({ page }) => {
    await page.goto('/');

    await page
      .getByRole('button', {
        name: 'System',
      })
      .click();

    const theme = await page.evaluate(() => {
      return document.documentElement.dataset.theme;
    });

    expect(['light', 'dark']).toContain(theme);

    await expect(
      page.getByRole('button', {
        name: 'System',
      }),
    ).toHaveAttribute('aria-pressed', 'true');
  });
});
