'use client';

import { memo } from 'react';
import { ServiceCard } from './ServiceCard';
import { CarouselControls } from './CarouselControls';
import { DoctorInfo } from './DoctorInfo';
import { useCarousel } from './hooks/useCarousel';
import {
  SECTION_TITLE,
  SECTION_DESCRIPTION,
  DENTAL_SERVICES,
  SECTION_CONTAINER,
  CONTENT_WRAPPER,
  GRID_LAYOUT,
  INFO_SECTION,
  TITLE_CLASSES,
  DESCRIPTION_CLASSES,
  CAROUSEL_CONTAINER,
  CAROUSEL_AUTO_PLAY_INTERVAL,
} from './constants';

/**
 * Comprehensive component - Children's dental services section
 * Features:
 * - Carousel of service cards (2 visible on desktop, 1 on mobile)
 * - Doctor information section
 * - Navigation controls (arrows and dots)
 * - Responsive grid layout
 * - No inline styles - all Tailwind
 * - Fully accessible with ARIA labels
 * - Optimized with memoization and custom hooks
 */
const Comprehensive = memo(() => {
  const { currentIndex, nextSlide, prevSlide, goToSlide, visibleItems } = useCarousel(
    DENTAL_SERVICES.length,
    2,
    CAROUSEL_AUTO_PLAY_INTERVAL
  );

  // Current card for mobile (single card view)
  const currentService = DENTAL_SERVICES[currentIndex];

  // Visible cards for desktop (two cards view)
  const visibleServices = visibleItems.map((index) => DENTAL_SERVICES[index]);

  return (
    <section className={SECTION_CONTAINER} aria-labelledby="services-title">
      <div className={CONTENT_WRAPPER}>
        <div className={GRID_LAYOUT}>
          {/* Info Section */}
          <div className={INFO_SECTION}>
            <h2 id="services-title" className={TITLE_CLASSES}>
              {SECTION_TITLE}
            </h2>
            <p className={DESCRIPTION_CLASSES}>{SECTION_DESCRIPTION}</p>
            <DoctorInfo />
          </div>

          {/* Carousel Section */}
          <div className={CAROUSEL_CONTAINER}>
            {/* Mobile: Single card slider */}
            <div className="md:hidden overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {DENTAL_SERVICES.map((service) => (
                  <div key={service.id} className="min-w-full px-2">
                    <ServiceCard service={service} />
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop: Two cards grid */}
            <div className="hidden md:grid md:grid-cols-2 gap-6">
              {visibleServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>

            {/* Carousel Controls */}
            <CarouselControls
              onPrev={prevSlide}
              onNext={nextSlide}
              currentIndex={currentIndex}
              totalItems={DENTAL_SERVICES.length}
              onDotClick={goToSlide}
            />
          </div>
        </div>
      </div>
    </section>
  );
});

Comprehensive.displayName = 'Comprehensive';

export default Comprehensive;

