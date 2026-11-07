import { test, expect } from '@playwright/test';

test.describe('Responsive layout', () => {
  test('does not generate horizontal overflow', async ({ page }) => {
    await page.goto('/');

    await page.waitForLoadState('networkidle');

    const dimensions = await page.evaluate(() => {
      const html = document.documentElement;

      return {
        documentWidth: html.scrollWidth,
        viewportWidth: html.clientWidth,
      };
    });

    console.log('Responsive dimensions:', dimensions);

    // Se permite 1 px por posibles redondeos subpíxel
    // del motor de renderizado.
    expect(
      dimensions.documentWidth,
      `Horizontal overflow detected: ${
        dimensions.documentWidth - dimensions.viewportWidth
      }px`,
    ).toBeLessThanOrEqual(dimensions.viewportWidth + 1);
  });

  test('renders the mobile navigation button', async ({ page }) => {
    await page.setViewportSize({
      width: 390,
      height: 844,
    });

    await page.goto('/');

    await expect(
      page.getByRole('button', {
        name: /open navigation/i,
      }),
    ).toBeVisible();
  });

  test('opens and closes the mobile navigation', async ({ page }) => {
    await page.setViewportSize({
      width: 390,
      height: 844,
    });

    await page.goto('/');

    const menuButton = page.locator('.mobile-menu-button');

    await menuButton.click();

    await expect(menuButton).toHaveAttribute('aria-expanded', 'true');

    await page
      .getByRole('navigation')
      .getByRole('link', {
        name: 'Projects',
      })
      .click();

    await expect(page.locator('#projects')).toBeInViewport();

    await expect(
      page.getByRole('button', {
        name: /open navigation/i,
      }),
    ).toHaveAttribute('aria-expanded', 'false');
  });

  test('keeps the main sections available on mobile', async ({ page }) => {
    await page.setViewportSize({
      width: 375,
      height: 812,
    });

    await page.goto('/');

    for (const section of [
      'home',
      'about',
      'skills',
      'projects',
      'education',
      'experience',
      'research',
      'contact',
    ]) {
      await expect(page.locator(`#${section}`)).toBeAttached();
    }
  });
});
