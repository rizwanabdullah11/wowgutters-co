/**
 * JavaScript SEO audit 12.02–12.04 — metadata, canonicals, static HTML body copy.
 */

import fs from 'node:fs';
import path from 'node:path';

function read(rel) {
  const file = path.join(process.cwd(), 'out', rel);
  return fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : null;
}

function canonical(html) {
  const m = html.match(/rel="canonical" href="([^"]+)"/);
  return m ? m[1] : null;
}

const errors = [];

const checks = [
  {
    file: 'windows-cleaning/index.html',
    canonical: 'https://wowgutters.co.uk/windows-cleaning/',
    title: /Windows.*Frames Cleaning/i,
    body: /Crystal clear windows/i,
  },
  {
    file: 'oap-discount/index.html',
    canonical: 'https://wowgutters.co.uk/oap-discount/',
    title: /OAP Discount/i,
    body: /OAP Discount/i,
  },
  {
    file: 'neighbourhood-discount/index.html',
    canonical: 'https://wowgutters.co.uk/neighbourhood-discount/',
    title: /Neighbourhood Discount/i,
    body: /Neighbourhood Discount/i,
  },
  {
    file: 'the-gutter-gallery/index.html',
    canonical: 'https://wowgutters.co.uk/the-gutter-gallery/',
    title: /Gutter Gallery/i,
    body: /Before &amp; after|Before & after/i,
  },
  {
    file: 'gutter-cleaning-moseley/index.html',
    canonical: 'https://wowgutters.co.uk/gutter-cleaning-moseley/',
    title: /Gutter Cleaning Moseley/i,
    body: /Moseley/i,
  },
];

for (const c of checks) {
  const html = read(c.file);
  if (!html) {
    errors.push(`missing ${c.file}`);
    continue;
  }
  const can = canonical(html);
  if (can !== c.canonical) {
    errors.push(`${c.file} canonical wrong: ${can ?? 'none'} (expected ${c.canonical})`);
  }
  if (html.includes('rel="canonical" href="https://wowgutters.co.uk/') && !can?.endsWith('/')) {
    errors.push(`${c.file} canonical missing trailing slash`);
  }
  if (!c.title.test(html)) {
    errors.push(`${c.file} missing expected title in HTML`);
  }
  if (!c.body.test(html)) {
    errors.push(`${c.file} missing expected body copy in static HTML`);
  }
}

const home = read('index.html');
if (!home) {
  errors.push('missing index.html');
} else {
  if (!/What Customers Say About WOW Gutters/i.test(home)) {
    errors.push('homepage missing reviews section heading in static HTML');
  }
  if (!/Gutter Services|Professional Gutter Services/i.test(home)) {
    errors.push('homepage missing services section in static HTML');
  }
  if (/SectionPlaceholder/i.test(home)) {
    errors.push('homepage still renders SectionPlaceholder shells instead of content');
  }
  if (!/elfsight-app-/i.test(home) && !/verified Google reviews/i.test(home)) {
    errors.push('homepage missing crawlable review summary text');
  }
}

for (const bad of ['oap-discount', 'neighbourhood-discount', 'the-gutter-gallery', 'windows-cleaning']) {
  const html = read(`${bad}/index.html`);
  if (html && /wowgutters\.co\.uk\/${bad}"[^/]/.test(html)) {
    errors.push(`${bad} has non-trailing-slash canonical in export`);
  }
}

if (errors.length) {
  console.error('assert-js-seo: FAILED');
  errors.forEach((e) => console.error(`  - ${e}`));
  process.exit(1);
}

console.log('assert-js-seo: OK — generateMetadata/canonicals and SSG body copy on key routes');
