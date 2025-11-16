import { memo } from 'react';
import { REVIEW_CARD_BASE, REVIEW_TEXT_CLASSES } from './constants';
import type { ReviewCardProps } from './types';

/**
 * ReviewCard component - Displays a single review
 * Includes quote decoration and review text
 */
export const ReviewCard = memo<ReviewCardProps>(({ review }) => {
  return (
    <div className={REVIEW_CARD_BASE}>
      {/* Quote Icon */}
      <div className="absolute -top-2 -left-2" aria-hidden="true">
        <svg
          className="w-12 h-12"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 8C6 6.9 6.9 6 8 6C9.1 6 10 6.9 10 8V12C10 13.1 9.1 14 8 14H6V8Z"
            fill="#e482a2"
          />
          <path
            d="M14 8C14 6.9 14.9 6 16 6C17.1 6 18 6.9 18 8V12C18 13.1 17.1 14 16 14H14V8Z"
            fill="#e482a2"
          />
        </svg>
      </div>

      {/* Review Text */}
      <p className={REVIEW_TEXT_CLASSES}>{review.text}</p>
    </div>
  );
});

ReviewCard.displayName = 'ReviewCard';

