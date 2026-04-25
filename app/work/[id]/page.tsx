import { notFound } from 'next/navigation';
import { workPosts } from '@/constants/workData';
import { colors } from '@/constants/colors';
import { Calendar, User, Eye, ArrowLeft, MapPin, Briefcase } from 'lucide-react';
import Link from 'next/link';

interface WorkPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  return workPosts.map((post) => ({
    id: post.id,
  }));
}

export default async function WorkPostPage(props: WorkPageProps) {
  const params = await props.params;
  const { id } = params;
  
  const post = workPosts.find(p => p.id === id);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-16 pb-20" style={{ backgroundColor: colors.primary }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link href="/work" className="inline-flex items-center gap-2 mb-6 text-white hover:opacity-80">
            <ArrowLeft className="w-4 h-4" />
            Back to Recent Work
          </Link>

          {/* Project Badge */}
          <div className="mb-4">
            <span 
              className="px-4 py-2 text-sm font-semibold rounded-full"
              style={{ backgroundColor: colors.white, color: colors.primary }}
            >
              Project Case Study
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: colors.white }}>
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-white">
            {post.client && (
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span>{post.client}</span>
              </div>
            )}
            {post.location && (
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>{post.location}</span>
              </div>
            )}
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>Completed: {post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Eye className="w-5 h-5" />
              <span>{post.views} views</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="relative pt-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative mb-8">
            <div className="bg-white p-4 rounded-lg shadow-xl">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-64 md:h-96 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-16 pt-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            {/* Project Overview */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4" style={{ color: colors.text }}>
                Project Overview
              </h2>
              <p className="text-xl font-medium leading-relaxed mb-6" style={{ color: colors.textLight }}>
                {post.excerpt}
              </p>
              
              {/* Project Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="p-4 rounded-lg" style={{ backgroundColor: colors.lightGray }}>
                  <h3 className="font-semibold mb-2" style={{ color: colors.text }}>Client</h3>
                  <p style={{ color: colors.textLight }}>{post.client}</p>
                </div>
                <div className="p-4 rounded-lg" style={{ backgroundColor: colors.lightGray }}>
                  <h3 className="font-semibold mb-2" style={{ color: colors.text }}>Location</h3>
                  <p style={{ color: colors.textLight }}>{post.location}</p>
                </div>
              </div>

              {/* Services Provided */}
              {post.services && (
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-4" style={{ color: colors.text }}>
                    Services Provided
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {post.services.map((service, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 text-sm rounded-full"
                        style={{ backgroundColor: colors.primary, color: colors.white }}
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Main Content */}
            <div className="prose prose-lg max-w-none mb-12" style={{ color: colors.text }}>
              {post.content ? (
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              ) : (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold" style={{ color: colors.text }}>
                    The Challenge
                  </h3>
                  <p className="text-lg leading-relaxed">
                    This project presented unique challenges that required our specialized expertise and professional approach to gutter maintenance and repair.
                  </p>
                  
                  <h3 className="text-2xl font-bold mt-8" style={{ color: colors.text }}>
                    Our Solution
                  </h3>
                  <p className="text-lg leading-relaxed">
                    Our experienced team developed a comprehensive solution tailored to the specific needs of this project, ensuring long-lasting results and customer satisfaction.
                  </p>
                  
                  <h3 className="text-2xl font-bold mt-8" style={{ color: colors.text }}>
                    Results Achieved
                  </h3>
                  <ul className="space-y-3 text-lg">
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full mt-3 mr-3 flex-shrink-0" style={{ backgroundColor: colors.primary }}></span>
                      Successfully completed all project objectives on time and within budget
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full mt-3 mr-3 flex-shrink-0" style={{ backgroundColor: colors.primary }}></span>
                      Implemented long-term solutions to prevent future issues
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full mt-3 mr-3 flex-shrink-0" style={{ backgroundColor: colors.primary }}></span>
                      Exceeded client expectations with professional service delivery
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full mt-3 mr-3 flex-shrink-0" style={{ backgroundColor: colors.primary }}></span>
                      Provided comprehensive maintenance recommendations for ongoing care
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* CTA Section */}
            <div className="mt-12 p-8 rounded-lg text-center" style={{ backgroundColor: colors.lightGray }}>
              <h3 className="text-2xl font-bold mb-4" style={{ color: colors.text }}>
                Need Similar Work Done?
              </h3>
              <p className="mb-6" style={{ color: colors.textLight }}>
                Our expert team is ready to help with your gutter cleaning, repair, and maintenance projects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/quote">
                  <button 
                    className="px-8 py-3 text-lg font-semibold rounded"
                    style={{ backgroundColor: colors.primary, color: colors.white }}
                  >
                    Get Free Quote
                  </button>
                </Link>
                <Link href="/contact">
                  <button 
                    className="px-8 py-3 text-lg font-semibold border-2 rounded"
                    style={{ 
                      backgroundColor: 'transparent', 
                      color: colors.primary,
                      borderColor: colors.primary
                    }}
                  >
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}