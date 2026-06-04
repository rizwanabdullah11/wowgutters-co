import type { Metadata } from 'next'
import type { CityGutterLandingData } from '@/constants/cityGutterLandingData'
import LocalBusinessSchema from '@/components/LocalBusinessSchema'
import CityGutterCleaningPage from '@/components/areas/CityGutterCleaningPage'
import { buildCitySchemaFaqs } from '@/lib/cityFaqs'

const URL_PATH = 'https://wowgutters.co.uk/gutter-cleaning-wolverhampton/'

const landingData: CityGutterLandingData = {
  slug: 'wolverhampton',
  city: 'Wolverhampton',
  titleTag: 'Gutter Cleaning Wolverhampton | WOW Gutters Ltd',
  metaDescription:
    'Professional gutter cleaning in Wolverhampton from £50. Ground-level vacuum, before & after photos, 1-year guarantee. Call: 07421 433910.',
  h1: 'Gutter Cleaning Wolverhampton — Expert Service Across the City',
  heroIntro:
    "WOW Gutters Ltd provides professional gutter cleaning across Wolverhampton and the surrounding areas, serving homeowners from Penn and Tettenhall to Wednesfield, Bilston and Willenhall. Wolverhampton's mix of Victorian terraced streets, post-war semis and newer developments all present different gutter challenges — and our team has the experience and equipment to handle all of them. We operate a ground-based high-reach vacuum system that cleans your gutters safely without ladders, reaching up to four storeys and leaving no mess behind.",
  whyTitle: 'Why Wolverhampton Gutters Need Regular Cleaning',
  whyBody: [
    'Wolverhampton experiences significant rainfall throughout the year — the town sits in a natural bowl formation that tends to channel weather systems across the area, making reliable drainage essential for every property. Autumn leaf fall from the mature trees lining residential streets in Penn, Tettenhall and Compton fills gutters quickly, and without regular cleaning, blockages develop that force water to overflow down external walls.',
    "Many of Wolverhampton's older properties — particularly the terraced streets in Bilston, Wednesfield and around the city centre — have older cast iron or early uPVC gutter systems that are more prone to debris build-up and joint failure. Our condition report after every clean flags any sections showing signs of wear, so you can address problems before they become expensive.",
  ],
  guarantees: [
    'Ground-level vacuum system — no ladders placed against your property',
    'Reaches up to 4 storeys — homes, flats and commercial buildings',
    'Before & after photos included as standard on every job',
    '1-year service guarantee — we return free if your gutters block within 12 months',
    'Fully insured — comprehensive public liability cover on every visit',
    '4.9★ rating from 2,696+ verified customer reviews',
  ],
  propertyTypesTitle: 'Gutter Cleaning for All Property Types in Wolverhampton',
  propertyTypes: [
    {
      label: 'Victorian terraced (Bilston, Wednesfield)',
      detail:
        'Older gutter systems, often neglected. We clear cast iron and uPVC gutters safely without ladder damage.',
    },
    {
      label: 'Post-war semis (Penn, Fordhouses)',
      detail: 'Standard uPVC runs. Leaf and moss build-up from garden trees is the most common issue.',
    },
    {
      label: 'Detached homes (Tettenhall, Compton)',
      detail:
        'Larger properties with longer gutter runs. Our vacuum reaches all sections including over garages and extensions.',
    },
    {
      label: 'New build estates (Wednesfield, Bushbury)',
      detail:
        'Modern guttering but debris still accumulates. Annual clean keeps systems in warranty condition.',
    },
    {
      label: 'Commercial properties (city centre, industrial)',
      detail: 'Offices, retail and industrial units. Planned maintenance contracts available.',
    },
  ],
  areasTitle: 'Areas We Cover Around Wolverhampton',
  areasInline:
    'Penn, Tettenhall, Compton, Finchfield | Wednesfield, Willenhall, Bilston, Bradley | Fordhouses, Bushbury, Low Hill | Nearby: Walsall, Dudley, West Bromwich, Telford',
  faqsTitle: 'FAQs — Gutter Cleaning Wolverhampton',
  faqs: [
    {
      question: 'How much does gutter cleaning cost in Wolverhampton?',
      answer: 'WOW Gutters provides fixed quotes for all properties. Get yours online at wowgutters.co.uk or call 07421 433910. No hidden fees.',
    },
    {
      question: 'Do you cover the Penn and Tettenhall areas?',
      answer:
        'Yes — we cover all areas including Penn, Tettenhall, Compton, Wednesfield, Bilston, Willenhall, Fordhouses and all surrounding postcodes.',
    },
    {
      question: 'How quickly can you get to Wolverhampton?',
      answer:
        'We aim to offer bookings within 2–5 working days. Same-day visits may be available — call 07421 433910 to check.',
    },
    {
      question: 'Do you clean gutters on commercial properties in Wolverhampton?',
      answer:
        'Yes. We provide commercial gutter cleaning for offices, retail premises, schools and landlords. Planned maintenance contracts available.',
    },
    {
      question: 'Is your service guaranteed?',
      answer:
        'Yes. Every gutter clean is fully guaranteed. If you have any concerns after your clean, contact us and we will return to resolve them.',
    },
  ],
  geo: { latitude: 52.5862, longitude: -2.1288 },
  internalLinks: [
    { label: 'Gutter cleaning Birmingham', href: '/gutter-cleaning-birmingham/' },
    { label: 'Gutter cleaning Walsall', href: '/gutter-cleaning-walsall/' },
    { label: 'Gutter cleaning Dudley', href: '/gutter-cleaning-dudley/' },
    { label: 'Roof cleaning', href: '/help/clean/' },
    { label: 'Professional gutter cleaning', href: '/help/unblock/' },
  ],
  ctaHeading: 'Book Your Gutter Clean in Wolverhampton \u201D Free Quote in 60 Seconds',
  priceTo: 130,
  nearbyAreas: ['Penn', 'Tettenhall', 'Wednesfield', 'Bilston', 'Willenhall', 'Fordhouses'],
  postcodes: ['WV1', 'WV2', 'WV3', 'WV4', 'WV5', 'WV6', 'WV7', 'WV8', 'WV9', 'WV10', 'WV11', 'WV12', 'WV13', 'WV14'],
}

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
    siteName: 'WOW Gutters',
    images: [
      {
        url: 'https://wowgutters.co.uk/og/default.jpg',
        width: 1200,
        height: 630,
        alt: 'WOW Gutters - Gutter Cleaning Wolverhampton',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: landingData.titleTag,
    description: landingData.metaDescription,
    images: ['https://wowgutters.co.uk/og/default.jpg'],
  },
}

const SCHEMA_FAQS = buildCitySchemaFaqs({
  city: 'Wolverhampton',
  slug: 'wolverhampton',
  priceFrom: 50,
  priceTo: 130,
  postcodes: ['WV1', 'WV2', 'WV3', 'WV4', 'WV5', 'WV6', 'WV7', 'WV8', 'WV9', 'WV10', 'WV11', 'WV12', 'WV13', 'WV14'],
  nearbyAreas: ['Penn', 'Tettenhall', 'Wednesfield', 'Bilston', 'Willenhall', 'Fordhouses'],
})

export default function WolverhamptonPage() {
  return (
    <>
      <LocalBusinessSchema
        city="Wolverhampton"
        url={URL_PATH}
        priceFrom={50}
        priceTo={130}
        nearbyAreas={['Penn', 'Tettenhall', 'Wednesfield', 'Bilston', 'Willenhall', 'Fordhouses']}
        geo={{ latitude: 52.5862, longitude: -2.1288 }}
        postcodes={['WV1', 'WV2', 'WV3', 'WV4', 'WV5', 'WV6', 'WV7', 'WV8', 'WV9', 'WV10', 'WV11', 'WV12', 'WV13', 'WV14']}
        faqs={SCHEMA_FAQS}
      />
      <CityGutterCleaningPage data={landingData} priceFrom={50} priceTo={130} />
    </>
  )
}
