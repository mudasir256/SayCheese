import { memo } from 'react';
import Image from 'next/image';
import {
  TEETH_IMAGE,
  HERO_TITLE,
  HERO_SUBTITLE,
  HERO_DESCRIPTION,
  CENTER_CONTENT,
  TEETH_IMAGE_CLASSES,
  HERO_TEXT_WRAPPER,
  HERO_TITLE_CLASSES,
  DESCRIPTION_WRAPPER,
  DESCRIPTION_CLASSES,
} from './constants';

/**
 * HeroContent component - Center content with teeth image and text
 * Main hero message between the characters
 */
export const HeroContent = memo(() => {
  return (
    <div className={CENTER_CONTENT}>
      <Image
        src={TEETH_IMAGE}
        alt="Teeth with Braces"
        width={500}
        height={200}
        className={TEETH_IMAGE_CLASSES}
        priority
        fetchPriority="high"
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 52vw, 42vw"
      />

      {/* Hero Text */}
      <div className={HERO_TEXT_WRAPPER}>
        <h2 className={HERO_TITLE_CLASSES}>
          {HERO_TITLE}
          <br />
          {HERO_SUBTITLE}
        </h2>
      </div>

      {/* Description */}
      <div className={DESCRIPTION_WRAPPER}>
        <p className={DESCRIPTION_CLASSES}>{HERO_DESCRIPTION}</p>
      </div>
    </div>
  );
});

HeroContent.displayName = 'HeroContent';

