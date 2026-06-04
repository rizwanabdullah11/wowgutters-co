/**
 * Duplicate content audit 08.01–08.03 — unique titles/descriptions and area body copy.
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
  if (!/Windows.*Frames Cleaning/i.test(windows)) {
    errors.push('windows-cleaning missing unique title');
  }
  if (!/windows and uPVC frames cleaning/i.test(windows)) {
    errors.push('windows-cleaning missing unique meta description');
  }
}

const aldridge = read('gutter-cleaning-aldridge/index.html');
const brownhills = read('gutter-cleaning-brownhills/index.html');
const moseley = read('gutter-cleaning-moseley/index.html');

/** Strip React static-export comment nodes so regexes match visible text. */
function visibleText(html) {
  return html.replace(/<!--\s*-->/g, '');
}

if (!aldridge || !brownhills) {
  errors.push('missing sample generated area exports');
} else {
  const extractSpotlight = (html) => {
    const m = visibleText(html).match(/Typical jobs in [^.]{30,220}\./i);
    return m ? m[0] : '';
  };
  const aSnip = extractSpotlight(aldridge);
  const bSnip = extractSpotlight(brownhills);
  if (!aSnip || !bSnip) {
    errors.push('generated area pages missing local spotlight paragraph');
  } else if (aSnip === bSnip) {
    errors.push('aldridge and brownhills share identical local spotlight copy');
  }
}

if (moseley && !/Moseley is one of Birmingham/i.test(visibleText(moseley))) {
  errors.push('moseley page missing rich suburb-specific body copy');
}

if (aldridge) {
  const text = visibleText(aldridge);
  if (!/Local gutter cleaning in Aldridge/i.test(text) && !/Typical jobs in Aldridge/i.test(text)) {
    errors.push('aldridge page missing localSpotlight section');
  }
}

if (errors.length) {
  console.error('assert-duplicate-content: FAILED');
  errors.forEach((e) => console.error(`  - ${e}`));
  process.exit(1);
}

console.log('assert-duplicate-content: OK — unique windows-cleaning meta and differentiated area copy');
