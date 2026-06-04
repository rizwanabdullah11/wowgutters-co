import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import ServiceDetailPage from '@/components/services/ServiceDetailPage';
import { getServiceById } from '@/constants/servicesData';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  absoluteTitle: 'Water Butt Installation | WOW Gutter Cleaning',
  description:
    'Professional water butt installation to help you collect rainwater, save money and reduce your environmental impact.',
  canonicalPath: '/services/water-butt/',
});

export default function WaterButtPage() {
  const service = getServiceById('water-butt');

  if (!service) {
    notFound();
  }

  return <ServiceDetailPage service={service} />;
}

