/**
 * Deterministic per-slug copy so auto-generated location pages are not thin duplicates (audit 08.03).
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

const SEASONAL_NOTES = [
  'Autumn leaf fall usually peaks in late October and November — booking before the first heavy rain reduces overflow staining on brickwork.',
  'Properties with south-west facing rooflines often collect more wind-blown debris after storms; a spring check clears winter silt before summer downpours.',
  'Moss growth accelerates on shaded north-facing gutters; a mid-year inspection prevents compacted channels that are harder to clear in winter.',
  'After dry summers, hardened silt in valley gutters is common — our vacuum lifts compacted material without pulling brackets loose.',
];

const HOUSING_NOTES = [
  'interwar semis with mature front gardens',
  'Victorian terraces with shared rooflines',
  'post-war estates with long gutter runs',
  'mixed-period streets where cast iron meets modern uPVC',
  'elevated plots exposed to prevailing westerly weather',
];

export function areaUniqueWhyParagraphs(input: AreaInput): string[] {
  const { slug, name, postcodes, nearbyAreas } = input;
  const streets = (input as AreaSupplementEntry).streets ?? input.streets ?? [];
  const pc = postcodes[0] ?? 'local';
  const housing = pick(slug, 'housing', HOUSING_NOTES);
  const seasonal = pick(slug, 'season', SEASONAL_NOTES);

  const streetSentence =
    streets.length >= 2
      ? `We regularly route teams through ${name} on ${streets.slice(0, 3).join(', ')}${streets.length > 3 ? ' and neighbouring roads' : ''} — the same streets where ${housing} see repeat blockages each year.`
      : `Across ${name} (${pc}), ${housing} are the properties we see most often for overflow and joint stress after heavy rain.`;

  const neighbourSentence = nearbyAreas.length
    ? `If you are on the border with ${nearbyAreas.slice(0, 2).join(' or ')}, we can often combine your visit with nearby jobs to offer faster appointment slots.`
    : `Our ${name} runs are scheduled weekly where demand allows, keeping response times short for emergency overflow call-outs.`;

  return [streetSentence, seasonal, neighbourSentence];
}

/** Short block shown between “Why” and “Guarantee” — unique per slug. */
export function areaLocalSpotlight(input: AreaInput): string {
  const { slug, name, postcodes } = input;
  const streets = (input as AreaSupplementEntry).streets ?? input.streets ?? [];
  const hub = (input as AreaSupplementEntry).hubSlug;
  const hubLabel = hub
    ? hub.charAt(0).toUpperCase() + hub.slice(1).replace(/-/g, ' ')
    : 'the West Midlands';
  const pcList = postcodes.length ? postcodes.join(', ') : 'local postcodes';

  const focus =
    streets.length > 0
      ? `Typical jobs in ${name} include properties on ${streets.slice(0, 4).join(', ')}`
      : `Typical jobs in ${name} cover the full ${pcList} postcode area`;

  return `${focus}, managed from our ${hubLabel} routes. Every visit includes downpipe flushing, photographic proof, and honest notes if we spot cracked joints or sagging brackets — so you can plan repairs before water reaches internal walls.`;
}

export function areaSpecificFaq(input: AreaInput): { question: string; answer: string } | null {
  const streets = (input as AreaSupplementEntry).streets ?? input.streets ?? [];
  if (streets.length < 2) return null;
  const { name } = input;
  return {
    question: `Do you cover ${streets[0]} and nearby streets in ${name}?`,
    answer: `Yes — WOW Gutters Ltd covers ${streets.slice(0, 5).join(', ')} and surrounding roads in ${name}. We work in this area regularly and can usually confirm availability within one call to 07421 433910.`,
  };
}
