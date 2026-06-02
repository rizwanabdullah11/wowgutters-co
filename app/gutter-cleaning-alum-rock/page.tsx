import type { Metadata } from 'next'
import LocalBusinessSchema from '@/components/LocalBusinessSchema'
import SuburbGutterCleaningPage from '@/components/areas/SuburbGutterCleaningPage'
import { suburbPages } from '@/lib/suburbPageData'

const URL_PATH = 'https://wowgutters.co.uk/gutter-cleaning-alum-rock/'
const pageData = suburbPages['alum-rock']

export const metadata: Metadata = {
  title: 'Gutter Cleaning Alum Rock Birmingham | WOW Gutters Ltd',
  description: 'Professional gutter cleaning in Alum Rock, Birmingham (B8). Victorian & post-war terraces, no ladders, vacuum system, before & after photos. From £50. Call: 07421 433910.',
  alternates: { canonical: URL_PATH, languages: { 'en-GB': URL_PATH, 'x-default': URL_PATH } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: 'Gutter Cleaning Alum Rock Birmingham | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Alum Rock, Birmingham (B8). No ladders, vacuum system, before & after photos. From £50. Call WOW Gutters: 07421 433910.',
    url: URL_PATH, type: 'website', locale: 'en_GB', siteName: 'WOW Gutters',
    images: [{ url: 'https://wowgutters.co.uk/og/alum-rock.jpg', width: 1200, height: 630, alt: 'WOW Gutters — Gutter Cleaning Alum Rock Birmingham' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gutter Cleaning Alum Rock Birmingham | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Alum Rock B8. From £50. No ladders, before & after photos. Call WOW Gutters: 07421 433910.',
    images: ['https://wowgutters.co.uk/og/alum-rock.jpg'],
  },
}

export default function AlumRockPage() {
  return (
    <>
      <LocalBusinessSchema
        city="Alum Rock"
        url={URL_PATH}
        priceFrom={50}
        priceTo={105}
        nearbyAreas={['Washwood Heath', 'Ward End', 'Saltley', 'Birmingham', 'Stechford']}
        geo={{ latitude: 52.485, longitude: -1.85 }}
        postcodes={['B8']}
        faqs={pageData.faqs}
      />
      <SuburbGutterCleaningPage data={pageData} />
    </>
  )
}
