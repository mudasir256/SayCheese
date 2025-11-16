// Constants for About component
import type { TitleWord, Feature } from './types';

// Content
export const SECTION_SUBTITLE = "We provide comprehensive dental care for children in a warm, welcoming environment designed to make every visit a positive experience.";
export const LEFT_DESCRIPTION = "At Say Cheese Kids Dental & Orthodontics, we help children of all ages achieve healthy, beautiful smiles with personalized, growing care.";
export const RIGHT_DESCRIPTION = "We make dental visits fun and stress-free for kids with a friendly team, advanced technology, and a comforting environment designed just for them.";
export const IMAGE_PATH = '/Images/about.png';
export const IMAGE_ALT = 'Happy children at dental clinic';

// Title words with colors (WCAG AA compliant contrast ratios)
export const TITLE_WORDS: TitleWord[] = [
  { text: 'About', color: 'text-[#6b8a2f]' },  // Darker green
  { text: 'Say', color: 'text-[#d68910]' },    // Darker yellow/gold
  { text: 'Ch', color: 'text-[#2e7ba0]' },     // Darker blue
  { text: 'ee', color: 'text-[#c85a7f]' },     // Darker pink
  { text: 'se', color: 'text-[#2e7ba0]' },     // Darker blue
  { text: 'Kids', color: 'text-[#6b8a2f]' },   // Darker green
];

// Left side features
export const LEFT_FEATURES: Feature[] = [
  { id: 'childrens-dentistry', label: "Children's Dentistry", color: 'bg-[#b4d96c] hover:bg-[#a3c85b] text-gray-900' },
  { id: 'orthodontics', label: 'Orthodontics Available', color: 'bg-[#f9c151] hover:bg-[#e8b040] text-gray-900' },
];

// Right side features
export const RIGHT_FEATURES: Feature[] = [
  { id: 'after-hours', label: 'After-Hours Care', color: 'bg-[#7DBBE6] hover:bg-[#6CAAD5] text-gray-900' },
  { id: 'comfortable', label: 'Comfortable', color: 'bg-[#e57fa3] hover:bg-[#d46e92] text-gray-900' },
];

// CSS Classes
export const SECTION_CONTAINER = 'w-full relative overflow-visible bg-white';
export const CONTENT_WRAPPER = 'relative py-16 md:py-24 px-4 sm:px-6 lg:px-8';
export const MAX_WIDTH = 'max-w-7xl mx-auto';
export const HEADER_SECTION = 'text-center mb-12 md:mb-16';
export const TITLE_CLASSES = 'text-2xl md:text-3xl lg:text-4xl font-bold mb-6';
export const SUBTITLE_CLASSES = 'text-gray-800 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed';
export const GRID_LAYOUT = 'grid grid-cols-1 lg:grid-cols-3 md:gap-16 items-start';
export const SIDE_COLUMN = 'lg:col-span-1 space-y-8';
export const DESCRIPTION_CLASSES = 'text-gray-900 text-base md:text-lg leading-relaxed pt-2';
export const IMAGE_CONTAINER = 'lg:col-span-1 flex lg:-translate-y-12 relative';
export const IMAGE_WRAPPER = 'relative w-full max-w-md h-82';
export const BUTTON_BASE = 'py-3 px-6 rounded-full font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';

