'use client';

import { colors } from '@/constants/colors';

interface WhatsAppContactSectionProps {
  title: string;
  subtitle: string;
  description: string;
  questions: string[];
  backgroundImage?: string;
}

export default function WhatsAppContactSection({
  title,
  subtitle,
  description,
  questions,
  backgroundImage = '/gutter-cleaning.jpeg'
}: WhatsAppContactSectionProps) {
  return (
    <section className="py-20 px-4 relative overflow-hidden bg-gradient-to-br from-[#0b1634] via-[#0f2347] to-[#0b1f3f]">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("${backgroundImage}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Decorative Background Elements */}
      <div className="pointer-events-none absolute -left-20 -bottom-12 h-72 w-[68%] -rotate-6 rounded-[40%] bg-[#16c784]/20 blur-[100px]" />
      <div className="pointer-events-none absolute -right-8 -top-12 h-52 w-[45%] rotate-6 rounded-[35%] bg-[#2dd4bf]/15 blur-[100px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="text-white">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span className="text-sm font-bold">Quick Response</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              {title}
              <br />
              <span style={{ color: colors.primary }}>{subtitle}</span>
            </h2>

            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              {description}
            </p>

            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full border-2 border-[#0b1634] flex items-center justify-center text-white font-bold"
                    style={{ background: colors.primaryGradient }}
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-white font-bold">450+ Happy Customers</p>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-4 h-4" fill="#FCD34D" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-sm text-gray-300 ml-1">4.9/5</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Question Cards */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <h3 className="text-3xl font-black text-gray-900 mb-6 text-center">
              Ask us a question
            </h3>

            <div className="space-y-3">
              {questions.map((question, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between gap-3 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all group border border-gray-200"
                >
                  <span className="text-gray-700 font-semibold text-sm md:text-base flex-1">
                    "{question}"
                  </span>
                  <a
                    href={`https://wa.me/447421433910?text=${encodeURIComponent(question)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 px-4 py-2 rounded-lg text-white font-bold text-sm transition-all hover:scale-105 shadow-md flex items-center gap-2"
                    style={{ background: colors.primary }}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Ask
                  </a>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200 text-center">
              <p className="text-sm text-gray-600 mb-3">Or call us directly:</p>
              <a
                href="tel:+447421433910"
                className="text-2xl font-black hover:underline"
                style={{ color: colors.primary }}
              >
                +44 7421 433910
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
