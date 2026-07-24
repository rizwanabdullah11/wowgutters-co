import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import ServiceDetailPage from '@/components/services/ServiceDetailPage';
import { getServiceById } from '@/constants/servicesData';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  absoluteTitle: 'Gutter Cleaning Contracts Birmingham | WOW Gutters Ltd',
  description:
    'Reliable gutter cleaning contracts for commercial and residential properties. Fixed annual pricing, scheduled visits, and comprehensive documentation. Call 07421 433910.',
  canonicalPath: '/services/gutter-cleaning-contracts/',
});

export default function GutterCleaningContractsPage() {
  const service = getServiceById('gutter-cleaning-contracts');
  if (!service) notFound();
  return <ServiceDetailPage service={service} />;
}
