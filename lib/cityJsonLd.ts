import type { CityGutterLandingData } from '@/constants/cityGutterLandingData';

export function getCityGutterPageJsonLd(data: CityGutterLandingData) {
  const pageUrl = `https://wowgutters.co.uk/gutter-cleaning-${data.slug}/`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': 'https://wowgutters.co.uk/#business',
        name: 'WOW Gutters Ltd',
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
        '@id': `${pageUrl}#gutter-cleaning-service`,
        name: `Gutter Cleaning ${data.city}`,
        serviceType: 'Gutter cleaning',
        description: data.metaDescription,
        provider: { '@id': 'https://wowgutters.co.uk/#business' },
        areaServed: { '@type': 'City', name: data.city },
        url: pageUrl,
      },
      {
        '@type': 'FAQPage',
        mainEntity: data.faqs.map((faq) => ({
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
            name: `Gutter Cleaning ${data.city}`,
            item: pageUrl,
          },
        ],
      },
    ],
  };
}

