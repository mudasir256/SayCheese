'use client';

import Image from 'next/image';

export default function HeroSection() {
  return (
    <div className="w-full"
      style={{
        backgroundImage: 'url(/Images/bgsaycheese.png)',
        backgroundSize: '100% 100%',
      }}
    >
      <div className="relative   flex flex-col items-center justify-center">
        <div className="absolute top-6 left-8 z-10">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="#FFD700" strokeWidth="2" />
          </svg>
        </div>
        <div className="absolute top-10 left-16 z-10">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="#FFD700" strokeWidth="2" />
          </svg>
        </div>

        <div className="absolute top-8 left-28 z-10">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="12" y1="5" x2="12" y2="19" stroke="#FFD700" strokeWidth="2.5" />
            <line x1="5" y1="12" x2="19" y2="12" stroke="#FFD700" strokeWidth="2.5" />
          </svg>
        </div>

        <div className="absolute top-3 right-6 z-10">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#FFD700" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
          </svg>
        </div>

        <div className="absolute bottom-48 right-16 z-10">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#FFD700" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
          </svg>
        </div>



        <div className="text-center pt-12 sm:pt-16 md:pt-20 lg:pt-24">
          <h1 className="text-white text-[8px] sm:text-[10px] md:text-xs font-semibold mb-1 tracking-[0.25em]">
            CHINO&apos;S TRUSTED KIDS
          </h1>
          <h2 className="text-white text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black tracking-tight leading-none mb-2">
            DENTIST &<br />ORTHODONTICS
          </h2>

          <p className="text-white text-[10px] sm:text-xs md:text-sm font-normal">
            #1 Children&apos;s Dentist in Chino, California
          </p>
        </div>

        <div className="relative w-full   flex items-center justify-center py-4 md:py-8">
          {/* Left Character - Princess */}
          <div className="absolute left-[8%] sm:left-[6%] md:left-[4%] lg:left-[11%] xl:left-[13%] 2xl:left-[12%] bottom-[60%] sm:bottom-[50%] md:bottom-[54%] lg:bottom-[52%]  xl:bottom-[50%] w-[22vw] sm:w-[24vw] md:w-[26vw] lg:w-[24vw]  xl:w-[23vw] 2xl:w-[22vw] z-20">
            <Image
              src="/Images/superman girl.png"
              alt="Princess Character"
              width={320}
              height={550}
              className="w-full h-auto object-contain"
              priority
            />
          </div>

          {/* Center Content - Teeth and Text */}
          <div className="relative z-10 flex flex-col items-center w-full">
            <Image
              src="/Images/teeths.png"
              alt="Teeth with Braces"
              width={500}
              height={200}
              className="w-[50vw] sm:w-[50vw] md:w-[52vw] lg:w-[42vw]  xl:w-[41vw] 2xl:w-[43vw] h-auto -translate-y-2 sm:-translate-y-8 md:-translate-y-16 lg:-translate-y-16 xl:-translate-y-16 2xl:-translate-y-20"
              priority
            />
            
            {/* Text positioned between characters - centered horizontally */}
            <div className="  -translate-y-6 md:-translate-y-16 lg:-translate-y-16  xl:-translate-y-24 left-1/2 transform  w-[70vw] sm:w-[60vw] md:w-auto max-w-md z-30 px-2">
              <h3 className="text-white text-center text-[15px] sm:text-[10px] md:text-sm lg:text-base xl:text-3xl font-bold tracking-wide leading-tight">
                GENTLE, FUN DENTAL CARE
                <br />
                FOR CHILDREN & TEENS
              </h3>
            </div>
            
            <div className="w-full lg:max-w-2xl  -translate-y-6 md:-translate-y-16 lg:-translate-y-16 xl:-translate-y-24">
              <p className="text-white text-center text-xs sm:text-sm md:text-base mt-2 px-4 leading-relaxed">
              Say Cheese Kids Dental & Orthodontics offers child-friendly dental care, including cleanings, braces, emergency treatments, and full pediatric services by Dr. Joshua Kohan.
              </p>
            </div>
          </div>
          
          {/* Right Character - Superhero */}
          <div className="absolute right-[5%] sm:right-[1%] md:right-[1%] lg:right-[7%] xl:right-[8%]  bottom-[60%] sm:bottom-[50%] md:bottom-[54%] lg:bottom-[52%]  xl:bottom-[50%]  w-[22vw] sm:w-[24vw] md:w-[26vw] lg:w-[24vw]  xl:w-[23vw] 2xl:w-[22vw] z-20">
            <Image
              src="/Images/superman kid.png"
              alt="Superhero Boy Character"
              width={320}
              height={480}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>

        <div className="w-full flex justify-center  -mt-6">
          <button className="bg-[#c6577e] text-white px-4 py-2 rounded-full font-bold text-lg md:text-xl hover:bg-[#e57fa3] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
}