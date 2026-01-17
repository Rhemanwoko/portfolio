import { SocialLink } from "@/lib/types";

export const personalInfo = {
  name: "Ugochukwu Nwoko",
  title: "Front-End Developer",
  tagline: "Building scalable, performant UIs with React, TypeScript & Tailwind",
  email: "rhemanwoko@gmail.com",
  resumeUrl: "https://drive.google.com/file/d/1EdBT3BQKcdUzijwu2WWm5TyxnMukmxUh/view?usp=sharing",
  bio: "I'm a Front-End Developer with 3+ years of experience building scalable, user-focused web applications using React, TypeScript, and Tailwind CSS. I specialize in creating clean, performant interfaces with strong attention to accessibility and maintainable component architecture. I've worked on products used by 1,000+ and 2,000+ users, collaborating closely with designers, product managers, and backend teams. I also have working knowledge of Node.js for building and integrating REST APIs and server-side logic. I enjoy turning complex requirements into intuitive digital experiences that ship reliably to production.",
};

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/Rhemanwoko",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ugochukwu-nwoko/",
    icon: "linkedin",
  },
];

export const skills = {
  frontend: ["React", "TypeScript", "Tailwind CSS", "Next.js", "JavaScript", "HTML5", "CSS3", "SASS"],
  stateAndData: ["Redux", "Context API", "REST APIs", "Axios"],
  backendWorking: ["Node.js", "Express", "API Design"],
  tooling: ["Git", "GitHub", "Vercel", "Netlify", "Postman", "VS Code", "Figma", "Canva"],
};

export const whatImBestAt = [
  "Performance optimization and Core Web Vitals",
  "Accessibility standards (WCAG) and semantic HTML",
  "Component architecture and reusable design systems",
  "API integration and state management",
  "Responsive design and cross-browser compatibility",
];
