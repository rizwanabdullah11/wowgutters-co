/**
 * Post-export: point internal links at the final URL instead of a URL that 301s.
 * Keeps the static export's relative link style ("../", "./", "/").
 *
 * Keep in sync with the 301 rules in scripts/hostinger-htaccess.mjs.
 */
import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const OUT = join(process.cwd(), 'out');

/** from (no leading slash, trailing slash) → to (same form; '' = homepage) */
const REDIRECTS = {
  'gutter-cleaning-birmingham/': '',
  'west-midlands/gutter-cleaning-birmingham/': '',
  'trusted-gutter-cleaners-birmingham/': '',
  'next-day-gutter-cleaning-birmingham/': '',
  'autumn-gutter-cleaning-birmingham/': '',
  'residential-gutter-cleaning/': '',
  'blog/gutter-cleaning-walsall/': 'gutter-cleaning-walsall/',
  'blog/gutter-cleaning-solihull/': 'gutter-cleaning-solihull/',
  'service-areas/': '',
  'hot-wash/': 'services/hot-wash-cleaning/',
  'gutters-cleaning/': 'services/gutter-cleaning/',
  'conservatory-cleaning/': 'services/conservatory/',
  'help/inspect/': 'services/gutter-inspection/',
  'services/inspection/': 'services/gutter-inspection/',
  'services/free-gutter-inspection/': 'services/gutter-inspection/',
  'home/': '',
};

const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const PREFIX = '((?:\\.\\./)+|\\./|/|https://wowgutters\\.co\\.uk/)';
const RULES = Object.entries(REDIRECTS).map(([from, to]) => ({
  // trailing slash optional: blog HTML often links "/gutter-cleaning-birmingham" without it
  re: new RegExp(`href="${PREFIX}${esc(from.replace(/\/$/, ''))}/?"`, 'g'),
  to,
}));

function* htmlFiles(dir) {
  for (const name of readdirSync(dir)) {
    if (name === '_next') continue;
    const full = join(dir, name);
    if (statSync(full).isDirectory()) yield* htmlFiles(full);
    else if (name.endsWith('.html')) yield full;
  }
}

let files = 0;
let links = 0;
for (const file of htmlFiles(OUT)) {
  const html = readFileSync(file, 'utf8');
  let next = html;
  for (const { re, to } of RULES) {
    next = next.replace(re, (_m, prefix) => {
      links++;
      return `href="${prefix}${to}"`;
    });
  }
  if (next !== html) {
    writeFileSync(file, next);
    files++;
  }
}
console.log(`rewrite-redirect-links: updated ${links} link(s) in ${files} file(s)`);
