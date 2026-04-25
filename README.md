# Safe Wall Systems - Home Security Website

Professional home security website built with Next.js 16, featuring modern design, performance optimization, and comprehensive security solutions.

## 🚀 Quick Start

### Prerequisites
- Node.js 20+
- pnpm 8+

### Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm start
```

## 📦 Deployment

### GitHub Pages (Automatic)

This site is configured for automatic deployment to GitHub Pages:

1. **Push to main branch:**
   ```bash
   git add .
   git commit -m "Update website"
   git push origin main
   ```

2. **Automatic deployment** triggers via GitHub Actions
3. **Live in 2-3 minutes** at https://safewallsystems.com

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed configuration.

### DNS Configuration

Point your domain to GitHub Pages:

**A Records (Root Domain):**
- 185.199.108.153
- 185.199.109.153
- 185.199.110.153
- 185.199.111.153

**CNAME Record (www):**
- universalwifisupport.github.io

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (Turbopack)
- **UI Components:** Radix UI + Tailwind CSS
- **Icons:** Lucide React
- **Deployment:** GitHub Pages with GitHub Actions
- **Domain:** safewallsystems.com

## 📂 Project Structure

```
├── app/                    # Next.js app directory
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── blog/              # Blog pages
│   ├── contact/           # Contact page
│   ├── products/          # Products page
│   └── ...
├── components/            # React components
│   ├── landing/          # Landing page sections
│   └── ui/               # Reusable UI components
├── public/               # Static assets
├── .github/
│   └── workflows/
│       └── deploy.yml    # GitHub Actions deployment
└── next.config.mjs       # Next.js configuration
```

## 📝 Key Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Optimized images and assets
- ✅ SEO-friendly with metadata
- ✅ Static site generation (SSG)
- ✅ Blog with 600+ word articles
- ✅ Contact form
- ✅ Product showcase
- ✅ Pricing sections
- ✅ Custom domain support

## 🔧 Configuration

### Company Information

Update company details in:
- `components/landing/footer-section.tsx` - Address & phone
- `app/contact/page.tsx` - Contact information
- `public/CNAME` - Custom domain

### Branding

Company: **Safe Wall Systems**
Phone: **(650) 412-5014**
Address: **367 Old Waters Hwy, Oden, AR 71961**
Domain: **safewallsystems.com**

## 📱 Pages

- **Home** (`/`) - Main landing page
- **About** (`/about`) - Company information
- **Products** (`/products`) - Security products
- **Solutions** (`/solutions`) - Security solutions
- **Blog** (`/blog`) - Articles and insights
- **Contact** (`/contact`) - Contact form
- **FAQ** (`/faq`) - Frequently asked questions
- **Pricing** (`/#pricing`) - Pricing packages

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Test locally with `pnpm dev`
4. Build to verify: `pnpm build`
5. Push to main for automatic deployment

## 📄 License

© 2024 Safe Wall Systems. All rights reserved.

## 🆘 Support

For issues or questions:
- Email: info@safewallsystems.com
- Phone: (650) 412-5014

---

**Repository:** https://github.com/universalwifisupport/safewall
**Live Site:** https://safewallsystems.com
