import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import ServiceDetailPage from '@/components/services/ServiceDetailPage';
import { getServiceById } from '@/constants/servicesData';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  absoluteTitle: 'Gutter Cleaning for Landlords Birmingham | WOW Gutters Ltd',
  description:
    'Professional gutter cleaning for landlords. Meet your legal obligations with documented evidence. Portfolio discounts available across Birmingham. Call 07421 433910.',
  canonicalPath: '/services/gutter-cleaning-for-landlords/',
});

export default function GutterCleaningForLandlordsPage() {
  const service = getServiceById('gutter-cleaning-for-landlords');
  if (!service) notFound();
  return <ServiceDetailPage service={service} />;
}
