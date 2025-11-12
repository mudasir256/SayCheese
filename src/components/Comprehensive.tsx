'use client';

export default function Comprehensive() {
  return (
    <div className="w-full bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          {/* Left Content Block */}
          <div className="lg:col-span-1 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Comprehensive Children&apos;s Dental Services
            </h2>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
              Our experienced dentist, Dr. Joshua Kohan, provides comprehensive dental care tailored specifically for children and teens. From routine cleanings to partnering with orthodontists for kids braces, we make every visit comfortable and educational for your child.
            </p>
            
            {/* Meet Dr. Joshua Kohan Section */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Doctor head */}
                    <circle cx="12" cy="8" r="4" fill="#1E3A8A" />
                    {/* Doctor body */}
                    <path d="M8 14C8 12 10 10 12 10C14 10 16 12 16 14V20H8V14Z" fill="#1E3A8A" />
                    {/* Stethoscope */}
                    <path d="M10 12C10 11 10.5 10.5 11 10.5C11.5 10.5 12 11 12 12" stroke="#1E3A8A" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                    <circle cx="9" cy="12" r="1" fill="#1E3A8A" />
                    <circle cx="15" cy="12" r="1" fill="#1E3A8A" />
                    <path d="M9 12L12 14L15 12" stroke="#1E3A8A" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Meet Dr. Joshua Kohan
                </h3>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                  Visit our resources for expert tips and advice on maintaining your child&apos;s oral health.
                </p>
              </div>
            </div>
          </div>

          {/* Middle Content Block - Card */}
          <div className="lg:col-span-1 relative">
            {/* Navigation Arrow - Left */}
            <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full bg-pink-200 hover:bg-pink-300 flex items-center justify-center shadow-lg transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="#C2185B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div className="bg-amber-50 rounded-2xl p-6 md:p-8 h-full shadow-lg">
              {/* Icon */}
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-6 shadow-md">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C10.5 2 9 3 9 4.5C9 6 10.5 7 12 7C13.5 7 15 6 15 4.5C15 3 13.5 2 12 2Z" fill="#EC4899" />
                  <path d="M8 8C6.5 8 5 9 5 10.5V18C5 19.5 6.5 21 8 21H16C17.5 21 19 19.5 19 18V10.5C19 9 17.5 8 16 8H8Z" fill="#EC4899" />
                  <rect x="7" y="12" width="10" height="2" rx="1" fill="white" />
                </svg>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Preventive Children&apos;s Care
              </h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
                Comprehensive preventive dental care to keep your child&apos;s teeth healthy and strong, including routine cleanings, fluoride treatments, and dental sealants.
              </p>

              {/* Divider */}
              <div className="w-16 h-1 bg-pink-400 rounded-full mb-6"></div>

              {/* List of Services */}
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-700 text-sm md:text-base">
                  <svg className="w-5 h-5 text-pink-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Routine Dental Cleanings
                </li>
                <li className="flex items-center text-gray-700 text-sm md:text-base">
                  <svg className="w-5 h-5 text-pink-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Fluoride Treatments
                </li>
                <li className="flex items-center text-gray-700 text-sm md:text-base">
                  <svg className="w-5 h-5 text-pink-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Dental Sealants
                </li>
                <li className="flex items-center text-gray-700 text-sm md:text-base">
                  <svg className="w-5 h-5 text-pink-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Oral Health Education
                </li>
              </ul>

              {/* Button */}
              <button className="w-full bg-amber-300 hover:bg-amber-400 text-gray-800 font-semibold py-3 px-6 rounded-lg transition-colors shadow-md">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Content Block - Card */}
          <div className="lg:col-span-1 relative">
            {/* Navigation Arrow - Right */}
            <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full bg-pink-200 hover:bg-pink-300 flex items-center justify-center shadow-lg transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="#C2185B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div className="bg-green-50 rounded-2xl p-6 md:p-8 h-full shadow-lg">
              {/* Icon */}
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-6 shadow-md">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C10.5 2 9 3 9 4.5C9 6 10.5 7 12 7C13.5 7 15 6 15 4.5C15 3 13.5 2 12 2Z" fill="#EC4899" />
                  <path d="M8 8C6.5 8 5 9 5 10.5V18C5 19.5 6.5 21 8 21H16C17.5 21 19 19.5 19 18V10.5C19 9 17.5 8 16 8H8Z" fill="#EC4899" />
                  <rect x="7" y="12" width="10" height="2" rx="1" fill="white" />
                </svg>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Restorative Children&apos;s Dentistry
              </h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
                Gentle, effective treatment for cavities and damaged teeth using the latest child-friendly techniques and materials.
              </p>

              {/* Divider */}
              <div className="w-16 h-1 bg-green-400 rounded-full mb-6"></div>

              {/* List of Services */}
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-700 text-sm md:text-base">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Tooth-Colored Fillings
                </li>
                <li className="flex items-center text-gray-700 text-sm md:text-base">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Children&apos;s Crowns
                </li>
                <li className="flex items-center text-gray-700 text-sm md:text-base">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Pulp Therapy
                </li>
                <li className="flex items-center text-gray-700 text-sm md:text-base">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Space Maintainers
                </li>
              </ul>

              {/* Button */}
              <button className="w-full bg-green-300 hover:bg-green-400 text-gray-800 font-semibold py-3 px-6 rounded-lg transition-colors shadow-md">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
