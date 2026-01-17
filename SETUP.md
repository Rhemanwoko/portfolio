# Portfolio Setup Guide

## ✅ What's Already Done

Your portfolio is fully built and ready to use! Here's what's included:

### Pages
- ✅ Home page with hero, skills, featured projects, metrics
- ✅ About page with bio and skills breakdown
- ✅ Projects page with filtering by category and tech
- ✅ Individual project case study pages
- ✅ Experience page with timeline
- ✅ Contact page with working form
- ✅ Blog page (scaffolded for future content)

### Features
- ✅ Fully responsive mobile-first design
- ✅ Dark mode support (system preference)
- ✅ SEO optimized (sitemap, robots.txt, JSON-LD)
- ✅ Accessibility features (keyboard nav, ARIA labels, focus states)
- ✅ Contact form with spam protection
- ✅ Type-safe content management
- ✅ Performance optimized

### Content
- ✅ All your experience from CV
- ✅ 4 featured projects with case studies
- ✅ Skills organized by category
- ✅ Professional bio
- ✅ Social links (GitHub, LinkedIn)

## 🚀 Quick Start

1. **Test locally**:
   ```bash
   cd portfolio
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000)

2. **Review content**:
   - Check `/data/personal.ts` for bio and contact info
   - Check `/data/projects.ts` for project details
   - Check `/data/experience.ts` for work history

3. **Add screenshots**:
   - Place project images in `/public/projects/`
   - Follow naming convention in `/public/projects/.gitkeep`

4. **Deploy** (see DEPLOYMENT.md):
   - Push to GitHub
   - Connect to Netlify
   - Add environment variables
   - Deploy!

## 📝 Customizing Content

### Personal Information

Edit `/data/personal.ts`:

```typescript
export const personalInfo = {
  name: "Your Name",
  title: "Your Title",
  tagline: "Your tagline",
  email: "your@email.com",
  resumeUrl: "your-resume-url",
  bio: "Your bio...",
};
```

### Projects

Edit `/data/projects.ts`:

```typescript
{
  slug: "project-slug",
  title: "Project Title",
  tagline: "Short description",
  category: "SaaS" | "Dashboard" | "Mini App" | "Redesign" | "Freelance",
  stack: ["React", "TypeScript"],
  problem: "What problem did you solve?",
  solution: "How did you solve it?",
  results: ["Metric 1", "Metric 2"],
  // ... more fields
}
```

### Experience

Edit `/data/experience.ts`:

```typescript
{
  company: "Company Name",
  role: "Your Role",
  locationType: "Remote" | "On-site" | "Hybrid",
  start: "2024",
  end: "Present",
  bullets: [
    "Achievement 1",
    "Achievement 2",
  ],
  stack: ["Tech1", "Tech2"],
}
```

## 🎨 Customizing Design

### Colors

Edit `/app/globals.css` to change colors:

```css
@theme {
  --color-primary: oklch(60% 0.2 250); /* Blue */
  /* Change the hue (250) to adjust color:
     - 0-30: Red/Orange
     - 120: Green
     - 250: Blue
     - 300: Purple
  */
}
```

### Fonts

Edit `/app/layout.tsx`:

```typescript
import { YourFont } from "next/font/google";

const yourFont = YourFont({ subsets: ["latin"] });
```

## 📧 Contact Form Setup

### Development (No API Key)

The form works without an API key - submissions are logged to console.

### Production (With Resend)

1. Sign up at [resend.com](https://resend.com)
2. Get API key
3. Add to Netlify environment variables:
   - Key: `RESEND_API_KEY`
   - Value: Your API key
4. Redeploy

## 📸 Adding Project Screenshots

1. Take screenshots of your projects
2. Optimize them (recommended: 1200x800px, WebP or PNG)
3. Save to `/public/projects/` with these names:
   - `cakkies-1.png`, `cakkies-2.png`
   - `getmessenger-1.png`, `getmessenger-2.png`
   - `kodecamp-1.png`, `kodecamp-2.png`
   - `mflex-1.png`, `mflex-2.png`

## 🔍 SEO Checklist

- [ ] Update `NEXT_PUBLIC_SITE_URL` in `.env.local` and Netlify
- [ ] Add Open Graph image (1200x630px) to `/public/og-image.png`
- [ ] Verify sitemap at `/sitemap.xml`
- [ ] Test structured data with [Google Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Submit sitemap to Google Search Console

## 📊 Performance Checklist

- [ ] Run Lighthouse audit (target: 90+ all categories)
- [ ] Optimize images (use WebP format)
- [ ] Test on mobile devices
- [ ] Check loading speed on slow connections
- [ ] Verify accessibility with screen reader

## 🐛 Common Issues

### "Module not found" errors
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build fails
```bash
npm run build
# Check error messages and fix accordingly
```

### Contact form not sending emails
- Verify `RESEND_API_KEY` is set
- Check Resend dashboard for errors
- Ensure email in `/data/personal.ts` is correct

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Netlify Documentation](https://docs.netlify.com)
- [Resend Documentation](https://resend.com/docs)

## 🎯 Next Steps

1. [ ] Test locally (`npm run dev`)
2. [ ] Review and update content in `/data`
3. [ ] Add project screenshots
4. [ ] Deploy to Netlify (see DEPLOYMENT.md)
5. [ ] Set up custom domain (optional)
6. [ ] Configure contact form with Resend
7. [ ] Run Lighthouse audit
8. [ ] Share your portfolio!

## 💡 Tips

- Keep content in `/data` files - never hardcode in components
- Use action verbs in experience bullets
- Include metrics in project results
- Update regularly with new projects
- Test on multiple devices and browsers

## 🤝 Need Help?

- Check README.md for project structure
- Check DEPLOYMENT.md for deployment steps
- Review code comments for implementation details
- Test locally before deploying

---

**Your portfolio is production-ready!** Just add screenshots, deploy, and you're live. 🚀
