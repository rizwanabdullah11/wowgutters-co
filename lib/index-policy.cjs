/**
 * Index policy — single source of truth for which generated pages Google should NOT index.
 *
 * Why: Search Console (Oct 2026) reported 17,993 "Crawled – currently not indexed" pages.
 * Google is rejecting near-duplicate location templates (e.g. two commercial-roof-cleaning
 * area pages were 93% identical) and pages for towns we don't serve. Keeping them indexable
 * dilutes the whole site.
 *
 * Effect of a match:
 *   - removed from sitemap.xml        (scripts/sitemap-config.cjs)
 *   - <meta name="robots"> → noindex  (scripts/apply-index-policy.mjs, post-export)
 *   Pages stay live and keep "follow", so internal links still pass value.
 *
 * To bring a template back into the index, delete its prefix below and rebuild.
 */

/** Thin, templated location pages — one per area slug, near-identical copy. */
const NOINDEX_PREFIXES = [
  'commercial-roof-cleaning-',
  'commercial-gutter-clearing-',
  'gutter-installation-',
  'roof-inspection-',
  'exterior-upvc-cleaning-',
];

/**
 * Towns/terms outside the service area (West Midlands, Worcestershire, Warwickshire,
 * south Staffordshire). Matched as the trailing part of the URL slug.
 * Note: 'stoke' alone is Stoke, Coventry (served) — only 'stoke-on-trent' is excluded.
 */
const OUT_OF_AREA_SUFFIXES = [
  'derby',
  'stoke-on-trent',
  'stoke-congleton',
  'congleton',
  'wanstead',
  'westminster',
  'southall',
  'redbridge',
  'welling',
  'tilehurst',
  'earley',
  'warfield',
  'scarisbrick',
  'mirfield',
  'leek',
  'godalming',
  'clapton',
  'plumstead',
  'richmond',
  'middlesex',
  'maple-ridge',
  'abbotsford',
  'mount-lehman',
  'sandown',
  'millwall',
  'virginia-water',
  'virginia-waters',
  'worcester-park',
  'blackwater',
  'atherton',
  'bamber-bridge',
  'firbeck',
  'catliffe',
  'penrith',
  'tetbury',
  'blackwood',
  'basin-city',
  'waterfoot',
  'cleveden',
  'monmouth',
  'woburn',
  'sherwood-park',
  'bulverde',
  'wantirna',
  'west-ham',
  'west-moors',
  'blandford',
  'park-gate',
  'hampton-hill',
  'wood-green',
  'oxford',
  'sale',
];

/** Whole slugs that are out of scope regardless of suffix matching. */
const OUT_OF_AREA_SLUGS = new Set([
  'gutter-cleaning-hayes', // Hayes, London (Pype Hayes, Birmingham is served and NOT matched)
  'gutter-cleaning-bow',
  'gutter-cleaning-charlton',
  'gutter-cleaning-hoo',
  'gutter-cleaning-march',
  'gutter-cleaning-uk', // generic national page; informational "-uk" guides are NOT matched
  'eavestrough-cleaning',
  'eavestrough-cleaning-near-me',
  'eavestrough-cleaning-services',
]);

function slugOf(path) {
  return String(path || '')
    .replace(/^https?:\/\/[^/]+/, '')
    .replace(/^\/+|\/+$/g, '')
    .toLowerCase();
}

function isThinTemplatePath(path) {
  const slug = slugOf(path);
  if (slug.includes('/')) return false;
  return NOINDEX_PREFIXES.some((p) => slug.startsWith(p));
}

function isOutOfAreaPath(path) {
  const slug = slugOf(path);
  if (!slug || slug.includes('/')) return false;
  if (OUT_OF_AREA_SLUGS.has(slug)) return true;
  if (slug.startsWith('eavestrough')) return true;
  return OUT_OF_AREA_SUFFIXES.some((s) => slug === s || slug.endsWith(`-${s}`));
}

function isNoindexPolicyPath(path) {
  return isThinTemplatePath(path) || isOutOfAreaPath(path);
}

module.exports = {
  NOINDEX_PREFIXES,
  OUT_OF_AREA_SUFFIXES,
  OUT_OF_AREA_SLUGS,
  isThinTemplatePath,
  isOutOfAreaPath,
  isNoindexPolicyPath,
};
