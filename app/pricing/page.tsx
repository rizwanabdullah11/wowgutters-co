import { Button } from '@/components/ui/button';
import { colors } from '@/constants/colors';

export default function Pricing() {
  const packages = [
    {
      name: 'Basic Clean',
      price: '$99',
      features: [
        'Gutter debris removal',
        'Downspout flushing',
        'Visual inspection',
        'Basic report',
        'Up to 2 stories'
      ],
      popular: false
    },
    {
      name: 'Complete Care',
      price: '$179',
      features: [
        'Everything in Basic',
        'Minor repairs included',
        'Gutter seal check',
        'Detailed photo report',
        'Up to 3 stories',
        '6-month warranty'
      ],
      popular: true
    },
    {
      name: 'Premium Protection',
      price: '$299',
      features: [
        'Everything in Complete',
        'Gutter guard installation',
        'Full system optimization',
        'Priority scheduling',
        'Any height',
        '6-month warranty',
        'Free annual inspection'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-[#2563EB] text-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Simple, Transparent Pricing</h1>
          <p className="text-lg sm:text-xl text-gray-300">Choose the package that fits your needs</p>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-lg overflow-hidden ${pkg.popular ? 'ring-4 sm:transform sm:scale-105' : ''
                }`}
            // style={{ ringColor: pkg.popular ? colors.primary : 'transparent' }}
            >
              {pkg.popular && (
                <div className="bg-[#FF6B35] text-white text-center py-2 font-bold text-sm sm:text-base">
                  MOST POPULAR
                </div>
              )}
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold mb-4">{pkg.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl sm:text-5xl font-bold">{pkg.price}</span>
                  <span className="text-sm sm:text-base text-gray-500">/service</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2" style={{ color: colors.primary }}>✓</span>
                      <span className="text-sm sm:text-base text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant={pkg.popular ? 'primary' : 'outline'}
                  className="w-full"
                >
                  Get Started
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 sm:mt-16 bg-white rounded-lg shadow-lg p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Custom Solutions Available</h2>
          <p className="text-sm sm:text-base text-gray-600 text-center mb-8">
            Need something different? We offer custom packages tailored to your specific needs.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl mb-3">🏢</div>
              <h3 className="text-base sm:text-lg font-bold mb-2">Commercial</h3>
              <p className="text-gray-600 text-xs sm:text-sm">Large-scale commercial property solutions</p>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl mb-3">🏘️</div>
              <h3 className="text-base sm:text-lg font-bold mb-2">HOA</h3>
              <p className="text-gray-600 text-xs sm:text-sm">Special rates for homeowner associations</p>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl mb-3">🔄</div>
              <h3 className="text-base sm:text-lg font-bold mb-2">Maintenance Plans</h3>
              <p className="text-gray-600 text-xs sm:text-sm">Recurring service with discounted rates</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
