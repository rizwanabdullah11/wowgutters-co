'use client';

import { useState, useEffect } from 'react';
import { colors } from '@/constants/colors';
import { 
  X, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Shield, 
  Clock,
  Phone,
  Mail,
  MapPin,
  User,
  Sparkles
} from 'lucide-react';

const serviceOptions = [
  { 
    id: 'free-check', 
    label: 'Free Gutter Check',
    icon: <CheckCircle className="w-5 h-5" />,
    popular: true,
    description: 'Complete inspection & quote'
  },
  { 
    id: 'gutter-cleaning', 
    label: 'Gutter Cleaning',
    icon: <Sparkles className="w-5 h-5" />,
    popular: false,
    description: 'Professional cleaning service'
  },
  { 
    id: 'gutter-repairs', 
    label: 'Gutter Repairs',
    icon: <Shield className="w-5 h-5" />,
    popular: false,
    description: 'Fix leaks & damage'
  },
  { 
    id: 'gutter-installation', 
    label: 'Gutter Installation',
    icon: <CheckCircle className="w-5 h-5" />,
    popular: false,
    description: 'New gutter systems'
  },
  { 
    id: 'upvc-cleaning', 
    label: 'UPVC Cleaning',
    icon: <Sparkles className="w-5 h-5" />,
    popular: false,
    description: 'Windows, doors & fascias'
  },
  { 
    id: 'roof-cleaning', 
    label: 'Roof Cleaning',
    icon: <Sparkles className="w-5 h-5" />,
    popular: false,
    description: 'Moss removal & cleaning'
  },
];

export default function QuoteSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  useEffect(() => {
    // Show popup after 1 minute (60000 milliseconds)
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 60000);

    return () => clearTimeout(timer);
  }, []);

  const handleServiceToggle = (serviceId: string) => {
    setSelectedServices(prev =>
      prev.includes(serviceId)
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const handleNext = () => {
    if (currentStep === 1 && selectedServices.length > 0) {
      setCurrentStep(2);
    }
  };

  const handleBack = () => {
    if (currentStep === 2) {
      setCurrentStep(1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Quote submitted:', { selectedServices, formData });
    alert('Thank you! We will contact you soon.');
    setSelectedServices([]);
    setFormData({ name: '', email: '', phone: '', address: '' });
    setCurrentStep(1);
    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  const progress = currentStep === 1 ? (selectedServices.length > 0 ? 50 : 0) : 100;

  if (!isVisible) return null;

  return (
    <>
      {/* Enhanced Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 animate-fade-in"
        onClick={handleClose}
      />
      
      {/* Enhanced Popup on left side */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 w-full max-w-lg animate-slide-in-left">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          {/* Enhanced Header */}
          <div 
            className="relative p-8 text-white overflow-hidden"
            style={{ backgroundColor: colors.primary }}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 right-4 w-20 h-20 border border-white rounded-full"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 border border-white rounded-full"></div>
            </div>

            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            <div className="relative z-10">
              {/* Progress Badge */}
              <div className="inline-flex items-center gap-2 mb-4">
                <div 
                  className="px-4 py-2 rounded-full text-sm font-bold"
                  style={{ backgroundColor: colors.cta, color: colors.white }}
                >
                  {progress}% Complete
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-sm">FREE Quote</span>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-2">
                Get Your <span style={{ color: colors.cta }}>FREE</span> Quote
              </h2>
              <p className="text-white/90 mb-4">
                {currentStep === 1 ? 'What services do you need?' : 'Almost done! Just your details...'}
              </p>

              {/* Enhanced Progress Bar */}
              <div className="relative">
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div
                    className="h-2 rounded-full transition-all duration-500 ease-out"
                    style={{ 
                      backgroundColor: colors.cta,
                      width: `${progress}%`
                    }}
                  />
                </div>
                <div className="flex justify-between mt-2 text-sm text-white/80">
                  <span>Services</span>
                  <span>Contact Info</span>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Content */}
          <div className="p-8 max-h-[60vh] overflow-y-auto">
            {/* Step 1: Services Selection */}
            {currentStep === 1 && (
              <div className="space-y-4">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2" style={{ color: colors.text }}>
                    Select Your Services
                  </h3>
                  <p className="text-sm text-gray-500">Choose one or more services you need</p>
                </div>

                {serviceOptions.map((service) => (
                  <label
                    key={service.id}
                    className="group relative flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                    style={{
                      borderColor: selectedServices.includes(service.id) ? colors.primary : '#e5e7eb',
                      backgroundColor: selectedServices.includes(service.id) ? '#f0f9ff' : 'white',
                    }}
                  >
                    {/* Popular Badge */}
                    {service.popular && (
                      <div className="absolute -top-2 -right-2">
                        <div 
                          className="px-2 py-1 text-xs font-bold rounded-full text-white"
                          style={{ backgroundColor: colors.cta }}
                        >
                          Popular
                        </div>
                      </div>
                    )}

                    <div className="flex items-center flex-1">
                      <div 
                        className="w-12 h-12 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300"
                        style={{ 
                          backgroundColor: selectedServices.includes(service.id) ? colors.primary : '#f3f4f6',
                          color: selectedServices.includes(service.id) ? 'white' : colors.primary
                        }}
                      >
                        {service.icon}
                      </div>
                      
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800">{service.label}</h4>
                        <p className="text-sm text-gray-500">{service.description}</p>
                      </div>
                    </div>

                    <input
                      type="checkbox"
                      checked={selectedServices.includes(service.id)}
                      onChange={() => handleServiceToggle(service.id)}
                      className="w-5 h-5 rounded focus:ring-2 ml-4"
                      style={{ 
                        accentColor: colors.primary,
                      }}
                    />
                  </label>
                ))}

                {/* Next Button */}
                <button
                  onClick={handleNext}
                  disabled={selectedServices.length === 0}
                  className="w-full mt-6 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-1"
                  style={{ 
                    backgroundColor: selectedServices.length > 0 ? colors.primary : '#d1d5db',
                    color: 'white'
                  }}
                >
                  Continue
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            )}

            {/* Step 2: Contact Information */}
            {currentStep === 2 && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2" style={{ color: colors.text }}>
                    Your Contact Details
                  </h3>
                  <p className="text-sm text-gray-500">We'll use this to send your free quote</p>
                </div>

                <div className="space-y-4">
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300"
                      placeholder="Full Name *"
                    />
                  </div>

                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300"
                      placeholder="Email Address *"
                    />
                  </div>

                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300"
                      placeholder="Phone Number *"
                    />
                  </div>

                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300"
                      placeholder="Property Address *"
                    />
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-6">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="flex-1 py-4 rounded-xl font-semibold border-2 transition-all duration-300 hover:bg-gray-50"
                    style={{ borderColor: colors.primary, color: colors.primary }}
                  >
                    Back
                  </button>
                  
                  <button
                    type="submit"
                    className="flex-2 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1"
                    style={{ 
                      backgroundColor: colors.primary,
                      color: 'white',
                      flex: '2'
                    }}
                  >
                    Get My FREE Quote
                    <CheckCircle className="w-5 h-5" />
                  </button>
                </div>

                {/* Trust Indicators */}
                <div className="mt-6 p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center justify-center gap-6 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-green-500" />
                      <span>100% Free</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-blue-500" />
                      <span>Quick Response</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>No Obligation</span>
                    </div>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-in-left {
          from {
            transform: translateX(-100%) translateY(-50%);
            opacity: 0;
          }
          to {
            transform: translateX(0) translateY(-50%);
            opacity: 1;
          }
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .animate-slide-in-left {
          animation: slide-in-left 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .animate-fade-in {
          animation: fade-in 0.4s ease-out;
        }
      `}</style>
    </>
  );
}
