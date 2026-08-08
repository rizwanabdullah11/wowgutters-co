import { upvcAreaPath } from '@/lib/areaSlugs';
import { upvcPriceFrom, upvcPriceTo } from '@/lib/areaServiceMeta';

export type UpvcFaqItem = { question: string; answer: string };

type UpvcFaqInput = {
  city: string;
  slug: string;
  priceFrom: number;
  priceTo: number;
  postcodes: string[];
  nearbyAreas: string[];
};

function faqSeed(slug: string, salt: string): number {
  let h = 2166136261;
  const key = `${slug}:${salt}`;
  for (let i = 0; i < key.length; i++) {
    h ^= key.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function faqPick<T>(slug: string, salt: string, items: T[]): T {
  return items[faqSeed(slug, salt) % items.length];
}

const UPVC_FREQUENCY_ANSWERS = [
  'Most uPVC benefits from cleaning every 2–3 years. Properties near busy roads (carbon staining) or trees (algae growth) may need an annual clean — the bright finish lasts longest when treated before growth etches into the surface.',
  'We usually recommend exterior uPVC cleaning every 2–3 years. Shaded elevations, roadside fascias, and tree-covered plots often need attention sooner; hot purified water removes growth without dulling the uPVC.',
  'For most West Midlands homes a uPVC clean every 2–3 years keeps fascias, soffits and frames bright. North-facing runs and properties beneath trees may need checking every 18–24 months — we restore the white finish on every visit.',
];

const UPVC_METHOD_ANSWERS = [
  'No. We use hot purified water with a soft-rinse finish — no harsh chemicals and no abrasive scrubbing that could scratch or dull the uPVC surface. Algae, mould and carbon staining are lifted safely.',
  'No. Hot purified water at low pressure is used, designed so no heavy pressure washing damages seals or etches uPVC. Grease-free, streak-free results on fascias, soffits and frames.',
  'We avoid abrasive methods and harsh chemicals on uPVC. Hot purified water lifts algae, mould and oxidation while leaving no streaks and no residue on the surface.',
];

export function buildUpvcSchemaFaqs(input: UpvcFaqInput): UpvcFaqItem[] {
  const { city, slug, priceFrom, priceTo, postcodes, nearbyAreas } = input;
  const pc = postcodes.slice(0, 5).join(', ');

  return [
    {
      question: `How much does exterior uPVC cleaning cost in ${city}?`,
      answer: `Exterior uPVC cleaning in ${city} typically starts from £${priceFrom} for a standard terrace or semi-detached home, with larger detached properties quoted up to £${priceTo}. Price depends on the amount of uPVC to clean, staining level, and access. Fixed quote before work starts.`,
    },
    {
      question: `How often should I have my uPVC cleaned in ${city}?`,
      answer: faqPick(slug, 'upvc-frequency', UPVC_FREQUENCY_ANSWERS),
    },
    {
      question: 'Do you use pressure washing on uPVC?',
      answer: faqPick(slug, 'upvc-method', UPVC_METHOD_ANSWERS),
    },
    {
      question: 'Does uPVC cleaning remove green algae and black mould?',
      answer:
        'Yes. Hot purified water acting on algae, mould, lichen and carbon staining from fascias, soffits, window frames and doors. We restore the bright white finish without scratching or residue.',
    },
    {
      question: 'Do you clean fascias, soffits and conservatories too?',
      answer: 'Yes. Fascias, soffits, cills, window and door frames, cladding and conservatory uPVC are all covered on the same visit — a full exterior clean on the roofline.',
    },
    {
      question: 'Do you provide before and after photos?',
      answer: 'Yes. Before and after photos on every uPVC cleaning job. Images sent directly to you on the same day.',
    },
    {
      question: `What areas of ${city} do you cover?`,
      answer: `All ${city} postcodes${pc ? ` including ${pc}` : ''} and surrounding areas: ${nearbyAreas.slice(0, 5).join(', ')}${nearbyAreas.length > 5 ? ' and more' : ''}.`,
    },
    {
      question: 'Are you insured for uPVC cleaning?',
      answer: 'Yes. Fully insured with comprehensive public liability insurance on every uPVC cleaning job.',
    },
  ];
}

export function buildUpvcFaqsFromGutterPrice(
  city: string,
  slug: string,
  gutterPriceFrom: number,
  gutterPriceTo: number,
  postcodes: string[],
  nearbyAreas: string[],
): UpvcFaqItem[] {
  return buildUpvcSchemaFaqs({
    city,
    slug,
    priceFrom: upvcPriceFrom(gutterPriceFrom),
    priceTo: upvcPriceTo(gutterPriceTo),
    postcodes,
    nearbyAreas,
  });
}

export function upvcInternalLinks(
  slug: string,
  nearbyAreas: string[],
  hubSlug?: string,
): { label: string; href: string }[] {
  const links: { label: string; href: string }[] = [];

  if (hubSlug && hubSlug !== slug) {
    const hubName = hubSlug === 'birmingham' ? 'Birmingham' : hubSlug.charAt(0).toUpperCase() + hubSlug.slice(1);
    links.push({ label: `Exterior uPVC Cleaning ${hubName}`, href: upvcAreaPath(hubSlug) });
  }

  for (const area of nearbyAreas.slice(0, 3)) {
    const nearbySlug = area.toLowerCase().replace(/\s+/g, '-');
    if (nearbySlug !== slug) {
      links.push({ label: `Exterior uPVC Cleaning ${area}`, href: upvcAreaPath(nearbySlug) });
    }
  }

  links.push({ label: 'Gutter cleaning', href: `/gutter-cleaning-${slug}/` });
  links.push({ label: 'Roof cleaning', href: `/roof-cleaning-${slug}/` });
  links.push({ label: 'uPVC care', href: '/upvc-cleaning/' });

  return links.slice(0, 6);
}