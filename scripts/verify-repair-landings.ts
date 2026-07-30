import { REPAIR_AREA_LANDINGS } from '../constants/repairAreaLandings.ts';
import { getRepairCityLanding } from '../lib/repairAreaContent.ts';
import { normalizeAreaHeroTitle } from '../lib/areaHeroTitle.ts';

const expected = [
  'selly-park', 'bromford', 'duddeston', 'lea-hall', 'south-yardley', 'tile-cross',
  'kingshurst', 'fordbridge', 'bordesley', 'rotton-park', 'summerfield', 'oscott',
  'warstock', 'maypole', 'vauxhall', 'bickenhill', 'cranmore', 'dickens-heath',
  'elmdon', 'hillfield', 'monkspath', 'silhill', 'smiths-wood', 'solihull-lodge',
  'tidbury-green', 'bearwood', 'warley', 'tividale', 'great-bridge', 'wollaston',
  'pensnett', 'quarry-bank', 'wordsley', 'bentley', 'pleck',
];

const missing = expected.filter((s) => !REPAIR_AREA_LANDINGS[s]);
if (missing.length) {
  console.error('Missing landings:', missing);
  process.exit(1);
}

const intros = new Set<string>();
const h1s = new Set<string>();
let dupIntro = 0;
let dupH1 = 0;
let lowerG = 0;

for (const slug of expected) {
  const landing = getRepairCityLanding(slug);
  if (!landing) {
    console.error('getRepairCityLanding failed for', slug);
    process.exit(1);
  }
  if (!landing.h1.startsWith('Gutter Repairs')) lowerG++;
  if (!landing.heroIntro.startsWith('WOW Gutters')) {
    console.error('Brand casing issue:', slug, landing.heroIntro.slice(0, 40));
    process.exit(1);
  }
  if (intros.has(landing.heroIntro)) dupIntro++;
  else intros.add(landing.heroIntro);
  if (h1s.has(landing.h1)) dupH1++;
  else h1s.add(landing.h1);

  const { line1 } = normalizeAreaHeroTitle(slug, landing.h1);
  if (slug === 'selly-park' || slug === 'bentley' || slug === 'dickens-heath') {
    console.log(slug, '→', line1);
  }
}

console.log({
  count: expected.length,
  uniqueIntros: intros.size,
  uniqueH1s: h1s.size,
  dupIntro,
  dupH1,
  lowerGutterTitles: lowerG,
});
