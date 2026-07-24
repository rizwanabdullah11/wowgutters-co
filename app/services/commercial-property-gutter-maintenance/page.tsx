import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import ServiceDetailPage from '@/components/services/ServiceDetailPage';
import { getServiceById } from '@/constants/servicesData';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  absoluteTitle: 'Commercial Property Gutter Maintenance Birmingham | WOW Gutters Ltd',
  description:
    'Planned gutter maintenance programmes for commercial properties. Scheduled cleaning, inspection, and repairs for offices, retail, and industrial premises. Call 07421 433910.',
  canonicalPath: '/services/commercial-property-gutter-maintenance/',
});

export default function CommercialPropertyGutterMaintenancePage() {
  const service = getServiceById('commercial-property-gutter-maintenance');
  if (!service) notFound();
  return <ServiceDetailPage service={service} />;
}
