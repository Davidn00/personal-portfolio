import { Outlet } from 'react-router-dom';

import { Navbar } from './Navbar';

import { Footer } from './Footer';

import { useTranslation } from 'react-i18next';

export function MainLayout() {
  const { t } = useTranslation();

  return (
    <div className="app-shell">
      <a href="#main-content" className="skip-link">
        {t('accessibility.skipToContent', {
          defaultValue: 'Skip to main content',
        })}
      </a>

      <Navbar />

      <main id="main-content" tabIndex={-1}>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
