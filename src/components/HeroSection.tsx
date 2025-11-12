'use client';

import Image from 'next/image';

export default function HeroSection() {
  return (
    <div className="w-full relative overflow-visible min-h-screen"
    style={{
      backgroundImage: 'url(/Images/bgsaycheese.png)',
      backgroundSize: '105% auto',
      backgroundPosition: 'bottom center',
      backgroundRepeat: 'no-repeat',
    }}
    >
      <div className="relative min-h-[85vh] flex flex-col items-center justify-center">
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

        <button className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/60 hover:bg-white/80 rounded-full w-10 h-10 flex items-center justify-center shadow-lg transition-all">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="#7DBBE6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/60 hover:bg-white/80 rounded-full w-10 h-10 flex items-center justify-center shadow-lg transition-all">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="#7DBBE6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className="text-center ">
          <h1 className="text-white text-[10px] md:text-xs font-semibold mb-1 tracking-[0.25em]">
            CHINO&apos;S TRUSTED KIDS
          </h1>
          <h2 className="text-white text-5xl md:text-6xl  font-black tracking-tight leading-none mb-2">
            DENTIST &<br />ORTHODONTICS
          </h2>

          <p className="text-white text-xs md:text-sm font-normal">
            #1 Children&apos;s Dentist in Chino, California
          </p>
        </div>

        <div className="relative w-full max-w-7xl mx-auto flex items-center justify-center ">
          <div className="absolute left-[5%] md:left-[8%] lg:left-[12%] bottom-0 w-60 md:w-68 lg:w-80 z-20">
            <Image
              src="/Images/superman girl.svg"
              alt="Princess Character"
              width={320}
              height={550}
              className="w-full h-auto object-contain"
              priority
            />
          </div>

            <div className="w-full max-w-lg -translate-y-2">
              <Image
                src="/Images/teeths.svg"
                alt="Teeth with Braces"
                width={500}
                height={200}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          <div className="absolute right-[5%] md:right-[8%] lg:right-[8%] bottom-0 w-60 md:w-68 lg:w-80 z-20">
            <Image
              src="/Images/superman kid (1).svg"
              alt="Superhero Boy Character"
              width={320}
              height={480}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>
        </div>
    </div>
  );
}