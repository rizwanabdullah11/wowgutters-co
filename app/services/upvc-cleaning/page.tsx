import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import ServiceDetailPage from '@/components/services/ServiceDetailPage';
import { getServiceById } from '@/constants/servicesData';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  absoluteTitle: 'Exterior uPVC Cleaning — Fascias, Soffits & Conservatories | WOW Gutters Ltd',
  description:
    'Professional uPVC cleaning for fascias, soffits, frames & conservatories using purified water for a bright, streak-free finish. Get a free quote today.',
  canonicalPath: '/services/upvc-cleaning/',
});

export default function UpvcCleaningPage() {
  const service = getServiceById('upvc-cleaning');

  if (!service) {
    notFound();
  }

  return <ServiceDetailPage service={service} />;
}

