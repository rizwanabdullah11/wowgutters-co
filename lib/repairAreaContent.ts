import type { CityGutterLandingData, CityPropertyRow } from '@/constants/cityGutterLandingData';
import { CITY_GUTTER_LANDINGS } from '@/constants/cityGutterLandingData';
import type { SuburbPageData } from '@/components/areas/SuburbGutterCleaningPage';
import type { CityData } from '@/lib/cities';
import { getSuburbPageForSlug } from '@/lib/suburbPageData';
import { getAreaData } from '@/lib/getAreaData';
import { areaPath, repairAreaPath } from '@/lib/areaSlugs';
import { repairPriceFrom, repairPriceTo } from '@/lib/areaServiceMeta';

function repairHeroPills(): string[] {
  return [
    '6-month guarantee on qualifying repairs',
    'Leaking joints fixed, flow tested',
    'Same-day repairs where available',
  ];
}

function transformRepairPrices(text: string): string {
  return text.replace(/£(\d+)(?:\s*[–-]\s*£(\d+))?/g, (match, a, b) => {
    const low = parseInt(a, 10);
    if (Number.isNaN(low) || low >= 120) return match;
    if (b) {
      const high = parseInt(b, 10);
      return `£${repairPriceFrom(low)}–£${repairPriceTo(Number.isNaN(high) ? low + 40 : high)}`;
    }
    return `£${repairPriceFrom(low)}`;
  });
}

/** Convert gutter-focused copy to repair copy for area landing pages. */
export function transformTextToRepair(text: string): string {
  return transformRepairPrices(
    text
      .replace(/\bGutter Cleaning\b/g, 'Gutter Repairs')
      .replace(/\bgutter cleaning\b/g, 'gutter repairs')
      .replace(/\bGutter cleaning\b/g, 'Gutter repairs')
      .replace(/\bgutters\b/gi, 'gutters')
      .replace(/\bgutter\b/gi, 'gutter')
      .replace(/vacuum system\b/gi, 'repair service')
      .replace(/ground-level vacuum\b/gi, 'full repair service from ground level')
      .replace(/ground-level vacuum system\b/gi, 'full repair service from ground level')
      .replace(/vacuum\b/gi, 'repair')
      .replace(/cleaning\b/gi, 'repairs')
      .replace(/clean\b/gi, 'repair')
      .replace(/cleared\b/gi, 'repaired')
      .replace(/clears\b/gi, 'repairs')
      .replace(/clear\b/gi, 'repair')
      .replace(/downpipe flushing\b/gi, 'downpipe repair')
      .replace(/downpipe clearance\b/gi, 'downpipe repair')
      .replace(/1-year service guarantee\b/gi, '6-month repair guarantee')
      .replace(/1-year guarantee\b/gi, '6-month guarantee')
      .replace(/we return free if your gutters block within 12 months\b/gi, 'qualifying repairs carry a 6-month guarantee')
      .replace(/no ladders placed against your property\b/gi, 'no ladders used during repair work')
      .replace(/Reaches up to 4 storeys\b/gi, 'Repairs on gutters up to 4 storeys'),
  );
}

function transformFaqToRepair(faq: { question: string; answer: string }): { question: string; answer: string } {
  return {
    question: transformTextToRepair(faq.question),
    answer: transformTextToRepair(faq.answer),
  };
}

function repairFaqsForArea(
  city: string,
  sourceFaqs: { question: string; answer: string }[],
): { question: string; answer: string }[] {
  if (sourceFaqs.length > 0) {
    const transformed = sourceFaqs.map(transformFaqToRepair);
    const repairSpecific: { question: string; answer: string }[] = [
      {
        question: `What gutter repair services do you offer in ${city}?`,
        answer: `We repair leaking joints, sagging gutter runs, cracked sections, loose brackets, damaged downpipes, and poor fall. Every repair is flow-tested before we leave, and qualifying work carries a 6-month guarantee.`,
      },
      {
        question: `How much does gutter repair cost in ${city}?`,
        answer: `Gutter repair costs vary depending on the issue. A leaking joint reseal starts from around £80, while a full section replacement may cost more. We provide a free, no-obligation quote before any work starts.`,
      },
    ];
    return [...repairSpecific, ...transformed.slice(0, 4)];
  }
  return [
    {
      question: `What gutter repair services do you offer in ${city}?`,
      answer: `We repair leaking joints, sagging gutter runs, cracked sections, loose brackets, damaged downpipes, and poor fall. Every repair is flow-tested before we leave, and qualifying work carries a 6-month guarantee.`,
    },
    {
      question: `How much does gutter repair cost in ${city}?`,
      answer: `Gutter repair costs vary depending on the issue. A leaking joint reseal starts from around £80, while a full section replacement may cost more. We provide a free, no-obligation quote before any work starts.`,
    },
    {
      question: `Do you guarantee your gutter repair work in ${city}?`,
      answer: `Yes. Qualifying repair work carries a 6-month guarantee. If the repaired section develops the same issue within six months, we return and fix it at no additional cost.`,
    },
    {
      question: `Can you repair gutters on tall properties in ${city}?`,
      answer: `Yes. Our team works on properties up to 4 storeys using ground-based equipment where possible. We can access and repair gutters on most residential and commercial buildings across ${city}.`,
    },
  ];
}

export function transformCityGutterToRepair(data: CityGutterLandingData): CityGutterLandingData {
  const priceFrom = repairPriceFrom(50);
  const priceTo = repairPriceTo(data.priceTo ?? 140);

  return {
    ...data,
    titleTag: transformTextToRepair(data.titleTag),
    metaDescription: transformTextToRepair(data.metaDescription),
    h1: transformTextToRepair(data.h1),
    heroIntro: transformTextToRepair(data.heroIntro),
    whyTitle: transformTextToRepair(data.whyTitle),
    whyBody: [
      ...data.whyBody.map((p) =>
        transformTextToRepair(p)
          .replace(/blocked gutters overflow/gi, 'leaking gutters cause overflow')
          .replace(/moss, silt and leaves compact in neglected runs/gi, 'joints fail, brackets loosen and sections sag in neglected runs'),
      ),
    ],
    localSpotlight: data.localSpotlight
      ? transformTextToRepair(data.localSpotlight)
      : undefined,
    guarantees: [
      '6-month guarantee on qualifying repairs — peace of mind included',
      'Leaking joints, sagging runs and cracked sections all fixed',
      'Water flow test after every repair to confirm proper drainage',
      'Honest advice if replacement is more cost-effective than repair',
      'Before & after photos provided on every repair job',
      'Fully insured — comprehensive public liability cover on every visit',
    ],
    propertyTypesTitle: transformTextToRepair(data.propertyTypesTitle),
    propertyTypes: data.propertyTypes.map((row) => ({
      label: transformTextToRepair(row.label),
      detail: transformTextToRepair(row.detail)
        .replace(/vacuum(ed|es)?/gi, 'repaired')
        .replace(/cleared/gi, 'repaired'),
    })),
    areasTitle: data.areasTitle,
    areasInline: data.areasInline,
    faqsTitle: `FAQs — Gutter Repairs ${data.city}`,
    faqs: repairFaqsForArea(data.city, data.faqs),
    internalLinks: (data.internalLinks ?? []).map((l) => ({
      label: l.label.replace(/Gutter Cleaning/g, 'Gutter Repairs').replace(/gutter cleaning/g, 'gutter repairs'),
      href: l.href,
    })),
    ctaHeading: `Book Your Gutter Repair in ${data.city} — Free Quote in 60 Seconds`,
    priceTo,
  };
}

export function transformSuburbGutterToRepair(data: SuburbPageData, slug: string): SuburbPageData {
  const cityData = getAreaData(slug);

  return {
    ...data,
    heroBadge: data.heroBadge.replace(/gutter/gi, 'gutter repair'),
    heroTitleLine1: transformTextToRepair(data.heroTitleLine1),
    heroTitleLine2: transformTextToRepair(data.heroTitleLine2),
    whyTitle: transformTextToRepair(data.whyTitle),
    whyParagraphs: data.whyParagraphs.map(transformTextToRepair),
    guarantees: (data.guarantees ?? []).map(transformTextToRepair),
    propertyTypesTitle: transformTextToRepair(data.propertyTypesTitle),
    propertyTypes: data.propertyTypes.map((row) => ({
      label: transformTextToRepair(row.label),
      detail: transformTextToRepair(row.detail),
    })),
    areasCoveredTitle: data.areasCoveredTitle,
    areasCoveredText: data.areasCoveredText,
    areaLinks: [
      { href: repairAreaPath(slug), label: `Gutter Repairs ${data.city}` },
      { href: areaPath(slug), label: `Gutter cleaning ${data.city}` },
      ...data.areaLinks.slice(0, 4).map((l) => ({
        href: l.href,
        label: l.label.replace(/Gutter Cleaning/g, 'Gutter Repairs').replace(/gutter cleaning/g, 'gutter repairs'),
      })),
      { href: '/services/gutter-inspection/', label: 'Gutter inspection' },
      { href: '/help/repair/', label: 'Gutter repairs' },
    ],
    faqs: repairFaqsForArea(data.city, data.faqs),
    postcodesTitle: transformTextToRepair(data.postcodesTitle),
    bookingTitle: transformTextToRepair(data.bookingTitle),
    blogLocality: data.blogLocality,
  };
}

/** Rich primary-city landing only (mirrors CITY_GUTTER_LANDINGS lookup). */
export function getRepairCityLanding(slug: string): CityGutterLandingData | null {
  const gutterCity = CITY_GUTTER_LANDINGS[slug];
  if (!gutterCity) return null;
  return transformCityGutterToRepair(gutterCity);
}

export function getRepairGeneratedLanding(slug: string): CityGutterLandingData | null {
  const data = getAreaData(slug);
  if (!data) return null;
  return buildRepairLandingFromCity(data);
}

export function getRepairSuburbLanding(slug: string): SuburbPageData | null {
  const suburb = getSuburbPageForSlug(slug);
  if (!suburb) return null;
  return transformSuburbGutterToRepair(suburb, slug);
}

function repairGeneratedPropertyTypes(
  name: string,
  nearby: string[],
): CityPropertyRow[] {
  const n = nearby.slice(0, 2).join(' and ') || 'surrounding areas';
  return [
    {
      label: `Victorian & Edwardian terraces (${name})`,
      detail: `Leaking joints and cracked cast iron on period properties — resealed and flow tested without ladders against brickwork.`,
    },
    {
      label: '1930s–60s semis',
      detail: `Sagging uPVC runs and loose brackets — the most common repair in ${name}. Brackets adjusted or replaced to restore proper fall.`,
    },
    {
      label: 'Post-war estates & modern homes',
      detail: `Mature street trees put weight on gutter runs — brackets snap and joints open. We repair and flow test every section.`,
    },
    {
      label: `Areas near ${n}`,
      detail: `We work across surrounding areas weekly with same-day repair availability on many routes.`,
    },
  ];
}

function repairGeneratedWhyBody(name: string): string[] {
  return [
    `Leaking gutters in ${name} overflow during heavy rain, sending water down external walls and into foundations — one of the most preventable causes of damp we see. Joints fail, brackets loosen and sections sag in neglected runs, adding weight that pulls gutters away from the fascia.`,
    `Most ${name} homeowners notice a drip or sag before calling us. We inspect the full system, fix the problem with quality materials, and test every repair with a water flow check before we leave.`,
  ];
}

function repairGeneratedInternalLinks(slug: string, name: string, nearbyAreas: string[]): { label: string; href: string }[] {
  const links: { label: string; href: string }[] = [];
  for (const area of nearbyAreas.slice(0, 4)) {
    const nearbySlug = area.toLowerCase().replace(/\s+/g, '-');
    if (nearbySlug !== slug) {
      links.push({ label: `Gutter Repairs ${area}`, href: repairAreaPath(nearbySlug) });
    }
  }
  links.push({ label: `Gutter cleaning ${name}`, href: areaPath(slug) });
  links.push({ label: 'Gutter inspection', href: '/services/gutter-inspection/' });
  links.push({ label: 'Gutter repairs guide', href: '/help/repair/' });
  return links.slice(0, 6);
}

export function buildRepairLandingFromCity(input: CityData & { streets?: string[]; hubSlug?: string }): CityGutterLandingData | null {
  const { slug, name, postcodes, nearbyAreas, geo, priceFrom, priceTo } = input;
  const pcLabel = postcodes.length ? postcodes.join(', ') : 'local postcodes';
  const repairFrom = repairPriceFrom(priceFrom);
  const repairTo = repairPriceTo(priceTo);

  const areasInline = [
    name,
    ...nearbyAreas.slice(0, 8),
  ].join(' | ');

  return {
    slug,
    city: name,
    titleTag: `Gutter Repairs ${name} | Leaks, Sagging & Broken Gutters Fixed | WOW Gutters Ltd`,
    metaDescription: `Expert gutter repairs in ${name} from £${repairFrom}. Leaking joints, sagging runs, cracked sections — fixed with a 6-month guarantee. Postcodes ${pcLabel}. Call WOW Gutters Ltd: 07421 433910.`,
    h1: `Gutter Repairs ${name} — Leaks, Sagging & Broken Gutters Fixed`,
    heroIntro: `WOW Gutters Ltd provides professional gutter repairs in ${name} (${pcLabel}). From leaking joints on terraced homes to sagging uPVC runs on semis and bracket replacements on detached properties, we fix every type of gutter problem. Every repair is flow-tested before we leave, and qualifying work carries a 6-month guarantee.`,
    whyTitle: `Why ${name} Homes Need Professional Gutter Repairs`,
    whyBody: repairGeneratedWhyBody(name),
    localSpotlight: undefined,
    guarantees: [
      '6-month guarantee on qualifying repairs — peace of mind included',
      'Leaking joints, sagging runs and cracked sections all fixed',
      'Water flow test after every repair to confirm proper drainage',
      'Honest advice if replacement is more cost-effective than repair',
      'Before & after photos provided on every repair job',
      'Fully insured — comprehensive public liability cover on every visit',
    ],
    propertyTypesTitle: `Gutter Repairs for All Property Types in ${name}`,
    propertyTypes: repairGeneratedPropertyTypes(name, nearbyAreas),
    areasTitle: `Areas We Cover Around ${name}`,
    areasInline,
    faqsTitle: `FAQs — Gutter Repairs ${name}`,
    faqs: repairFaqsForArea(name, []),
    geo,
    internalLinks: repairGeneratedInternalLinks(slug, name, nearbyAreas),
    nearbyAreas,
    postcodes,
    ctaHeading: `Book Your Gutter Repair in ${name} — Free Quote in 60 Seconds`,
    priceTo: repairTo,
  };
}

export function buildBirminghamRepairLanding(): CityGutterLandingData {
  const city = getAreaData('birmingham');
  const postcodes = city?.postcodes ?? ['B1', 'B13', 'B14', 'B15', 'B16', 'B17', 'B23', 'B27', 'B28', 'B29', 'B31', 'B43', 'B73', 'B74', 'B76'];
  const nearbyAreas = city?.nearbyAreas ?? ['Solihull', 'Sutton Coldfield', 'Wolverhampton', 'Walsall', 'Dudley', 'West Bromwich'];
  const priceFrom = repairPriceFrom(50);
  const priceTo = repairPriceTo(140);

  return {
    slug: 'birmingham',
    city: 'Birmingham',
    titleTag: 'Gutter Repairs Birmingham | Leaks, Sagging & Broken Gutters Fixed | WOW Gutters Ltd',
    metaDescription:
      'Expert gutter repairs in Birmingham. Leaking joints, sagging runs, cracked sections, broken brackets — diagnosed and fixed with a 6-month guarantee. Call WOW Gutters Ltd: 07421 433910.',
    h1: 'Gutter Repairs Birmingham — Leaks, Sagging & Broken Gutters Fixed Across the West Midlands',
    heroIntro:
      'WOW Gutters Ltd provides professional gutter repairs across Birmingham and all surrounding West Midlands postcodes. From leaking joints on Victorian terraces in Moseley to sagging uPVC runs on semis in Sutton Coldfield and bracket replacements on detached homes across B15–B76, we fix every type of gutter problem. Every repair is flow-tested before we leave, and qualifying work carries a 6-month guarantee.',
    whyTitle: 'Why Birmingham Homes Need Professional Gutter Repairs',
    whyBody: [
      'A leaking gutter rarely fixes itself. Water that misses the downpipe ends up against your walls, saturating brickwork, rotting fascias, and finding its way into your home. In Birmingham\'s damp West Midlands climate, small gutter issues escalate quickly into structural problems.',
      'Tree-lined suburbs such as Moseley, Harborne, Sutton Coldfield and Kings Heath see more gutter damage as debris weight pulls brackets loose and joints open over time. Professional repair with flow testing and a 6-month guarantee is the most cost-effective way to protect your property.',
    ],
    guarantees: [
      '6-month guarantee on qualifying repairs — peace of mind included',
      'Leaking joints, sagging runs and cracked sections all fixed',
      'Water flow test after every repair to confirm proper drainage',
      'Honest advice if replacement is more cost-effective than repair',
      'Before & after photos provided on every repair job',
      'Fully insured — comprehensive public liability cover on every visit',
    ],
    propertyTypesTitle: 'Gutter Repairs for All Birmingham Property Types',
    propertyTypes: [
      { label: 'Victorian & Edwardian terraces', detail: 'Period properties across inner Birmingham — leaking cast iron and uPVC joints resealed and flow tested.' },
      { label: '1930s–60s semis', detail: 'The most common Birmingham housing stock. Sagging uPVC runs rehung with new brackets to restore proper fall.' },
      { label: 'Large detached homes', detail: 'Sutton Coldfield, Edgbaston and Solihull detached properties — complex gutter runs inspected and repaired in a single visit.' },
      { label: 'Flats & managed blocks', detail: 'We coordinate with managing agents, provide photographic documentation, and can schedule planned maintenance programmes.' },
    ],
    areasTitle: 'Areas We Cover Around Birmingham',
    areasInline:
      'Moseley, Harborne, Edgbaston, Kings Heath, Sutton Coldfield, Erdington, Selly Oak, Northfield, Acocks Green, Hall Green, Solihull, West Bromwich, Walsall, Wolverhampton, Dudley',
    faqsTitle: 'FAQs — Gutter Repairs Birmingham',
    localSpotlight: undefined,
    faqs: repairFaqsForArea('Birmingham', []),
    geo: city?.geo ?? { latitude: 52.4862, longitude: -1.8904 },
    internalLinks: [
      { label: 'Gutter Repairs Solihull', href: repairAreaPath('solihull') },
      { label: 'Gutter cleaning Birmingham', href: areaPath('birmingham') },
      { label: 'Gutter inspection', href: '/services/gutter-inspection/' },
    ],
    nearbyAreas,
    postcodes,
    ctaHeading: 'Book Your Birmingham Gutter Repair — Free Quote in 60 Seconds',
    priceTo,
  };
}
