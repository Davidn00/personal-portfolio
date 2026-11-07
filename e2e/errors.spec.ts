import { test, expect } from '@playwright/test';

test.describe('Runtime and resource validation', () => {
  test('does not produce JavaScript runtime errors', async ({ page }) => {
    const errors: string[] = [];

    page.on('pageerror', (error) => {
      errors.push(error.message);
    });

    await page.goto('/');

    await page.goto('/projects/medlab-platform');

    await page.goto('/');

    expect(errors).toEqual([]);
  });

  test('does not produce browser console errors', async ({ page }) => {
    const errors: string[] = [];

    page.on('console', (message) => {
      if (message.type() === 'error') {
        errors.push(message.text());
      }
    });

    await page.goto('/');

    await page.waitForLoadState('load');
    await expect(page.locator('#home')).toBeVisible();

    expect(errors).toEqual([]);
  });

  test('loads the profile image successfully', async ({ page }) => {
    const response = await page.request.get('/images/profile.webp');

    expect(response.ok()).toBe(true);

    expect(response.headers()['content-type']).toContain('image/webp');
  });

  test('loads both CV documents successfully', async ({ page }) => {
    const spanishCV = await page.request.get('/documents/cv-es.pdf');

    const englishCV = await page.request.get('/documents/cv-en.pdf');

    expect(spanishCV.status()).toBe(200);

    expect(englishCV.status()).toBe(200);

    expect(spanishCV.headers()['content-type']).toContain('application/pdf');

    expect(englishCV.headers()['content-type']).toContain('application/pdf');
  });

  test('all internal section links have valid targets', async ({ page }) => {
    await page.goto('/');

    const invalidLinks = await page
      .locator('a[href^="#"]')
      .evaluateAll((links) => {
        return links
          .map((link) => link.getAttribute('href'))
          .filter((href) => {
            if (!href || href === '#') {
              return true;
            }

            return !document.querySelector(href);
          });
      });

    expect(invalidLinks).toEqual([]);
  });
});
