import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import ServiceDetailPage from '@/components/services/ServiceDetailPage';
import { getServiceById } from '@/constants/servicesData';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Drain Cleaning',
  description:
    'Fast, effective drain clearing and unblocking services for homes and businesses across Birmingham and the West Midlands.',
  canonicalPath: '/services/drain-cleaning/',
});

export default function DrainCleaningPage() {
  const service = getServiceById('drain-cleaning');

  if (!service) {
    notFound();
  }

  return <ServiceDetailPage service={service} />;
}

