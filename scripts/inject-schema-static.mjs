/**
 * Post-export: inject static JSON-LD into <head> for every area page.
 * Hostinger serves static HTML — Google must see schema without React hydration.
 */

import fs from 'node:fs';
import path from 'node:path';
import {
  parseCitiesFromFile,
  schemaForAreaSlug,
} from './area-schema-static.mjs';

const projectRoot = process.cwd();
const outDir = path.join(projectRoot, 'out');

if (!fs.existsSync(outDir)) {
  console.error(`inject-schema: missing ${outDir}`);
  process.exit(1);
}

const citiesMap = parseCitiesFromFile(
  fs.readFileSync(path.join(projectRoot, 'lib', 'cities.ts'), 'utf8'),
);

function listHtmlFiles(dir) {
  const results = [];
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      results.push(...listHtmlFiles(full));
    } else if (ent.isFile() && ent.name.toLowerCase() === 'index.html') {
      results.push(full);
    }
  }
  return results;
}

function unescapeJsString(str) {
  return str
    .replace(/\\"/g, '"')
    .replace(/\\\\/g, '\\')
    .replace(/\\n/g, '\n')
    .replace(/\\r/g, '\r')
    .replace(/\\t/g, '\t')
    .replace(/\\u([0-9a-fA-F]{4})/g, (_, hex) => String.fromCharCode(parseInt(hex, 16)));
}

function extractJsonLdFromRsc(html) {
  const marker = '<script>self.__next_f.push([1,"';
  const segments = html.split(marker);
  for (let i = 1; i < segments.length; i++) {
    const segment = segments[i];
    const endIdx = segment.indexOf('"])</script>');
    if (endIdx === -1) continue;
    const content = segment.substring(0, endIdx);
    if (content.includes('\\"@graph\\"') || content.includes('"@graph"')) {
      return content;
    }
  }
  return null;
}

/** Pick the page-level @graph block (not layout VideoObject). */
function extractJsonLdFromInlineScripts(html) {
  const re = /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  let match;
  let best = null;
  while ((match = re.exec(html)) !== null) {
    const raw = match[1].trim();
    if (!raw.includes('"@graph"') && !raw.includes('@graph')) continue;
    if (raw.includes('HomeAndConstructionBusiness') || raw.includes('FAQPage')) {
      return raw;
    }
    if (!best) best = raw;
  }
  return best;
}

function areaSlugFromPath(relPath) {
  const norm = relPath.replace(/\\/g, '/');
  if (norm.startsWith('gutter-cleaning-')) {
    return norm.slice('gutter-cleaning-'.length).replace(/\/index\.html$/, '');
  }
  const nested = norm.match(/^gutter-cleaning\/([^/]+)\/index\.html$/);
  if (nested) return nested[1];
  return null;
}

function writeSchemaToHead(htmlPath, jsonStr) {
  let html = fs.readFileSync(htmlPath, 'utf8');
  if (html.includes('id="schema-static"')) return false;

  try {
    JSON.parse(jsonStr);
  } catch {
    console.warn(`inject-schema: invalid JSON for ${htmlPath}`);
    return false;
  }

  if (!jsonStr.includes('@graph')) return false;

  const scriptTag = `<script id="schema-static" type="application/ld+json">${jsonStr.trim()}</script>`;

  if (html.includes('</head>')) {
    html = html.replace('</head>', `${scriptTag}\n</head>`);
  } else if (html.includes('</body>')) {
    html = html.replace('</body>', `${scriptTag}\n</body>`);
  } else {
    html = `${scriptTag}\n${html}`;
  }

  fs.writeFileSync(htmlPath, html, 'utf8');
  return true;
}

function resolveJsonLd(htmlPath, html, slug) {
  const fromRsc = extractJsonLdFromRsc(html);
  if (fromRsc) {
    try {
      return unescapeJsString(fromRsc).trim();
    } catch {
      /* fall through */
    }
  }

  const fromInline = extractJsonLdFromInlineScripts(html);
  if (fromInline) return fromInline.trim();

  if (slug) {
    return JSON.stringify(schemaForAreaSlug(slug, citiesMap));
  }

  return null;
}

let injected = 0;
let fallback = 0;
let skipped = 0;
const failed = [];

for (const file of listHtmlFiles(outDir)) {
  const rel = path.relative(outDir, file).replace(/\\/g, '/');
  const slug = areaSlugFromPath(rel);
  if (!slug) continue;

  const html = fs.readFileSync(file, 'utf8');
  if (html.includes('id="schema-static"')) {
    skipped++;
    continue;
  }

  const jsonStr = resolveJsonLd(file, html, slug);
  if (!jsonStr) {
    failed.push(rel);
    continue;
  }

  const usedFallback =
    !extractJsonLdFromRsc(html) && !extractJsonLdFromInlineScripts(html);

  if (writeSchemaToHead(file, jsonStr)) {
    injected++;
    if (usedFallback) fallback++;
  }
}

console.log(
  `inject-schema: injected ${injected} area pages (${fallback} built from cities.ts fallback, ${skipped} already had schema)`,
);

if (failed.length > 0) {
  console.warn(`inject-schema: failed ${failed.length} pages:`, failed.slice(0, 10).join(', '));
  process.exit(1);
}
