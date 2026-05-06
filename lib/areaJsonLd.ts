/**
 * Generate comprehensive JSON-LD schema for area pages
 * Includes: LocalBusiness, Service, FAQPage, and BreadcrumbList
 */

// Standard area FAQs used across all area pages
const AREA_FAQS = [
  {
    question: "How often should gutters be cleaned?",
    answer: "Gutters should be cleaned at least twice a year, typically in the spring and autumn. However, if you have overhanging trees or frequent storms, more frequent cleaning may be necessary.",
  },
  {
    question: "Why is gutter cleaning important?",
    answer: "Clogged gutters can lead to water damage, roof leaks, foundation issues, and even pest infestations. Regular cleaning helps prevent costly repairs.",
  },
  {
    question: "What are the signs that my gutters need cleaning?",
    answer: "Overflowing water, sagging gutters, visible plant growth, or water stains on your walls are all indicators your gutters are blocked.",
  },
  {
    question: "Can I clean my gutters myself?",
    answer: "While it's possible, professional gutter cleaning ensures thorough removal of debris, safe access to hard-to-reach areas, and early detection of damage.",
  },
  {
    question: "How much does gutter cleaning cost?",
    answer: "Costs vary based on the property size, gutter condition, and accessibility, but typical residential cleanings range from £50–£150.",
  }
];

export function getAreaPageJsonLd(areaSlug: string, areaName: string) {
  const pageUrl = `https://wowgutters.co.uk/gutter-cleaning-${areaSlug}/`;
  
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': 'https://wowgutters.co.uk/#business',
        name: 'WOW Gutters Ltd',
        description: `Professional gutter cleaning in ${areaName}. Ground-level vacuum, before & after photos, 1-year guarantee, fully insured. Call 07421 433910.`,
        url: 'https://wowgutters.co.uk/',
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
          addressLocality: areaName,
          addressRegion: 'West Midlands',
          addressCountry: 'GB',
        },
        areaServed: [
          { '@type': 'City', name: areaName },
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
        name: `Gutter Cleaning ${areaName}`,
        serviceType: 'Gutter cleaning',
        description: `Professional gutter cleaning in ${areaName}. Ground-level vacuum, no ladders, up to 4 storeys, before & after photos, downpipes cleared, 1-year guarantee.`,
        provider: { '@id': 'https://wowgutters.co.uk/#business' },
        areaServed: { '@type': 'City', name: areaName },
        url: pageUrl,
      },
      {
        '@type': 'FAQPage',
        mainEntity: AREA_FAQS.map((faq) => ({
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
            name: `Gutter Cleaning ${areaName}`,
            item: pageUrl,
          },
        ],
      },
    ],
  };
}
