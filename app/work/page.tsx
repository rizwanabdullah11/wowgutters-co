import Link from 'next/link';
import { workPosts } from '@/constants/workData';
import { colors } from '@/constants/colors';

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="text-white py-12 sm:py-16 lg:py-20" style={{ backgroundColor: colors.primary }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Recent Work</h1>
          <p className="text-lg sm:text-xl text-gray-300">Noteworthy jobs that we have recently completed</p>
        </div>
      </div>

      {/* Work Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {workPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div 
                className="h-40 sm:h-48 bg-cover bg-center"
                style={{ backgroundImage: `url('${post.image}')` }}
              ></div>
              <div className="p-4 sm:p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs sm:text-sm font-semibold" style={{ color: colors.primary }}>
                    {post.location}
                  </span>
                  <span className="text-xs sm:text-sm text-gray-500">{post.date}</span>
                </div>
                <h2 className="text-lg sm:text-xl font-bold mb-3 transition-colors" style={{ color: colors.text }}>
                  <Link href={`/work/${post.id}`} className="hover:opacity-80">{post.title}</Link>
                </h2>
                <p className="text-sm sm:text-base text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <Link 
                    href={`/work/${post.id}`}
                    className="font-semibold hover:underline text-sm sm:text-base"
                    style={{ color: colors.primary }}
                  >
                    View Project →
                  </Link>
                  <span className="text-xs text-gray-500">{post.views} views</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="py-12 sm:py-16" style={{ backgroundColor: colors.primary }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Need Similar Work Done?</h2>
          <p className="text-sm sm:text-base text-gray-300 mb-8">Get in touch to discuss your gutter cleaning and maintenance needs</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Link href="/quote" className="flex-1">
              <button 
                className="w-full px-6 py-3 rounded-lg font-semibold transition-colors"
                style={{ backgroundColor: colors.white, color: colors.primary }}
              >
                Get Free Quote
              </button>
            </Link>
            <Link href="/contact" className="flex-1">
              <button 
                className="w-full px-6 py-3 rounded-lg font-semibold border-2 transition-colors"
                style={{ 
                  backgroundColor: 'transparent', 
                  color: colors.white,
                  borderColor: colors.white
                }}
              >
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}