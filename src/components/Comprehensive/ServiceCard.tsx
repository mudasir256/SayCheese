import { memo } from 'react';
import Link from 'next/link';
import { ServiceIcon } from './ServiceIcon';
import {
  LEARN_MORE_TEXT,
  CARD_CONTAINER,
  CARD_ICON_WRAPPER,
  CARD_TITLE,
  CARD_DESCRIPTION,
  CARD_DIVIDER,
} from './constants';
import type { ServiceCardProps } from './types';

/**
 * ServiceCard component - Displays a single dental service
 * Reusable card component with icon, description, and items list
 * Memoized for performance
 */
export const ServiceCard = memo<ServiceCardProps>(({ service }) => {
  return (
    <div className={`${CARD_CONTAINER} ${service.bgColor}`}>
      <div className={CARD_ICON_WRAPPER}>
        <ServiceIcon />
      </div>

      <h3 className={CARD_TITLE}>{service.title}</h3>
      
      <p className={CARD_DESCRIPTION}>{service.description}</p>

      <div className={`${CARD_DIVIDER} ${service.dividerColor}`} aria-hidden="true" />

      <ul className="space-y-3 mb-8">
        {service.items.map((item, index) => (
          <li key={index} className="flex items-center text-gray-700 text-sm md:text-base">
            <svg
              className={`w-5 h-5 ${service.checkmarkColor} mr-2 flex-shrink-0`}
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            {item}
          </li>
        ))}
      </ul>

      <Link 
        href="/service" 
        className={`${service.buttonColor} block text-center py-3 px-6 rounded-lg font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-pink-500`}
      >
        {LEARN_MORE_TEXT}
      </Link>
    </div>
  );
});

ServiceCard.displayName = 'ServiceCard';

