import { colors } from '@/constants/colors';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const workItems = [
  {
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
    title: 'Extensive Drainage Overhaul at a Spacious Residential Build',
    author: 'Iain Davies',
  },
  {
    image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800',
    title: 'Educational Facility Clearance: A Secure, High-Level Project Executed in Derby',
    author: 'Commercial, Harley Brown, Iain Davies',
  },
  {
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800',
    title: 'Rapid Resolution for Substandard Rain Catchments',
    author: 'Harley Brown, Iain Davies, Martin Sudell',
  }
];

export default function AreaRecentWork() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header styling as per screenshot */}
        {/* <div className="mb-8">
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-[32px] sm:text-[40px] font-black text-[#0f172a] uppercase tracking-tight">
              RECENT WORK
            </h2>
            <div className="h-[2px] bg-gray-300 flex-1 ml-2 hidden sm:block"></div>
          </div>
          <p className="text-gray-500 text-lg">Noteworthy jobs we have recently completed.</p>
        </div> */}

        {/* Grid */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative group">

          {/* Mock Carousel Navigation Buttons */}
        {/* <div className="absolute top-1/2 -left-4 -translate-y-1/2 w-8 h-8 bg-black/50 text-white flex items-center justify-center cursor-pointer hover:bg-black/70 z-10 hidden md:flex opacity-0 group-hover:opacity-100 transition-opacity">
            <ArrowLeft className="w-4 h-4" />
          </div>
          <div className="absolute top-1/2 -right-4 -translate-y-1/2 w-8 h-8 bg-black/50 text-white flex items-center justify-center cursor-pointer hover:bg-black/70 z-10 hidden md:flex opacity-0 group-hover:opacity-100 transition-opacity">
            <ArrowRight className="w-4 h-4" />
          </div>

          {workItems.map((item, idx) => (
            <div key={idx} className="flex flex-col group/card cursor-pointer">
              <div className="aspect-[4/3] w-full overflow-hidden mb-4 relative drop-shadow-sm border border-gray-100 rounded">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover  group-hover/card:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-bold text-gray-800 flex items-center gap-1 shadow-sm">
                  <div className="w-4 h-4 rounded-full flex items-center justify-center text-[8px] font-black text-white" style={{ backgroundColor: colors.primary }}>
                    S
                  </div>
                  WOW
                </div>
              </div>
              <h3 className="text-[17px] font-medium text-gray-800 leading-snug mb-2 group-hover/card:text-[#19C58B] transition-colors">{item.title}</h3>
              <p className="text-[12px] text-gray-500">{item.author}</p>
            </div>
          ))}
        </div>  */}

      </div>
    </section>
  )
}
