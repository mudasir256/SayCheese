'use client';

import { memo } from 'react';
import { CallToAction } from './CallToAction';
import { HeroImage } from './HeroImage';
import { SECTION_CONTAINER, BACKGROUND_WRAPPER, CONTENT_WRAPPER, FLEX_LAYOUT } from './constants';

/**
 * ReadyToGive component - Call-to-action section
 * Features:
 * - Compelling headline and description
 * - Phone number prominently displayed
 * - Click-to-call button
 * - Hero image of friendly tooth character
 * - Responsive layout (stacks on mobile)
 * - Accessible with proper ARIA labels
 * - Optimized with memoization
 */
const ReadyToGive = memo(() => {
  return (
    <section className={SECTION_CONTAINER} aria-labelledby="cta-title">
      <div className={BACKGROUND_WRAPPER}>
        <div className={CONTENT_WRAPPER}>
          <div className={FLEX_LAYOUT}>
            <CallToAction />
            <HeroImage />
          </div>
        </div>
      </div>
    </section>
  );
});

ReadyToGive.displayName = 'ReadyToGive';

export default ReadyToGive;

