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
  '/about-us/',
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
  '/roof-cleaning-service-areas/',
];

function readAreaSlugsFromRepo() {
  const file = join(process.cwd(), 'lib', 'areaSlugs.ts');
  const text = readFileSync(file, 'utf8');
  return [...text.matchAll(/^\s+'([a-z0-9-]+)',/gm)].map((m) => m[1]);
}

function areaSitemapPath(slug) {
  return `/gutter-cleaning-${slug}/`;
}

function roofAreaSitemapPath(slug) {
  return `/roof-cleaning-${slug}/`;
}

function normalizePath(path) {
  if (!path || path === '/') return '/';
  const p = path.startsWith('/') ? path : `/${path}`;
  return p.endsWith('/') ? p : `${p}/`;
}

function isExcludedAreaSlugPath(path, prefix) {
  const areaMatch = path.match(new RegExp(`^\\/${prefix}-([^/]+)\\/$`));
  return Boolean(areaMatch && EXCLUDED_AREA_SLUGS.has(areaMatch[1]));
}

function isExcludedSitemapPath(path) {
  const norm = normalizePath(path);
  if (EXCLUDED_PATHS.has(norm)) return true;
  if (isExcludedAreaSlugPath(norm, 'gutter-cleaning')) return true;
  if (isExcludedAreaSlugPath(norm, 'roof-cleaning')) return true;
  return false;
}

function allGutterAreaSitemapPaths() {
  return readAreaSlugsFromRepo()
    .filter((slug) => !EXCLUDED_AREA_SLUGS.has(slug))
    .map((slug) => areaSitemapPath(slug));
}

function allRoofAreaSitemapPaths() {
  return readAreaSlugsFromRepo()
    .filter((slug) => !EXCLUDED_AREA_SLUGS.has(slug))
    .map((slug) => roofAreaSitemapPath(slug));
}

function allAreaSitemapPaths() {
  return [...allGutterAreaSitemapPaths(), ...allRoofAreaSitemapPaths()];
}

module.exports = {
  EXCLUDED_AREA_SLUGS,
  EXCLUDED_PATHS,
  REQUIRED_INDEXABLE_PATHS,
  readAreaSlugsFromRepo,
  areaSitemapPath,
  roofAreaSitemapPath,
  normalizePath,
  isExcludedSitemapPath,
  allGutterAreaSitemapPaths,
  allRoofAreaSitemapPaths,
  allAreaSitemapPaths,
};
