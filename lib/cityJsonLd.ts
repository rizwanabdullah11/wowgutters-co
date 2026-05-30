import type { CityGutterLandingData } from '@/constants/cityGutterLandingData';

export function getCityGutterPageJsonLd(data: CityGutterLandingData) {
  const pageUrl = `https://wowgutters.co.uk/gutter-cleaning-${data.slug}/`;

  const nearbyAreas = data.nearbyAreas ?? [];
  const postcodes = data.postcodes ?? [];

  const defaultFaqs = [
    {
      question: `How much does gutter cleaning cost in ${data.city}?`,
      answer: `WOW Gutters provides fixed quotes for all properties in ${data.city}. Get yours online at wowgutters.co.uk or call 07421 433910. No hidden fees.`,
    },
    {
      question: `How often should I have my gutters cleaned in ${data.city}?`,
      answer: 'Once or twice a year. Late autumn (October–November) is most critical. Spring clean in April or May for properties with significant tree coverage.',
    },
    {
      question: 'Do you use ladders when cleaning gutters?',
      answer: 'No. Ground-level vacuum system only. No ladders against your property. Reaches up to 4 storeys.',
    },
    {
      question: 'Do you clear downpipes as well as gutters?',
      answer: 'Yes. Downpipe clearing included as standard. We flush and test every downpipe. Blocked downpipes cleared at no extra charge.',
    },
    {
      question: `What areas of ${data.city} do you cover?`,
      answer: `All ${data.city}${postcodes.length > 0 ? ` postcodes including ${postcodes.slice(0, 5).join(', ')}` : ''}${nearbyAreas.length > 0 ? ` and surrounding areas: ${nearbyAreas.slice(0, 5).join(', ')}` : ''}.`,
    },
    {
      question: 'Are you insured?',
      answer: 'Yes. Fully insured with comprehensive public liability insurance on every job.',
    },
  ];

  const allFaqs = data.faqs.length > 0 ? data.faqs : defaultFaqs;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'HomeAndConstructionBusiness',
        '@id': `${pageUrl}#business`,
        name: `WOW Gutters Ltd — ${data.city}`,
        description: data.metaDescription,
        url: pageUrl,
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
          addressLocality: data.city,
          addressRegion: 'West Midlands',
          addressCountry: 'GB',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: data.geo.latitude,
          longitude: data.geo.longitude,
        },
        areaServed: [
          { '@type': 'City', name: data.city },
          ...nearbyAreas.map((area) => ({ '@type': 'Place', name: area })),
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
      },
      {
        '@type': 'Service',
        '@id': `${pageUrl}#service`,
        name: `Gutter Cleaning ${data.city}`,
        serviceType: 'Gutter cleaning',
        description: data.metaDescription,
        provider: { '@id': `${pageUrl}#business` },
        areaServed: { '@type': 'City', name: data.city },
        url: pageUrl,
        offers: {
          '@type': 'Offer',
          priceCurrency: 'GBP',
          availability: 'https://schema.org/InStock',
        },
      },
      {
        '@type': 'FAQPage',
        '@id': `${pageUrl}#faq`,
        mainEntity: allFaqs.map((faq) => ({
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
        '@id': `${pageUrl}#breadcrumb`,
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
            name: `Gutter Cleaning ${data.city}`,
            item: pageUrl,
          },
        ],
      },
    ],
  };
}

