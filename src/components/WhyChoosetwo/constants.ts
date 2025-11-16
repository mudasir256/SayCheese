// Constants for WhyChoosetwo component
import type { Feature } from './types';

// Content
export const SECTION_TITLE = 'WHY CHOOSE SAY CHEESE KIDS FOR YOUR';
export const SECTION_TITLE_LINE2 = "CHILD'S DENTAL CARE IN CHINO?";
// HD Unsplash image - Doctor examining/checking a child
export const HERO_IMAGE_PATH = 'https://images.unsplash.com/photo-1674775372064-8c75d3f8c757?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGRvY3RvciUyMGNoZWNrJTIwY2hpbGQlMjB0ZWV0aHxlbnwwfHwwfHx8MA%3D%3D';
export const HERO_IMAGE_ALT = "Doctor examining a child during check-up";

// Features data
export const FEATURES: Feature[] = [
  {
    id: 'experienced-dentist',
    title: "Experienced Children's\nDentist",
    description:
      'Dr. Joshua Kohan has 5+ years of experience treating children, with extensive training in child development, behavior management, and the unique dental needs of growing children.',
    iconType: 'dental',
    accentColor: 'bg-[#e8a5a5]',
  },
  {
    id: 'advanced-technology',
    title: 'Advanced Technology\n& Techniques',
    description:
      'We use the latest dental technology and minimally invasive techniques to provide the most comfortable and effective treatment for children, including digital X-rays and gentle procedures.',
    iconType: 'technology',
    accentColor: 'bg-[#ffd966]',
  },
  {
    id: 'child-friendly',
    title: 'Child-Friendly\nEnvironment',
    description:
      'Our Chino dental office is designed specifically for children, featuring bright colors, entertaining distractions, and a welcoming atmosphere that helps kids feel comfortable and excited about their dental visits.',
    iconType: 'environment',
    accentColor: 'bg-[#87ceeb]',
  },
  {
    id: 'comprehensive-care',
    title: 'Comprehensive Care\nNetwork',
    description:
      "From your child's first tooth to their teenage years, we provide comprehensive dental care including preventive treatments, restorative work, and coordinate with orthodontists for specialized care all under one roof.",
    iconType: 'network',
    accentColor: 'bg-[#ffd966]',
  },
];

// CSS Classes
export const SECTION_CONTAINER = 'w-full relative overflow-visible bg-amber-50 py-12';
export const CONTENT_WRAPPER = 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8';
export const TITLE_CLASSES = 'text-2xl md:text-3xl lg:text-4xl font-bold text-pink-500 mb-8 md:mb-12 text-center';
export const GRID_LAYOUT = 'flex flex-col lg:flex-row w-full gap-6 lg:gap-8 xl:gap-12 items-start';
export const IMAGE_CONTAINER = 'order-2 lg:order-1 w-full lg:w-1/3 xl:w-[35%] relative flex justify-center sm:-mx-6 md:mx-0 md:px-4 lg:justify-start lg:-ml-8 lg:mr-0 lg:px-0 pt-8 lg:pt-12';
export const IMAGE_WRAPPER = 'relative w-[300px] h-[300px] sm:w-full sm:h-[380px] md:h-[450px] lg:h-[550px]';
export const FEATURES_GRID = 'order-1 lg:order-2 bg-amber-50 grid grid-cols-1 md:grid-cols-2 gap-8 px-4 sm:px-6 lg:px-8 pt-8 lg:pt-12 pb-8 lg:pb-12 lg:flex-1';
export const CARD_CONTAINER = 'pr-0 lg:pr-8';
export const CARD_ICON_WRAPPER = 'flex justify-center lg:justify-start mb-4';
export const CARD_TITLE = 'text-xl font-bold text-gray-800 mb-2 text-center lg:text-left';
export const CARD_ACCENT = 'w-16 h-1 mb-3 mx-auto lg:mx-0';
export const CARD_DESCRIPTION = 'text-gray-700 text-sm leading-relaxed text-center lg:text-left';

