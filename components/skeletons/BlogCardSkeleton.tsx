import React from 'react';
import SkeletonBase from './SkeletonBase';

export const BlogCardSkeleton: React.FC = () => {
  return (
    <article className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
      {/* Image Skeleton */}
      <SkeletonBase variant="rectangular" height={224} />
      
      <div className="p-6 space-y-4">
        {/* Meta Info */}
        <div className="flex items-center gap-3">
          <SkeletonBase variant="rounded" width={80} height={14} />
          <SkeletonBase variant="rounded" width={60} height={14} />
        </div>
        
        {/* Title */}
        <div className="space-y-2">
          <SkeletonBase variant="rounded" height={24} width="100%" />
          <SkeletonBase variant="rounded" height={24} width="70%" />
        </div>
        
        {/* Excerpt */}
        <div className="space-y-2">
          <SkeletonBase variant="rounded" height={16} width="100%" />
          <SkeletonBase variant="rounded" height={16} width="90%" />
          <SkeletonBase variant="rounded" height={16} width="60%" />
        </div>
        
        {/* Footer */}
        <div className="flex items-center justify-between pt-2">
          <SkeletonBase variant="rounded" width={100} height={14} />
          <SkeletonBase variant="rounded" width={80} height={14} />
        </div>
      </div>
    </article>
  );
};

export default BlogCardSkeleton;
