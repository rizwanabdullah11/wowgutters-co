 'use client';

import { useState } from 'react';
import { colors } from '@/constants/colors';

const quoteServices = [
  'Free Gutter Check',
  'Gutter Cleaning',
  'Gutter Repairs',
  'Gutter Installation',
  'UPVC Cleaning',
  'Roof Cleaning',
];

export default function InspectLandingPage() {
  const [step, setStep] = useState(1);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [address, setAddress] = useState('');
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');

  const totalSteps = 4;
  const stepPercents = [20, 40, 60, 80];
  const progress = stepPercents[step - 1] ?? 20;

  const toggleService = (service: string) => {
    setSelectedServices((current) =>
      current.includes(service)
        ? current.filter((s) => s !== service)
        : [...current, service]
    );
  };

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      // Final submit – for now we just log data.
      console.log({
        selectedServices,
        address,
        name,
        contact,
      });
      // You can replace this with a real API call later.
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <main className="bg-gray-50">
      {/* Hero / Offer Section */}
      <section className="relative py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-wide mb-1" style={{ color: colors.primary }}>
              Service So Good, You&apos;ll Think We&apos;ve Got a Magic Wand!
            </p>
            <div className="h-1 w-40 mb-4" style={{ backgroundColor: colors.accent }} />
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-3" style={{ color: colors.dark }}>
              Get A{' '}
              <span
                className="text-[inherit]"
                style={{
                  textDecoration: 'underline',
                  textDecorationThickness: '3px',
                  textDecorationColor: colors.accent,
                }}
              >
                FREE
              </span>{' '}
              Gutter Check &amp; Quote Today!
            </h1>
            <p className="text-sm sm:text-base font-semibold mb-3" style={{ color: colors.accent }}>
              Always 100% Free, Zero Obligation!
            </p>
            <p className="text-base sm:text-lg mb-6" style={{ color: colors.textLight }}>
              Always 100% free, zero obligation. Our trained UK gutter experts check your roofline properly so you only pay for
              the work you actually need.
            </p>

            <div className="space-y-3">
              {[
                'Say NO to over-the-phone quotes that triple later.',
                'Say NO to guesswork – only pay for what needs doing.',
                'Say NO to so‑called “professionals” who cost you more later.',
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-red-600 text-white">
                    ✕
                  </span>
                  <p className="text-sm sm:text-base" style={{ color: colors.text }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200 bg-gray-50">
              <img
                src="/images/quote-hero-1.png"
                alt="WOW Gutters technician working safely at height"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200 bg-gray-50 translate-y-6">
              <img
                src="/images/quote-hero-2.png"
                alt="Professional gutter cleaning using specialist equipment"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Dark Quote Form Section */}
      <section
        className="relative py-16 md:py-20"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1503435824048-a799a3a84bf7?w=1600")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/70" aria-hidden="true" />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Progress bar */}
          <div className="mb-6">
            <div className="w-full h-4 bg-gray-600/60 rounded-full overflow-hidden border border-white/20">
              <div
                className="h-full rounded-full"
                style={{ width: `${progress}%`, backgroundColor: colors.primary }}
              />
            </div>
            <p className="mt-2 text-xs font-semibold text-white">
              {progress}% &ndash; Step {step} of {totalSteps}
            </p>
          </div>

          <div className="bg-black/75 border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 text-center">
              {step === 1 && 'Get a FREE Quote'}
              {step === 2 && 'What is Your Address?'}
              {step === 3 && 'What is Your Name?'}
              {step === 4 && 'How Can We Contact You?'}
            </h2>
            {step === 1 && (
              <>
                <p className="text-sm sm:text-base text-gray-200 mb-6 text-center">
                  What do you need help with?
                </p>
                <div className="space-y-4">
                  {quoteServices.map((service) => (
                    <label
                      key={service}
                      className="flex items-center gap-3 text-white text-sm sm:text-base cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-400 text-[--accent] focus:ring-[--accent]"
                        checked={selectedServices.includes(service)}
                        onChange={() => toggleService(service)}
                      />
                      <span>{service}</span>
                    </label>
                  ))}
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <p className="text-sm sm:text-base text-gray-200 mb-6 text-center">
                  Tell us where you need our help.
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  <input
                    className="w-full rounded-md border border-white/30 bg-black/40 px-3 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[--accent]"
                    placeholder="Street Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                  <input
                    className="w-full rounded-md border border-white/30 bg-black/40 px-3 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[--accent]"
                    placeholder="Postcode"
                  />
                </div>
              </>
            )}

            {step === 3 && (
              <>
                <p className="text-sm sm:text-base text-gray-200 mb-4">
                  What is your name?
                </p>
                <input
                  className="w-full rounded-md border border-white/20 bg-black/40 px-3 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[--accent]"
                  placeholder="Full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </>
            )}

            {step === 4 && (
              <>
                <p className="text-sm sm:text-base text-gray-200 mb-4">
                  How can we contact you?
                </p>
                <textarea
                  className="w-full rounded-md border border-white/20 bg-black/40 px-3 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[--accent]"
                  rows={3}
                  placeholder="Phone number, email address, and any extra details."
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                />
              </>
            )}

            <div className="mt-6 flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={handleBack}
                disabled={step === 1}
                className="inline-flex items-center justify-center rounded-md px-5 py-2 text-sm font-semibold text-white/80 border border-white/30 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Back
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="inline-flex items-center justify-center rounded-md px-8 py-3 text-base font-semibold text-white shadow-lg"
                style={{ backgroundColor: colors.primary }}
              >
                {step === totalSteps ? 'Send Request' : 'Next'}
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

