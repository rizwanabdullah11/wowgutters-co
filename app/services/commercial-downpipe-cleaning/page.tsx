import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import ServiceDetailPage from '@/components/services/ServiceDetailPage';
import { getServiceById } from '@/constants/servicesData';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  absoluteTitle: 'Commercial Downpipe Cleaning Birmingham | WOW Gutters Ltd',
  description:
    'Professional commercial downpipe cleaning for offices, warehouses, schools and retail units. Blocked downpipes cleared, flow restored. Call 07421 433910.',
  canonicalPath: '/services/commercial-downpipe-cleaning/',
});

export default function CommercialDownpipeCleaningPage() {
  const service = getServiceById('commercial-downpipe-cleaning');
  if (!service) notFound();
  return <ServiceDetailPage service={service} />;
}
