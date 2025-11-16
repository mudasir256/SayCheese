// Constants for Footer component
import type { HoursItem, ContactItem, QuickLink } from './types';

// Company information
export const COMPANY_NAME = 'Say Cheese Kids Dental & Orthodontics';
export const COMPANY_DESCRIPTION =
  'Creating beautiful, healthy smiles for children in Chino, CA. Our experienced general dentist, Dr. Joshua Kohan, provides gentle, comprehensive dental care in a fun, child-friendly environment.';
export const LOGO_PATH = '/Images/logosaycheese.png';
export const COPYRIGHT_YEAR = 2025;

// Contact information
export const PHONE_NUMBER = '+19094796030';
export const PHONE_DISPLAY = '(909) 479-6030';
export const EMAIL = 'saycheesekidsdental@gmail.com';
export const ADDRESS = '12113 Central Ave, Chino, CA 91710';
export const ADDRESS_MAP_LINK = 'https://maps.google.com/?q=12113+Central+Ave,+Chino,+CA+91710';

// Business hours
export const BUSINESS_HOURS: HoursItem[] = [
  { day: 'Monday - Thursday', hours: '8:00 AM - 6:00 PM' },
  { day: 'Friday', hours: '8:00 AM - 4:00 PM' },
  { day: 'Saturday', hours: 'Closed' },
  { day: 'Sunday', hours: 'Appointments Only' },
];

// Contact items
export const CONTACT_ITEMS: ContactItem[] = [
  {
    label: 'Phone',
    value: PHONE_DISPLAY,
    href: `tel:${PHONE_NUMBER}`,
    type: 'phone',
  },
  {
    label: 'Email',
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    type: 'email',
  },
  {
    label: 'Address',
    value: ADDRESS,
    href: ADDRESS_MAP_LINK,
    type: 'address',
  },
];

// Quick links
export const QUICK_LINKS: QuickLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Meet Dr. Kohan', href: '/about' },
  { label: 'Dental Services', href: '/service' },
  { label: 'Braces & Orthodontics', href: '/service/orthodontics' },
  { label: 'Patient Reviews', href: '/reviews' },
  { label: 'Contact Us', href: '/contact' },
];

// CSS class constants
export const FOOTER_SECTION_TITLE = 'text-lg font-bold mb-5 pb-2 border-b border-white/20 lg:border-0 lg:text-xl lg:font-semibold lg:mb-6';
export const FOOTER_LINK_BASE = 'inline-block text-white hover:opacity-90 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#5B9EC4] rounded py-2 min-h-[44px] flex items-center';

