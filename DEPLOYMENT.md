# St. Bernard Coffee - Hostinger Deployment Guide

## Quick Deployment Steps

### 1. Build the Project
```bash
cd st-bernard-coffee
npm run build
```

### 2. Upload to Hostinger
1. Log into your Hostinger hosting control panel
2. Open File Manager
3. Navigate to `public_html` directory
4. Upload all contents from the `dist` folder to `public_html`

### 3. Configure URL Routing
Create a `.htaccess` file in your `public_html` directory with this content:

```apache
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.html [QR,L]
```

### 4. Test Your Website
Visit your domain to verify the deployment is working correctly.

## File Structure After Deployment
```
public_html/
├── index.html
├── assets/
│   ├── index-[hash].css
│   └── index-[hash].js
└── .htaccess
```

## Troubleshooting

**Issue**: Pages show 404 when accessed directly
**Solution**: Ensure `.htaccess` file is properly configured for client-side routing

**Issue**: CSS/JS files not loading
**Solution**: Check that all files from `dist/assets/` are uploaded correctly

**Issue**: Website loads but appears broken
**Solution**: Clear browser cache and ensure all asset files are uploaded

## Performance Optimization
- The build is already optimized with Vite
- CSS and JS are minified and compressed
- Total bundle size: ~297KB (gzipped: ~87KB)

Your St. Bernard Coffee website is now ready for production!