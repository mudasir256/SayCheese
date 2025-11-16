'use client';

import { memo } from 'react';
import Image from 'next/image';
import { ColorfulTitle } from './ColorfulTitle';
import { FeatureButtons } from './FeatureButtons';
import { SmileIcon } from './SmileIcon';
import {
  SECTION_SUBTITLE,
  LEFT_DESCRIPTION,
  RIGHT_DESCRIPTION,
  IMAGE_PATH,
  IMAGE_ALT,
  LEFT_FEATURES,
  RIGHT_FEATURES,
  SECTION_CONTAINER,
  CONTENT_WRAPPER,
  MAX_WIDTH,
  HEADER_SECTION,
  TITLE_CLASSES,
  SUBTITLE_CLASSES,
  GRID_LAYOUT,
  SIDE_COLUMN,
  DESCRIPTION_CLASSES,
  IMAGE_CONTAINER,
  IMAGE_WRAPPER,
} from './constants';

/**
 * AboutSection component - About Say Cheese Kids section
 * Features:
 * - Colorful animated title
 * - Feature buttons with hover states
 * - Center hero image
 * - Responsive 3-column layout
 * - No hardcoded colors - all Tailwind
 * - Fully accessible
 * - Optimized with memoization
 */
const AboutSection = memo(() => {
  return (
    <section className={SECTION_CONTAINER} aria-labelledby="about-title">
      <div className={CONTENT_WRAPPER}>
        <div className={MAX_WIDTH}>
          {/* Header Section */}
          <div className={HEADER_SECTION}>
            <h2 id="about-title" className={TITLE_CLASSES}>
              <ColorfulTitle />
            </h2>
            <p className={SUBTITLE_CLASSES}>{SECTION_SUBTITLE}</p>
          </div>

          {/* Main Content Grid */}
          <div className={GRID_LAYOUT}>
            {/* Left Column */}
            <div className={SIDE_COLUMN}>
              <div className="flex items-start gap-4">
                <p className={`${DESCRIPTION_CLASSES} text-center lg:text-right`}>
                  {LEFT_DESCRIPTION}
                </p>
              </div>

              <FeatureButtons features={LEFT_FEATURES} alignment="right" />

              <SmileIcon />
            </div>

            {/* Center Column - Image */}
            <div className={IMAGE_CONTAINER}>
              <div className={IMAGE_WRAPPER}>
                <Image
                  src={IMAGE_PATH}
                  alt={IMAGE_ALT}
                  fill
                  sizes="(max-width: 1024px) 100vw, 448px"
                  className="object-cover rounded-xl"
                  priority
                />
              </div>
            </div>

            {/* Right Column */}
            <div className={`${SIDE_COLUMN} text-center lg:text-left`}>
              <p className={DESCRIPTION_CLASSES}>{RIGHT_DESCRIPTION}</p>

              <FeatureButtons features={RIGHT_FEATURES} alignment="left" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

AboutSection.displayName = 'AboutSection';

export default AboutSection;

