import { test, expect } from '@playwright/test';

test.describe('Portfolio navigation', () => {
  test('loads the homepage correctly', async ({ page }) => {
    await page.goto('/');

    await expect(page.locator('#home')).toBeVisible();

    await expect(page.locator('#about')).toBeAttached();

    await expect(page.locator('#skills')).toBeAttached();

    await expect(page.locator('#projects')).toBeAttached();

    await expect(page.locator('#education')).toBeAttached();

    await expect(page.locator('#experience')).toBeAttached();

    await expect(page.locator('#research')).toBeAttached();

    await expect(page.locator('#contact')).toBeAttached();
  });

  test('navigates to a project detail page', async ({ page }) => {
    await page.goto('/');

    await page
      .getByRole('link', {
        name: /repository|view details/i,
      })
      .first()
      .waitFor();

    await page.goto('/projects/medlab-platform');

    await expect(
      page.getByRole('heading', {
        name: 'MedLab Platform',
      }),
    ).toBeVisible();

    await expect(
      page.getByRole('heading', {
        name: /project overview/i,
      }),
    ).toBeVisible();
  });

  test('handles unknown routes', async ({ page }) => {
    await page.goto('/unknown-route');

    await expect(
      page.getByRole('heading', {
        name: '404',
      }),
    ).toBeVisible();
  });

  test('returns to the homepage from a project', async ({ page }) => {
    await page.goto('/projects/medlab-platform');

    await page
      .getByRole('link', {
        name: /back/i,
      })
      .click();

    await expect(page).toHaveURL(/\/(#.*)?$/);
  });

  test('navigates to sections using the navigation menu', async ({ page }) => {
    await page.goto('/');

    const menuButton = page.locator('.mobile-menu-button');
    if (await menuButton.isVisible()) {
      await menuButton.click();
    }

    await page
      .getByRole('navigation')
      .getByRole('link', {
        name: 'Projects',
      })
      .click();

    await expect(page.locator('#projects')).toBeInViewport();
  });
});
