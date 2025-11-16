// Shared types for HeroSection component

export interface DecorativeIcon {
  id: string;
  type: 'star-outline' | 'star-filled' | 'plus';
  position: string; // Tailwind position classes
  size: number;
}

export interface Character {
  id: string;
  src: string;
  alt: string;
  position: string; // Tailwind position classes
  width: number;
  height: number;
}

