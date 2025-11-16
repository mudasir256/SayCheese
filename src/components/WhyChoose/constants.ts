// Constants for WhyChoose component
import type { Feature } from './types';

// Content
export const SECTION_TITLE = "WHY CHOOSE OUR CHILDREN'S";
export const SECTION_TITLE_LINE2 = 'DENTAL PRACTICE IN CHINO?';
export const FORM_TITLE_LINE1 = "SCHEDULE YOUR CHILD'S";
export const FORM_TITLE_LINE2 = 'DENTAL APPOINTMENT';
export const FORM_SUBTITLE = "Book your appointment with Chino's trusted children's dentist today!";
export const SUBMIT_BUTTON_TEXT = 'Book Appointments';

// Features data
export const FEATURES: Feature[] = [
  {
    id: 'specialized-care',
    title: "Specialized Children's\nDental Care",
    description:
      'Our dentist understands the unique needs of growing smiles. We provide gentle, age-appropriate dental care that helps children develop healthy oral hygiene habits for life.',
    accentColor: 'bg-[#e8a5a5]',
  },
  {
    id: 'braces-orthodontics',
    title: 'Expert Kids Braces\n& Orthodontics',
    description:
      'From traditional metal braces to clear aligners, we partner with experienced orthodontists to offer comprehensive orthodontic solutions designed specifically for children and teenagers in Chino and surrounding areas.',
    accentColor: 'bg-[#ffd966]',
  },
  {
    id: 'emergency-care',
    title: "Emergency Children's\nDental Care",
    description:
      'Dental emergencies can happen anytime. Our team provides prompt, compassionate emergency dental care for children, including after-hours consultations when possible.',
    accentColor: 'bg-[#87ceeb]',
  },
  {
    id: 'family-friendly',
    title: 'Family-Friendly\nDental Office',
    description:
      'Located conveniently in Chino, our modern dental office is designed with children in mind, featuring a fun, welcoming atmosphere that helps reduce dental anxiety.',
    accentColor: 'bg-[#ffd966]',
  },
];

// Appointment types
export const APPOINTMENT_TYPES = [
  { value: '', label: 'Select Appointment type' },
  { value: 'checkup', label: 'Regular Checkup' },
  { value: 'cleaning', label: 'Cleaning' },
  { value: 'emergency', label: 'Emergency' },
  { value: 'orthodontics', label: 'Orthodontics Consultation' },
  { value: 'other', label: 'Other' },
];

// CSS Classes
export const SECTION_CONTAINER = 'min-h-screen bg-[#f4f3ef]';
export const CONTENT_WRAPPER = 'px-4 sm:px-6 lg:px-16 py-12';
export const HEADER_SECTION = 'text-center mb-16';
export const TITLE_CLASSES = 'text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-[#a4b55f]';
export const MAIN_GRID = 'flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto';
export const FEATURES_GRID = 'flex-1 grid grid-cols-1 md:grid-cols-2 gap-8';
export const CARD_CONTAINER = 'pr-0 lg:pr-8';
export const CARD_ICON_WRAPPER = 'flex justify-center lg:justify-start mb-4';
export const CARD_TITLE = 'text-xl font-bold text-gray-800 mb-2 text-center lg:text-left';
export const CARD_ACCENT = 'w-16 h-1 mb-3 mx-auto lg:mx-0';
export const CARD_DESCRIPTION = 'text-gray-700 text-sm leading-relaxed text-center lg:text-left';
export const FORM_CONTAINER = 'w-full lg:w-[500px] flex-shrink-0';
export const FORM_CARD = 'bg-[#f7ecd5] rounded-[50px] p-8 shadow-lg h-fit';
export const FORM_TITLE = 'text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 text-center leading-tight';
export const FORM_SUBTITLE_CLASSES = 'text-gray-600 text-sm mb-6 text-center leading-relaxed';
export const INPUT_BASE = 'w-full px-4 py-2.5 rounded-lg bg-white border border-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 text-sm text-gray-700 placeholder-gray-400';
export const SELECT_BASE = `${INPUT_BASE} appearance-none cursor-pointer bg-select-arrow`;

