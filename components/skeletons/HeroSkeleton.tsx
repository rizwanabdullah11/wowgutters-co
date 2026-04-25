import React from 'react';
import SkeletonBase from './SkeletonBase';

export const HeroSkeleton: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gray-100" style={{ height: '70vh', minHeight: '500px' }}>
      <div className="absolute inset-0 bg-gradient-to-b from-gray-200 to-gray-300 animate-pulse" />
      
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          {/* Badge Skeleton */}
          <div className="flex justify-center mb-6">
            <SkeletonBase variant="rounded" width={200} height={36} />
          </div>
          
          {/* Title Skeleton */}
          <div className="space-y-4 mb-6">
            <SkeletonBase variant="rounded" width="80%" height={48} className="mx-auto" />
            <SkeletonBase variant="rounded" width="60%" height={48} className="mx-auto" />
          </div>
          
          {/* Subtitle Skeleton */}
          <div className="space-y-3 mb-8 max-w-3xl mx-auto">
            <SkeletonBase variant="rounded" width="90%" height={24} className="mx-auto" />
            <SkeletonBase variant="rounded" width="70%" height={24} className="mx-auto" />
          </div>
          
          {/* CTA Button Skeleton */}
          <div className="flex justify-center">
            <SkeletonBase variant="rounded" width={280} height={56} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSkeleton;
