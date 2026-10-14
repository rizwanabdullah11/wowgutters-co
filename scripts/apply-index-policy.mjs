/**
 * Post-export: set <meta name="robots"> / <meta name="googlebot"> to "noindex, follow"
 * on every exported page matched by lib/index-policy.cjs.
 *
 * Runs on out/ after `next build`, so it covers every route that generates these pages
 * ([slug], gutter-cleaning-[slug], static folders) from one place.
 */
import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const { isNoindexPolicyPath, isThinTemplatePath } = require('../lib/index-policy.cjs');

const OUT = join(process.cwd(), 'out');
const NOINDEX = 'noindex, follow';

function* indexFiles(dir) {
  for (const name of readdirSync(dir)) {
    if (name === '_next') continue;
    const full = join(dir, name);
    if (statSync(full).isDirectory()) yield* indexFiles(full);
    else if (name === 'index.html') yield full;
  }
}

function setRobotsMeta(html, name) {
  const re = new RegExp(`<meta\\s+name="${name}"\\s+content="[^"]*"\\s*/?>`, 'i');
  const tag = `<meta name="${name}" content="${NOINDEX}"/>`;
  if (re.test(html)) return html.replace(re, tag);
  return html.replace(/<head([^>]*)>/i, `<head$1>${tag}`);
}

let thin = 0;
let outOfArea = 0;
for (const file of indexFiles(OUT)) {
  const rel = relative(OUT, file).split(sep).slice(0, -1).join('/');
  const urlPath = `/${rel}${rel ? '/' : ''}`;
  if (!isNoindexPolicyPath(urlPath)) continue;

  let html = readFileSync(file, 'utf8');
  html = setRobotsMeta(html, 'robots');
  html = setRobotsMeta(html, 'googlebot');
  writeFileSync(file, html);

  if (isThinTemplatePath(urlPath)) thin++;
  else outOfArea++;
}

console.log(`apply-index-policy: noindex set on ${thin} thin template pages and ${outOfArea} out-of-area pages`);
