import { Wrench, Award, Truck, ShieldCheck } from 'lucide-react';
import { colors } from '@/constants/colors';

interface AreaFeaturesProps {
  formattedArea?: string;
}

export default function AreaFeatures({ formattedArea = "your area" }: AreaFeaturesProps) {
  const features = [
    {
      icon: Wrench,
      title: "Expertise You Can Trust",
      desc: `Our team of trained professionals specializes in safe and effective roof cleaning methods.`
    },
    {
      icon: Award,
      title: "Customized Solutions",
      desc: `We tailor our services to meet the specific needs of your roof, ensuring optimal results.`
    },
    {
      icon: Truck,
      title: "Affordable Pricing",
      desc: `Quality roof cleaning near you doesn’t have to break the bank. We offer competitive rates without compromising on quality.`
    },
    {
      icon: ShieldCheck,
      title: "Eco-Friendly Practices",
      desc: `We use environmentally friendly cleaning solutions to protect your roof and the surrounding environment.`
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
          <div className="sm:col-span-2 lg:col-span-4 text-center text-white">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">
              Why Choose Our Roof Cleaning Service in {formattedArea}?
            </h2>
          </div>
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
