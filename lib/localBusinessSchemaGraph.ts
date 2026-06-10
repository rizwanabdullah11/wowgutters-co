/**
 * Builds LocalBusiness @graph JSON-LD (shared by component + static export inject).
 */

import { SCHEMA_DATE_MODIFIED, SCHEMA_DATE_PUBLISHED } from '@/lib/schemaDates';
import { buildAreaWebPageNode } from '@/lib/pageSchemaGraphs';
import { buildReviewSchemaFields } from '@/lib/reviewSchema';

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
};

const LOGO_URL = 'https://wowgutters.co.uk/favicon.png';

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
  const allFaqs =
    input.faqs && input.faqs.length > 0
      ? input.faqs
      : buildDefaultFaqs(input.city, input.priceFrom, input.priceTo, postcodes, input.nearbyAreas);

  const { city, url, priceFrom, priceTo, nearbyAreas, geo } = input;
  const businessId = `${url}#business`;
  const { aggregateRating, review } = buildReviewSchemaFields(businessId);

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'HomeAndConstructionBusiness',
        '@id': businessId,
        name: `WOW Gutters Ltd — ${city}`,
        description: `Professional gutter cleaning in ${city}. Ground-level vacuum, before & after photos, 1-year guarantee, fully insured. Call 07421 433910.`,
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
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '07:00',
            closes: '20:00',
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: 'Saturday',
            opens: '09:00',
            closes: '18:00',
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: 'Sunday',
            opens: '10:00',
            closes: '18:00',
          },
        ],
        aggregateRating,
        review,
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+447421433910',
          contactType: 'Customer Service',
          contactOption: 'TollFree',
          areaServed: 'GB',
          availableLanguage: 'English',
          hoursAvailable: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '07:00',
            closes: '20:00',
          },
        },
        potentialAction: {
          '@type': 'CommunicateAction',
          target: 'tel:+447421433910',
        },
        dateModified: SCHEMA_DATE_MODIFIED,
      },
      buildAreaWebPageNode(url, `Gutter Cleaning ${city} | WOW Gutters Ltd`),
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name: `Gutter Cleaning ${city}`,
        serviceType: 'Gutter cleaning',
        description: `Professional gutter cleaning in ${city}. Ground-level vacuum, no ladders, up to 4 storeys, before & after photos, downpipes cleared, 1-year guarantee.`,
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
            name: 'Gutter Cleaning',
            item: 'https://wowgutters.co.uk/help/unblock/',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: `Gutter Cleaning ${city}`,
            item: url,
          },
        ],
      },
    ],
  };
}
