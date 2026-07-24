import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import ServiceDetailPage from '@/components/services/ServiceDetailPage';
import { getServiceById } from '@/constants/servicesData';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  absoluteTitle: 'Commercial Fascia & Soffit Cleaning Birmingham | WOW Gutters Ltd',
  description:
    'Professional commercial fascia and soffit cleaning for offices, retail units, and industrial buildings. Hot water washing restores UPVC. Call 07421 433910.',
  canonicalPath: '/services/commercial-fascia-soffit-cleaning/',
});

export default function CommercialFasciaSoffitPage() {
  const service = getServiceById('commercial-fascia-soffit-cleaning');
  if (!service) notFound();
  return <ServiceDetailPage service={service} />;
}
