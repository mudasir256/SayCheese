import { useEffect } from 'react';
import { ESCAPE_KEY } from '../constants';

/**
 * Custom hook to handle Escape key to close dropdowns/menus
 * @param handler - Callback function to execute when Escape is pressed
 * @param enabled - Whether the hook is enabled
 */
export const useKeyboardClose = (handler: () => void, enabled: boolean = true) => {
  useEffect(() => {
    if (!enabled) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === ESCAPE_KEY) {
        handler();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handler, enabled]);
};

