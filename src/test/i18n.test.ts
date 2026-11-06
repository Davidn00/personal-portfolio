import { describe, expect, it } from 'vitest';

import i18n from '../i18n';

describe('Internationalization', () => {
  it('supports Spanish and English', () => {
    expect(i18n.options.supportedLngs).toContain('es');

    expect(i18n.options.supportedLngs).toContain('en');
  });

  it('loads Spanish translations', async () => {
    await i18n.changeLanguage('es');

    expect(i18n.t('navigation.home')).toBe('Inicio');

    expect(i18n.t('projects.filters.backend')).toBe('Backend');
  });

  it('loads English translations', async () => {
    await i18n.changeLanguage('en');

    expect(i18n.t('navigation.home')).toBe('Home');

    expect(i18n.t('projects.filters.backend')).toBe('Backend');
  });

  it('provides translations for project descriptions', () => {
    expect(
      i18n.t('projects.items.medlab.description', {
        lng: 'es',
      }),
    ).not.toBe('projects.items.medlab.description');

    expect(
      i18n.t('projects.items.medlab.description', {
        lng: 'en',
      }),
    ).not.toBe('projects.items.medlab.description');
  });
});
