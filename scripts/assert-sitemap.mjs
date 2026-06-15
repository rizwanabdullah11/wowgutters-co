/**
 * XML sitemap health audit 10.03 — all indexable pages included in out/sitemap.xml
 */

import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const { REQUIRED_INDEXABLE_PATHS, allAreaSitemapPaths, normalizePath } = require('./sitemap-config.cjs');

const SITE = 'https://wowgutters.co.uk';
const SITEMAP = path.join(process.cwd(), 'out', 'sitemap.xml');

const errors = [];

if (!fs.existsSync(SITEMAP)) {
  errors.push('missing out/sitemap.xml');
} else {
  const xml = fs.readFileSync(SITEMAP, 'utf8');
  if (!xml.includes('<urlset')) {
    errors.push('out/sitemap.xml is not a urlset (use single sitemap.xml, not index-only)');
  }
  if (fs.existsSync(path.join(process.cwd(), 'out', 'sitemap-0.xml'))) {
    errors.push('stale out/sitemap-0.xml present — deploy should use one urlset only');
  }
  const publicIndex = path.join(process.cwd(), 'public', 'sitemap.xml');
  if (fs.existsSync(publicIndex)) {
    const pub = fs.readFileSync(publicIndex, 'utf8');
    if (pub.includes('<sitemapindex') && !pub.includes('<urlset')) {
      errors.push('public/sitemap.xml is still a sitemap index — run post-sitemap-sync');
    }
  }

  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  const paths = new Set(urls.map((u) => normalizePath(u.replace(SITE, '') || '/')));

  for (const req of REQUIRED_INDEXABLE_PATHS) {
    if (!paths.has(normalizePath(req))) {
      errors.push(`missing required URL ${req}`);
    }
  }

  const areas = allAreaSitemapPaths();
  const missingAreas = areas.filter((p) => !paths.has(normalizePath(p)));
  if (missingAreas.length > 0) {
    errors.push(`${missingAreas.length} area page(s) missing from sitemap (e.g. ${missingAreas.slice(0, 3).join(', ')})`);
  }

  if (paths.has('/privacy-policy/') || paths.has('/talks/')) {
    errors.push('sitemap includes noindex/low-value legal or talks URLs');
  }

  const areaCount = [...paths].filter((p) => p.startsWith('/gutter-cleaning-')).length;
  const roofAreaCount = [...paths].filter((p) => p.startsWith('/roof-cleaning-')).length;
  if (areaCount < 160) {
    errors.push(`sitemap only lists ${areaCount} gutter area pages (expected 160+ indexable suburbs)`);
  }
  if (roofAreaCount < 160) {
    errors.push(`sitemap only lists ${roofAreaCount} roof cleaning area pages (expected 160+ indexable suburbs)`);
  }
  if (urls.length < 380) {
    errors.push(`sitemap only has ${urls.length} URLs (expected 380+ with gutter, roof, blog, and key landings)`);
  }
}

if (errors.length) {
  console.error('assert-sitemap: FAILED');
  errors.forEach((e) => console.error(`  - ${e}`));
  process.exit(1);
}

console.log('assert-sitemap: OK — canonical urlset includes gallery, discounts, quote, gutter + roof area pages');
