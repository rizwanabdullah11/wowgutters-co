/**
 * HTTPS & security audit 05.04–05.05 — HSTS and domain consolidation rules in out/.htaccess
 */

import fs from 'node:fs';
import path from 'node:path';

const htaccessPath = path.join(process.cwd(), 'out', '.htaccess');

if (!fs.existsSync(htaccessPath)) {
  console.error('assert-htaccess-security: missing out/.htaccess — run npm run build first');
  process.exit(1);
}

const content = fs.readFileSync(htaccessPath, 'utf8');

const required = [
  'Strict-Transport-Security',
  'max-age=63072000',
  'includeSubDomains',
  'preload',
  'wow-gutters',
  'wowgutters\\.uk',
];

const missing = required.filter((snippet) => !content.includes(snippet));

if (missing.length) {
  console.error('assert-htaccess-security: FAILED — out/.htaccess missing:');
  missing.forEach((s) => console.error(`  - ${s}`));
  process.exit(1);
}

const altDir = path.join(process.cwd(), 'out', 'hostinger-alternate-domains');
if (!fs.existsSync(path.join(altDir, 'wow-gutters.com.htaccess'))) {
  console.error('assert-htaccess-security: missing out/hostinger-alternate-domains/*.htaccess');
  process.exit(1);
}

console.log('assert-htaccess-security: OK — HSTS + alternate-domain 301 rules in out/.htaccess');
