import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import BirminghamGutterCleaningPage from '@/components/areas/BirminghamGutterCleaningPage';

/* ─── SEO Metadata ─────────────────────────────────────────────────────────── */
export const metadata: Metadata = buildMetadata({
  title: 'Gutter Cleaning Birmingham | Professional, Safe & Guaranteed | WOW Gutters',
  description:
    "WOW Gutters Ltd is Birmingham's trusted gutter cleaning specialist — ground-level vacuum system, no ladders, up to 4 storeys, before & after photos. Same-day booking available. Call 07421 433910.",
  canonicalPath: '/gutter-cleaning-birmingham/',
  keywords: [
    'gutter cleaning Birmingham',
    'gutter cleaning Birmingham city centre',
    'gutter vacuum Birmingham',
    'blocked gutters Birmingham',
    'gutter repair Birmingham',
    'gutter cleaning Sutton Coldfield',
    'gutter cleaning Edgbaston',
    'gutter cleaning Moseley',
    'gutter cleaning Harborne',
    'commercial gutter cleaning Birmingham',
    'same day gutter cleaning Birmingham',
    'WOW Gutters Birmingham',
  ],
});

/* ─── LocalBusiness + FAQPage JSON-LD Schema ───────────────────────────────── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://wowgutters.co.uk/#business',
      name: 'WOW Gutters Ltd',
      description:
        "Birmingham's trusted gutter cleaning specialist. Ground-level vacuum system, no ladders, up to 4-storey reach, before & after photos.",
      url: 'https://wowgutters.co.uk/gutter-cleaning-birmingham/',
      telephone: '+447421433910',
      priceRange: '££',
      image: 'https://wowgutters.co.uk/assets/wow-gutter-logo2.png',
      logo: 'https://wowgutters.co.uk/assets/wow-gutter-logo2.png',
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
      areaServed: {
        '@type': 'City',
        name: 'Birmingham',
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '07:00',
          closes: '20:00',
        },
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '2696',
        bestRating: '5',
        worstRating: '1',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Gutter Services Birmingham',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Gutter Cleaning Birmingham',
              description:
                'Professional ground-level vacuum gutter cleaning for homes and businesses in Birmingham. No ladders, before & after photos.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Gutter Repairs Birmingham',
              description:
                'Leaking joints, broken brackets, sagging sections — fast repairs with a 6-month guarantee.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Commercial Gutter Cleaning Birmingham',
              description:
                'Planned maintenance contracts for offices, retail, schools and landlords across Birmingham.',
            },
          },
        ],
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How much does gutter cleaning cost in Birmingham?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Gutter cleaning prices in Birmingham typically start from around £60–£80 for a standard terraced or semi-detached home. Larger detached properties and multi-storey buildings are priced accordingly. Contact WOW Gutters on 07421 433910 for a free, no-obligation quote.',
          },
        },
        {
          '@type': 'Question',
          name: 'How often should I have my gutters cleaned in Birmingham?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Most Birmingham homes benefit from one or two cleans per year. Late autumn (October–November) is the most critical time due to Birmingham's dense tree canopy. Properties with heavy tree coverage may need a spring clean in April or May as well.",
          },
        },
        {
          '@type': 'Question',
          name: 'Do WOW Gutters use ladders?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. WOW Gutters uses a ground-level high-reach vacuum system that reaches up to 4 storeys. No ladders are placed against your property, eliminating any risk of fascia or render damage.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is same-day gutter cleaning available in Birmingham?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. WOW Gutters offers same-day and next-day bookings across Birmingham, subject to availability. Call 07421 433910 or request a quote online for the fastest response.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are WOW Gutters fully insured?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. WOW Gutters Ltd is fully insured for all gutter cleaning, repair, and maintenance work carried out in Birmingham and across the West Midlands.',
          },
        },
      ],
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
          item: 'https://wowgutters.co.uk/gutter-cleaning-birmingham/',
        },
      ],
    },
  ],
};

/* ─── Page ─────────────────────────────────────────────────────────────────── */
export default function BirminghamPage() {
  return (
    <>
      {/* Inject JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BirminghamGutterCleaningPage />
    </>
  );
}
