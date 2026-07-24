import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import ServiceDetailPage from '@/components/services/ServiceDetailPage';
import { getServiceById } from '@/constants/servicesData';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  absoluteTitle: 'Block Management Gutter Cleaning Birmingham | WOW Gutters Ltd',
  description:
    'Professional gutter cleaning for block management companies. Planned maintenance, compliance documentation, and single-invoice billing. Call 07421 433910.',
  canonicalPath: '/services/block-management-gutter-cleaning/',
});

export default function BlockManagementGutterCleaningPage() {
  const service = getServiceById('block-management-gutter-cleaning');
  if (!service) notFound();
  return <ServiceDetailPage service={service} />;
}
