import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import ServiceDetailPage from '@/components/services/ServiceDetailPage';
import { getServiceById } from '@/constants/servicesData';

export const metadata: Metadata = {
  title: 'Gutter Repairs — Same Day, 6-Month Guarantee | WOW Gutters',
  description:
    'Reliable gutter repairs — leaking joints, broken brackets, sagging gutters fixed fast. 6-month guarantee. Stocked vans, no delays. Call now.',
  alternates: {
    canonical: 'https://wowgutters.co.uk/services/gutter-repairs/',
  },
};

export default function GutterRepairsPage() {
  const service = getServiceById('gutter-repairs');

  if (!service) {
    notFound();
  }

  return <ServiceDetailPage service={service} />;
}

