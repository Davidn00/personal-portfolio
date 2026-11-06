interface SEOOptions {
  title: string;
  description: string;
  path?: string;
}

const SITE_NAME = 'Angel David Núñez Paredes';

const SITE_URL = (
  import.meta.env.VITE_SITE_URL || window.location.origin
).replace(/\/$/, '');

function setMeta(attribute: 'name' | 'property', key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(
    `meta[${attribute}="${key}"]`,
  );

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.content = content;
}

function setLink(rel: string, href: string, hreflang?: string) {
  const selector = hreflang
    ? `link[rel="${rel}"][hreflang="${hreflang}"]`
    : `link[rel="${rel}"]:not([hreflang])`;

  let element = document.head.querySelector<HTMLLinkElement>(selector);

  if (!element) {
    element = document.createElement('link');
    element.rel = rel;

    if (hreflang) {
      element.hreflang = hreflang;
    }

    document.head.appendChild(element);
  }

  element.href = href;
}

export function updateSEO({ title, description, path = '/' }: SEOOptions) {
  const canonicalUrl = `${SITE_URL}${path}`;

  document.title = title;

  document.documentElement.lang = document.documentElement.lang || 'en';

  setMeta('name', 'description', description);

  setMeta('name', 'author', SITE_NAME);

  setMeta('property', 'og:type', 'website');

  setMeta('property', 'og:site_name', SITE_NAME);

  setMeta('property', 'og:title', title);

  setMeta('property', 'og:description', description);

  setMeta('property', 'og:url', canonicalUrl);

  setMeta('property', 'og:image', `${SITE_URL}/images/profile.webp`);

  setMeta('property', 'og:image:alt', SITE_NAME);

  setMeta('name', 'twitter:card', 'summary_large_image');

  setMeta('name', 'twitter:title', title);

  setMeta('name', 'twitter:description', description);

  setMeta('name', 'twitter:image', `${SITE_URL}/images/profile.webp`);

  setLink('canonical', canonicalUrl);
}
