/**
 * Analytics & tracking audit 13.02–13.07 — static export checks.
 */

import fs from 'node:fs';
import path from 'node:path';

function read(rel) {
  const file = path.join(process.cwd(), 'out', rel);
  return fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : null;
}

const errors = [];
const index = read('index.html');
const analyticsJs = fs.existsSync(path.join(process.cwd(), 'public', 'wow-analytics.js'))
  ? fs.readFileSync(path.join(process.cwd(), 'public', 'wow-analytics.js'), 'utf8')
  : '';

if (!index) {
  errors.push('missing out/index.html');
} else {
  if (!/<script[^>]*src="[^"]*googletagmanager\.com\/gtag\/js/.test(index)) {
    errors.push('index.html: missing gtag.js <script src=...> (next/script does not emit in static export)');
  }
  if (!/<script[^>]*id="ga4"[^>]*>[\s\S]*?gtag\('config'/.test(index)) {
    errors.push('index.html: missing ga4 inline gtag config script');
  }
  if (!/data-cookieconsent="statistics"/.test(index)) {
    errors.push('index.html: GA4 scripts should use data-cookieconsent="statistics" for Cookiebot');
  }
  if (!/__WOW_ANALYTICS__/.test(index)) {
    errors.push('index.html: missing __WOW_ANALYTICS__ bootstrap');
  }
  if (!/metaPixelId/.test(index)) {
    errors.push('index.html: __WOW_ANALYTICS__ should include metaPixelId');
  }
  if (!/fbq\('track',\s*'PageView'\)/.test(index)) {
    errors.push('index.html: Meta Pixel PageView not found');
  }
  if (/fbq\('track',\s*'Lead'\)/.test(index)) {
    errors.push('index.html: Meta Lead must not fire on page load (only on form submit via wow-analytics.js)');
  }
  if (!/wow-analytics\.js\?v=20260602/.test(index)) {
    errors.push('index.html: expected wow-analytics.js?v=20260602');
  }
}

if (!analyticsJs) {
  errors.push('missing public/wow-analytics.js');
} else {
  if (!/phone_click/.test(analyticsJs)) {
    errors.push('wow-analytics.js: missing phone_click tracking');
  }
  if (!/generate_lead/.test(analyticsJs)) {
    errors.push('wow-analytics.js: missing generate_lead on quote_submitted');
  }
  if (!/trackMetaLead|fbq\('track',\s*'Lead'\)/.test(analyticsJs)) {
    errors.push('wow-analytics.js: missing Meta Lead on conversion only');
  }
  if (/fbq\('track',\s*'PageView'\)/.test(analyticsJs)) {
    errors.push('wow-analytics.js: PageView must only be in layout Meta Pixel init');
  }
}

const citations = read('citations/index.html');
if (citations && !/utm_source=google/.test(citations)) {
  errors.push('citations/index.html: missing GBP UTM example links');
}

const robotsPath = path.join(process.cwd(), 'public', 'robots.txt');
const robots = fs.existsSync(robotsPath) ? fs.readFileSync(robotsPath, 'utf8') : '';
if (!/Sitemap:\s*https:\/\/wowgutters\.co\.uk\/sitemap\.xml/i.test(robots)) {
  errors.push('robots.txt: missing sitemap URL for GSC');
}

if (errors.length) {
  console.error('[assert-analytics] FAILED:\n' + errors.map((e) => `  - ${e}`).join('\n'));
  process.exit(1);
}

console.log('[assert-analytics] OK — GA4, Meta PageView-only on load, conversion events, UTM hub');
