import { roofAreaPath } from '@/lib/areaSlugs';
import { roofPriceFrom, roofPriceTo } from '@/lib/areaServiceMeta';

export type RoofFaqItem = { question: string; answer: string };

type RoofFaqInput = {
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

const ROOF_FREQUENCY_ANSWERS = [
  'Every 2–3 years suits most West Midlands homes. North-facing slopes and tree-shaded roofs often need treatment every 18–24 months — biocide after cleaning slows regrowth through the next winter.',
  'Most homeowners in this area book roof cleaning every 2–3 years. Properties with heavy moss, clay tiles, or mature garden trees may benefit from an autumn treatment before frost — we apply biocide on every visit.',
  'We typically recommend roof cleaning every 2–3 years for concrete and clay tiles. Shaded rear elevations and valley moss may need attention sooner; biocide treatment is included to extend time between visits.',
];

const ROOF_METHOD_ANSWERS = [
  'No. We use controlled soft-wash methods and biocide treatment designed for UK roof tiles. High pressure is avoided to protect tiles, pointing, and ridge mortar.',
  'No — high-pressure washing is avoided on roof tiles. Our soft-wash approach clears moss and algae safely, then biocide is applied to slow organic regrowth.',
  'We do not pressure-wash roof tiles. Soft-wash cleaning and biocide treatment protect pointing, ridges and fragile clay tiles while removing moss and lichen.',
];

export function buildRoofSchemaFaqs(input: RoofFaqInput): RoofFaqItem[] {
  const { city, slug, priceFrom, priceTo, postcodes, nearbyAreas } = input;
  const pc = postcodes.slice(0, 5).join(', ');

  return [
    {
      question: `How much does roof cleaning cost in ${city}?`,
      answer: `Roof cleaning in ${city} typically starts from £${priceFrom} for a standard terrace or semi-detached home, with larger detached properties quoted up to £${priceTo}. Price depends on roof size, moss coverage, and access. Fixed quote before work starts.`,
    },
    {
      question: `How often should I have my roof cleaned in ${city}?`,
      answer: faqPick(slug, 'roof-frequency', ROOF_FREQUENCY_ANSWERS),
    },
    {
      question: 'Do you use pressure washing on roof tiles?',
      answer: faqPick(slug, 'roof-method', ROOF_METHOD_ANSWERS),
    },
    {
      question: 'Does roof cleaning include moss removal?',
      answer:
        'Yes. Moss removal is included. We clear moss and organic growth from the roof surface, gutters are checked at the roofline, and biocide is applied to help prevent rapid regrowth.',
    },
    {
      question: 'Do you provide before and after photos?',
      answer: 'Yes. Before and after photos on every roof cleaning job. Images sent directly to you on the same day.',
    },
    {
      question: `What areas of ${city} do you cover?`,
      answer: `All ${city} postcodes${pc ? ` including ${pc}` : ''} and surrounding areas: ${nearbyAreas.slice(0, 5).join(', ')}${nearbyAreas.length > 5 ? ' and more' : ''}.`,
    },
    {
      question: 'Are you insured for roof cleaning?',
      answer: 'Yes. Fully insured with comprehensive public liability insurance on every roof cleaning job.',
    },
  ];
}

export function buildRoofFaqsFromGutterPrice(
  city: string,
  slug: string,
  gutterPriceFrom: number,
  gutterPriceTo: number,
  postcodes: string[],
  nearbyAreas: string[],
): RoofFaqItem[] {
  return buildRoofSchemaFaqs({
    city,
    slug,
    priceFrom: roofPriceFrom(gutterPriceFrom),
    priceTo: roofPriceTo(gutterPriceTo),
    postcodes,
    nearbyAreas,
  });
}

export function roofInternalLinks(
  slug: string,
  nearbyAreas: string[],
  hubSlug?: string,
): { label: string; href: string }[] {
  const links: { label: string; href: string }[] = [];

  if (hubSlug && hubSlug !== slug) {
    const hubName = hubSlug === 'birmingham' ? 'Birmingham' : hubSlug.charAt(0).toUpperCase() + hubSlug.slice(1);
    links.push({ label: `Roof cleaning ${hubName}`, href: roofAreaPath(hubSlug) });
  }

  for (const area of nearbyAreas.slice(0, 3)) {
    const nearbySlug = area.toLowerCase().replace(/\s+/g, '-');
    if (nearbySlug !== slug) {
      links.push({ label: `Roof cleaning ${area}`, href: roofAreaPath(nearbySlug) });
    }
  }

  links.push({ label: 'Gutter cleaning', href: `/gutter-cleaning-${slug}/` });
  links.push({ label: 'Roof inspection', href: '/services/roof-inspection/' });
  links.push({ label: 'Moss removal', href: '/help/clean/' });

  return links.slice(0, 6);
}
