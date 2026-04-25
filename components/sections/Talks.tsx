'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { colors } from '@/constants/colors';
import { Calendar, User, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface TalkPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  image: string;
  category: string;
  readTime: string;
}

interface TalksProps {
  posts: TalkPost[];
  title?: string;
  subtitle?: string;
}

export default function Talks({ 
  posts, 
  title = "Latest Talks & Insights",
  subtitle = "Stay updated with our latest thoughts, tips, and industry insights"
}: TalksProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: colors.text }}>
            {title}
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: colors.textLight }}>
            {subtitle}
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link key={post.id} href={`/talks/${post.id}`}>
              <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                {/* Post Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span 
                      className="px-3 py-1 text-xs font-semibold rounded-full"
                      style={{ backgroundColor: colors.primary, color: colors.white }}
                    >
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Post Content */}
                <div className="p-6">
                  {/* Meta Info */}
                  <div className="flex items-center gap-4 mb-3 text-sm" style={{ color: colors.textLight }}>
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 line-clamp-2" style={{ color: colors.text }}>
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="mb-4 line-clamp-3" style={{ color: colors.textLight }}>
                    {post.excerpt}
                  </p>

                  {/* Read More Button */}
                  <div className="w-full">
                    <Button 
                      className="w-full flex items-center justify-center gap-2 hover:gap-3 transition-all"
                      style={{ backgroundColor: colors.primary, color: colors.white }}
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        {posts.length > 6 && (
          <div className="text-center mt-12">
            <Link href="/talks">
              <Button 
                className="px-8 py-3 text-lg font-semibold"
                style={{ backgroundColor: colors.white, color: colors.primary, border: `2px solid ${colors.primary}` }}
              >
                View All Talks
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}