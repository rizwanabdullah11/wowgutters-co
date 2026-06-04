/**
 * Per-route sitemap lastmod (audit 14.03). Used by post-sitemap-sync.mjs.
 */

const { normalizePath } = require('./sitemap-config.cjs');

/** Bump when service/marketing pages are updated. */
const SITE_CONTENT_UPDATED = '2026-06-02';

/** Recently refreshed service pages (exact lastmod date). */
const FRESH_SERVICE_PATHS = new Set([
  '/windows-cleaning/',
  '/services/hot-wash-cleaning/',
  '/hot-wash/',
  '/the-gutter-gallery/',
  '/pricing/',
  '/services/',
  '/about/',
  '/contact/',
  '/quote/',
  '/citations/',
]);

function areaLastModIso(slug) {
  const base = new Date('2026-05-20T09:00:00.000Z');
  const offset = [...slug].reduce((n, c) => n + c.charCodeAt(0), 0) % 12;
  base.setUTCDate(base.getUTCDate() + offset);
  return base.toISOString();
}

function getLastModForPath(path) {
  const norm = normalizePath(path);
  if (FRESH_SERVICE_PATHS.has(norm)) {
    return `${SITE_CONTENT_UPDATED}T12:00:00.000Z`;
  }
  const areaMatch = norm.match(/^\/gutter-cleaning-([^/]+)\/$/);
  if (areaMatch) return areaLastModIso(areaMatch[1]);
  if (norm === '/') return `${SITE_CONTENT_UPDATED}T10:00:00.000Z`;
  if (norm.startsWith('/blog/')) return `${SITE_CONTENT_UPDATED}T08:00:00.000Z`;
  return `${SITE_CONTENT_UPDATED}T08:00:00.000Z`;
}

function refreshSitemapLastmods(xml) {
  return xml.replace(/<url>([\s\S]*?)<\/url>/g, (block) => {
    const locMatch = block.match(/<loc>https:\/\/wowgutters\.co\.uk([^<]*)<\/loc>/);
    if (!locMatch) return block;
    const path = locMatch[1] || '/';
    const lastmod = getLastModForPath(path);
    if (/<lastmod>/.test(block)) {
      return block.replace(/<lastmod>[^<]+<\/lastmod>/, `<lastmod>${lastmod}</lastmod>`);
    }
    return block.replace('</url>', `<lastmod>${lastmod}</lastmod>\n</url>`);
  });
}

module.exports = {
  SITE_CONTENT_UPDATED,
  FRESH_SERVICE_PATHS,
  getLastModForPath,
  refreshSitemapLastmods,
};
