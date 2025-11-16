import { memo } from 'react';
import { FooterSection } from './FooterSection';
import { FooterLink } from './FooterLink';
import { CONTACT_ITEMS } from './constants';

/**
 * ContactInfo component - Displays contact information
 * Phone, email, and address with proper links
 */
export const ContactInfo = memo(() => {
  return (
    <FooterSection title="Contact Information">
      {CONTACT_ITEMS.map((item) => (
        <div key={item.label} className="flex justify-between items-center">
          <span className="w-32 font-medium lg:font-normal">{item.label}</span>
          <FooterLink
            href={item.href}
            label={item.value}
            type={item.type}
            className={item.type === 'email' ? 'lg:ml-4 break-words' : 'lg:ml-4'}
          />
        </div>
      ))}
    </FooterSection>
  );
});

ContactInfo.displayName = 'ContactInfo';

