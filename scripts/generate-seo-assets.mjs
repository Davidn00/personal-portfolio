import { mkdir, writeFile } from 'node:fs/promises';

const rawSiteUrl = process.env.VITE_SITE_URL;

if (!rawSiteUrl) {
  throw new Error(
    'VITE_SITE_URL must be defined before generating production SEO assets.',
  );
}

const parsedUrl = new URL(rawSiteUrl);

if (parsedUrl.protocol !== 'https:') {
  throw new Error('Production URL must use HTTPS.');
}

if (
  parsedUrl.pathname !== '/' ||
  parsedUrl.search ||
  parsedUrl.hash ||
  parsedUrl.username ||
  parsedUrl.password
) {
  throw new Error('VITE_SITE_URL must contain only the production origin.');
}

const siteUrl = parsedUrl.origin.replace(/\/+$/, '');

const routes = [
  {
    path: '/',
    priority: '1.0',
  },
  {
    path: '/projects/workflow-saas',
    priority: '0.8',
  },
  {
    path: '/projects/medlab-platform',
    priority: '0.8',
  },
  {
    path: '/projects/instrumenthub',
    priority: '0.8',
  },
  {
    path: '/projects/digital-thermometer',
    priority: '0.7',
  },
  {
    path: '/projects/fbg-sensor-research',
    priority: '0.7',
  },
];

function escapeXml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    ({ path, priority }) => `  <url>
    <loc>${escapeXml(`${siteUrl}${path}`)}</loc>
    <changefreq>monthly</changefreq>
    <priority>${priority}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`;

const robots = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;

await mkdir('dist', { recursive: true });

await Promise.all([
  writeFile('dist/sitemap.xml', sitemap, 'utf8'),
  writeFile('dist/robots.txt', robots, 'utf8'),
]);

console.log('SEO assets generated successfully.');
console.log(`Production URL: ${siteUrl}`);
console.log(`Sitemap routes: ${routes.length}`);
