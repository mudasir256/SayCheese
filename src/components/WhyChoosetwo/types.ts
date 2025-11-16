// Shared types for WhyChoosetwo component

export interface Feature {
  id: string;
  title: string;
  description: string;
  iconType: 'dental' | 'technology' | 'environment' | 'network';
  accentColor: string;
}

export interface FeatureCardProps {
  feature: Feature;
}

export interface FeatureIconProps {
  type: 'dental' | 'technology' | 'environment' | 'network';
}

