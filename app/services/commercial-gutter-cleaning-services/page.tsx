import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import ServiceDetailPage from '@/components/services/ServiceDetailPage';
import { getServiceById } from '@/constants/servicesData';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  absoluteTitle: 'Commercial Gutter Cleaning Services Birmingham | WOW Gutters Ltd',
  description:
    'Comprehensive commercial gutter cleaning services. Gutter clearance, maintenance, and inspection for offices, warehouses, retail, and industrial premises. Call 07421 433910.',
  canonicalPath: '/services/commercial-gutter-cleaning-services/',
});

export default function CommercialGutterCleaningServicesPage() {
  const service = getServiceById('commercial-gutter-cleaning-services');
  if (!service) notFound();
  return <ServiceDetailPage service={service} />;
}
