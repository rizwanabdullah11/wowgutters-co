import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import ServiceDetailPage from '@/components/services/ServiceDetailPage';
import { getServiceById } from '@/constants/servicesData';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  absoluteTitle: 'Conservatory Gutter Cleaning | Safe, Ladder-Free | WOW Gutters',
  description:
    'Specialist conservatory gutter cleaning & replacement — safe, ladder-free access and watertight results. Get a free quote today.',
  canonicalPath: '/services/conservatory/',
});

export default function ConservatoryPage() {
  const service = getServiceById('conservatory');

  if (!service) {
    notFound();
  }

  return <ServiceDetailPage service={service} />;
}

