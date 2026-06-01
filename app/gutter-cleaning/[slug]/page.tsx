import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import LocalBusinessSchema from '@/components/LocalBusinessSchema'
import CityGutterCleaningPage from '@/components/areas/CityGutterCleaningPage'
import { CITIES_ARRAY, getCityBySlug } from '@/lib/cities'
import { getCityGutterLandingData, hasCityGutterLandingData } from '@/constants/cityGutterLandingData'
import { buildCitySchemaFaqs, isPrimaryCitySlug } from '@/lib/cityFaqs'

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

// Runs at BUILD time — pre-renders only cities with landing data
export async function generateStaticParams() {
  return CITIES_ARRAY
    .filter((city) => hasCityGutterLandingData(city.slug))
    .map((city) => ({ slug: city.slug }))
}

// Required for output: 'export' — no fallback fetching on Hostinger
export const dynamicParams = false

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const city = getCityBySlug(slug)
  
  if (!city) return {}
  
  const url = `https://wowgutters.co.uk/gutter-cleaning-${slug}/`
  const title = `Gutter Cleaning ${city.name} | WOW Gutters Ltd`
  const description = `Professional gutter cleaning in ${city.name} from £${city.priceFrom}. Ground-level vacuum system, before & after photos, 1-year guarantee. Call WOW Gutters: 07421 433910.`
  
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: { 'en-GB': url, 'x-default': url },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: 'WOW Gutters Ltd',
      locale: 'en_GB',
      type: 'website',
      images: [
        {
          url: 'https://wowgutters.co.uk/og/default.jpg',
          width: 1200,
          height: 630,
          alt: `WOW Gutters - Gutter Cleaning ${city.name}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['https://wowgutters.co.uk/og/default.jpg'],
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
  
  const url = `https://wowgutters.co.uk/gutter-cleaning-${slug}/`
  const priceFrom = city.priceFrom
  const priceTo = landingData.priceTo ?? city.priceTo ?? 140
  const schemaFaqs = isPrimaryCitySlug(slug)
    ? buildCitySchemaFaqs({
        city: landingData.city,
        slug,
        priceFrom,
        priceTo,
        postcodes: landingData.postcodes,
        nearbyAreas: landingData.nearbyAreas,
      })
    : landingData.faqs

  return (
    <>
      <LocalBusinessSchema
        city={landingData.city}
        url={url}
        priceFrom={priceFrom}
        priceTo={priceTo}
        nearbyAreas={landingData.nearbyAreas ?? []}
        geo={landingData.geo}
        postcodes={landingData.postcodes}
        faqs={schemaFaqs}
      />
      <CityGutterCleaningPage data={landingData} priceFrom={priceFrom} priceTo={priceTo} />
    </>
  )
}
