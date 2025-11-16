import { memo } from 'react';
import { GOOGLE_COLORS, GOOGLE_RATING, REVIEW_COUNT } from './constants';

/**
 * GoogleRating component - Displays Google review rating
 * Shows colorful Google logo, star rating, and review count
 */
export const GoogleRating = memo(() => {
  return (
    <div className="flex flex-col gap-1 mt-8 items-start">
      {/* Google Logo and Rating */}
      <div className="flex items-center gap-1 flex-wrap justify-between w-full">
        <div className="flex items-center gap-1" aria-label="Google">
          <span className={`text-2xl md:text-3xl font-bold ${GOOGLE_COLORS.G}`}>G</span>
          <span className={`text-2xl md:text-3xl font-bold ${GOOGLE_COLORS.o1}`}>o</span>
          <span className={`text-2xl md:text-3xl font-bold ${GOOGLE_COLORS.o2}`}>o</span>
          <span className={`text-2xl md:text-3xl font-bold ${GOOGLE_COLORS.g}`}>g</span>
          <span className={`text-2xl md:text-3xl font-bold ${GOOGLE_COLORS.l}`}>l</span>
          <span className={`text-2xl md:text-3xl font-bold ${GOOGLE_COLORS.e}`}>e</span>
        </div>
        <span className="text-lg md:text-xl font-semibold text-[#2e7ba0]">
          {GOOGLE_RATING}
        </span>
      </div>

      {/* Stars and Review Count */}
      <div className="flex flex-row items-center justify-between gap-0.5 w-full">
        <div className="flex items-center gap-0.5">
          <span className="text-sm font-normal text-gray-800">Reviews</span>
          <div className="flex gap-0.5" role="img" aria-label="5 out of 5 stars">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-3 h-3"
                viewBox="0 0 24 24"
                fill="#FFD700"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
            ))}
          </div>
        </div>
        <span className="text-gray-700 text-sm">
          Based on {REVIEW_COUNT} Google Reviews
        </span>
      </div>
    </div>
  );
});

GoogleRating.displayName = 'GoogleRating';

