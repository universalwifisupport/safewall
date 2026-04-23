# Quick Reference - Deploy Commands

## Push Changes to GitHub (Auto-Deploy)

```bash
git add .
git commit -m "Your change description"
git push origin main
```

✅ **Automatic deployment in 2-3 minutes!**

---

## Build & Test Locally

```bash
# Development server
pnpm dev

# Production build
pnpm build
```

---

## First Time Setup

```bash
# Initialize repository
git init
git remote add origin https://github.com/universalwifisupport/safewall.git
git branch -M main

# First push
git add .
git commit -m "Initial commit"
git push -u origin main
```

---

## DNS Settings (One-Time)

### A Records @ safewallsystems.com:
- 185.199.108.153
- 185.199.109.153  
- 185.199.110.153
- 185.199.111.153

### CNAME Record:
- www → universalwifisupport.github.io

---

## Useful Links

- **Live Site:** https://safewallsystems.com
- **GitHub Repo:** https://github.com/universalwifisupport/safewall
- **Deployment Status:** https://github.com/universalwifisupport/safewall/actions
- **GitHub Pages Settings:** https://github.com/universalwifisupport/safewall/settings/pages

---

## Common Git Commands

```bash
# Check status
git status

# View changes
git diff

# View commit history
git log --oneline

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Pull latest changes
git pull origin main

# Create new branch
git checkout -b feature-name
```

---

**📝 Full Documentation:**
- See `PUSH_TO_GITHUB.md` for step-by-step guide
- See `DEPLOYMENT.md` for technical details
- See `README.md` for project overview
