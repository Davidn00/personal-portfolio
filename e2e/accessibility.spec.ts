import { test, expect } from '@playwright/test';

import AxeBuilder from '@axe-core/playwright';

test.describe('Accessibility', () => {
  test('homepage has no critical or serious WCAG violations', async ({
    page,
  }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto('/');

    const results = await new AxeBuilder({
      page,
    })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
      .analyze();

    const severeViolations = results.violations.filter(
      (violation) =>
        violation.impact === 'critical' || violation.impact === 'serious',
    );

    expect(severeViolations, JSON.stringify(severeViolations, null, 2)).toEqual(
      [],
    );
  });

  test('project detail page has no critical or serious violations', async ({
    page,
  }) => {
    await page.goto('/projects/medlab-platform');

    const results = await new AxeBuilder({
      page,
    })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
      .analyze();

    const severeViolations = results.violations.filter(
      (violation) =>
        violation.impact === 'critical' || violation.impact === 'serious',
    );

    expect(severeViolations, JSON.stringify(severeViolations, null, 2)).toEqual(
      [],
    );
  });

  test('skip link is accessible through keyboard navigation', async ({
    page,
    browserName,
  }) => {
    await page.goto('/');

    const skipLink = page.locator('a.skip-link');
    const mainContent = page.locator('#main-content');

    await expect(skipLink).toHaveCount(1);

    if (browserName === 'webkit') {
      // WebKit puede no incluir enlaces en la navegación Tab
      // según la configuración de navegación por teclado.
      // Comprobamos que el enlace admite el foco directamente.
      await skipLink.focus();
    } else {
      // Chromium y Firefox: comprobamos navegación real mediante Tab.
      await page.evaluate(() => {
        const activeElement = document.activeElement;

        if (activeElement instanceof HTMLElement) {
          activeElement.blur();
        }
      });

      let skipLinkFocused = false;

      for (let i = 0; i < 50; i++) {
        await page.keyboard.press('Tab');

        skipLinkFocused = await skipLink.evaluate(
          (element) => element === document.activeElement,
        );

        if (skipLinkFocused) {
          break;
        }
      }

      expect(
        skipLinkFocused,
        'The skip link must be reachable using keyboard navigation',
      ).toBe(true);
    }

    await expect(skipLink).toBeFocused();

    // Comprueba que el enlace funciona.
    await page.keyboard.press('Enter');

    await expect(mainContent).toBeFocused();
  });

  test('navigation buttons expose their accessible state', async ({ page }) => {
    await page.setViewportSize({
      width: 390,
      height: 844,
    });

    await page.goto('/');

    const menuButton = page.locator('.mobile-menu-button');

    await expect(menuButton).toHaveAttribute('aria-expanded', 'false');

    await menuButton.focus();

    await page.keyboard.press('Enter');

    await expect(menuButton).toHaveAttribute('aria-expanded', 'true');
  });
});
