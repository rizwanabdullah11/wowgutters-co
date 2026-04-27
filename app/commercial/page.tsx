'use client';
import { useEffect, useRef } from 'react';
import Head from 'next/head';
import { Button } from '@/components/ui/button';
import { colors } from '@/constants/colors';
import Link from 'next/link';
import WhatsAppContactSection from '@/components/sections/WhatsAppContactSection';
import ServiceSEOSection from '@/components/sections/ServiceSEOSection';

export default function CommercialPage() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log('Video autoplay failed:', error);
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Commercial Gutter Cleaning Services | WOW Gutters</title>
        <meta name="description" content="Professional commercial gutter cleaning for businesses, offices & commercial properties. Flexible scheduling, maintenance contracts & fully insured service." />
        <meta name="keywords" content="commercial gutter cleaning, business gutter services, office gutter cleaning, commercial property maintenance, commercial gutter maintenance contracts" />
        <meta property="og:title" content="Commercial Gutter Cleaning Services - WowGutters" />
        <meta property="og:description" content="Professional gutter maintenance for businesses with flexible scheduling and maintenance contracts." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://wowgutters.co.uk/commercial" />
      </Head>
      {/* Hero Section with Video Background */}
      <section className="relative overflow-hidden" style={{ height: '70vh', minHeight: '500px' }}>
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLVideoElement).style.display = 'none';
            }}
          >
            <source src="/dome-cleaning-video.mp4" type="video/mp4" />
          </video>
          {/* Gradient overlay for text readability */}
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(15, 23, 42, 0.75) 0%, rgba(15, 23, 42, 0.65) 50%, rgba(15, 23, 42, 0.85) 100%)' }}></div>
        </div>

        {/* Content - Centered Vertically */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: colors.white }}>
              🏢 Commercial Gutter Cleaning Services
            </h1>
            <p className="text-xl md:text-2xl mb-8" style={{ color: colors.white }}>
              Professional gutter maintenance for businesses, offices, and commercial properties
            </p>
            <Link href="/quote">
              <Button 
                className="px-8 py-4 text-lg font-semibold hover:scale-105 transition-transform"
                style={{ backgroundColor: colors.white, color: colors.primary }}
              >
                Get Commercial Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: colors.text }}>
            Commercial Gutter Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🏢',
                title: 'Office Buildings',
                description: 'Complete gutter maintenance for multi-story office complexes and business centers.'
              },
              {
                icon: '🏪',
                title: 'Retail Stores',
                description: 'Professional gutter cleaning for shopping centers, malls, and retail establishments.'
              },
              {
                icon: '🏭',
                title: 'Industrial Sites',
                description: 'Heavy-duty gutter cleaning for warehouses, factories, and industrial facilities.'
              },
              {
                icon: '🏨',
                title: 'Hotels & Restaurants',
                description: 'Hospitality gutter maintenance to protect your business and guests.'
              },
              {
                icon: '🏫',
                title: 'Schools & Institutions',
                description: 'Educational facility gutter services with flexible scheduling around operations.'
              },
              {
                icon: '🏥',
                title: 'Healthcare Facilities',
                description: 'Medical facility gutter maintenance with minimal disruption to operations.'
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3" style={{ color: colors.text }}>
                  {service.title}
                </h3>
                <p style={{ color: colors.textLight }}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16" style={{ backgroundColor: colors.lightGray }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: colors.text }}>
            Why Choose Our Commercial Services?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: '📋 Scheduled Maintenance',
                description: 'Regular maintenance programs tailored to your business needs and budget.'
              },
              {
                title: '🛡️ Fully Insured',
                description: 'Complete insurance coverage for commercial properties and liability protection.'
              },
              {
                title: '⏰ Flexible Scheduling',
                description: 'Work around your business hours to minimize disruption to operations.'
              },
              {
                title: '👥 Professional Team',
                description: 'Experienced commercial cleaning specialists with proper safety equipment.'
              },
              {
                title: '📊 Detailed Reports',
                description: 'Comprehensive service reports and maintenance recommendations for your records.'
              },
              {
                title: '💰 Competitive Pricing',
                description: 'Volume discounts and contract pricing for regular commercial clients.'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-bold mb-3" style={{ color: colors.text }}>
                  {feature.title}
                </h3>
                <p style={{ color: colors.textLight }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhatsAppContactSection
        title="Need commercial gutter services?"
        subtitle="Message us on WhatsApp"
        description="Get instant answers about our commercial gutter cleaning services. Our team is ready to help with quotes, scheduling, contract pricing, and any questions about maintaining your commercial property."
        questions={[
          'What are your commercial rates?',
          'Do you offer maintenance contracts?',
          'Can you work outside business hours?',
          'What properties do you service?',
        ]}
        backgroundImage="/gutter-cleaning.jpeg"
      />

      {/* Professional Insights Section - Text Left, Image Right */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Text Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-6" style={{ color: colors.text }}>
                Latest <span style={{ color: colors.primary }}>Insights & Updates</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Stay informed about commercial gutter maintenance best practices, industry insights, and expert 
                tips to protect your business property. Our blog provides valuable information on preventive 
                maintenance, seasonal care, and cost-saving strategies.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                From understanding the signs of gutter damage to learning about the latest cleaning technologies, 
                we share our expertise to help you make informed decisions about your commercial property maintenance 
                and long-term upkeep.
              </p>
              
              <div className="space-y-3 mb-8">
                {[
                  'Expert maintenance tips and guides',
                  'Seasonal gutter care advice',
                  'Cost-saving maintenance strategies',
                  'Industry news and updates',
                  'Case studies and success stories',
                  'Property protection insights'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div 
                      className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: colors.primary }}
                    >
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <Link href="/blog">
                <Button 
                  className="px-8 py-4 text-lg font-bold rounded-full hover:scale-105 transition-transform"
                  style={{ background: colors.primaryGradient, color: 'white' }}
                >
                  Read Our Blog
                </Button>
              </Link>
            </div>

            {/* Right - Single Large Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ minHeight: '400px' }}>
                <img 
                  src="/Blog.png" 
                  alt="Commercial Gutter Cleaning Blog - Latest Insights" 
                  className="w-full h-full object-cover"
                  style={{ minHeight: '400px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Service Section - Text Left, Image Right */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Text Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-6" style={{ color: colors.text }}>
                Professional <span style={{ color: colors.primary }}>Commercial Services</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our commercial gutter cleaning service is designed specifically for businesses, offering flexible 
                scheduling, comprehensive maintenance programs, and minimal disruption to your operations. We understand 
                the unique needs of commercial properties and deliver professional results every time.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                From office buildings to retail centers, we provide complete gutter maintenance solutions with 
                detailed reporting, emergency response options, and contract pricing for regular clients across 
                multiple local areas.
              </p>
              
              <div className="space-y-3 mb-8">
                {[
                  'Flexible scheduling around business hours',
                  'Comprehensive insurance coverage',
                  'Detailed service reports provided',
                  'Emergency response available',
                  'Contract pricing for regular clients',
                  'Minimal disruption to operations'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div 
                      className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: colors.primary }}
                    >
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <Link href="/quote">
                <Button 
                  className="px-8 py-4 text-lg font-bold rounded-full hover:scale-105 transition-transform"
                  style={{ background: colors.primaryGradient, color: 'white' }}
                >
                  Get Commercial Quote
                </Button>
              </Link>
            </div>

            {/* Right - Single Large Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ minHeight: '600px' }}>
                <img 
                  src="/professional-gutter-clean.png" 
                  alt="Professional Commercial Gutter Cleaning Service" 
                  className="w-full h-full object-cover"
                  style={{ minHeight: '600px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServiceSEOSection
        title="Professional Commercial"
        subtitle="Gutter Services"
        mainParagraph1="Commercial properties require specialized gutter maintenance to protect your investment and ensure business continuity. Blocked or damaged gutters can lead to water damage, structural issues, and costly repairs that disrupt your operations and impact your bottom line."
        mainParagraph2="Our commercial gutter cleaning service is designed specifically for businesses, with flexible scheduling, comprehensive insurance, and maintenance programs tailored to your property's needs. We work efficiently to minimize disruption while delivering thorough, professional results."
        processTitle="Our Commercial Service Includes:"
        processSteps={[
          { text: 'Site assessment and risk evaluation' },
          { text: 'Scheduled maintenance programs' },
          { text: 'High-reach equipment for multi-story buildings' },
          { text: 'Complete debris removal and disposal' },
          { text: 'Detailed service reports and documentation' },
          { text: 'Emergency response services available' }
        ]}
        problemsTitle="Commercial Properties We Service"
        problems={[
          { icon: '🏢', title: 'Office Buildings', desc: 'Multi-story offices and business centers' },
          { icon: '🏪', title: 'Retail Centers', desc: 'Shopping malls and retail establishments' },
          { icon: '🏭', title: 'Industrial Sites', desc: 'Warehouses, factories, and industrial facilities' },
          { icon: '🏨', title: 'Hospitality', desc: 'Hotels, restaurants, and entertainment venues' },
          { icon: '🏫', title: 'Institutions', desc: 'Schools, universities, and public buildings' },
          { icon: '🏥', title: 'Healthcare', desc: 'Hospitals, clinics, and medical facilities' }
        ]}
        highlightBoxTitle="Benefits of Commercial Maintenance Contracts"
        highlightBoxColor="blue"
        highlightBoxes={[
          { icon: '💰', title: 'Cost Savings', desc: 'Discounted rates and predictable maintenance costs' },
          { icon: '📅', title: 'Priority Scheduling', desc: 'Guaranteed service slots and emergency response' },
          { icon: '🛡️', title: 'Property Protection', desc: 'Prevent costly damage with regular maintenance' }
        ]}
        ctaTitle="Protect Your Commercial Investment"
        ctaDescription="Professional gutter maintenance keeps your property safe, your operations running smoothly, and your maintenance costs predictable. Contact us for a customized commercial service plan."
        ctaButtonText="Get Commercial Quote Now"
      />

      {/* CTA Section */}
      <section className="py-16" style={{ backgroundColor: colors.primary }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: colors.white }}>
            Ready to Protect Your Commercial Property?
          </h2>
          <p className="text-xl mb-8" style={{ color: colors.white }}>
            Get a free commercial gutter cleaning quote today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote">
              <Button 
                className="px-8 py-4 text-lg font-semibold"
                style={{ backgroundColor: colors.white, color: colors.primary }}
              >
                Get Free Quote
              </Button>
            </Link>
            <Link href="/contact">
              <Button 
                className="px-8 py-4 text-lg font-semibold border-2"
                style={{ 
                  backgroundColor: 'transparent', 
                  color: colors.white,
                  borderColor: colors.white
                }}
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}