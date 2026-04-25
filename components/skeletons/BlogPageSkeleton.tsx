import React from 'react';
import HeroSkeleton from './HeroSkeleton';
import BlogCardSkeleton from './BlogCardSkeleton';
import SkeletonBase from './SkeletonBase';

export const BlogPageSkeleton: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <HeroSkeleton />
      
      {/* Featured Post */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <SkeletonBase variant="circular" width={24} height={24} />
            <SkeletonBase variant="rounded" height={32} width={200} />
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
            <SkeletonBase variant="rectangular" height={400} />
            
            <div className="p-12 space-y-6">
              <div className="flex items-center gap-4">
                <SkeletonBase variant="rounded" width={80} height={16} />
                <SkeletonBase variant="rounded" width={80} height={16} />
                <SkeletonBase variant="rounded" width={100} height={16} />
              </div>
              
              <div className="space-y-3">
                <SkeletonBase variant="rounded" height={36} width="100%" />
                <SkeletonBase variant="rounded" height={36} width="80%" />
              </div>
              
              <div className="space-y-2">
                <SkeletonBase variant="rounded" height={20} width="100%" />
                <SkeletonBase variant="rounded" height={20} width="95%" />
                <SkeletonBase variant="rounded" height={20} width="70%" />
              </div>
              
              <SkeletonBase variant="rounded" height={24} width={150} />
            </div>
          </div>
        </div>
      </section>
      
      {/* Category Filter */}
      <section className="py-8 px-4 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <SkeletonBase variant="circular" width={20} height={20} />
            <SkeletonBase variant="rounded" height={20} width={150} />
          </div>
          <div className="flex flex-wrap gap-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <SkeletonBase key={index} variant="rounded" width={120} height={40} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Blog Grid */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <SkeletonBase variant="circular" width={24} height={24} />
            <SkeletonBase variant="rounded" height={32} width={200} />
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, index) => (
              <BlogCardSkeleton key={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPageSkeleton;
