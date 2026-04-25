import { colors } from '@/constants/colors';

export default function AboutContent() {
  return (
    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold mb-6" style={{ color: colors.text }}>
          Your Local Gutter Experts
        </h2>
        <p className="text-gray-600 mb-4">
          We are a locally owned and operated franchise dedicated to providing top-quality gutter cleaning and repair services to homeowners in our community.
        </p>
        <p className="text-gray-600 mb-4">
          With years of experience and a commitment to excellence, we've built our reputation on reliability, professionalism, and outstanding customer service.
        </p>
        <p className="text-gray-600">
          Our team of trained technicians uses the latest equipment and techniques to ensure your gutters are functioning properly and protecting your home from water damage.
        </p>
      </div>
      <div className="bg-gray-100 p-6 sm:p-8 rounded-lg">
        <h3 className="text-xl sm:text-2xl font-bold mb-6">Why Choose Us?</h3>
        <ul className="space-y-4">
          <li className="flex items-start">
            <span className="text-2xl mr-3" style={{ color: colors.primary }}>✓</span>
            <span className="text-gray-700">Licensed and insured professionals</span>
          </li>
          <li className="flex items-start">
            <span className="text-2xl mr-3" style={{ color: colors.primary }}>✓</span>
            <span className="text-gray-700">Open 7 days a week for your convenience</span>
          </li>
          <li className="flex items-start">
            <span className="text-2xl mr-3" style={{ color: colors.primary }}>✓</span>
            <span className="text-gray-700">Free quotes and inspections</span>
          </li>
          <li className="flex items-start">
            <span className="text-2xl mr-3" style={{ color: colors.primary }}>✓</span>
            <span className="text-gray-700">Satisfaction guaranteed</span>
          </li>
          <li className="flex items-start">
            <span className="text-2xl mr-3" style={{ color: colors.primary }}>✓</span>
            <span className="text-gray-700">Competitive pricing</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
