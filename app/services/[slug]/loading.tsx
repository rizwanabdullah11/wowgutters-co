import HeroSkeleton from '@/components/skeletons/HeroSkeleton';
import ServiceBlockSkeleton from '@/components/skeletons/ServiceBlockSkeleton';
import GridSkeleton from '@/components/skeletons/GridSkeleton';
import SkeletonBase from '@/components/skeletons/SkeletonBase';

export default function Loading() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSkeleton />
      
      {/* Service Details */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
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
                  </div>
                ))}
              </div>
              
              <div className="flex gap-4">
                <SkeletonBase variant="rounded" width={160} height={48} />
                <SkeletonBase variant="rounded" width={160} height={48} />
              </div>
            </div>
            
            <SkeletonBase variant="rounded" height={400} />
          </div>
        </div>
      </section>
      
      <ServiceBlockSkeleton />
      
      {/* Features Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <SkeletonBase variant="rounded" height={40} width={300} className="mx-auto" />
          </div>
          <GridSkeleton columns={3} rows={2} hasImage={false} />
        </div>
      </section>
    </div>
  );
}
