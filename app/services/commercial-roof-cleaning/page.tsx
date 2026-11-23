import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import ServiceDetailPage from '@/components/services/ServiceDetailPage';
import { getServiceById } from '@/constants/servicesData';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  absoluteTitle: 'Commercial Roof Cleaning Birmingham | WOW Gutters Ltd',
  description:
    'Commercial roof cleaning across Birmingham & the West Midlands: warehouses, factories, schools, offices. Free survey, fixed written quote, RAMS, fully insured.',
  canonicalPath: '/services/commercial-roof-cleaning/',
});

export default function CommercialRoofCleaningServicePage() {
  const service = getServiceById('commercial-roof-cleaning');

  if (!service) {
    notFound();
  }

  return <ServiceDetailPage service={service} />;
}
