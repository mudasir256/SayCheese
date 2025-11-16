import { useState, useCallback, useMemo, useEffect, useRef } from 'react';

/**
 * Custom hook for carousel functionality with auto-play
 * @param totalItems - Total number of items in carousel
 * @param visibleCount - Number of visible items (default: 2 for desktop)
 * @param autoPlayInterval - Auto-play interval in milliseconds (default: 4000ms = 4 seconds)
 * @returns Carousel state and navigation functions
 */
export const useCarousel = (
  totalItems: number, 
  visibleCount: number = 2,
  autoPlayInterval: number = 4000
) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  }, [totalItems]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  }, [totalItems]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    // Set up auto-play interval
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, autoPlayInterval);

    // Cleanup on unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [nextSlide, autoPlayInterval]);

  const visibleItems = useMemo(() => {
    const items = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % totalItems;
      items.push(index);
    }
    return items;
  }, [currentIndex, totalItems, visibleCount]);

  return {
    currentIndex,
    nextSlide,
    prevSlide,
    goToSlide,
    visibleItems,
  };
};

