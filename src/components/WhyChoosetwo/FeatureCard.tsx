import { memo } from 'react';
import { FeatureIcon } from './FeatureIcon';
import {
  CARD_CONTAINER,
  CARD_ICON_WRAPPER,
  CARD_TITLE,
  CARD_ACCENT,
  CARD_DESCRIPTION,
} from './constants';
import type { FeatureCardProps } from './types';

/**
 * FeatureCard component - Displays a single feature with icon
 * Reusable card component for all features
 * Memoized for performance
 */
export const FeatureCard = memo<FeatureCardProps>(({ feature }) => {
  return (
    <div className={CARD_CONTAINER}>
      <div className={CARD_ICON_WRAPPER}>
        <FeatureIcon type={feature.iconType} />
      </div>
      <h3 className={CARD_TITLE}>
        {feature.title.split('\n').map((line, i) => (
          <span key={i}>
            {line}
            {i === 0 && <br />}
          </span>
        ))}
      </h3>
      <div className={`${CARD_ACCENT} ${feature.accentColor}`} aria-hidden="true" />
      <p className={CARD_DESCRIPTION}>{feature.description}</p>
    </div>
  );
});

FeatureCard.displayName = 'FeatureCard';

