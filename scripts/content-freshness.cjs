/**
 * Per-URL sitemap <lastmod> from REAL dates (used by post-sitemap-sync.mjs).
 *
 *  - Blog posts: the post's own dateModified (falls back to datePublished), read from the
 *    Article/BlogPosting JSON-LD in the exported out/blog/<slug>/index.html.
 *  - Other pages: the last git commit that touched the page's own source file
 *    (app/<route>/page.tsx, or app/page.tsx for "/").
 *  - No real date available → <lastmod> is omitted (never a made-up or shared date).
 *
 * Also strips <changefreq> and <priority> (Google ignores both).
 */

const fs = require('node:fs');
const path = require('node:path');
const { execFileSync } = require('node:child_process');
const { normalizePath } = require('./sitemap-config.cjs');

const ROOT = process.cwd();
const OUT = path.join(ROOT, 'out');

let gitDates = null;
/** file (repo-relative, forward slashes) → ISO date of the latest commit touching it */
function loadGitDates() {
  if (gitDates) return gitDates;
  gitDates = new Map();
  try {
    const log = execFileSync('git', ['log', '--format=@@%cI', '--name-only', '--', 'app'], {
      cwd: ROOT,
      encoding: 'utf8',
      maxBuffer: 256 * 1024 * 1024,
    });
    let current = null;
    for (const line of log.split(/\r?\n/)) {
      if (line.startsWith('@@')) current = line.slice(2).trim();
      else if (line && current && !gitDates.has(line)) gitDates.set(line, current);
    }
  } catch {
    console.warn('content-freshness: git history unavailable — non-blog URLs get no <lastmod>');
  }
  return gitDates;
}

function isoDate(value) {
  const d = new Date(value);
  return Number.isNaN(d.getTime()) ? null : d.toISOString();
}

function collectNodes(data, acc = []) {
  if (Array.isArray(data)) data.forEach((d) => collectNodes(d, acc));
  else if (data && typeof data === 'object') {
    acc.push(data);
    if (data['@graph']) collectNodes(data['@graph'], acc);
  }
  return acc;
}

function blogLastMod(norm) {
  const file = path.join(OUT, norm, 'index.html');
  if (!fs.existsSync(file)) return null;
  const html = fs.readFileSync(file, 'utf8');
  const scripts = html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g);
  for (const [, json] of scripts) {
    let data;
    try { data = JSON.parse(json); } catch { continue; }
    for (const node of collectNodes(data)) {
      const types = [].concat(node['@type'] || []);
      if (!types.some((t) => t === 'BlogPosting' || t === 'Article' || t === 'NewsArticle')) continue;
      const d = isoDate(node.dateModified) || isoDate(node.datePublished);
      if (d) return d;
    }
  }
  return null;
}

function pageLastMod(norm) {
  const dates = loadGitDates();
  const route = norm === '/' ? '' : norm.replace(/^\/|\/$/g, '');
  const candidates = route
    ? [`app/${route}/page.tsx`, `app/${route}/page.ts`, `app/${route}/layout.tsx`]
    : ['app/page.tsx'];
  for (const file of candidates) {
    if (dates.has(file)) return dates.get(file);
  }
  return null;
}

function getLastModForPath(p) {
  const norm = normalizePath(p);
  if (/^\/blog\/[^/]+\/$/.test(norm)) return blogLastMod(norm);
  return pageLastMod(norm);
}

function refreshSitemapLastmods(xml) {
  return xml
    .replace(/[ \t]*<changefreq>[^<]*<\/changefreq>\r?\n?/g, '')
    .replace(/[ \t]*<priority>[^<]*<\/priority>\r?\n?/g, '')
    .replace(/<url>([\s\S]*?)<\/url>/g, (block) => {
      const locMatch = block.match(/<loc>https:\/\/wowgutters\.co\.uk([^<]*)<\/loc>/);
      if (!locMatch) return block;
      const lastmod = getLastModForPath(locMatch[1] || '/');
      const stripped = block.replace(/[ \t]*<lastmod>[^<]*<\/lastmod>\r?\n?/g, '');
      return lastmod ? stripped.replace('</url>', `<lastmod>${lastmod}</lastmod>\n</url>`) : stripped;
    });
}

module.exports = {
  getLastModForPath,
  refreshSitemapLastmods,
};
