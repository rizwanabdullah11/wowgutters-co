import type { Metadata } from 'next';
import LocalBusinessSchema from '@/components/LocalBusinessSchema';
import CityGutterCleaningPage from '@/components/areas/CityGutterCleaningPage';
import { GUTTER_CLEANER_LANDING } from '@/constants/gutterCleanerLanding';

const URL_PATH = 'https://wowgutters.co.uk/gutter-cleaner/';
const landingData = GUTTER_CLEANER_LANDING;
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
        url: 'https://wowgutters.co.uk/og/default.jpg',
        width: 1200,
        height: 630,
        alt: 'WOW Gutters Ltd — Professional Gutter Cleaner West Midlands',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: landingData.titleTag,
    description: landingData.metaDescription,
    images: ['https://wowgutters.co.uk/og/default.jpg'],
  },
};

export default function GutterCleanerPage() {
  return (
    <>
      <LocalBusinessSchema
        city="West Midlands"
        url={URL_PATH}
        priceFrom={50}
        priceTo={landingData.priceTo ?? 140}
        nearbyAreas={landingData.nearbyAreas ?? []}
        geo={landingData.geo}
        postcodes={landingData.postcodes ?? []}
        faqs={SCHEMA_FAQS}
        slug="gutter-cleaner"
      />
      <CityGutterCleaningPage
        data={landingData}
        showGuarantee={false}
        showPricing={false}
        useLandingFaqs
      />
    </>
  );
}
