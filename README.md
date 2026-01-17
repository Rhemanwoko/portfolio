# Ugochukwu Nwoko - Portfolio Website

A modern, recruiter-focused portfolio website built with Next.js 14, React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Stack**: Next.js 14 (App Router), React, TypeScript, Tailwind CSS
- **SEO Optimized**: Sitemap, robots.txt, JSON-LD structured data
- **Fully Responsive**: Mobile-first design with accessibility features
- **Performance Focused**: Optimized for Core Web Vitals
- **Contact Form**: Integrated with Resend for email delivery
- **Type-Safe**: Full TypeScript coverage with typed data models
- **Content-Driven**: Easy content updates via data files

## 📁 Project Structure

```
portfolio/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── projects/          # Projects list and detail pages
│   ├── experience/        # Experience timeline
│   ├── contact/           # Contact form
│   ├── blog/              # Blog (scaffolded)
│   ├── api/contact/       # Contact form API route
│   └── layout.tsx         # Root layout with SEO
├── components/            # React components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Site footer
│   ├── ProjectCard.tsx    # Project card component
│   └── JsonLd.tsx         # Structured data
├── data/                  # Content data files
│   ├── personal.ts        # Personal info, bio, skills
│   ├── projects.ts        # Project case studies
│   └── experience.ts      # Work experience
├── lib/                   # Utilities
│   ├── types.ts           # TypeScript types
│   └── utils.ts           # Helper functions
└── public/                # Static assets
    └── projects/          # Project screenshots
```

## 🛠️ Setup & Installation

1. **Clone the repository**
   ```bash
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Update `.env.local` with your values:
   - `NEXT_PUBLIC_SITE_URL`: Your production URL
   - `RESEND_API_KEY`: Get from [resend.com](https://resend.com) (optional for development)

4. **Run development server**
   ```bash
   npm run dev
   ```
   
   Open [http://localhost:3000](http://localhost:3000)

## 📝 Content Management

All content is managed through typed data files in the `/data` directory:

### Personal Information (`data/personal.ts`)
- Name, title, tagline
- Bio and email
- Social links
- Skills grouped by category

### Projects (`data/projects.ts`)
- Project details and case studies
- Tech stack and metrics
- Problem, solution, results
- Links to live demos and GitHub

### Experience (`data/experience.ts`)
- Work history timeline
- Role descriptions and achievements
- Tech stack per role

## 🖼️ Adding Project Screenshots

1. Add images to `/public/projects/`
2. Name them according to project slugs:
   - `cakkies-1.png`, `cakkies-2.png`
   - `getmessenger-1.png`, `getmessenger-2.png`
   - etc.
3. Images are automatically referenced in project pages

## 🚀 Deployment

### Netlify (Recommended)

1. **Connect your repository** to Netlify
2. **Build settings**:
   - Build command: `npm run build`
   - Publish directory: `.next`
3. **Environment variables**: Add your production env vars
4. **Deploy**!

### Alternative: Vercel

```bash
npm install -g vercel
vercel
```

## 📊 Performance Targets

- **Performance**: ≥ 90
- **Accessibility**: ≥ 95
- **SEO**: ≥ 95
- **Best Practices**: ≥ 90

Run Lighthouse audit:
```bash
npm run build
npm run start
# Then run Lighthouse in Chrome DevTools
```

## 🔧 Development Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 📧 Contact Form Setup

The contact form uses [Resend](https://resend.com) for email delivery:

1. Sign up at [resend.com](https://resend.com)
2. Get your API key
3. Add to `.env.local`: `RESEND_API_KEY=your_key`
4. (Optional) Verify your domain for production

In development without an API key, form submissions are logged to console.

## 🎨 Customization

### Colors
Update Tailwind colors in `app/globals.css` under `:root` and `.dark`

### Fonts
Change fonts in `app/layout.tsx` (currently using Inter)

### Content
Edit files in `/data` directory - no need to touch components!

## 📱 Accessibility Features

- Semantic HTML
- ARIA labels
- Keyboard navigation
- Focus states
- Skip to main content link
- Reduced motion support
- Screen reader friendly

## 🔍 SEO Features

- Dynamic metadata per page
- Open Graph tags
- Twitter Card tags
- JSON-LD structured data (Person, WebSite)
- Sitemap generation
- Robots.txt
- Canonical URLs

## 📄 License

© 2026 Ugochukwu Nwoko. All rights reserved.

## 🤝 Contact

- **Email**: rhemanwoko@gmail.com
- **GitHub**: [Rhemanwoko](https://github.com/Rhemanwoko)
- **LinkedIn**: [ugochukwu-nwoko](https://www.linkedin.com/in/ugochukwu-nwoko/)
