import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import InspectionPage from '@/components/services/InspectionPage';
import UnblockPage from '@/components/services/UnblockPage';
import RepairPage from '@/components/services/RepairPage';
import CleanPage from '@/components/services/CleanPage';

interface PageProps {
  params: Promise<{ slug: string }>;
}

const HELP_ACTION_SLUGS = ['inspect', 'unblock', 'repair', 'clean'] as const;

export function generateStaticParams() {
  return HELP_ACTION_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {
  const { slug } = await params;
  const canonicalUrl = `https://wowgutters.co.uk/help/${slug}`;
  
  if (slug === 'inspect') {
    return {
      title: 'Free Gutter Inspection Help | WOW Gutter Cleaning',
      description:
        'Get help booking a free gutter inspection and quote. Find out what we check and how the process works.',
      alternates: {
        canonical: canonicalUrl,
      },
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
      alternates: {
        canonical: canonicalUrl,
      },
    };
  }
  
  if (slug === 'repair') {
    return {
      title: 'Expert Gutter Repair Service | WOW Gutter Cleaning',
      description:
        'Expert gutter repair service to fix leaks, sagging and damage and protect your property from water problems.',
      alternates: {
        canonical: canonicalUrl,
      },
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
      alternates: {
        canonical: canonicalUrl,
      },
    };
  }

  return {
    title: 'Help | Page Not Found',
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

  notFound();
}

