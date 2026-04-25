import { colors } from '@/constants/colors';
import { Phone, Headphones, Users, Clock, Shield } from 'lucide-react';

export default function HelpIsHere() {
  const teamMembers = [
    {
      name: 'Luke',
      role: 'Senior Technician',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200',
      bgColor: '#DC2626',
      status: 'Available'
    },
    {
      name: 'Sarah',
      role: 'Customer Service',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200',
      bgColor: '#2563EB',
      status: 'Available'
    },
    {
      name: 'Jordan',
      role: 'Gutter Specialist',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200',
      bgColor: '#2563EB',
      status: 'On Call'
    },
    {
      name: 'Michael',
      role: 'Team Leader',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200',
      bgColor: '#1F2937',
      status: 'Available'
    },
    {
      name: 'Ian',
      role: 'Repair Expert',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200',
      bgColor: '#2563EB',
      status: 'Available'
    },
    {
      name: 'Emma',
      role: 'Quality Manager',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200',
      bgColor: '#1F2937',
      status: 'Available'
    }
  ];

  const features = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: '24/7 Support',
      description: 'Available when you need us'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Expert Team',
      description: 'Qualified professionals'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Fully Insured',
      description: 'Complete protection'
    }
  ];

  return (
    <>
    <section className="py-20 relative overflow-hidden" style={{ backgroundColor: colors.primary }}>
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border border-white rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <div 
              className="w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4 animate-pulse"
              style={{ backgroundColor: colors.white }}
            >
              <Headphones className="w-10 h-10" style={{ color: colors.primary }} />
            </div>
            <span 
              className="px-6 py-2 text-sm font-semibold rounded-full"
              style={{ backgroundColor: colors.cta, color: colors.white }}
            >
              Expert Support Team
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: colors.white }}>
            Help is here....
          </h2>
          <p className="text-xl mb-6 max-w-3xl mx-auto leading-relaxed" style={{ color: colors.white }}>
            Your complete gutter maintenance solution is just a call away!
          </p>
          
          {/* Call to Action */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto border border-white/20">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Phone className="w-8 h-8" style={{ color: colors.cta }} />
              <span className="text-lg font-semibold" style={{ color: colors.white }}>
                Call Now for Immediate Help
              </span>
            </div>
            <a 
              href="tel:07421433910"
              className="block text-3xl font-bold hover:scale-105 transition-transform duration-300"
              style={{ color: colors.cta }}
            >
              07421 433910
            </a>
            <p className="text-sm mt-2" style={{ color: colors.white }}>
              Available 7 days a week
            </p>
          </div>
        </div>

        {/* Features Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                <div 
                  className="w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: colors.white }}
                >
                  <div style={{ color: colors.primary }}>
                    {feature.icon}
                  </div>
                </div>
                <h3 className="font-bold mb-2" style={{ color: colors.white }}>
                  {feature.title}
                </h3>
                <p className="text-sm" style={{ color: colors.white }}>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Team Section - White Background */}
    <section className="py-20" style={{ backgroundColor: colors.white }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: colors.text }}>
            Meet Our Expert Team
          </h3>
          <p className="text-lg" style={{ color: colors.textLight }}>
            Professional, qualified, and ready to help
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="group text-center">
              <div className="relative mb-5">
                <div 
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 bg-white shadow-md mx-auto group-hover:scale-105 transition-transform duration-300 group-hover:shadow-lg"
                  style={{ borderColor: member.bgColor }}
                >
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Status Indicator */}
                <div className="absolute top-0 right-1 md:right-4">
                  <div 
                    className={`w-6 h-6 rounded-full border-2 border-white flex items-center justify-center shadow-sm ${
                      member.status === 'Available' ? 'bg-green-500' : 'bg-yellow-500'
                    }`}
                  >
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-4 group-hover:bg-white group-hover:shadow-md border border-transparent group-hover:border-gray-100 transition-all duration-300">
                <p className="font-bold text-base md:text-lg mb-1" style={{ color: colors.text }}>
                  {member.name}
                </p>
                <p className="text-xs md:text-sm mb-3" style={{ color: colors.textLight }}>
                  {member.role}
                </p>
                <div className="flex items-center justify-center gap-1.5">
                  <div className={`w-2 h-2 rounded-full ${member.status === 'Available' ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
                  <span className="text-xs font-semibold" style={{ color: member.status === 'Available' ? '#22c55e' : '#eab308' }}>
                    {member.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Bottom CTA Section - Premium Green UI */}
    <section className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #166534 0%, #19C58B 100%)' }}>
      {/* Decorative abstract glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#8DC63F] opacity-20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-10">
          
          {/* Text Content */}
          <div className="text-center md:text-left flex-1 max-w-2xl">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-4" style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: colors.white }}>
              Fast & Reliable
            </span>
            <h4 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 tracking-tight leading-tight" style={{ color: colors.white }}>
              Ready to Get Started?
            </h4>
            <p className="text-lg md:text-xl text-white/90 font-medium">
              Our expert team is standing by to help with all your gutter maintenance needs. Get a quote or call us directly!
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto shrink-0">
            <a 
              href="tel:07421433910"
              className="px-8 py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_8px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_12px_25px_rgba(0,0,0,0.2)] hover:-translate-y-1"
              style={{ backgroundColor: colors.white, color: colors.primary }}
            >
              <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: `${colors.primary}15` }}>
                <Phone className="w-4 h-4" />
              </div>
              Call Now
            </a>
            <a 
              href="/quote"
              className="px-8 py-4 rounded-xl font-bold border-2 transition-all duration-300 flex items-center justify-center gap-3 hover:bg-white hover:text-green-800 hover:border-white"
              style={{ borderColor: 'rgba(255,255,255,0.4)', color: colors.white }}
            >
              <Users className="w-5 h-5 opacity-80" />
              Get a Quote
            </a>
          </div>

        </div>
      </div>
    </section>
    </>
  );
}
