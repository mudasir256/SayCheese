'use client';

import { memo } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_LINK_BASE, NAV_LINK_ACTIVE, NAV_LINK_INACTIVE } from './constants';
import type { NavLinkProps } from './types';

/**
 * NavLink component - Renders a navigation link with active state styling
 * Memoized to prevent unnecessary re-renders
 */
export const NavLink = memo<NavLinkProps>(({ href, label, onClick, className = '', tabIndex }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`${NAV_LINK_BASE} ${isActive ? NAV_LINK_ACTIVE : NAV_LINK_INACTIVE} ${className}`}
      aria-current={isActive ? 'page' : undefined}
      tabIndex={tabIndex}
    >
      {label}
    </Link>
  );
});

NavLink.displayName = 'NavLink';

