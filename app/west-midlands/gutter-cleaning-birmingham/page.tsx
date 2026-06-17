import type { Metadata } from 'next';
import LocalBusinessSchema from '@/components/LocalBusinessSchema';
import CityGutterCleaningPage from '@/components/areas/CityGutterCleaningPage';
import { WEST_MIDLANDS_BIRMINGHAM_LANDING } from '@/constants/westMidlandsBirminghamLanding';

const URL_PATH = 'https://wowgutters.co.uk/west-midlands/gutter-cleaning-birmingham/';

const landingData = WEST_MIDLANDS_BIRMINGHAM_LANDING;
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
        url: 'https://wowgutters.co.uk/og/birmingham.jpg',
        width: 1200,
        height: 630,
        alt: 'WOW Gutters Ltd - Gutter Cleaning Birmingham West Midlands',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: landingData.titleTag,
    description: landingData.metaDescription,
    images: ['https://wowgutters.co.uk/og/birmingham.jpg'],
  },
};

export default function WestMidlandsBirminghamGutterPage() {
  return (
    <>
      <LocalBusinessSchema
        city="Birmingham"
        url={URL_PATH}
        priceFrom={50}
        priceTo={120}
        nearbyAreas={landingData.nearbyAreas ?? []}
        geo={landingData.geo}
        postcodes={landingData.postcodes}
        faqs={SCHEMA_FAQS}
        slug="birmingham"
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
