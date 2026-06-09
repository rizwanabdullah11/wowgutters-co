import type { Metadata } from 'next'
import LocalBusinessSchema from '@/components/LocalBusinessSchema'
import BirminghamGutterCleaningPage from '@/components/areas/BirminghamGutterCleaningPage'
import { buildCitySchemaFaqs } from '@/lib/cityFaqs'

const URL_PATH = 'https://wowgutters.co.uk/gutter-cleaning-birmingham/'

export const metadata: Metadata = {
  title: 'Gutter Cleaning Birmingham | WOW Gutters Ltd',
  description: 'Professional gutter cleaning in Birmingham from £50. Ground-level vacuum system, before & after photos, 1-year guarantee. Call WOW Gutters Ltd: 07421 433910.',
  alternates: {
    canonical: URL_PATH,
    languages: {
      'en-GB': URL_PATH,
      'x-default': URL_PATH,
    },
  },
  robots: {
    index: true, // explicit — overrides any default
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    title: 'Gutter Cleaning Birmingham | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Birmingham from £50. Ground-level vacuum system, before & after photos, 1-year guarantee.',
    url: URL_PATH,
    type: 'website',
    locale: 'en_GB',
    siteName: 'WOW Gutters Ltd',
    images: [
      {
        url: 'https://wowgutters.co.uk/og/default.jpg',
        width: 1200,
        height: 630,
        alt: 'WOW Gutters Ltd - Gutter Cleaning Birmingham',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gutter Cleaning Birmingham | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Birmingham from £50. Ground-level vacuum system, before & after photos, 1-year guarantee.',
    images: ['https://wowgutters.co.uk/og/default.jpg'],
  },
}

const BIRMINGHAM_POSTCODES = [
  'B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'B9', 'B10', 'B11', 'B12', 'B13', 'B14', 'B15', 'B16',
  'B17', 'B18', 'B19', 'B20', 'B21', 'B23', 'B24', 'B25', 'B26', 'B27', 'B28', 'B29', 'B30', 'B31', 'B32',
  'B33', 'B34', 'B35', 'B36', 'B37', 'B38', 'B40', 'B42', 'B43', 'B44', 'B45', 'B46', 'B47', 'B48', 'B49',
  'B50', 'B60', 'B61', 'B62', 'B63', 'B64', 'B65', 'B66', 'B67', 'B68', 'B69', 'B70', 'B71', 'B72', 'B73',
  'B74', 'B75', 'B76', 'B90', 'B91', 'B92', 'B93', 'B94', 'B95', 'B96', 'B97', 'B98',
]

const SCHEMA_FAQS = buildCitySchemaFaqs({
  city: 'Birmingham',
  slug: 'birmingham',
  priceFrom: 50,
  priceTo: 120,
  postcodes: BIRMINGHAM_POSTCODES,
  nearbyAreas: ['Solihull', 'Sutton Coldfield', 'Wolverhampton', 'Walsall', 'Dudley', 'West Bromwich'],
})

export default function BirminghamPage() {
  return (
    <>
      <LocalBusinessSchema
        city="Birmingham"
        url={URL_PATH}
        priceFrom={50}
        priceTo={120}
        nearbyAreas={['Solihull', 'Sutton Coldfield', 'Wolverhampton', 'Walsall', 'Dudley', 'West Bromwich']}
        geo={{ latitude: 52.4862, longitude: -1.8904 }}
        postcodes={BIRMINGHAM_POSTCODES}
        faqs={SCHEMA_FAQS}
      />
      <BirminghamGutterCleaningPage />
    </>
  )
}
