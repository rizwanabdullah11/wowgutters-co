/**
 * On-page SEO audit 07.04 / 07.06 — descriptive anchors in static export (no generic Learn/Read More).
 */

import fs from 'node:fs';
import path from 'node:path';

function readExport(rel) {
  const file = path.join(process.cwd(), 'out', rel);
  return fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : null;
}

const files = [
  'index.html',
  'services/index.html',
  'gutter-cleaning-birmingham/index.html',
  'contact/index.html',
];

const errors = [];
const genericAnchors = />\s*Learn More\s*</i;
const genericReadMore = />\s*Read More\s*</i;

for (const rel of files) {
  const html = readExport(rel);
  if (!html) {
    errors.push(`missing ${rel}`);
    continue;
  }
  if (genericAnchors.test(html) || genericReadMore.test(html)) {
    errors.push(`${rel} still contains generic "Learn More" or "Read More" link text`);
  }
}

const home = readExport('index.html');
if (home && !home.includes('view service')) {
  errors.push('homepage missing descriptive service link text');
}

// ── Every indexable page (Nov 25 2026 audit) ──
// Each URL in the sitemap must have: one <h1>, a 30–65 character <title>, and a
// 70–165 character meta description. The build fails if any page breaks the rule,
// so long titles / duplicate H1s can't creep back in when new posts are added.
const decode = (s) =>
  s.replace(/&amp;/g, '&').replace(/&#x27;|&#39;|&apos;/g, "'").replace(/&quot;/g, '"')
    .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&nbsp;/g, ' ');
const sitemap = readExport('sitemap.xml') || '';
const sitemapPaths = [...sitemap.matchAll(/<loc>https?:\/\/[^/]+(\/[^<]*)<\/loc>/g)].map((m) => m[1]);
let checked = 0;
for (const urlPath of sitemapPaths) {
  const rel = `${urlPath.replace(/^\//, '')}index.html`;
  const html = readExport(rel);
  if (!html) {
    errors.push(`sitemap page missing from export: ${urlPath}`);
    continue;
  }
  checked++;
  const title = decode((html.match(/<title>([\s\S]*?)<\/title>/i) || [, ''])[1].trim());
  const desc = decode((html.match(/<meta name="description" content="([^"]*)"/i) || [, ''])[1].trim());
  const h1s = (html.match(/<h1[\s>]/gi) || []).length;
  if (h1s !== 1) errors.push(`${urlPath} has ${h1s} <h1> tags (needs exactly 1)`);
  if (title.length < 30 || title.length > 65) errors.push(`${urlPath} title is ${title.length} chars (30–65): "${title}"`);
  if (/\s(in|for|of|to|and|&)\s*\|/i.test(title)) errors.push(`${urlPath} title has a dangling word before "|": "${title}"`);
  if (desc.length < 70 || desc.length > 165) errors.push(`${urlPath} meta description is ${desc.length} chars (70–165)`);
}
if (!sitemapPaths.length) errors.push('out/sitemap.xml has no URLs to check');

if (errors.length) {
  console.error('assert-onpage-seo: FAILED');
  errors.forEach((e) => console.error(`  - ${e}`));
  process.exit(1);
}

console.log(`assert-onpage-seo: OK — ${checked} sitemap pages pass title/H1/description checks; no generic anchors`);
