import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import CityGutterPageSchema from '@/components/areas/CityGutterPageSchema'
import CityGutterCleaningPage from '@/components/areas/CityGutterCleaningPage'
import { CITIES_ARRAY, getCityBySlug } from '@/lib/cities'
import { getCityGutterLandingData } from '@/constants/cityGutterLandingData'

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

// Runs at BUILD time — pre-renders every city page
export async function generateStaticParams() {
  return CITIES_ARRAY.map((city) => ({ slug: city.slug }))
}

// Required for output: 'export' — no fallback fetching on Hostinger
export const dynamicParams = false

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const city = getCityBySlug(slug)
  
  if (!city) return {}
  
  const url = `https://wowgutters.co.uk/gutter-cleaning-${slug}/`
  
  return {
    title: `Gutter Cleaning ${city.name} | WOW Gutters Ltd`,
    description: `Professional gutter cleaning in ${city.name} from £${city.priceFrom}. Ground-level vacuum system, before & after photos, 1-year guarantee. Call WOW Gutters: 07421 433910.`,
    alternates: {
      canonical: url,
      languages: { 'en-GB': url, 'x-default': url },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
  }
}

export default async function CityPage({ params }: PageProps) {
  const { slug } = await params
  const city = getCityBySlug(slug)
  
  if (!city) notFound()
  
  // Get the landing page data for this city
  const landingData = getCityGutterLandingData(slug)
  
  if (!landingData) notFound()
  
  return (
    <>
      <CityGutterPageSchema slug={slug} />
      <CityGutterCleaningPage data={landingData} />
    </>
  )
}
