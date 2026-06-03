/**
 * Static checks for mobile-friendliness audit (04.01–04.04).
 */

import fs from 'node:fs';
import path from 'node:path';

const indexPath = path.join(process.cwd(), 'out', 'index.html');

if (!fs.existsSync(indexPath)) {
  console.error('assert-mobile-friendly: missing out/index.html — run npm run build first');
  process.exit(1);
}

const html = fs.readFileSync(indexPath, 'utf8');
const errors = [];

if (!/name=["']viewport["'][^>]*content=["'][^"']*width=device-width/i.test(html)) {
  errors.push('viewport meta with width=device-width');
}

const telCount = (html.match(/href=["']tel:/gi) || []).length;
if (telCount < 1) {
  errors.push('at least one tel: link on homepage');
}

const cssHrefMatch = html.match(/href=["']\.\/_next\/static\/chunks\/[^"']+\.css["']/i);
let cssBundle = '';
if (cssHrefMatch) {
  const rel = cssHrefMatch[0].replace(/^href=["']|["']$/g, '');
  const cssFile = path.join(process.cwd(), 'out', rel.replace(/^\.\//, '').replace(/\//g, path.sep));
  if (fs.existsSync(cssFile)) {
    cssBundle = fs.readFileSync(cssFile, 'utf8');
  }
}
if (!cssBundle) {
  const chunksDir = path.join(process.cwd(), 'out', '_next', 'static', 'chunks');
  if (fs.existsSync(chunksDir)) {
    cssBundle = fs
      .readdirSync(chunksDir)
      .filter((f) => f.endsWith('.css'))
      .map((f) => fs.readFileSync(path.join(chunksDir, f), 'utf8'))
      .join('\n');
  }
}

if (!cssBundle) {
  errors.push('exported CSS bundle (out/_next/static/chunks/*.css)');
} else {
  if (!/font-size:\s*16px/i.test(cssBundle) && !/font-size:1rem/i.test(cssBundle)) {
    errors.push('16px base font rule in exported CSS');
  }
  if (!/min-height:\s*48px/i.test(cssBundle)) {
    errors.push('48px min-height tap-target rules in exported CSS');
  }
}

if (errors.length) {
  console.error('assert-mobile-friendly: FAILED — missing:');
  errors.forEach((e) => console.error(`  - ${e}`));
  process.exit(1);
}

console.log(
  `assert-mobile-friendly: OK — viewport, ${telCount} tel: link(s), 16px base + 48px tap targets in CSS`
);
