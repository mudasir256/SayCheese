import { memo } from 'react';
import { DECORATIVE_ICONS } from './constants';

/**
 * DecorativeIcon component - Individual decorative SVG icon
 */
const DecorativeIcon = memo<{ icon: typeof DECORATIVE_ICONS[0] }>(({ icon }) => {
  const icons = {
    'star-outline': (
      <svg width={icon.size} height={icon.size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path
          d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
          stroke="#FFD700"
          strokeWidth="2"
        />
      </svg>
    ),
    'star-filled': (
      <svg width={icon.size} height={icon.size} viewBox="0 0 24 24" fill="#FFD700" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
      </svg>
    ),
    'plus': (
      <svg width={icon.size} height={icon.size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <line x1="12" y1="5" x2="12" y2="19" stroke="#FFD700" strokeWidth="2.5" />
        <line x1="5" y1="12" x2="19" y2="12" stroke="#FFD700" strokeWidth="2.5" />
      </svg>
    ),
  };

  return <div className={icon.position}>{icons[icon.type]}</div>;
});

DecorativeIcon.displayName = 'DecorativeIcon';

/**
 * DecorativeStars component - All decorative SVG elements
 * Stars and plus signs scattered around the hero section
 */
export const DecorativeStars = memo(() => {
  return (
    <>
      {DECORATIVE_ICONS.map((icon) => (
        <DecorativeIcon key={icon.id} icon={icon} />
      ))}
    </>
  );
});

DecorativeStars.displayName = 'DecorativeStars';

