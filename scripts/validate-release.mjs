import { access, readFile, stat } from 'node:fs/promises';

const SITE_URL = process.env.VITE_SITE_URL;

if (!SITE_URL) {
  throw new Error('VITE_SITE_URL is required.');
}

const baseUrl = new URL(SITE_URL);

if (baseUrl.protocol !== 'https:') {
  throw new Error('Production URL must use HTTPS.');
}

const expectedRoutes = [
  '/',
  '/projects/workflow-saas',
  '/projects/medlab-platform',
  '/projects/instrumenthub',
  '/projects/digital-thermometer',
  '/projects/fbg-sensor-research',
];

const requiredFiles = [
  'dist/index.html',
  'dist/robots.txt',
  'dist/sitemap.xml',
  'dist/favicon.svg',
  'dist/images/profile.webp',
  'dist/documents/cv-es.pdf',
  'dist/documents/cv-en.pdf',
];

async function verifyFile(file) {
  try {
    await access(file);

    const fileStats = await stat(file);

    if (!fileStats.isFile() || fileStats.size === 0) {
      throw new Error(`Invalid file: ${file}`);
    }

    console.log(`PASS ${file}`);
  } catch {
    throw new Error(`Missing or invalid file: ${file}`);
  }
}

for (const file of requiredFiles) {
  await verifyFile(file);
}

const robots = await readFile('dist/robots.txt', 'utf8');

const sitemap = await readFile('dist/sitemap.xml', 'utf8');

const html = await readFile('dist/index.html', 'utf8');

const forbiddenPatterns = [
  /localhost/i,
  /127\.0\.0\.1/i,
  /YOUR_DOMAIN/i,
  /example\.invalid/i,
];

for (const pattern of forbiddenPatterns) {
  if (pattern.test(robots) || pattern.test(sitemap)) {
    throw new Error(`Invalid production SEO reference: ${pattern}`);
  }
}

if (!robots.includes(`${baseUrl.origin}/sitemap.xml`)) {
  throw new Error('robots.txt does not reference production sitemap.');
}

if (!html.includes('<title>')) {
  throw new Error('HTML title is missing.');
}

if (!html.includes('name="description"')) {
  throw new Error('Meta description is missing.');
}

const locations = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(
  (match) => match[1],
);

if (locations.length !== expectedRoutes.length) {
  throw new Error(
    `Expected ${expectedRoutes.length} sitemap routes, found ${locations.length}.`,
  );
}

const actualRoutes = locations.map((location) => {
  const url = new URL(location);

  if (url.origin !== baseUrl.origin) {
    throw new Error(`Unexpected sitemap origin: ${url.origin}`);
  }

  return url.pathname;
});

for (const route of expectedRoutes) {
  if (!actualRoutes.includes(route)) {
    throw new Error(`Missing sitemap route: ${route}`);
  }
}

if (new Set(actualRoutes).size !== actualRoutes.length) {
  throw new Error('Duplicate sitemap routes detected.');
}

console.log('\nRelease validation completed successfully.');
console.log(`Production: ${baseUrl.origin}`);
console.log(`Validated routes: ${actualRoutes.length}`);
