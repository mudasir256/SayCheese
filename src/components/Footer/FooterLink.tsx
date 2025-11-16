import { memo } from 'react';
import Link from 'next/link';
import { FOOTER_LINK_BASE } from './constants';
import type { FooterLinkProps } from './types';

/**
 * FooterLink component - Accessible link for footer
 * Handles both internal and external links
 */
export const FooterLink = memo<FooterLinkProps>(({ 
  href, 
  label, 
  external = false, 
  type,
  className = '' 
}) => {
  const linkClasses = `${FOOTER_LINK_BASE} ${className}`;

  // Get aria-label based on type
  const getAriaLabel = () => {
    switch (type) {
      case 'phone':
        return `Call us at ${label}`;
      case 'email':
        return `Email us at ${label}`;
      case 'address':
        return `View our location at ${label}`;
      default:
        return undefined;
    }
  };

  // External link (opens in new tab)
  if (external || type === 'address') {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClasses}
        aria-label={getAriaLabel()}
      >
        {label}
      </a>
    );
  }

  // Internal link (Next.js Link)
  if (href.startsWith('/')) {
    return (
      <Link href={href} className={linkClasses} aria-label={getAriaLabel()}>
        {label}
      </Link>
    );
  }

  // Email or phone link
  return (
    <a href={href} className={linkClasses} aria-label={getAriaLabel()}>
      {label}
    </a>
  );
});

FooterLink.displayName = 'FooterLink';

