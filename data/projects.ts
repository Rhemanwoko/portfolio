import { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    slug: "oploads-ai-platform",
    title: "Oploads AI Platform",
    tagline: "AI-powered SaaS platform with data-driven dashboard and landing page",
    timeframe: "2025 - Present",
    role: "Front-End Developer",
    category: "SaaS",
    stack: ["React", "TypeScript", "Tailwind CSS"],
    highlights: [
      "Launched company's main landing page with optimized performance and SEO",
      "Built complex data-driven dashboard with modular component architecture",
      "Collaborated with product and backend teams for seamless API integration",
      "Implemented mobile-first design with rigorous accessibility standards",
    ],
    metrics: ["Significantly enhanced initial load performance", "Improved SEO results", "Scalable component structure"],
    problem:
      "Oploads AI needed a professional landing page and dashboard to launch their AI-powered SaaS platform. The solution required excellent performance, SEO optimization, and a scalable architecture for future features.",
    solution:
      "Built the main landing page using React, TypeScript, and Tailwind CSS with a focus on performance and SEO. Designed and implemented a complex, data-driven dashboard with modular components for scalability. Collaborated closely with backend teams to define API contracts and ensure seamless integration across UI layers.",
    challenges: [
      "Balancing feature-rich dashboard with performance requirements",
      "Ensuring responsive design across diverse devices and screen sizes",
      "Implementing accessibility standards while maintaining modern aesthetics",
      "Coordinating with backend team for optimal API structure",
    ],
    results: [
      "Successfully launched main landing page with significantly enhanced load performance",
      "Delivered scalable dashboard architecture ready for future features",
      "Achieved excellent SEO results for improved discoverability",
      "Implemented comprehensive accessibility standards across all interfaces",
      "Established efficient collaboration patterns with product and backend teams",
    ],
    links: {
      live: undefined,
      github: undefined,
    },
    images: [
      { src: "/projects/oploads-1.png", alt: "Oploads AI landing page" },
      { src: "/projects/oploads-2.png", alt: "Oploads AI dashboard interface" },
    ],
    featured: true,
  },
  {
    slug: "cakkies-telegram-mini-app",
    title: "Cakkies Telegram Mini App",
    tagline: "Telegram-based food service platform serving 1,000+ active users",
    timeframe: "2024 - 2025",
    role: "Front-End Developer",
    category: "Mini App",
    stack: ["React", "TypeScript", "Tailwind CSS", "REST APIs"],
    highlights: [
      "Built from scratch using ReactJS, TypeScript, and TailwindCSS",
      "Integrated APIs and real-time features for streamlined ordering",
      "Optimized for sub-1s load times with mobile-first strategies",
    ],
    metrics: ["1,000+ active users", "20% improvement in response time", "Sub-1s page load times"],
    problem:
      "Cakkies needed a fast, intuitive food ordering platform integrated directly into Telegram to reach users where they already spend time, without requiring a separate app download.",
    solution:
      "Architected a Telegram Mini App using React, TypeScript, and Tailwind CSS. Integrated REST APIs for real-time order placement and menu updates. Implemented atomic design principles for reusable UI components, ensuring consistency and maintainability.",
    challenges: [
      "Optimizing performance within Telegram's WebView constraints",
      "Ensuring responsive design across diverse mobile devices",
      "Managing real-time state synchronization for orders",
    ],
    results: [
      "Served 1,000+ active users with consistent performance",
      "Achieved 20% improvement in order response time",
      "Reduced UI bugs by 25% through component reusability",
      "Delivered sub-1s load times on Feed, Post, and Order pages",
    ],
    links: {
      live: undefined,
      github: undefined,
    },
    images: [
      { src: "/projects/cakkies-1.png", alt: "Cakkies home feed interface" },
      { src: "/projects/cakkies-2.png", alt: "Cakkies order placement flow" },
    ],
    featured: true,
  },
  {
    slug: "getmessenger-redesign",
    title: "GetMessenger Website Redesign",
    tagline: "Logistics platform UI overhaul for 2,000+ users",
    timeframe: "2023 - 2024",
    role: "Front-End Developer",
    category: "Redesign",
    stack: ["React", "Tailwind CSS", "REST APIs"],
    highlights: [
      "Redesigned logistics platform UI to increase engagement by 20%",
      "Delivered full multi-language support and mobile optimization across devices",
      "Reduced front-end defects by 30% through structured refactoring",
    ],
    metrics: ["2,000+ users", "40% boost in usability scores", "30% reduction in front-end defects"],
    problem:
      "GetMessenger's existing platform had poor responsiveness, limited accessibility, and inconsistent UI patterns, leading to user frustration and low engagement.",
    solution:
      "Re-architected the front-end using React and Tailwind CSS. Implemented responsive layouts for key pages (Referral, Profile, Home). Collaborated with UX teams to add multi-language support and improve accessibility standards.",
    challenges: [
      "Refactoring legacy codebase without breaking existing features",
      "Coordinating with backend teams for seamless API integration",
      "Balancing performance optimization with feature-rich UI",
    ],
    results: [
      "Increased usability scores by 40%",
      "Reduced front-end defects by 30% through proactive bug triaging",
      "Improved engagement by 20% with multi-language support",
      "Ensured seamless UI-data synchronization for logistics tracking",
    ],
    links: {
      live: undefined,
      github: undefined,
    },
    images: [
      { src: "/projects/getmessenger-1.png", alt: "GetMessenger redesigned home page" },
      { src: "/projects/getmessenger-2.png", alt: "GetMessenger profile interface" },
    ],
    featured: true,
  },
  {
    slug: "kodecamp-travels",
    title: "KodeCamp Travels",
    tagline: "Responsive multi-page travel website delivered ahead of schedule",
    timeframe: "2021 - 2023",
    role: "Team Lead & Front-End Developer",
    category: "Freelance",
    stack: ["React", "JavaScript", "CSS3", "Figma"],
    highlights: [
      "Led a 7-person frontend team to deliver 2 weeks ahead of deadline",
      "Built responsive, accessible UI components with mobile-first principles",
      "Optimized performance through lazy loading and asset compression",
    ],
    metrics: ["Delivered 2 weeks early", "30% improvement in initial load speed", "Full cross-browser compatibility"],
    problem:
      "KodeCamp needed a professional travel website with full responsiveness, accessibility, and pixel-perfect design implementation within a tight deadline.",
    solution:
      "Led a 7-person frontend team using React and CSS3. Collaborated with designers in Figma to translate mockups into code. Built critical UI components (Home, Services, About Us) with mobile-first and accessibility best practices. Conducted code reviews and mentorship to maintain quality.",
    challenges: [
      "Coordinating a distributed team across time zones",
      "Ensuring pixel-perfect implementation from Figma designs",
      "Meeting aggressive timeline without compromising quality",
    ],
    results: [
      "Delivered platform 2 weeks ahead of schedule",
      "Achieved 30% improvement in initial load speed through optimization",
      "Ensured full responsiveness across browsers and devices",
      "Improved team velocity and code quality through mentorship",
    ],
    links: {
      live: undefined,
      github: undefined,
    },
    images: [
      { src: "/projects/kodecamp-1.png", alt: "KodeCamp Travels home page" },
      { src: "/projects/kodecamp-2.png", alt: "KodeCamp Travels services section" },
    ],
    featured: true,
  },
  {
    slug: "m-flex-webapp",
    title: "M-Flex WebApp",
    tagline: "API-driven user profile pages with animations and responsiveness",
    timeframe: "2023 - 2024",
    role: "Front-End Developer",
    category: "Dashboard",
    stack: ["React", "Tailwind CSS", "REST APIs"],
    highlights: [
      "Created animated, API-driven user profile pages with full responsiveness",
      "Ensured seamless integration with backend logistics tracking systems",
      "Delivered interactive UI with high attention to detail",
    ],
    metrics: ["Full responsiveness", "Seamless API integration", "Enhanced user interactivity"],
    problem:
      "M-Flex needed dynamic, animated profile pages that could display real-time user data from backend APIs while maintaining smooth performance and responsiveness.",
    solution:
      "Built API-driven profile pages using React and Tailwind CSS. Integrated REST APIs for real-time data synchronization. Implemented smooth animations and transitions while ensuring mobile responsiveness and accessibility.",
    challenges: [
      "Balancing animation performance with data-heavy UI",
      "Ensuring real-time data updates without UI flicker",
      "Maintaining consistency with GetMessenger platform design",
    ],
    results: [
      "Delivered fully responsive and interactive profile pages",
      "Achieved seamless API integration with zero data sync issues",
      "Enhanced user experience with smooth, performant animations",
    ],
    links: {
      live: undefined,
      github: undefined,
    },
    images: [
      { src: "/projects/mflex-1.png", alt: "M-Flex profile page interface" },
      { src: "/projects/mflex-2.png", alt: "M-Flex dashboard view" },
    ],
    featured: true,
  },
  {
    slug: "portfolio-website",
    title: "Portfolio Website",
    tagline: "Modern, recruiter-focused portfolio built with Next.js and TypeScript",
    timeframe: "2026",
    role: "Front-End Developer",
    category: "Freelance",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    highlights: [
      "Built with Next.js 14 App Router for optimal performance",
      "Implemented SEO optimization with sitemap, robots.txt, and JSON-LD",
      "Created content-driven architecture for easy maintenance",
      "Integrated contact form with spam protection and rate limiting",
    ],
    metrics: ["Lighthouse score 90+", "Fully accessible (WCAG compliant)", "Mobile-first responsive"],
    problem:
      "Needed a professional portfolio website to showcase frontend development skills and projects to recruiters and potential employers. The site had to be fast, accessible, SEO-optimized, and easy to maintain.",
    solution:
      "Built a modern portfolio using Next.js 14 with TypeScript and Tailwind CSS. Implemented a content-driven architecture where all content lives in typed data files, making updates simple without touching components. Added comprehensive SEO features including sitemap generation, structured data, and optimized metadata. Created a working contact form with Resend integration, spam protection, and rate limiting.",
    challenges: [
      "Balancing visual appeal with performance optimization",
      "Ensuring accessibility while maintaining modern design",
      "Creating a maintainable content structure",
      "Implementing production-ready contact form with security",
    ],
    results: [
      "Achieved Lighthouse scores of 90+ across all categories",
      "Fully responsive design working seamlessly on all devices",
      "Content updates possible without code changes via data files",
      "Production-ready with comprehensive documentation",
      "SEO-optimized with structured data and meta tags",
    ],
    links: {
      live: undefined,
      github: "https://github.com/Rhemanwoko",
    },
    images: [
      { src: "/projects/portfolio-1.png", alt: "Portfolio home page" },
      { src: "/projects/portfolio-2.png", alt: "Portfolio projects page" },
    ],
    featured: true,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
