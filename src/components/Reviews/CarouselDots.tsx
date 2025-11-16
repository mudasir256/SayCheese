import { memo } from 'react';
import { DOT_BASE } from './constants';
import type { CarouselDotsProps } from './types';

/**
 * CarouselDots component - Navigation dots for carousel
 * Allows manual navigation between reviews
 */
export const CarouselDots = memo<CarouselDotsProps>(({ total, current, onDotClick }) => {
  return (
    <div className="flex gap-2 mt-6 justify-center lg:justify-end" role="tablist" aria-label="Review navigation">
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          onClick={() => onDotClick(index)}
          className={`${DOT_BASE} ${index === current ? 'opacity-100 scale-110' : 'opacity-40 hover:opacity-60'}`}
          aria-label={`Go to review ${index + 1}`}
          aria-current={index === current ? 'true' : 'false'}
          role="tab"
          aria-selected={index === current}
          tabIndex={index === current ? 0 : -1}
        />
      ))}
    </div>
  );
});

CarouselDots.displayName = 'CarouselDots';

