// Shared types for Header components
export interface NavLinkItem {
  href: string;
  label: string;
  hasDropdown?: boolean;
}

export interface ServiceItem {
  href: string;
  label: string;
}

export interface NavLinkProps {
  href: string;
  label: string;
  onClick?: () => void;
  className?: string;
}

