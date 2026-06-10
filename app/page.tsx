import type { Metadata } from 'next';
import HomeScreen from './home-screen/page';

const URL_PATH = 'https://wowgutters.co.uk/';

export const metadata: Metadata = {
  title: 'Gutter Cleaning Birmingham & West Midlands | WOW Gutters Ltd',
  
  description: 'Professional gutter cleaning across Birmingham and West Midlands. ' +
    'Ground-level vacuum system, 4.9★ from 2,696+ reviews, 1-year guarantee. ' +
    'Free quote: 07421 433910.',
  
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
    description: 'Professional gutter cleaning across Birmingham and West Midlands. ' +
      'Ground-level vacuum system, 4.9★ from 2,696+ reviews, 1-year guarantee.',
    url: URL_PATH,
    siteName: 'WOW Gutters Ltd',
    locale: 'en_GB',
    type: 'website',
    images: [{
      url: 'https://wowgutters.co.uk/og/default.jpg',
      width: 1200,
      height: 630,
      alt: 'WOW Gutters Ltd - Professional Gutter Cleaning Birmingham & West Midlands'
    }]
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Gutter Cleaning Birmingham & West Midlands | WOW Gutters Ltd',
    description: 'Professional gutter cleaning across Birmingham and West Midlands. ' +
      '4.9★ from 2,696+ reviews. Free quote: 07421 433910.',
    images: ['https://wowgutters.co.uk/og/default.jpg']
  }
};

const HERO_LCP_IMAGE = '/gutter-cleaning.jpeg';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Homepage-only LCP preload (not applied site-wide) */}
      <link rel="preload" as="image" href={HERO_LCP_IMAGE} fetchPriority="high" />
      <HomeScreen />
    </div>
  );
}
