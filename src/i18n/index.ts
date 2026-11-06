import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import esCommon from './locales/es/common.json';
import enCommon from './locales/en/common.json';

export type AppLanguage = 'es' | 'en';

const LANGUAGE_STORAGE_KEY = 'portfolio-language';

function getInitialLanguage(): AppLanguage {
  try {
    const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);

    if (savedLanguage === 'es' || savedLanguage === 'en') {
      return savedLanguage;
    }
  } catch {
    // Continue with the default language.
  }

  return 'en';
}

i18n.use(initReactI18next).init({
  resources: {
    es: {
      common: esCommon,
    },
    en: {
      common: enCommon,
    },
  },

  lng: getInitialLanguage(),

  fallbackLng: 'en',

  supportedLngs: ['es', 'en'],

  defaultNS: 'common',

  ns: ['common'],

  interpolation: {
    escapeValue: false,
  },

  returnNull: false,

  react: {
    useSuspense: false,
  },
});

i18n.on('languageChanged', (language) => {
  const normalizedLanguage: AppLanguage = language === 'es' ? 'es' : 'en';

  document.documentElement.lang = normalizedLanguage;

  try {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, normalizedLanguage);
  } catch {
    // The application remains usable without storage.
  }
});

document.documentElement.lang = getInitialLanguage();

export default i18n;
