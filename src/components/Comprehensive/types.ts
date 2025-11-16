// Shared types for Comprehensive component

export interface DentalService {
  id: number;
  title: string;
  description: string;
  bgColor: string;
  buttonColor: string;
  dividerColor: string;
  checkmarkColor: string;
  items: string[];
}

export interface ServiceCardProps {
  service: DentalService;
}

export interface CarouselControlsProps {
  onPrev: () => void;
  onNext: () => void;
  currentIndex: number;
  totalItems: number;
  onDotClick: (index: number) => void;
}

