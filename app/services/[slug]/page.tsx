import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ServiceDetailPage from '@/components/services/ServiceDetailPage';
import { servicesData, getServiceById } from '@/constants/servicesData';
import { buildMetadata } from '@/lib/seo';
import { SEO_KEYWORD_LINKS } from '@/constants/seoKeywordLinks';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.id,
  }));
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;
  const service = getServiceById(params.slug);

  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return buildMetadata({
    title: `Professional ${service.name} | WOW Gutters`,
    description: service.heroDescription,
    canonicalPath: `/services/${service.id}`,
    keywords: [
      ...SEO_KEYWORD_LINKS.map((k) => k.label),
      service.name,
      `${service.name} service`,
    ],
  });
}

export default async function ServicesSlugPage(props: PageProps) {
  const params = await props.params;
  const service = getServiceById(params.slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetailPage service={service} />;
}

