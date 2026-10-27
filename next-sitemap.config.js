/** @type {import('next-sitemap').IConfig} */
const {
  EXCLUDED_PATHS,
  REQUIRED_INDEXABLE_PATHS,
  allAreaSitemapPaths,
  isExcludedSitemapPath,
  normalizePath,
} = require('./scripts/sitemap-config.cjs');

// No changefreq/priority (Google ignores both). lastmod is set per URL by
// scripts/post-sitemap-sync.mjs from real dates (blog dateModified / git history).

module.exports = {
  siteUrl: 'https://wowgutters.co.uk',
  generateRobotsTxt: false,
  /** Single urlset at /sitemap.xml (matches Next app/sitemap.ts + Hostinger deploy). */
  generateIndexSitemap: false,
  autoLastmod: false,
  additionalPaths: async () => {
    const paths = new Set([
      ...REQUIRED_INDEXABLE_PATHS,
      ...allAreaSitemapPaths(),
    ]);

    return [...paths].map((path) => {
      const norm = normalizePath(path);
      return { loc: norm };
    });
  },
  transform: async (config, path) => {
    const norm = normalizePath(path);

    if (isExcludedSitemapPath(norm)) {
      return null;
    }

    return { loc: norm };
  },
};
