import { colors } from '@/constants/colors';

export default function AboutHero() {
  return (
    <div 
      className="relative h-[500px] bg-cover bg-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920')",
      }}
    >
      <div className="absolute inset-0 bg-[#2563EB]/30"></div>
      
      {/* Bottom Banner */}
      <div className="absolute bottom-0 left-0 right-0" style={{ backgroundColor: colors.primary }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            {/* Low Prices */}
            <div>
              <h3 className="text-xl font-bold mb-1 text-white">
                £ LOW-PRICES
              </h3>
              <p className="text-sm text-white/90">
                Take advantage of our comprehensive service at amazing low prices
              </p>
            </div>

            {/* Top Rated Service */}
            <div>
              <div className="flex justify-center mb-2 text-white text-2xl">
                {'⭐'.repeat(5)}
              </div>
              <h3 className="text-xl font-bold mb-1 text-white">
                TOP RATED SERVICE
              </h3>
            </div>

            {/* Trusted Service */}
            <div>
              <h3 className="text-xl font-bold mb-1 text-white">
                🏆 TRUSTED SERVICE
              </h3>
              <p className="text-sm text-white/90">
                Highly Rated Gutter Cleaning & Repair Company
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
