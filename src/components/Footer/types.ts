// Shared types for Footer components

export interface HoursItem {
  day: string;
  hours: string;
}

export interface ContactItem {
  label: string;
  value: string;
  href: string;
  type: 'phone' | 'email' | 'address';
}

export interface QuickLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface FooterSectionProps {
  title: string;
  children: React.ReactNode;
}

export interface FooterLinkProps {
  href: string;
  label: string;
  external?: boolean;
  type?: 'phone' | 'email' | 'address';
  className?: string;
}

