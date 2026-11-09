const SITE_URL = process.env.SITE_URL || 'https://dov62esnlp0xr.cloudfront.net';

const baseUrl = new URL(SITE_URL);

if (baseUrl.protocol !== 'https:') {
  throw new Error('Production URL must use HTTPS.');
}

const routes = [
  '/',
  '/projects/workflow-saas',
  '/projects/medlab-platform',
  '/projects/instrumenthub',
  '/projects/digital-thermometer',
  '/projects/fbg-sensor-research',
  '/documents/cv-es.pdf',
  '/documents/cv-en.pdf',
  '/robots.txt',
  '/sitemap.xml',
  '/favicon.svg',
  '/images/profile.webp',
];

async function checkRoute(path) {
  const url = `${baseUrl.origin}${path}`;

  const response = await fetch(url, {
    redirect: 'follow',
    signal: AbortSignal.timeout(20000),
  });

  if (!response.ok) {
    throw new Error(`${path}: HTTP ${response.status}`);
  }

  if (new URL(response.url).protocol !== 'https:') {
    throw new Error(`${path}: final URL is not HTTPS.`);
  }

  const contentType = response.headers.get('content-type') || '';

  if (path.endsWith('.pdf')) {
    if (!contentType.includes('application/pdf')) {
      throw new Error(`${path}: invalid content type: ${contentType}`);
    }
  }

  if (path.endsWith('.xml')) {
    if (!contentType.includes('xml') && !contentType.includes('text/plain')) {
      throw new Error(`${path}: invalid sitemap content type.`);
    }
  }

  if (path.endsWith('.txt')) {
    const body = await response.text();

    if (!body.includes('Sitemap:')) {
      throw new Error('robots.txt does not contain Sitemap directive.');
    }

    if (body.includes('localhost')) {
      throw new Error('robots.txt contains localhost.');
    }
  }

  if (path === '/sitemap.xml') {
    const body = await response.text();

    if (!body.includes('<urlset')) {
      throw new Error('Invalid sitemap XML structure.');
    }

    if (body.includes('localhost')) {
      throw new Error('Sitemap contains localhost.');
    }

    if (body.includes('YOUR_DOMAIN')) {
      throw new Error('Sitemap contains placeholder domain.');
    }
  }

  if (path.startsWith('/projects/') || path === '/') {
    if (!contentType.includes('text/html')) {
      throw new Error(`${path}: expected HTML response.`);
    }
  }

  console.log(`PASS ${path}`);
}

async function verifyHttpRedirect() {
  const httpUrl = `http://${baseUrl.host}/`;

  const response = await fetch(httpUrl, {
    redirect: 'manual',
    signal: AbortSignal.timeout(20000),
  });

  const location = response.headers.get('location');

  if (![301, 302, 307, 308].includes(response.status)) {
    throw new Error(
      `HTTP endpoint did not redirect to HTTPS. Status: ${response.status}`,
    );
  }

  if (!location || !location.startsWith('https://')) {
    throw new Error('HTTP redirect does not point to HTTPS.');
  }

  console.log('PASS HTTP → HTTPS redirect');
}

console.log(`Validating production: ${baseUrl.origin}\n`);

await verifyHttpRedirect();

for (const route of routes) {
  await checkRoute(route);
}

console.log('\nProduction validation completed successfully.');
