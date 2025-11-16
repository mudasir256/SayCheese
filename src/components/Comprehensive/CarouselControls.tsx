import { memo } from 'react';
import { CAROUSEL_BUTTON_BASE, DOT_BASE } from './constants';
import type { CarouselControlsProps } from './types';

/**
 * CarouselControls component - Navigation buttons and dots for carousel
 * Handles prev/next navigation and dot indicators
 */
export const CarouselControls = memo<CarouselControlsProps>(({
  onPrev,
  onNext,
  currentIndex,
  totalItems,
  onDotClick,
}) => {
  return (
    <>
      {/* Previous Button */}
      <button
        onClick={onPrev}
        className={`${CAROUSEL_BUTTON_BASE} left-0 -translate-x-4`}
        aria-label="View previous services"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path
            d="M15 18L9 12L15 6"
            stroke="#C2185B"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Next Button */}
      <button
        onClick={onNext}
        className={`${CAROUSEL_BUTTON_BASE} right-0 translate-x-4`}
        aria-label="View next services"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path
            d="M9 18L15 12L9 6"
            stroke="#C2185B"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Dot Indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: totalItems }).map((_, index) => (
          <button
            key={index}
            onClick={() => onDotClick(index)}
            className={DOT_BASE}
            aria-label={`Go to service ${index + 1}`}
            aria-current={index === currentIndex ? 'true' : 'false'}
          >
            <span className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? 'w-8 bg-pink-500' : 'bg-pink-200 hover:bg-pink-300'}`} aria-hidden="true" />
          </button>
        ))}
      </div>
    </>
  );
});

CarouselControls.displayName = 'CarouselControls';

