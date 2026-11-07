import { test, expect } from '@playwright/test';

test.describe('Project filtering', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');

    await page.locator('#projects').scrollIntoViewIfNeeded();
  });

  test('shows all projects initially', async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto('/');
    await expect(
      page.getByRole('heading', {
        name: 'MedLab Platform',
      }),
    ).toBeVisible();

    await expect(
      page.getByRole('heading', {
        name: 'InstrumentHub',
      }),
    ).toBeVisible();

    await expect(
      page.getByRole('heading', {
        name: 'Digital Thermometer',
      }),
    ).toBeVisible();
  });

  test('filters backend projects', async ({ page }) => {
    await page
      .getByRole('button', {
        name: 'Backend',
      })
      .click();

    await expect(
      page.getByRole('button', {
        name: 'Backend',
      }),
    ).toHaveAttribute('aria-pressed', 'true');

    await expect(
      page.getByRole('heading', {
        name: 'MedLab Platform',
      }),
    ).toBeVisible();
  });

  test('filters instrumentation projects', async ({ page }) => {
    await page
      .getByRole('button', {
        name: 'Instrumentation',
      })
      .click();

    await expect(
      page.getByRole('button', {
        name: 'Instrumentation',
      }),
    ).toHaveAttribute('aria-pressed', 'true');

    await expect(
      page.getByRole('heading', {
        name: 'InstrumentHub',
      }),
    ).toBeVisible();
  });

  test('restores all projects', async ({ page }) => {
    await page
      .getByRole('button', {
        name: 'Backend',
      })
      .click();

    await page
      .getByRole('button', {
        name: 'All',
      })
      .click();

    await expect(
      page.getByRole('heading', {
        name: 'InstrumentHub',
      }),
    ).toBeVisible();
  });
});
