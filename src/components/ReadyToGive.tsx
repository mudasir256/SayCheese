'use client';

import Image from 'next/image';

export default function ReadyToGive() {
  return (
    <div className="w-full relative overflow-visible bg-[#e483a8]">
      {/* Light Beige/Cream Top Strip */}
      
      {/* Main Pink Section with Wavy Borders */}
      <div className="relative bg-[#e483a8] py-8 sm:py-10 md:py-12 lg:py-16">


        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
            {/* Left Section - Text Content */}
            <div className="text-white space-y-4 md:space-y-6 text-center lg:text-left order-2 lg:order-1">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight px-2 sm:px-0">
                READY TO GIVE YOUR CHILD THE{' '}
                <span className="text-yellow-300 block sm:inline">BEST DENTAL CARE IN CHINO?</span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed px-2 sm:px-0">
                Call us at <span className="font-semibold">(909) 479-6030</span> and see why families throughout Chino, Chino Hills, and the Inland Empire trust Say Cheese Kids with their children&apos;s smiles.
              </p>
              <div className="flex justify-center lg:justify-start pt-2">
                <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-6 sm:px-8 rounded-full text-base sm:text-lg md:text-xl transition-colors shadow-lg w-full sm:w-auto">
                  Call (909) 479-6030 Today
                </button>
              </div>
            </div>

            {/* Right Section - Illustration */}
            <div className="flex justify-center lg:justify-end items-center order-1 lg:order-2">
              <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                <Image
                  src="/Images/teeth.png"
                  alt="Friendly tooth character with balloons"
                  width={400}
                  height={600}
                  className="object-contain w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Wavy Bottom Border */}
        <svg 
          className="absolute bottom-0 left-0 w-full"
          style={{ height: '40px' }}
          preserveAspectRatio="none"
          viewBox="0 0 1440 40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M0,20 Q180,5 360,20 T720,20 T1080,20 T1440,20 L1440,40 L0,40 Z" 
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
}