import React from 'react';
import Link from 'next/link';
import { colors } from '@/constants/colors';
import { blogPosts } from '@/constants/blogData';
import { ArrowRight } from 'lucide-react';

export default function BlogSection() {
  const featuredPost = blogPosts[0];
  const topBlogPosts = blogPosts.slice(1, 4);
  const bottomBlogPosts = blogPosts.slice(4, 7);

  const ACCENTS = ['#3B82F6', '#19C58B', '#F97316'];

  return (
    <section className="py-20" style={{ backgroundColor: colors.lightGray }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-3 mb-5">
          <span className="h-px w-10" style={{ backgroundColor: colors.primary }} />
          <span className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: colors.primary }}>
            Gutter Talk
          </span>
          <span className="h-px w-10" style={{ backgroundColor: colors.primary }} />
        </div>

        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black" style={{ color: colors.text }}>
            Gutter Talk…
          </h2>
          <Link
            href="/blog"
            className="hidden sm:inline-flex items-center gap-1 text-sm font-bold transition-opacity hover:opacity-70"
            style={{ color: colors.primary }}
          >
            See All Posts <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Featured Post */}
        <Link href={`/blog/${featuredPost.id}`}>
          <div
            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 mb-6 flex flex-col lg:flex-row"
            style={{ borderTop: `3px solid ${colors.primary}` }}
          >
            <img
              src={featuredPost.image}
              alt={featuredPost.title}
              className="w-full lg:w-1/3 h-72 object-cover"
            />
            <div className="p-6 flex flex-col justify-center flex-1">
              <p className="text-[10px] font-bold tracking-widest uppercase mb-2" style={{ color: colors.primary }}>
                FEATURED POST
              </p>
              <h3 className="text-xl sm:text-2xl font-black mb-2" style={{ color: colors.text }}>
                {featuredPost.title}
              </h3>
              <p className="text-xs mb-3" style={{ color: colors.textLight }}>
                Published: {featuredPost.date} · {featuredPost.views} views
              </p>
              <p className="text-sm leading-relaxed" style={{ color: colors.textLight }}>
                {featuredPost.excerpt}
              </p>
            </div>
          </div>
        </Link>

        {/* Top 3 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {topBlogPosts.map((post, index) => (
            <Link key={index} href={`/blog/${post.id}`}>
              <div
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 h-full flex flex-col"
                style={{ borderTop: `3px solid ${ACCENTS[index]}` }}
              >
                <img src={post.image} alt={post.title} className="w-full h-56 object-cover" />
                <div className="p-5 flex flex-col flex-1">
                  <p className="text-[10px] font-bold tracking-widest uppercase mb-2" style={{ color: ACCENTS[index] }}>
                    BLOG
                  </p>
                  <h3 className="text-base font-black mb-2 flex-1" style={{ color: colors.text }}>
                    {post.title}
                  </h3>
                  <p className="text-xs line-clamp-3 mb-3" style={{ color: colors.textLight }}>
                    {post.excerpt}
                  </p>
                  <span className="text-xs font-bold" style={{ color: colors.textLight }}>
                    {post.date} · {post.views} views
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom 3 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {bottomBlogPosts.map((post, index) => (
            <Link key={index} href={`/blog/${post.id}`}>
              <div
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 h-full flex flex-col"
                style={{ borderTop: `3px solid ${ACCENTS[index]}` }}
              >
                <img src={post.image} alt={post.title} className="w-full h-56 object-cover" />
                <div className="p-5 flex flex-col flex-1">
                  <p className="text-[10px] font-bold tracking-widest uppercase mb-2" style={{ color: ACCENTS[index] }}>
                    BLOG
                  </p>
                  <h3 className="text-base font-black mb-2 flex-1" style={{ color: colors.text }}>
                    {post.title}
                  </h3>
                  <p className="text-xs line-clamp-3 mb-3" style={{ color: colors.textLight }}>
                    {post.excerpt}
                  </p>
                  <span className="text-xs font-bold" style={{ color: colors.textLight }}>
                    {post.date} · {post.views} views
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/blog">
            <button
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold text-base transition-opacity duration-200 hover:opacity-90 shadow-lg"
              style={{ background: colors.primaryGradient }}
            >
              Load More Posts <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
