import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import ServiceDetailPage from '@/components/services/ServiceDetailPage';
import { getServiceById } from '@/constants/servicesData';

export const metadata: Metadata = {
  title: 'Exterior uPVC Cleaning — Fascias, Soffits & Conservatories | WOW Gutters',
  description:
    'Professional uPVC cleaning for fascias, soffits, frames & conservatories using purified water for a bright, streak-free finish. Get a free quote today.',
  alternates: {
    canonical: 'https://wowgutters.co.uk/services/upvc-cleaning/',
  },
};

export default function UpvcCleaningPage() {
  const service = getServiceById('upvc-cleaning');

  if (!service) {
    notFound();
  }

  return <ServiceDetailPage service={service} />;
}

