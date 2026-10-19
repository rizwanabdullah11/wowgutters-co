/**
 * Content quality audit 14.03–14.06 — freshness copy, E-E-A-T, sitemap lastmod spread.
 */

import fs from 'node:fs';
import path from 'node:path';
function read(rel) {
  const file = path.join(process.cwd(), 'out', rel);
  return fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : null;
}

const errors = [];

const windows = read('windows-cleaning/index.html');
if (!windows) {
  errors.push('missing windows-cleaning/index.html');
} else {
  if (!/Seasonal window care/i.test(windows)) errors.push('windows-cleaning: missing seasonal section');
  if (!/Page last updated/i.test(windows)) errors.push('windows-cleaning: missing freshness notice');
}

const hotWash = read('services/hot-wash-cleaning/index.html');
if (!hotWash) {
  errors.push('missing services/hot-wash-cleaning/index.html');
} else {
  if (!/When hot wash beats/i.test(hotWash)) errors.push('hot-wash-cleaning: missing seasonal section');
  if (!/Page last updated/i.test(hotWash)) errors.push('hot-wash-cleaning: missing freshness notice');
}

const about = read('about/index.html');
if (!about) {
  errors.push('missing about/index.html');
} else {
  if (!/Our Team/i.test(about) || !/Credentials/i.test(about)) {
    errors.push('about: missing team E-E-A-T section');
  }
  if (!/James M\./i.test(about) || !/Fully insured/i.test(about)) {
    errors.push('about: missing team profiles or trust signals');
  }
  if (!/"employee"/.test(about) || !/"foundingDate":"2019"/.test(about)) {
    errors.push('about: missing Organization employee/foundingDate schema');
  }
}

const sitemapPath = path.join(process.cwd(), 'out', 'sitemap.xml');
if (!fs.existsSync(sitemapPath)) {
  errors.push('missing out/sitemap.xml');
} else {
  const xml = fs.readFileSync(sitemapPath, 'utf8');
  const lastmods = [...xml.matchAll(/<lastmod>([^<]+)<\/lastmod>/g)].map((m) => m[1]);
  const unique = new Set(lastmods);
  if (unique.size < 5) {
    errors.push(`sitemap: expected varied lastmod dates, got ${unique.size} unique value(s)`);
  }
  const windowsBlock = xml.match(/<loc>https:\/\/wowgutters\.co\.uk\/windows-cleaning\/<\/loc>[\s\S]*?<\/url>/);
  if (!windowsBlock || !windowsBlock[0].includes('2026-06-02')) {
    errors.push('sitemap: windows-cleaning lastmod should reflect June 2026 refresh');
  }
}

if (errors.length) {
  console.error('[assert-content-quality] FAILED:\n' + errors.map((e) => `  - ${e}`).join('\n'));
  process.exit(1);
}

console.log('[assert-content-quality] OK — seasonal service copy, E-E-A-T on about, varied sitemap lastmod');
