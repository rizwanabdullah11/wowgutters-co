import { Wrench, Award, Truck, ShieldCheck } from 'lucide-react';
import { colors } from '@/constants/colors';

interface AreaFeaturesProps {
  formattedArea?: string;
}

export default function AreaFeatures({ formattedArea = "your area" }: AreaFeaturesProps) {
  const features = [
    {
      icon: Wrench,
      title: "Industry-Leading Technology",
      desc: `Our local operatives in ${formattedArea} deploy the most advanced, high-velocity vacuum equipment available, guaranteeing a meticulous and safe clearance from ground level.`
    },
    {
      icon: Award,
      title: "Highly Acclaimed Standards",
      desc: `We pride ourselves on delivering an unparalleled standard of care. Our stellar track record in ${formattedArea} establishes us as frontrunners in property maintenance.`
    },
    {
      icon: Truck,
      title: "Fully Equipped Fleets",
      desc: `The WOW Gutters vehicles operating in ${formattedArea} arrive comprehensively stocked with premium components, enabling us to address urgent repairs on the very first visit.`
    },
    {
      icon: ShieldCheck,
      title: "Comprehensive 6-Month Coverage",
      desc: `We stand firmly behind our workmanship. Any repair carried out in ${formattedArea} is fortified by a robust 6-month warranty, providing you with absolute assurance.`
    }
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Decorative top wave/slant */}
      <div className="w-full h-12 bg-white relative">
        <div
          className="absolute inset-x-0 bottom-0 h-full w-full opacity-100"
          style={{
            clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 80% 80%, 60% 0, 40% 100%, 20% 40%, 0 80%)',
            backgroundColor: colors.primary
          }}
        ></div>
      </div>

      <div className="py-20 px-4 object-cover" style={{ background: colors.primaryGradient || colors.primary }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-8">
          {features.map((feature, i) => (
            <div key={i} className="flex flex-col items-center text-center text-white">

              {/* Icon Circle */}
              <div className="w-24 h-24 rounded-full border-[3px] border-[#0F172A] flex items-center justify-center mb-6 relative bg-white">
                <feature.icon className="w-10 h-10" style={{ color: colors.primary }} />

                {/* Decorative splashes replicating the reference image */}
                <div className="absolute top-1 -right-2 w-2 h-2 rounded-full bg-[#0F172A]"></div>
                <div className="absolute bottom-2 -left-3 w-3 h-3 rounded-full bg-[#0F172A]"></div>
                <div className="absolute top-10 -right-4 w-1.5 h-1.5 rounded-full bg-[#0F172A]"></div>
                <div className="absolute -bottom-3 right-4 w-2.5 h-2.5 rounded-full bg-[#0F172A]"></div>
                <div className="absolute top-0 -left-1 w-1.5 h-1.5 rounded-full bg-[#0F172A]"></div>
              </div>

              <h3 className="font-black text-xl mb-4 leading-tight">
                {feature.title}
              </h3>

              <p className="text-white/95 font-medium text-sm leading-relaxed max-w-[260px]">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative bottom straight edge is just the section ending */}
    </section>
  );
}
