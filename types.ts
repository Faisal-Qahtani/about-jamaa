import { LucideIcon } from 'lucide-react';

export type Language = 'en' | 'ar';

export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}