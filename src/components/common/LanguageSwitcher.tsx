import { Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import type { AppLanguage } from '../../i18n';

export function LanguageSwitcher() {
  const { i18n, t } = useTranslation();

  const currentLanguage: AppLanguage =
    i18n.resolvedLanguage === 'es' ? 'es' : 'en';

  const changeLanguage = (language: AppLanguage) => {
    void i18n.changeLanguage(language);
  };

  return (
    <div className="language-switcher" aria-label={t('language.label')}>
      <Globe size={16} aria-hidden="true" />

      <button
        type="button"
        className={currentLanguage === 'es' ? 'active' : ''}
        aria-pressed={currentLanguage === 'es'}
        aria-label={`ES – ${t('language.spanish')}`}
        onClick={() => changeLanguage('es')}
      >
        ES
      </button>

      <span aria-hidden="true">/</span>

      <button
        type="button"
        className={currentLanguage === 'en' ? 'active' : ''}
        aria-pressed={currentLanguage === 'en'}
        aria-label={`EN – ${t('language.english')}`}
        onClick={() => changeLanguage('en')}
      >
        EN
      </button>
    </div>
  );
}
