/**
 * Builds LocalBusiness @graph JSON-LD (shared by component + static export inject).
 */

import { SCHEMA_DATE_MODIFIED, SCHEMA_DATE_PUBLISHED } from '@/lib/schemaDates';
import { OPENING_HOURS_SCHEMA } from '@/lib/businessHours';
import { buildAreaWebPageNode } from '@/lib/pageSchemaGraphs';
import { buildReviewSchemaFields } from '@/lib/reviewSchema';
import type { AreaServiceKind } from '@/lib/areaServiceMeta';
import { AREA_SERVICE_META } from '@/lib/areaServiceMeta';
import { buildRoofSchemaFaqs } from '@/lib/roofCityFaqs';

export type SchemaFaq = { question: string; answer: string };

export type LocalBusinessSchemaInput = {
  city: string;
  url: string;
  priceFrom: number;
  priceTo: number;
  nearbyAreas: string[];
  geo: { latitude: number; longitude: number };
  faqs?: SchemaFaq[];
  postcodes?: string[];
  /** Defaults to gutter cleaning when omitted */
  serviceKind?: AreaServiceKind;
  slug?: string;
};

const LOGO_URL = 'https://wowgutters.co.uk/favicon.png';

export function buildInspectionSchemaFaqs(city: string): SchemaFaq[] {
  return [
    {
      question: `Is the gutter inspection in ${city} really free?`,
      answer: `Yes. Our gutter inspection in ${city} is completely free with no obligation to book any work. We check gutters, downpipes, joints, brackets and fascia line, then give honest advice on cleaning, repairs or monitoring.`,
    },
    {
      question: `What does a gutter inspection in ${city} cover?`,
      answer: `Gutter channel condition and alignment, downpipe flow and blockages, joints and seals, bracket spacing and sagging, fascia and soffit condition near the gutter line, and overflow staining on walls.`,
    },
    {
      question: `How long does a gutter inspection in ${city} take?`,
      answer: `A typical domestic inspection takes 20–40 minutes, with a clear explanation of findings on site and photos of any problem areas where access allows.`,
    },
    {
      question: 'Do you provide before and after photos?',
      answer: 'Yes. We photograph any problem areas found during the inspection where access allows, and you receive a no-obligation quote for cleaning or repairs if needed.',
    },
  ];
}

export function buildRoofInspectionSchemaFaqs(city: string): SchemaFaq[] {
  return [
    {
      question: `Is the roof inspection in ${city} really free?`,
      answer: `Yes. Our roof inspection in ${city} is completely free with no obligation to book any work. We assess tiles, ridges, flashing, valleys, moss coverage and ventilation, then give honest advice on cleaning, repairs or monitoring.`,
    },
    {
      question: `What does a roof inspection in ${city} cover?`,
      answer: `Tile condition, ridge stability, flashing around chimneys and valleys, moss and algae coverage, fascia and soffit condition at the eaves, and ventilation.`,
    },
    {
      question: `How long does a roof inspection in ${city} take?`,
      answer: `A typical domestic inspection takes 20–40 minutes, with a clear explanation of findings on site and photos of any issues where access allows.`,
    },
    {
      question: 'Do you provide a photo report?',
      answer: 'Yes. We photograph any issues found during the inspection where access allows, and you receive a no-obligation quote for roof cleaning or repairs if needed.',
    },
  ];
}

export function buildInstallationSchemaFaqs(city: string): SchemaFaq[] {
  return [
    {
      question: `Does WOW Gutters Ltd supply and install guttering in ${city}?`,
      answer: `Yes. We survey your property, measure every run, and supply and fit quality uPVC gutter and downpipe systems across ${city}. Every installation has the correct fall, properly spaced brackets and fully sealed joints, backed by a 10-year guarantee on workmanship.`,
    },
    {
      question: `How much does gutter installation cost in ${city}?`,
      answer: `Costs depend on the length of guttering, the number of downpipes, the system type and access. A typical replacement starts from around £300 and a full new system can reach £1,500. We provide a free, fixed quote after a site survey.`,
    },
    {
      question: `Can you replace existing gutters in ${city}?`,
      answer: `Yes. We remove old or damaged guttering and install a new uPVC system with correct fall and bracket spacing, and advise honestly on whether repair or replacement is better value.`,
    },
    {
      question: 'Do you guarantee your installation work?',
      answer: 'Yes. All installation work carries a 10-year guarantee on workmanship, covering correct fall, secure brackets and sealed joints.',
    },
  ];
}

export function buildDefaultFaqs(
  city: string,
  priceFrom: number,
  priceTo: number,
  postcodes: string[],
  nearbyAreas: string[],
): SchemaFaq[] {
  return [
    {
      question: `How much does gutter cleaning cost in ${city}?`,
      answer: `Prices start from £${priceFrom} for a terraced house, £${priceFrom + 10}–£${priceFrom + 30} for semi-detached, and £${priceFrom + 30}–£${priceTo} for detached properties. Fixed quote before work starts.`,
    },
    {
      question: `How often should I have my gutters cleaned in ${city}?`,
      answer:
        'Once or twice a year. Late autumn (October–November) is most critical. Spring clean in April or May for properties with significant tree coverage.',
    },
    {
      question: 'Do you use ladders when cleaning gutters?',
      answer:
        'No. Ground-level vacuum system only. No ladders against your property. Reaches up to 4 storeys.',
    },
    {
      question: 'Do you clear downpipes as well as gutters?',
      answer:
        'Yes. Downpipe clearing included as standard. We flush and test every downpipe. Blocked downpipes cleared at no extra charge.',
    },
    {
      question: 'Do you provide before and after photos?',
      answer: 'Yes. Before and after photos on every single job. Images sent directly to you.',
    },
    {
      question: `What areas of ${city} do you cover?`,
      answer: `All ${city} postcodes${postcodes.length > 0 ? ` including ${postcodes.slice(0, 5).join(', ')}` : ''} and surrounding areas: ${nearbyAreas.slice(0, 5).join(', ')}${nearbyAreas.length > 5 ? ' and more' : ''}.`,
    },
    {
      question: 'Are you insured?',
      answer: 'Yes. Fully insured with comprehensive public liability insurance on every job.',
    },
  ];
}

export function buildLocalBusinessSchemaGraph(input: LocalBusinessSchemaInput) {
  const postcodes = input.postcodes ?? [];
  const serviceKind = input.serviceKind ?? 'gutter';
  const meta = AREA_SERVICE_META[serviceKind];
  const slug = input.slug ?? input.city.toLowerCase().replace(/\s+/g, '-');

  const allFaqs =
    input.faqs && input.faqs.length > 0
      ? input.faqs
      : serviceKind === 'roof'
        ? buildRoofSchemaFaqs({
            city: input.city,
            slug,
            priceFrom: input.priceFrom,
            priceTo: input.priceTo,
            postcodes,
            nearbyAreas: input.nearbyAreas,
          })
        : serviceKind === 'inspection'
          ? buildInspectionSchemaFaqs(input.city)
          : serviceKind === 'roof-inspection'
            ? buildRoofInspectionSchemaFaqs(input.city)
            : serviceKind === 'installation'
              ? buildInstallationSchemaFaqs(input.city)
              : buildDefaultFaqs(input.city, input.priceFrom, input.priceTo, postcodes, input.nearbyAreas);

  const { city, url, priceFrom, priceTo, nearbyAreas, geo } = input;
  const businessId = `${url}#business`;
  const { aggregateRating, review } = buildReviewSchemaFields(businessId);
  const serviceLabel = meta.label;

  const businessDescription =
    serviceKind === 'roof'
      ? `Professional roof cleaning in ${city}. Soft-wash moss removal, biocide treatment, before & after photos, fully insured. Call 07421 433910.`
      : serviceKind === 'inspection'
        ? `Free gutter inspection in ${city}. We check gutters, downpipes, joints, brackets and fascia — photo report, honest advice, no obligation. Call 07421 433910.`
        : serviceKind === 'roof-inspection'
          ? `Free roof inspection in ${city}. We check tiles, ridges, flashing, moss coverage and ventilation — photo report, honest advice, no obligation. Call 07421 433910.`
          : serviceKind === 'upvc'
            ? `Professional exterior uPVC cleaning in ${city}. Hot purified water restores fascias, soffits, window frames & doors. Streak-free, chemical-free, fully insured. Call 07421 433910.`
            : serviceKind === 'installation'
              ? `Professional gutter installation in ${city}. New uPVC systems measured, supplied and fitted — correct fall, proper brackets, sealed joints. Free survey, 10-year guarantee. Call 07421 433910.`
              : `Professional gutter cleaning in ${city}. Ground-level vacuum, before & after photos, 1-year guarantee, fully insured. Call 07421 433910.`;

  const serviceDescription =
    serviceKind === 'roof'
      ? `Professional roof cleaning in ${city}. Soft-wash moss and algae removal, biocide treatment, before & after photos, fully insured.`
      : serviceKind === 'inspection'
        ? `Free gutter inspection in ${city}. Checks gutters, downpipes, joints, brackets and fascia line from safe access points, with photo documentation and a no-obligation recommendation.`
        : serviceKind === 'roof-inspection'
          ? `Free roof inspection in ${city}. Checks tiles, ridges, flashing, valleys, moss coverage and ventilation from ground level and, where safe, from a ladder, with photo documentation and a no-obligation recommendation.`
          : serviceKind === 'upvc'
            ? `Professional exterior uPVC cleaning in ${city}. Hot purified water removes algae, mould and carbon staining from fascias, soffits, window frames and doors — streak-free finish, no harsh chemicals, fully insured.`
            : serviceKind === 'installation'
              ? `Professional gutter installation in ${city}. New uPVC gutter and downpipe systems measured, supplied and fitted with correct fall, properly spaced brackets and sealed joints, backed by a 10-year workmanship guarantee.`
              : `Professional gutter cleaning in ${city}. Ground-level vacuum, no ladders, up to 4 storeys, before & after photos, downpipes cleared, 1-year guarantee.`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'HomeAndConstructionBusiness',
        '@id': businessId,
        name: `WOW Gutters Ltd — ${city}`,
        description: businessDescription,
        url,
        telephone: '+447421433910',
        email: 'support@wowgutters.co.uk',
        priceRange: '££',
        image: LOGO_URL,
        logo: { '@type': 'ImageObject', url: LOGO_URL },
        address: {
          '@type': 'PostalAddress',
          addressLocality: city,
          addressRegion: 'West Midlands',
          addressCountry: 'GB',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: geo.latitude,
          longitude: geo.longitude,
        },
        areaServed: [
          { '@type': 'City', name: city },
          ...nearbyAreas.map((area) => ({ '@type': 'Place', name: area })),
        ],
        openingHoursSpecification: OPENING_HOURS_SCHEMA,
        aggregateRating,
        review,
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+447421433910',
          contactType: 'Customer Service',
          contactOption: 'TollFree',
          areaServed: 'GB',
          availableLanguage: 'English',
          hoursAvailable: OPENING_HOURS_SCHEMA[0],
        },
        potentialAction: {
          '@type': 'CommunicateAction',
          target: 'tel:+447421433910',
        },
        dateModified: SCHEMA_DATE_MODIFIED,
      },
      buildAreaWebPageNode(url, `${serviceLabel} ${city} | WOW Gutters Ltd`),
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name: `${serviceLabel} ${city}`,
        serviceType: serviceLabel,
        description: serviceDescription,
        provider: { '@id': `${url}#business` },
        areaServed: { '@type': 'City', name: city },
        url,
        offers: {
          '@type': 'Offer',
          priceRange: `£${priceFrom}-£${priceTo}`,
          priceCurrency: 'GBP',
          availability: 'https://schema.org/InStock',
        },
        datePublished: SCHEMA_DATE_PUBLISHED,
        dateModified: SCHEMA_DATE_MODIFIED,
      },
      {
        '@type': 'FAQPage',
        '@id': `${url}#faq`,
        mainEntity: allFaqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${url}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://wowgutters.co.uk/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: meta.schemaHubLabel,
            item: meta.schemaHubHref,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: `${serviceLabel} ${city}`,
            item: url,
          },
        ],
      },
    ],
  };
}
