export interface Project {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: 'web' | 'mobile' | 'desktop' | 'other';
  featured?: boolean;
  createdAt: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
  external?: boolean;
}

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'mobile' | 'tools';
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  description: string;
  technologies: string[];
}