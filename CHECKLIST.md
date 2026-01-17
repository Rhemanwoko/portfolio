# Portfolio Launch Checklist

## Before Deployment

### Content Review
- [ ] Review personal info in `/data/personal.ts`
  - [ ] Name, title, tagline
  - [ ] Email address
  - [ ] Resume URL
  - [ ] Bio text
  - [ ] Social links (GitHub, LinkedIn)

- [ ] Review projects in `/data/projects.ts`
  - [ ] All 4 projects have complete case studies
  - [ ] Metrics are accurate
  - [ ] Links are correct (or set to undefined)
  - [ ] Tech stacks are up to date

- [ ] Review experience in `/data/experience.ts`
  - [ ] All roles are listed
  - [ ] Dates are correct
  - [ ] Achievements use action verbs
  - [ ] Tech stacks are accurate

### Visual Assets
- [ ] Add project screenshots to `/public/projects/`
  - [ ] cakkies-1.png, cakkies-2.png
  - [ ] getmessenger-1.png, getmessenger-2.png
  - [ ] kodecamp-1.png, kodecamp-2.png
  - [ ] mflex-1.png, mflex-2.png
- [ ] (Optional) Add Open Graph image to `/public/og-image.png`
- [ ] (Optional) Add custom favicon to `/app/favicon.ico`

### Testing
- [ ] Test locally (`npm run dev`)
- [ ] Check all pages load correctly
  - [ ] Home (/)
  - [ ] About (/about)
  - [ ] Projects (/projects)
  - [ ] Each project detail page
  - [ ] Experience (/experience)
  - [ ] Contact (/contact)
  - [ ] Blog (/blog)
- [ ] Test navigation (header links)
- [ ] Test mobile responsiveness
- [ ] Test contact form (should log to console in dev)
- [ ] Test project filters
- [ ] Build successfully (`npm run build`)

## Deployment

### GitHub Setup
- [ ] Create GitHub repository
- [ ] Push code to GitHub
  ```bash
  git init
  git add .
  git commit -m "Initial commit"
  git branch -M main
  git remote add origin YOUR_REPO_URL
  git push -u origin main
  ```

### Netlify Setup
- [ ] Sign up/login to Netlify
- [ ] Connect GitHub repository
- [ ] Configure build settings:
  - Build command: `npm run build`
  - Publish directory: `.next`
  - Node version: 20
- [ ] Add environment variable:
  - `NEXT_PUBLIC_SITE_URL`: Your Netlify URL
- [ ] Deploy site
- [ ] Verify deployment successful

### Contact Form (Optional)
- [ ] Sign up for Resend account
- [ ] Get API key
- [ ] Add to Netlify environment variables:
  - Key: `RESEND_API_KEY`
  - Value: Your API key
- [ ] Redeploy site
- [ ] Test contact form sends emails

## Post-Deployment

### Verification
- [ ] Visit live site
- [ ] Test all pages on production
- [ ] Test on mobile device
- [ ] Test contact form
- [ ] Check console for errors (F12)

### Performance
- [ ] Run Lighthouse audit
  - [ ] Performance ≥ 90
  - [ ] Accessibility ≥ 95
  - [ ] SEO ≥ 95
  - [ ] Best Practices ≥ 90
- [ ] Test loading speed
- [ ] Verify images load correctly

### SEO
- [ ] Verify sitemap: `yoursite.com/sitemap.xml`
- [ ] Verify robots.txt: `yoursite.com/robots.txt`
- [ ] Test structured data: [Google Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Submit to Google Search Console
- [ ] (Optional) Submit to Bing Webmaster Tools

### Sharing
- [ ] Update LinkedIn with portfolio link
- [ ] Update GitHub profile README
- [ ] Add to resume
- [ ] Share with network

## Optional Enhancements

### Custom Domain
- [ ] Purchase domain
- [ ] Configure DNS in Netlify
- [ ] Update `NEXT_PUBLIC_SITE_URL`
- [ ] Verify SSL certificate

### Analytics (Optional)
- [ ] Set up Google Analytics
- [ ] Add tracking code
- [ ] Verify tracking works

### Blog Content (Future)
- [ ] Create `/content/blog/` directory
- [ ] Write first blog post
- [ ] Update blog page to display posts
- [ ] Add RSS feed

## Maintenance

### Regular Updates
- [ ] Add new projects as completed
- [ ] Update experience section
- [ ] Keep skills current
- [ ] Update metrics and achievements
- [ ] Add blog posts (if using blog)

### Monitoring
- [ ] Check contact form submissions
- [ ] Monitor site performance
- [ ] Update dependencies quarterly
- [ ] Renew domain annually (if using custom domain)

## Quick Reference

### Local Development
```bash
npm run dev          # Start dev server
npm run build        # Test production build
npm run start        # Run production build locally
```

### Deployment
```bash
git add .
git commit -m "Update content"
git push
# Netlify auto-deploys on push
```

### Content Updates
1. Edit files in `/data/`
2. Commit and push
3. Netlify rebuilds automatically

---

## Status Tracker

**Current Status**: ⬜ Not Started

- ⬜ Content reviewed
- ⬜ Screenshots added
- ⬜ Tested locally
- ⬜ Deployed to Netlify
- ⬜ Contact form configured
- ⬜ Performance verified
- ⬜ SEO configured
- ⬜ Shared publicly

**Target Launch Date**: _________________

**Actual Launch Date**: _________________

---

**You're almost there!** Follow this checklist and you'll have a professional portfolio live in no time. 🚀
