import { beforeEach, afterEach, describe, expect, it } from 'vitest';

import { render, screen } from '@testing-library/react';

import userEvent from '@testing-library/user-event';

import { I18nextProvider } from 'react-i18next';

import i18n from '../i18n';

import { LanguageSwitcher } from '../components/common/LanguageSwitcher';

function renderSwitcher() {
  return render(
    <I18nextProvider i18n={i18n}>
      <LanguageSwitcher />
    </I18nextProvider>,
  );
}

describe('LanguageSwitcher', () => {
  beforeEach(async () => {
    await i18n.changeLanguage('en');
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('renders both language options', () => {
    renderSwitcher();

    expect(
      screen.getByRole('button', { name: /spanish/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('button', { name: /english/i }),
    ).toBeInTheDocument();
  });

  it('changes the language to Spanish', async () => {
    const user = userEvent.setup();

    renderSwitcher();

    await user.click(screen.getByRole('button', { name: /spanish/i }));

    expect(i18n.resolvedLanguage).toBe('es');

    // Tras el cambio, las etiquetas ya están en español
    expect(screen.getByRole('button', { name: /español/i })).toHaveAttribute(
      'aria-pressed',
      'true',
    );
  });

  it('changes the language to English', async () => {
    const user = userEvent.setup();

    await i18n.changeLanguage('es');

    renderSwitcher();

    // Con el idioma en español, el botón se llama "Inglés"
    await user.click(screen.getByRole('button', { name: /inglés/i }));

    expect(i18n.resolvedLanguage).toBe('en');

    expect(screen.getByRole('button', { name: /english/i })).toHaveAttribute(
      'aria-pressed',
      'true',
    );
  });
});
