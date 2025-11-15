'use client';

import Image from 'next/image';
import Button from './Button';

export default function ReadyToGive() {
  return (
    <div className="w-full  relative py-10 ">

      <div className="relative bg-[#e483a8] max-lg:overflow-hidden">

        <div className="max-w-7xl h-[300px] max-lg:min-h-[400px] max-lg:h-auto max-lg:py-8 mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between w-full max-lg:gap-6">

            <div className="text-white space-y-4  bottom-10 max-lg:bottom-0 relative text-center max-lg:order-2">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight px-2 sm:px-0">
                READY TO GIVE YOUR CHILD
                <br className='hidden lg:block' />
                THE BEST DENTAL CARE IN CHINO?
              </h2>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed px-2 sm:px-0">
                Call us at <span className="font-semibold">(909) 479-6030</span> and see why families throughout Chino, Chino Hills, and the Inland Empire trust Say Cheese Kids with their children&apos;s smiles.
              </p>
              <div className="flex justify-center">
                <Button
                  text="Call (909) 479-6030 Today"

                  size="lg"
                  rounded="full"
                  variant="pink"
                />
              </div>
            </div>

            <div className="relative bottom-14 max-lg:bottom-0 flex justify-center lg:justify-end items-center overflow-visible max-lg:order-1 max-lg:-mt-8">
              <Image
                src="/Images/teeth.png"
                alt="Friendly tooth character with balloons"
                width={750}
                height={950}
                className="object-contain scale-105 max-lg:scale-100 max-lg:w-[200px] max-lg:h-auto"
                priority
              />
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
