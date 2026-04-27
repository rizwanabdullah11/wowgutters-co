import { colors } from '@/constants/colors';
import { MapPin } from 'lucide-react';

export default function AreaContactMap() {
  return (
    <section className="relative overflow-hidden w-full flex flex-col">
      {/* Top Wave and Header block - USING BRAND PRIMARY INSTEAD OF BLUE AS PER PREVIOUS INSTRUCTIONS */}
      <div 
        className="w-full pt-16 pb-12 flex flex-col items-center justify-center text-center px-4 relative z-10"
        style={{ backgroundColor: colors.primary }}
      >
        {/* Subtle curve bottom */}
        <div className="absolute -bottom-[1px] left-0 w-full overflow-hidden leading-[0]">
           <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-[40px] block" xmlns="http://www.w3.org/2000/svg">
              <path d="M0,60 C480,0 960,60 1440,0 L1440,60 L0,60 Z" fill="white" />
           </svg>
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#0f172a] mb-2 uppercase tracking-tight drop-shadow-sm">
          CALL US TODAY!
        </h2>
        <p className="text-white sm:text-lg mb-6 font-medium tracking-wide">
          Please give us a call on 07421 433910.
        </p>
        
        <a 
          href="tel:07421433910"
          className="bg-[#0f172a] hover:bg-[#1e293b] text-white text-[15px] font-bold px-8 py-3 rounded shadow-md transition-colors"
        >
          Call Now: 07421 433910
        </a>
      </div>

      {/* Mocking the Map Background closely to the screenshot */}
      <div className="hidden w-full h-[400px] relative bg-[#e3eadd]">
         {/* We fake a google map style bg image */}
         <img 
           src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1600" 
           alt="Map Background" 
           className="w-full h-full object-cover opacity-60 mix-blend-multiply filter grayscale-[30%] sepia-[20%] hue-rotate-50 saturate-50"
         />
         
         {/* Overlay Grid / UI elements to make it look like a map */}
         <div className="absolute top-4 left-4 right-4 bottom-4 pointer-events-none">
            {/* Some mock map pins corresponding randomly around the center */}
            <div className="absolute top-[30%] left-[48%] flex flex-col items-center">
               <div className="text-red-600 bg-white rounded-full p-[2px] shadow shadow-red-900/50"><MapPin className="w-6 h-6 fill-current" /></div>
               <span className="text-[11px] font-bold text-black bg-white/90 backdrop-blur-sm px-1.5 mt-0.5 rounded shadow-sm">Derby</span>
            </div>
            <div className="absolute top-[45%] left-[45%] flex flex-col items-center">
               <div className="text-red-600 bg-white rounded-full p-[2px] shadow shadow-red-900/50"><MapPin className="w-6 h-6 fill-current" /></div>
               <span className="text-[11px] font-bold text-black bg-white/90 backdrop-blur-sm px-1.5 mt-0.5 rounded shadow-sm">Repton</span>
            </div>
            <div className="absolute top-[65%] left-[42%] flex flex-col items-center">
               <div className="text-red-600 bg-white rounded-full p-[2px] shadow shadow-red-900/50"><MapPin className="w-6 h-6 fill-current" /></div>
            </div>
            <div className="absolute top-[75%] left-[46%] flex flex-col items-center">
               <div className="text-red-600 bg-white rounded-full p-[2px] shadow shadow-red-900/50"><MapPin className="w-6 h-6 fill-current" /></div>
               <span className="text-[11px] font-bold text-black bg-white/90 backdrop-blur-sm px-1.5 mt-0.5 rounded shadow-sm">Swadlincote</span>
            </div>

            {/* Map Controls mock */}
            <div className="absolute top-0 right-0 flex flex-col gap-2">
               <div className="bg-white p-2 rounded shadow-sm text-gray-600 w-8 h-8 flex items-center justify-center font-bold text-lg cursor-pointer">[]</div>
            </div>
            <div className="absolute bottom-0 right-0 flex flex-col gap-0 border border-t-0 rounded shadow-sm overflow-hidden bg-white">
               <div className="p-2 text-gray-600 w-8 h-8 flex items-center justify-center font-semibold text-xl border-b border-gray-200 cursor-pointer">+</div>
               <div className="p-2 text-gray-600 w-8 h-8 flex items-center justify-center font-bold text-xl cursor-pointer">−</div>
            </div>
         </div>
      </div>

    </section>
  )
}
