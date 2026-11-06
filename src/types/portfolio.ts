export type ProjectCategory =
  'backend' | 'instrumentation' | 'embedded' | 'research';

export type ProjectStatus =
  'completed' | 'in-progress' | 'prototype' | 'research';

export interface SocialLink {
  label: string;
  url: string;
}

export interface SkillGroup {
  id: string;
  title: string;
  description: string;
  icon: string;
  technologies: string[];
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  category: ProjectCategory[];
  status: ProjectStatus;
  description: string;
  overview: string;
  problem: string;
  solution: string;
  features: string[];
  architecture: string;
  technologies: string[];
  highlights: string[];
  repository?: string;
  demo?: string;
  featured: boolean;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  status: 'completed' | 'in-progress';
  description: string;
}

export interface Experience {
  id: string;
  position: string;
  organization: string;
  location: string;
  period: string;
  description: string;
  responsibilities: string[];
}

export interface ResearchItem {
  id: string;
  title: string;
  description: string;
  topics: string[];
}
