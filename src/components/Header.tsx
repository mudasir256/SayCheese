'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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
      className={`px-4 xl:px-6 py-2 rounded-md font-medium transition-colors text-sm  ${isActive ? 'bg-[#5BB4D9] text-white' : 'text-black'
        } ${className}`}
    >
      {label}
    </Link>
  );
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/service', label: 'Service' },
    { href: '/insurance', label: 'Insurance' },
    { href: '/blogs', label: 'Blog' },
    { href: '/faq', label: 'FAQ' },
    { href: '/reviews', label: 'Reviews' },
    { href: '/contact', label: 'Contact' },
  ];

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
              <div className="flex items-center justify-centergap-2">
                {navLinks.map((link, index) => {
                  const middleIndex = Math.floor(navLinks.length / 2);

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
                      <NavLink href={link.href} label={link.label} />
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
            className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
              }`}
          >
            <div className="py-4 space-y-2 border-t border-gray-200">
              {navLinks.map((link) => (
                <NavLink
                  key={link.href}
                  href={link.href}
                  label={link.label}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-3 hover:bg-gray-100"
                />
              ))}

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