import type { CityGutterLandingData, CityPropertyRow, CityGutterLandingFaq } from '@/constants/cityGutterLandingData';
import type { SuburbPageData } from '@/components/areas/SuburbGutterCleaningPage';
import { getAreaData } from '@/lib/getAreaData';
import { areaPath, roofAreaPath, repairAreaPath, roofInspectionAreaPath } from '@/lib/areaSlugs';
import { getRoofCityLanding, getRoofGeneratedLanding, getRoofSuburbLanding, buildBirminghamRoofLanding } from '@/lib/roofAreaContent';

/** Convert roof-cleaning copy to roof-inspection copy for area landing pages. */
export function transformTextToRoofInspection(text: string): string {
  return text
    .replace(/Soft-wash roof cleaning\b/g, 'Safe roof inspection')
    .replace(/soft-wash roof cleaning\b/gi, 'safe roof inspection')
    .replace(/Soft-wash moss removal\b/g, 'Safe inspection')
    .replace(/soft-wash moss removal\b/gi, 'safe inspection')
    .replace(/\bRoof Cleaning\b/g, 'Roof Inspection')
    .replace(/\broof cleaning\b/g, 'roof inspection')
    .replace(/Roof cleaning\b/g, 'Roof inspection')
    .replace(/Moss Removal & Biocide Treatment\b/g, 'Free Condition Report')
    .replace(/Moss Removal & Biocide\b/g, 'Free Condition Report')
    .replace(/Moss & Algae Removal\b/g, 'Condition Report')
    .replace(/moss, algae and lichen removal\b/gi, 'moss, algae and lichen assessment')
    .replace(/moss and algae removal\b/gi, 'moss and algae assessment')
    .replace(/moss and algae\b/gi, 'moss and algae')
    .replace(/moss removal\b/gi, 'moss assessment')
    .replace(/biocide application\b/gi, 'moss assessment')
    .replace(/biocide treatment\b/gi, 'condition report')
    .replace(/biocide applied after cleaning to slow regrowth\b/gi, 'condition report with honest notes on regrowth risk')
    .replace(/biocide applied after every clean\b/gi, 'honest notes on moss regrowth risk')
    .replace(/biocide\b/gi, 'assessment')
    .replace(/treatment\b/gi, 'assessment')
    .replace(/soft-wash methods\b/gi, 'safe inspection methods')
    .replace(/soft-wash\b/gi, 'safe inspection')
    .replace(/Professional cleaning\b/gi, 'Professional Inspection')
    .replace(/professional cleaning\b/gi, 'professional inspection')
    .replace(/cleaned\b/gi, 'inspected')
    .replace(/clearing\b/gi, 'inspecting')
    .replace(/cleared\b/gi, 'inspected')
    .replace(/clears\b/gi, 'inspects')
    .replace(/cleaning\b/gi, 'inspection')
    .replace(/clean\b/gi, 'inspection')
    .replace(/clears\b/gi, 'inspects')
    .replace(/before & after photos on every job\b/gi, 'photo documentation of any issues found')
    .replace(/before & after photos\b/gi, 'photo report')
    .replace(/before and after photos on every roof cleaning job\b/gi, 'photo report of any issues found')
    .replace(/moss-covered\b/gi, 'shaded')
    .replace(/from our the /gi, 'from our ')
    .replace(/ from £\d+(\.\d+)?/gi, ' free of charge')
    .replace(/£\d+[–-]£\d+/g, '')
    .replace(/from £\d+(\.\d+)?/gi, 'free of charge')
    .replace(/£[\d,]+/g, '');
}

function transformFaqToRoofInspection(faq: CityGutterLandingFaq): CityGutterLandingFaq {
  return {
    question: transformTextToRoofInspection(faq.question),
    answer: transformTextToRoofInspection(faq.answer),
  };
}

function roofInspectionFaqsForArea(
  city: string,
  sourceFaqs: CityGutterLandingFaq[],
): CityGutterLandingFaq[] {
  const inspectionSpecific: CityGutterLandingFaq[] = [
    {
      question: `Is the roof inspection in ${city} really free?`,
      answer: `Yes. Our roof inspection in ${city} is completely free of charge with no obligation to book any work. We assess tiles, ridges, flashing, valleys, moss coverage and ventilation, then give you honest advice on whether cleaning, repairs or monitoring is the right next step.`,
    },
    {
      question: `What does a roof inspection in ${city} cover?`,
      answer: `We check the roof covering from ground level and, where safe, from a ladder: tile condition, ridge stability, flashing around chimneys and valleys, moss and algae coverage, fascia and soffit condition at the eaves, and ventilation. You get a clear explanation of findings and photos of any issues where access allows.`,
    },
    {
      question: `How long does a roof inspection in ${city} take?`,
      answer: `A typical domestic inspection in ${city} takes 20\u201340 minutes. We confirm which rooflines are included before we start, and we never pressure you to book work on the day.`,
    },
    {
      question: `What happens after the roof inspection in ${city}?`,
      answer: `We explain what we found in plain English, send photos of any key issues where useful, and give a no-obligation quote for roof cleaning or repairs if anything needs attention. If your roof is fine, we tell you that too — there is no minimum spend and no follow-up calls.`,
    },
  ];

  if (sourceFaqs.length > 0) {
    return [...inspectionSpecific, ...sourceFaqs.map(transformFaqToRoofInspection).slice(0, 4)];
  }
  return inspectionSpecific;
}

function roofInspectionGeneratedGuarantees(): string[] {
  return [
    'Free of charge — no obligation to book any work',
    'Full check of tiles, ridges, flashing, valleys, moss coverage and ventilation',
    'Photo documentation of any issues where access allows',
    'Honest advice — we tell you if no work is needed',
    'No-pressure findings explained in plain English on site',
    'Fully insured — comprehensive public liability cover on every visit',
  ];
}

function roofInspectionGeneratedPropertyTypes(name: string, nearby: string[]): CityPropertyRow[] {
  const n = nearby.slice(0, 2).join(' and ') || 'surrounding areas';
  return [
    {
      label: `Victorian & Edwardian terraces (${name})`,
      detail: `Clay and concrete tile roofs where ridge mortar, flashing and valley condition are checked for the hidden wear that leads to leaks.`,
    },
    {
      label: '1930s\u201360s semis',
      detail: `The most common ${name} housing stock. We assess tile condition, moss coverage and ventilation across the full roof.`,
    },
    {
      label: 'Post-war estates & modern homes',
      detail: `Mature street trees and shaded slopes hide moss and algae you cannot see from ground level — we assess coverage and its effect on tiles.`,
    },
    {
      label: `Areas near ${n}`,
      detail: `We run free roof inspection routes across surrounding areas weekly, so booking is usually quick and local.`,
    },
  ];
}

function roofInspectionGeneratedWhyBody(name: string): string[] {
  return [
    `Roof problems in ${name} rarely announce themselves. A cracked tile, lifted flashing or heavy moss coverage can sit unnoticed for months before water finds its way into the structure below. A free roof inspection in ${name} catches these findings while they are still a simple clean or small repair.`,
    `Our ${name} inspection assesses the tiles, ridges, flashing, valleys, moss coverage and ventilation from ground level and, where safe, from a ladder, documents any issues with photos, and leaves you with a clear, no-pressure recommendation — whether that is a clean, a repair, or no work at all.`,
  ];
}

function roofInspectionGeneratedInternalLinks(
  slug: string,
  name: string,
  nearbyAreas: string[],
): { label: string; href: string }[] {
  const links: { label: string; href: string }[] = [];
  for (const area of nearbyAreas.slice(0, 4)) {
    const nearbySlug = area.toLowerCase().replace(/\s+/g, '-');
    if (nearbySlug !== slug) {
      links.push({ label: `Roof Inspection ${area}`, href: roofInspectionAreaPath(nearbySlug) });
    }
  }
  links.push({ label: `Roof cleaning ${name}`, href: roofAreaPath(slug) });
  links.push({ label: `Gutter cleaning ${name}`, href: areaPath(slug) });
  links.push({ label: `Gutter repairs ${name}`, href: repairAreaPath(slug) });
  links.push({ label: 'Free roof inspection service', href: '/services/roof-inspection/' });
  return links.slice(0, 6);
}

export function transformCityRoofToInspection(data: CityGutterLandingData): CityGutterLandingData {
  return {
    ...data,
    titleTag: transformTextToRoofInspection(data.titleTag),
    metaDescription: transformTextToRoofInspection(data.metaDescription),
    h1: transformTextToRoofInspection(data.h1),
    heroIntro: transformTextToRoofInspection(data.heroIntro),
    whyTitle: transformTextToRoofInspection(data.whyTitle),
    whyBody: data.whyBody.map((p) => transformTextToRoofInspection(p)),
    localSpotlight: data.localSpotlight
      ? transformTextToRoofInspection(data.localSpotlight)
      : undefined,
    guarantees: roofInspectionGeneratedGuarantees(),
    propertyTypesTitle: transformTextToRoofInspection(data.propertyTypesTitle),
    propertyTypes: data.propertyTypes.map((row) => ({
      label: transformTextToRoofInspection(row.label),
      detail: transformTextToRoofInspection(row.detail).replace(/inspected/gi, 'assessed'),
    })),
    areasTitle: data.areasTitle,
    areasInline: data.areasInline,
    faqsTitle: `FAQs — Roof Inspection ${data.city}`,
    faqs: roofInspectionFaqsForArea(data.city, data.faqs),
    internalLinks: (data.internalLinks ?? []).map((l) => ({
      label: l.label.replace(/Roof Cleaning/g, 'Roof Inspection').replace(/roof cleaning/g, 'roof inspection'),
      href: l.href,
    })),
    ctaHeading: `Book Your Free Roof Inspection in ${data.city} — No Obligation`,
    priceTo: 0,
  };
}

export function transformSuburbRoofToInspection(data: SuburbPageData, slug: string): SuburbPageData {
  return {
    ...data,
    heroBadge: data.heroBadge.replace(/roof moss removal specialists/i, 'roof inspection specialists'),
    heroTitleLine1: transformTextToRoofInspection(data.heroTitleLine1),
    heroTitleLine2: transformTextToRoofInspection(data.heroTitleLine2),
    whyTitle: transformTextToRoofInspection(data.whyTitle),
    whyParagraphs: data.whyParagraphs.map(transformTextToRoofInspection),
    guarantees: roofInspectionGeneratedGuarantees(),
    propertyTypesTitle: transformTextToRoofInspection(data.propertyTypesTitle),
    propertyTypes: data.propertyTypes.map((row) => ({
      label: transformTextToRoofInspection(row.label),
      detail: transformTextToRoofInspection(row.detail).replace(/inspected/gi, 'assessed'),
    })),
    areasCoveredTitle: data.areasCoveredTitle,
    areasCoveredText: data.areasCoveredText,
    areaLinks: [
      { href: roofInspectionAreaPath(slug), label: `Roof Inspection ${data.city}` },
      { href: roofAreaPath(slug), label: `Roof cleaning ${data.city}` },
      { href: areaPath(slug), label: `Gutter cleaning ${data.city}` },
      { href: '/services/roof-inspection/', label: 'Free roof inspection service' },
      ...data.areaLinks.slice(0, 4).map((l) => ({
        href: l.href,
        label: l.label.replace(/Roof Cleaning/g, 'Roof Inspection').replace(/roof cleaning/g, 'roof inspection'),
      })),
    ],
    faqs: roofInspectionFaqsForArea(data.city, data.faqs),
    postcodesTitle: transformTextToRoofInspection(data.postcodesTitle),
    bookingTitle: transformTextToRoofInspection(data.bookingTitle),
    blogLocality: data.blogLocality,
  };
}

/** Roof-cleaning city landings transformed to roof-inspection copy. */
export function getRoofInspectionCityLanding(slug: string): CityGutterLandingData | null {
  const roofCity = getRoofCityLanding(slug);
  if (!roofCity) return null;
  return transformCityRoofToInspection(roofCity);
}

export function getRoofInspectionGeneratedLanding(slug: string): CityGutterLandingData | null {
  const roofGenerated = getRoofGeneratedLanding(slug);
  if (!roofGenerated) return null;
  return transformCityRoofToInspection(roofGenerated);
}

export function getRoofInspectionSuburbLanding(slug: string): SuburbPageData | null {
  const suburb = getRoofSuburbLanding(slug);
  if (!suburb) return null;
  return transformSuburbRoofToInspection(suburb, slug);
}

/** Fallback: build roof-inspection landing from city data when no dedicated content exists. */
export function buildRoofInspectionLandingFromCity(slug: string): CityGutterLandingData | null {
  const data = getAreaData(slug);
  if (!data) return null;

  const { name, postcodes, nearbyAreas, geo } = data;
  const pcLabel = postcodes.length ? postcodes.join(', ') : 'local postcodes';

  const areasInline = [name, ...nearbyAreas.slice(0, 8)].join(' | ');

  return {
    slug,
    city: name,
    titleTag: `Roof Inspection ${name} | Free Condition Report | WOW Gutters Ltd`,
    metaDescription: `Free roof inspection in ${name} (${pcLabel}). We check tiles, ridges, flashing, moss coverage and ventilation — photo report, honest advice, no obligation. Call WOW Gutters Ltd: 07421 433910.`,
    h1: `Roof Inspection ${name} — Free, No-Obligation Condition Report`,
    heroIntro: `WOW Gutters Ltd provides a free roof inspection in ${name} (${pcLabel}). We assess the tiles, ridges, flashing, valleys, moss coverage and ventilation from ground level and, where safe, from a ladder, photograph any issues, and give you an honest, no-pressure recommendation — whether that is a clean, a repair, or simply reassurance that all is well.`,
    whyTitle: `Why Book a Free Roof Inspection in ${name}`,
    whyBody: roofInspectionGeneratedWhyBody(name),
    localSpotlight: undefined,
    guarantees: roofInspectionGeneratedGuarantees(),
    propertyTypesTitle: `Roof Inspection for All Property Types in ${name}`,
    propertyTypes: roofInspectionGeneratedPropertyTypes(name, nearbyAreas),
    areasTitle: `Areas We Cover Around ${name}`,
    areasInline,
    faqsTitle: `FAQs — Roof Inspection ${name}`,
    faqs: roofInspectionFaqsForArea(name, []),
    geo,
    internalLinks: roofInspectionGeneratedInternalLinks(slug, name, nearbyAreas),
    nearbyAreas,
    postcodes,
    ctaHeading: `Book Your Free Roof Inspection in ${name} — No Obligation`,
    priceTo: 0,
  };
}

/** Birmingham roof-inspection landing — transforms the pre-built roof cleaning landing to inspection copy. */
export function buildBirminghamRoofInspectionLanding(): CityGutterLandingData {
  return transformCityRoofToInspection(buildBirminghamRoofLanding());
}
