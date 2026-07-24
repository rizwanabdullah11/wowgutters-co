import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import ServiceDetailPage from '@/components/services/ServiceDetailPage';
import { getServiceById } from '@/constants/servicesData';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  absoluteTitle: 'Gutter Cleaning for Property Developers Birmingham | WOW Gutters Ltd',
  description:
    'Professional gutter cleaning for property developers. Snagging clearance, pre-handover cleaning, and new build gutter maintenance. Call 07421 433910.',
  canonicalPath: '/services/gutter-cleaning-for-property-developers/',
});

export default function GutterCleaningForDevelopersPage() {
  const service = getServiceById('gutter-cleaning-for-property-developers');
  if (!service) notFound();
  return <ServiceDetailPage service={service} />;
}
