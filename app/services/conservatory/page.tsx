import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import ServiceDetailPage from '@/components/services/ServiceDetailPage';
import { getServiceById } from '@/constants/servicesData';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  absoluteTitle: 'Conservatory Cleaning Birmingham | Safe Gutter & Roof Clean | WOW Gutters Ltd',
  description:
    'Specialist conservatory cleaning — safe gutter clearing, roof panel treatment, and UPVC frame cleaning without climbing on glass. Get a free quote today.',
  canonicalPath: '/services/conservatory/',
});

export default function ConservatoryPage() {
  const service = getServiceById('conservatory');

  if (!service) {
    notFound();
  }

  return <ServiceDetailPage service={service} />;
}

