import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import ServiceDetailPage from '@/components/services/ServiceDetailPage';
import { getServiceById } from '@/constants/servicesData';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  absoluteTitle: 'Commercial Roof Cleaning Birmingham & West Midlands | WOW Gutters Ltd',
  description:
    'Commercial and industrial roof cleaning in Birmingham & the West Midlands — warehouses, offices, schools and retail units. Soft-wash moss removal, photo reports, fully insured. Call 07421 433910.',
  canonicalPath: '/services/commercial-roof-cleaning/',
});

export default function CommercialRoofCleaningServicePage() {
  const service = getServiceById('commercial-roof-cleaning');

  if (!service) {
    notFound();
  }

  return <ServiceDetailPage service={service} />;
}
