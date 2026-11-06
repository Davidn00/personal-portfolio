import { Monitor, Moon, Sun } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import { useTheme } from '../../hooks/useTheme';

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const { t } = useTranslation();

  return (
    <div className="theme-switcher">
      <span className="sr-only">{t('theme.label')}</span>

      <button
        type="button"
        className={theme === 'light' ? 'active' : ''}
        onClick={() => setTheme('light')}
        aria-label={t('theme.light')}
        aria-pressed={theme === 'light'}
        title={t('theme.light')}
      >
        <Sun size={16} />
      </button>

      <button
        type="button"
        className={theme === 'dark' ? 'active' : ''}
        onClick={() => setTheme('dark')}
        aria-label={t('theme.dark')}
        aria-pressed={theme === 'dark'}
        title={t('theme.dark')}
      >
        <Moon size={16} />
      </button>

      <button
        type="button"
        className={theme === 'system' ? 'active' : ''}
        onClick={() => setTheme('system')}
        aria-label={t('theme.system')}
        aria-pressed={theme === 'system'}
        title={t('theme.system')}
      >
        <Monitor size={16} />
      </button>
    </div>
  );
}
