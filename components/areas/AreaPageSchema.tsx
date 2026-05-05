import SchemaMarkup from '@/components/seo/SchemaMarkup';

function toTitleCase(slug: string) {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export default function AreaPageSchema({ slug }: { slug: string }) {
  const areaName = toTitleCase(slug);
  const pageUrl = `https://wowgutters.co.uk/gutter-cleaning-${slug}/`;

  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'HomeAndConstructionBusiness',
        '@id': 'https://wowgutters.co.uk/#business',
        name: 'WOW Gutters Ltd',
        url: pageUrl,
        telephone: '+447421433910',
        email: 'support@wowgutters.co.uk',
        image: 'https://wowgutters.co.uk/assets/wow-gutter-logo2.png',
        description: `Professional gutter cleaning in ${areaName}`,
        address: {
          '@type': 'PostalAddress',
          addressLocality: areaName,
          addressRegion: 'West Midlands',
          addressCountry: 'GB',
        },
        areaServed: { '@type': 'City', name: areaName },
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
        priceRange: '££',
      },
      {
        '@type': 'Service',
        '@id': `${pageUrl}#gutter-cleaning-service`,
        serviceType: 'Gutter Cleaning',
        name: `Gutter Cleaning ${areaName}`,
        provider: {
          '@type': 'HomeAndConstructionBusiness',
          name: 'WOW Gutters Ltd',
          telephone: '+447421433910',
        },
        areaServed: { '@type': 'City', name: areaName },
        offers: {
          '@type': 'Offer',
          priceRange: '£50-£150',
          priceCurrency: 'GBP',
        },
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
            name: `Gutter Cleaning ${areaName}`,
            item: pageUrl,
          },
        ],
      },
    ],
  };

  return <SchemaMarkup id={`${slug}-area-schema`} data={data} />;
}

