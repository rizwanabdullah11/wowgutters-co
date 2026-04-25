import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import ServiceDetailPage from '@/components/services/ServiceDetailPage';
import { getServiceById } from '@/constants/servicesData';

export const metadata: Metadata = {
  title: 'Water Butt Installation | WOW Gutter Cleaning',
  description:
    'Professional water butt installation to help you collect rainwater, save money and reduce your environmental impact.',
};

export default function WaterButtPage() {
  const service = getServiceById('water-butt');

  if (!service) {
    notFound();
  }

  return <ServiceDetailPage service={service} />;
}

