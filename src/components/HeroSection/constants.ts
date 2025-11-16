// Constants for HeroSection component
import type { DecorativeIcon, Character } from './types';

// Content
export const SUBTITLE = "CHINO'S TRUSTED KIDS";
export const TITLE_LINE1 = 'DENTIST &';
export const TITLE_LINE2 = 'ORTHODONTICS';
export const BADGE = "#1 Children's Dentist in Chino, California";
export const HERO_TITLE = 'GENTLE, FUN DENTAL CARE';
export const HERO_SUBTITLE = 'FOR CHILDREN & TEENS';
export const HERO_DESCRIPTION =
  'Say Cheese Kids Dental & Orthodontics offers child-friendly dental care, including cleanings, braces, emergency treatments, and full pediatric services by Dr. Joshua Kohan.';
export const CTA_TEXT = 'Book Appointment';

// Images
export const BACKGROUND_IMAGE = '/Images/bgsaycheese.png';
export const TEETH_IMAGE = '/Images/teeths.png';
export const PRINCESS_IMAGE = '/Images/superman girl.png';
export const SUPERHERO_IMAGE = '/Images/superman kid.png';

// Decorative icons
export const DECORATIVE_ICONS: DecorativeIcon[] = [
  { id: 'star-1', type: 'star-outline', position: 'absolute top-6 left-8 z-10', size: 28 },
  { id: 'star-2', type: 'star-outline', position: 'absolute top-10 left-16 z-10', size: 24 },
  { id: 'plus-1', type: 'plus', position: 'absolute top-8 left-28 z-10', size: 20 },
  { id: 'star-3', type: 'star-filled', position: 'absolute top-3 right-6 z-10', size: 20 },
  { id: 'star-4', type: 'star-filled', position: 'absolute bottom-48 right-16 z-10', size: 20 },
];

// Characters
export const CHARACTERS: Character[] = [
  {
    id: 'princess',
    src: PRINCESS_IMAGE,
    alt: 'Princess Character',
    position: 'absolute left-[8%] sm:left-[6%] md:left-[4%] lg:left-[11%] xl:left-[13%] 2xl:left-[12%] bottom-[60%] sm:bottom-[50%] md:bottom-[54%] lg:bottom-[52%] xl:bottom-[50%] w-[22vw] sm:w-[24vw] md:w-[26vw] lg:w-[24vw] xl:w-[23vw] 2xl:w-[22vw] z-20',
    width: 320,
    height: 550,
  },
  {
    id: 'superhero',
    src: SUPERHERO_IMAGE,
    alt: 'Superhero Boy Character',
    position: 'absolute right-[5%] sm:right-[1%] md:right-[1%] lg:right-[7%] xl:right-[8%] bottom-[60%] sm:bottom-[50%] md:bottom-[54%] lg:bottom-[52%] xl:bottom-[50%] w-[22vw] sm:w-[24vw] md:w-[26vw] lg:w-[24vw] xl:w-[23vw] 2xl:w-[22vw] z-20',
    width: 320,
    height: 480,
  },
];

// CSS Classes
export const SECTION_CONTAINER = 'w-full bg-cover bg-center';
export const CONTENT_WRAPPER = 'relative flex flex-col items-center justify-center';
export const HEADER_SECTION = 'text-center pt-12 sm:pt-16 md:pt-20 lg:pt-24';
export const SUBTITLE_CLASSES = 'text-white text-[8px] sm:text-[10px] md:text-xs font-semibold mb-1 tracking-[0.25em]';
export const TITLE_CLASSES = 'text-white text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black tracking-tight leading-none mb-2';
export const BADGE_CLASSES = 'text-white text-[10px] sm:text-xs md:text-sm font-normal';
export const CHARACTERS_CONTAINER = 'relative w-full flex items-center justify-center py-4 md:py-8';
export const CENTER_CONTENT = 'relative z-10 flex flex-col items-center w-full';
export const TEETH_IMAGE_CLASSES = 'w-[50vw] sm:w-[50vw] md:w-[52vw] lg:w-[42vw] xl:w-[41vw] 2xl:w-[43vw] h-auto -translate-y-2 sm:-translate-y-8 md:-translate-y-16 lg:-translate-y-16 xl:-translate-y-16 2xl:-translate-y-20';
export const HERO_TEXT_WRAPPER = '-translate-y-6 md:-translate-y-16 lg:-translate-y-16 xl:-translate-y-24 left-1/2 transform w-[70vw] sm:w-[60vw] md:w-auto max-w-md z-30 px-2';
export const HERO_TITLE_CLASSES = 'text-white text-center text-[15px] sm:text-[10px] md:text-sm lg:text-base xl:text-3xl font-bold tracking-wide leading-tight';
export const DESCRIPTION_WRAPPER = 'w-full lg:max-w-2xl -translate-y-6 md:-translate-y-16 lg:-translate-y-16 xl:-translate-y-24';
export const DESCRIPTION_CLASSES = 'text-white text-center text-xs sm:text-sm md:text-base mt-2 px-4 leading-relaxed';
export const CTA_WRAPPER = 'w-full flex justify-center md:-translate-y-3 lg:-translate-y-0 xl:-translate-y-4 -mt-6';

