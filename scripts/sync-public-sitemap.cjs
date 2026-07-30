/**
 * Sync public/sitemap.xml with required + all area paths (including gutter-repair-*).
 * Safe to run without a full Next build / out/ folder.
 */
const fs = require('node:fs');
const path = require('node:path');
const {
  allAreaSitemapPaths,
  normalizePath,
  REQUIRED_INDEXABLE_PATHS,
} = require('./sitemap-config.cjs');
const { getLastModForPath, refreshSitemapLastmods } = require('./content-freshness.cjs');

const SITE = 'https://wowgutters.co.uk';
const file = path.join(process.cwd(), 'public', 'sitemap.xml');

function parsePaths(xml) {
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) =>
    normalizePath(m[1].replace(SITE, '') || '/'),
  );
}

function buildUrlEntry(p, lastmod) {
  const loc = `${SITE}${normalizePath(p)}`;
  const priority =
    p === '/'
      ? '1'
      : p === '/contact/' || p === '/quote/'
        ? '0.95'
        : p.startsWith('/gutter-cleaning-') ||
            p.startsWith('/roof-cleaning-') ||
            p.startsWith('/gutter-repair-')
          ? '0.85'
          : p === '/roof-cleaning-service-areas/'
            ? '0.75'
            : '0.8';
  const changefreq = p === '/' || p === '/contact/' ? 'weekly' : 'monthly';
  return `<url>
<loc>${loc}</loc>
<lastmod>${lastmod}</lastmod>
<changefreq>${changefreq}</changefreq>
<priority>${priority}</priority>
</url>`;
}

let xml = fs.readFileSync(file, 'utf8');
const existing = new Set(parsePaths(xml));

const mustInclude = [
  ...REQUIRED_INDEXABLE_PATHS.map(normalizePath),
  ...allAreaSitemapPaths().map(normalizePath),
];

const added = [];
for (const p of mustInclude) {
  if (!existing.has(p)) {
    added.push(p);
    existing.add(p);
  }
}

const lastmod = getLastModForPath('/');
if (added.length > 0) {
  const block = added.map((p) => buildUrlEntry(p, lastmod)).join('\n');
  if (!xml.includes('</urlset>')) {
    console.error('public/sitemap.xml missing </urlset>');
    process.exit(1);
  }
  xml = xml.replace('</urlset>', `${block}\n</urlset>`);
}

xml = refreshSitemapLastmods(xml);
fs.writeFileSync(file, xml, 'utf8');

const finalCount = parsePaths(xml).length;
const repair = (xml.match(/\/gutter-repair-[a-z0-9-]+\//g) || []).length;
const cleaning = (xml.match(/\/gutter-cleaning-[a-z0-9-]+\//g) || []).length;
const roof = (xml.match(/\/roof-cleaning-[a-z0-9-]+\//g) || []).length;

console.log(
  JSON.stringify(
    {
      added: added.length,
      total: finalCount,
      repairAreaUrls: repair,
      cleaningAreaUrls: cleaning,
      roofAreaUrls: roof,
      repairAdded: added.filter((p) => p.startsWith('/gutter-repair-')).length,
    },
    null,
    2,
  ),
);
