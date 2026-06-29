import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import ServiceDetailPage from '@/components/services/ServiceDetailPage';
import { getServiceById } from '@/constants/servicesData';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  absoluteTitle: 'Commercial Gutter Cleaning Birmingham | WOW Gutters Ltd',
  description:
    'Professional commercial gutter cleaning for offices, warehouses, schools and retail units. Flexible scheduling, maintenance contracts, fully insured. Call 07421 433910.',
  canonicalPath: '/services/commercial-gutter-cleaning/',
});

export default function CommercialGutterCleaningServicePage() {
  const service = getServiceById('commercial-gutter-cleaning');

  if (!service) {
    notFound();
  }

  return <ServiceDetailPage service={service} />;
}
