'use client';

import { useState, useEffect } from 'react';
import reviewsData from '@/data/reviews.json';
import Image from 'next/image';

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviewsData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentReview = reviewsData[currentIndex];

  return (
    <>
      <div className="w-full bg-white py-12 md:py-16 px-4 sm:px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div className="space-y-6 text-center lg:text-left">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#a5b55f]">
                WHAT PARENTS SAY
              </h2>
              <p className="text-gray-800 text-base md:text-lg leading-relaxed">
                Don't just take our word for it - hear from the families we've had the privilege to serve
              </p>

              <div className="flex flex-col gap-1 mt-8 items-start">
                <div className="flex items-center gap-1 flex-wrap justify-between w-full">
                  <div className="flex items-center gap-1">
                    <span className="text-2xl md:text-3xl font-bold text-[#4285F4]">G</span>
                    <span className="text-2xl md:text-3xl font-bold text-[#EA4335]">o</span>
                    <span className="text-2xl md:text-3xl font-bold text-[#FBBC04]">o</span>
                    <span className="text-2xl md:text-3xl font-bold text-[#4285F4]">g</span>
                    <span className="text-2xl md:text-3xl font-bold text-[#34A853]">l</span>
                    <span className="text-2xl md:text-3xl font-bold text-[#EA4335]">e</span>
                  </div>
                  <span className="text-lg md:text-xl font-semibold text-[#4285F4]">
                    5.0/5 Star Rating
                  </span>
                </div>

                <div className="flex flex-row items-center justify-between gap-0.5 w-full">
                  <div className="flex items-center gap-0.5">
                    <span className=" text-sm font-normal text-gray-800">Reviews</span>
                    <div className="flex  gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#FFD700" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <span className="text-gray-700 text-sm">
                    Based on 633+ Google Reviews
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center lg:items-end">
              <div
                className="relative w-full max-w-md mx-auto lg:mx-0 p-6 md:p-8 rounded-3xl shadow-lg min-h-[200px] sm:min-h-[220px] md:min-h-[240px] lg:min-h-[200px] flex flex-col justify-start bg-[#f5f0e8]"
              >
                <div className="absolute -top-2 -left-2">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 8C6 6.9 6.9 6 8 6C9.1 6 10 6.9 10 8V12C10 13.1 9.1 14 8 14H6V8Z" fill="#e482a2" />
                    <path d="M14 8C14 6.9 14.9 6 16 6C17.1 6 18 6.9 18 8V12C18 13.1 17.1 14 16 14H14V8Z" fill="#e482a2" />
                  </svg>
                </div>

                <p className="text-gray-800 text-base md:text-lg leading-relaxed pt-4 flex-1">
                  {currentReview.text}
                </p>
              </div>
              <div className="flex gap-2 mt-6 justify-center lg:justify-end">
                {reviewsData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 bg-[#a4b55f] ${index === currentIndex ? 'opacity-100' : 'opacity-40'
                      }`}
                    aria-label={`Go to review ${index + 1}`}
                  />
                ))}
              </div>

              <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-3 mt-4 w-full max-w-md lg:max-w-none mx-auto lg:mx-0">
                <Image src="/images/doctor.png" alt="star" width={50} height={50} />
                <div>
                  <p className="text-gray-800 font-semibold text-base text-center lg:text-left">
                    {currentReview.author}
                  </p>
                  <p className="text-gray-600 text-sm text-center lg:text-left">
                    Parent of {currentReview.childName}, age {currentReview.childAge}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className="mt-6 w-full overflow-hidden bg-white py-4 md:py-6 lg:py-8">
        <div className="relative flex">
          <div className="flex whitespace-nowrap animate-[scroll_30s_linear_infinite] hover:[animation-play-state:paused]">
            <h3 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl xl:text-[102px] uppercase tracking-wide font-bold pr-8 text-[#4a4a4a]">
              CHILDREN'S DENTAL SERVICES
            </h3>
            <h3 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl xl:text-[102px] uppercase tracking-wide font-bold pr-8 text-[#4a4a4a]">
              CHILDREN'S DENTAL SERVICES
            </h3>
            <h3 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl xl:text-[102px] uppercase tracking-wide font-bold pr-8 text-[#4a4a4a]">
              CHILDREN'S DENTAL SERVICES
            </h3>
          </div>
          <div className="flex whitespace-nowrap animate-[scroll_30s_linear_infinite] hover:[animation-play-state:paused]" aria-hidden="true">
            <h3 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl xl:text-[102px] uppercase tracking-wide font-bold pr-8 text-[#4a4a4a]">
              CHILDREN'S DENTAL SERVICES
            </h3>
            <h3 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl xl:text-[102px] uppercase tracking-wide font-bold pr-8 text-[#4a4a4a]">
              CHILDREN'S DENTAL SERVICES
            </h3>
            <h3 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl xl:text-[102px] uppercase tracking-wide font-bold pr-8 text-[#4a4a4a]">
              CHILDREN'S DENTAL SERVICES
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
