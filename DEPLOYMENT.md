# GitHub Pages Deployment Guide

## Automatic Deployment Setup

This repository is configured to automatically deploy to GitHub Pages whenever you push to the `main` branch.

### What's Configured:

1. **GitHub Actions Workflow** (`.github/workflows/deploy.yml`)
   - Triggers on every push to `main` branch
   - Builds Next.js static export
   - Deploys to GitHub Pages

2. **Custom Domain** (`public/CNAME`)
   - Configured for: `safewallsystems.com`

3. **Next.js Static Export** (`next.config.mjs`)
   - Output: Static HTML/CSS/JS
   - Optimized for GitHub Pages

### DNS Configuration Required:

Configure your DNS settings at your domain registrar:

**For root domain (safewallsystems.com):**
```
Type: A
Name: @
Value: 185.199.108.153
Value: 185.199.109.153
Value: 185.199.110.153
Value: 185.199.111.153
```

**For www subdomain (www.safewallsystems.com):**
```
Type: CNAME
Name: www
Value: universalwifisupport.github.io
```

### GitHub Repository Settings:

1. Go to: `Settings > Pages`
2. Source: **GitHub Actions** (already set)
3. Custom domain: `safewallsystems.com`
4. Enforce HTTPS: ✅ Enabled

### Deployment Process:

1. Make changes to your code
2. Commit and push to `main` branch:
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```
3. GitHub Actions automatically builds and deploys
4. Check deployment status in the **Actions** tab
5. Site updates live in ~2-3 minutes

### Build Locally (Test Before Push):

```bash
pnpm build
```

This generates the `out` folder with static files.

### Troubleshooting:

- **404 errors**: Ensure trailing slashes in URLs (configured)
- **Images not loading**: Check image paths are relative
- **Build fails**: Check Actions tab for error logs
- **Domain not working**: Verify DNS settings (takes 24-48 hours)

### Manual Deployment:

Trigger manually from GitHub:
1. Go to **Actions** tab
2. Select "Deploy Next.js to GitHub Pages"
3. Click "Run workflow"
