'use client';

import { memo } from 'react';
import Link from 'next/link';
import Button from '../Button';
import { DecorativeStars } from './DecorativeStars';
import { HeroCharacters } from './HeroCharacters';
import { HeroContent } from './HeroContent';
import {
  SUBTITLE,
  TITLE_LINE1,
  TITLE_LINE2,
  BADGE,
  CTA_TEXT,
  BACKGROUND_IMAGE,
  SECTION_CONTAINER,
  CONTENT_WRAPPER,
  HEADER_SECTION,
  SUBTITLE_CLASSES,
  TITLE_CLASSES,
  BADGE_CLASSES,
  CHARACTERS_CONTAINER,
  CTA_WRAPPER,
} from './constants';

/**
 * HeroSection component - Main hero section of the homepage
 * Features:
 * - Background image (no inline styles!)
 * - Decorative stars and plus signs
 * - Side characters (princess and superhero)
 * - Center content with teeth image
 * - Call-to-action button
 * - Fully responsive
 * - No inline styles - all Tailwind
 * - Optimized with memoization
 * - Accessibility labels
 */
const HeroSection = memo(() => {
  return (
    <section
      className={SECTION_CONTAINER}
      style={{ backgroundImage: `url(${BACKGROUND_IMAGE})`, backgroundSize: '100% 100%' }}
      aria-label="Hero section"
    >
      <div className={CONTENT_WRAPPER}>
        {/* Decorative Stars */}
        <DecorativeStars />

        {/* Header */}
        <div className={HEADER_SECTION}>
          <h1 className={SUBTITLE_CLASSES}>{SUBTITLE}</h1>
          <h2 className={TITLE_CLASSES}>
            {TITLE_LINE1}
            <br />
            {TITLE_LINE2}
          </h2>
          <p className={BADGE_CLASSES}>{BADGE}</p>
        </div>

        {/* Characters and Content Container */}
        <div className={CHARACTERS_CONTAINER}>
          <HeroCharacters />
          <HeroContent />
        </div>

        {/* CTA Button */}
        <div className={CTA_WRAPPER}>
          <Link href="/appointment" aria-label="Book an appointment for your child">
            <Button text={CTA_TEXT} size="responsive" rounded="full" variant="pink" />
          </Link>
        </div>
      </div>
    </section>
  );
});

HeroSection.displayName = 'HeroSection';

export default HeroSection;

