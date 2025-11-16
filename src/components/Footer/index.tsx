import { memo } from 'react';
import { FooterLogo } from './FooterLogo';
import { BusinessHours } from './BusinessHours';
import { ContactInfo } from './ContactInfo';
import { QuickLinks } from './QuickLinks';
import { COMPANY_NAME, COPYRIGHT_YEAR } from './constants';

/**
 * Footer component - Main footer for the application
 * Features:
 * - Company logo and description
 * - Business hours
 * - Contact information with clickable links
 * - Quick navigation links
 * - Copyright information
 * - Fully accessible with ARIA labels
 * - Optimized with component memoization
 * - Responsive design
 */
const Footer = memo(() => {
    return (
        <footer className="bg-[#5B9EC4] text-white" role="contentinfo">
            <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
                {/* Logo and Description Section */}
                <FooterLogo />

                {/* Main Content Section - 2 Column Grid on Tablet, 3 Columns on Desktop */}
                <div className="pb-10 lg:pb-0 grid grid-cols-1 sm:grid-cols-2 lg:flex lg:justify-between gap-8 lg:gap-0 lg:mb-12">
                    <BusinessHours />
                    <ContactInfo />
                    <QuickLinks />
                </div>
            </div>

            {/* Copyright Section */}
            <div className="border-t border-white/30">
                <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 py-5">
                    <p className="text-center text-white text-sm">
                        © {COPYRIGHT_YEAR} {COMPANY_NAME}. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
});

Footer.displayName = 'Footer';

export default Footer;

