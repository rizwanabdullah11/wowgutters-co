import { colors } from '@/constants/colors';
import Image from 'next/image';

export default function AboutCompany() {
  return (
    <div className="py-16 sm:py-20" style={{ backgroundColor: colors.primary }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-white space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">
              ABOUT WOW GUTTER CLEANING
            </h2>
            
            <p className="text-gray-300 leading-relaxed">
              Welcome to WOW Gutters - a network of independently owned and 
              operated franchises delivering exceptional service to customers across the UK. As specialists in 
              gutter cleaning and repairs, we bring extensive knowledge and hands-on experience to every 
              residential and commercial project.
            </p>

            <p className="text-gray-300 leading-relaxed">
              Our trusted service consistently earns 5-star ratings from customers for exceptional 
              workmanship, efficiency, and value. We've built a strong reputation on quality and reliability, 
              and we're committed to maintaining these high standards.
            </p>

            <p className="text-gray-300 leading-relaxed">
              Our professional technicians are thoroughly trained and experienced, possessing the expertise 
              and dedication to deliver outstanding results on every job. We utilize premium tools and 
              industry-leading equipment to guarantee exceptional outcomes.
            </p>

            <p className="text-gray-300 leading-relaxed">
              We maintain the highest professional standards. Our team wears smart, practical uniforms 
              designed for comfort and functionality in all conditions, ensuring we deliver our best work 
              regardless of the weather.
            </p>

            <p className="text-gray-300 leading-relaxed">
              Trust WOW Gutter Cleaning - we're fully insured and certified to protect you and your property.
            </p>
          </div>

          {/* Right Column - Logo */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="/wow-gutter-logo.jpg"
              alt="WOW Gutter Cleaning logo — gutter cleaning and roofline specialists"
              className="object-contain w-full max-w-md h-auto"
            />
          </div>
        </div>
      </div>
      
      {/* Bottom Accent Line */}
      <div className="mt-12 h-2" style={{ backgroundColor: colors.accent }}></div>
    </div>
  );
}
