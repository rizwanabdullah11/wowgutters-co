import React from 'react';
import HeroSkeleton from './HeroSkeleton';
import ServiceBlockSkeleton from './ServiceBlockSkeleton';
import GridSkeleton from './GridSkeleton';
import SkeletonBase from './SkeletonBase';

export const AreaPageSkeleton: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <HeroSkeleton />
      
      {/* Info Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <div className="space-y-3">
                <SkeletonBase variant="rounded" height={48} width="90%" />
                <SkeletonBase variant="rounded" height={48} width="70%" />
              </div>
              
              <div className="space-y-4">
                {Array.from({ length: 3 }).map((_, index) => (
                  <div key={index} className="space-y-2">
                    <SkeletonBase variant="rounded" height={20} width="100%" />
                    <SkeletonBase variant="rounded" height={20} width="95%" />
                    <SkeletonBase variant="rounded" height={20} width="85%" />
                  </div>
                ))}
              </div>
              
              <div className="bg-gray-100 rounded-xl p-6 space-y-3">
                <SkeletonBase variant="rounded" height={24} width="60%" />
                <SkeletonBase variant="rounded" height={36} width="80%" />
              </div>
            </div>
            
            {/* Form Card */}
            <div className="bg-white rounded-3xl shadow-2xl p-10 space-y-6">
              <SkeletonBase variant="rounded" height={40} width="80%" className="mx-auto" />
              <SkeletonBase variant="rounded" height={20} width="60%" className="mx-auto" />
              <SkeletonBase variant="rounded" height={56} width="100%" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Service Blocks */}
      <ServiceBlockSkeleton />
      <ServiceBlockSkeleton />
      
      {/* WhatsApp Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <SkeletonBase variant="rounded" height={48} width="90%" className="bg-gray-700" />
              <SkeletonBase variant="rounded" height={24} width="80%" className="bg-gray-700" />
            </div>
            
            <div className="bg-white rounded-2xl p-6 space-y-4">
              <SkeletonBase variant="rounded" height={36} width="70%" className="mx-auto" />
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="flex items-center justify-between gap-3 p-2">
                  <SkeletonBase variant="rounded" height={20} width="70%" />
                  <SkeletonBase variant="rounded" width={80} height={36} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Grid */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <SkeletonBase variant="rounded" height={40} width={300} className="mx-auto" />
            <SkeletonBase variant="rounded" height={20} width={400} className="mx-auto" />
          </div>
          <GridSkeleton columns={3} rows={2} hasImage={false} />
        </div>
      </section>
    </div>
  );
};

export default AreaPageSkeleton;
