import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import ServiceDetailPage from '@/components/services/ServiceDetailPage';
import { getServiceById } from '@/constants/servicesData';

export const metadata: Metadata = {
  title: 'Conservatory Gutter Cleaning | Safe, Ladder-Free | WOW Gutters',
  description:
    'Specialist conservatory gutter cleaning & replacement — safe, ladder-free access and watertight results. Get a free quote today.',
};

export default function ConservatoryPage() {
  const service = getServiceById('conservatory');

  if (!service) {
    notFound();
  }

  return <ServiceDetailPage service={service} />;
}

