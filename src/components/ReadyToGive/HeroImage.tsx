import { memo } from 'react';
import Image from 'next/image';
import { HERO_IMAGE_PATH, HERO_IMAGE_ALT, IMAGE_CONTAINER, IMAGE_CLASSES } from './constants';

/**
 * HeroImage component - Decorative tooth character image
 * Uses Next.js Image for optimization
 * Responsive sizing with Tailwind
 */
export const HeroImage = memo(() => {
  return (
    <div className={IMAGE_CONTAINER}>
      <Image
        src={HERO_IMAGE_PATH}
        alt={HERO_IMAGE_ALT}
        width={750}
        height={950}
        className={IMAGE_CLASSES}
        priority
        sizes="(max-width: 1024px) 200px, 750px"
      />
    </div>
  );
});

HeroImage.displayName = 'HeroImage';

