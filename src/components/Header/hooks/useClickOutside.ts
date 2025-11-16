import { useEffect, RefObject } from 'react';
import { CLICK_OUTSIDE_DELAY } from '../constants';

/**
 * Custom hook to handle click outside events
 * @param refs - Array of refs to check if click is outside
 * @param handler - Callback function to execute when click is outside
 * @param enabled - Whether the hook is enabled
 */
export const useClickOutside = (
  refs: RefObject<HTMLElement | null>[],
  handler: () => void,
  enabled: boolean = true
) => {
  useEffect(() => {
    if (!enabled) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      const isOutside = refs.every(ref => !ref.current?.contains(target));
      
      if (isOutside) {
        handler();
      }
    };

    const timeoutId = setTimeout(() => {
      document.addEventListener('mousedown', handleClickOutside);
    }, CLICK_OUTSIDE_DELAY);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [refs, handler, enabled]);
};

