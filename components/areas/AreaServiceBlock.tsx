import { colors } from '@/constants/colors';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface AreaServiceBlockProps {
  title: string;
  descriptions: string[];
  iconSrc: string;
  buttonText?: string;
  phoneNumber?: string;
  backgroundColor?: string;
}

export default function AreaServiceBlock({
  title,
  descriptions,
  iconSrc,
  buttonText = "Get A Quote",
  phoneNumber = "07421 433910",
  backgroundColor = "bg-white"
}: AreaServiceBlockProps) {
  return (
    <div className={`w-full py-16 px-4 ${backgroundColor} border-b border-gray-100`}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
        
        {/* Left Icon (1) */}
        <div className="w-48 h-48 sm:w-64 sm:h-64 shrink-0 relative">
          {/* Decorative rotating dotted ring or just a clean shadow on the image */}
          <div className="absolute inset-0 rounded-full border-[3px] shadow-xl p-2 bg-white" style={{ borderColor: colors.primary }}>
            <img 
              src={iconSrc} 
              alt={title}
              className="w-full h-full object-contain rounded-full"
            />
          </div>
        </div>

        {/* Center Text (2) */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 tracking-tight leading-tight">
            {title}
          </h2>
          <div className="space-y-4 text-gray-600 font-medium text-base sm:text-lg leading-relaxed">
            {descriptions.map((text, idx) => (
              <p key={idx}>{text}</p>
            ))}
          </div>
        </div>

        {/* Right CTA (3) */}
        <div className="w-full md:w-[280px] shrink-0 text-center flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
          <Link href="/quote" className="w-full block mb-5">
            <Button 
              className="w-full text-white font-bold text-lg py-6 rounded-lg shadow-md transition-transform hover:-translate-y-1 hover:shadow-lg flex items-center justify-center gap-2"
              style={{ backgroundColor: colors.primary }}
            >
              <ChevronRight className="w-5 h-5" /> {buttonText}
            </Button>
          </Link>
          
          <p className="text-gray-500 font-semibold mb-2">Want to speak to someone?</p>
          <a 
            href={`tel:${phoneNumber.replace(/\s+/g, '')}`}
            className="text-2xl sm:text-3xl font-black transition-colors hover:text-green-600"
            style={{ color: colors.primary }}
          >
            {phoneNumber}
          </a>
        </div>

      </div>
    </div>
  );
}
