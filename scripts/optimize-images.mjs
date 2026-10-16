/**
 * One-off image optimiser (Oct 2026 performance pass).
 * Creates a .webp sibling (max 1280px wide) for every PNG/JPG in public/ and
 * assets/ over 80 KB. Originals are kept (OG images / old links still work).
 * Re-run after adding new large images:  node scripts/optimize-images.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const ROOTS = ['public', 'assets'];
const MIN = 80 * 1024;
const out = [];

function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p);
    else if (/\.(png|jpe?g)$/i.test(e.name) && fs.statSync(p).size > MIN) out.push(p);
  }
}
for (const r of ROOTS) if (fs.existsSync(r)) walk(r);

let before = 0, after = 0;
for (const src of out) {
  const dest = src.replace(/\.(png|jpe?g)$/i, '.webp');
  if (fs.existsSync(dest) && fs.statSync(dest).mtimeMs >= fs.statSync(src).mtimeMs) continue;
  const isLogo = /logo/i.test(src);
  await sharp(src)
    .rotate()
    .resize({ width: isLogo ? 480 : 1280, withoutEnlargement: true })
    .webp({ quality: isLogo ? 85 : 62, alphaQuality: 90, effort: 5 })
    .toFile(dest);
  before += fs.statSync(src).size;
  after += fs.statSync(dest).size;
}
console.log(`optimize-images: ${out.length} images, ${Math.round(before / 1048576)} MB → ${Math.round(after / 1048576)} MB`);
