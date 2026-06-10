import type { Metadata } from 'next'
import LocalBusinessSchema from '@/components/LocalBusinessSchema'
import SuburbGutterCleaningPage from '@/components/areas/SuburbGutterCleaningPage'
import { suburbPages } from '@/lib/suburbPageData'

const URL_PATH = 'https://wowgutters.co.uk/gutter-cleaning-newtown/'
const pageData = suburbPages.newtown

export const metadata: Metadata = {
  title: 'Gutter Cleaning Newtown Birmingham | WOW Gutters Ltd',
  description: 'Professional gutter cleaning in Newtown, Birmingham (B19). Victorian terraces & post-war flats, no ladders, vacuum system, before & after photos. From £50. Call: 07421 433910.',
  alternates: { canonical: URL_PATH, languages: { 'en-GB': URL_PATH, 'x-default': URL_PATH } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: 'Gutter Cleaning Newtown Birmingham | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Newtown, Birmingham (B19). No ladders, vacuum system, before & after photos. From £50. Call WOW Gutters Ltd: 07421 433910.',
    url: URL_PATH, type: 'website', locale: 'en_GB', siteName: 'WOW Gutters Ltd',
    images: [{ url: 'https://wowgutters.co.uk/og/newtown.jpg', width: 1200, height: 630, alt: 'WOW Gutters Ltd — Gutter Cleaning Newtown Birmingham' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gutter Cleaning Newtown Birmingham | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Newtown B19. From £50. No ladders, before & after photos. Call WOW Gutters Ltd: 07421 433910.',
    images: ['https://wowgutters.co.uk/og/newtown.jpg'],
  },
}

export default function NewtownPage() {
  return (
    <>
      <LocalBusinessSchema
        city="Newtown"
        url={URL_PATH}
        priceFrom={50}
        priceTo={105}
        nearbyAreas={['Aston', 'Birmingham', 'Hockley', 'Ladywood', 'Winson Green']}
        geo={{ latitude: 52.495, longitude: -1.905 }}
        postcodes={['B19']}
        faqs={pageData.faqs}
      />
      <SuburbGutterCleaningPage data={pageData} />
    </>
  )
}
