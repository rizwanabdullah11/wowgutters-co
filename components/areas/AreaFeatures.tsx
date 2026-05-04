import { ShieldCheck, Camera, Truck, Award } from 'lucide-react';
import { colors } from '@/constants/colors';

export type AreaFeaturesFocus = 'gutter' | 'roof';

interface AreaFeaturesProps {
  /** Geographic place on area landing pages, e.g. "Birmingham" */
  locality?: string;
  /** Service name on service detail pages, e.g. "Gutter Cleaning" */
  serviceLabel?: string;
  /** Roof service pages use roof-focused copy; everything else uses gutter cleaning copy */
  featureSet?: AreaFeaturesFocus;
}

export default function AreaFeatures({
  locality,
  serviceLabel,
  featureSet = 'gutter',
}: AreaFeaturesProps) {
  const placePhrase = locality ? ` in ${locality}` : '';
  const placeRef = locality ?? serviceLabel ?? 'your area';

  const gutterFeatures = [
    {
      icon: Award,
      title: 'Ground-level vacuum cleaning',
      desc: `We clear gutters and downpipes from the ground${locality ? ` across ${locality}` : ''} — no ladders against your walls, less risk to fascias and brickwork.`,
    },
    {
      icon: Camera,
      title: 'Before & after photos',
      desc: `You get clear photo proof of every clean${locality ? ` we complete${placePhrase}` : ''}, so you can see the difference and keep records for peace of mind.`,
    },
    {
      icon: Truck,
      title: 'Fast, local bookings',
      desc: `Same-day and next-day slots where we can, honest arrival windows, and straightforward pricing before we start${locality ? ` — including ${locality} and nearby streets` : ''}.`,
    },
    {
      icon: ShieldCheck,
      title: 'Fully insured & guaranteed',
      desc: `WOW Gutters Ltd is fully insured, and we stand behind professional workmanship${locality ? ` throughout ${locality}` : ''} with clear guarantees on qualifying work.`,
    },
  ];

  const roofFeatures = [
    {
      icon: Award,
      title: 'Expertise you can trust',
      desc: `Our team specialises in safe, low-impact roof cleaning and moss control${locality ? `${placePhrase}` : ''}.`,
    },
    {
      icon: Camera,
      title: 'Tailored treatment',
      desc: `We match the method to your roof type${locality ? ` and weather patterns in ${placeRef}` : ''}, not a one-size-fits-all blast.`,
    },
    {
      icon: Truck,
      title: 'Straightforward pricing',
      desc: `Competitive quotes with what’s included spelled out up front — no surprises when we’re on site.`,
    },
    {
      icon: ShieldCheck,
      title: 'Careful, low-pressure methods',
      desc: `We prioritise tile-safe techniques and runoff control to protect your property and borders.`,
    },
  ];

  const features = featureSet === 'roof' ? roofFeatures : gutterFeatures;

  const heading =
    featureSet === 'roof'
      ? locality
        ? `Why choose our roof cleaning service${placePhrase}?`
        : `Why choose WOW Gutters for roof cleaning${serviceLabel ? ` — ${serviceLabel}` : ''}?`
      : locality
        ? `Why choose WOW Gutters for gutter cleaning${placePhrase}?`
        : `Why choose WOW Gutters for ${serviceLabel ?? 'gutter cleaning'}?`;

  return (
    <section className="relative overflow-hidden">
      <div className="w-full h-12 bg-white relative">
        <div
          className="absolute inset-x-0 bottom-0 h-full w-full opacity-100"
          style={{
            clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 80% 80%, 60% 0, 40% 100%, 20% 40%, 0 80%)',
            backgroundColor: colors.primary,
          }}
        />
      </div>

      <div className="py-20 px-4 object-cover" style={{ background: colors.primaryGradient || colors.primary }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-8">
          <div className="sm:col-span-2 lg:col-span-4 text-center text-white">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">{heading}</h2>
          </div>
          {features.map((feature, i) => (
            <div key={i} className="flex flex-col items-center text-center text-white">
              <div className="w-24 h-24 rounded-full border-[3px] border-[#0F172A] flex items-center justify-center mb-6 relative bg-white">
                <feature.icon className="w-10 h-10" style={{ color: colors.primary }} />
                <div className="absolute top-1 -right-2 w-2 h-2 rounded-full bg-[#0F172A]" />
                <div className="absolute bottom-2 -left-3 w-3 h-3 rounded-full bg-[#0F172A]" />
                <div className="absolute top-10 -right-4 w-1.5 h-1.5 rounded-full bg-[#0F172A]" />
                <div className="absolute -bottom-3 right-4 w-2.5 h-2.5 rounded-full bg-[#0F172A]" />
                <div className="absolute top-0 -left-1 w-1.5 h-1.5 rounded-full bg-[#0F172A]" />
              </div>
              <h3 className="font-black text-xl mb-4 leading-tight">{feature.title}</h3>
              <p className="text-white/95 font-medium text-sm leading-relaxed max-w-[260px]">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
