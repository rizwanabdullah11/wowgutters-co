/** @type {import('next-sitemap').IConfig} */
const {
  EXCLUDED_PATHS,
  REQUIRED_INDEXABLE_PATHS,
  allAreaSitemapPaths,
  isExcludedSitemapPath,
  normalizePath,
} = require('./scripts/sitemap-config.cjs');

const HIGH_PRIORITY = new Set([
  '/',
  '/gutter-cleaning-birmingham/',
  '/roof-cleaning-birmingham/',
  '/help/unblock/',
  '/help/clean/',
  '/contact/',
  '/quote/',
]);

function areaPagePriority(path) {
  if (
    path.startsWith('/gutter-cleaning-') ||
    path.startsWith('/roof-cleaning-') ||
    path.startsWith('/gutter-repair-') ||
    path.startsWith('/roof-inspection-')
  ) {
    return 0.85;
  }
  return 0.7;
}

module.exports = {
  siteUrl: 'https://wowgutters.co.uk',
  generateRobotsTxt: false,
  /** Single urlset at /sitemap.xml (matches Next app/sitemap.ts + Hostinger deploy). */
  generateIndexSitemap: false,
  changefreq: 'monthly',
  priority: 0.7,
  additionalPaths: async () => {
    const paths = new Set([
      ...REQUIRED_INDEXABLE_PATHS,
      ...allAreaSitemapPaths(),
    ]);

    return [...paths].map((path) => {
      const norm = normalizePath(path);
      return {
        loc: norm,
        changefreq: HIGH_PRIORITY.has(norm) ? 'weekly' : 'monthly',
        priority: HIGH_PRIORITY.has(norm)
          ? 1.0
          : areaPagePriority(norm),
        lastmod: new Date().toISOString(),
      };
    });
  },
  transform: async (config, path) => {
    const norm = normalizePath(path);

    if (isExcludedSitemapPath(norm)) {
      return null;
    }

    return {
      loc: norm,
      changefreq: HIGH_PRIORITY.has(norm) ? 'weekly' : 'monthly',
      priority: HIGH_PRIORITY.has(norm)
        ? 1.0
        : norm.startsWith('/services/')
          ? 0.8
          : areaPagePriority(norm),
      lastmod: new Date().toISOString(),
    };
  },
};
