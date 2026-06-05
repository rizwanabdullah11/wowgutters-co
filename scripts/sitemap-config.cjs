/**
 * Shared sitemap rules (next-sitemap.config.js + build asserts).
 */

const { readFileSync } = require('node:fs');
const { join } = require('node:path');

const EXCLUDED_AREA_SLUGS = new Set([
  'gunnislake',
  'lytham-st-annes',
  'whittingham',
  'london',
  'callington',
  'wendover',
]);

const EXCLUDED_PATHS = new Set([
  '/contact-us/',
  '/about/',
  '/gutters-cleaning/',
  '/help/inspect/',
  '/help/unblock/',
  '/help/repair/',
  '/help/clean/',
  '/help/gutter-cleaning/',
  '/help/gutter-repairs/',
  '/help/upvc-cleaning/',
  '/help/roof-cleaning/',
  '/help/inspection/',
  '/help/conservatory/',
  '/help/water-butt/',
  '/help/commercial/',
  '/help/gutter-installation/',
  '/audit/',
  '/dashboard/',
  '/navbar/',
  '/home-screen/',
  '/testimonials/',
  '/quote/embed/',
]);

const REQUIRED_INDEXABLE_PATHS = [
  '/',
  '/the-gutter-gallery/',
  '/oap-discount/',
  '/neighbourhood-discount/',
  '/quote/',
  '/windows-cleaning/',
  '/citations/',
  '/contact/',
  '/service-areas/',
];

function readAreaSlugsFromRepo() {
  const file = join(process.cwd(), 'lib', 'areaSlugs.ts');
  const text = readFileSync(file, 'utf8');
  return [...text.matchAll(/^\s+'([a-z0-9-]+)',/gm)].map((m) => m[1]);
}

function areaSitemapPath(slug) {
  return `/gutter-cleaning-${slug}/`;
}

function normalizePath(path) {
  if (!path || path === '/') return '/';
  const p = path.startsWith('/') ? path : `/${path}`;
  return p.endsWith('/') ? p : `${p}/`;
}

function isExcludedSitemapPath(path) {
  const norm = normalizePath(path);
  if (EXCLUDED_PATHS.has(norm)) return true;
  const areaMatch = norm.match(/^\/gutter-cleaning-([^/]+)\/$/);
  if (areaMatch && EXCLUDED_AREA_SLUGS.has(areaMatch[1])) return true;
  return false;
}

function allAreaSitemapPaths() {
  return readAreaSlugsFromRepo()
    .filter((slug) => !EXCLUDED_AREA_SLUGS.has(slug))
    .map((slug) => areaSitemapPath(slug));
}

module.exports = {
  EXCLUDED_AREA_SLUGS,
  EXCLUDED_PATHS,
  REQUIRED_INDEXABLE_PATHS,
  readAreaSlugsFromRepo,
  areaSitemapPath,
  normalizePath,
  isExcludedSitemapPath,
  allAreaSitemapPaths,
};
