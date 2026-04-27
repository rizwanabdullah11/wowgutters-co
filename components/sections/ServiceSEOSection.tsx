'use client';

import { colors } from '@/constants/colors';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import SeoLinkify from '@/components/SeoLinkify';

interface ProcessStep {
  text: string;
}

interface Problem {
  icon: string;
  title: string;
  desc: string;
}

interface HighlightBox {
  icon: string;
  title: string;
  desc: string;
}

interface ServiceSEOSectionProps {
  title: string;
  subtitle: string;
  mainParagraph1: string;
  mainParagraph2: string;
  processTitle: string;
  processSteps: ProcessStep[];
  problemsTitle: string;
  problems: Problem[];
  highlightBoxTitle: string;
  highlightBoxes: HighlightBox[];
  highlightBoxColor?: 'red' | 'amber' | 'green' | 'blue';
  ctaTitle: string;
  ctaDescription: string;
  ctaButtonText: string;
}

export default function ServiceSEOSection({
  title,
  subtitle,
  mainParagraph1,
  mainParagraph2,
  processTitle,
  processSteps,
  problemsTitle,
  problems,
  highlightBoxTitle,
  highlightBoxes,
  highlightBoxColor = 'amber',
  ctaTitle,
  ctaDescription,
  ctaButtonText,
}: ServiceSEOSectionProps) {
  const colorClasses = {
    red: 'from-red-50 to-orange-50 border-red-100',
    amber: 'from-amber-50 to-orange-50 border-amber-100',
    green: 'from-green-50 to-emerald-50 border-green-100',
    blue: 'from-blue-50 to-cyan-50 border-blue-100',
  };

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            {title} <span style={{ color: colors.primary }}>{subtitle}</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              <SeoLinkify text={mainParagraph1} />
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              <SeoLinkify text={mainParagraph2} />
            </p>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {processTitle}
              </h3>
              <ul className="space-y-3">
                {processSteps.map((step, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div 
                      className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: colors.primary }}
                    >
                      <span className="text-white text-xs font-bold">{index + 1}</span>
                    </div>
                    <span className="text-gray-700">{step.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">
              {problemsTitle}
            </h3>
            
            <div className="grid gap-4">
              {problems.map((problem, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                  <span className="text-3xl">{problem.icon}</span>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{problem.title}</h4>
                    <p className="text-sm text-gray-600">{problem.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Highlight Boxes Section */}
        <div className={`bg-gradient-to-br ${colorClasses[highlightBoxColor]} rounded-2xl p-8 md:p-12 mb-12 border`}>
          <h3 className="text-3xl font-black text-gray-900 mb-6 text-center">
            {highlightBoxTitle}
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {highlightBoxes.map((box, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                <div className="text-4xl mb-3">{box.icon}</div>
                <h4 className="font-bold text-gray-900 mb-2 text-lg">{box.title}</h4>
                <p className="text-gray-600 text-sm">{box.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl font-black text-gray-900 mb-4">
            {ctaTitle}
          </h3>
          <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
            {ctaDescription}
          </p>
          <Link href="/quote">
            <Button 
              className="px-8 py-4 text-lg font-bold rounded-full shadow-xl hover:scale-105 transition-transform"
              style={{ background: colors.primaryGradient, color: 'white' }}
            >
              {ctaButtonText}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
