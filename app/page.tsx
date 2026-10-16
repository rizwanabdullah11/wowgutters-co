import { HERO_IMAGE_SRC, HERO_IMAGE_SRCSET } from '@/lib/heroImage';
import type { Metadata } from 'next';
import HomeScreen from './home-screen/page';

const URL_PATH = 'https://wowgutters.co.uk/';

export const metadata: Metadata = {
  title: 'Gutter Cleaning Birmingham & West Midlands | WOW Gutters Ltd',
  
  description: 'Gutter cleaning in Birmingham & the West Midlands from £50. Ground-level vacuum, no ladders, before & after photos, fully insured. Free quote: 07421 433910.',
  
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
    title: 'Gutter Cleaning Birmingham & West Midlands | WOW Gutters Ltd',
    description: 'Gutter cleaning in Birmingham & the West Midlands from £50. Ground-level vacuum, no ladders, before & after photos, fully insured. Free quote: 07421 433910.',
    url: URL_PATH,
    siteName: 'WOW Gutters Ltd',
    locale: 'en_GB',
    type: 'website',
    images: [{
      url: 'https://wowgutters.co.uk/og/default.jpg',
      width: 1200,
      height: 630,
      alt: 'WOW Gutters Ltd — Gutter Cleaning Birmingham & West Midlands'
    }]
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Gutter Cleaning Birmingham & West Midlands | WOW Gutters Ltd',
    description: 'Gutter cleaning in Birmingham & the West Midlands from £50. Ground-level vacuum, no ladders, before & after photos, fully insured. Free quote: 07421 433910.',
    images: ['https://wowgutters.co.uk/og/default.jpg']
  }
};


export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Homepage-only LCP preload (not applied site-wide) */}
      <link rel="preload" as="image" href={HERO_IMAGE_SRC} imageSrcSet={HERO_IMAGE_SRCSET} imageSizes="100vw" fetchPriority="high" />
      <HomeScreen />
    </div>
  );
}
