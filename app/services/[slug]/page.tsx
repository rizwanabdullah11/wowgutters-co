import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ServiceDetailPage from '@/components/services/ServiceDetailPage';
import TopPageAreaLinks from '@/components/seo/TopPageAreaLinks';
import { servicesData, getServiceById } from '@/constants/servicesData';
import { buildMetadata } from '@/lib/seo';

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
      {params.slug !== 'gutter-cleaning' && params.slug !== 'gutter-repairs' && (
        <TopPageAreaLinks
          intro={`${service.name} across Birmingham and the West Midlands — choose your local area for pricing and booking.`}
        />
      )}
    </>
  );
}

