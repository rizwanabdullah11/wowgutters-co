/**
 * Ensures out/.htaccess sets long-cache headers for Next.js /_next/static/ bundles.
 * PageSpeed audit 03.07 — FilesMatch on path does not work on Apache; LocationMatch must exist.
 */

import fs from 'node:fs';
import path from 'node:path';

const htaccessPath = path.join(process.cwd(), 'out', '.htaccess');

if (!fs.existsSync(htaccessPath)) {
  console.error('assert-htaccess-cache: missing out/.htaccess — run npm run build first');
  process.exit(1);
}

const content = fs.readFileSync(htaccessPath, 'utf8');

const required = [
  '<LocationMatch "^/_next/static/">',
  'max-age=31536000, immutable',
  'mod_expires.c',
];

const missing = required.filter((snippet) => !content.includes(snippet));

if (missing.length) {
  console.error('assert-htaccess-cache: FAILED — out/.htaccess missing required cache rules:');
  missing.forEach((s) => console.error(`  - ${s}`));
  process.exit(1);
}

console.log('assert-htaccess-cache: OK — _next/static Cache-Control rules present in out/.htaccess');
