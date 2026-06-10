/**
 * Deterministic per-slug roof copy — mirrors areaUniqueContent.ts for roof cleaning pages.
 */

import type { CityData } from '@/lib/cities';
import type { AreaSupplementEntry } from '@/lib/areaSupplement';

type AreaInput = CityData & { streets?: string[]; hubSlug?: string };

function seed(slug: string): number {
  let h = 2166136261;
  for (let i = 0; i < slug.length; i++) {
    h ^= slug.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function pick<T>(slug: string, salt: string, items: T[]): T {
  const s = seed(`${slug}:${salt}`);
  return items[s % items.length];
}

const ROOF_SEASONAL_NOTES = [
  'North-facing roof slopes in shaded positions often develop moss first — a biocide treatment after cleaning slows regrowth through the following winter.',
  'After stormy autumns, moss and leaf matter compact in roof valleys; clearing before winter frost reduces pointing damage on older clay tiles.',
  'Properties beneath mature street trees see faster lichen spread on rear elevations — we recommend checking moss coverage every 18–24 months.',
  'Following dry summers, baked-on algae on concrete tiles is common across the West Midlands; soft-wash treatment restores appearance without pressure damage.',
];

const ROOF_HOUSING_NOTES = [
  'interwar semis with shallow-pitch concrete tile roofs',
  'Victorian terraces with clay ridges and rear extension valleys',
  'post-war estates with north-facing rear slopes under tree cover',
  'detached plots with complex multi-pitch rooflines',
  'elevated properties exposed to prevailing westerly weather',
];

export function roofUniqueWhyParagraphs(input: AreaInput): string[] {
  const { slug, name, postcodes, nearbyAreas } = input;
  const streets = (input as AreaSupplementEntry).streets ?? input.streets ?? [];
  const pc = postcodes[0] ?? 'local';
  const housing = pick(slug, 'roof-housing', ROOF_HOUSING_NOTES);
  const seasonal = pick(slug, 'roof-season', ROOF_SEASONAL_NOTES);

  const streetSentence =
    streets.length >= 2
      ? `We regularly treat roofs on ${streets.slice(0, 3).join(', ')}${streets.length > 3 ? ' and neighbouring roads' : ''} in ${name} — where ${housing} commonly show heavy moss on shaded slopes.`
      : `Across ${name} (${pc}), ${housing} are the properties we treat most often for moss, algae and valley staining after wet winters.`;

  const neighbourSentence = nearbyAreas.length
    ? `If your property borders ${nearbyAreas.slice(0, 2).join(' or ')}, we can often combine your visit with nearby roof cleaning jobs for faster scheduling.`
    : `Our ${name} roof cleaning routes run weekly where demand allows, keeping appointment slots available through peak autumn moss season.`;

  return [streetSentence, seasonal, neighbourSentence];
}

export function roofLocalSpotlight(input: AreaInput): string {
  const { slug, name, postcodes } = input;
  const streets = (input as AreaSupplementEntry).streets ?? input.streets ?? [];
  const hub = (input as AreaSupplementEntry).hubSlug;
  const hubLabel = hub
    ? hub.charAt(0).toUpperCase() + hub.slice(1).replace(/-/g, ' ')
    : 'the West Midlands';
  const pcList = postcodes.length ? postcodes.join(', ') : 'local postcodes';

  const focus =
    streets.length > 0
      ? `Typical roof cleaning jobs in ${name} include properties on ${streets.slice(0, 4).join(', ')}`
      : `Typical roof cleaning jobs in ${name} cover the full ${pcList} postcode area`;

  return `${focus}, scheduled from our ${hubLabel} routes. Every visit includes moss and algae removal, biocide application, before and after photographs, and honest notes on ridge mortar, flashing or tile condition — so you can plan repairs before moisture reaches the structure below.`;
}

export function roofSpecificFaq(input: AreaInput): { question: string; answer: string } | null {
  const streets = (input as AreaSupplementEntry).streets ?? input.streets ?? [];
  if (streets.length < 2) return null;
  const { name } = input;
  return {
    question: `Do you clean roofs on ${streets[0]} and nearby streets in ${name}?`,
    answer: `Yes — WOW Gutters Ltd provides roof cleaning on ${streets.slice(0, 5).join(', ')} and surrounding roads in ${name}. We work in this area regularly and can usually confirm availability with one call to 07421 433910.`,
  };
}
