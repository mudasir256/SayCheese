import { memo } from 'react';

/**
 * ServiceIcon component - Dental service icon
 * Consistent icon across all services
 */
export const ServiceIcon = memo(() => {
  return (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M12 2C10.5 2 9 3 9 4.5C9 6 10.5 7 12 7C13.5 7 15 6 15 4.5C15 3 13.5 2 12 2Z"
        fill="#EC4899"
      />
      <path
        d="M8 8C6.5 8 5 9 5 10.5V18C5 19.5 6.5 21 8 21H16C17.5 21 19 19.5 19 18V10.5C19 9 17.5 8 16 8H8Z"
        fill="#EC4899"
      />
      <rect x="7" y="12" width="10" height="2" rx="1" fill="white" />
    </svg>
  );
});

ServiceIcon.displayName = 'ServiceIcon';

