'use client';

import { useRef, useCallback, useMemo, memo } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown } from 'lucide-react';
import { SERVICE_BUTTON_BASE, SERVICE_ITEM_BASE, SERVICE_ITEMS } from './constants';
import { useClickOutside } from './hooks/useClickOutside';
import { useKeyboardClose } from './hooks/useKeyboardClose';

interface ServiceDropdownProps {
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}

/**
 * ServiceDropdown component - Desktop service dropdown menu
 * Handles mouse hover and click interactions with keyboard navigation
 */
export const ServiceDropdown = memo<ServiceDropdownProps>(({ isOpen, onToggle, onClose }) => {
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isServicePage = useMemo(
    () => pathname === '/service' || pathname?.startsWith('/service/'),
    [pathname]
  );

  // Handle click outside to close dropdown
  useClickOutside([dropdownRef], onClose, isOpen);
  
  // Handle Escape key to close dropdown
  useKeyboardClose(onClose, isOpen);

  const handleMouseEnter = useCallback(() => {
    onToggle();
  }, [onToggle]);

  const handleMouseLeave = useCallback(() => {
    onClose();
  }, [onClose]);

  const buttonClasses = useMemo(
    () =>
      isServicePage
        ? `${SERVICE_BUTTON_BASE} bg-logo-blue text-white`
        : `${SERVICE_BUTTON_BASE} text-black hover:bg-gray-100 hover:text-logo-blue`,
    [isServicePage]
  );

  const getItemClasses = useCallback(
    (href: string) => {
      const isActive = pathname === href;
      return isActive
        ? `${SERVICE_ITEM_BASE} bg-logo-blue text-white`
        : `${SERVICE_ITEM_BASE} text-gray-700 hover:bg-logo-blue/10 hover:text-logo-blue hover:pl-6`;
    },
    [pathname]
  );

  return (
    <div
      ref={dropdownRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        onClick={onToggle}
        className={buttonClasses}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-controls="service-dropdown"
        aria-label="Service menu"
      >
        Service
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>
      
      {isOpen && (
        <div
          id="service-dropdown"
          className="absolute top-full left-0 pt-2 w-56 z-50"
          role="menu"
          aria-orientation="vertical"
        >
          <div className="bg-white rounded-lg shadow-xl border-2 border-logo-blue/30 overflow-hidden">
            {SERVICE_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={getItemClasses(item.href)}
                role="menuitem"
                aria-current={pathname === item.href ? 'page' : undefined}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
});

ServiceDropdown.displayName = 'ServiceDropdown';

