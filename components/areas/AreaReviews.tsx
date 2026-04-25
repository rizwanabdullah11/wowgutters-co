import { colors } from '@/constants/colors';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const reviewsData = [
  {
    name: 'Paul Graham',
    time: '4 years ago',
    desc: 'Absolutely delighted with the clearance of our exterior pipes and fascias. I definitely intend to book them again down the line.',
    image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100'
  },
  {
    name: 'Jason Soanes',
    time: '5 years ago',
    desc: 'Outstanding and highly responsive team. They took the time to meticulously assess the situation, resolved our leaks and cleared everything seamlessly.',
    image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100'
  },
  {
    name: 'Stephen Baker',
    time: '5 years ago',
    desc: 'The engineer was incredibly insightful. He sorted the job out swiftly and offered genuinely useful suggestions for future maintenance.',
    image: null
  }
];

export default function AreaReviews() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header styling */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-[32px] sm:text-[40px] font-black text-[#0f172a] uppercase tracking-tight">
              CLIENT TESTIMONIALS
            </h2>
            <div className="h-[2px] bg-gray-300 flex-1 ml-2 hidden sm:block"></div>
          </div>
          <p className="text-gray-500 text-lg">Discover what genuine property owners are saying about our dedicated service.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
           
           {/* Left Rating Box */}
           <div className="w-full lg:w-[320px] shrink-0 flex flex-col items-center justify-center p-8">
             <div className="flex items-center gap-2 mb-4 relative">
                <div className="w-[80px] h-[80px] rounded-full border-4 shadow-lg flex items-center justify-center font-black text-3xl text-white mr-4" style={{ backgroundColor: colors.primary, borderColor: 'white' }}>
                  W
                </div>
                <div className="absolute -top-2 -right-2 bg-white rounded-full p-1 shadow">
                   <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" className="w-5 h-5" />
                </div>
             </div>
             
             <div className="text-center">
               <h3 className="text-xl font-bold text-[#1447db] mb-1">Excellent</h3>
               <p className="text-[17px] font-bold text-[#1447db] mb-2">WOW Gutter Cleaning</p>
               
               <div className="flex items-center justify-center gap-2 mb-2">
                 <span className="text-xl font-bold text-[#f59e0b]">5.0 Rating</span>
               </div>
               
               <p className="text-[13px] text-gray-500 mb-6 font-medium">Based on 550 reviews</p>
               
               <button className="bg-[#1447db] hover:bg-[#1035a6] text-white text-[13px] font-bold px-6 py-2.5 rounded-full shadow-md transition-colors w-full">
                 See all reviews
               </button>
             </div>
           </div>

           {/* Right Carousel Cards */}
           <div className="flex-1 flex gap-4 overflow-x-auto pb-4 snap-x relative group/carousel items-center">
              
              <div className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 rounded-full shadow border border-gray-100 items-center justify-center z-10 cursor-pointer">
                <ChevronLeft className="w-5 h-5 text-gray-400" />
              </div>
              <div className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 rounded-full shadow border border-gray-100 items-center justify-center z-10 cursor-pointer">
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </div>

              {reviewsData.map((review, i) => (
                <div key={i} className="min-w-[280px] w-[280px] bg-[#f8f9fa] rounded-md p-6 border border-gray-100 snap-center shrink-0">
                  <div className="flex items-start justify-between mb-4">
                     <div className="flex items-center gap-3">
                        {review.image ? (
                          <img src={review.image} alt={review.name} className="w-10 h-10 rounded-full object-cover" />
                        ) : (
                          <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 font-bold flex items-center justify-center text-lg uppercase">
                            {review.name.charAt(0)}
                          </div>
                        )}
                        <div>
                          <p className="text-[13px] font-bold text-[#1447db]">{review.name}</p>
                          <p className="text-[11px] text-gray-500">{review.time}</p>
                        </div>
                     </div>
                     <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" className="w-[14px] h-[14px]" />
                  </div>
                  <p className="text-[13px] text-gray-600 leading-relaxed">
                    {review.desc}
                  </p>
                </div>
              ))}
           </div>

        </div>

      </div>
    </section>
  )
}
