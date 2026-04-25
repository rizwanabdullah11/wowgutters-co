import { Metadata } from 'next';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  noindex?: boolean;
}

export function generateSEOMetadata({
  title,
  description,
  keywords = [],
  canonical,
  ogImage = '/assets/wow-gutter-logo2.png',
  noindex = false,
}: SEOProps): Metadata {
  const baseUrl = 'https://wowgutters.pro';
  const fullTitle = `${title} | WOW Gutters`;
  
  return {
    title: fullTitle,
    description,
    keywords: [
      ...keywords,
      'gutter cleaning',
      'gutter repairs',
      'UK gutter services',
      'professional gutter cleaning',
    ],
    alternates: {
      canonical: canonical ? `${baseUrl}${canonical}` : undefined,
    },
    robots: {
      index: !noindex,
      follow: !noindex,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical ? `${baseUrl}${canonical}` : baseUrl,
      siteName: 'WOW Gutters',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_GB',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
    },
  };
}

// Common SEO keywords by service type
export const SEOKeywords = {
  gutterCleaning: [
    'gutter cleaning',
    'gutter clearance',
    'blocked gutters',
    'gutter cleaning service',
    'professional gutter cleaning',
    'gutter cleaning near me',
    'local gutter cleaners',
    'gutter cleaning cost',
    'gutter cleaning prices',
  ],
  gutterRepairs: [
    'gutter repairs',
    'gutter replacement',
    'leaking gutters',
    'broken gutters',
    'gutter maintenance',
    'gutter repair service',
    'fix gutters',
  ],
  conservatory: [
    'conservatory cleaning',
    'conservatory roof cleaning',
    'conservatory window cleaning',
    'conservatory maintenance',
    'clean conservatory',
  ],
  commercial: [
    'commercial gutter cleaning',
    'business gutter cleaning',
    'industrial gutter cleaning',
    'commercial property maintenance',
    'office gutter cleaning',
  ],
  roofCleaning: [
    'roof cleaning',
    'roof moss removal',
    'roof maintenance',
    'clean roof tiles',
    'roof washing',
  ],
  upvc: [
    'UPVC cleaning',
    'fascia cleaning',
    'soffit cleaning',
    'UPVC maintenance',
    'clean fascias',
  ],
};

// Service-specific structured data generators
export function generateServiceSchema(serviceName: string, description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description: description,
    provider: {
      '@type': 'LocalBusiness',
      name: 'WOW Gutters',
      telephone: '+447421433910',
      url: 'https://wowgutters.pro',
    },
    areaServed: {
      '@type': 'Country',
      name: 'United Kingdom',
    },
  };
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateReviewSchema(rating: number, reviewCount: number) {
  return {
    '@context': 'https://schema.org',
    '@type': 'AggregateRating',
    ratingValue: rating.toString(),
    reviewCount: reviewCount.toString(),
    bestRating: '5',
    worstRating: '1',
  };
}
