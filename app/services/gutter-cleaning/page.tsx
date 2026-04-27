import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import ServiceDetailPage from '@/components/services/ServiceDetailPage';
import { getServiceById } from '@/constants/servicesData';

export const metadata: Metadata = {
  title: 'Professional Gutter Cleaning Birmingham | From £45 | WOW Gutters',
  description:
    'Professional gutter cleaning using high-reach vacuum systems. Clears moss, leaves & blockages safely from the ground. Same-day available. Free quote today.',
  alternates: {
    canonical: 'https://wowgutters.co.uk/services/gutter-cleaning/',
  },
};

export default function GutterCleaningPage() {
  const service = getServiceById('gutter-cleaning');

  if (!service) {
    notFound();
  }

  return <ServiceDetailPage service={service} />;
}

