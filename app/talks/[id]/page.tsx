import React from 'react';
import { Button } from '@/components/ui/button';
import { colors } from '@/constants/colors';
import { Calendar, User, Clock, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { talksData } from '@/constants/talksData';

interface TalkPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  return talksData.map((talk) => ({
    id: talk.id,
  }));
}

export default async function TalkPage(props: TalkPageProps) {
  const params = await props.params;
  const talk = talksData.find(post => post.id === params.id);

  if (!talk) {
    notFound();
  }

  // Default content if none provided
  const defaultContent = `
    <p>${talk.excerpt}</p>
    
    <h3>Professional Gutter Services</h3>
    <p>Our expert team provides comprehensive gutter cleaning, repair, and maintenance services to protect your property from water damage.</p>
    
    <h3>Why Choose Us</h3>
    <p>With years of experience and a commitment to quality, we deliver exceptional results that keep your gutters functioning properly year-round.</p>
    
    <h3>Get Started Today</h3>
    <p>Contact us for a free quote and discover why homeowners trust us for all their gutter maintenance needs.</p>
  `;

  const content = talk.content || defaultContent;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-12" style={{ backgroundColor: colors.primary }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link href="/talks" className="inline-flex items-center gap-2 mb-6 text-white hover:opacity-80">
            <ArrowLeft className="w-4 h-4" />
            Back to Talks
          </Link>

          {/* Category */}
          <div className="mb-4">
            <span 
              className="px-4 py-2 text-sm font-semibold rounded-full"
              style={{ backgroundColor: colors.white, color: colors.primary }}
            >
              {talk.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: colors.white }}>
            {talk.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-white">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              <span>{talk.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>{talk.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>{talk.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative -mt-8 mb-8">
            <img 
              src={talk.image} 
              alt={talk.title}
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            {/* Excerpt */}
            <p className="text-xl mb-8 font-medium" style={{ color: colors.textLight }}>
              {talk.excerpt}
            </p>

            {/* Main Content */}
            <div 
              className="prose prose-lg max-w-none"
              style={{ color: colors.text }}
              dangerouslySetInnerHTML={{ __html: content }}
            />

            {/* CTA Section */}
            <div className="mt-12 p-8 rounded-lg text-center" style={{ backgroundColor: colors.lightGray }}>
              <h3 className="text-2xl font-bold mb-4" style={{ color: colors.text }}>
                Need Professional Help?
              </h3>
              <p className="mb-6" style={{ color: colors.textLight }}>
                Our expert team is ready to help with all your gutter and exterior cleaning needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/quote">
                  <Button 
                    className="px-8 py-3 text-lg font-semibold"
                    style={{ backgroundColor: colors.primary, color: colors.white }}
                  >
                    Get Free Quote
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button 
                    className="px-8 py-3 text-lg font-semibold border-2"
                    style={{ 
                      backgroundColor: 'transparent', 
                      color: colors.primary,
                      borderColor: colors.primary
                    }}
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
