import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import ServiceDetailPage from '@/components/services/ServiceDetailPage';
import { getServiceById } from '@/constants/servicesData';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  absoluteTitle: 'Gutter Cleaning for Facilities Managers Birmingham | WOW Gutters Ltd',
  description:
    'Professional gutter cleaning for facilities managers. Reliable maintenance, compliance documentation, and multi-site management. Call 07421 433910.',
  canonicalPath: '/services/gutter-cleaning-for-facilities-managers/',
});

export default function GutterCleaningForFMsPage() {
  const service = getServiceById('gutter-cleaning-for-facilities-managers');
  if (!service) notFound();
  return <ServiceDetailPage service={service} />;
}
