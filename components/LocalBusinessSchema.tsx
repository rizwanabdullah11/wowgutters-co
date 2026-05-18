/**
 * LocalBusinessSchema Component
 * 
 * This is the engine of every schema fix. It outputs a complete @graph JSON-LD 
 * with four schema types in one block:
 * 1. HomeAndConstructionBusiness (more specific than LocalBusiness)
 * 2. Service
 * 3. FAQPage
 * 4. BreadcrumbList
 * 
 * Why HomeAndConstructionBusiness, not generic LocalBusiness?
 * Schema.org has a hierarchy: LocalBusiness → HomeAndConstructionBusiness
 * Using the more specific type tells Google your business category precisely
 * — stronger ranking signal for trade-service searches.
 * 
 * Critical detail: The component uses dangerouslySetInnerHTML to inject the JSON
 * as raw HTML. This means it renders at build time into static HTML — no client-side
 * JavaScript needed. Google sees it instantly.
 */

type LocalBusinessSchemaProps = {
  /** City name (e.g., "Birmingham") */
  city: string
  /** Page URL (e.g., "https://wowgutters.co.uk/gutter-cleaning-birmingham/") */
  url: string
  /** Price range from (e.g., 50) */
  priceFrom: number
  /** Price range to (e.g., 120) */
  priceTo: number
  /** Nearby areas array (e.g., ["Solihull", "Sutton Coldfield", "Wolverhampton"]) */
  nearbyAreas: string[]
  /** Geographic coordinates */
  geo: {
    latitude: number
    longitude: number
  }
  /** Optional: Custom FAQs (if not provided, uses defaults) */
  faqs?: Array<{ question: string; answer: string }>
  /** Optional: Postcodes served (e.g., ["B1", "B2", "B3"]) */
  postcodes?: string[]
}

export default function LocalBusinessSchema({
  city,
  url,
  priceFrom,
  priceTo,
  nearbyAreas,
  geo,
  faqs,
  postcodes = [],
}: LocalBusinessSchemaProps) {
  // Default FAQs if none provided
  const defaultFaqs = [
    {
      question: `How much does gutter cleaning cost in ${city}?`,
      answer: `Prices start from £${priceFrom} for a terraced house, £${priceFrom + 10}–£${priceFrom + 30} for semi-detached, and £${priceFrom + 30}–£${priceTo} for detached properties. Fixed quote before work starts.`,
    },
    {
      question: `How often should I have my gutters cleaned in ${city}?`,
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
      question: 'Do you provide before and after photos?',
      answer: 'Yes. Before and after photos on every single job. Images sent directly to you.',
    },
    {
      question: `What areas of ${city} do you cover?`,
      answer: `All ${city} postcodes${postcodes.length > 0 ? ` including ${postcodes.slice(0, 5).join(', ')}` : ''} and surrounding areas: ${nearbyAreas.slice(0, 5).join(', ')}${nearbyAreas.length > 5 ? ' and more' : ''}.`,
    },
    {
      question: 'Are you insured?',
      answer: 'Yes. Fully insured with comprehensive public liability insurance. 1-year service guarantee on every job.',
    },
  ]

  const allFaqs = faqs && faqs.length > 0 ? faqs : defaultFaqs

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      // 1. HomeAndConstructionBusiness (more specific than LocalBusiness)
      {
        '@type': 'HomeAndConstructionBusiness',
        '@id': `${url}#business`,
        name: `WOW Gutters Ltd — ${city}`,
        description: `Professional gutter cleaning in ${city}. Ground-level vacuum, before & after photos, 1-year guarantee, fully insured. Call 07421 433910.`,
        url,
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
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '2696',
          bestRating: '5',
          worstRating: '1',
        },
      },

      // 2. Service
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
      },

      // 3. FAQPage
      {
        '@type': 'FAQPage',
        '@id': `${url}#faq`,
        mainEntity: allFaqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },

      // 4. BreadcrumbList
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
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  )
}
