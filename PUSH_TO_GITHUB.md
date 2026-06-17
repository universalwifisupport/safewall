# Push to GitHub and Deploy

Follow these steps to push your website to GitHub and deploy to safewallsystems.com:

## Step 1: Initialize Git (if not done)

```bash
cd "D:\Campaign website\new wwebsites\v0 web"
git init
git remote add origin https://github.com/universalwifisupport/safewall.git
```

## Step 2: Stage All Files

```bash
git add .
```

## Step 3: Commit Changes

```bash
git commit -m "Initial commit: Safe Wall Systems website with GitHub Pages deployment"
```

## Step 4: Push to GitHub

```bash
git push -u origin main
```

If this is the first push, you may need to set the branch:
```bash
git branch -M main
git push -u origin main
```

## Step 5: Verify GitHub Actions

1. Go to: https://github.com/universalwifisupport/safewall/actions
2. You should see the "Deploy Next.js to GitHub Pages" workflow running
3. Wait for it to complete (~2-3 minutes)
4. Green checkmark ✅ means success!

## Step 6: Configure GitHub Pages (One-time setup)

1. Go to: https://github.com/universalwifisupport/safewall/settings/pages
2. **Source:** Should already be set to "GitHub Actions" ✅
3. **Custom domain:** Enter `safewallsystems.com`
4. Click **Save**
5. **Enforce HTTPS:** Check this box (will be available after DNS propagates)

## Step 7: Configure DNS at Your Domain Registrar

Add these DNS records:

### A Records (for safewallsystems.com):
```
Type: A
Name: @
Value: 185.199.108.153

Type: A  
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153
```

### CNAME Record (for www.safewallsystems.com):
```
Type: CNAME
Name: www
Value: universalwifisupport.github.io
```

**Note:** DNS changes take 24-48 hours to fully propagate.

## Step 8: Test Your Site

After DNS propagates:
- https://safewallsystems.com ✅
- https://www.safewallsystems.com ✅

## Future Updates

Every time you want to update the website:

```bash
# 1. Make your changes
# 2. Build locally to test (optional)
pnpm build

# 3. Commit and push
git add .
git commit -m "Description of your changes"
git push origin main

# 4. Wait 2-3 minutes for automatic deployment
```

Check deployment status: https://github.com/universalwifisupport/safewall/actions

## Troubleshooting

### Build Fails
- Check the Actions tab for error logs
- Run `pnpm build` locally to debug
- Verify all files are committed

### Domain Not Working
- Verify DNS settings with your registrar
- Wait up to 48 hours for propagation
- Check `public/CNAME` file contains: `safewallsystems.com`

### 404 Errors
- Ensure URLs use trailing slashes (configured automatically)
- Check GitHub Pages is set to "GitHub Actions"

### Images Not Loading
- Verify images are in `/public` folder
- Check image paths are relative (no absolute URLs)

## Files Created for Deployment

✅ `.github/workflows/deploy.yml` - GitHub Actions workflow
✅ `public/CNAME` - Custom domain configuration  
✅ `public/.nojekyll` - Disable Jekyll processing
✅ `next.config.mjs` - Static export configuration
✅ `DEPLOYMENT.md` - Detailed deployment guide
✅ `README.md` - Project documentation

## Need Help?

Contact: info@safewallsystems.com
Phone: (855) 226-3393
