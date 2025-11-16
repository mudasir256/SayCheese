import { memo } from 'react';
import { FooterSection } from './FooterSection';
import { FooterLink } from './FooterLink';
import { QUICK_LINKS } from './constants';

/**
 * QuickLinks component - Navigation links in footer
 * Provides quick access to main pages
 */
export const QuickLinks = memo(() => {
  return (
    <FooterSection title="Quick Links">
      <nav aria-label="Footer navigation">
        {QUICK_LINKS.map((link) => (
          <div key={link.href}>
            <FooterLink
              href={link.href}
              label={link.label}
              external={link.external}
              className="font-medium lg:font-normal lg:hover:text-gray-200"
            />
          </div>
        ))}
      </nav>
    </FooterSection>
  );
});

QuickLinks.displayName = 'QuickLinks';

