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

/**
 * Day 4 (Oct 29 2026): area pages with ZERO Search Console impressions in the 90 days to
 * 27 Oct 2026 (pulled from GSC with a page filter per template, so the lists are complete).
 * They are thin templates Google is not using; noindexing them concentrates crawl and
 * ranking signals on the area pages that do get impressions. Pages stay live with "follow".
 * Main towns are never matched (MAIN_TOWNS) even if they had no impressions.
 * Re-run the GSC check in ~3 months and remove any slug that starts earning impressions.
 */
const MAIN_TOWNS = new Set([
  'birmingham', 'solihull', 'sutton-coldfield', 'wolverhampton', 'walsall', 'dudley', 'west-bromwich',
  'sandwell', 'halesowen', 'coventry', 'worcester', 'redditch', 'bromsgrove', 'kidderminster',
  'malvern', 'evesham', 'droitwich-spa', 'smethwick', 'tamworth', 'lichfield', 'cannock',
]);

const ZERO_IMPRESSION_SLUGS = new Set([
  'gutter-cleaning-allesley', 'gutter-cleaning-amblecote', 'gutter-cleaning-bentley',
  'gutter-cleaning-bickenhill', 'gutter-cleaning-binley', 'gutter-cleaning-bordesley',
  'gutter-cleaning-bordesley-green', 'gutter-cleaning-bromford', 'gutter-cleaning-brownhills',
  'gutter-cleaning-browns-green', 'gutter-cleaning-cheylesmore', 'gutter-cleaning-compton',
  'gutter-cleaning-coseley', 'gutter-cleaning-digbeth', 'gutter-cleaning-earlsdon', 'gutter-cleaning-elmdon',
  'gutter-cleaning-erdington', 'gutter-cleaning-fallings-park', 'gutter-cleaning-foleshill',
  'gutter-cleaning-fordbridge', 'gutter-cleaning-frankley', 'gutter-cleaning-gornal',
  'gutter-cleaning-great-bridge', 'gutter-cleaning-green-lane', 'gutter-cleaning-hampton-in-arden',
  'gutter-cleaning-heath-town', 'gutter-cleaning-highters-heath', 'gutter-cleaning-hill-cross',
  'gutter-cleaning-hockley-heath', 'gutter-cleaning-holbrooks', 'gutter-cleaning-keresley',
  'gutter-cleaning-knowle', 'gutter-cleaning-longford', 'gutter-cleaning-meriden', 'gutter-cleaning-newtown',
  'gutter-cleaning-oldbury', 'gutter-cleaning-olton', 'gutter-cleaning-oscott', 'gutter-cleaning-oxley',
  'gutter-cleaning-pelsall', 'gutter-cleaning-pensnett', 'gutter-cleaning-pleck',
  'gutter-cleaning-quarry-bank', 'gutter-cleaning-rednal', 'gutter-cleaning-rowley-regis',
  'gutter-cleaning-saltley', 'gutter-cleaning-selly-park', 'gutter-cleaning-silhill',
  'gutter-cleaning-smiths-wood', 'gutter-cleaning-south-yardley', 'gutter-cleaning-sparkhill',
  'gutter-cleaning-stirchley', 'gutter-cleaning-stoke', 'gutter-cleaning-summerfield',
  'gutter-cleaning-tile-cross', 'gutter-cleaning-tipton', 'gutter-cleaning-tividale',
  'gutter-cleaning-vauxhall', 'gutter-cleaning-warstock', 'gutter-cleaning-winson-green',
  'gutter-cleaning-wollaston', 'gutter-cleaning-wordsley', 'gutter-cleaning-wyken',
  'gutter-cleaning-yardley', 'gutter-cleaning-yardley-wood',
  'roof-cleaning-allesley', 'roof-cleaning-bentley', 'roof-cleaning-coundon', 'roof-cleaning-cranmore',
  'roof-cleaning-fallings-park', 'roof-cleaning-holbrooks', 'roof-cleaning-kingstanding',
  'roof-cleaning-marston-green', 'roof-cleaning-pleck', 'roof-cleaning-redditch', 'roof-cleaning-rubery',
  'roof-cleaning-sedgley', 'roof-cleaning-selly-park', 'roof-cleaning-sheldon', 'roof-cleaning-smethwick',
  'roof-cleaning-solihull', 'roof-cleaning-summerfield', 'roof-cleaning-sutton-coldfield',
  'roof-cleaning-tamworth', 'roof-cleaning-tettenhall', 'roof-cleaning-tipton', 'roof-cleaning-warley',
  'roof-cleaning-west-bromwich', 'roof-cleaning-willenhall', 'roof-cleaning-winson-green',
  'roof-cleaning-wolverhampton', 'roof-cleaning-worcester',
  'gutter-repair-allesley', 'gutter-repair-amblecote', 'gutter-repair-bordesley', 'gutter-repair-canley',
  'gutter-repair-cheylesmore', 'gutter-repair-compton', 'gutter-repair-duddeston', 'gutter-repair-foleshill',
  'gutter-repair-gravelly-hill', 'gutter-repair-heath-town', 'gutter-repair-holbrooks', 'gutter-repair-lye',
  'gutter-repair-maney', 'gutter-repair-oxley', 'gutter-repair-pelsall', 'gutter-repair-radford',
  'gutter-repair-roughley', 'gutter-repair-selly-park', 'gutter-repair-shenley-green',
  'gutter-repair-summerfield', 'gutter-repair-vauxhall',
]);

function isZeroImpressionPath(path) {
  const slug = slugOf(path);
  if (!ZERO_IMPRESSION_SLUGS.has(slug)) return false;
  const area = slug.replace(/^(gutter-cleaning|roof-cleaning|gutter-repair)-/, '');
  return !MAIN_TOWNS.has(area);
}

function isNoindexPolicyPath(path) {
  return isThinTemplatePath(path) || isOutOfAreaPath(path) || isZeroImpressionPath(path);
}

module.exports = {
  NOINDEX_PREFIXES,
  OUT_OF_AREA_SUFFIXES,
  OUT_OF_AREA_SLUGS,
  isThinTemplatePath,
  isOutOfAreaPath,
  isZeroImpressionPath,
  ZERO_IMPRESSION_SLUGS,
  isNoindexPolicyPath,
};
