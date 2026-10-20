/**
 * Shared sitemap rules (next-sitemap.config.js + build asserts).
 */

const { readFileSync } = require('node:fs');
const { join } = require('node:path');
const { isNoindexPolicyPath } = require('../lib/index-policy.cjs');

const EXCLUDED_AREA_SLUGS = new Set([
  'gunnislake',
  'lytham-st-annes',
  'whittingham',
  'london',
  'callington',
  'wendover',
]);

const KEYWORD_REDIRECTS = require('../lib/keyword-redirects.json');
const EXCLUDED_PATHS = new Set([
  // Day-1 consolidation: redirected / removed keyword pages
  ...Object.keys(KEYWORD_REDIRECTS.redirects).map((slug) => `/${slug}/`),
  ...Object.keys(KEYWORD_REDIRECTS.staticPages).map((slug) => `/${slug}/`),
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
  // Duplicate of /gutter-cleaning-birmingham/ (301 in .htaccess) — was cannibalising the money page
  '/west-midlands/gutter-cleaning-birmingham/',
  // 301 → / in .htaccess (GSC "Page with redirect")
  '/service-areas/',
  '/gutter-cleaning-with-guarantee/',
  // Ranking consolidation (Oct 2026) — 301 in .htaccess
  '/gutter-cleaning-birmingham/',
  '/trusted-gutter-cleaners-birmingham/',
  '/next-day-gutter-cleaning-birmingham/',
  '/autumn-gutter-cleaning-birmingham/',
  '/residential-gutter-cleaning/',
  '/blog/gutter-cleaning-walsall/',
  '/blog/gutter-cleaning-solihull/',
  // On-page audit (Oct 2026): noindex pages must not be in the sitemap
  '/services/drain-cleaning/',
  '/blog/dome-cleaning-service-wow-gutters/',
  '/blog/road-sign-cleaning-community/',
  // Duplicate copies — canonical points to the linked version (lib/seo.ts CANONICAL_OVERRIDES)
  '/professional-gutter-cleaning/',
  '/free-roof-inspection/',
  '/commercial-gutter-cleaning/',
  '/commercial-downpipe-cleaning/',
  '/commercial-property-gutter-maintenance/',
  '/block-management-gutter-cleaning/',
  '/approved-gutter-cleaning-contractor/',
  '/gutter-repairs-bromsgrove/',
  '/gutter-repairs-wolverhampton/',
  '/gutter-cleaning-cost-calculator/',
  '/gutter-repairs/',
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

function repairAreaSitemapPath(slug) {
  return `/gutter-repair-${slug}/`;
}

function installationAreaSitemapPath(slug) {
  return `/gutter-installation-${slug}/`;
}

function roofInspectionAreaSitemapPath(slug) {
  return `/roof-inspection-${slug}/`;
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

const REMOVED_AREA_PREFIXES = [
  '/exterior-upvc-cleaning-',
  '/commercial-roof-cleaning-',
  '/commercial-gutter-cleaning-',
  '/commercial-gutter-clearing-',
  '/roof-inspection-',
  '/gutter-inspection-',
  '/conservatory-cleaning-',
  '/conservatory-roof-cleaning-',
  '/conservatory-gutter-cleaning-',
];

const REMOVED_SPECIFIC_URLS = new Set([
  '/conservatory-roof-cleaning-birmingham/',
  '/conservatory-cleaning-erdington/',
  '/conservatory-roof-cleaning-dronfield/',
  '/roof-inspections-birmingham/',
  '/upvc-cleaning-birmingham/',
  '/commercial-roof-cleaning-west-midlands/',
  '/commercial-gutter-cleaning-west-midlands/',
]);

function isExcludedSitemapPath(path) {
  const norm = normalizePath(path);
  if (EXCLUDED_PATHS.has(norm)) return true;
  if (REMOVED_SPECIFIC_URLS.has(norm)) return true;
  if (REMOVED_AREA_PREFIXES.some((prefix) => norm.startsWith(prefix))) return true;
  if (isNoindexPolicyPath(norm)) return true;
  if (isExcludedAreaSlugPath(norm, 'gutter-cleaning')) return true;
  if (isExcludedAreaSlugPath(norm, 'roof-cleaning')) return true;
  if (isExcludedAreaSlugPath(norm, 'gutter-repair')) return true;
  if (isExcludedAreaSlugPath(norm, 'gutter-installation')) return true;
  if (isExcludedAreaSlugPath(norm, 'roof-inspection')) return true;
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

function allRepairAreaSitemapPaths() {
  return readAreaSlugsFromRepo()
    .filter((slug) => !EXCLUDED_AREA_SLUGS.has(slug))
    .map((slug) => repairAreaSitemapPath(slug));
}

function allInstallationAreaSitemapPaths() {
  return readAreaSlugsFromRepo()
    .filter((slug) => !EXCLUDED_AREA_SLUGS.has(slug))
    .map((slug) => installationAreaSitemapPath(slug));
}

function allRoofInspectionAreaSitemapPaths() {
  return readAreaSlugsFromRepo()
    .filter((slug) => !EXCLUDED_AREA_SLUGS.has(slug))
    .map((slug) => roofInspectionAreaSitemapPath(slug));
}

function allAreaSitemapPaths() {
  return [
    ...allGutterAreaSitemapPaths(),
    ...allRoofAreaSitemapPaths(),
    ...allRepairAreaSitemapPaths(),
    ...allInstallationAreaSitemapPaths(),
  ].filter((p) => !isExcludedSitemapPath(p));
}

module.exports = {
  EXCLUDED_AREA_SLUGS,
  EXCLUDED_PATHS,
  REQUIRED_INDEXABLE_PATHS,
  readAreaSlugsFromRepo,
  areaSitemapPath,
  roofAreaSitemapPath,
  repairAreaSitemapPath,
  installationAreaSitemapPath,
  roofInspectionAreaSitemapPath,
  normalizePath,
  isExcludedSitemapPath,
  allGutterAreaSitemapPaths,
  allRoofAreaSitemapPaths,
  allRepairAreaSitemapPaths,
  allInstallationAreaSitemapPaths,
  allAreaSitemapPaths,
};
