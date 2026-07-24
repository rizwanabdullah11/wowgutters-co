import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import ServiceDetailPage from '@/components/services/ServiceDetailPage';
import { getServiceById } from '@/constants/servicesData';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  absoluteTitle: 'Approved Gutter Cleaning Contractor Birmingham | WOW Gutters Ltd',
  description:
    'An approved gutter cleaning contractor serving Birmingham and the West Midlands. Fully insured, trusted, and recommended. Call 07421 433910.',
  canonicalPath: '/services/approved-gutter-cleaning-contractor/',
});

export default function ApprovedContractorPage() {
  const service = getServiceById('approved-gutter-cleaning-contractor');
  if (!service) notFound();
  return <ServiceDetailPage service={service} />;
}
