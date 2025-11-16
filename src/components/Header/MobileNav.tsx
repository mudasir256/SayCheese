'use client';

import React, { useRef, useCallback, useMemo, memo, useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { ChevronDown } from 'lucide-react';
import Button from '../Button';
import { NavLink } from './NavLink';
import { useClickOutside } from './hooks/useClickOutside';
import { useKeyboardClose } from './hooks/useKeyboardClose';
import {
  PHONE_NUMBER,
  PHONE_DISPLAY,
  NAV_LINKS,
  SERVICE_ITEMS,
  NAVIGATION_DELAY
} from './constants';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  menuButtonRef: React.RefObject<HTMLButtonElement | null>;
}

/**
 * MobileNav component - Handles mobile navigation menu
 * Includes service dropdown and action buttons
 * Optimized with React.memo to prevent unnecessary re-renders
 */
export const MobileNav = memo<MobileNavProps>(({ isOpen, onClose, menuButtonRef }) => {
  const pathname = usePathname();
  const router = useRouter();
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);
  const mobileServiceDropdownRef = useRef<HTMLDivElement>(null);
  const navigationTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Handle click outside to close menu
  useClickOutside([mobileMenuRef, menuButtonRef], onClose, isOpen);

  // Handle Escape key to close menu
  useKeyboardClose(() => {
    setIsServiceDropdownOpen(false);
    onClose();
  }, isOpen);

  const toggleServiceDropdown = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsServiceDropdownOpen(prev => !prev);
  }, []);

  const handleServiceItemClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>, href: string) => {
      e.preventDefault();
      e.stopPropagation();

      router.push(href);

      // Clear any existing timeout
      if (navigationTimeoutRef.current) {
        clearTimeout(navigationTimeoutRef.current);
      }

      navigationTimeoutRef.current = setTimeout(() => {
        setIsServiceDropdownOpen(false);
        onClose();
        navigationTimeoutRef.current = null;
      }, NAVIGATION_DELAY);
    },
    [router, onClose]
  );

  const getMobileServiceItemClasses = useCallback(
    (href: string) => {
      const isActive = pathname === href;
      const baseClasses = 'w-full text-left block px-8 py-2 text-sm transition-all duration-200';
      return isActive
        ? `${baseClasses} bg-logo-blue text-white`
        : `${baseClasses} text-gray-700 hover:bg-logo-blue/10 hover:text-logo-blue hover:pl-10`;
    },
    [pathname]
  );

  const chevronRotation = useMemo(
    () => isServiceDropdownOpen ? 'rotate-180' : '',
    [isServiceDropdownOpen]
  );

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (navigationTimeoutRef.current) {
        clearTimeout(navigationTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={mobileMenuRef}
      id="mobile-menu"
      className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      aria-hidden={!isOpen}
      role="navigation"
      aria-label="Mobile navigation"
    >
      <div className="py-4 space-y-2 border-t border-gray-200">
        {NAV_LINKS.map((link) => {
          const isService = link.href === '/service' && link.hasDropdown;

          if (isService) {
            return (
              <div key={link.href} ref={mobileServiceDropdownRef}>
                <button
                  onClick={toggleServiceDropdown}
                  className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-gray-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-logo-blue focus-visible:ring-inset"
                  aria-expanded={isServiceDropdownOpen}
                  aria-haspopup="true"
                  aria-controls="mobile-service-dropdown"
                  aria-label="Service menu"
                >
                  <span className="font-medium text-sm">{link.label}</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${chevronRotation}`}
                    aria-hidden="true"
                  />
                </button>

                {isServiceDropdownOpen && (
                  <div
                    id="mobile-service-dropdown"
                    className="bg-gray-50 animate-slideDown"
                    role="menu"
                    aria-orientation="vertical"
                  >
                    {SERVICE_ITEMS.map((item) => (
                      <button
                        key={item.href}
                        onClick={(e) => handleServiceItemClick(e, item.href)}
                        className={getMobileServiceItemClasses(item.href)}
                        role="menuitem"
                        aria-current={pathname === item.href ? 'page' : undefined}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          }

          return (
            <NavLink
              key={link.href}
              href={link.href}
              label={link.label}
              onClick={onClose}
              className="block px-4 py-3 hover:bg-logo-blue/10 hover:text-logo-blue focus:outline-none focus-visible:ring-2 focus-visible:ring-logo-blue focus-visible:ring-inset"
            />
          );
        })}

        {/* Action Buttons */}
        <div className="pt-4 border-t border-gray-200 mt-2 space-y-3 px-4">
          <a
            href={`tel:${PHONE_NUMBER}`}
            onClick={onClose}
            className="block"
            aria-label={`Call us at ${PHONE_DISPLAY}`}
          >
            <Button
              text={`Call ${PHONE_DISPLAY}`}
              variant="pink"
              size="md"
              rounded="md"
              fullWidth={true}
            />
          </a>

          <Link
            href="/appointment"
            onClick={onClose}
            className="block"
            aria-label="Book an appointment"
          >
            <Button
              text="Appointment"
              variant="green"
              size="md"
              rounded="md"
              fullWidth={true}
            />
          </Link>
        </div>
      </div>
    </div>
  );
});

MobileNav.displayName = 'MobileNav';

