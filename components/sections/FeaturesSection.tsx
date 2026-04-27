import { colors } from '@/constants/colors';
import { CheckCircle, ArrowUp, Home, PoundSterling, UserCheck, Sparkles } from 'lucide-react';

const topFeatures = [
  {
    icon: <CheckCircle className="w-5 h-5" />,
    title: 'We Unblock Downpipes',
    subtitle: 'INCLUDED AS STANDARD',
    description:
      'We clear outlets and check downpipes so rainwater can drain away from your property properly.',
    accent: '#3B82F6',
  },
  {
    icon: <ArrowUp className="w-5 h-5" />,
    title: 'High-Reach Gutter Cleaning',
    subtitle: 'HIGH ACCESS SPECIALISTS',
    description:
      'Our gutter vacuum equipment reaches awkward and higher gutter lines without unnecessary disruption.',
    accent: '#19C58B',
  },
  {
    icon: <Home className="w-5 h-5" />,
    title: 'Gutters Over Your Conservatory',
    subtitle: 'SPECIALIST ACCESS',
    description:
      'We use specialist access tools to clean over conservatories, porches and awkward rooflines.',
    accent: '#F97316',
  },
];

const bottomFeatures = [
  {
    icon: <PoundSterling className="w-5 h-5" />,
    title: 'Fair Gutter Cleaning Prices',
    subtitle: 'CLEAR VALUE',
    description:
      'Straightforward prices designed to keep professional gutter care affordable and worthwhile.',
    accent: '#8B5CF6',
  },
  {
    icon: <UserCheck className="w-5 h-5" />,
    title: 'Trained & Insured Team',
    subtitle: 'PEACE OF MIND',
    description:
      'Every technician works with care, experience and insurance for extra peace of mind.',
    accent: '#19C58B',
  },
  {
    icon: <Sparkles className="w-5 h-5" />,
    title: 'Mess-Free Service',
    subtitle: 'NO CLEANUP NEEDED',
    description:
      'Debris is collected directly into our vacuum system, leaving your pathways and garden clean after every visit.',
    accent: '#3B82F6',
  },
];

function FeatureCard({ icon, title, subtitle, description, accent }: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  accent: string;
}) {
  return (
    <div
      className="bg-white rounded-2xl overflow-hidden flex flex-col shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
      style={{ borderTop: `3px solid ${accent}` }}
    >
      <div className="p-6 flex flex-col flex-1 items-center text-center">
        <div className="mb-5">
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center border-2 bg-white"
            style={{ borderColor: accent, color: accent }}
          >
            {icon}
          </div>
        </div>
        <h3 className="text-lg font-black mb-1" style={{ color: colors.text }}>
          {title}
        </h3>
        <p className="text-[10px] font-bold tracking-widest uppercase mb-3" style={{ color: accent }}>
          {subtitle}
        </p>
        <p className="text-sm leading-relaxed flex-1 max-w-[280px]" style={{ color: colors.textLight }}>
          {description}
        </p>
      </div>
    </div>
  );
}

export default function FeaturesSection() {
  return (
    <section 
      className="py-20 relative overflow-hidden" 
      style={{ 
        background: `linear-gradient(135deg, ${colors.background} 0%, #f0f9ff 50%, ${colors.background} 100%)`
      }}
    >
      {/* Decorative circles */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full opacity-10" style={{ backgroundColor: colors.primary, filter: 'blur(60px)' }}></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full opacity-10" style={{ backgroundColor: '#19C58B', filter: 'blur(80px)' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-3 mb-5">
          <span className="h-px w-10" style={{ backgroundColor: colors.primary }} />
          <span className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: colors.primary }}>
            Service Benefits
          </span>
          <span className="h-px w-10" style={{ backgroundColor: colors.primary }} />
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-4" style={{ color: colors.text }}>
          Practical Benefits of Our Gutter Cleaning
        </h2>
        <p className="text-center text-base sm:text-lg mb-12 max-w-2xl mx-auto" style={{ color: colors.textLight }}>
          Everything is designed to make gutter cleaning simple, safe and effective for your property.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {topFeatures.map((f) => <FeatureCard key={f.title} {...f} />)}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {bottomFeatures.map((f) => <FeatureCard key={f.title} {...f} />)}
        </div>

        {/* Disclaimer */}
        <div
          className="rounded-2xl p-5 flex items-start gap-3"
          style={{ backgroundColor: colors.lightGray }}
        >
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-white text-sm font-bold"
            style={{ backgroundColor: colors.primary }}
          >
            *
          </div>
          <p className="text-sm leading-relaxed" style={{ color: colors.textLight }}>
            <strong style={{ color: colors.text }}>Standard Service Includes:</strong> Outlet and downpipe
            unblocking excludes any that require removal, alteration, or requires any part to be stripped or taken
            apart. An extra charge may be applied for complex blockages.
          </p>
        </div>
      </div>
    </section>
  );
}
