import { SCHEMA_DATE_MODIFIED, SCHEMA_DATE_PUBLISHED } from '@/lib/schemaDates';
import { TEAM_PROFILES, WOW_BUSINESS_FOUNDED } from '@/lib/teamProfiles';

const SITE = 'https://wowgutters.co.uk';

const HQ_ADDRESS = {
  '@type': 'PostalAddress' as const,
  streetAddress: '38 Ryland Street',
  addressLocality: 'Birmingham',
  addressRegion: 'West Midlands',
  postalCode: 'B16 8DD',
  addressCountry: 'GB',
};

export function buildAreaWebPageNode(url: string, name: string) {
  return {
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name,
    isPartOf: { '@type': 'WebSite', '@id': `${SITE}/#website`, name: 'WOW Gutters', url: SITE },
    about: { '@id': `${url}#business` },
    datePublished: SCHEMA_DATE_PUBLISHED,
    dateModified: SCHEMA_DATE_MODIFIED,
  };
}

export function buildContactPageSchemaGraph() {
  const url = `${SITE}/contact/`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': `${url}#business`,
        name: 'WOW Gutters Ltd',
        description:
          'Contact WOW Gutters Ltd for gutter cleaning across Birmingham and the West Midlands.',
        url,
        telephone: '+447421433910',
        email: 'support@wowgutters.co.uk',
        address: HQ_ADDRESS,
        geo: { '@type': 'GeoCoordinates', latitude: 52.4862, longitude: -1.8904 },
        hasMap: 'https://www.google.com/maps/search/?api=1&query=WOW+Gutters+38+Ryland+Street+Birmingham+B16+8DD',
      },
      {
        '@type': 'ContactPage',
        '@id': `${url}#webpage`,
        url,
        name: 'Contact WOW Gutters | Gutter Cleaning Birmingham',
        isPartOf: { '@id': `${SITE}/#website` },
        about: { '@id': `${url}#business` },
        datePublished: SCHEMA_DATE_PUBLISHED,
        dateModified: SCHEMA_DATE_MODIFIED,
      },
    ],
  };
}

export function buildAboutPageSchemaGraph() {
  const url = `${SITE}/about/`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${url}#organization`,
        name: 'WOW Gutters Ltd',
        description:
          'Professional gutter cleaning company serving Birmingham and the West Midlands.',
        url,
        telephone: '+447421433910',
        email: 'support@wowgutters.co.uk',
        logo: {
          '@type': 'ImageObject',
          url: `${SITE}/assets/wow-gutter-logo2.png`,
        },
        address: HQ_ADDRESS,
        foundingDate: WOW_BUSINESS_FOUNDED,
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '2696',
          bestRating: '5',
          worstRating: '1',
        },
        employee: TEAM_PROFILES.map((p) => ({
          '@type': 'Person',
          name: p.name,
          jobTitle: p.role,
          description: p.experience,
          image: `${SITE}${p.image}`,
          worksFor: { '@id': `${url}#organization` },
        })),
      },
      {
        '@type': 'AboutPage',
        '@id': `${url}#webpage`,
        url,
        name: 'About WOW Gutters | Gutter Cleaning Birmingham',
        isPartOf: { '@id': `${SITE}/#website` },
        about: { '@id': `${url}#organization` },
        datePublished: SCHEMA_DATE_PUBLISHED,
        dateModified: SCHEMA_DATE_MODIFIED,
      },
    ],
  };
}

export function buildPricingPageSchemaGraph() {
  const url = `${SITE}/pricing/`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name: 'Gutter Cleaning Prices',
        serviceType: 'Gutter cleaning',
        provider: { '@type': 'LocalBusiness', name: 'WOW Gutters Ltd', url: SITE },
        areaServed: { '@type': 'AdministrativeArea', name: 'West Midlands' },
        url,
        offers: {
          '@type': 'AggregateOffer',
          priceCurrency: 'GBP',
          lowPrice: '50',
          highPrice: '120',
          offerCount: '3',
        },
      },
      {
        '@type': 'PriceSpecification',
        '@id': `${url}#price-terraced`,
        name: 'Terraced home gutter cleaning from',
        price: '50',
        priceCurrency: 'GBP',
        validFrom: SCHEMA_DATE_PUBLISHED,
      },
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: 'Gutter Cleaning Prices | WOW Gutters',
        isPartOf: { '@id': `${SITE}/#website` },
        about: { '@id': `${url}#service` },
        datePublished: SCHEMA_DATE_PUBLISHED,
        dateModified: SCHEMA_DATE_MODIFIED,
      },
    ],
  };
}

export function buildServicePageSchemaGraph(input: {
  path: string;
  name: string;
  description: string;
  serviceType: string;
  lowPrice?: string;
  highPrice?: string;
}) {
  const url = `${SITE}${input.path.startsWith('/') ? input.path : `/${input.path}`}`;
  const normalized = url.endsWith('/') ? url : `${url}/`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${normalized}#service`,
        name: input.name,
        serviceType: input.serviceType,
        description: input.description,
        provider: {
          '@type': 'HomeAndConstructionBusiness',
          name: 'WOW Gutters Ltd',
          url: SITE,
          telephone: '+447421433910',
        },
        areaServed: { '@type': 'AdministrativeArea', name: 'West Midlands' },
        url: normalized,
        ...(input.lowPrice && input.highPrice
          ? {
              offers: {
                '@type': 'Offer',
                priceCurrency: 'GBP',
                priceSpecification: {
                  '@type': 'PriceSpecification',
                  minPrice: input.lowPrice,
                  maxPrice: input.highPrice,
                  priceCurrency: 'GBP',
                },
              },
            }
          : {}),
        dateModified: SCHEMA_DATE_MODIFIED,
      },
      {
        '@type': 'WebPage',
        '@id': `${normalized}#webpage`,
        url: normalized,
        name: `${input.name} | WOW Gutters`,
        isPartOf: { '@id': `${SITE}/#website` },
        about: { '@id': `${normalized}#service` },
        datePublished: SCHEMA_DATE_PUBLISHED,
        dateModified: SCHEMA_DATE_MODIFIED,
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${normalized}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
          { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE}/services/` },
          { '@type': 'ListItem', position: 3, name: input.name, item: normalized },
        ],
      },
    ],
  };
}

export function buildGalleryPageSchemaGraph() {
  const url = `${SITE}/the-gutter-gallery/`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${url}#webpage`,
        url,
        name: 'The Gutter Gallery | Before & After Photos | WOW Gutters',
        description:
          'Before and after gutter cleaning photos from WOW Gutters across Birmingham and the West Midlands.',
        isPartOf: { '@id': `${SITE}/#website` },
        datePublished: SCHEMA_DATE_PUBLISHED,
        dateModified: SCHEMA_DATE_MODIFIED,
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${url}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
          { '@type': 'ListItem', position: 2, name: 'Gutter Gallery', item: url },
        ],
      },
    ],
  };
}
