/**
 * After next build (+ optional next-sitemap postbuild), ensure out/sitemap.xml is the
 * single canonical urlset and includes all indexable routes (audit 10.03).
 */

import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const { REQUIRED_INDEXABLE_PATHS, allAreaSitemapPaths, normalizePath } = require('./sitemap-config.cjs');
const { getLastModForPath, refreshSitemapLastmods } = require('./content-freshness.cjs');

const SITE = 'https://wowgutters.co.uk';
const ROOT = process.cwd();
const OUT = path.join(ROOT, 'out');
const PUBLIC = path.join(ROOT, 'public');
const SITEMAP = path.join(OUT, 'sitemap.xml');

function parseUrls(xml) {
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}

function urlToPath(loc) {
  return normalizePath(loc.replace(SITE, '') || '/');
}

function buildUrlEntry(path, lastmod) {
  const loc = `${SITE}${normalizePath(path)}`;
  const priority =
    path === '/' ? '1' : path === '/contact/' || path === '/quote/' ? '0.95' : path.startsWith('/gutter-cleaning-') ? '0.85' : '0.8';
  const changefreq = path === '/' || path === '/contact/' ? 'weekly' : 'monthly';
  return `<url>
<loc>${loc}</loc>
<lastmod>${lastmod}</lastmod>
<changefreq>${changefreq}</changefreq>
<priority>${priority}</priority>
</url>`;
}

if (!fs.existsSync(SITEMAP)) {
  console.error('post-sitemap-sync: missing out/sitemap.xml');
  process.exit(1);
}

// Remove stale split sitemap (audit 10.03 — one canonical urlset only)
for (const dir of [OUT, PUBLIC]) {
  for (const stale of ['sitemap-0.xml']) {
    const p = path.join(dir, stale);
    if (fs.existsSync(p)) {
      fs.unlinkSync(p);
      console.log(`post-sitemap-sync: removed stale ${path.relative(ROOT, p)}`);
    }
  }
}

const lastmod = getLastModForPath('/');
let xml = fs.readFileSync(SITEMAP, 'utf8');
const existing = new Set(parseUrls(xml).map(urlToPath));

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

if (added.length > 0) {
  const block = added.map((p) => buildUrlEntry(p, lastmod)).join('\n');
  xml = xml.replace('</urlset>', `${block}\n</urlset>`);
  fs.writeFileSync(SITEMAP, xml, 'utf8');
  console.log(`post-sitemap-sync: appended ${added.length} missing URL(s)`);
} else {
  console.log('post-sitemap-sync: all required URLs already present');
}

let finalXml = fs.readFileSync(SITEMAP, 'utf8');
finalXml = refreshSitemapLastmods(finalXml);
fs.writeFileSync(SITEMAP, finalXml, 'utf8');
const finalCount = parseUrls(finalXml).length;

// Keep public/ in sync so repo + next build copy match deploy artifact
fs.writeFileSync(path.join(PUBLIC, 'sitemap.xml'), finalXml, 'utf8');
console.log(`post-sitemap-sync: synced public/sitemap.xml from out (${finalCount} URLs)`);
console.log(`post-sitemap-sync: out/sitemap.xml has ${finalCount} URLs`);
