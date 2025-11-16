'use client';

import { memo, useMemo } from 'react';
import reviewsData from '@/data/reviews.json';
import { GoogleRating } from './GoogleRating';
import { ReviewCard } from './ReviewCard';
import { ReviewAuthor } from './ReviewAuthor';
import { CarouselDots } from './CarouselDots';
import { ScrollingBanner } from './ScrollingBanner';
import { useAutoCarousel } from './hooks/useAutoCarousel';
import {
  SECTION_TITLE,
  SECTION_DESCRIPTION,
  CAROUSEL_INTERVAL,
  SECTION_CONTAINER,
  CONTENT_WRAPPER,
  GRID_LAYOUT,
  TITLE_CLASSES,
  DESCRIPTION_CLASSES,
} from './constants';
import type { Review } from './types';

/**
 * Reviews component - Main reviews section
 * Features:
 * - Auto-rotating carousel of customer reviews
 * - Google rating display with stars
 * - Review author information
 * - Manual navigation with dots
 * - Infinite scrolling banner
 * - Fully accessible with ARIA labels
 * - Responsive design
 * - Optimized with memoization
 */
const Reviews = memo(() => {
  const reviews = useMemo(() => reviewsData as Review[], []);
  const { currentIndex, goToIndex } = useAutoCarousel(reviews.length, CAROUSEL_INTERVAL);
  const currentReview = useMemo(() => reviews[currentIndex], [reviews, currentIndex]);

  return (
    <>
      {/* Reviews Section */}
      <section className={SECTION_CONTAINER} aria-labelledby="reviews-title">
        <div className={CONTENT_WRAPPER}>
          <div className={GRID_LAYOUT}>
            {/* Left Column - Title and Google Rating */}
            <div className="space-y-6 text-center lg:text-left">
              <h2 id="reviews-title" className={TITLE_CLASSES}>
                {SECTION_TITLE}
              </h2>
              <p className={DESCRIPTION_CLASSES}>{SECTION_DESCRIPTION}</p>
              <GoogleRating />
            </div>

            {/* Right Column - Review Carousel */}
            <div className="flex flex-col items-center lg:items-end">
              <ReviewCard review={currentReview} />
              
              <CarouselDots
                total={reviews.length}
                current={currentIndex}
                onDotClick={goToIndex}
              />

              <ReviewAuthor
                author={currentReview.author}
                childName={currentReview.childName}
                childAge={currentReview.childAge}
                avatarSrc={currentReview.avatarSrc}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Scrolling Banner */}
      <ScrollingBanner />
    </>
  );
});

Reviews.displayName = 'Reviews';

export default Reviews;

