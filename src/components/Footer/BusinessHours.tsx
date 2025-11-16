import { memo } from 'react';
import { FooterSection } from './FooterSection';
import { BUSINESS_HOURS } from './constants';

/**
 * BusinessHours component - Displays business hours
 * Shows when the dental office is open
 */
export const BusinessHours = memo(() => {
  return (
    <FooterSection title="Visit Us">
      {BUSINESS_HOURS.map((item) => (
        <div key={item.day} className="flex justify-between items-center">
          <span className="font-medium lg:font-normal">{item.day}</span>
          <span className="text-white/90 lg:text-white lg:ml-4">{item.hours}</span>
        </div>
      ))}
    </FooterSection>
  );
});

BusinessHours.displayName = 'BusinessHours';

