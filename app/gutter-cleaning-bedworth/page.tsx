import type { Metadata } from 'next';
import LocalBusinessSchema from '@/components/LocalBusinessSchema';
import CityGutterCleaningPage from '@/components/areas/CityGutterCleaningPage';
import { getCityGutterLandingData } from '@/constants/cityGutterLandingData';

const URL_PATH = 'https://wowgutters.co.uk/gutter-cleaning-bedworth/';
const landingData = getCityGutterLandingData('bedworth')!;
const SCHEMA_FAQS = landingData.faqs.map(({ question, answer }) => ({ question, answer }));

export const metadata: Metadata = {
  title: landingData.titleTag,
  description: landingData.metaDescription,
  alternates: {
    canonical: URL_PATH,
    languages: {
      'en-GB': URL_PATH,
      'x-default': URL_PATH,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    title: landingData.titleTag,
    description: landingData.metaDescription,
    url: URL_PATH,
    type: 'website',
    locale: 'en_GB',
    siteName: 'WOW Gutters Ltd',
    images: [
      {
        url: 'https://wowgutters.co.uk/og/bedworth.jpg',
        width: 1200,
        height: 630,
        alt: 'WOW Gutters Ltd — Gutter Cleaning Bedworth CV12',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: landingData.titleTag,
    description: landingData.metaDescription,
    images: ['https://wowgutters.co.uk/og/bedworth.jpg'],
  },
};

export default function GutterCleaningBedworthPage() {
  return (
    <>
      <LocalBusinessSchema
        city="Bedworth"
        url={URL_PATH}
        priceFrom={55}
        priceTo={landingData.priceTo ?? 130}
        nearbyAreas={landingData.nearbyAreas ?? []}
        geo={landingData.geo}
        postcodes={landingData.postcodes ?? ['CV12']}
        faqs={SCHEMA_FAQS}
      />
      <CityGutterCleaningPage data={landingData} />
    </>
  );
}
