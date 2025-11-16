// Constants for Comprehensive component
import type { DentalService } from './types';

// Content
export const SECTION_TITLE = "Comprehensive Children's Dental Services";
export const SECTION_DESCRIPTION =
  'Our experienced dentist, Dr. Joshua Kohan, provides comprehensive dental care tailored specifically for children and teens. From routine cleanings to partnering with orthodontists for kids braces, we make every visit comfortable and educational for your child.';
export const DOCTOR_NAME = 'Meet Dr. Joshua Kohan';
export const DOCTOR_DESCRIPTION =
  "Visit our resources for expert tips and advice on maintaining your child's oral health.";
export const DOCTOR_IMAGE = '/Images/doctor.png';
export const LEARN_MORE_TEXT = 'Learn More';

// Dental Services Data
export const DENTAL_SERVICES: DentalService[] = [
  {
    id: 1,
    title: "Preventive Children's Care",
    description:
      "Comprehensive preventive dental care to keep your child's teeth healthy and strong, including routine cleanings, fluoride treatments, and dental sealants.",
    bgColor: 'bg-amber-50',
    buttonColor: 'bg-amber-300 hover:bg-amber-400 text-gray-800',
    dividerColor: 'bg-pink-400',
    checkmarkColor: 'text-pink-500',
    items: [
      'Routine Dental Cleanings',
      'Fluoride Treatments',
      'Dental Sealants',
      'Oral Health Education',
    ],
  },
  {
    id: 2,
    title: "Restorative Children's Dentistry",
    description:
      'Gentle, effective treatment for cavities and damaged teeth using the latest child-friendly techniques and materials.',
    bgColor: 'bg-[#b4d96c]/10',
    buttonColor: 'bg-[#b4d96c] hover:bg-[#b4d96c]/90 text-gray-800',
    dividerColor: 'bg-[#b4d96c]',
    checkmarkColor: 'text-[#b4d96c]',
    items: [
      'Tooth-Colored Fillings',
      "Children's Crowns",
      'Pulp Therapy',
      'Space Maintainers',
    ],
  },
  {
    id: 3,
    title: 'Orthodontic Services',
    description:
      'Early intervention and comprehensive orthodontic care to ensure your child develops a healthy, properly aligned smile.',
    bgColor: 'bg-blue-50',
    buttonColor: 'bg-blue-300 hover:bg-blue-400 text-gray-800',
    dividerColor: 'bg-blue-400',
    checkmarkColor: 'text-blue-500',
    items: [
      'Braces for Kids',
      'Invisalign for Teens',
      'Early Orthodontic Evaluation',
      'Retainer Management',
    ],
  },
  {
    id: 4,
    title: 'Emergency Dental Care',
    description:
      "Immediate, compassionate care for dental emergencies to ensure your child's comfort and oral health are protected.",
    bgColor: 'bg-purple-50',
    buttonColor: 'bg-purple-300 hover:bg-purple-400 text-gray-800',
    dividerColor: 'bg-purple-400',
    checkmarkColor: 'text-purple-500',
    items: [
      '24/7 Emergency Availability',
      'Tooth Trauma Treatment',
      'Pain Management',
      'After-Hours Care',
    ],
  },
];

// CSS Classes
export const SECTION_CONTAINER = 'w-full bg-white pb-16 md:pb-24 px-4 sm:px-6 lg:px-8';
export const CONTENT_WRAPPER = 'max-w-7xl mx-auto';
export const GRID_LAYOUT = 'grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12';
export const INFO_SECTION = 'lg:col-span-1 space-y-6 text-center lg:text-left';
export const TITLE_CLASSES = 'text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4';
export const DESCRIPTION_CLASSES = 'text-gray-700 text-base md:text-lg leading-relaxed mb-8';
export const CAROUSEL_CONTAINER = 'lg:col-span-2 relative';
export const CAROUSEL_BUTTON_BASE =
  'hidden md:flex absolute top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-pink-200 hover:bg-pink-300 items-center justify-center shadow-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-2';
export const CARD_CONTAINER = 'rounded-2xl p-6 md:p-8 h-full shadow-lg transition-all duration-300';
export const CARD_ICON_WRAPPER = 'w-16 h-16 rounded-full bg-white flex items-center justify-center mb-6 shadow-md';
export const CARD_TITLE = 'text-2xl font-bold text-gray-800 mb-4';
export const CARD_DESCRIPTION = 'text-gray-700 text-sm md:text-base leading-relaxed mb-6';
export const CARD_DIVIDER = 'w-16 h-1 rounded-full mb-6';
export const DOT_BASE =
  'min-w-[44px] min-h-[44px] p-2 rounded-full flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-2';

