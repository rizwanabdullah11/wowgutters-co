import fs from 'node:fs';
import path from 'node:path';

const outDir = path.join(process.cwd(), 'out');

const mustHaveSchema = [
  'gutter-cleaning-birmingham/index.html',
  'gutter-cleaning-wolverhampton/index.html',
  'gutter-cleaning-coventry/index.html',
  'gutter-cleaning-moseley/index.html',
  'gutter-cleaning-solihull/index.html',
  'gutter-cleaning-acocks-green/index.html',
];

const missing = [];

for (const rel of mustHaveSchema) {
  const file = path.join(outDir, rel);
  if (!fs.existsSync(file)) {
    missing.push(`${rel} (file missing)`);
    continue;
  }
  const html = fs.readFileSync(file, 'utf8');
  const inHead =
    /<head>[\s\S]*id="schema-static"[\s\S]*<\/head>/i.test(html) ||
    /<head>[\s\S]*HomeAndConstructionBusiness[\s\S]*<\/head>/i.test(html);
  if (!inHead && !html.includes('id="schema-static"')) {
    missing.push(`${rel} (no schema-static in export)`);
  }
}

if (missing.length) {
  console.error('assert-area-schema: FAILED');
  missing.forEach((m) => console.error(`  - ${m}`));
  process.exit(1);
}

console.log('assert-area-schema: OK — schema-static present on all checked area pages');
