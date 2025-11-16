'use client';

import { memo } from 'react';
import { FeatureCard } from './FeatureCard';
import { HeroSection } from './HeroSection';
import {
  SECTION_TITLE,
  SECTION_TITLE_LINE2,
  FEATURES,
  SECTION_CONTAINER,
  CONTENT_WRAPPER,
  TITLE_CLASSES,
  GRID_LAYOUT,
  FEATURES_GRID,
} from './constants';

/**
 * WhyChoosetwo component - Why Choose Us section
 * Features:
 * - Compelling headline
 * - Hero image on left
 * - 4 feature cards with icons
 * - Responsive grid layout
 * - No inline styles - all Tailwind
 * - Fully accessible
 * - Optimized with memoization
 */
const WhyChoosetwo = memo(() => {
  return (
    <section className={SECTION_CONTAINER} aria-labelledby="why-choose-two-title">
      <div className={CONTENT_WRAPPER}>
        <h2 id="why-choose-two-title" className={TITLE_CLASSES}>
          {SECTION_TITLE}
          <br className="hidden lg:block" />
          {SECTION_TITLE_LINE2}
        </h2>
      </div>

      {/* Main Content Grid */}
      <div className={GRID_LAYOUT}>
        <HeroSection />

        {/* Features Grid */}
        <div className={FEATURES_GRID}>
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
});

WhyChoosetwo.displayName = 'WhyChoosetwo';

export default WhyChoosetwo;

