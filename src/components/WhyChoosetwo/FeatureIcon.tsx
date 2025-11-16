import { memo } from 'react';
import type { FeatureIconProps } from './types';

/**
 * FeatureIcon component - Renders feature-specific SVG icons
 * Each icon type has unique visual representation
 */
export const FeatureIcon = memo<FeatureIconProps>(({ type }) => {
  const icons = {
    dental: (
      <svg className="w-15 h-15" viewBox="0 0 60 60" aria-hidden="true">
        <circle cx="30" cy="30" r="30" fill="#ffffff" />
        <path
          d="M18 12 Q12 18 12 30 Q12 42 18 48 L24 42 Q20 36 20 30 Q20 24 24 18 Z"
          fill="#87ceeb"
          opacity="0.7"
        />
        <path
          d="M42 12 Q48 18 48 30 Q48 42 42 48 L36 42 Q40 36 40 30 Q40 24 36 18 Z"
          fill="#87ceeb"
          opacity="0.7"
        />
        <rect x="22" y="24" width="16" height="14" rx="2" fill="#fff" stroke="#87ceeb" strokeWidth="2" />
        <circle cx="30" cy="31" r="2" fill="#ff6b6b" />
      </svg>
    ),
    technology: (
      <svg className="w-15 h-15" viewBox="0 0 60 60" aria-hidden="true">
        <circle cx="30" cy="30" r="30" fill="#ffffff" />
        <circle cx="30" cy="30" r="20" fill="none" stroke="#87ceeb" strokeWidth="2" />
        <rect x="24" y="24" width="12" height="12" fill="#fff" stroke="#4a9eff" strokeWidth="2" rx="1" />
        <circle cx="30" cy="18" r="2" fill="#4a9eff" />
        <circle cx="30" cy="42" r="2" fill="#4a9eff" />
        <circle cx="18" cy="30" r="2" fill="#4a9eff" />
        <circle cx="42" cy="30" r="2" fill="#4a9eff" />
      </svg>
    ),
    environment: (
      <svg className="w-15 h-15" viewBox="0 0 60 60" aria-hidden="true">
        <circle cx="30" cy="30" r="30" fill="#ffffff" />
        <rect x="12" y="18" width="36" height="24" rx="4" fill="#ffb6c1" opacity="0.7" />
        <rect x="16" y="22" width="28" height="4" fill="#fff" />
        <circle cx="24" cy="33" r="4" fill="#ff6b6b" />
        <circle cx="36" cy="33" r="4" fill="#ff6b6b" />
      </svg>
    ),
    network: (
      <svg className="w-15 h-15" viewBox="0 0 60 60" aria-hidden="true">
        <circle cx="30" cy="30" r="30" fill="#ffffff" />
        <circle cx="24" cy="22" r="7" fill="#ffd966" />
        <path d="M24 29 Q18 31 18 38 L18 46 L30 46 L30 38 Q30 31 24 29 Z" fill="#87ceeb" />
        <circle cx="40" cy="24" r="6" fill="#ffb6c1" />
        <path d="M40 30 Q35 32 35 38 L35 46 L45 46 L45 38 Q45 32 40 30 Z" fill="#e8a5a5" />
      </svg>
    ),
  };

  return icons[type];
});

FeatureIcon.displayName = 'FeatureIcon';

