'use client';

import Image from 'next/image';

export default function AboutSection() {
  return (
    <div className="w-full relative overflow-visible bg-white">
      <div className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          {/* Header Section */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-green-500">About</span>{' '}
              <span className="text-orange-500">Say</span>{' '}
              <span className="text-blue-500">Cheese</span>
              <span className="text-pink-500">Kids</span>
            </h2>
            <p className="text-gray-700 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
              We provide comprehensive dental care for children in a warm, welcoming environment designed to make every visit a positive experience.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 md:gap-16 items-start">
            
            {/* Left Column */}
            <div className="lg:col-span-1 space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="8" fill="#FFD700" />
                    <circle cx="12" cy="12" r="6" fill="#FFA500" />
                    <path d="M12 2 L12 4 M12 20 L12 22 M2 12 L4 12 M20 12 L22 12 M4.93 4.93 L6.34 6.34 M17.66 17.66 L19.07 19.07 M4.93 19.07 L6.34 17.66 M17.66 6.34 L19.07 4.93" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round" />
                    <circle cx="9" cy="9" r="1.5" fill="#333" />
                    <circle cx="15" cy="9" r="1.5" fill="#333" />
                    <path d="M9 15 Q12 18 15 15" stroke="#333" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                  </svg>
                </div>
                <p className="text-gray-800 text-base md:text-lg leading-relaxed pt-2">
                  At Say Cheese Kids Dental & Orthodontics, we help children of all ages achieve healthy, beautiful smiles with personalized, growing care.
                </p>
              </div>
              
              <div className="flex flex-col gap-4 mt-6">
                <button className="px-6 py-3 bg-green-200 hover:bg-green-300 text-green-800 rounded-full text-base font-semibold transition-colors shadow-sm w-fit">
                  Children&apos;s Dentistry
                </button>
                <button className="px-6 py-3 bg-orange-200 hover:bg-orange-300 text-orange-800 rounded-full text-base font-semibold transition-colors shadow-sm w-fit">
                  Orthodontics Available
                </button>
              </div>
            </div>

            {/* Center Image Column */}
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

            {/* Right Column */}
            <div className="lg:col-span-1 space-y-8">
              <p className="text-gray-800 text-base md:text-lg leading-relaxed pt-2 text-right">
                We make dental visits fun and stress-free for kids with a friendly team, advanced technology, and a comforting environment designed just for them.
              </p>
              
              <div className="flex flex-col gap-4 mt-6 items-end">
                <button className="px-6 py-3 bg-blue-200 hover:bg-blue-300 text-blue-800 rounded-full text-base font-semibold transition-colors shadow-sm w-fit">
                  After-Hours Care
                </button>
                <button className="px-6 py-3 bg-pink-200 hover:bg-pink-300 text-pink-800 rounded-full text-base font-semibold transition-colors shadow-sm w-fit">
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