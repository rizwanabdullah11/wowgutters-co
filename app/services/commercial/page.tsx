import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import ServiceDetailPage from '@/components/services/ServiceDetailPage';
import { getServiceById } from '@/constants/servicesData';

export const metadata: Metadata = {
  title: 'Commercial Gutter Cleaning West Midlands | Businesses & Offices | WOW Gutters',
  description:
    'Commercial gutter cleaning for offices, retail & industrial sites in the West Midlands. Flexible scheduling, fully insured, competitive rates. Get a quote.',
};

export default function CommercialPage() {
  const service = getServiceById('commercial');

  if (!service) {
    notFound();
  }

  return <ServiceDetailPage service={service} />;
}

