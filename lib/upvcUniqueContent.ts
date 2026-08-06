/**
 * Deterministic per-slug exterior uPVC copy — mirrors areaUniqueContent.ts / roofUniqueContent.ts
 * for exterior uPVC cleaning area pages.
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

const UPVC_SEASONAL_NOTES = [
  'North-facing fascia and soffit runs hold moisture longest, so green algae and black mould tend to establish there first — hot purified water removes the growth without etching the uPVC surface.',
  'After damp autumns, algae spores settle on fascias, soffits and window sills; a clean before winter stops staining from becoming permanent on white uPVC.',
  'Properties backed by mature trees see faster lichen and moss streaking on raised facings — we recommend checking uPVC every 18–24 months in these positions.',
  'Roadside elevations attract fine carbon dust that dulls white uPVC over time; hot purified water lifts the grime and restores a bright, streak-free finish.',
];

const UPVC_HOUSING_NOTES = [
  'modern estates with white or cream uPVC fascia and window systems',
  'Victorian terraces refitted with uPVC cladding, soffits and cills',
  '1930s semis with uPVC windows and raised fascia boards',
  'detached plots with conservatories, porches and wide fascia runs',
  'bungalows with low angled rooflines and large uPVC window frames',
];

export function upvcUniqueWhyParagraphs(input: AreaInput): string[] {
  const { slug, name, postcodes, nearbyAreas } = input;
  const streets = (input as AreaSupplementEntry).streets ?? input.streets ?? [];
  const pc = postcodes[0] ?? 'local';
  const housing = pick(slug, 'upvc-housing', UPVC_HOUSING_NOTES);
  const seasonal = pick(slug, 'upvc-season', UPVC_SEASONAL_NOTES);

  const streetSentence =
    streets.length >= 2
      ? `We regularly clean uPVC on ${streets.slice(0, 3).join(', ')}${streets.length > 3 ? ' and neighbouring roads' : ''} in ${name} — where ${housing} commonly show green algae and black mould on shaded facades.`
      : `Across ${name} (${pc}), ${housing} are the properties we restore most often after the dulling green and grey staining builds up on fascias, soffits and frames.`;

  const neighbourSentence = nearbyAreas.length
    ? `If your property borders ${nearbyAreas.slice(0, 2).join(' or ')}, we can often combine your visit with nearby uPVC cleaning jobs for faster scheduling.`
    : `Our ${name} exterior uPVC routes run weekly where demand allows, keeping appointment slots available through the peak spring growth season.`;

  return [streetSentence, seasonal, neighbourSentence];
}

export function upvcLocalSpotlight(input: AreaInput): string {
  const { name, postcodes } = input;
  const streets = (input as AreaSupplementEntry).streets ?? input.streets ?? [];
  const hub = (input as AreaSupplementEntry).hubSlug;
  const hubLabel = hub
    ? hub.charAt(0).toUpperCase() + hub.slice(1).replace(/-/g, ' ')
    : 'the West Midlands';
  const pcList = postcodes.length ? postcodes.join(', ') : 'local postcodes';

  const focus =
    streets.length > 0
      ? `Typical exterior uPVC jobs in ${name} include properties on ${streets.slice(0, 4).join(', ')}`
      : `Typical exterior uPVC jobs in ${name} cover the full ${pcList} postcode area`;

  return `${focus}, scheduled from our ${hubLabel} routes. Every visit uses hot purified water to lift algae, mould and carbon staining from fascias, soffits, window frames and doors — leaving a streak-free bright finish without harsh chemicals — plus before and after photographs on the day.`;
}

export function upvcSpecificFaq(input: AreaInput): { question: string; answer: string } | null {
  const streets = (input as AreaSupplementEntry).streets ?? input.streets ?? [];
  if (streets.length < 2) return null;
  const { name } = input;
  return {
    question: `Do you clean uPVC on ${streets[0]} and nearby streets in ${name}?`,
    answer: `Yes — WOW Gutters Ltd provides exterior uPVC cleaning on ${streets.slice(0, 5).join(', ')} and surrounding roads in ${name}. We work in this area regularly and can usually confirm availability with one call to 07421 433910.`,
  };
}