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

if (errors.length) {
  console.error('assert-onpage-seo: FAILED');
  errors.forEach((e) => console.error(`  - ${e}`));
  process.exit(1);
}

console.log('assert-onpage-seo: OK — no generic Learn/Read More anchors in key exports');
