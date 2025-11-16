import { memo } from 'react';
import Image from 'next/image';
import { HERO_IMAGE_PATH, HERO_IMAGE_ALT, IMAGE_CONTAINER, IMAGE_WRAPPER } from './constants';

/**
 * HeroSection component - Left side hero image
 * Uses Next.js Image for optimization
 * Responsive sizing with proper sizes attribute
 */
export const HeroSection = memo(() => {
  return (
    <div className={IMAGE_CONTAINER}>
      <div className={IMAGE_WRAPPER}>
        <Image
          src={HERO_IMAGE_PATH}
          alt={HERO_IMAGE_ALT}
          fill
          sizes="(max-width: 640px) 300px, (max-width: 1024px) 100vw, (max-width: 1280px) 33vw, 35vw"
          className="object-cover rounded-xl lg:rounded-none"
          priority
        />
      </div>
    </div>
  );
});

HeroSection.displayName = 'HeroSection';

