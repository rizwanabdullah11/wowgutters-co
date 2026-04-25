import SkeletonBase from '@/components/skeletons/SkeletonBase';
import BlogCardSkeleton from '@/components/skeletons/BlogCardSkeleton';

export default function Loading() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Image */}
      <div className="relative h-96 bg-gray-200 animate-pulse">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      
      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 py-16">
        {/* Meta Info */}
        <div className="flex items-center gap-4 mb-6">
          <SkeletonBase variant="circular" width={48} height={48} />
          <div className="space-y-2 flex-1">
            <SkeletonBase variant="rounded" height={20} width={150} />
            <div className="flex gap-4">
              <SkeletonBase variant="rounded" height={16} width={100} />
              <SkeletonBase variant="rounded" height={16} width={80} />
            </div>
          </div>
        </div>
        
        {/* Title */}
        <div className="space-y-3 mb-8">
          <SkeletonBase variant="rounded" height={48} width="100%" />
          <SkeletonBase variant="rounded" height={48} width="80%" />
        </div>
        
        {/* Content */}
        <div className="space-y-6">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="space-y-2">
              <SkeletonBase variant="rounded" height={20} width="100%" />
              <SkeletonBase variant="rounded" height={20} width="98%" />
              <SkeletonBase variant="rounded" height={20} width="95%" />
              <SkeletonBase variant="rounded" height={20} width="70%" />
            </div>
          ))}
        </div>
        
        {/* Tags */}
        <div className="flex gap-3 mt-12">
          {Array.from({ length: 4 }).map((_, index) => (
            <SkeletonBase key={index} variant="rounded" width={100} height={32} />
          ))}
        </div>
      </article>
      
      {/* Related Posts */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <SkeletonBase variant="rounded" height={36} width={250} />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {Array.from({ length: 3 }).map((_, index) => (
              <BlogCardSkeleton key={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
