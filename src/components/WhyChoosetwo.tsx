'use client';

import Image from 'next/image';

export default function WhyChoosetwo() {
  return (
    <div className="w-full relative overflow-visible bg-amber-50 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-pink-500 mb-8 md:mb-12 text-center ">
          WHY CHOOSE SAY CHEESE KIDS FOR YOUR CHILD&apos;S DENTAL CARE IN CHINO?
        </h2>
      </div>

      {/* Main Content Grid */}
      <div className="flex flex-col lg:flex-row w-full gap-6 lg:gap-8 xl:gap-12 items-start">
        {/* Left Section - Full Width Image (touches edges) */}
        <div className="order-2 lg:order-1 w-full lg:w-1/3 xl:w-[35%] relative -mx-4 sm:-mx-6 md:mx-0 md:px-4 lg:mx-0 lg:-mr-4 xl:-mr-6 pt-8 lg:pt-12">
          <div className="relative w-full h-[300px] sm:h-[380px] md:h-[450px] lg:h-[500px] xl:h-[550px]">
            <Image
              src="/Images/whychoose.png"
              alt="Dentist examining child's dental X-ray"
              fill
              className="object-cover rounded-lg lg:rounded-none"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 50vw, 30vw"
              priority
            />
          </div>
        </div>

        {/* Right Section - Informational Blocks */}
        <div className="order-1 lg:order-2 bg-amber-50 grid grid-cols-1 md:grid-cols-2 gap-8 px-4 sm:px-6 lg:px-8 pt-8 lg:pt-12 pb-8 lg:pb-12 lg:flex-1">
          {/* Block 1: Experienced Children's Dentist */}
          <div className="pr-0 lg:pr-8">
            <div className="flex justify-center lg:justify-start mb-4">
              <svg width="60" height="60" viewBox="0 0 60 60">
                <circle cx="30" cy="30" r="30" fill="#ffffff" />
                <path d="M18 12 Q12 18 12 30 Q12 42 18 48 L24 42 Q20 36 20 30 Q20 24 24 18 Z" fill="#87ceeb" opacity="0.7" />
                <path d="M42 12 Q48 18 48 30 Q48 42 42 48 L36 42 Q40 36 40 30 Q40 24 36 18 Z" fill="#87ceeb" opacity="0.7" />
                <rect x="22" y="24" width="16" height="14" rx="2" fill="#fff" stroke="#87ceeb" strokeWidth="2" />
                <circle cx="30" cy="31" r="2" fill="#ff6b6b" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2 text-center lg:text-left">
              Experienced Children&apos;s<br />Dentist
            </h3>
            <div className="w-16 h-1 mb-3 mx-auto lg:mx-0" style={{ backgroundColor: '#e8a5a5' }}></div>
            <p className="text-gray-700 text-sm leading-relaxed text-center lg:text-left">
              Dr. Joshua Kohan has 5+ years of experience treating children, with extensive training in child development, behavior management, and the unique dental needs of growing children.
            </p>
          </div>

          {/* Block 2: Advanced Technology & Techniques */}
          <div className="pr-0 lg:pr-8">
            <div className="flex justify-center lg:justify-start mb-4">
              <svg width="60" height="60" viewBox="0 0 60 60">
                <circle cx="30" cy="30" r="30" fill="#ffffff" />
                <circle cx="30" cy="30" r="20" fill="none" stroke="#87ceeb" strokeWidth="2" />
                <rect x="24" y="24" width="12" height="12" fill="#fff" stroke="#4a9eff" strokeWidth="2" rx="1" />
                <circle cx="30" cy="18" r="2" fill="#4a9eff" />
                <circle cx="30" cy="42" r="2" fill="#4a9eff" />
                <circle cx="18" cy="30" r="2" fill="#4a9eff" />
                <circle cx="42" cy="30" r="2" fill="#4a9eff" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2 text-center lg:text-left">
              Advanced Technology<br />& Techniques
            </h3>
            <div className="w-16 h-1 mb-3 mx-auto lg:mx-0" style={{ backgroundColor: '#ffd966' }}></div>
            <p className="text-gray-700 text-sm leading-relaxed text-center lg:text-left">
              We use the latest dental technology and minimally invasive techniques to provide the most comfortable and effective treatment for children, including digital X-rays and gentle procedures.
            </p>
          </div>

          {/* Block 3: Child-Friendly Environment */}
          <div className="pr-0 lg:pr-8">
            <div className="flex justify-center lg:justify-start mb-4">
              <svg width="60" height="60" viewBox="0 0 60 60">
                <circle cx="30" cy="30" r="30" fill="#ffffff" />
                <rect x="12" y="18" width="36" height="24" rx="4" fill="#ffb6c1" opacity="0.7" />
                <rect x="16" y="22" width="28" height="4" fill="#fff" />
                <circle cx="24" cy="33" r="4" fill="#ff6b6b" />
                <circle cx="36" cy="33" r="4" fill="#ff6b6b" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2 text-center lg:text-left">
              Child-Friendly<br />Environment
            </h3>
            <div className="w-16 h-1 mb-3 mx-auto lg:mx-0" style={{ backgroundColor: '#87ceeb' }}></div>
            <p className="text-gray-700 text-sm leading-relaxed text-center lg:text-left">
              Our Chino dental office is designed specifically for children, featuring bright colors, entertaining distractions, and a welcoming atmosphere that helps kids feel comfortable and excited about their dental visits.
            </p>
          </div>

          {/* Block 4: Comprehensive Care Network */}
          <div className="pr-0 lg:pr-8">
            <div className="flex justify-center lg:justify-start mb-4">
              <svg width="60" height="60" viewBox="0 0 60 60">
                <circle cx="30" cy="30" r="30" fill="#ffffff" />
                <circle cx="24" cy="22" r="7" fill="#ffd966" />
                <path d="M24 29 Q18 31 18 38 L18 46 L30 46 L30 38 Q30 31 24 29 Z" fill="#87ceeb" />
                <circle cx="40" cy="24" r="6" fill="#ffb6c1" />
                <path d="M40 30 Q35 32 35 38 L35 46 L45 46 L45 38 Q45 32 40 30 Z" fill="#e8a5a5" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2 text-center lg:text-left">
              Comprehensive Care<br />Network
            </h3>
            <div className="w-16 h-1 mb-3 mx-auto lg:mx-0" style={{ backgroundColor: '#ffd966' }}></div>
            <p className="text-gray-700 text-sm leading-relaxed text-center lg:text-left">
              From your child&apos;s first tooth to their teenage years, we provide comprehensive dental care including preventive treatments, restorative work, and coordinate with orthodontists for specialized care all under one roof.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}