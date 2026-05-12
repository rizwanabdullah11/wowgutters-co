import { BIRMINGHAM_AREA_FAQS } from '@/constants/birminghamFaqs';

const PAGE_URL = 'https://wowgutters.co.uk/gutter-cleaning-birmingham/';

/** LocalBusiness + Service + FAQPage + Breadcrumbs for Birmingham gutter landing (server-rendered). */
export function getBirminghamGutterPageJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      // BLOCK 1: LocalBusiness
      {
        '@type': 'LocalBusiness',
        name: 'WOW Gutters Ltd',
        image: 'https://wowgutters.co.uk/og/default.jpg',
        url: 'https://wowgutters.co.uk/gutter-cleaning-birmingham/',
        telephone: '+447421433910',
        email: 'support@wowgutters.co.uk',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '38 Ryland Street',
          addressLocality: 'Birmingham',
          addressRegion: 'West Midlands',
          postalCode: 'B16 8DD',
          addressCountry: 'GB',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 52.4862,
          longitude: -1.8904,
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '2696',
          bestRating: '5',
          worstRating: '1',
        },
        priceRange: 'GBP 50-120',
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
        areaServed: [
          { '@type': 'City', name: 'Birmingham' },
          { '@type': 'Place', name: 'Moseley' },
          { '@type': 'Place', name: 'Harborne' },
          { '@type': 'Place', name: 'Edgbaston' },
          { '@type': 'Place', name: 'Sutton Coldfield' },
          { '@type': 'Place', name: 'Kings Heath' },
          { '@type': 'Place', name: 'Erdington' },
        ],
      },
      // BLOCK 2: FAQPage (7 real FAQs from live Birmingham page)
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How much does gutter cleaning cost in Birmingham?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Prices start from GBP 50 for a terraced house. Semi-detached homes GBP 60 to 80, detached GBP 80 to 120. Fixed quote before work starts.',
            },
          },
          {
            '@type': 'Question',
            name: 'How often should I have my gutters cleaned in Birmingham?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Once or twice a year. Late autumn (October to November) is most critical. Spring clean in April or May for properties with significant tree coverage.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do you use ladders when cleaning gutters?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. We use a ground-level vacuum system. No ladders against your property. Zero risk of fascia damage. Reaches 4 storeys.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do you clear downpipes as well as gutters?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Downpipe clearing is included as standard. We flush and test every downpipe. Blocked downpipes cleared at no extra charge.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do you provide before and after photos?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes — before and after photos on every job. Images sent directly to you after every clean.',
            },
          },
          {
            '@type': 'Question',
            name: 'What areas of Birmingham do you cover?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'All Birmingham postcodes B1 to B76. Including Moseley, Harborne, Edgbaston, Sutton Coldfield, Kings Heath, Erdington, Selly Oak, Northfield, Acocks Green, Hall Green, Great Barr and all surrounding areas.',
            },
          },
          {
            '@type': 'Question',
            name: 'Are you insured?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Fully insured with comprehensive public liability insurance. All technicians trained professionals. 1-year service guarantee on every job.',
            },
          },
        ],
      },
      // BLOCK 3: BreadcrumbList
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
            name: 'Gutter Cleaning',
            item: 'https://wowgutters.co.uk/services/gutter-cleaning/',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Gutter Cleaning Birmingham',
            item: 'https://wowgutters.co.uk/gutter-cleaning-birmingham/',
          },
        ],
      },
    ],
  };
}
