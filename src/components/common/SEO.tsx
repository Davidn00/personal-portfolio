import { useEffect } from 'react';

import { useTranslation } from 'react-i18next';

import { updateSEO } from '../../lib/seo';

interface SEOProps {
  title: string;
  description: string;
  path?: string;
}

export function SEO({ title, description, path }: SEOProps) {
  const { i18n } = useTranslation();

  useEffect(() => {
    updateSEO({
      title,
      description,
      path,
    });
  }, [title, description, path, i18n.resolvedLanguage]);

  return null;
}
