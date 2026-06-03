/**
 * Structured data audit 06.03 / 06.09 — dateModified on area pages; schema on key inner pages.
 */

import fs from 'node:fs';
import path from 'node:path';

const outDir = path.join(process.cwd(), 'out');

function readExport(relPath) {
  const file = path.join(outDir, relPath);
  if (!fs.existsSync(file)) return null;
  return fs.readFileSync(file, 'utf8');
}

const errors = [];

const areaPages = [
  'gutter-cleaning-birmingham/index.html',
  'gutter-cleaning-solihull/index.html',
];

for (const rel of areaPages) {
  const html = readExport(rel);
  if (!html) {
    errors.push(`${rel} missing`);
    continue;
  }
  if (!html.includes('dateModified') || !/"dateModified":"\d{4}-\d{2}-\d{2}"/.test(html)) {
    errors.push(`${rel} missing ISO dateModified in JSON-LD`);
  }
}

const pageChecks = [
  { file: 'contact/index.html', must: ['ContactPage', 'dateModified'] },
  { file: 'about/index.html', must: ['AboutPage', 'dateModified'] },
  { file: 'pricing/index.html', must: ['PriceSpecification', 'dateModified'] },
  { file: 'windows-cleaning/index.html', must: ['"@type":"Service"', 'dateModified'] },
  { file: 'services/hot-wash-cleaning/index.html', must: ['"@type":"Service"', 'dateModified'] },
  { file: 'the-gutter-gallery/index.html', must: ['CollectionPage', 'dateModified'] },
];

for (const { file, must } of pageChecks) {
  const html = readExport(file);
  if (!html) {
    errors.push(`${file} missing`);
    continue;
  }
  const hasLd = html.includes('application/ld+json');
  if (!hasLd) {
    errors.push(`${file} missing JSON-LD script`);
    continue;
  }
  for (const token of must) {
    if (!html.includes(token)) {
      errors.push(`${file} missing ${token} in export`);
    }
  }
}

if (errors.length) {
  console.error('assert-page-schema: FAILED');
  errors.forEach((e) => console.error(`  - ${e}`));
  process.exit(1);
}

console.log('assert-page-schema: OK — dateModified on area pages + schema on contact/about/pricing/service pages');
