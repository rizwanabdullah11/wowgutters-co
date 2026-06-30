/**
 * One-off: shorten long blog slugs and add vercel redirects.
 * Run: node scripts/shorten-blog-slugs.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

/** old slug → new shorter slug */
export const BLOG_SLUG_REDIRECTS = {
  'how-birmingham-heavy-rainfall-damages-home-blocked-gutters': 'birmingham-rain-gutter-damage',
  'before-after-birmingham-gutter-cleaning-results': 'birmingham-gutter-before-after',
  'gutter-cleaning-balsall-heath-b12-birmingham': 'gutter-cleaning-balsall-heath',
  'gutter-cleaning-nechells-b7-birmingham': 'gutter-cleaning-nechells',
  'gutter-cleaning-yardley-b25-birmingham': 'gutter-cleaning-yardley',
  'gutter-cleaning-acocks-green-b27-birmingham': 'gutter-cleaning-acocks-green',
  'gutter-cleaning-harborne-b17-birmingham': 'gutter-cleaning-harborne',
  'gutter-cleaning-selly-oak-b29-birmingham': 'gutter-cleaning-selly-oak',
  'roof-moss-removal-kings-norton-b30-birmingham': 'roof-moss-kings-norton',
  'fascias-soffits-gutter-cleaning-west-midlands': 'fascias-soffits-west-midlands',
  'commercial-warehouse-gutter-clearing-birmingham': 'warehouse-gutter-clearing',
  'ladder-free-gutter-cleaning-revolution': 'ladder-free-gutter-cleaning',
  'downpipe-shoe-prevents-blockages': 'downpipe-shoe',
  'blocked-gutters-silently-damaging-birmingham-home-how-to-spot-it': 'silent-gutter-damage-birmingham',
};

const SKIP_DIRS = new Set(['node_modules', '.next', '.git']);

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (SKIP_DIRS.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, files);
    else if (/\.(ts|tsx|json|xml|txt|html|md)$/.test(entry.name) && !entry.name.endsWith('.bak'))
      files.push(full);
  }
  return files;
}

function replaceSlugs(content) {
  let out = content;
  for (const [oldSlug, newSlug] of Object.entries(BLOG_SLUG_REDIRECTS)) {
    out = out.split(oldSlug).join(newSlug);
  }
  return out;
}

// 1. Replace slugs in source files
const files = walk(root);
let changed = 0;
for (const file of files) {
  if (file.includes('shorten-blog-slugs.mjs')) continue;
  const before = fs.readFileSync(file, 'utf8');
  const after = replaceSlugs(before);
  if (after !== before) {
    fs.writeFileSync(file, after, 'utf8');
    changed++;
    console.log('updated:', path.relative(root, file));
  }
}

// 2. Append redirects to vercel.json
const vercelPath = path.join(root, 'vercel.json');
const vercel = JSON.parse(fs.readFileSync(vercelPath, 'utf8'));
const existing = new Set(
  vercel.redirects.map((r) => `${r.source}|${r.destination}`)
);

for (const [oldSlug, newSlug] of Object.entries(BLOG_SLUG_REDIRECTS)) {
  for (const source of [`/blog/${oldSlug}`, `/blog/${oldSlug}/`]) {
    const destination = `/blog/${newSlug}/`;
    const key = `${source}|${destination}`;
    if (!existing.has(key)) {
      vercel.redirects.push({ source, destination, permanent: true });
      existing.add(key);
    }
  }
}

fs.writeFileSync(vercelPath, JSON.stringify(vercel, null, 2) + '\n', 'utf8');
console.log(`\nDone. ${changed} files updated, ${Object.keys(BLOG_SLUG_REDIRECTS).length} slug redirects added.`);
