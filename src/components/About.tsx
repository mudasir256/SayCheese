'use client';

import Image from 'next/image';

export default function AboutSection() {
  return (
    <div className="w-full relative overflow-visible bg-white">
      <div className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-bold">
              <span className="text-[#b4d96c] font-bold">About</span>{' '}
              <span className="text-[#f9c151] font-bold">Say</span>{' '}
              <span className="text-[#7DBBE6] font-bold">Ch<span className="text-[#e57fa3] font-bold">ee</span>se</span>
              <span className="text-[#b4d96c] font-bold">Kids</span>
            </h2>
            <p className="text-gray-700 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
              We provide comprehensive dental care for children in a warm, welcoming environment designed to make every visit a positive experience.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 md:gap-16 items-start">
            <div className="lg:col-span-1 space-y-8">
              <div className="flex items-start gap-4">
                <p className="text-gray-800 text-base md:text-lg leading-relaxed pt-2 text-center lg:text-right">
                  At Say Cheese Kids Dental & Orthodontics, we help children of all ages achieve healthy, beautiful smiles with personalized, growing care.
                </p>
              </div>
              
              <div className="flex flex-col gap-4 mt-6 items-center lg:items-end">
                <button className="px-6 py-3 bg-[#b4d96c] hover:bg-[#b4d96c] text-white rounded-full text-base font-semibold transition-colors shadow-sm w-fit">
                  Children&apos;s Dentistry
                </button>
                <button className="px-6 py-3 bg-[#f9c151] hover:bg-[#f9c151] text-white rounded-full text-base font-semibold transition-colors shadow-sm w-fit">
                  Orthodontics Available
                </button>
              </div>
              <div className="flex-shrink-0 mt-20 hidden lg:block">
                  <svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2 L12 4 M12 20 L12 22 M2 12 L4 12 M20 12 L22 12 M4.93 4.93 L6.34 6.34 M17.66 17.66 L19.07 19.07 M4.93 19.07 L6.34 17.66 M17.66 6.34 L19.07 4.93" stroke="#b4d96c" strokeWidth="1.5" strokeLinecap="round" />
                    <circle cx="9" cy="9" r="1.5" fill="#333" />
                    <circle cx="15" cy="9" r="1.5" fill="#333" />
                    <path d="M9 15 Q12 18 15 15" stroke="#333" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                  </svg>
                </div>
            </div>
            
            <div className="lg:col-span-1 flex justify-center items-center py-4 relative">
              <div className="relative w-full max-w-md h-80 md:h-96">
                <Image
                  src="/Images/about.png"
                  alt="Happy children at dental clinic"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            <div className="lg:col-span-1 space-y-8 text-center lg:text-left">
              <p className="text-gray-800 text-base md:text-lg leading-relaxed pt-2">
                We make dental visits fun and stress-free for kids with a friendly team, advanced technology, and a comforting environment designed just for them.
              </p>
              
              <div className="flex flex-col gap-4 mt-6 items-center lg:items-start">
                <button className="px-6 py-3 bg-[#7DBBE6] hover:bg-[#7DBBE6] text-white rounded-full text-base font-semibold transition-colors shadow-sm w-fit">
                  After-Hours Care
                </button>
                <button className="px-6 py-3 bg-[#e57fa3] hover:bg-[#e57fa3] text-white rounded-full text-base font-semibold transition-colors shadow-sm w-fit">
                  Comfortable
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}