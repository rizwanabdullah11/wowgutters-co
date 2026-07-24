import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import ServiceDetailPage from '@/components/services/ServiceDetailPage';
import { getServiceById } from '@/constants/servicesData';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  absoluteTitle: 'Gutter Cleaning for Multiple Sites Birmingham | WOW Gutters Ltd',
  description:
    'Professional gutter cleaning for multiple sites. Coordinated maintenance for businesses with several locations across the West Midlands. Call 07421 433910.',
  canonicalPath: '/services/gutter-cleaning-for-multiple-sites/',
});

export default function MultiSiteGutterCleaningPage() {
  const service = getServiceById('gutter-cleaning-for-multiple-sites');
  if (!service) notFound();
  return <ServiceDetailPage service={service} />;
}
