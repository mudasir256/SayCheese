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
          <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-none mb-2">
            DENTIST &<br />ORTHODONTICS
          </h2>

          <p className="text-white text-[10px] sm:text-xs md:text-sm font-normal">
            #1 Children&apos;s Dentist in Chino, California
          </p>
        </div>

        <div className="relative w-full max-w-7xl mx-auto flex items-center justify-center py-4 md:py-8">
          {/* Left Character - Princess */}
          <div className="absolute left-[10%] md:left-[calc(58%-36vw-2%)] bottom-[63%] md:bottom-[40%] lg:bottom-[48%] w-[15vw] md:w-[20vw] z-20">
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
              className="w-[25vw] md:w-[32vw] mx-auto h-auto -translate-y-4 md:-translate-y-8"
              priority
            />
            
            {/* Text positioned between characters - centered horizontally */}
            <div className="absolute top-[20%] md:top-[45%] left-1/2 transform -translate-x-1/2 w-[70vw] sm:w-[60vw] md:w-auto max-w-md z-30 px-2">
              <h3 className="text-white text-center text-[9px] sm:text-[10px] md:text-sm lg:text-base xl:text-lg font-bold tracking-wide leading-tight">
                GENTLE, FUN DENTAL CARE
                <br />
                FOR CHILDREN & TEENS
              </h3>
            </div>
            
            <div className="w-full lg:max-w-2xl mt-1 md:mt-2 lg:-translate-y-2">
              <p className="text-white text-center text-xs sm:text-sm md:text-base mt-2 px-4 leading-relaxed">
                At Say Cheese Kids Dental & Orthodontics, we specialize in creating positive dental experiences for children of all ages. Our experienced dentist, Dr. Joshua Kohan, provides comprehensive dental care including routine cleanings, kids braces through our orthodontic partners, emergency dental treatment, and comprehensive children&apos;s dental services in a comfortable, child-friendly environment.
              </p>
            </div>
          </div>
          
          {/* Right Character - Superhero */}
          <div className="absolute right-[10%] md:right-[calc(55%-36vw-2%)] bottom-[63%] md:bottom-[40%] lg:bottom-[48%] w-[15vw] md:w-[20vw] z-20">
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