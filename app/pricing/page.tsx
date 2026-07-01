import { Button } from '@/components/ui/button';
import { colors } from '@/constants/colors';
import TopPageAreaLinks from '@/components/seo/TopPageAreaLinks';
import { GUTTER_PRICING, GUTTER_PRICING_PACKAGES, formatGbp } from '@/constants/gutterPricing';

export default function Pricing() {
  const packages = GUTTER_PRICING_PACKAGES.map((pkg) => ({
    name: pkg.title,
    price: formatGbp(pkg.price),
    features: [...pkg.features],
    popular: 'popular' in pkg && pkg.popular === true,
  }));

  const addons = [
    { name: 'Fascia & soffit cleaning', price: formatGbp(GUTTER_PRICING.fasciaAndSoffit) },
    { name: 'Gutter installation', price: formatGbp(GUTTER_PRICING.installation) },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-[#2563EB] text-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Simple, Transparent Pricing</h1>
          <p className="text-lg sm:text-xl text-gray-300">Fixed prices — no hidden fees</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-lg overflow-hidden ${pkg.popular ? 'ring-4 sm:transform sm:scale-105' : ''}`}
            >
              {pkg.popular && (
                <div className="bg-[#FF6B35] text-white text-center py-2 font-bold text-sm sm:text-base">
                  MOST POPULAR
                </div>
              )}
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900">{pkg.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl sm:text-5xl font-bold">{pkg.price}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2" style={{ color: colors.primary }}>✓</span>
                      <span className="text-sm sm:text-base text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant={pkg.popular ? 'primary' : 'outline'} className="w-full">
                  Get Started
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 bg-white rounded-lg shadow-lg p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Additional services</h2>
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {addons.map((item) => (
              <div key={item.name} className="text-center rounded-xl border border-gray-100 p-6">
                <h3 className="text-lg font-bold mb-2 text-gray-900">{item.name}</h3>
                <p className="text-3xl font-black" style={{ color: colors.primary }}>{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <TopPageAreaLinks intro="Gutter cleaning prices vary by property size and area — open your local page for typical rates." />
    </div>
  );
}
