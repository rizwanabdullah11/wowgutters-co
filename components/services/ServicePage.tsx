import { colors } from '@/constants/colors';
import { Button } from '@/components/ui/button';
import { CheckCircle, LucideIcon } from 'lucide-react';
import Image from 'next/image';

interface ProcessStep {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface Benefit {
  title: string;
  description: string;
}

interface ServicePageProps {
  heroTitle: string;
  heroSubtitle: string;
  heroButtonText: string;
  processTitle: string;
  processSteps: ProcessStep[];
  benefitsTitle: string;
  benefits: Benefit[];
  benefitsImage: string;
  benefitsImageAlt: string;
  ctaTitle: string;
  ctaDescription: string;
  ctaButtonText: string;
}

export default function ServicePage({
  heroTitle,
  heroSubtitle,
  heroButtonText,
  processTitle,
  processSteps,
  benefitsTitle,
  benefits,
  benefitsImage,
  benefitsImageAlt,
  ctaTitle,
  ctaDescription,
  ctaButtonText,
}: ServicePageProps) {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-16 md:py-24" style={{ backgroundColor: colors.primary }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: colors.white }}>
            {heroTitle}
          </h1>
          <p className="text-xl md:text-2xl mb-8" style={{ color: colors.white }}>
            {heroSubtitle}
          </p>
          <Button className="px-8 py-4 text-lg font-semibold" style={{ backgroundColor: colors.white, color: colors.primary }}>
            {heroButtonText}
          </Button>
        </div>
      </section>

      {/* Process/Features Section */}
      <section className="py-16" style={{ backgroundColor: colors.white }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: colors.text }}>
            {processTitle}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: colors.primary }}>
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: colors.text }}>{step.title}</h3>
                  <p style={{ color: colors.textLight }}>{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16" style={{ backgroundColor: colors.background }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={benefits.length > 4 ? 'order-1' : 'order-2 md:order-1'}>
              <img 
                src={benefitsImage}
                alt={benefitsImageAlt}
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className={benefits.length > 4 ? 'order-2' : 'order-1 md:order-2'}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: colors.text }}>
                {benefitsTitle}
              </h2>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: colors.primary }} />
                    <div>
                      <strong style={{ color: colors.text }}>{benefit.title}:</strong>
                      <span style={{ color: colors.textLight }}> {benefit.description}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16" style={{ backgroundColor: colors.primary }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: colors.white }}>
            {ctaTitle}
          </h2>
          <p className="text-xl mb-8" style={{ color: colors.white }}>
            {ctaDescription}
          </p>
          <Button className="px-8 py-4 text-lg font-semibold" style={{ backgroundColor: colors.white, color: colors.primary }}>
            {ctaButtonText}
          </Button>
        </div>
      </section>
    </main>
  );
}
