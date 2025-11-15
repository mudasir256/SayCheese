'use client';

import Image from 'next/image';
import { useState } from 'react';
import Button from './Button';

const dentalServices = [
  {
    id: 1,
    title: "Preventive Children's Care",
    description: "Comprehensive preventive dental care to keep your child's teeth healthy and strong, including routine cleanings, fluoride treatments, and dental sealants.",
    bgColor: "bg-amber-50",
    buttonBg: "bg-amber-300",
    buttonHover: "hover:bg-amber-400",
    dividerColor: "bg-pink-400",
    checkmarkColor: "text-pink-500",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C10.5 2 9 3 9 4.5C9 6 10.5 7 12 7C13.5 7 15 6 15 4.5C15 3 13.5 2 12 2Z" fill="#EC4899" />
        <path d="M8 8C6.5 8 5 9 5 10.5V18C5 19.5 6.5 21 8 21H16C17.5 21 19 19.5 19 18V10.5C19 9 17.5 8 16 8H8Z" fill="#EC4899" />
        <rect x="7" y="12" width="10" height="2" rx="1" fill="white" />
      </svg>
    ),
    items: [
      "Routine Dental Cleanings",
      "Fluoride Treatments",
      "Dental Sealants",
      "Oral Health Education"
    ]
  },
  {
    id: 2,
    title: "Restorative Children's Dentistry",
    description: "Gentle, effective treatment for cavities and damaged teeth using the latest child-friendly techniques and materials.",
    bgColor: "bg-[#b4d96c]/10",
    buttonBg: "bg-[#b4d96c]",
    buttonHover: "hover:bg-[#b4d96c]/90",
    dividerColor: "bg-[#b4d96c]",
    checkmarkColor: "text-[#b4d96c]",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C10.5 2 9 3 9 4.5C9 6 10.5 7 12 7C13.5 7 15 6 15 4.5C15 3 13.5 2 12 2Z" fill="#EC4899" />
        <path d="M8 8C6.5 8 5 9 5 10.5V18C5 19.5 6.5 21 8 21H16C17.5 21 19 19.5 19 18V10.5C19 9 17.5 8 16 8H8Z" fill="#EC4899" />
        <rect x="7" y="12" width="10" height="2" rx="1" fill="white" />
      </svg>
    ),
    items: [
      "Tooth-Colored Fillings",
      "Children's Crowns",
      "Pulp Therapy",
      "Space Maintainers"
    ]
  },
  {
    id: 3,
    title: "Orthodontic Services",
    description: "Early intervention and comprehensive orthodontic care to ensure your child develops a healthy, properly aligned smile.",
    bgColor: "bg-blue-50",
    buttonBg: "bg-blue-300",
    buttonHover: "hover:bg-blue-400",
    dividerColor: "bg-blue-400",
    checkmarkColor: "text-blue-500",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C10.5 2 9 3 9 4.5C9 6 10.5 7 12 7C13.5 7 15 6 15 4.5C15 3 13.5 2 12 2Z" fill="#EC4899" />
        <path d="M8 8C6.5 8 5 9 5 10.5V18C5 19.5 6.5 21 8 21H16C17.5 21 19 19.5 19 18V10.5C19 9 17.5 8 16 8H8Z" fill="#EC4899" />
        <rect x="7" y="12" width="10" height="2" rx="1" fill="white" />
      </svg>
    ),
    items: [
      "Braces for Kids",
      "Invisalign for Teens",
      "Early Orthodontic Evaluation",
      "Retainer Management"
    ]
  },
  {
    id: 4,
    title: "Emergency Dental Care",
    description: "Immediate, compassionate care for dental emergencies to ensure your child's comfort and oral health are protected.",
    bgColor: "bg-purple-50",
    buttonBg: "bg-purple-300",
    buttonHover: "hover:bg-purple-400",
    dividerColor: "bg-purple-400",
    checkmarkColor: "text-purple-500",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C10.5 2 9 3 9 4.5C9 6 10.5 7 12 7C13.5 7 15 6 15 4.5C15 3 13.5 2 12 2Z" fill="#EC4899" />
        <path d="M8 8C6.5 8 5 9 5 10.5V18C5 19.5 6.5 21 8 21H16C17.5 21 19 19.5 19 18V10.5C19 9 17.5 8 16 8H8Z" fill="#EC4899" />
        <rect x="7" y="12" width="10" height="2" rx="1" fill="white" />
      </svg>
    ),
    items: [
      "24/7 Emergency Availability",
      "Tooth Trauma Treatment",
      "Pain Management",
      "After-Hours Care"
    ]
  }
];

export default function Comprehensive() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % dentalServices.length);
  };

  const prevCard = () => {
    setCurrentIndex((prev) => (prev - 1 + dentalServices.length) % dentalServices.length);
  };

  const getVisibleCards = () => {
    const cards = [];
    for (let i = 0; i < 2; i++) {
      const index = (currentIndex + i) % dentalServices.length;
      cards.push(dentalServices[index]);
    }
    return cards;
  };

  const visibleCards = getVisibleCards();
  
  // For mobile: get single card
  const currentCard = dentalServices[currentIndex];

  return (
    <div className="w-full bg-white pb-16 md:pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          <div className="lg:col-span-1 space-y-6 text-center lg:text-left">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Comprehensive Children&apos;s Dental Services
            </h2>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
              Our experienced dentist, Dr. Joshua Kohan, provides comprehensive dental care tailored specifically for children and teens. From routine cleanings to partnering with orthodontists for kids braces, we make every visit comfortable and educational for your child.
            </p>
          
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                 <Image src="/Images/doctor.png" alt="Doctor" width={64} height={64} />
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

          <div className="lg:col-span-2 relative">
            <button 
              onClick={prevCard}
              className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full bg-pink-200 hover:bg-pink-300 items-center justify-center shadow-lg transition-colors"
              aria-label="Previous cards"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="#C2185B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Mobile: Single card slider */}
            <div className="md:hidden overflow-hidden">
              <div 
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {dentalServices.map((card) => (
                  <div 
                    key={card.id} 
                    className="min-w-full px-2"
                  >
                    <div className={`${card.bgColor} rounded-2xl p-6 h-full shadow-lg`}>
                      <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-6 shadow-md">
                        {card.icon}
                      </div>

                      <h3 className="text-2xl font-bold text-gray-800 mb-4">
                        {card.title}
                      </h3>
                      <p className="text-gray-700 text-sm leading-relaxed mb-6">
                        {card.description}
                      </p>

                      <div className={`w-16 h-1 ${card.dividerColor} rounded-full mb-6`}></div>

                      <ul className="space-y-3 mb-8">
                        {card.items.map((item, index) => (
                          <li key={index} className="flex items-center text-gray-700 text-sm">
                            <svg className={`w-5 h-5 ${card.checkmarkColor} mr-2`} fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            {item}
                          </li>
                        ))}
                      </ul>

                      <Button
                        text="Learn More"
                        backgroundColor={card.id === 1 ? '#fbbf24' : card.id === 2 ? '#b4d96c' : card.id === 3 ? '#93c5fd' : '#c084fc'}
                        textColor="text-gray-800"
                        size="md"
                        rounded="lg"
                        fullWidth={true}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop: Two cards grid */}
            <div className="hidden md:grid md:grid-cols-2 gap-6">
              {visibleCards.map((card) => (
                <div 
                  key={card.id} 
                  className={`${card.bgColor} rounded-2xl p-6 md:p-8 h-full shadow-lg transition-all duration-300`}
                >
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-6 shadow-md">
                    {card.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {card.title}
                  </h3>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
                    {card.description}
                  </p>

                  <div className={`w-16 h-1 ${card.dividerColor} rounded-full mb-6`}></div>

                  <ul className="space-y-3 mb-8">
                    {card.items.map((item, index) => (
                      <li key={index} className="flex items-center text-gray-700 text-sm md:text-base">
                        <svg className={`w-5 h-5 ${card.checkmarkColor} mr-2`} fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <Button
                    text="Learn More"
                    backgroundColor={card.id === 1 ? '#fbbf24' : card.id === 2 ? '#b4d96c' : card.id === 3 ? '#93c5fd' : '#c084fc'}
                    textColor="text-gray-800"
                    size="md"
                    rounded="lg"
                    fullWidth={true}
                  />
                </div>
              ))}
            </div>

            <button 
              onClick={nextCard}
              className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full bg-pink-200 hover:bg-pink-300 items-center justify-center shadow-lg transition-colors"
              aria-label="Next cards"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="#C2185B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div className="flex justify-center gap-2 mt-6">
              {dentalServices.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? 'bg-pink-500 w-8' : 'bg-pink-200'
                  }`}
                  aria-label={`Go to card ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
