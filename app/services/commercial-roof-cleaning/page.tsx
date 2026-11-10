import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import ServiceDetailPage from '@/components/services/ServiceDetailPage';
import { getServiceById } from '@/constants/servicesData';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  absoluteTitle: 'Commercial & Industrial Roof Cleaning | WOW Gutters Ltd',
  description:
    'Commercial and industrial roof cleaning for warehouses, factories, schools, offices and retail units across the West Midlands. RAMS supplied, fully insured.',
  canonicalPath: '/services/commercial-roof-cleaning/',
});

export default function CommercialRoofCleaningServicePage() {
  const service = getServiceById('commercial-roof-cleaning');

  if (!service) {
    notFound();
  }

  return <ServiceDetailPage service={service} />;
}
