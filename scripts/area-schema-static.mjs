/**
 * Build area-page JSON-LD for Hostinger static export (no React hydration required).
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const FEATURED_GOOGLE_REVIEWS = JSON.parse(
  fs.readFileSync(path.join(__dirname, '..', 'constants', 'googleReviewsData.json'), 'utf8'),
);

const LOGO_URL = 'https://wowgutters.co.uk/favicon.png';
const SCHEMA_DATE_PUBLISHED = '2025-01-15';
const SCHEMA_DATE_MODIFIED = '2026-06-02';
const SITE = 'https://wowgutters.co.uk';

function featuredReviewsAggregateRating() {
  const total = FEATURED_GOOGLE_REVIEWS.reduce((sum, r) => sum + r.rating, 0);
  const avg = Math.round((total / FEATURED_GOOGLE_REVIEWS.length) * 10) / 10;
  return {
    '@type': 'AggregateRating',
    ratingValue: String(avg),
    reviewCount: String(FEATURED_GOOGLE_REVIEWS.length),
    bestRating: '5',
    worstRating: '1',
  };
}

function buildReviewSchemaFields(businessId) {
  const aggregateRating = featuredReviewsAggregateRating();
  const review = FEATURED_GOOGLE_REVIEWS.map((item, index) => ({
    '@type': 'Review',
    '@id': `${businessId}#review-${index + 1}`,
    itemReviewed: { '@id': businessId },
    author: { '@type': 'Person', name: item.authorName },
    datePublished: item.datePublished,
    reviewBody: item.reviewBody,
    reviewRating: {
      '@type': 'Rating',
      ratingValue: String(item.rating),
      bestRating: '5',
      worstRating: '1',
    },
  }));
  return { aggregateRating, review };
}

function buildAreaWebPageNode(url, name) {
  return {
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name,
    isPartOf: { '@type': 'WebSite', '@id': `${SITE}/#website`, name: 'WOW Gutters Ltd', url: SITE },
    about: { '@id': `${url}#business` },
    datePublished: SCHEMA_DATE_PUBLISHED,
    dateModified: SCHEMA_DATE_MODIFIED,
  };
}

export function slugToTitle(slug) {
  return slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

export function buildDefaultFaqs(city, priceFrom, priceTo, postcodes, nearbyAreas) {
  return [
    {
      question: `How much does gutter cleaning cost in ${city}?`,
      answer: `Prices start from £${priceFrom} for a terraced house, £${priceFrom + 10}–£${priceFrom + 30} for semi-detached, and £${priceFrom + 30}–£${priceTo} for detached properties. Fixed quote before work starts.`,
    },
    {
      question: `How often should I have my gutters cleaned in ${city}?`,
      answer:
        'Once or twice a year. Late autumn (October–November) is most critical. Spring clean in April or May for properties with significant tree coverage.',
    },
    {
      question: 'Do you use ladders when cleaning gutters?',
      answer:
        'No. Ground-level vacuum system only. No ladders against your property. Reaches up to 4 storeys.',
    },
    {
      question: 'Do you clear downpipes as well as gutters?',
      answer:
        'Yes. Downpipe clearing included as standard. We flush and test every downpipe. Blocked downpipes cleared at no extra charge.',
    },
    {
      question: 'Do you provide before and after photos?',
      answer: 'Yes. Before and after photos on every single job. Images sent directly to you.',
    },
    {
      question: `What areas of ${city} do you cover?`,
      answer: `All ${city} postcodes${postcodes.length ? ` including ${postcodes.slice(0, 5).join(', ')}` : ''} and surrounding areas: ${nearbyAreas.slice(0, 5).join(', ')}${nearbyAreas.length > 5 ? ' and more' : ''}.`,
    },
    {
      question: 'Are you insured?',
      answer: 'Yes. Fully insured with comprehensive public liability insurance on every job.',
    },
  ];
}

export function buildLocalBusinessSchemaGraph({
  city,
  url,
  priceFrom,
  priceTo,
  nearbyAreas,
  geo,
  faqs,
  postcodes = [],
}) {
  const allFaqs =
    faqs?.length > 0 ? faqs : buildDefaultFaqs(city, priceFrom, priceTo, postcodes, nearbyAreas);
  const businessId = `${url}#business`;
  const { aggregateRating, review } = buildReviewSchemaFields(businessId);

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'HomeAndConstructionBusiness',
        '@id': businessId,
        name: `WOW Gutters Ltd — ${city}`,
        description: `Professional gutter cleaning in ${city}. Ground-level vacuum, before & after photos, 1-year guarantee, fully insured. Call 07421 433910.`,
        url,
        telephone: '+447421433910',
        email: 'support@wowgutters.co.uk',
        priceRange: '££',
        image: LOGO_URL,
        logo: { '@type': 'ImageObject', url: LOGO_URL },
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
        aggregateRating,
        review,
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+447421433910',
          contactType: 'Customer Service',
          contactOption: 'TollFree',
          areaServed: 'GB',
          availableLanguage: 'English',
        },
        potentialAction: { '@type': 'CommunicateAction', target: 'tel:+447421433910' },
        dateModified: SCHEMA_DATE_MODIFIED,
      },
      buildAreaWebPageNode(url, `Gutter Cleaning ${city} | WOW Gutters Ltd`),
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
        datePublished: SCHEMA_DATE_PUBLISHED,
        dateModified: SCHEMA_DATE_MODIFIED,
      },
      {
        '@type': 'FAQPage',
        '@id': `${url}#faq`,
        mainEntity: allFaqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${url}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://wowgutters.co.uk/' },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Gutter Cleaning',
            item: 'https://wowgutters.co.uk/help/unblock/',
          },
          { '@type': 'ListItem', position: 3, name: `Gutter Cleaning ${city}`, item: url },
        ],
      },
    ],
  };
}

/** Parse lib/cities.ts for schema injection fallback */
export function parseCitiesFromFile(citiesTsContent) {
  const cities = {};
  const lines = citiesTsContent.split('\n');
  let currentSlug = null;
  let blockLines = [];

  function flushBlock() {
    if (!currentSlug) return;
    const block = blockLines.join('\n');
    const nameM = block.match(/name:\s*'([^']+)'/);
    const latM = block.match(/latitude:\s*([\d.-]+)/);
    const lngM = block.match(/longitude:\s*([\d.-]+)/);
    const terracedMinM = block.match(/terraced:\s*\{\s*min:\s*(\d+)/);
    const detachedMaxM = block.match(/detached:\s*\{[^}]*max:\s*(\d+)/);
    const postcodesM = block.match(/postcodes:\s*\[([^\]]*)\]/);
    const nearbyM = block.match(/nearbyAreas:\s*\[([^\]]*)\]/);

    cities[currentSlug] = {
      slug: currentSlug,
      name: nameM ? nameM[1] : slugToTitle(currentSlug),
      geo: {
        latitude: latM ? parseFloat(latM[1]) : 52.4862,
        longitude: lngM ? parseFloat(lngM[1]) : -1.8904,
      },
      priceFrom: terracedMinM ? parseInt(terracedMinM[1], 10) : 50,
      priceTo: detachedMaxM ? parseInt(detachedMaxM[1], 10) : 120,
      postcodes: postcodesM ? [...postcodesM[1].matchAll(/'([^']+)'/g)].map((x) => x[1]) : [],
      nearbyAreas: nearbyM ? [...nearbyM[1].matchAll(/'([^']+)'/g)].map((x) => x[1]) : [],
    };
    currentSlug = null;
    blockLines = [];
  }

  for (const line of lines) {
    const keyM = line.match(/^  ['"]?([\w-]+)['"]?: \{/);
    if (keyM) {
      flushBlock();
      currentSlug = keyM[1];
      blockLines = [line];
      continue;
    }
    if (currentSlug) {
      blockLines.push(line);
      if (/^  \},?$/.test(line)) flushBlock();
    }
  }
  flushBlock();
  return cities;
}

export function schemaForAreaSlug(slug, citiesMap) {
  const url = `https://wowgutters.co.uk/gutter-cleaning-${slug}/`;
  const data = citiesMap[slug];
  if (data) {
    return buildLocalBusinessSchemaGraph({
      city: data.name,
      url,
      priceFrom: data.priceFrom,
      priceTo: data.priceTo,
      nearbyAreas: data.nearbyAreas,
      geo: data.geo,
      postcodes: data.postcodes,
    });
  }
  return buildLocalBusinessSchemaGraph({
    city: slugToTitle(slug),
    url,
    priceFrom: 50,
    priceTo: 120,
    nearbyAreas: [],
    geo: { latitude: 52.4862, longitude: -1.8904 },
  });
}
