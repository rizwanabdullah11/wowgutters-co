import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { servicesData } from '@/constants/servicesData';
import { colors } from '@/constants/colors';
import TopPageAreaLinks from '@/components/seo/TopPageAreaLinks';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Gutter Cleaning Services',
  description:
    'Professional gutter cleaning, repairs, UPVC cleaning, roof cleaning, drain clearing and inspections across Birmingham and the West Midlands. View all WOW Gutters Ltd services.',
  canonicalPath: '/services/',
});

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-[#2563EB] text-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-lg sm:text-xl text-gray-300">Professional gutter solutions for every need</p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <h2 className="sr-only">Gutter and exterior cleaning services we offer</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.map((service) => (
            <Link 
              key={service.id}
              href={`/services/${service.id}`}
              className="bg-white rounded-lg shadow-lg p-6 sm:p-8 hover:shadow-xl transition-all hover:scale-105"
            >
              <div className="text-4xl sm:text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3">{service.name}</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 line-clamp-3">
                {service.heroDescription}
              </p>
              <div className="flex items-center gap-2" style={{ color: colors.primary }}>
                <span className="font-semibold">{service.name} — view service</span>
                <span aria-hidden="true">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <TopPageAreaLinks />

      {/* CTA Section */}
      <div className="bg-[#8DC63F] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-lg sm:text-xl text-white/90 mb-8">Contact us today for a free quote</p>
          <Button variant="secondary" className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4">
            📞 Call Now
          </Button>
        </div>
      </div>
    </div>
  );
}
