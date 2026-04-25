import React from 'react';
import SkeletonBase from './SkeletonBase';

export const ServiceBlockSkeleton: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            {/* Title */}
            <div className="space-y-3">
              <SkeletonBase variant="rounded" height={40} width="90%" />
              <SkeletonBase variant="rounded" height={40} width="70%" />
            </div>
            
            {/* Paragraphs */}
            <div className="space-y-4">
              <div className="space-y-2">
                <SkeletonBase variant="rounded" height={20} width="100%" />
                <SkeletonBase variant="rounded" height={20} width="95%" />
                <SkeletonBase variant="rounded" height={20} width="85%" />
              </div>
              
              <div className="space-y-2">
                <SkeletonBase variant="rounded" height={20} width="100%" />
                <SkeletonBase variant="rounded" height={20} width="90%" />
              </div>
            </div>
            
            {/* Buttons */}
            <div className="flex gap-4 pt-4">
              <SkeletonBase variant="rounded" width={160} height={48} />
              <SkeletonBase variant="rounded" width={160} height={48} />
            </div>
          </div>
          
          {/* Image */}
          <div>
            <SkeletonBase variant="rounded" height={400} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceBlockSkeleton;
