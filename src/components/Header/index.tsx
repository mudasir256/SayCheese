'use client';

import { useState, useRef, useCallback, useMemo, memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../Button';
import { NavLink } from './NavLink';
import { ServiceDropdown } from './ServiceDropdown';
import { MobileNav } from './MobileNav';
import {
    PHONE_NUMBER,
    PHONE_DISPLAY,
    LOGO_PATH,
    LOGO_ALT,
    NAV_LINKS,
    LOGO_PATH_MOBILE
} from './constants';

/**
 * Header component - Main navigation header
 * Features:
 * - Responsive design with desktop and mobile views
 * - Service dropdown menu
 * - Logo centered in desktop nav
 * - Call-to-action buttons
 * - Keyboard navigation support
 * - ARIA labels for accessibility
 */
const Header = memo(() => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);
    const menuButtonRef = useRef<HTMLButtonElement>(null);

    // Calculate middle index for logo placement
    const middleIndex = useMemo(() => Math.floor(NAV_LINKS.length / 2), []);

    // Menu handlers
    const toggleMenu = useCallback(() => {
        setIsMenuOpen(prev => !prev);
    }, []);

    const closeMenu = useCallback(() => {
        setIsMenuOpen(false);
    }, []);

    // Service dropdown handlers
    const toggleServiceDropdown = useCallback(() => {
        setIsServiceDropdownOpen(prev => !prev);
    }, []);

    const closeServiceDropdown = useCallback(() => {
        setIsServiceDropdownOpen(false);
    }, []);

    return (
        <header className="w-full bg-white shadow-sm" role="banner">
            <nav aria-label="Main navigation">
                <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16 lg:h-20">
                        {/* Desktop Call Button */}
                        <div className="hidden lg:block">
                            <a
                                href={`tel:${PHONE_NUMBER}`}
                                aria-label={`Call us at ${PHONE_DISPLAY}`}
                            >
                                <Button
                                    text={`Call ${PHONE_DISPLAY}`}
                                    variant="pink"
                                    size="sm"
                                    rounded="md"
                                />
                            </a>
                        </div>

                        {/* Mobile Logo */}
                        <div className="lg:hidden flex items-center justify-center">
                            <Link
                                href="/"
                                className="w-20 h-20 flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-logo-blue focus-visible:ring-offset-2 rounded-2xl"
                                aria-label="Say Cheese - Go to homepage"
                            >
                                <Image
                                    src={LOGO_PATH_MOBILE}
                                    alt={LOGO_ALT}
                                    className="rounded-2xl"
                                    width={100}
                                    height={100}
                                    priority
                                />
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center justify-center flex-1 h-20">
                            <nav className="flex items-center justify-center gap-2" aria-label="Primary navigation">
                                {NAV_LINKS.map((link, index) => {
                                    const isService = link.href === '/service' && link.hasDropdown;

                                    return (
                                        <div key={link.href} className="flex items-center">
                                            {/* Center Logo */}
                                            {index === middleIndex && (
                                                <Link
                                                    href="/"
                                                    className="w-24 h-24 xl:w-32 xl:h-32 flex items-center justify-center mt-6 mx-4 z-[9] focus:outline-none focus-visible:ring-2 focus-visible:ring-logo-blue focus-visible:ring-offset-2 rounded-2xl"
                                                    aria-label="Say Cheese - Go to homepage"
                                                >
                                                    <Image
                                                        src={LOGO_PATH}
                                                        alt={LOGO_ALT}
                                                        className="rounded-2xl"
                                                        width={96}
                                                        height={96}
                                                        priority
                                                    />
                                                </Link>
                                            )}

                                            {/* Render Service Dropdown or Regular Link */}
                                            {isService ? (
                                                <ServiceDropdown
                                                    isOpen={isServiceDropdownOpen}
                                                    onToggle={toggleServiceDropdown}
                                                    onClose={closeServiceDropdown}
                                                />
                                            ) : (
                                                <NavLink href={link.href} label={link.label} />
                                            )}
                                        </div>
                                    );
                                })}
                            </nav>
                        </div>

                        {/* Right Side Actions */}
                        <div className="flex items-center gap-4">
                            {/* Mobile Menu Button */}
                            <button
                                ref={menuButtonRef}
                                onClick={toggleMenu}
                                className="lg:hidden p-2 rounded-md text-logo-blue hover:bg-gray-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-logo-blue focus-visible:ring-offset-2"
                                aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                                aria-expanded={isMenuOpen}
                                aria-controls="mobile-menu"
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    {isMenuOpen ? (
                                        <path d="M6 18L18 6M6 6l12 12" />
                                    ) : (
                                        <path d="M4 6h16M4 12h16M4 18h16" />
                                    )}
                                </svg>
                            </button>

                            {/* Desktop Appointment Button */}
                            <div className="hidden lg:block">
                                <Link href="/appointment" aria-label="Book an appointment">
                                    <Button
                                        text="Appointment"
                                        variant="green"
                                        size="sm"
                                        rounded="md"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Navigation */}
                    <MobileNav
                        isOpen={isMenuOpen}
                        onClose={closeMenu}
                        menuButtonRef={menuButtonRef}
                    />
                </div>
            </nav>
        </header>
    );
});

Header.displayName = 'Header';

export default Header;

