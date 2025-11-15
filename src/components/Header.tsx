'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown } from 'lucide-react';

interface NavLinkProps {
  href: string;
  label: string;
  onClick?: () => void;
  className?: string;
}

function NavLink({ href, label, onClick, className = '' }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`px-4 xl:px-6 py-2 rounded-md font-medium transition-all duration-200 text-sm  ${isActive ? 'bg-logo-blue text-white' : 'text-black hover:bg-logo-blue/10 hover:text-logo-blue'
        } ${className}`}
    >
      {label}
    </Link>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);
  const serviceDropdownRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const serviceItems = [
    { href: '/service', label: 'All Service' },
    { href: '/service/orthodontics', label: 'Orthodontics' },
    { href: '/service/sedation-dentistry', label: 'Sedation Dentistry' },
    { href: '/service/special-needs-care', label: 'Special Needs Care' },
  ];

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/service', label: 'Service', hasDropdown: true },
    { href: '/insurance', label: 'Insurance' },
    { href: '/blogs', label: 'Blog' },
    { href: '/faq', label: 'FAQ' },
    { href: '/reviews', label: 'Reviews' },
    { href: '/contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (serviceDropdownRef.current && !serviceDropdownRef.current.contains(event.target as Node)) {
        setIsServiceDropdownOpen(false);
      }
    };

    if (isServiceDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isServiceDropdownOpen]);

  return (
    <header className="w-full bg-white">
      <nav className="">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            <div className="hidden lg:block">
              <Link
                href="tel:9094796030"
                className="bg-[#E57FA3] hover:bg-[#d66e92]  text-white px-6 py-2 rounded-md font-medium transition-colors text-sm"
              >
                Call (909) 479-6030
              </Link>
            </div>
            <div className="lg:hidden flex items-center justify-center">
              <div className="w-16 h-16 flex items-center justify-center">
                <Image
                  src="/Images/logosaycheese.png"
                  alt="Say Cheese Logo"
                  className="rounded-2xl"
                  width={64}
                  height={64}
                />
              </div>
            </div>

            <div className="hidden lg:flex items-center justify-center flex-1 h-20">
              <div className="flex items-center justify-center gap-2">
                {navLinks.map((link, index) => {
                  const middleIndex = Math.floor(navLinks.length / 2);
                  const isService = link.href === '/service' && (link as any).hasDropdown;

                  return (
                    <React.Fragment key={link.href}>
                      {index === middleIndex && (
                        <div className="w-24 h-24 xl:w-32 xl:h-32 flex items-center justify-center mt-6 mx-4 z-[9]">
                          <Image
                            src="/Images/logosaycheese.png"
                            alt="Say Cheese Logo"
                            className="rounded-2xl"
                            width={96}
                            height={96}
                          />
                        </div>
                      )}
                      {isService ? (
                        <div
                          ref={serviceDropdownRef}
                          className="relative"
                          onMouseEnter={() => setIsServiceDropdownOpen(true)}
                          onMouseLeave={() => setIsServiceDropdownOpen(false)}
                        >
                          <button
                            onClick={() => setIsServiceDropdownOpen(!isServiceDropdownOpen)}
                            className={`px-4 xl:px-6 py-2 rounded-md font-medium transition-colors text-sm flex items-center gap-1 ${pathname === link.href || pathname?.startsWith('/service')
                              ? 'bg-logo-blue text-white'
                              : 'text-black hover:bg-gray-100 hover:text-logo-blue'
                              }`}
                          >
                            {link.label}
                            <ChevronDown className={`h-4 w-4 transition-transform ${isServiceDropdownOpen ? 'rotate-180' : ''}`} />
                          </button>
                          {isServiceDropdownOpen && (
                            <div className="absolute top-full left-0 pt-2 w-56 z-50">
                              <div className="bg-white rounded-lg shadow-xl border-2 border-logo-blue/30 overflow-hidden">
                                {serviceItems.map((item) => (
                                  <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsServiceDropdownOpen(false)}
                                    className={`block px-4 py-3 text-sm font-medium transition-all duration-200 ${pathname === item.href
                                      ? 'bg-logo-blue text-white'
                                      : 'text-gray-700 hover:bg-logo-blue/10 hover:text-logo-blue hover:pl-6'
                                      }`}
                                  >
                                    {item.label}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ) : (
                        <NavLink href={link.href} label={link.label} />
                      )}
                    </React.Fragment>
                  );
                })}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={toggleMenu}
                className="lg:hidden p-2 rounded-md text-[#5BB4D9] hover:bg-gray-100 transition-colors"
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>

              <div className="hidden lg:block">
                <Link
                  href="/appointment"
                  className="bg-[#B4D96C] hover:bg-[#a3c95f] text-white px-6 py-2 rounded-md font-medium transition-colors text-sm"
                >
                  Appointment
                </Link>
              </div>
            </div>
          </div>

          <div
            className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
              }`}
          >
            <div className="py-4 space-y-2 border-t border-gray-200">
              {navLinks.map((link) => {
                const isService = link.href === '/service' && (link as any).hasDropdown;

                if (isService) {
                  return (
                    <div key={link.href} className="border-b border-gray-200">
                      <button
                        onClick={() => setIsServiceDropdownOpen(!isServiceDropdownOpen)}
                        className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-gray-100 transition-colors"
                      >
                        <span className="font-medium text-sm">{link.label}</span>
                        <ChevronDown className={`h-4 w-4 transition-transform ${isServiceDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isServiceDropdownOpen && (
                        <div className="bg-gray-50">
                          {serviceItems.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => {
                                setIsMenuOpen(false);
                                setIsServiceDropdownOpen(false);
                              }}
                              className={`block px-8 py-2 text-sm transition-all duration-200 ${pathname === item.href
                                ? 'bg-logo-blue text-white'
                                : 'text-gray-700 hover:bg-logo-blue/10 hover:text-logo-blue hover:pl-10'
                                }`}
                            >
                              {item.label}
                            </Link>
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
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-3 hover:bg-logo-blue/10 hover:text-logo-blue"
                  />
                );
              })}

              <div className="pt-4 space-y-2 border-t border-gray-200 mt-2">
                <Link
                  href="tel:9094796030"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full bg-[#E57FA3] hover:bg-[#d66e92] text-white px-4 py-3 rounded-md font-medium transition-colors text-base text-center"
                >
                  Call (909) 479-6030
                </Link>
                <Link
                  href="/appointment"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full bg-[#B4D96C] hover:bg-[#a3c95f] text-white px-4 py-3 rounded-md font-medium transition-colors text-base text-center"
                >
                  Appointment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}