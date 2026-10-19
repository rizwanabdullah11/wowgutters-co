/**
 * Post-export: lazy-load below-the-fold <img> tags (Oct 2026 performance pass).
 * Plain <img> elements load eagerly by default, so phones downloaded every
 * gallery/before-after photo before the hero. The first two images on a page
 * (logo + hero) and anything marked fetchpriority/loading are left untouched.
 * Matching React-generated image preloads are removed as well.
 */
import fs from 'node:fs';
import path from 'node:path';

const OUT = path.join(process.cwd(), 'out');
const KEEP_EAGER = 2;
let files = 0, tags = 0, preloads = 0, frames = 0;

function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) { if (e.name !== '_next') walk(p); }
    else if (e.name.endsWith('.html')) fix(p);
  }
}

function fix(file) {
  const html = fs.readFileSync(file, 'utf8');
  const bodyAt = html.indexOf('<body');
  if (bodyAt < 0) return;
  let seen = 0, n = 0;
  const lazySrcs = new Set();
  const body = html.slice(bodyAt).replace(/<img\b[^>]*>/g, (tag) => {
    seen++;
    if (seen <= KEEP_EAGER) return tag;
    if (/\sloading=|\sfetchpriority=/i.test(tag)) return tag;
    n++;
    const m = tag.match(/\ssrc="([^"]+)"/);
    if (m) lazySrcs.add(m[1]);
    const dec = /\sdecoding=/i.test(tag) ? '' : ' decoding="async"';
    return tag.replace(/^<img\b/, `<img loading="lazy"${dec}`);
  });
  // Below-the-fold iframes (OpenStreetMap / Google Maps embeds, ~300 KB each)
  let body2 = body.replace(/<iframe\b[^>]*>/g, (tag) => {
    if (/\sloading=/i.test(tag)) return tag;
    n++; frames++;
    return tag.replace(/^<iframe\b/, '<iframe loading="lazy"');
  });
  if (!n) return;
  // React 19 auto-adds <link rel="preload" as="image"> for every non-lazy <img>
  // in the shell; drop those for images we just made lazy so they stop
  // competing with the hero image for bandwidth.
  const head = html.slice(0, bodyAt).replace(/<link\b[^>]*rel="preload"[^>]*>/g, (link) => {
    if (!/\sas="image"/.test(link)) return link;
    const h = link.match(/\shref="([^"]+)"/);
    if (h && lazySrcs.has(h[1])) { preloads++; return ''; }
    return link;
  });
  fs.writeFileSync(file, head + body2); files++; tags += n;
}

walk(OUT);
console.log(`lazy-images: ${tags} <img> tags lazy-loaded across ${files} pages; ${preloads} image preloads removed; ${frames} iframes lazy`);
