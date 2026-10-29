import { HERO_IMAGE_SRC, HERO_IMAGE_SRCSET } from '@/lib/heroImage';
import { normalizeMetadata } from '@/lib/seo';
import type { Metadata } from 'next';
import HomeScreen from './home-screen/page';

const URL_PATH = 'https://wowgutters.co.uk/';
// Exact homepage title — set after normalizeMetadata so it isn't reordered/trimmed.
// Homepage targets the broad / West Midlands searches ("gutter cleaning services", "gutter cleaning
// company"); Birmingham searches belong to /gutter-cleaning-birmingham/ (Oct 2026 cannibalisation fix).
const HOME_TITLE = 'Gutter Cleaning Services West Midlands | WOW Gutters Ltd';

const baseMetadata: Metadata = normalizeMetadata({
  title: 'Gutter Cleaning Services West Midlands | WOW Gutters Ltd',
  
  description: 'Gutter cleaning services across the West Midlands from £100. Ground-level vacuum, no ladders, before & after photos, fully insured. Free quote: 07421 433910.',
  
  alternates: {
    canonical: URL_PATH,
    languages: {
      'en-GB': URL_PATH,
      'x-default': URL_PATH
    },
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' }
  },
  
  openGraph: {
    title: 'Gutter Cleaning Services West Midlands | WOW Gutters Ltd',
    description: 'Gutter cleaning services across the West Midlands from £100. Ground-level vacuum, no ladders, before & after photos, fully insured. Free quote: 07421 433910.',
    url: URL_PATH,
    siteName: 'WOW Gutters Ltd',
    locale: 'en_GB',
    type: 'website',
    images: [{
      url: 'https://wowgutters.co.uk/og/default.jpg',
      width: 1200,
      height: 630,
      alt: 'WOW Gutters Ltd — Gutter Cleaning Services West Midlands'
    }]
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Gutter Cleaning Services West Midlands | WOW Gutters Ltd',
    description: 'Gutter cleaning services across the West Midlands from £100. Ground-level vacuum, no ladders, before & after photos, fully insured. Free quote: 07421 433910.',
    images: ['https://wowgutters.co.uk/og/default.jpg']
  }
});

export const metadata: Metadata = {
  ...baseMetadata,
  title: { absolute: HOME_TITLE },
  openGraph: { ...baseMetadata.openGraph, title: HOME_TITLE },
  twitter: { ...baseMetadata.twitter, title: HOME_TITLE },
};


// Hero video schema — homepage only (the video is part of this page's main content).
const VIDEO_OBJECT_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": "WOW Gutters Ltd — Professional Gutter Cleaning Service",
  "description":
    "See our ground-level vacuum gutter cleaning system in action. No ladders, no mess, before & after photo proof on every job. Serving Birmingham and the West Midlands.",
  "thumbnailUrl": "https://wowgutters.co.uk/gutter-cleaning.jpeg",
  "contentUrl": "https://wowgutters.co.uk/gutter-final-video.mp4",
  "embedUrl": "https://wowgutters.co.uk/gutter-final-video.mp4",
  "duration": "PT1M30S",
  "uploadDate": "2025-01-15",
  "publisher": {
    "@type": "Organization",
    "@id": "https://wowgutters.co.uk/#business",
    "name": "WOW Gutters Ltd",
    "logo": {
      "@type": "ImageObject",
      "url": "https://wowgutters.co.uk/assets/wow-gutter-logo2.png",
    },
  },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Homepage-only LCP preload (not applied site-wide) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(VIDEO_OBJECT_SCHEMA) }}
      />
      <link rel="preload" as="image" href={HERO_IMAGE_SRC} imageSrcSet={HERO_IMAGE_SRCSET} imageSizes="100vw" fetchPriority="high" />
      <HomeScreen />
    </div>
  );
}
