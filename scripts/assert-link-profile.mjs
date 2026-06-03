/**
 * Link profile & authority audit 15.01–15.05 — internal linking + citations hub.
 */

import fs from 'node:fs';
import path from 'node:path';

function read(rel) {
  const file = path.join(process.cwd(), 'out', rel);
  return fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : null;
}

/** Matches absolute and static-export relative area URLs (any depth). */
const AREA_LINK_RE = /href="(?:(?:\.\.\/)+|\.\/)?gutter-cleaning-[a-z0-9-]+\/"/g;

function countAreaLinks(html) {
  return [...html.matchAll(AREA_LINK_RE)].length;
}

const errors = [];

const index = read('index.html');
if (!index) {
  errors.push('missing index.html');
} else {
  const areaLinks = countAreaLinks(index);
  if (areaLinks < 30) {
    errors.push(`homepage: expected 30+ area links, found ${areaLinks}`);
  }
  if (!/(?:\.\/)?service-areas\//.test(index)) {
    errors.push('homepage: missing link to service-areas hub');
  }
  if (!/home-areas-heading|Gutter cleaning in your area/i.test(index)) {
    errors.push('homepage: missing HomeServiceAreasHub section');
  }
}

const services = read('services/index.html');
if (!services) {
  errors.push('missing services/index.html');
} else {
  const areaLinks = countAreaLinks(services);
  if (areaLinks < 20) {
    errors.push(`services hub: expected 20+ area links, found ${areaLinks}`);
  }
  if (!/Gutter cleaning near you/i.test(services)) {
    errors.push('services hub: missing TopPageAreaLinks section');
  }
}

const pricing = read('pricing/index.html');
if (!pricing) {
  errors.push('missing pricing/index.html');
} else if (countAreaLinks(pricing) < 15) {
  errors.push(`pricing: expected 15+ area links, found ${countAreaLinks(pricing)}`);
}

const gutterService = read('services/gutter-cleaning/index.html');
if (!gutterService) {
  errors.push('missing services/gutter-cleaning/index.html');
} else if (countAreaLinks(gutterService) < 15) {
  errors.push(
    `services/gutter-cleaning: expected TopPageAreaLinks (${countAreaLinks(gutterService)} area links)`
  );
}

const citations = read('citations/index.html');
if (!citations) {
  errors.push('missing citations/index.html');
} else {
  if (!/Backlink health/i.test(citations)) errors.push('citations: missing backlink audit section');
  if (!/Competitor backlink gaps/i.test(citations)) errors.push('citations: missing competitor gap section');
  if (!/bensgutters/i.test(citations)) errors.push("citations: missing Ben's Gutters competitor reference");
}

const serviceAreas = read('service-areas/index.html');
if (!serviceAreas) {
  errors.push('missing service-areas/index.html');
} else {
  const areaLinks = countAreaLinks(serviceAreas);
  if (areaLinks < 100) {
    errors.push(`service-areas hub: expected 100+ area links, found ${areaLinks}`);
  }
}

if (errors.length) {
  console.error('[assert-link-profile] FAILED:\n' + errors.map((e) => `  - ${e}`).join('\n'));
  process.exit(1);
}

console.log('[assert-link-profile] OK — homepage/service internal links + citations backlink guidance');
