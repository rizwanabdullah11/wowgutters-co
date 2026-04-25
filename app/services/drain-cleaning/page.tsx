import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import ServiceDetailPage from '@/components/services/ServiceDetailPage';
import { getServiceById } from '@/constants/servicesData';

export const metadata: Metadata = {
  title: 'WOW Gutter Cleaning',
  description:
    'Fast, effective unblocking services for homes and businesses.',
};

export default function DrainCleaningPage() {
  const service = getServiceById('drain-cleaning');

  if (!service) {
    notFound();
  }

  return <ServiceDetailPage service={service} />;
}

