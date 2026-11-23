import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import ServiceDetailPage from '@/components/services/ServiceDetailPage';
import { getServiceById } from '@/constants/servicesData';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  absoluteTitle: 'Commercial Gutter Cleaning Birmingham | WOW Gutters Ltd',
  description:
    'Commercial gutter cleaning in Birmingham & the West Midlands for offices, warehouses, schools and retail. Free site survey, fixed quote, fully insured.',
  canonicalPath: '/services/commercial-gutter-cleaning/',
});

export default function CommercialGutterCleaningServicePage() {
  const service = getServiceById('commercial-gutter-cleaning');

  if (!service) {
    notFound();
  }

  return <ServiceDetailPage service={service} />;
}
