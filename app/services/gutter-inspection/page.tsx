import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import ServiceDetailPage from '@/components/services/ServiceDetailPage';
import { getServiceById } from '@/constants/servicesData';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  absoluteTitle: 'Free Gutter Inspection Birmingham | WOW Gutters Ltd',
  description:
    'Book a free gutter inspection across Birmingham and the West Midlands. Expert assessment of gutters, downpipes, joints and fascia — honest advice, no obligation. Call 07421 433910.',
  canonicalPath: '/services/gutter-inspection/',
});

export default function GutterInspectionServicePage() {
  const service = getServiceById('gutter-inspection');

  if (!service) {
    notFound();
  }

  return <ServiceDetailPage service={service} />;
}
