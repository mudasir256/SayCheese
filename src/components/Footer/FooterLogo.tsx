import { memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { COMPANY_NAME, COMPANY_DESCRIPTION, LOGO_PATH } from './constants';

/**
 * FooterLogo component - Company logo and description
 * Memoized for performance
 */
export const FooterLogo = memo(() => {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-24 pt-8 lg:pt-0 pb-10 lg:mb-12">
      <div className="flex justify-center lg:justify-start mb-6 lg:mb-0 lg:-mt-6">
        <Link 
          href="/" 
          className="focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#5B9EC4] rounded-2xl"
          aria-label={`${COMPANY_NAME} - Go to homepage`}
        >
          <Image
            src={LOGO_PATH}
            alt={COMPANY_NAME}
            width={100}
            height={140}
            className="w-28 sm:w-32 lg:w-40 h-auto rounded-2xl object-contain"
            priority
          />
        </Link>
      </div>

      <div className="flex items-center lg:w-1/2">
        <p className="text-white text-[15px] sm:text-base leading-relaxed text-center lg:text-left px-2 sm:px-0">
          {COMPANY_DESCRIPTION}
        </p>
      </div>
    </div>
  );
});

FooterLogo.displayName = 'FooterLogo';

