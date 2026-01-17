# Deployment Guide

## Quick Start

Your portfolio is ready to deploy! Here's how to get it live on Netlify (free).

## Prerequisites

- GitHub account
- Netlify account (sign up at [netlify.com](https://netlify.com))
- Resend account for contact form (optional, get at [resend.com](https://resend.com))

## Step 1: Push to GitHub

```bash
cd portfolio
git init
git add .
git commit -m "Initial commit: Portfolio website"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

## Step 2: Deploy to Netlify

### Option A: Netlify UI (Recommended)

1. Go to [app.netlify.com](https://app.netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Choose GitHub and select your repository
4. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
   - **Node version**: 20
5. Add environment variables:
   - `NEXT_PUBLIC_SITE_URL`: Your site URL (e.g., `https://yourname.netlify.app`)
   - `RESEND_API_KEY`: Your Resend API key (optional for now)
6. Click "Deploy site"

### Option B: Netlify CLI

```bash
npm install -g netlify-cli
netlify login
netlify init
netlify deploy --prod
```

## Step 3: Set Up Contact Form (Optional)

1. Sign up at [resend.com](https://resend.com)
2. Get your API key from the dashboard
3. In Netlify:
   - Go to Site settings → Environment variables
   - Add `RESEND_API_KEY` with your key
4. Redeploy the site

**Note**: Without Resend, contact form submissions will still work but won't send emails (they'll be logged server-side).

## Step 4: Custom Domain (Optional)

1. In Netlify, go to Domain settings
2. Click "Add custom domain"
3. Follow instructions to configure DNS

## Step 5: Add Project Screenshots

1. Add your project screenshots to `/public/projects/`
2. Name them according to the data:
   - `cakkies-1.png`, `cakkies-2.png`
   - `getmessenger-1.png`, `getmessenger-2.png`
   - `kodecamp-1.png`, `kodecamp-2.png`
   - `mflex-1.png`, `mflex-2.png`
3. Commit and push:
   ```bash
   git add public/projects/
   git commit -m "Add project screenshots"
   git push
   ```

## Updating Content

All content is in `/data` files. To update:

1. Edit the relevant file in `/data/`
2. Commit and push changes
3. Netlify will automatically rebuild and deploy

## Performance Optimization

After deployment, run Lighthouse audit:

1. Open your site in Chrome
2. Open DevTools (F12)
3. Go to Lighthouse tab
4. Run audit

Target scores:
- Performance: ≥ 90
- Accessibility: ≥ 95
- SEO: ≥ 95

## Troubleshooting

### Build fails on Netlify

- Check Node version is set to 20
- Verify all dependencies are in `package.json`
- Check build logs for specific errors

### Contact form not working

- Verify `RESEND_API_KEY` is set in environment variables
- Check Resend dashboard for API usage
- Verify email address in `/data/personal.ts`

### Images not showing

- Ensure images are in `/public/projects/`
- Check file names match exactly (case-sensitive)
- Verify images are committed to Git

## Support

For issues:
1. Check the [Next.js docs](https://nextjs.org/docs)
2. Check the [Netlify docs](https://docs.netlify.com)
3. Review build logs in Netlify dashboard

## Next Steps

- [ ] Deploy to Netlify
- [ ] Add project screenshots
- [ ] Set up custom domain
- [ ] Configure Resend for contact form
- [ ] Run Lighthouse audit
- [ ] Share your portfolio!
