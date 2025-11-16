'use client';

import { memo } from 'react';
import { FeatureCard } from './FeatureCard';
import { AppointmentForm } from './AppointmentForm';
import {
  SECTION_TITLE,
  SECTION_TITLE_LINE2,
  FEATURES,
  SECTION_CONTAINER,
  CONTENT_WRAPPER,
  HEADER_SECTION,
  TITLE_CLASSES,
  MAIN_GRID,
  FEATURES_GRID,
  FORM_CONTAINER,
} from './constants';

/**
 * ChildrensDentalPractice component - Why Choose Us with appointment form
 * Features:
 * - 4 feature cards in 2x2 grid
 * - Appointment booking form
 * - Responsive layout
 * - No inline styles - all Tailwind
 * - Fully accessible with ARIA labels
 * - Optimized with memoization and custom hooks
 */
const ChildrensDentalPractice = memo(() => {
  return (
    <section className={SECTION_CONTAINER} aria-labelledby="why-choose-title">
      <div className={CONTENT_WRAPPER}>
        {/* Header */}
        <div className={HEADER_SECTION}>
          <h1 id="why-choose-title" className={TITLE_CLASSES}>
            {SECTION_TITLE} <br className="hidden lg:block" />
            {SECTION_TITLE_LINE2}
          </h1>
        </div>

        {/* Main Content Grid */}
        <div className={MAIN_GRID}>
          {/* Left Column - Features in 2x2 Grid */}
          <div className={FEATURES_GRID}>
            {FEATURES.map((feature) => (
              <FeatureCard key={feature.id} feature={feature} />
            ))}
          </div>

          {/* Right Column - Appointment Form */}
          <div className={FORM_CONTAINER}>
            <AppointmentForm />
          </div>
        </div>
      </div>
    </section>
  );
});

ChildrensDentalPractice.displayName = 'ChildrensDentalPractice';

export default ChildrensDentalPractice;

