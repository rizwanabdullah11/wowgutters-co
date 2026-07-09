import type { Metadata } from 'next'
import LocalBusinessSchema from '@/components/LocalBusinessSchema'
import DerbyGutterCleaningPage from '@/components/areas/DerbyGutterCleaningPage'
import { buildCitySchemaFaqs } from '@/lib/cityFaqs'

const URL_PATH = 'https://wowgutters.co.uk/gutter-cleaning-derby/'

export const metadata: Metadata = {
  title: 'Gutter Cleaning Derby | WOW Gutters Ltd',
  description: 'Professional gutter cleaning in Derby from £50. Ground-level vacuum system, before & after photos, 1-year guarantee. Call WOW Gutters Ltd: 07421 433910.',
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
    title: 'Gutter Cleaning Derby | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Derby from £50. Ground-level vacuum system, before & after photos, 1-year guarantee.',
    url: URL_PATH,
    type: 'website',
    locale: 'en_GB',
    siteName: 'WOW Gutters Ltd',
    images: [
      {
        url: 'https://wowgutters.co.uk/og/default.jpg',
        width: 1200,
        height: 630,
        alt: 'WOW Gutters Ltd - Gutter Cleaning Derby',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gutter Cleaning Derby | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Derby from £50. Ground-level vacuum system, before & after photos, 1-year guarantee.',
    images: ['https://wowgutters.co.uk/og/default.jpg'],
  },
}

const DERBY_POSTCODES = [
  'DE1', 'DE2', 'DE3', 'DE4', 'DE5', 'DE6', 'DE7', 'DE8', 'DE9', 'DE10',
  'DE11', 'DE12', 'DE13', 'DE14', 'DE15', 'DE21', 'DE22', 'DE23', 'DE24', 'DE65',
  'DE72', 'DE73', 'DE74', 'DE75',
]

const SCHEMA_FAQS = buildCitySchemaFaqs({
  city: 'Derby',
  slug: 'derby',
  priceFrom: 50,
  priceTo: 120,
  postcodes: DERBY_POSTCODES,
  nearbyAreas: ['Nottingham', 'Burton upon Trent', 'Chesterfield', 'Mansfield', 'Long Eaton', 'Swadlincote'],
})

export default function DerbyPage() {
  return (
    <>
      <LocalBusinessSchema
        city="Derby"
        url={URL_PATH}
        priceFrom={50}
        priceTo={120}
        nearbyAreas={['Nottingham', 'Burton upon Trent', 'Chesterfield', 'Mansfield', 'Long Eaton', 'Swadlincote']}
        geo={{ latitude: 52.9225, longitude: -1.4746 }}
        postcodes={DERBY_POSTCODES}
        faqs={SCHEMA_FAQS}
      />
      <DerbyGutterCleaningPage />
    </>
  )
}