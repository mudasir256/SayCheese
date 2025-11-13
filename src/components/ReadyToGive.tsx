'use client';

import Image from 'next/image';

export default function ReadyToGive() {
  return (
    <div className="w-full relative overflow-visible py-10">

      <div className="relative bg-[#e483a8] overflow-visible py-10">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12 items-center justify-between w-full">

            {/* TEXT */}
            <div className="text-white space-y-4 md:space-y-6 text-center">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight px-2 sm:px-0">
                READY TO GIVE YOUR CHILD THE{' '}
                <span className="block sm:inline">BEST DENTAL CARE IN CHINO?</span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed px-2 sm:px-0">
                Call us at <span className="font-semibold">(909) 479-6030</span> and see why families throughout Chino, Chino Hills, and the Inland Empire trust Say Cheese Kids with their children&apos;s smiles.
              </p>
              <div className="flex justify-center pt-2">
                <button className="bg-pink-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-6 sm:px-8 rounded-full text-base sm:text-lg md:text-xl transition-colors shadow-lg w-full sm:w-auto">
                  Call (909) 479-6030 Today
                </button>
              </div>
            </div>

            {/* IMAGE */}
            <div className="relative flex justify-center lg:justify-end items-center overflow-visible">
              <Image
                src="/Images/teeth.png"
                alt="Friendly tooth character with balloons"
                width={750}       
                height={3000}      
                className="object-contain scale-80 sm:scale-130 md:scale-140 lg:scale-170 md:-mr-14 lg:-mr-24"
                priority
              />
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
