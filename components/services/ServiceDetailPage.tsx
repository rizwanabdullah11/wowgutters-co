'use client';

import { useEffect, useRef } from 'react';
import Head from 'next/head';
import { colors } from '@/constants/colors';
import Link from 'next/link';
import { ShieldCheck, PenTool, CheckCircle, Phone } from 'lucide-react';
import { ServiceDetail } from '@/constants/servicesData';
import SeoLinkify from '@/components/SeoLinkify';
import AreaServiceBlock from '@/components/areas/AreaServiceBlock';
import AreaFAQ from '@/components/areas/AreaFAQ';
import AreaFacts from '@/components/areas/AreaFacts';
import AreaBlogSnippet from '@/components/areas/AreaBlogSnippet';
import AreaRecentWork from '@/components/areas/AreaRecentWork';
import AreaReviews from '@/components/areas/AreaReviews';
import AreaContactMap from '@/components/areas/AreaContactMap';
import AreaFeatures from '@/components/areas/AreaFeatures';
import SchemaMarkup from '@/components/seo/SchemaMarkup';

interface ServiceDetailPageProps {
  service: ServiceDetail;
}

const FOCUSED_SERVICE_IDS = new Set(['gutter-cleaning', 'gutter-repairs']);

const GUTTER_CLEANING_RELATED_LINKS = [
  { label: 'Gutter inspection', href: '/services/gutter-inspection/' },
  { label: 'Gutter repairs', href: '/services/gutter-repairs/' },
  { label: 'Roof cleaning', href: '/services/roof-cleaning/' },
  { label: 'UPVC & fascia cleaning', href: '/services/upvc-cleaning/' },
  { label: 'Commercial gutter cleaning', href: '/services/commercial-gutter-cleaning/' },
  { label: 'Hot wash cleaning', href: '/services/hot-wash-cleaning/' },
  { label: 'Downpipe unblocking', href: '/help/unblock/' },
  { label: 'Gutter cleaning prices', href: '/gutter-cleaning-prices/' },
  { label: 'Free quote', href: '/quote/' },
  { label: 'Gutter cleaning in Birmingham', href: '/gutter-cleaning-birmingham/' },
  { label: 'Gutter cleaning near me', href: '/gutter-cleaning-near-me/' },
  { label: 'Signs of blocked gutters', href: '/blog/signs-of-blocked-gutters-birmingham/' },
  { label: 'All services', href: '/services/' },
] as const;

const GUTTER_REPAIRS_RELATED_LINKS = [
  { label: 'Gutter cleaning', href: '/services/gutter-cleaning/' },
  { label: 'Gutter inspection', href: '/services/gutter-inspection/' },
  { label: 'Gutter installation', href: '/services/gutter-installation/' },
  { label: 'UPVC & fascia cleaning', href: '/services/upvc-cleaning/' },
  { label: 'Roof cleaning', href: '/services/roof-cleaning/' },
  { label: 'Repairs guide', href: '/blog/gutter-repairs-guide/' },
  { label: 'DIY repair risks', href: '/blog/diy-gutter-repair-dangers/' },
  { label: 'Gutter cleaning Birmingham', href: '/gutter-cleaning-birmingham/' },
  { label: 'Free quote', href: '/quote/' },
  { label: 'All services', href: '/services/' },
] as const;

function ServiceText({ serviceId, text }: { serviceId: string; text: string }) {
  if (FOCUSED_SERVICE_IDS.has(serviceId)) {
    return <SeoLinkify text={text} />;
  }
  return <>{text}</>;
}

export default function ServiceDetailPage({ service }: ServiceDetailPageProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log('Video autoplay failed:', error);
      });
    }
  }, []);

  const whatsappQuestions = [
    `How much is ${service.name.toLowerCase()} for my property?`,
    'Can you help with my gutter problem?',
    'Do you have availability this week?',
    'Could I get a fast quote for my home?',
  ];
  const whatsappBaseUrl = 'https://wa.me/447421433910';

  return (
    <main className="bg-white service-page-wrapper">
      <SchemaMarkup
        id={`schema-service-${service.id}`}
        data={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'LocalBusiness',
              '@id': 'https://wowgutters.co.uk/#business',
              name: 'WOW Gutters Ltd',
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.9',
                reviewCount: '2696',
                bestRating: '5',
                worstRating: '1',
              },
            },
            {
              '@type': 'Service',
              name: service.name,
              provider: {
                '@type': 'LocalBusiness',
                name: 'WOW Gutters Ltd',
                '@id': 'https://wowgutters.co.uk/#business',
              },
              areaServed: {
                '@type': 'State',
                name: 'West Midlands',
              },
              description: service.heroDescription,
              url: `https://wowgutters.co.uk/services/${service.id}`,
              serviceType: service.name,
              availableChannel: {
                '@type': 'ServiceChannel',
                serviceUrl: `https://wowgutters.co.uk/services/${service.id}`,
                servicePhone: {
                  '@type': 'ContactPoint',
                  telephone: '+447421433910',
                  contactType: 'customer service',
                },
              },
            },
            {
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'How often should gutters be cleaned?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Gutters should be cleaned at least twice a year, typically in the spring and autumn. However, if you have overhanging trees or frequent storms, more frequent cleaning may be necessary.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Why is gutter cleaning important?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Clogged gutters can lead to water damage, roof leaks, foundation issues, and even pest infestations. Regular cleaning helps prevent costly repairs.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'What are the signs that my gutters need cleaning?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Overflowing water, sagging gutters, visible plant growth, or water stains on your walls are all indicators your gutters are blocked.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Can I clean my gutters myself?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'While it\'s possible, professional gutter cleaning ensures thorough removal of debris, safe access to hard-to-reach areas, and early detection of damage.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How much does gutter cleaning cost?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Costs vary based on the property size, gutter condition, and accessibility, but typical residential cleanings range from £50–£150.',
                  },
                },
              ],
            },
            {
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Home',
                  item: 'https://wowgutters.co.uk/',
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: 'Services',
                  item: 'https://wowgutters.co.uk/services/',
                },
                {
                  '@type': 'ListItem',
                  position: 3,
                  name: service.name,
                  item: `https://wowgutters.co.uk/services/${service.id}`,
                },
              ],
            },
          ],
        }}
      />
      <Head>
        <title>Professional {service.name} | WOW Gutters Ltd</title>
        <meta name="description" content={`Professional ${service.name.toLowerCase()} with WOW Gutters Ltd. ${service.heroDescription.substring(0, 150)}...`} />
        <meta property="og:title" content={`${service.name} Services - WowGutters`} />
        <meta property="og:description" content={service.heroDescription.substring(0, 160)} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={`https://wowgutters.co.uk/services/${service.id}`} />
      </Head>
      {/* Premium Hero Section */}
      <section className="service-hero-section">
        {/* Video Background */}
        <div className="hero-video-wrapper">
          {service.heroVideo && (
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              poster={service.heroImage}
              className="hero-video"
              onError={(e) => {
                (e.target as HTMLVideoElement).style.display = 'none';
              }}
            >
              <source src={service.heroVideo} type="video/mp4" />
            </video>
          )}
          <div className="service-hero-overlay"></div>
        </div>

        <div className="service-hero-content">
          <div className="hero-badge animate-fade-in-up">
            <ShieldCheck className="w-4 h-4" style={{ color: colors.primary }} />
            <span className="hero-badge-text">Professional Service • Same-Day Booking</span>
          </div>

          <h1 className="hero-title animate-fade-in-up delay-100">
            {service.heroTitle}
          </h1>

          <p className="hero-subtitle animate-fade-in-up delay-200">
            {service.heroDescription}
          </p>

          <div className="hero-cta-row animate-fade-in-up delay-300">
            <Link href="/quote" className="hero-primary-btn-link hero-primary-btn">
              <span className="btn-arrow">&#9658;</span>
              <span className="btn-label">
                Click For A <span className="btn-free">FREE</span> Quote
              </span>
            </Link>
          </div>
        </div>

        {/* Decorative Bottom Wave */}
        <div className="hero-wave-bottom">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,60 C480,0 960,0 1440,60 L1440,60 L0,60 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* Intro & quote */}
      <section className="py-16 md:py-20 px-4 relative bg-gradient-to-b from-[#f8fafc] to-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-start relative z-10">
          <div className="flex-1 text-[#0f172a]">
            <p className="text-xs font-bold uppercase tracking-[0.2em] mb-3" style={{ color: colors.primary }}>
              WOW Gutters Ltd
            </p>
            <h2 className="text-3xl md:text-4xl font-black mb-6 leading-tight text-slate-900">
              {service.id === 'gutter-cleaning'
                ? 'Get your free gutter cleaning quote'
                : service.id === 'gutter-repairs'
                  ? 'Get your free gutter repair quote'
                  : `${service.name} by WOW Gutters Ltd`}
            </h2>
            <p className="text-slate-600 leading-relaxed text-lg mb-8">
              {FOCUSED_SERVICE_IDS.has(service.id) ? (
                <>
                  Same-day and next-day appointments where available. Call{' '}
                  <a
                    href={`tel:${service.ctaSection.phone.replace(/\s/g, '')}`}
                    className="font-semibold underline underline-offset-2"
                    style={{ color: colors.primary }}
                  >
                    {service.ctaSection.phone}
                  </a>{' '}
                  or complete the form — we will confirm your price before we start.
                </>
              ) : (
                <ServiceText serviceId={service.id} text={service.heroDescription} />
              )}
            </p>
            {service.id === 'gutter-cleaning' && (
              <p className="text-slate-600 leading-relaxed text-lg mb-8">
                Looking for local pricing and postcodes? See{' '}
                <Link href="/gutter-cleaning-birmingham/" className="font-semibold underline underline-offset-2" style={{ color: colors.primary }}>
                  gutter cleaning in Birmingham
                </Link>
                ,{' '}
                <Link href="/gutter-cleaning-near-me/" className="font-semibold underline underline-offset-2" style={{ color: colors.primary }}>
                  gutter cleaning near me
                </Link>
                , or browse our{' '}
                <Link href="/services/" className="font-semibold underline underline-offset-2" style={{ color: colors.primary }}>
                  full services range
                </Link>
                .
              </p>
            )}
            {service.id === 'gutter-repairs' && (
              <p className="text-slate-600 leading-relaxed text-lg mb-8">
                Not sure if you need a repair or a clean? Read our{' '}
                <Link href="/blog/gutter-repairs-guide/" className="font-semibold underline underline-offset-2" style={{ color: colors.primary }}>
                  gutter repairs guide
                </Link>
                , book a{' '}
                <Link href="/services/gutter-inspection/" className="font-semibold underline underline-offset-2" style={{ color: colors.primary }}>
                  free gutter inspection
                </Link>
                , or browse our{' '}
                <Link href="/services/" className="font-semibold underline underline-offset-2" style={{ color: colors.primary }}>
                  full services range
                </Link>
                .
              </p>
            )}
            <div className="p-6 rounded-xl bg-[#f1f5f9] border border-slate-200">
              <p className="text-slate-800 font-semibold flex items-center gap-3 text-lg mb-3">
                <Phone className="w-5 h-5 shrink-0" style={{ color: colors.primary }} />
                Call us directly
              </p>
              <a
                href={`tel:${service.ctaSection.phone.replace(/\s/g, '')}`}
                className="text-2xl md:text-3xl font-black tracking-wide text-slate-900"
              >
                {service.ctaSection.phone}
              </a>
            </div>
          </div>

          <div className="w-full lg:w-[440px] shrink-0">
            <div className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 text-center shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-2" style={{ backgroundImage: colors.primaryGradient }} />
              <h3 className="text-3xl font-black text-gray-900 mb-3 leading-tight mt-4">
                Get Your FREE Quote
              </h3>
              <p className="text-gray-500 font-medium mb-8">
                Takes less than 60 seconds to complete
              </p>
              <Link href="/quote" className="block w-full">
                <button type="button" className="w-full flex items-center justify-center gap-3 py-4 rounded-full text-white font-bold text-lg shadow-lg hover:opacity-95 transition-opacity" style={{ background: colors.primaryGradient }}>
                  Get Started <PenTool className="w-5 h-5" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service content — one section per heading */}
      {service.sections.map((section, index) => {
        const imageOnRight = section.imagePosition !== 'left';
        const bgClass = index % 2 === 0 ? 'bg-white' : 'bg-slate-50';

        return (
          <section key={section.title} className={`py-16 md:py-20 px-4 ${bgClass}`}>
            <div className="max-w-7xl mx-auto">
              <div
                className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                  section.image && !imageOnRight ? 'lg:[&>*:first-child]:order-1 lg:[&>*:last-child]:order-2' : ''
                }`}
              >
                {section.image && !imageOnRight && (
                  <div className="service-section-image rounded-2xl overflow-hidden shadow-xl border border-slate-100">
                    <img
                      src={section.image}
                      alt={section.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                )}

                <div>
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                    {section.title}
                  </h2>
                  <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-6">
                    <ServiceText serviceId={service.id} text={section.content} />
                  </p>
                  {section.bulletPoints && section.bulletPoints.length > 0 && (
                    <ul className="space-y-3">
                      {section.bulletPoints.map((point) => (
                        <li key={point} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 mt-0.5 shrink-0" style={{ color: colors.primary }} />
                          <span className="text-slate-700 leading-relaxed">
                            <ServiceText serviceId={service.id} text={point} />
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {service.id === 'gutter-cleaning' && section.title === 'Gutter Cleaning & Related Services' && (
                    <div className="mt-8">
                      <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-3">
                        Useful links
                      </p>
                      <ul className="flex flex-wrap gap-2">
                        {GUTTER_CLEANING_RELATED_LINKS.map(({ label, href }) => (
                          <li key={href}>
                            <Link
                              href={href}
                              className="inline-block rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm font-semibold text-slate-700 hover:border-[#19C58B] hover:text-[#0f766e] transition-colors"
                            >
                              {label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {service.id === 'gutter-repairs' && section.title === 'Gutter Repairs & Related Services' && (
                    <div className="mt-8">
                      <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-3">
                        Useful links
                      </p>
                      <ul className="flex flex-wrap gap-2">
                        {GUTTER_REPAIRS_RELATED_LINKS.map(({ label, href }) => (
                          <li key={href}>
                            <Link
                              href={href}
                              className="inline-block rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm font-semibold text-slate-700 hover:border-[#19C58B] hover:text-[#0f766e] transition-colors"
                            >
                              {label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {section.image && imageOnRight && (
                  <div className="service-section-image rounded-2xl overflow-hidden shadow-xl border border-slate-100">
                    <img
                      src={section.image}
                      alt={section.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                )}
              </div>
            </div>
          </section>
        );
      })}

      {/* Service Blocks */}
      <AreaServiceBlock
        title={service.ctaSection.title}
        descriptions={[service.ctaSection.description]}
        iconSrc={
          service.id === 'gutter-repairs'
            ? '/gutter-repair-icon.png'
            : '/gutter-cleaning-icon.png'
        }
        backgroundColor="bg-white"
        buttonText={service.ctaSection.buttonText}
        phoneNumber={service.ctaSection.phone}
      />

      {/* WhatsApp Section */}
      <section className="relative overflow-hidden border-t border-white/10 bg-gradient-to-r from-[#0b1634] via-[#0f2347] to-[#0b1f3f] py-20 px-4">
        <div className="pointer-events-none absolute -left-20 -bottom-12 h-72 w-[68%] -rotate-6 rounded-[40%] bg-[#16c784]/30 blur-[1px]" />
        <div className="pointer-events-none absolute -right-8 -top-12 h-52 w-[45%] rotate-6 rounded-[35%] bg-[#2dd4bf]/24 blur-[1px]" />
        <div className="pointer-events-none absolute left-[28%] top-[28%] h-20 w-56 -rotate-12 rounded-[30%] bg-white/70" />
        <div className="pointer-events-none absolute right-[16%] bottom-[10%] h-16 w-48 rotate-12 rounded-[30%] bg-white/65" />

        <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-10 md:flex-row md:items-center md:justify-between">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-black text-[#f8fafc] tracking-tight">
              Need a quick answer?
              <br />
              <span className="text-[#34e3b6]">Message us on WhatsApp</span>
            </h2>
            <p className="mt-4 text-base md:text-lg text-[#dbe7ff]/88 max-w-xl">
              Fast replies from our team. Send one tap and we will help with quotes, repairs, and availability.
            </p>
          </div>

          <div className="w-full max-w-[560px] rounded-2xl border border-white/20 bg-[#f8fafc]/96 p-4 md:p-6 shadow-[0_18px_45px_rgba(4,12,32,0.45)]">
            <h3 className="mb-4 text-center text-3xl md:text-4xl font-black text-[#0f1e3d]">
              Ask us a question
            </h3>

            <div className="space-y-2">
              {whatsappQuestions.map((question, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between gap-3 rounded-lg px-2 py-1.5 hover:bg-[#e6f9f1] transition-colors"
                >
                  <span className="text-[15px] md:text-base text-[#1c2a44] font-semibold">
                    "{question}"
                  </span>
                  <a
                    href={`${whatsappBaseUrl}?text=${encodeURIComponent(`Hi, ${question}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 rounded-md bg-[#16c784] px-4 py-1.5 text-base font-black text-white hover:bg-[#0fb272] transition-colors inline-flex items-center gap-1.5 shadow-[0_6px_14px_rgba(22,199,132,0.35)]"
                  >
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                      fill="currentColor"
                    >
                      <path d="M19.11 17.21c-.28-.14-1.64-.81-1.89-.91-.25-.09-.43-.14-.61.14-.19.28-.71.91-.88 1.09-.16.19-.33.21-.61.07-.28-.14-1.2-.44-2.28-1.4-.84-.75-1.4-1.67-1.57-1.95-.16-.28-.02-.43.12-.57.12-.12.28-.33.42-.49.14-.16.19-.28.28-.47.09-.19.05-.35-.02-.49-.07-.14-.61-1.47-.84-2.02-.22-.53-.45-.46-.61-.47l-.52-.01c-.19 0-.49.07-.75.35s-.98.95-.98 2.33 1 2.71 1.14 2.89c.14.19 1.97 3 4.78 4.2.67.29 1.2.46 1.61.59.68.22 1.3.19 1.79.12.55-.08 1.64-.67 1.87-1.32.23-.65.23-1.21.16-1.32-.06-.12-.24-.19-.52-.33z" />
                      <path d="M16.03 3.2C8.95 3.2 3.2 8.95 3.2 16.03c0 2.25.59 4.45 1.7 6.38L3 29l6.8-1.86a12.8 12.8 0 0 0 6.23 1.6h.01c7.08 0 12.83-5.75 12.83-12.83C28.87 8.95 23.12 3.2 16.03 3.2zm0 23.49h-.01a10.63 10.63 0 0 1-5.42-1.48l-.39-.23-4.03 1.1 1.08-3.93-.25-.41a10.61 10.61 0 0 1-1.63-5.69c0-5.89 4.79-10.68 10.68-10.68s10.68 4.79 10.68 10.68-4.79 10.64-10.71 10.64z" />
                    </svg>
                    Ask
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <AreaFAQ />
      {!FOCUSED_SERVICE_IDS.has(service.id) && <AreaFacts />}
      {!FOCUSED_SERVICE_IDS.has(service.id) && <AreaBlogSnippet />}
      {!FOCUSED_SERVICE_IDS.has(service.id) && (
        <AreaFeatures
          serviceLabel={service.name}
          featureSet={service.id === 'roof-cleaning' ? 'roof' : 'gutter'}
        />
      )}
      <AreaRecentWork />
      <AreaReviews />
      <AreaContactMap />

      <style>{`
        .service-page-wrapper {
          overflow-x: hidden;
        }

        .service-section-image {
          width: 100%;
          aspect-ratio: 4 / 3;
          max-height: 420px;
        }

        .service-section-image img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        @media (max-width: 1023px) {
          .service-section-image {
            max-height: 320px;
          }
        }

        .service-hero-section {
          position: relative;
          min-height: 70vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background-color: #0f172a;
        }

        .hero-video-wrapper {
          position: absolute;
          inset: 0;
          z-index: 1;
        }
        
        .hero-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .service-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(15, 23, 42, 0.8) 0%,
            rgba(15, 23, 42, 0.65) 50%,
            rgba(15, 23, 42, 0.9) 100%
          );
          z-index: 1;
        }

        .service-hero-content {
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 1000px;
          padding: 72px 24px 72px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.15);
          padding: 8px 24px;
          border-radius: 100px;
          backdrop-filter: blur(8px);
          margin-bottom: 2rem;
        }

        .hero-badge-text {
          color: white;
          font-size: 0.95rem;
          font-weight: 700;
          letter-spacing: 0.5px;
        }

        .hero-title {
          margin: 0 0 1.5rem 0;
          font-size: clamp(2.25rem, 5vw, 3.75rem);
          font-weight: 900;
          letter-spacing: -0.02em;
          line-height: 1.1;
          color: white;
          text-shadow: 0 10px 30px rgba(0,0,0,0.5);
        }

        .title-prefix {
          font-size: clamp(2rem, 4vw, 3.5rem);
          font-weight: 900;
        }
        
        .title-service {
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          font-weight: 900;
        }

        .title-secondary {
          display: block;
          font-size: clamp(2rem, 4.5vw, 4rem);
          font-weight: 900;
          margin-top: 0.5rem;
        }

        .hero-subtitle {
          color: rgba(255, 255, 255, 0.85);
          font-size: clamp(1.1rem, 2vw, 1.25rem);
          max-width: 700px;
          margin: 0 0 1.25rem 0;
          line-height: 1.6;
          font-weight: 500;
        }

        .hero-cta-row {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          max-width: 560px;
        }

        .hero-primary-btn-link {
          width: 100%;
          max-width: 560px;
          text-decoration: none;
        }

        .hero-primary-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          background: ${colors.primaryGradient};
          padding: 18px 32px;
          border-radius: 100px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 10px 30px rgba(25, 197, 139, 0.3);
          position: relative;
        }

        .hero-primary-btn:hover {
          transform: translateY(-4px);
          box-shadow: 0 15px 40px rgba(25, 197, 139, 0.4);
          background: #14B27D;
        }

        .btn-arrow {
          color: white;
          font-size: 1.1rem;
          line-height: 1;
        }

        .btn-label {
          color: white;
          font-size: clamp(1.1rem, 2vw, 1.5rem);
          font-weight: 800;
        }

        .btn-free {
          text-decoration: underline;
          text-underline-offset: 3px;
        }

        .hero-wave-bottom {
          position: absolute;
          bottom: -1px;
          left: 0;
          right: 0;
          line-height: 0;
          z-index: 10;
        }

        .hero-wave-bottom svg {
          width: 100%;
          height: 60px;
          display: block;
        }

        @media (max-width: 768px) {
          .service-hero-section {
            min-height: 90svh;
            align-items: flex-start;
          }

          .service-hero-content {
            max-width: 100%;
            padding: 76px 16px 120px;
          }

          .hero-badge {
            padding: 8px 16px;
            margin-bottom: 1.25rem;
          }

          .hero-badge-text {
            font-size: 0.8rem;
          }

          .title-prefix {
            font-size: clamp(1.9rem, 7.5vw, 2.4rem);
          }

          .title-service {
            font-size: clamp(2.3rem, 9vw, 3rem);
          }

          .title-secondary {
            font-size: clamp(1.9rem, 8vw, 2.7rem);
            margin-top: 0.3rem;
          }

          .hero-subtitle {
            font-size: 1rem;
            line-height: 1.45;
            margin: 0 0 1.05rem 0;
          }

          .hero-cta-row {
            max-width: 360px;
          }

          .hero-primary-btn {
            padding: 14px 20px;
          }

          .btn-label {
            font-size: 1.1rem;
          }
        }

        .animate-fade-in-up {
          opacity: 0;
          animation: fadeInUp 0.8s ease forwards;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </main>
  );
}
