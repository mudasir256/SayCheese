import { useState, useCallback, useMemo } from 'react';

/**
 * Custom hook for carousel functionality
 * @param totalItems - Total number of items in carousel
 * @param visibleCount - Number of visible items (default: 2 for desktop)
 * @returns Carousel state and navigation functions
 */
export const useCarousel = (totalItems: number, visibleCount: number = 2) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  }, [totalItems]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  }, [totalItems]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

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

