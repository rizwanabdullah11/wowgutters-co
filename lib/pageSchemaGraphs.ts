import { SCHEMA_DATE_MODIFIED, SCHEMA_DATE_PUBLISHED } from '@/lib/schemaDates';
import { TEAM_PROFILES, WOW_BUSINESS_FOUNDED } from '@/lib/teamProfiles';
import { BUSINESS_ID, businessEntityNode } from '@/lib/businessEntity';

const SITE = 'https://wowgutters.co.uk';


export function buildAreaWebPageNode(url: string, name: string) {
  return {
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name,
    isPartOf: { '@type': 'WebSite', '@id': `${SITE}/#website`, name: 'WOW Gutters Ltd', url: SITE },
    about: { '@id': BUSINESS_ID },
    datePublished: SCHEMA_DATE_PUBLISHED,
    dateModified: SCHEMA_DATE_MODIFIED,
  };
}

export function buildContactPageSchemaGraph() {
  const url = `${SITE}/contact/`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      businessEntityNode({
        description:
          'Contact WOW Gutters Ltd for gutter cleaning across Birmingham and the West Midlands.',
      }),
      {
        '@type': 'ContactPage',
        '@id': `${url}#webpage`,
        url,
        name: 'Contact WOW Gutters Ltd | Gutter Cleaning Birmingham',
        isPartOf: { '@id': `${SITE}/#website` },
        about: { '@id': BUSINESS_ID },
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
      businessEntityNode({
        description:
          'Professional gutter cleaning company serving Birmingham and the West Midlands.',
        foundingDate: WOW_BUSINESS_FOUNDED,
        employee: TEAM_PROFILES.map((p) => ({
          '@type': 'Person',
          name: p.name,
          jobTitle: p.role,
          description: p.experience,
          image: `${SITE}${p.image}`,
          worksFor: { '@id': BUSINESS_ID },
        })),
      }),
      {
        '@type': 'AboutPage',
        '@id': `${url}#webpage`,
        url,
        name: 'About WOW Gutters Ltd | Gutter Cleaning Birmingham',
        isPartOf: { '@id': `${SITE}/#website` },
        about: { '@id': BUSINESS_ID },
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
        provider: { '@id': BUSINESS_ID },
        areaServed: { '@type': 'AdministrativeArea', name: 'West Midlands' },
        url,
        offers: {
          '@type': 'AggregateOffer',
          priceCurrency: 'GBP',
          lowPrice: '50',
          highPrice: '500',
          offerCount: '6',
        },
      },
      {
        '@type': 'PriceSpecification',
        '@id': `${url}#price-terraced`,
        name: 'Terraced home gutter cleaning from',
        price: '100',
        priceCurrency: 'GBP',
        validFrom: SCHEMA_DATE_PUBLISHED,
      },
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: 'Gutter Cleaning Prices | WOW Gutters Ltd',
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
        provider: { '@id': BUSINESS_ID },
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
        name: `${input.name} | WOW Gutters Ltd`,
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
        name: 'The Gutter Gallery | Before & After Photos | WOW Gutters Ltd',
        description:
          'Before and after gutter cleaning photos from WOW Gutters Ltd across Birmingham and the West Midlands.',
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
