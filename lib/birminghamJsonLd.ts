import { BIRMINGHAM_AREA_FAQS } from '@/constants/birminghamFaqs';

const PAGE_URL = 'https://wowgutters.co.uk/gutter-cleaning-birmingham/';

/** LocalBusiness + Service + FAQPage + Breadcrumbs for Birmingham gutter landing (server-rendered). */
export function getBirminghamGutterPageJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': 'https://wowgutters.co.uk/#business',
        name: 'WOW Gutters Ltd',
        description:
          "Birmingham's trusted gutter cleaning specialist. Ground-level vacuum system, no ladders, up to 4-storey reach, before & after photos, 1-year service guarantee.",
        url: PAGE_URL,
        telephone: '+447421433910',
        email: 'support@wowgutters.co.uk',
        priceRange: '££',
        image: 'https://wowgutters.co.uk/assets/wow-gutter-logo2.png',
        logo: {
          '@type': 'ImageObject',
          url: 'https://wowgutters.co.uk/assets/wow-gutter-logo2.png',
        },
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Birmingham',
          addressRegion: 'West Midlands',
          addressCountry: 'GB',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 52.4862,
          longitude: -1.8904,
        },
        areaServed: [
          { '@type': 'City', name: 'Birmingham' },
          { '@type': 'AdministrativeArea', name: 'West Midlands' },
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
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '2696',
          bestRating: '5',
          worstRating: '1',
        },
      },
      {
        '@type': 'Service',
        '@id': `${PAGE_URL}#gutter-cleaning-service`,
        name: 'Gutter Cleaning Birmingham',
        serviceType: 'Gutter cleaning',
        description:
          'Professional ground-level vacuum gutter cleaning for homes and businesses in Birmingham. No ladders, up to 4 storeys, before & after photos, downpipes cleared, 1-year guarantee.',
        provider: { '@id': 'https://wowgutters.co.uk/#business' },
        areaServed: { '@type': 'City', name: 'Birmingham' },
        url: PAGE_URL,
      },
      {
        '@type': 'FAQPage',
        mainEntity: BIRMINGHAM_AREA_FAQS.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
      {
        '@type': 'BreadcrumbList',
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
            name: 'Gutter Cleaning Birmingham',
            item: PAGE_URL,
          },
        ],
      },
    ],
  };
}
