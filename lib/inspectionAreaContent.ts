import type { CityGutterLandingData, CityPropertyRow } from '@/constants/cityGutterLandingData';
import { CITY_GUTTER_LANDINGS } from '@/constants/cityGutterLandingData';
import type { SuburbPageData } from '@/components/areas/SuburbGutterCleaningPage';
import type { CityData } from '@/lib/cities';
import { getSuburbPageForSlug } from '@/lib/suburbPageData';
import { getAreaData } from '@/lib/getAreaData';
import { areaPath, inspectionAreaPath, repairAreaPath } from '@/lib/areaSlugs';

function inspectionHeroPills(): string[] {
  return [
    'Free of charge with no obligation',
    'Photo report of any problem areas',
    'Honest advice on cleaning or repairs',
  ];
}

/** Convert gutter-focused copy to inspection copy for area landing pages. */
export function transformTextToInspection(text: string): string {
  return text
    .replace(/\bGutter Cleaning\b/g, 'Gutter Inspection')
    .replace(/\bgutter cleaning\b/g, 'gutter inspection')
    .replace(/\bGutter cleaning\b/g, 'Gutter inspection')
    .replace(/vacuum system\b/gi, 'inspection service')
    .replace(/ground-level vacuum system\b/gi, 'safe ground-level and high-reach inspection')
    .replace(/ground-level vacuum\b/gi, 'safe ground-level inspection')
    .replace(/vacuum(ed|es|ing)?\b/gi, 'inspected')
    .replace(/cleaned\b/gi, 'inspected')
    .replace(/cleaning\b/gi, 'inspection')
    .replace(/clean\b/gi, 'inspection')
    .replace(/cleared\b/gi, 'inspected')
    .replace(/clears\b/gi, 'inspects')
    .replace(/clearing\b/gi, 'inspecting')
    .replace(/clear\b/gi, 'inspect')
    .replace(/1-year service guarantee\b/gi, 'free inspection with no obligation')
    .replace(/1-year guarantee\b/gi, 'free inspection with no obligation')
    .replace(/we return free if your gutters block within 12 months\b/gi, 'the inspection is completely free with no obligation to book work')
    .replace(/no ladders placed against your property\b/gi, 'safe ground-level and high-reach inspection with no ladders against brickwork')
    .replace(/Reaches up to 4 storeys\b/gi, 'Inspects gutters and rooflines up to 4 storeys');
}

function transformFaqToInspection(faq: { question: string; answer: string }): { question: string; answer: string } {
  return {
    question: transformTextToInspection(faq.question),
    answer: transformTextToInspection(faq.answer),
  };
}

function inspectionFaqsForArea(
  city: string,
  sourceFaqs: { question: string; answer: string }[],
): { question: string; answer: string }[] {
  const inspectionSpecific: { question: string; answer: string }[] = [
    {
      question: `Is the gutter inspection in ${city} really free?`,
      answer: `Yes. Our gutter inspection in ${city} is completely free of charge with no obligation to book any work. We check your gutters, downpipes, joints, brackets and fascia line, then give you honest advice on whether cleaning, repairs or monitoring is the right next step.`,
    },
    {
      question: `What does a gutter inspection in ${city} cover?`,
      answer: `We check the full rainwater system visible from safe access points: the gutter channel and alignment, downpipe flow and blockages, joints and seals, bracket spacing and signs of sagging, fascia and soffit condition near the gutter line, and any overflow staining on walls. You get a clear explanation of findings and photos of any problem areas where access allows.`,
    },
    {
      question: `How long does a gutter inspection in ${city} take?`,
      answer: `A typical domestic inspection in ${city} takes 20–40 minutes. We confirm which rooflines are included before we start, and we never pressure you to book work on the day.`,
    },
    {
      question: `What happens after the gutter inspection in ${city}?`,
      answer: `We explain what we found in plain English, send photos of any key issues where useful, and give a no-obligation quote for cleaning or repairs if anything needs attention. If your gutters are fine, we tell you that too — there is no minimum spend and no follow-up calls.`,
    },
  ];

  if (sourceFaqs.length > 0) {
    return [...inspectionSpecific, ...sourceFaqs.map(transformFaqToInspection).slice(0, 4)];
  }
  return inspectionSpecific;
}

export function transformCityGutterToInspection(data: CityGutterLandingData): CityGutterLandingData {
  return {
    ...data,
    titleTag: transformTextToInspection(data.titleTag),
    metaDescription: transformTextToInspection(data.metaDescription),
    h1: transformTextToInspection(data.h1),
    heroIntro: transformTextToInspection(data.heroIntro),
    whyTitle: transformTextToInspection(data.whyTitle),
    whyBody: data.whyBody.map((p) =>
      transformTextToInspection(p).replace(/blocked gutters overflow/gi, 'blocked gutters overflow and hidden joint damage goes unnoticed'),
    ),
    localSpotlight: data.localSpotlight
      ? transformTextToInspection(data.localSpotlight)
      : undefined,
    guarantees: [
      'Free of charge — no obligation to book any work',
      'Full check of gutters, downpipes, joints, brackets and fascia line',
      'Photo documentation of any problem areas where access allows',
      'Honest advice — we tell you if no work is needed',
      'No-pressure findings explained in plain English on site',
      'Fully insured — comprehensive public liability cover on every visit',
    ],
    propertyTypesTitle: transformTextToInspection(data.propertyTypesTitle),
    propertyTypes: data.propertyTypes.map((row) => ({
      label: transformTextToInspection(row.label),
      detail: transformTextToInspection(row.detail).replace(/inspected/gi, 'assessed'),
    })),
    areasTitle: data.areasTitle,
    areasInline: data.areasInline,
    faqsTitle: `FAQs — Gutter Inspection ${data.city}`,
    faqs: inspectionFaqsForArea(data.city, data.faqs),
    internalLinks: (data.internalLinks ?? []).map((l) => ({
      label: l.label.replace(/Gutter Cleaning/g, 'Gutter Inspection').replace(/gutter cleaning/g, 'gutter inspection'),
      href: l.href,
    })),
    ctaHeading: `Book Your Free Gutter Inspection in ${data.city} — No Obligation`,
    priceTo: 0,
  };
}

export function transformSuburbGutterToInspection(data: SuburbPageData, slug: string): SuburbPageData {
  const cityData = getAreaData(slug);

  return {
    ...data,
    heroBadge: data.heroBadge.replace(/gutter/gi, 'gutter inspection'),
    heroTitleLine1: transformTextToInspection(data.heroTitleLine1),
    heroTitleLine2: transformTextToInspection(data.heroTitleLine2),
    whyTitle: transformTextToInspection(data.whyTitle),
    whyParagraphs: data.whyParagraphs.map(transformTextToInspection),
    guarantees: [
      'Free of charge — no obligation to book any work',
      'Full check of gutters, downpipes, joints, brackets and fascia line',
      'Photo documentation of any problem areas where access allows',
      'Honest advice — we tell you if no work is needed',
      'No-pressure findings explained in plain English on site',
      'Fully insured — comprehensive public liability cover on every visit',
    ],
    propertyTypesTitle: transformTextToInspection(data.propertyTypesTitle),
    propertyTypes: data.propertyTypes.map((row) => ({
      label: transformTextToInspection(row.label),
      detail: transformTextToInspection(row.detail).replace(/inspected/gi, 'assessed'),
    })),
    areasCoveredTitle: data.areasCoveredTitle,
    areasCoveredText: data.areasCoveredText,
    areaLinks: [
      { href: inspectionAreaPath(slug), label: `Gutter Inspection ${data.city}` },
      { href: areaPath(slug), label: `Gutter cleaning ${data.city}` },
      { href: repairAreaPath(slug), label: `Gutter repairs ${data.city}` },
      { href: '/services/gutter-inspection/', label: 'Free gutter inspection service' },
      ...data.areaLinks.slice(0, 4).map((l) => ({
        href: l.href,
        label: l.label.replace(/Gutter Cleaning/g, 'Gutter Inspection').replace(/gutter cleaning/g, 'gutter inspection'),
      })),
    ],
    faqs: inspectionFaqsForArea(data.city, data.faqs),
    postcodesTitle: transformTextToInspection(data.postcodesTitle),
    bookingTitle: transformTextToInspection(data.bookingTitle),
    blogLocality: data.blogLocality,
  };
}

/** City gutter landings transformed to inspection copy (no dedicated inspection landings yet). */
export function getInspectionCityLanding(slug: string): CityGutterLandingData | null {
  const gutterCity = CITY_GUTTER_LANDINGS[slug];
  if (!gutterCity) return null;
  return transformCityGutterToInspection(gutterCity);
}

export function getInspectionGeneratedLanding(slug: string): CityGutterLandingData | null {
  const data = getAreaData(slug);
  if (!data) return null;
  return buildInspectionLandingFromCity(data);
}

export function getInspectionSuburbLanding(slug: string): SuburbPageData | null {
  const suburb = getSuburbPageForSlug(slug);
  if (!suburb) return null;
  return transformSuburbGutterToInspection(suburb, slug);
}

function inspectionGeneratedPropertyTypes(
  name: string,
  nearby: string[],
): CityPropertyRow[] {
  const n = nearby.slice(0, 2).join(' and ') || 'surrounding areas';
  return [
    {
      label: `Victorian & Edwardian terraces (${name})`,
      detail: `Older cast iron and uPVC systems — joints, seals and brackets checked for the hidden wear that leads to leaks.`,
    },
    {
      label: '1930s–60s semis',
      detail: `The most common ${name} housing stock. We assess fall, bracket spacing and fascia condition across the full run.`,
    },
    {
      label: 'Post-war estates & modern homes',
      detail: `Mature street trees and moss input create build-up you cannot see from ground level — we check channel and downpipe condition throughout.`,
    },
    {
      label: `Areas near ${n}`,
      detail: `We run free inspection routes across surrounding areas weekly, so booking is usually quick and local.`,
    },
  ];
}

function inspectionGeneratedWhyBody(name: string): string[] {
  return [
    `Gutter problems in ${name} rarely announce themselves. A blocked channel, a failing joint or a loose bracket can sit unnoticed for months before overflow stains your walls or damp finds its way into your home. A free inspection in ${name} catches these findings while they are still a simple clean or small repair.`,
    `Our ${name} inspection checks the gutters, downpipes, joints, brackets and fascia line from safe access points, documents any issues with photos, and leaves you with a clear, no-pressure recommendation — whether that is a clean, a repair, or no work at all.`,
  ];
}

function inspectionGeneratedInternalLinks(slug: string, name: string, nearbyAreas: string[]): { label: string; href: string }[] {
  const links: { label: string; href: string }[] = [];
  for (const area of nearbyAreas.slice(0, 4)) {
    const nearbySlug = area.toLowerCase().replace(/\s+/g, '-');
    if (nearbySlug !== slug) {
      links.push({ label: `Gutter Inspection ${area}`, href: inspectionAreaPath(nearbySlug) });
    }
  }
  links.push({ label: `Gutter cleaning ${name}`, href: areaPath(slug) });
  links.push({ label: `Gutter repairs ${name}`, href: repairAreaPath(slug) });
  links.push({ label: 'Free gutter inspection service', href: '/services/gutter-inspection/' });
  return links.slice(0, 6);
}

export function buildInspectionLandingFromCity(input: CityData & { streets?: string[]; hubSlug?: string }): CityGutterLandingData | null {
  const { slug, name, postcodes, nearbyAreas, geo, priceTo } = input;
  const pcLabel = postcodes.length ? postcodes.join(', ') : 'local postcodes';

  const areasInline = [
    name,
    ...nearbyAreas.slice(0, 8),
  ].join(' | ');

  return {
    slug,
    city: name,
    titleTag: `Gutter Inspection ${name} | Free Condition Report | WOW Gutters Ltd`,
    metaDescription: `Free gutter inspection in ${name} (${pcLabel}). We check gutters, downpipes, joints, brackets and fascia — photo report, honest advice, no obligation. Call WOW Gutters Ltd: 07421 433910.`,
    h1: `Gutter Inspection ${name} — Free, No-Obligation Condition Report`,
    heroIntro: `WOW Gutters Ltd provides a free gutter inspection in ${name} (${pcLabel}). We check the gutters, downpipes, joints, brackets and fascia line from safe access points, photograph any problem areas, and give you an honest, no-pressure recommendation — whether that is a clean, a repair, or simply reassurance that all is well.`,
    whyTitle: `Why Book a Free Gutter Inspection in ${name}`,
    whyBody: inspectionGeneratedWhyBody(name),
    localSpotlight: undefined,
    guarantees: [
      'Free of charge — no obligation to book any work',
      'Full check of gutters, downpipes, joints, brackets and fascia line',
      'Photo documentation of any problem areas where access allows',
      'Honest advice — we tell you if no work is needed',
      'No-pressure findings explained in plain English on site',
      'Fully insured — comprehensive public liability cover on every visit',
    ],
    propertyTypesTitle: `Gutter Inspection for All Property Types in ${name}`,
    propertyTypes: inspectionGeneratedPropertyTypes(name, nearbyAreas),
    areasTitle: `Areas We Cover Around ${name}`,
    areasInline,
    faqsTitle: `FAQs — Gutter Inspection ${name}`,
    faqs: inspectionFaqsForArea(name, []),
    geo,
    internalLinks: inspectionGeneratedInternalLinks(slug, name, nearbyAreas),
    nearbyAreas,
    postcodes,
    ctaHeading: `Book Your Free Gutter Inspection in ${name} — No Obligation`,
    priceTo: 0,
  };
}

export function buildBirminghamInspectionLanding(): CityGutterLandingData {
  const city = getAreaData('birmingham');
  const postcodes = city?.postcodes ?? ['B1', 'B13', 'B14', 'B15', 'B16', 'B17', 'B23', 'B27', 'B28', 'B29', 'B31', 'B43', 'B73', 'B74', 'B76'];
  const nearbyAreas = city?.nearbyAreas ?? ['Solihull', 'Sutton Coldfield', 'Wolverhampton', 'Walsall', 'Dudley', 'West Bromwich'];

  return {
    slug: 'birmingham',
    city: 'Birmingham',
    titleTag: 'Gutter Inspection Birmingham | Free Condition Report | WOW Gutters Ltd',
    metaDescription:
      'Free gutter inspection across Birmingham. We check gutters, downpipes, joints, brackets and fascia — photo report, honest advice, no obligation. Call WOW Gutters Ltd: 07421 433910.',
    h1: 'Gutter Inspection Birmingham — Free, No-Obligation Condition Report Across the West Midlands',
    heroIntro:
      'WOW Gutters Ltd provides a free gutter inspection across Birmingham and all surrounding West Midlands postcodes. From Victorian terraces in Moseley to semis in Sutton Coldfield and detached homes across B15–B76, we check the gutters, downpipes, joints, brackets and fascia line from safe access points, photograph any problem areas, and give you an honest, no-pressure recommendation.',
    whyTitle: 'Why Birmingham Homes Need a Professional Gutter Inspection',
    whyBody: [
      'A gutter can look fine from ground level while a blocked downpipe or failing joint quietly stores water against your fascia. Birmingham\'s damp West Midlands climate and tree-lined suburbs such as Moseley, Harborne, Sutton Coldfield and Kings Heath mean debris and moss build-up are common — and the damage they cause is usually invisible until it becomes expensive.',
      'A free inspection catches these findings early, documents them with photos, and tells you honestly whether you need a clean, a repair, or nothing at all. No obligation, no pressure — just clarity.',
    ],
    guarantees: [
      'Free of charge — no obligation to book any work',
      'Full check of gutters, downpipes, joints, brackets and fascia line',
      'Photo documentation of any problem areas where access allows',
      'Honest advice — we tell you if no work is needed',
      'No-pressure findings explained in plain English on site',
      'Fully insured — comprehensive public liability cover on every visit',
    ],
    propertyTypesTitle: 'Gutter Inspection for All Birmingham Property Types',
    propertyTypes: [
      { label: 'Victorian & Edwardian terraces', detail: 'Period properties across inner Birmingham — cast iron joints, brackets and fall assessed for hidden wear.' },
      { label: '1930s–60s semis', detail: 'The most common Birmingham housing stock. We check bracket spacing, fascia condition and full-run fall.' },
      { label: 'Large detached homes', detail: 'Sutton Coldfield, Edgbaston and Solihull detached properties — complex runs and multiple outlets assessed in a single visit.' },
      { label: 'Flats & managed blocks', detail: 'We coordinate with managing agents, provide photographic documentation, and can schedule planned inspection programmes.' },
    ],
    areasTitle: 'Areas We Cover Around Birmingham',
    areasInline:
      'Moseley, Harborne, Edgbaston, Kings Heath, Sutton Coldfield, Erdington, Selly Oak, Northfield, Acocks Green, Hall Green, Solihull, West Bromwich, Walsall, Wolverhampton, Dudley',
    faqsTitle: 'FAQs — Gutter Inspection Birmingham',
    localSpotlight: undefined,
    faqs: inspectionFaqsForArea('Birmingham', []),
    geo: city?.geo ?? { latitude: 52.4862, longitude: -1.8904 },
    internalLinks: [
      { label: 'Gutter Inspection Solihull', href: inspectionAreaPath('solihull') },
      { label: 'Gutter cleaning Birmingham', href: areaPath('birmingham') },
      { label: 'Gutter repairs Birmingham', href: repairAreaPath('birmingham') },
      { label: 'Free gutter inspection service', href: '/services/gutter-inspection/' },
    ],
    nearbyAreas,
    postcodes,
    ctaHeading: 'Book Your Free Birmingham Gutter Inspection — No Obligation',
    priceTo: 0,
  };
}
