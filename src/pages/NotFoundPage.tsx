import { Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

export function NotFoundPage() {
  const { t } = useTranslation();

  return (
    <section className="page-container not-found-page">
      <span className="section-eyebrow">404</span>

      <h1>404</h1>

      <p>{t('errors.notFound')}</p>

      <Link to="/" className="button button-primary">
        {t('errors.goHome')}
      </Link>
    </section>
  );
}
