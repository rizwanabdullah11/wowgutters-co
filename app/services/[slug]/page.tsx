import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ServiceDetailPage from '@/components/services/ServiceDetailPage';
import LocalCoverageSection from '@/components/seo/LocalCoverageSection';
import { servicesData, getServiceById } from '@/constants/servicesData';
import { buildMetadata } from '@/lib/seo';

const FOCUSED_SERVICE_SLUGS = new Set([
  'gutter-cleaning',
  'gutter-repairs',
  'upvc-cleaning',
  'roof-cleaning',
  'gutter-inspection',
  'roof-inspection',
  'conservatory',
  'commercial-gutter-cleaning',
  'commercial-roof-cleaning',
]);

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

  if (service.id === 'gutter-cleaning') {
    return buildMetadata({
      absoluteTitle: 'Gutter Cleaning Service | No Ladders, From £100 | WOW Gutters Ltd',
      description:
        'Gutter cleaning from £100 (2-bed) and £110 (3-bed). Ground-based vacuum up to 4 storeys, no ladders, real before & after photos on every job. Fully insured. Call 07421 433910.',
      canonicalPath: `/services/${service.id}/`,
    });
  }

  return buildMetadata({
    title: `Professional ${service.name} | WOW Gutters Ltd`,
    description: service.heroDescription,
    canonicalPath: `/services/${service.id}/`,
  });
}

export default async function ServicesSlugPage(props: PageProps) {
  const params = await props.params;
  const service = getServiceById(params.slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <ServiceDetailPage service={service} />
      {(!FOCUSED_SERVICE_SLUGS.has(params.slug) || params.slug === 'gutter-cleaning') && (
        <LocalCoverageSection
          variant={params.slug === 'gutter-cleaning' ? 'gutter-cleaning' : 'service'}
          serviceName={service.name}
          slug={params.slug}
        />
      )}
    </>
  );
}

