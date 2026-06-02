import type { Metadata } from 'next'
import LocalBusinessSchema from '@/components/LocalBusinessSchema'
import CityGutterCleaningPage from '@/components/areas/CityGutterCleaningPage'
import { buildAreaLandingFromSlug } from '@/lib/buildAreaLandingFromCity'
import { buildMetadata } from '@/lib/seo'
import { areaPath } from '@/lib/areaSlugs'

const SLUG = 'kings-heath'
const URL_PATH = `https://wowgutters.co.uk/gutter-cleaning-${SLUG}/`
const data = buildAreaLandingFromSlug(SLUG)!

export const metadata: Metadata = buildMetadata({
  absoluteTitle: 'Gutter Cleaning Kings Heath Birmingham | Professional, Safe & Guaranteed | WOW Gutters',
  description: 'Professional gutter cleaning in Kings Heath, Birmingham (B14). Victorian & Edwardian terraces, no ladders, vacuum system, before & after photos, 1-year guarantee. From £50. Call WOW Gutters: 07421 433910.',
  canonicalPath: areaPath(SLUG),
  ogImagePath: `/og/${SLUG}.jpg`,
})

export default function KingsHeathPage() {
  return (
    <>
      <LocalBusinessSchema
        city="Kings Heath"
        url={URL_PATH}
        priceFrom={50}
        priceTo={120}
        nearbyAreas={['Moseley', 'Hall Green', 'Stirchley', 'Birmingham', 'Yardley Wood']}
        geo={{ latitude: 52.4333, longitude: -1.8917 }}
        postcodes={['B14']}
        faqs={data.faqs}
      />
      <CityGutterCleaningPage data={data} priceFrom={50} priceTo={120} />
    </>
  )
}
