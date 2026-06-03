/**
 * Local SEO audit 09.04–09.07 — contact Google Map embed, indexable citations hub.
 */

import fs from 'node:fs';
import path from 'node:path';

function read(rel) {
  const file = path.join(process.cwd(), 'out', rel);
  return fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : null;
}

function visibleText(html) {
  return html.replace(/<!--\s*-->/g, '');
}

const errors = [];

const contact = read('contact/index.html');
if (!contact) {
  errors.push('missing contact/index.html');
} else {
  const c = visibleText(contact);
  if (!/google\.com\/maps\/embed/i.test(c)) {
    errors.push('contact page missing embedded Google Maps iframe');
  }
  if (!/Find us on Google Maps/i.test(c)) {
    errors.push('contact page missing map section heading');
  }
  if (/Sheffield, Worksop/i.test(c)) {
    errors.push('contact page still shows incorrect Sheffield/Worksop service areas');
  }
}

const citations = read('citations/index.html');
if (!citations) {
  errors.push('missing citations/index.html');
} else {
  const t = visibleText(citations);
  if (/name="robots"[^>]*content="[^"]*noindex/i.test(citations)) {
    errors.push('citations page is noindex');
  }
  if (!/Local Citations & Google Business Profile Guide/i.test(t)) {
    errors.push('citations page missing unique title');
  }
  if (!/canonical" href="https:\/\/wowgutters\.co\.uk\/citations\/"/i.test(citations)) {
    errors.push('citations page missing self-canonical with trailing slash');
  }
  if (!/google\.com\/maps\/embed/i.test(t)) {
    errors.push('citations page missing Google Maps embed');
  }
  if (!/Google Business Profile posts/i.test(t)) {
    errors.push('citations page missing GBP posting guidance');
  }
  if (!/Google review responses/i.test(t)) {
    errors.push('citations page missing review response guidance');
  }
  const words = t.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
  if (words < 600) {
    errors.push(`citations page body too thin (${words} words, expected 600+)`);
  }
}

const reviews = read('reviews/index.html');
if (reviews && !/Google Business Profile/i.test(visibleText(reviews))) {
  errors.push('reviews page missing GBP review CTA section');
}

if (errors.length) {
  console.error('assert-local-seo: FAILED');
  errors.forEach((e) => console.error(`  - ${e}`));
  process.exit(1);
}

console.log('assert-local-seo: OK — contact map embed, citations hub, GBP guidance on site');
