import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import ServiceDetailPage from '@/components/services/ServiceDetailPage';
import { getServiceById } from '@/constants/servicesData';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  absoluteTitle: 'Free Roof Inspection Birmingham | WOW Gutters Ltd',
  description:
    'Book a free roof inspection across Birmingham and the West Midlands. Tiles, flashing, moss and ridge assessment with photos and honest advice. No obligation. Call 07421 433910.',
  canonicalPath: '/services/roof-inspection/',
});

export default function RoofInspectionServicePage() {
  const service = getServiceById('roof-inspection');

  if (!service) {
    notFound();
  }

  return <ServiceDetailPage service={service} />;
}
