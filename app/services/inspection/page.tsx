import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import ServiceDetailPage from '@/components/services/ServiceDetailPage';
import { getServiceById } from '@/constants/servicesData';

export const metadata: Metadata = {
  title: 'Free Roof & Gutter Inspection Birmingham | WOW Gutters',
  description:
    'Free gutter & roof inspection in Birmingham — expert camera assessment, honest advice, no obligation. Same-day bookings available. Call 07421 433910.',
  alternates: {
    canonical: 'https://wowgutters.co.uk/services/inspection/',
  },
};

export default function InspectionPage() {
  const service = getServiceById('inspection');

  if (!service) {
    notFound();
  }

  return <ServiceDetailPage service={service} />;
}

