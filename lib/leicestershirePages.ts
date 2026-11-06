/**
 * Leicestershire town pages (Nov 2026): /gutter-cleaning-<town>/ and /roof-cleaning-<town>/.
 *
 * Built from lib/leicestershireTowns.ts. The gutter page uses the town's housing, gutter and
 * local notes; the roof page uses its intro and roof notes — so the two pages for one town do
 * not repeat each other. Wording pools below are seeded per town + service.
 * Prices are the official list only (constants/gutterPricing.ts). No insurance figures.
 */
import type { CityGutterLandingData, CityPropertyRow } from '@/constants/cityGutterLandingData';
import { LEICS_TOWNS, leicsTown, type LeicsHome, type LeicsTown, type LeicsTrees } from '@/lib/leicestershireTowns';
import { LEICS_EXTRA } from '@/lib/leicestershireExtra';
import LEICS_VARIANTS from '@/lib/leicestershireVariants.json';

export type LeicsService = 'gutter' | 'roof';

export const LEICS_HUB_PATH = '/leicestershire/';

export function leicsPath(service: LeicsService, slug: string): string {
  return service === 'gutter' ? `/gutter-cleaning-${slug}/` : `/roof-cleaning-${slug}/`;
}

/** `gutter-cleaning-loughborough` → { service: 'gutter', town } */
export function leicsPageFromSlug(slug: string): { service: LeicsService; town: LeicsTown } | null {
  const m = /^(gutter-cleaning|roof-cleaning)-(.+)$/.exec(slug);
  if (!m) return null;
  const town = leicsTown(m[2]);
  if (!town) return null;
  return { service: m[1] === 'gutter-cleaning' ? 'gutter' : 'roof', town };
}

export function allLeicsPageSlugs(): string[] {
  return LEICS_TOWNS.flatMap((t) => [`gutter-cleaning-${t.slug}`, `roof-cleaning-${t.slug}`]);
}

export function leicsNearbyTowns(town: LeicsTown): LeicsTown[] {
  return town.nearby.map((s) => leicsTown(s)).filter((t): t is LeicsTown => Boolean(t));
}

function list(items: string[]): string {
  if (items.length <= 1) return items.join('');
  return `${items.slice(0, -1).join(', ')} and ${items[items.length - 1]}`;
}

/** District as it reads in a sentence ("Blaby District", not "Blaby", which is also a village). */
function area(t: LeicsTown): string {
  if (t.district === 'Blaby' || t.district === 'Harborough') return `${t.district} District`;
  if (t.district === 'Melton') return 'the Melton area';
  if (t.district === 'Leicester City') return 'Leicestershire';
  return t.district;
}

/** Same, for headings. */
function areaTitle(t: LeicsTown): string {
  if (t.district === 'Melton') return 'the Melton Area';
  return area(t);
}

function pcLabel(t: LeicsTown): string {
  return t.postcodes.length > 1 ? `${t.postcodes[0]}–${t.postcodes[t.postcodes.length - 1]}` : t.postcodes[0];
}

const TOWN_INDEX = new Map(LEICS_TOWNS.map((x, i) => [x.slug, i]));

function hash(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

/**
 * Pick from a pool so that neighbouring towns on the list get different wording. Each pool key
 * gets its own stride, so two towns rarely land on the same option in several pools at once.
 */
function slot<T>(t: LeicsTown, s: LeicsService, key: string, pool: readonly T[], shift = 0): T {
  const n = pool.length;
  // Pre-computed choices (lib/leicestershireVariants.json, generated offline) keep similar towns apart.
  const fixed = (LEICS_VARIANTS as Record<string, Record<string, Record<string, number>>>)[t.slug]?.[s]?.[key];
  if (typeof fixed === 'number') return pool[(fixed + shift) % n];
  const i = TOWN_INDEX.get(t.slug) ?? hash(t.slug);
  const h = hash(`${s}:${key}`);
  return pool[(i * (1 + (h % 7)) + (h >>> 16) + shift) % n];
}

/* ------------------------------------------------------------------ wording pools
 * Short, interchangeable sentences. Each page picks its own mix (seeded by town + service), so
 * two towns rarely share more than a sentence or two of this text.
 */

type Line = (t: LeicsTown) => string;

const GUTTER_TREES: Record<LeicsTrees, Line[]> = {
  heavy: [
    (t) => `With this much tree cover, most ${t.name} homes are best cleaned every autumn after the leaves drop, and again in spring if a tree overhangs the roof.`,
    (t) => `Leaf fall is heavy here, so we usually suggest a clean every 6 to 12 months for ${t.name} properties near mature trees.`,
    (t) => `Homes in ${t.name} with trees close by tend to need two cleans a year — one in late autumn and one in spring when seeds and blossom come down.`,
    (t) => `Where branches hang over the roof, ${t.name} gutters can fill in a single season, so twice-yearly visits are common.`,
    (t) => `Book after the last leaves have fallen, usually late November in ${t.name}, and add a spring visit if your outlets blocked last year.`,
  ],
  medium: [
    (t) => `For most ${t.name} homes one clean a year, booked in October or November, keeps water running freely.`,
    (t) => `A yearly clean suits most properties in ${t.name}; if a large tree is close to the house, a second visit in spring is worth it.`,
    (t) => `We find once a year is right for the average ${t.name} home, with autumn the best time to book.`,
    (t) => `Every 12 months is a good rule in ${t.name}, moving to six-monthly if you see water spilling over the front edge.`,
    (t) => `Plan on an annual clean for a typical ${t.name} house, ideally after leaf fall and before the winter rain.`,
  ],
  light: [
    (t) => `${t.name} has fewer big trees than many villages, so a clean every 12 to 18 months is usually enough unless moss is washing off the roof.`,
    (t) => `Most ${t.name} homes only need a clean once a year, or even every 18 months, but open ground means wind-blown debris still builds up.`,
    (t) => `Here the main problem is usually roof moss and wind-blown dirt rather than leaves, so a yearly check keeps gutters flowing.`,
    (t) => `With open fields rather than woodland around ${t.name}, gutters fill more slowly — an annual visit is plenty for most homes.`,
    (t) => `Expect to book roughly every 12–18 months in ${t.name}; sooner if moss from the roof is collecting at the outlets.`,
  ],
};

const G_ACCESS: Line[] = [
  () => `We clean from the ground with a high-reach vacuum, so no ladders touch your walls or fascias.`,
  () => `Our carbon-fibre poles reach up to 4 storeys from the drive or garden.`,
  () => `Everything is done from ground level using an industrial gutter vacuum.`,
  (t) => `No one climbs onto your ${t.name} roof — the vacuum lifts the debris out from below.`,
  () => `The pole slides along each gutter run while the vacuum pulls out leaves, silt and moss.`,
  () => `Ladder-free cleaning means no marks on render, no cracked gutters and no risk to your property.`,
];
const G_CHECK: Line[] = [
  () => `A camera on the pole lets us see inside the gutter as we work.`,
  () => `Every downpipe is flushed with water and tested before we leave.`,
  () => `We check each outlet drains and clear any blockage in the downpipes.`,
  () => `Joints, brackets and outlets are checked on camera while the gutter is empty.`,
  () => `Once the gutters are empty we run water through to make sure it reaches the drain.`,
  () => `If a downpipe is blocked part-way down, we clear it as part of the same visit.`,
];
const G_PROOF: Line[] = [
  () => `You get before & after photos the same day.`,
  () => `Photos of each gutter run are sent to your phone when we finish.`,
  () => `If we spot a loose bracket or leaking joint, it's in your photos so you can decide what to do.`,
  () => `There's no need to be home — the photos show you exactly what we removed.`,
  (t) => `Landlords and agents in ${t.name} can keep the photos as a maintenance record.`,
  () => `Our photo report shows the gutters before and after, section by section.`,
];

const GUTTER_HERO: Line[] = [
  (t) => `Gutter cleaning in ${t.name} from £100, done from the ground with a vacuum and camera — no ladders, downpipes flushed and before & after photos on every job.`,
  (t) => `Fixed-price gutter cleaning across ${t.name} and ${pcLabel(t)}. Ground-level vacuum, every downpipe tested, and photos sent to you the same day.`,
  (t) => `Blocked or overflowing gutters in ${t.name}? We clear them from the ground with a high-reach vacuum, flush the downpipes and send you before & after photos.`,
  (t) => `Safe, ladder-free gutter clearing for ${t.name} homes, landlords and businesses — £100 for a 2-bed, £110 for a 3-bed, with photo proof of every clean.`,
  (t) => `Local gutter cleaning for ${t.name} and ${area(t)}: vacuum-cleared from the ground, downpipes tested and photos of the result.`,
  (t) => `Stop the overflow. We vacuum ${t.name} gutters from ground level, test every downpipe and show you the result in photos — from £100.`,
];

const GUTTER_H1_TAIL: Line[] = [
  (t) => `Ladder-Free Gutter Clearing Across ${pcLabel(t)}`,
  (t) => `Ground-Level Vacuum Service for ${areaTitle(t)}`,
  () => `Fixed Prices, Photo Proof, No Ladders`,
  (t) => `Gutters & Downpipes Cleared in ${pcLabel(t)}`,
  () => `Vacuum-Cleared From the Ground`,
  (t) => `Local Gutter Clearing in ${areaTitle(t)}`,
];

const GUTTER_WHY_TITLE: Line[] = [
  (t) => `Why ${t.name} Gutters Block`,
  (t) => `What Fills the Gutters in ${t.name}`,
  (t) => `Gutters in ${t.name} — What We Find`,
  (t) => `Keeping ${t.name} Gutters Flowing`,
  (t) => `${t.name} Homes and Their Gutters`,
];

const GUTTER_HOMES: Record<LeicsHome, ((t: LeicsTown) => CityPropertyRow)[]> = {
  'victorian-terrace': [
    () => ({ label: 'Victorian terraces', detail: `Shared gutter lines run across several houses, so we check the outlets either side of yours.` }),
    (t) => ({ label: 'Terraced houses', detail: `Rear outriggers on ${t.name} terraces have short, awkward gutters that we reach from the yard.` }),
    () => ({ label: 'Red-brick terraces', detail: `Front gutters over the pavement are cleared without blocking the path for long.` }),
  ],
  edwardian: [
    () => ({ label: 'Edwardian homes', detail: `Bay roofs and ornate fascias are cleaned by hand-guided vacuum so nothing is knocked or cracked.` }),
    () => ({ label: 'Period semis', detail: `Tall front gutters and bay roofs are cleared from the ground, with photos of each section.` }),
    () => ({ label: 'Older bay-fronted houses', detail: `Small bay gutters are easy to miss; we include them every time.` }),
  ],
  'interwar-semi': [
    () => ({ label: '1930s semis', detail: `Hipped roofs mean gutters on three sides; we clear every run and the downpipe at each corner.` }),
    () => ({ label: 'Inter-war semi-detached', detail: `Most are 3-bed, so a standard clean is £110 including downpipes and photos.` }),
    () => ({ label: 'Hipped-roof semis', detail: `Corner outlets on hipped roofs collect the most debris, so we clear those first.` }),
  ],
  'postwar-estate': [
    () => ({ label: 'Post-war estate homes', detail: `Concrete roof tiles shed moss that settles at the outlets — we clear and flush them.` }),
    () => ({ label: '1950s–70s houses', detail: `Older plastic gutters here can be brittle, so we clean them by vacuum rather than scraping.` }),
    () => ({ label: 'Estate semis and terraces', detail: `Straightforward runs, usually our £100 or £110 price.` }),
  ],
  'modern-estate': [
    () => ({ label: 'New-build homes', detail: `Shallow modern gutters fill fast with moss from the roof; one clean a year keeps them clear.` }),
    (t) => ({ label: 'Modern estates', detail: `Three-storey town houses on newer ${t.name} estates are no problem — the vacuum reaches up to 4 storeys.` }),
    () => ({ label: 'Recent builds', detail: `Even a few years after moving in, outlets on new homes can be packed with roof grit.` }),
  ],
  bungalow: [
    () => ({ label: 'Bungalows', detail: `Long, low gutter runs that collect debris along their whole length.` }),
    () => ({ label: 'Dormer bungalows', detail: `Dormer gutters are hard to reach by ladder but easy with our vacuum poles.` }),
    () => ({ label: 'Single-storey homes', detail: `Quick to reach, but we still flush every downpipe and send photos.` }),
  ],
  'village-cottage': [
    () => ({ label: 'Village cottages', detail: `Low eaves and small gutters overflow quickly; we clean them gently, especially cast iron.` }),
    (t) => ({ label: 'Older cottages', detail: `Many ${t.name} cottages have tired gutters, so we clean by vacuum and point out loose brackets.` }),
    () => ({ label: 'Period cottages', detail: `Original gutters and narrow downpipes are handled with care.` }),
  ],
  'swithland-slate': [
    () => ({ label: 'Swithland slate homes', detail: `Heavy local slate roofs shed grit and moss into the gutters; we clear it without standing on the roof.` }),
    () => ({ label: 'Charnwood stone houses', detail: `Older stone homes get careful, ground-based cleaning only.` }),
    () => ({ label: 'Stone and slate cottages', detail: `Grit from old slate settles in the gutter bottom; the vacuum lifts it out.` }),
  ],
  'large-detached': [
    () => ({ label: 'Large detached homes', detail: `Long runs with several corners and valleys go on our Premium Service, from £200.` }),
    (t) => ({ label: 'Detached houses', detail: `Bigger ${t.name} homes with extensions and garages get a fixed Premium price, from £200.` }),
    () => ({ label: 'Homes with extensions', detail: `Garage, porch and extension gutters are cleaned in the same visit.` }),
  ],
  'ex-mining': [
    () => ({ label: 'Former mining homes', detail: `Older terraces and semis often have sagging brackets; we clean them and photograph any problems.` }),
    () => ({ label: 'Pit village terraces', detail: `Shared gutter lines are cleared end to end so the next blockage doesn't start next door.` }),
    () => ({ label: 'Colliery-era semis', detail: `Old gutters with dips hold silt; we lift it out and test the fall.` }),
  ],
  flats: [
    () => ({ label: 'Flats and HMOs', detail: `Landlords and agents get photo reports for each building.` }),
    () => ({ label: 'Blocks of flats', detail: `Up to 4 storeys cleaned from the ground with no scaffolding.` }),
    () => ({ label: 'Shared houses', detail: `Ideal for tenancy records — we photograph every gutter run.` }),
  ],
  commercial: [
    () => ({ label: 'Shops and business units', detail: `Commercial gutters get a custom quote, and we can work outside opening hours.` }),
    (t) => ({ label: 'Commercial properties', detail: `Box gutters and long runs on units in ${t.name} get a custom quote and photo report.` }),
    () => ({ label: 'Offices and units', detail: `We plan the visit around your opening times.` }),
  ],
};

const ROOF_TREES: Record<LeicsTrees, Line[]> = {
  heavy: [
    (t) => `Shade from trees keeps ${t.name} roofs damp for much of the year, which is why moss returns faster here than on open ground.`,
    (t) => `Under heavy tree cover, roofs in ${t.name} often need cleaning every 2 years rather than 3.`,
    (t) => `Leaf litter and shade from mature trees give moss a head start on the rear slopes of many ${t.name} homes.`,
    (t) => `Where trees overhang, ${t.name} roofs rarely dry out fully between showers, so moss spreads quickly.`,
    (t) => `Plan on a roof clean roughly every two years under the trees in ${t.name}.`,
  ],
  medium: [
    (t) => `Most ${t.name} roofs need cleaning every 2–3 years, with north-facing slopes showing moss first.`,
    (t) => `On a typical ${t.name} home the front slope stays fairly clean while the shaded rear slope grows moss — that's where we usually start.`,
    (t) => `We usually recommend a roof clean every 2 to 3 years in ${t.name}, sooner if moss is falling into the gutters.`,
    (t) => `If you can see green tufts from the street, a ${t.name} roof is usually due a clean.`,
    (t) => `Every two to three years keeps most roofs in ${t.name} clear, with biocide slowing regrowth in between.`,
  ],
  light: [
    (t) => `Open countryside around ${t.name} means plenty of wind-blown spores, so lichen and algae are often a bigger problem than thick moss.`,
    (t) => `Exposed ${t.name} roofs catch wind and rain from every direction, and lichen spots build up even where moss is light.`,
    (t) => `Fewer trees means less shade, but roofs facing the open fields around ${t.name} still collect algae and lichen.`,
    (t) => `In ${t.name} a clean every three years is usually enough, unless lichen is spreading across the tiles.`,
    (t) => `Wind-blown spores from farmland settle on ${t.name} roofs, so algae shows up even on sunny slopes.`,
  ],
};

const R_MOSS: Line[] = [
  () => `Moss is removed by hand first, so the tiles are never blasted.`,
  () => `We scrape the moss off carefully, row by row.`,
  () => `Thick moss is lifted off by hand and bagged up.`,
  (t) => `On ${t.name} roofs we start by clearing the moss from the tiles, ridges and valleys.`,
  () => `Hand-scraping takes off the heavy growth without damaging the tile surface.`,
  () => `We clear moss from the slopes, ridge and around any chimney or vent.`,
];
const R_WASH: Line[] = [
  () => `The roof is then soft-washed at low pressure.`,
  () => `A gentle soft-wash cleans the tiles — never high-pressure washing.`,
  () => `Low-pressure washing removes algae without cracking tiles or washing out mortar.`,
  () => `Pressure washers are never used, because they can lift tiles and force water underneath.`,
  () => `We finish with a biocide that kills the remaining spores.`,
  () => `A biocide treatment slows regrowth for many months.`,
];
const R_AFTER: Line[] = [
  () => `The gutters are cleared afterwards so the moss doesn't block them.`,
  () => `You get before & after photos of each slope.`,
  () => `Any slipped or cracked tiles we notice are shown in your photos.`,
  () => `We tidy up and empty the gutters below before we leave.`,
  () => `Photos of the finished roof are sent the same day.`,
  () => `Downpipes are checked at the end, as roof moss often ends up in them.`,
];

const ROOF_HERO: Line[] = [
  (t) => `Roof cleaning in ${t.name} from £500. Moss removed by hand, soft-washed at low pressure and treated with biocide, with before & after photos.`,
  (t) => `Moss, algae and lichen cleared from ${t.name} roofs without pressure washing. Biocide treatment included and gutters cleared afterwards.`,
  (t) => `Professional roof moss removal across ${t.name} and ${pcLabel(t)} — gentle soft-wash, biocide treatment and photo proof of every slope.`,
  (t) => `Bring your ${t.name} roof back to its real colour. Hand-scraped moss, low-pressure soft-wash and biocide, from £500.`,
  (t) => `Gentle roof cleaning for ${t.name} and ${area(t)}: moss off by hand, low-pressure wash, biocide finish.`,
  (t) => `Mossy roof in ${t.name}? We clean it without high pressure, treat it to slow regrowth and clear the gutters below.`,
];

const ROOF_H1_TAIL: Line[] = [
  (t) => `Moss Removal & Soft-Wash Across ${pcLabel(t)}`,
  (t) => `Gentle Moss & Algae Removal in ${areaTitle(t)}`,
  () => `No Pressure Washing, Biocide Included`,
  () => `Roof Moss Cleared, Tiles Protected`,
  (t) => `Moss, Algae & Lichen Removed in ${pcLabel(t)}`,
  () => `Hand-Cleaned, Soft-Washed, Treated`,
];

const ROOF_WHY_TITLE: Line[] = [
  (t) => `Why ${t.name} Roofs Grow Moss`,
  (t) => `Roofs in ${t.name} — What We See`,
  (t) => `Moss and Algae on ${t.name} Roofs`,
  (t) => `When a ${t.name} Roof Needs Cleaning`,
  (t) => `${t.name} Roofs and the Local Climate`,
];

const ROOF_HOMES: Record<LeicsHome, ((t: LeicsTown) => CityPropertyRow)[]> = {
  'victorian-terrace': [
    () => ({ label: 'Victorian slate roofs', detail: `Welsh slate is cleaned by hand — thin slates break if walked on or pressure-washed.` }),
    () => ({ label: 'Terraced rooflines', detail: `Front and rear slopes plus outriggers are treated, with moss bagged and removed.` }),
    () => ({ label: 'Slate terraces', detail: `Moss in the slate joints is cleared carefully and the roof treated with biocide.` }),
  ],
  edwardian: [
    () => ({ label: 'Edwardian roofs', detail: `Clay tiles and decorative ridges get a gentle soft-wash and biocide only.` }),
    () => ({ label: 'Period clay roofs', detail: `Ornamental ridge tiles and finials are worked around by hand.` }),
    () => ({ label: 'Bay-fronted homes', detail: `Small bay roofs are cleaned along with the main slopes.` }),
  ],
  'interwar-semi': [
    () => ({ label: '1930s clay tile roofs', detail: `Plain clay tiles hold moss in the gaps; we clear each row and treat with biocide.` }),
    () => ({ label: 'Hipped semi roofs', detail: `All slopes cleaned, including the hips and the bay roof at the front.` }),
    () => ({ label: 'Inter-war roofs', detail: `Older clay tiles can be fragile, so no high pressure is used.` }),
  ],
  'postwar-estate': [
    () => ({ label: 'Concrete tile roofs', detail: `Interlocking concrete tiles grow thick moss; hand-scraping and biocide bring them back.` }),
    () => ({ label: 'Post-war estate roofs', detail: `Simple pitched roofs, usually concrete tiles — most start from £500.` }),
    () => ({ label: '1960s–70s roofs', detail: `Moss on the lower courses is cleared and the ridge checked.` }),
  ],
  'modern-estate': [
    (t) => ({ label: 'New-build roofs', detail: `Even newer ${t.name} roofs grow algae within a few years; an early clean stops moss settling.` }),
    () => ({ label: 'Modern estate roofs', detail: `Concrete tiles and dry-fix ridges cleaned gently, with the gutters cleared at the end.` }),
    () => ({ label: 'Recent builds', detail: `Algae streaks on new roofs come off easily with a soft-wash and biocide.` }),
  ],
  bungalow: [
    () => ({ label: 'Bungalow roofs', detail: `A large roof area close to the ground; moss is removed and the whole roof treated.` }),
    () => ({ label: 'Dormer bungalows', detail: `Dormer cheeks and flat sections are cleaned as well as the main slopes.` }),
    () => ({ label: 'Single-storey roofs', detail: `Easy to see from the garden, so the difference after cleaning is clear.` }),
  ],
  'village-cottage': [
    () => ({ label: 'Cottage roofs', detail: `Old clay, slate or stone roofs are hand-cleaned only — never pressure-washed.` }),
    () => ({ label: 'Listed and older cottages', detail: `We use the gentlest methods on historic roofs and can send photos before work starts.` }),
    () => ({ label: 'Period cottages', detail: `Uneven old tiles are cleaned carefully around their edges.` }),
  ],
  'swithland-slate': [
    () => ({ label: 'Swithland slate', detail: `This heavy Charnwood slate is cleaned by hand and soft-wash only, to protect old fixings.` }),
    () => ({ label: 'Local stone slate roofs', detail: `Thick, uneven slates hold moss in the laps; we clear it without walking on the roof.` }),
    () => ({ label: 'Charnwood slate homes', detail: `Old slate roofs get the gentlest clean we offer.` }),
  ],
  'large-detached': [
    () => ({ label: 'Large detached roofs', detail: `Multiple slopes, valleys and dormers are priced after a look at the roof, from £500.` }),
    (t) => ({ label: 'Detached homes', detail: `Big ${t.name} roofs with extensions and garages get a fixed quote before work starts.` }),
    () => ({ label: 'Roofs with valleys', detail: `Valleys collect the most moss, so we pay them extra attention.` }),
  ],
  'ex-mining': [
    () => ({ label: 'Mining-era roofs', detail: `Older slate and clay roofs on former colliery housing are cleaned by hand.` }),
    () => ({ label: 'Older terraced roofs', detail: `We note any slipped slates or tiles in your photos so you can get them fixed.` }),
    () => ({ label: 'Mixed roofs', detail: `Original slate at the front and concrete at the back are each cleaned the right way.` }),
  ],
  flats: [
    () => ({ label: 'Flat roofs and blocks', detail: `Moss and algae removed from felt and tiled roofs on small blocks.` }),
    () => ({ label: 'Flats and HMOs', detail: `Landlords get a photo report for each roof we clean.` }),
    () => ({ label: 'Shared buildings', detail: `We arrange access with managing agents and send photos afterwards.` }),
  ],
  commercial: [
    () => ({ label: 'Commercial roofs', detail: `Business roofs and units get a custom quote after we look at access and size.` }),
    () => ({ label: 'Shops and offices', detail: `We can clean commercial roofs outside opening hours.` }),
    () => ({ label: 'Industrial units', detail: `Larger roofs are quoted individually.` }),
  ],
};

function rows(t: LeicsTown, service: LeicsService): CityPropertyRow[] {
  const table = service === 'gutter' ? GUTTER_HOMES : ROOF_HOMES;
  return t.homes.slice(0, 3).map((h, i) => slot(t, service, `home-${h}-${i}`, table[h])(t));
}

function nearbyNames(t: LeicsTown): string[] {
  return leicsNearbyTowns(t).map((n) => n.name);
}

function areasInline(t: LeicsTown): string {
  return [t.name, ...t.alsoCovers, ...nearbyNames(t)].join(' | ');
}

/* ------------------------------------------------------------------ geography (computed) */

const LEICESTER_CENTRE = { latitude: 52.6369, longitude: -1.1398 };

function miles(a: { latitude: number; longitude: number }, b: { latitude: number; longitude: number }): number {
  const R = 3958.8;
  const toRad = (d: number) => (d * Math.PI) / 180;
  const dLat = toRad(b.latitude - a.latitude);
  const dLon = toRad(b.longitude - a.longitude);
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(a.latitude)) * Math.cos(toRad(b.latitude)) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}

function compass(from: { latitude: number; longitude: number }, to: { latitude: number; longitude: number }): string {
  const dy = to.latitude - from.latitude;
  const dx = (to.longitude - from.longitude) * Math.cos((from.latitude * Math.PI) / 180);
  const deg = (Math.atan2(dx, dy) * 180) / Math.PI;
  const dirs = ['north', 'north-east', 'east', 'south-east', 'south', 'south-west', 'west', 'north-west'];
  return dirs[Math.round(((deg + 360) % 360) / 45) % 8];
}

function milesLabel(m: number): string {
  const r = Math.max(1, Math.round(m));
  return r === 1 ? 'about a mile' : `about ${r} miles`;
}

/** Closest other towns on our Leicestershire list, by straight-line distance. */
export function leicsClosest(t: LeicsTown, n = 4): { town: LeicsTown; miles: number; dir: string }[] {
  return LEICS_TOWNS.filter((o) => o.slug !== t.slug)
    .map((o) => ({ town: o, miles: miles(t.geo, o.geo), dir: compass(t.geo, o.geo) }))
    .sort((a, b) => a.miles - b.miles)
    .slice(0, n);
}

/** One factual sentence pair about where the town sits and what is nearby. */
export function leicsGeoLine(t: LeicsTown): string {
  const close = leicsClosest(t, 4);
  const near = close.map((c) => `${c.town.name} (${milesLabel(c.miles)} ${c.dir})`);
  const fromCity =
    t.slug === 'leicester'
      ? `${t.name} is the centre of our Leicestershire area.`
      : `${t.name} is ${milesLabel(miles(LEICESTER_CENTRE, t.geo))} ${compass(LEICESTER_CENTRE, t.geo)} of Leicester city centre, in ${area(t)}.`;
  return `${fromCity} The closest places we also cover are ${list(near)}.`;
}

/* ------------------------------------------------------------------ FAQs */

type QA = { question: string; answer: string };
type QALine = (t: LeicsTown) => QA;

const G_FAQ_PRICE: Line[] = [
  (t) => `In ${t.name} a 2-bed home is £100 and a 3-bed home is £110. Bigger houses and extras are on our Premium Service from £200, and shops or offices get a custom quote.`,
  (t) => `Our ${t.name} prices are the same as everywhere we work: £100 for a 2-bed, £110 for a 3-bed and Premium from £200. You get the price before we book.`,
  (t) => `£100 (2-bed) or £110 (3-bed) for most ${t.name} homes, with larger or more complex properties from £200. Downpipe flushing and photos are included.`,
  () => `A standard clean is £100 for a 2-bed or £110 for a 3-bed. Detached homes with extensions, valleys or extra storeys go on Premium, from £200.`,
  () => `Most homes cost £100 or £110 depending on size. We tell you the fixed price on the phone or WhatsApp before booking.`,
  () => `Two-bed £100, three-bed £110, larger homes from £200 — no call-out fee and nothing added on the day.`,
];
const G_FAQ_REGULAR: QALine[] = [
  (t) => ({ question: `Do you work in ${t.name} regularly?`, answer: `Yes. We have a team covering Leicestershire, so ${t.name} and the rest of ${area(t)} are part of our normal working week.` }),
  (t) => ({ question: `How soon can you clean my gutters in ${t.name}?`, answer: `Usually within a few working days. Our Leicestershire team works across ${area(t)} most weeks.` }),
  (t) => ({ question: `Is ${t.name} inside your service area?`, answer: `It is. ${t.name} is covered by our Leicestershire team along with the rest of ${area(t)}.` }),
  (t) => ({ question: `When is your next free slot in ${t.name}?`, answer: `Message us your postcode and we'll tell you our next day in ${area(t)} — often the same week.` }),
  (t) => ({ question: `Do you charge extra to come out to ${t.name}?`, answer: `No. There is no call-out fee in ${t.name} or anywhere else in ${area(t)}.` }),
];
const G_FAQ_HOME: QALine[] = [
  (t) => ({ question: `Do I need to be at home for my gutter clean in ${t.name}?`, answer: `No. As long as we can get to the front and back of the house, we can do the job and send you the before & after photos.` }),
  (t) => ({ question: `Can you clean my ${t.name} gutters while I'm at work?`, answer: `Yes. We only need access around the outside; you'll get photos of the result on your phone the same day.` }),
  () => ({ question: `What if you can't reach the back of my house?`, answer: `Let us know about gates or side access when you book. If a neighbour's garden is the only way in, we'll ask them first.` }),
  () => ({ question: `Do you clean conservatory gutters too?`, answer: `Yes. Conservatory gutters can be added to the visit for £50, cleaned from the ground like the rest.` }),
  () => ({ question: `Can you clean fascias and soffits at the same time?`, answer: `Yes — a fascia and soffit clean is £90 and can be done on the same visit as your gutters.` }),
];
const G_FAQ_INS: Line[] = [
  (t) => `Yes. WOW Gutters Ltd is fully insured for every job in ${t.name} and across Leicestershire.`,
  () => `Yes — we are fully insured, and can send insurance details to landlords or agents before we start.`,
  () => `We are fully insured. Ask us and we'll email the details before your booking.`,
  (t) => `Yes, fully insured for homes, flats and commercial buildings in ${area(t)}.`,
];

const R_FAQ_PRICE: Line[] = [
  (t) => `Roof cleaning in ${t.name} starts from £500. The final price depends on the size of the roof, how much moss there is and access, and we fix it before we start.`,
  (t) => `From £500 for a typical ${t.name} house. Larger or more complex roofs are quoted after we've seen photos or had a look, and the price doesn't change on the day.`,
  (t) => `Our ${t.name} roof cleans start at £500, including hand moss removal, soft-wash, biocide and clearing the gutters afterwards.`,
  () => `Prices start at £500. Send us a photo of the roof and we'll give you a fixed price.`,
  () => `From £500, fixed before we start. Very large roofs, steep pitches or difficult access are quoted individually.`,
];
const R_FAQ_PRESSURE: QALine[] = [
  (t) => ({ question: `Will cleaning damage my ${t.name} roof tiles?`, answer: `No. We never use high pressure on tiles. Moss is removed by hand and the roof is soft-washed at low pressure, then treated with biocide.` }),
  (t) => ({ question: `Do you pressure wash roofs in ${t.name}?`, answer: `We don't. High pressure can crack tiles and wash out mortar, so we hand-scrape the moss and use a low-pressure soft-wash and biocide.` }),
  () => ({ question: `Is soft-washing safe for old tiles?`, answer: `Yes. Low pressure and a biocide clean the tiles without forcing water underneath or loosening old fixings.` }),
  () => ({ question: `How long does the biocide last?`, answer: `It slows regrowth for many months. Most roofs stay clear for a couple of years before moss starts to return.` }),
];
const R_FAQ_GUTTERS: QALine[] = [
  (t) => ({ question: `Do you clear the gutters after cleaning a roof in ${t.name}?`, answer: `Yes. Moss from the roof ends up in the gutters, so we empty them and check the downpipes as part of the roof clean.` }),
  () => ({ question: `What happens to the moss you remove?`, answer: `It's bagged and taken away, and the gutters are emptied so none of it washes into your drains.` }),
  () => ({ question: `How long does a roof clean take?`, answer: `Most houses take a day. Larger or very mossy roofs can take longer, and we'll tell you when we quote.` }),
  () => ({ question: `Do I need to be home for the roof clean?`, answer: `Not for the whole day. We need access to the outside, and we send photos when we finish.` }),
];
const R_FAQ_INS: Line[] = [
  (t) => `Yes. We are fully insured for roof cleaning in ${t.name} and across Leicestershire.`,
  () => `Yes — fully insured, with details available before you book.`,
  (t) => `We are fully insured for roof work in ${area(t)}, on homes and commercial buildings.`,
];

function gutterFaqs(t: LeicsTown): QA[] {
  const near = nearbyNames(t);
  return [
    { question: `How much does gutter cleaning cost in ${t.name}?`, answer: slot(t, 'gutter', 'faq-price', G_FAQ_PRICE)(t) },
    { question: `How often should gutters be cleaned in ${t.name}?`, answer: slot(t, 'gutter', 'trees', GUTTER_TREES[t.trees], 1)(t) },
    {
      question: `Which parts of ${t.name} do you cover?`,
      answer: `All of ${t.name} (${t.postcodes.join(', ')}), including ${list(t.alsoCovers)}. We also work in ${list(near.slice(0, 4))}.`,
    },
    {
      question: slot(t, 'gutter', 'faq-local-q', [
        `What causes blocked gutters in ${t.name}?`,
        `Why do ${t.name} gutters overflow?`,
        `What do you usually find in ${t.name} gutters?`,
      ]),
      answer: t.gutter,
    },
    slot(t, 'gutter', 'faq-regular', G_FAQ_REGULAR)(t),
    slot(t, 'gutter', 'faq-home', G_FAQ_HOME)(t),
    { question: `Are you insured for work in ${t.name}?`, answer: slot(t, 'gutter', 'faq-ins', G_FAQ_INS)(t) },
  ];
}

function roofFaqs(t: LeicsTown): QA[] {
  const near = nearbyNames(t);
  return [
    { question: `How much does roof cleaning cost in ${t.name}?`, answer: slot(t, 'roof', 'faq-price', R_FAQ_PRICE)(t) },
    { question: `How often does a roof need cleaning in ${t.name}?`, answer: slot(t, 'roof', 'trees', ROOF_TREES[t.trees], 1)(t) },
    {
      question: slot(t, 'roof', 'faq-local-q', [
        `Why do roofs in ${t.name} get so mossy?`,
        `What kind of roofs do you clean in ${t.name}?`,
        `Is moss a problem on ${t.name} roofs?`,
      ]),
      answer: t.roof,
    },
    {
      question: `Which areas around ${t.name} do you cover for roof cleaning?`,
      answer: `We clean roofs across ${t.name} (${t.postcodes.join(', ')}) and in ${list([...t.alsoCovers.slice(0, 3), ...near.slice(0, 3)])}.`,
    },
    slot(t, 'roof', 'faq-pressure', R_FAQ_PRESSURE)(t),
    slot(t, 'roof', 'faq-gutters', R_FAQ_GUTTERS)(t),
    { question: `Are you insured for roof work in ${t.name}?`, answer: slot(t, 'roof', 'faq-ins', R_FAQ_INS)(t) },
  ];
}

/* ------------------------------------------------------------------ builders */

export function buildLeicsGutterLanding(t: LeicsTown): CityGutterLandingData {
  const near = nearbyNames(t);
  return {
    slug: t.slug,
    city: t.name,
    titleTag: `Gutter Cleaning ${t.name} | From £100 | WOW Gutters Ltd`,
    metaDescription: `Gutter cleaning in ${t.name} from £100. Ground-level vacuum, downpipes flushed, before & after photos. Call 07421 433910 — covering ${pcLabel(t)} and ${t.alsoCovers[0] ?? 'nearby villages'}.`,
    h1: `Gutter Cleaning ${t.name} — ${slot(t, 'gutter', 'h1', GUTTER_H1_TAIL)(t)}`,
    heroIntro: slot(t, 'gutter', 'hero', GUTTER_HERO)(t),
    whyTitle: slot(t, 'gutter', 'why', GUTTER_WHY_TITLE)(t),
    whyBody: [
      t.housing,
      `${t.gutter} ${slot(t, 'gutter', 'trees', GUTTER_TREES[t.trees])(t)}`,
      LEICS_EXTRA[t.slug]?.gutter ?? '',
      [G_ACCESS, G_CHECK, G_PROOF].map((pool, i) => slot(t, 'gutter', `m${i}`, pool)(t)).join(' '),
    ].filter(Boolean),
    localSpotlight: `${t.local} We also cover ${list(near.slice(0, 4))}.`,
    guarantees: [],
    propertyTypesTitle: slot(t, 'gutter', 'pt', [
      `Homes We Clean in ${t.name}`,
      `${t.name} Properties and Their Gutters`,
      `Gutter Cleaning for Every Type of ${t.name} Home`,
    ]),
    propertyTypes: rows(t, 'gutter'),
    areasTitle: `Areas We Cover Around ${t.name}`,
    areasInline: areasInline(t),
    faqsTitle: `Gutter Cleaning ${t.name} — Your Questions`,
    faqs: gutterFaqs(t),
    geo: t.geo,
    nearbyAreas: [...t.alsoCovers, ...near].slice(0, 8),
    postcodes: t.postcodes,
    ctaHeading: slot(t, 'gutter', 'cta', [
      `Book Gutter Cleaning in ${t.name}`,
      `Get a Fixed Gutter Cleaning Price for Your ${t.name} Home`,
      `Clear Gutters in ${t.name} — Book Your Visit`,
    ]),
    priceTo: 200,
  };
}

export function buildLeicsRoofLanding(t: LeicsTown): CityGutterLandingData {
  const near = nearbyNames(t);
  return {
    slug: t.slug,
    city: t.name,
    titleTag: `Roof Cleaning ${t.name} | Moss Removal From £500 | WOW Gutters Ltd`,
    metaDescription: `Roof cleaning in ${t.name} from £500: moss removed by hand, low-pressure soft-wash and biocide. Call 07421 433910 — covering ${pcLabel(t)} and ${t.alsoCovers[0] ?? 'nearby villages'}.`,
    h1: `Roof Cleaning ${t.name} — ${slot(t, 'roof', 'h1', ROOF_H1_TAIL)(t)}`,
    heroIntro: slot(t, 'roof', 'hero', ROOF_HERO)(t),
    whyTitle: slot(t, 'roof', 'why', ROOF_WHY_TITLE)(t),
    whyBody: [
      t.intro,
      `${t.roof} ${slot(t, 'roof', 'trees', ROOF_TREES[t.trees])(t)}`,
      LEICS_EXTRA[t.slug]?.roof ?? '',
      [R_MOSS, R_WASH, R_AFTER].map((pool, i) => slot(t, 'roof', `m${i}`, pool)(t)).join(' '),
    ].filter(Boolean),
    localSpotlight: slot(t, 'roof', 'spot', [
      `Our Leicestershire team cleans roofs across ${area(t)}. In and around ${t.name} that includes ${list(t.alsoCovers)}, as well as ${list(near.slice(0, 3))}.`,
      `Roof cleaning in ${t.name} is part of our regular ${area(t)} round, along with ${list(t.alsoCovers)} and the neighbouring towns of ${list(near.slice(0, 3))}.`,
      `From ${t.alsoCovers[0] ?? t.name} to ${near[0] ?? 'the surrounding villages'}, we clean roofs right across ${t.name} and ${area(t)}, including ${list([...t.alsoCovers.slice(1), ...near.slice(1, 3)])}.`,
    ]),
    guarantees: [],
    propertyTypesTitle: slot(t, 'roof', 'pt', [
      `${t.name} Roofs We Clean`,
      `Roof Types Across ${t.name}`,
      `From Slate to Concrete Tiles in ${t.name}`,
    ]),
    propertyTypes: rows(t, 'roof'),
    areasTitle: `Roof Cleaning Near ${t.name}`,
    areasInline: areasInline(t),
    faqsTitle: `Roof Cleaning ${t.name} — Your Questions`,
    faqs: roofFaqs(t),
    geo: t.geo,
    nearbyAreas: [...t.alsoCovers, ...near].slice(0, 8),
    postcodes: t.postcodes,
    ctaHeading: slot(t, 'roof', 'cta', [
      `Book Roof Cleaning in ${t.name}`,
      `Get a Fixed Roof Cleaning Price in ${t.name}`,
      `Clear the Moss From Your ${t.name} Roof`,
    ]),
    priceTo: 500,
  };
}

export function buildLeicsLanding(service: LeicsService, t: LeicsTown): CityGutterLandingData {
  return service === 'gutter' ? buildLeicsGutterLanding(t) : buildLeicsRoofLanding(t);
}
