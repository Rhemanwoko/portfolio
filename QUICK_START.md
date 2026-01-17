# Quick Start Guide

## 🚀 Get Your Portfolio Live in 30 Minutes

### Step 1: Test Locally (5 minutes)

```bash
cd portfolio
npm run dev
```

Open http://localhost:3000 and verify everything looks good.

### Step 2: Add Screenshots (10 minutes)

1. Take screenshots of your projects
2. Save to `/public/projects/` with these exact names:
   - `cakkies-1.png`, `cakkies-2.png`
   - `getmessenger-1.png`, `getmessenger-2.png`
   - `kodecamp-1.png`, `kodecamp-2.png`
   - `mflex-1.png`, `mflex-2.png`

### Step 3: Deploy to Netlify (15 minutes)

#### A. Push to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Portfolio website"

# Create main branch
git branch -M main

# Add your GitHub repo (create one first on github.com)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# Push
git push -u origin main
```

#### B. Deploy on Netlify

1. Go to [app.netlify.com](https://app.netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Choose GitHub and select your repository
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
5. Add environment variable:
   - Key: `NEXT_PUBLIC_SITE_URL`
   - Value: (leave empty for now, update after first deploy)
6. Click "Deploy site"
7. Wait 2-3 minutes for build to complete
8. Copy your Netlify URL (e.g., `https://yourname.netlify.app`)
9. Go to Site settings → Environment variables
10. Update `NEXT_PUBLIC_SITE_URL` with your Netlify URL
11. Trigger redeploy

### Step 4: Share! (2 minutes)

- Update LinkedIn with portfolio link
- Add to resume
- Share with your network

## 🎯 That's It!

Your portfolio is now live and professional.

## 📧 Optional: Set Up Contact Form

1. Sign up at [resend.com](https://resend.com) (free tier)
2. Get API key from dashboard
3. In Netlify: Site settings → Environment variables
4. Add new variable:
   - Key: `RESEND_API_KEY`
   - Value: Your Resend API key
5. Trigger redeploy
6. Test contact form on your live site

## 🔄 Making Updates

### Update Content

1. Edit files in `/data/` directory
2. Commit and push:
   ```bash
   git add .
   git commit -m "Update content"
   git push
   ```
3. Netlify auto-deploys (takes 2-3 minutes)

### Add New Project

1. Add to `/data/projects.ts`
2. Add screenshots to `/public/projects/`
3. Commit and push

## 📊 Check Performance

After deployment:

1. Open your site in Chrome
2. Press F12 (DevTools)
3. Go to Lighthouse tab
4. Click "Generate report"
5. Aim for 90+ in all categories

## 🆘 Troubleshooting

### Build fails on Netlify
- Check build logs in Netlify dashboard
- Verify Node version is 20
- Try building locally: `npm run build`

### Images not showing
- Check file names match exactly (case-sensitive)
- Verify images are in `/public/projects/`
- Make sure images are committed to Git

### Contact form not working
- Without Resend: Form works but doesn't send emails (logs server-side)
- With Resend: Check API key is set correctly in Netlify

## 📚 Need More Help?

- **Full setup guide**: See SETUP.md
- **Deployment details**: See DEPLOYMENT.md
- **Complete checklist**: See CHECKLIST.md
- **Project overview**: See README.md

## 🎉 You're Done!

Your portfolio is live and ready to help you land your next role. Good luck! 🚀

---

**Quick Commands Reference**

```bash
# Development
npm run dev          # Start dev server
npm run build        # Test production build
npm run start        # Run production build

# Git
git add .            # Stage changes
git commit -m "msg"  # Commit changes
git push             # Deploy to Netlify

# Testing
npm run lint         # Check code quality
```
