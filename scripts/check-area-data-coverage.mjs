import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const slugsFile = fs.readFileSync(path.join(root, 'lib/areaSlugs.ts'), 'utf8');
const slugs = [...slugsFile.matchAll(/'([a-z0-9-]+)'/g)]
  .map((m) => m[1])
  .filter((s) => s !== 'gutter-cleaning');

const cities = fs.readFileSync(path.join(root, 'lib/cities.ts'), 'utf8');
const supplement = fs.readFileSync(path.join(root, 'lib/areaSupplement.ts'), 'utf8');

const has = (s) => cities.includes(`slug: '${s}'`) || supplement.includes(`slug: '${s}'`);

const missing = slugs.filter((s) => !has(s) && s !== 'birmingham' && s !== 'wolverhampton');
console.log('total slugs', slugs.length);
console.log('missing data', missing.length, missing);
