import { memo } from 'react';
import { SCROLLING_TEXT, SCROLLING_TEXT_BASE } from './constants';

/**
 * ScrollingBanner component - Infinite scrolling text banner
 * Displays service text with smooth animation
 * Pauses on hover for better UX
 */
export const ScrollingBanner = memo(() => {
  return (
    <div className="mt-6 w-full overflow-hidden bg-white py-4 md:py-6 lg:py-8">
      <div className="relative flex">
        {/* First scrolling group */}
        <div className="flex whitespace-nowrap animate-scroll-left hover:pause-animation">
          {Array.from({ length: 3 }).map((_, i) => (
            <h3 key={`first-${i}`} className={SCROLLING_TEXT_BASE}>
              {SCROLLING_TEXT}
            </h3>
          ))}
        </div>

        {/* Second scrolling group (for seamless loop) */}
        <div
          className="flex whitespace-nowrap animate-scroll-left hover:pause-animation"
          aria-hidden="true"
        >
          {Array.from({ length: 3 }).map((_, i) => (
            <h3 key={`second-${i}`} className={SCROLLING_TEXT_BASE}>
              {SCROLLING_TEXT}
            </h3>
          ))}
        </div>
      </div>
    </div>
  );
});

ScrollingBanner.displayName = 'ScrollingBanner';

