import { memo } from 'react';

/**
 * SmileIcon component - Decorative smile/sun icon
 * Displayed on the left side on desktop
 */
export const SmileIcon = memo(() => {
  return (
    <div className="flex-shrink-0 mt-20 hidden lg:block">
      <svg className="w-25 h-25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path
          d="M12 2 L12 4 M12 20 L12 22 M2 12 L4 12 M20 12 L22 12 M4.93 4.93 L6.34 6.34 M17.66 17.66 L19.07 19.07 M4.93 19.07 L6.34 17.66 M17.66 6.34 L19.07 4.93"
          stroke="#b4d96c"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="9" cy="9" r="1.5" fill="#333" />
        <circle cx="15" cy="9" r="1.5" fill="#333" />
        <path d="M9 15 Q12 18 15 15" stroke="#333" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      </svg>
    </div>
  );
});

SmileIcon.displayName = 'SmileIcon';

