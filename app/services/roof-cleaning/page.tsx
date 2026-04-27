import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import ServiceDetailPage from '@/components/services/ServiceDetailPage';
import { getServiceById } from '@/constants/servicesData';

export const metadata: Metadata = {
  title: 'Roof Cleaning & Moss Removal West Midlands | WOW Gutters',
  description:
    'Safe moss removal & roof cleaning across the West Midlands. Soft-wash technique protects your tiles. Long-lasting results. Book a free inspection today.',
  alternates: {
    canonical: 'https://wowgutters.co.uk/services/roof-cleaning/',
  },
};

export default function RoofCleaningPage() {
  const service = getServiceById('roof-cleaning');

  if (!service) {
    notFound();
  }

  return <ServiceDetailPage service={service} />;
}

