import { useState, useEffect, useCallback } from 'react';

/**
 * Custom hook for automatic carousel functionality
 * @param itemCount - Total number of items in carousel
 * @param interval - Auto-advance interval in milliseconds
 * @returns Current index and function to manually set index
 */
export const useAutoCarousel = (itemCount: number, interval: number = 5000) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (itemCount <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % itemCount);
    }, interval);

    return () => clearInterval(timer);
  }, [itemCount, interval]);

  const goToIndex = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  return { currentIndex, goToIndex };
};

