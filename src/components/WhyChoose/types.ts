// Shared types for WhyChoose component

export interface Feature {
  id: string;
  title: string;
  description: string;
  accentColor: string;
}

export interface FeatureCardProps {
  feature: Feature;
}

export interface AppointmentFormData {
  parentName: string;
  childName: string;
  phone: string;
  age: string;
  email: string;
  appointmentType: string;
}

export interface FormInputProps {
  type: string;
  name: keyof AppointmentFormData;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface FormSelectProps {
  name: keyof AppointmentFormData;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: { value: string; label: string }[];
}

