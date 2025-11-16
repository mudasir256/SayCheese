// Constants for Header components
export const PHONE_NUMBER = '9094796030';
export const PHONE_DISPLAY = '(909) 479-6030';
export const LOGO_PATH = '/Images/logosaycheese.png';
export const LOGO_ALT = 'Say Cheese Logo';

// Timing constants
export const CLICK_OUTSIDE_DELAY = 100;
export const NAVIGATION_DELAY = 100;
export const ESCAPE_KEY = 'Escape';

// Class name constants
export const NAV_LINK_BASE = 'px-4 xl:px-6 py-2 rounded-md font-medium transition-all duration-200 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-logo-blue focus-visible:ring-offset-1 min-h-[44px] flex items-center';
export const NAV_LINK_ACTIVE = 'bg-logo-blue text-white';
export const NAV_LINK_INACTIVE = 'text-gray-900 hover:bg-logo-blue/10 hover:text-logo-blue';

export const SERVICE_BUTTON_BASE = 'px-4 xl:px-6 py-2 rounded-md font-medium transition-colors text-sm flex items-center gap-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-logo-blue focus-visible:ring-offset-1 min-h-[44px]';
export const SERVICE_ITEM_BASE = 'block px-4 py-3 text-sm font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-logo-blue focus-visible:ring-inset min-h-[44px] flex items-center';

// Navigation items
export const SERVICE_ITEMS = [
  { href: '/service', label: 'All Service' },
  { href: '/service/orthodontics', label: 'Orthodontics' },
  { href: '/service/sedation-dentistry', label: 'Sedation Dentistry' },
  { href: '/service/special-needs-care', label: 'Special Needs Care' },
] as const;

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/service', label: 'Service', hasDropdown: true },
  { href: '/insurance', label: 'Insurance' },
  { href: '/blogs', label: 'Blog' },
  { href: '/faq', label: 'FAQ' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/contact', label: 'Contact' },
] as const;

