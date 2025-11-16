// Shared types for About component

export interface TitleWord {
  text: string;
  color: string;
}

export interface Feature {
  id: string;
  label: string;
  color: string;
}

export interface FeatureButtonsProps {
  features: Feature[];
  alignment?: 'left' | 'center' | 'right';
}

