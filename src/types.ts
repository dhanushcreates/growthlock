/**
 * Types and interfaces for the Dhanush Tech portfolio & digital assets app.
 */

export interface Project {
  id: string;
  title: string;
  category: 'video' | 'design' | 'web';
  imageUrl: string;
  description: string;
  service: string;
}

export interface Asset {
  id: string;
  title: string;
  category: 'thumbnail' | 'preset' | 'motion' | 'web-template';
  imageUrl: string;
  description: string;
  tag?: string;
  features: string[];
}

export interface Review {
  id: string;
  name: string;
  message: string;
  rating: number;
  date: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
  initials: string;
}

