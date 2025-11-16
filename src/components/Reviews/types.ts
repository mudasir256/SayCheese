// Shared types for Reviews components

export interface Review {
  id: number;
  text: string;
  author: string;
  childName: string;
  childAge: number;
}

export interface ReviewCardProps {
  review: Review;
}

export interface CarouselDotsProps {
  total: number;
  current: number;
  onDotClick: (index: number) => void;
}

export interface ReviewAuthorProps {
  author: string;
  childName: string;
  childAge: number;
  avatarSrc?: string;
}

