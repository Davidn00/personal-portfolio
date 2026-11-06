import { describe, expect, it, beforeEach, vi } from 'vitest';

import { render, screen, fireEvent } from '@testing-library/react';

import { ThemeProvider } from '../app/providers/ThemeProvider';

import { useTheme } from '../hooks/useTheme';

function ThemeTestComponent() {
  const { theme, resolvedTheme, setTheme } = useTheme();

  return (
    <div>
      <span data-testid="theme">{theme}</span>

      <span data-testid="resolved">{resolvedTheme}</span>

      <button onClick={() => setTheme('dark')}>Dark</button>

      <button onClick={() => setTheme('light')}>Light</button>

      <button onClick={() => setTheme('system')}>System</button>
    </div>
  );
}

describe('ThemeProvider', () => {
  beforeEach(() => {
    localStorage.clear();

    document.documentElement.removeAttribute('data-theme');

    window.matchMedia = vi.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      addListener: vi.fn(),
      removeListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));
  });

  it('uses system as the default theme', () => {
    render(
      <ThemeProvider>
        <ThemeTestComponent />
      </ThemeProvider>,
    );

    expect(screen.getByTestId('theme')).toHaveTextContent('system');

    expect(screen.getByTestId('resolved')).toHaveTextContent('light');
  });

  it('changes the theme to dark', () => {
    render(
      <ThemeProvider>
        <ThemeTestComponent />
      </ThemeProvider>,
    );

    fireEvent.click(screen.getByRole('button', { name: 'Dark' }));

    expect(screen.getByTestId('theme')).toHaveTextContent('dark');

    expect(document.documentElement).toHaveAttribute('data-theme', 'dark');
  });

  it('persists the selected theme', () => {
    render(
      <ThemeProvider>
        <ThemeTestComponent />
      </ThemeProvider>,
    );

    fireEvent.click(screen.getByRole('button', { name: 'Dark' }));

    expect(localStorage.getItem('portfolio-theme')).toBe('dark');
  });

  it('returns to system preference', () => {
    render(
      <ThemeProvider>
        <ThemeTestComponent />
      </ThemeProvider>,
    );

    fireEvent.click(screen.getByRole('button', { name: 'Dark' }));

    fireEvent.click(screen.getByRole('button', { name: 'System' }));

    expect(screen.getByTestId('theme')).toHaveTextContent('system');

    expect(screen.getByTestId('resolved')).toHaveTextContent('light');
  });
});
