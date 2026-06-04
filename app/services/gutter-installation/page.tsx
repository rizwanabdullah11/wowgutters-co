import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ServiceDetailPage from '@/components/services/ServiceDetailPage';
import { getServiceById } from '@/constants/servicesData';
import SchemaMarkup from '@/components/seo/SchemaMarkup';

import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  absoluteTitle: 'Gutter Installation — New uPVC Systems Fitted | WOW Gutters',
  description:
    'Professional uPVC gutter installation in Birmingham and the West Midlands. Free survey, fixed quote, 10-year warranty on parts. Call WOW Gutters: 07421 433910.',
  canonicalPath: '/services/gutter-installation/',
});

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Gutter Installation',
  serviceType: 'Gutter Installation',
  description:
    'New uPVC gutter and downpipe systems measured, supplied and fitted by WOW Gutters. Quality materials, professional finish, 10-year warranty on parts.',
  provider: {
    '@id': 'https://wowgutters.co.uk/#business',
  },
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'West Midlands',
  },
  offers: {
    '@type': 'Offer',
    priceRange: '£300–£1,500',
    priceCurrency: 'GBP',
  },
  url: 'https://wowgutters.co.uk/services/gutter-installation/',
};

export default function GutterInstallationPage() {
  const service = getServiceById('gutter-installation');

  if (!service) {
    notFound();
  }

  return (
    <>
      <SchemaMarkup id="gutter-installation-schema" data={serviceSchema} />
      <ServiceDetailPage service={service} />
    </>
  );
}
