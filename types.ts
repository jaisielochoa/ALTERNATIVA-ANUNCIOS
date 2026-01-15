export enum SignType {
  LED = 'LED',
  NEON = 'Neon Flex',
  VOLUMETRIC = 'Volumétrico 3D'
}

export interface ContentSection {
  title: string;
  description: string;
  items?: string[];
}

export interface PortfolioItem {
  id: string;
  client: string;
  type: string;
  details: string[];
  imageUrl: string;
}

export interface LogoItem {
  title: string;
  category: string;
  description: string;
  features: string[];
  imageUrl: string;
  reverse?: boolean;
}

export interface ProblemItem {
  title: string;
  description: string;
  icon: any; // Lucide icon type
  imageUrl: string;
}