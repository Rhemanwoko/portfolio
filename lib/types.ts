export type Project = {
  slug: string;
  title: string;
  tagline: string;
  timeframe?: string;
  role: string;
  stack: string[];
  highlights: string[];
  metrics?: string[];
  problem: string;
  solution: string;
  challenges?: string[];
  results?: string[];
  links: {
    live?: string;
    github?: string;
  };
  images: { src: string; alt: string }[];
  featured?: boolean;
  category: "SaaS" | "Dashboard" | "Mini App" | "Redesign" | "Freelance";
};

export type ExperienceItem = {
  company: string;
  role: string;
  locationType: "Remote" | "On-site" | "Hybrid";
  start: string;
  end?: string;
  bullets: string[];
  stack?: string[];
};

export type SocialLink = {
  name: string;
  url: string;
  icon: string;
};
