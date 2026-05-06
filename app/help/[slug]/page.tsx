import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import InspectionPage from '@/components/services/InspectionPage';
import UnblockPage from '@/components/services/UnblockPage';
import RepairPage from '@/components/services/RepairPage';
import CleanPage from '@/components/services/CleanPage';
import ServiceDetailPage from '@/components/services/ServiceDetailPage';
import { servicesData, getServiceById } from '@/constants/servicesData';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  // Four help boxes + direct service help URLs
  return [
    { slug: 'inspect' },
    { slug: 'unblock' },
    { slug: 'repair' },
    { slug: 'clean' },
    ...servicesData.map((service) => ({ slug: service.id })),
  ];
}

function mapHelpSlugToServiceId(slug: string): string | null {
  if (slug === 'unblock') return 'gutter-cleaning';
  if (slug === 'repair') return 'gutter-repairs';
  if (slug === 'clean') return 'roof-cleaning';
  // fall back to using slug directly as an id
  return slug;
}

export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {
  const { slug } = await params;
  
  if (slug === 'inspect') {
    return {
      title: 'Free Gutter Inspection Help | WOW Gutter Cleaning',
      description:
        'Get help booking a free gutter inspection and quote. Find out what we check and how the process works.',
      robots: {
        index: false,
        follow: false,
      },
    };
  }
  
  if (slug === 'unblock') {
    return {
      title: 'Gutter Cleaning & Unblocking Service | WOW Gutter Cleaning',
      description:
        'Professional gutter cleaning and unblocking to clear debris and keep rainwater flowing away from your home.',
    };
  }
  
  if (slug === 'repair') {
    return {
      title: 'Expert Gutter Repair Service | WOW Gutter Cleaning',
      description:
        'Expert gutter repair service to fix leaks, sagging and damage and protect your property from water problems.',
      robots: {
        index: false,
        follow: false,
      },
    };
  }
  
  if (slug === 'clean') {
    return {
      title: 'Roof & Exterior Cleaning Service | WOW Gutter Cleaning',
      description:
        'Specialist roof and exterior cleaning to remove moss, algae and dirt and keep your home looking its best.',
    };
  }

  const serviceId = mapHelpSlugToServiceId(slug);
  const service = serviceId ? getServiceById(serviceId) : undefined;

  if (!service) {
    return {
      title: 'Help | Service Not Found',
    };
  }

  return {
    title: `Help with ${service.name} | WOW Gutter Cleaning`,
    description: service.heroDescription,
  };
}

export default async function HelpSlugPage({ params }: PageProps) {
  const { slug } = await params;
  
  if (slug === 'inspect') {
    return <InspectionPage />;
  }
  
  if (slug === 'unblock') {
    return <UnblockPage />;
  }
  
  if (slug === 'repair') {
    return <RepairPage />;
  }
  
  if (slug === 'clean') {
    return <CleanPage />;
  }

  const serviceId = mapHelpSlugToServiceId(slug);
  const service = serviceId ? getServiceById(serviceId) : undefined;

  if (!service) {
    notFound();
  }

  return <ServiceDetailPage service={service} />;
}

