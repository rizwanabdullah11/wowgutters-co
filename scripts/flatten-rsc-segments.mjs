/**
 * Windows build fix (Oct 27 2026 audit): on Windows, Next.js writes RSC segment
 * prefetch files as folders, e.g. out/help/__next.help/__PAGE__.txt, but the browser
 * requests the flat name out/help/__next.help.__PAGE__.txt. On Hostinger that was a 404
 * on every page (wasted requests + console errors). This copies each nested file to the
 * flat name the client expects. On Linux/macOS the flat files already exist, so it is a no-op.
 */
import { readdirSync, statSync, copyFileSync, existsSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

const OUT = join(process.cwd(), 'out');

function* walk(dir) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) {
      if (name === '_next') continue;
      yield [full, name];
      yield* walk(full);
    }
  }
}

function* filesIn(dir) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) yield* filesIn(full);
    else yield full;
  }
}

let copied = 0;
for (const [dir, name] of walk(OUT)) {
  if (!name.startsWith('__next.')) continue;
  const parent = join(dir, '..');
  for (const file of filesIn(dir)) {
    const rel = relative(dir, file).split(sep).join('.');
    const flat = join(parent, `${name}.${rel}`);
    if (!existsSync(flat)) {
      copyFileSync(file, flat);
      copied++;
    }
  }
}
console.log(`flatten-rsc-segments: wrote ${copied} flat RSC segment file(s)`);
