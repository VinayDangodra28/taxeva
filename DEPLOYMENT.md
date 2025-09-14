# 🚀 Vercel Deployment Guide for TaxEva

## Quick Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/VinayDangodra28/taxeva)

## Manual Deployment Steps

### 1. Prerequisites
- GitHub account with your project repository
- Vercel account (sign up at [vercel.com](https://vercel.com))

### 2. Deploy from GitHub
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "New Project"
3. Import your GitHub repository (`VinayDangodra28/taxeva`)
4. Vercel will auto-detect it's a React/Vite project

### 3. Build Configuration (Auto-detected)
Vercel will automatically use these settings:
- **Framework Preset:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`

### 4. Environment Variables (Optional)
If you need environment variables:
1. Go to Project Settings → Environment Variables
2. Add variables from `.env.example` as needed

### 5. Custom Domain (Optional)
1. Go to Project Settings → Domains
2. Add your custom domain
3. Configure DNS according to Vercel's instructions

## 📁 Project Structure for Vercel

```
taxeva/
├── vercel.json          # Vercel configuration
├── package.json         # Build scripts
├── vite.config.js      # Vite configuration
├── .env.example        # Environment template
└── src/                # React source code
```

## 🔧 Configuration Files

### `vercel.json`
- Configures SPA routing (redirects all routes to `/index.html`)
- Sets up caching for static assets
- Adds security headers

### Build Scripts
- `npm run build` - Production build
- `npm run vercel-build` - Vercel-specific build command

## 🚨 Troubleshooting

### Build Fails
- Check Node.js version compatibility
- Ensure all dependencies are listed in `package.json`
- Verify build command works locally: `npm run build`

### Routing Issues
- `vercel.json` handles SPA routing
- All non-static routes redirect to `/index.html`

### Environment Variables
- Use `VITE_` prefix for client-side variables
- Set in Vercel dashboard for production
- Use `.env.local` for local development

## 📊 Performance Optimization

Vercel automatically provides:
- ✅ Global CDN
- ✅ Automatic compression
- ✅ Image optimization
- ✅ Edge caching
- ✅ HTTPS by default

## 🔗 Useful Links

- [Vercel Documentation](https://vercel.com/docs)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html#vercel)
- [React Router with Vercel](https://vercel.com/guides/deploying-react-with-vercel)

---

**Happy Deploying! 🎉**