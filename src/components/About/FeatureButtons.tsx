import { memo } from 'react';
import Link from 'next/link';
import { BUTTON_BASE } from './constants';
import type { FeatureButtonsProps } from './types';

/**
 * FeatureButtons component - Displays feature buttons
 * Renders a list of styled buttons with proper navigation
 */
export const FeatureButtons = memo<FeatureButtonsProps>(({ features, alignment = 'center' }) => {
  const alignmentClasses = {
    left: 'items-start',
    center: 'items-center',
    right: 'items-end',
  };

  return (
    <div className={`flex flex-col gap-4 mt-6 items-center lg:${alignmentClasses[alignment]}`}>
      {features.map((feature) => (
        <Link
          key={feature.id}
          href="/service"
          className={`${BUTTON_BASE} ${feature.color}`}
        >
          {feature.label}
        </Link>
      ))}
    </div>
  );
});

FeatureButtons.displayName = 'FeatureButtons';

