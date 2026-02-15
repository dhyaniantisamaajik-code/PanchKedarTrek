# PRODUCTION DEPLOYMENT GUIDE

## Table of Contents
1. Deployment Platforms
2. Environment Setup
3. Performance Optimization
4. SEO Implementation
5. Monitoring & Maintenance

---

## 1. DEPLOYMENT PLATFORMS

### A. VERCEL (RECOMMENDED - Fastest for Next.js)

#### Benefits
- Zero-config Next.js deployment
- Automatic SSL/HTTPS
- Global CDN included
- Auto-scaling
- Analytics built-in

#### Steps

```bash
# Option 1: Via Vercel CLI
npm install -g vercel
vercel login
vercel --prod

# Option 2: Via GitHub Integration
# 1. Push to GitHub repo
# 2. Connect repo at vercel.com
# 3. Auto-deploys on push

# Option 3: Import existing repo
# Visit: vercel.com/import
# Select repo → Configure → Deploy
```

#### Environment Variables on Vercel
```
NEXT_PUBLIC_BASE_URL: https://panchkedartreks.vercel.app
NEXT_PUBLIC_API_URL: https://panchkedartreks.vercel.app/api
NEXT_PUBLIC_GA_ID: G-YOUR_GA_CODE
CONTACT_EMAIL: bookings@panchkedartreks.com
CONTACT_WHATSAPP: +919876543210
```

#### Custom Domain
1. In Vercel Dashboard → Settings → Domains
2. Add domain: `panchkedartreks.com`
3. Update DNS records with Vercel nameservers
4. SSL auto-configured

---

### B. DOCKER + DOCKER COMPOSE (Self-Hosted/VPS)

#### Build & Run Locally

```bash
# Build image
docker build -t panch-kedar-treks .

# Run container
docker run -p 3000:3000 \
  -e NEXT_PUBLIC_BASE_URL=http://localhost:3000 \
  panch-kedar-treks

# Run with docker-compose
docker-compose up --build

# Access: http://localhost:3000
```

#### Deploy on Linux VPS

```bash
# 1. SSH into VPS
ssh root@your-vps-ip

# 2. Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# 3. Clone repository
git clone https://github.com/yourusername/panch-kedar-treks.git
cd panch-kedar-treks

# 4. Create .env file
cat > .env.production << EOF
NEXT_PUBLIC_BASE_URL=https://panchkedartreks.com
NEXT_PUBLIC_API_URL=https://panchkedartreks.com/api
NEXT_PUBLIC_GA_ID=G-YOUR_CODE
CONTACT_EMAIL=bookings@panchkedartreks.com
CONTACT_WHATSAPP=+919876543210
EOF

# 5. Run with docker-compose
docker-compose up -d

# 6. Setup Nginx reverse proxy (see section below)
```

---

### C. RAILWAY / HEROKU / FLY.IO (Simple PaaS)

#### Railway (Most affordable)

```bash
# Install Railway CLI
npm i -g @railway/cli

# Login
railway login

# Init & deploy
railway init
railway up

# Check status
railway status
```

#### Heroku (Legacy but stable)

```bash
# Install Heroku CLI
npm install -g heroku

# Login
heroku login

# Create app
heroku create panch-kedar-treks

# Set environment variables
heroku config:set NEXT_PUBLIC_BASE_URL=https://panch-kedar-treks.herokuapp.com

# Deploy
git push heroku main

# View logs
heroku logs --tail
```

---

## 2. NGINX REVERSE PROXY SETUP

Create `nginx.conf`:

```nginx
upstream nextjs_app {
    server web:3000;
}

# Redirect HTTP to HTTPS
server {
    listen 80;
    server_name panchkedartreks.com www.panchkedartreks.com;
    return 301 https://$server_name$request_uri;
}

# HTTPS Server
server {
    listen 443 ssl http2;
    server_name panchkedartreks.com www.panchkedartreks.com;

    # SSL certificates (obtain from Let's Encrypt)
    ssl_certificate /etc/letsencrypt/live/panchkedartreks.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/panchkedartreks.com/privkey.pem;

    # Security headers
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;

    # Gzip compression
    gzip on;
    gzip_types text/plain text/css text/xml text/javascript 
               application/x-javascript application/xml+rss 
               image/svg+xml application/json;
    gzip_min_length 1000;

    # Cache static assets
    location /_next/static/ {
        expires 365d;
        add_header Cache-Control "public, max-age=31536000, immutable";
    }

    location /public/ {
        expires 7d;
        add_header Cache-Control "public, max-age=604800";
    }

    # Proxy to Next.js app
    location / {
        proxy_pass http://nextjs_app;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_cache_bypass $http_upgrade;

        # Timeouts
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
    }
}

# Redirect www to non-www
server {
    listen 443 ssl http2;
    server_name www.panchkedartreks.com;
    ssl_certificate /etc/letsencrypt/live/panchkedartreks.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/panchkedartreks.com/privkey.pem;
    return 301 https://panchkedartreks.com$request_uri;
}
```

---

## 3. SSL CERTIFICATE (Let's Encrypt)

```bash
# Install Certbot
sudo apt-get install certbot python3-certbot-nginx

# Generate certificate
sudo certbot certonly --nginx -d panchkedartreks.com -d www.panchkedartreks.com

# Auto-renew setup
sudo systemctl enable certbot.timer
sudo systemctl start certbot.timer

# Verify renewal
sudo certbot renew --dry-run
```

---

## 4. PM2 PROCESS MANAGER (Node.js Production)

```bash
# Install PM2 globally
npm install -g pm2

# Create ecosystem.config.js
cat > ecosystem.config.js << 'EOF'
module.exports = {
  apps: [{
    name: 'panch-kedar',
    script: 'npm',
    args: 'start',
    instances: 'max',
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'production',
      NEXT_PUBLIC_BASE_URL: 'https://panchkedartreks.com',
    },
    error_file: '/var/log/panch-kedar-error.log',
    out_file: '/var/log/panch-kedar-out.log',
  }]
};
EOF

# Start with PM2
pm2 start ecosystem.config.js

# Save PM2 config
pm2 save
pm2 startup

# Monitor
pm2 monit
pm2 logs

# Reload (zero downtime)
pm2 reload all

# Delete
pm2 delete all
```

---

## 5. ENVIRONMENT VARIABLES

### Production `.env.production`

```env
# Base URLs
NEXT_PUBLIC_BASE_URL=https://panchkedartreks.com
NEXT_PUBLIC_API_URL=https://panchkedartreks.com/api

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_HOTJAR_ID=YOUR_HOTJAR_ID

# Contact
CONTACT_EMAIL=bookings@panchkedartreks.com
CONTACT_WHATSAPP=+919876543210

# Cache & Performance
REVALIDATE_TIME=3600
NODE_ENV=production
```

### Vercel Dashboard Configuration
1. Settings → Environment Variables
2. Add each variable
3. Select environments: Production, Preview, Development
4. Redeploy

---

## 6. DATABASE (Optional - for bookings)

### PostgreSQL Option

```bash
# Install PostgreSQL client
npm install @prisma/client

# Create Prisma schema (schema.prisma)
datasource db {
  provider = "postgresql"
  url = env("DATABASE_URL")
}

model Booking {
  id String @id @default(cuid())
  name String
  email String
  phone String
  trekName String
  date DateTime
  participants Int
  message String?
  createdAt DateTime @default(now())
}

# Generate Prisma client
npx prisma generate

# Run migrations
npx prisma migrate dev --name add_bookings
```

---

## 7. MONITORING & UPTIME

### Google Search Console

```
1. Add property: panchkedartreks.com
2. Verify ownership via DNS
3. Monitor:
   - Indexing status
   - Search performance
   - Core Web Vitals
   - Coverage issues
```

### Google Analytics 4

```
1. Create GA4 property
2. Add measurement ID: G-XXXXXXXXXX
3. Track:
   - User behavior
   - Trek page views
   - Booking conversions
   - Bounce rates
```

### Core Web Vitals Monitoring

```bash
# Use PageSpeed Insights API
curl "https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=https://panchkedartreks.com&key=YOUR_API_KEY"
```

### Uptime Monitoring

Use services like:
- **UptimeRobot** (free tier available)
- **Pingdom**
- **Freshping**

Setup: Check every 5 minutes, alert if down

---

## 8. DATABASE BACKUPS

### AutoBackup Script

```bash
#!/bin/bash
# backup.sh

BACKUP_DIR="/backups/panchkedar"
DATE=$(date +%Y%m%d_%H%M%S)

# Create backup
docker exec panch-kedar-db pg_dump -U postgres > $BACKUP_DIR/db_$DATE.sql

# Compress
gzip $BACKUP_DIR/db_$DATE.sql

# Keep only last 30 days
find $BACKUP_DIR -mtime +30 -delete

# Optional: Upload to S3
# aws s3 cp $BACKUP_DIR/db_$DATE.sql.gz s3://your-bucket/backups/
```

Schedule with Cron:
```bash
# Daily at 2 AM
0 2 * * * /home/ubuntu/backup.sh
```

---

## 9. CDN SETUP (CloudFlare)

```
1. Add site to CloudFlare
2. Update DNS nameservers
3. Enable:
   - Caching (cache everything)
   - Minification (JS, CSS, HTML)
   - Image optimization
   - Web Application Firewall
```

---

## 10. PERFORMANCE OPTIMIZATION CHECKLIST

- [ ] Enable gzip compression
- [ ] Minify JS/CSS
- [ ] Optimize images (WebP format)
- [ ] Enable HTTP/2
- [ ] Set up CDN caching
- [ ] Implement image lazy loading
- [ ] Enable browser caching
- [ ] Minimize redirects
- [ ] Enable SSL/TLS
- [ ] Use async/defer for JS loading
- [ ] Compress fonts
- [ ] Remove unused CSS
- [ ] Minimize render-blocking resources
- [ ] Enable GZIP on text files
- [ ] Set proper cache headers

---

## 11. MONITORING DASHBOARD

Setup monitoring for:

```
- Response times
- Error rates
- CPU usage
- Memory usage
- Database connections
- API response times
- Page load times
```

Tools:
- New Relic
- Datadog
- Sentry (error tracking)

---

## 12. AFTER DEPLOYMENT CHECKLIST

- [ ] Test all treks pages load correctly
- [ ] Verify WhatsApp booking links work
- [ ] Check mobile responsiveness
- [ ] Test Core Web Vitals
- [ ] Verify sitemap generation at `/api/sitemap`
- [ ] Check robots.txt at `/robots.txt`
- [ ] Submit sitemap to Google Search Console
- [ ] Monitor search console for indexing errors
- [ ] Setup Analytics tracking
- [ ] Test Meta tags with Open Graph debugger
- [ ] Check SSL certificate validity
- [ ] Verify canonical tags work
- [ ] Test form submissions
- [ ] Check 404 error page
- [ ] Verify internal links work
- [ ] Monitor uptime for 24 hours

---

## 13. CONTINUOUS DEPLOYMENT

### GitHub Actions Workflow

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: 18

      - name: Install dependencies
        run: npm ci

      - name: Run linter
        run: npm run lint

      - name: Type check
        run: npm run type-check

      - name: Build
        run: npm run build

      - name: Deploy to Vercel
        uses: vercel/action@master
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
```

---

## SUPPORT & TROUBLESHOOTING

### Common Issues

**Port already in use**
```bash
# Find process on port 3000
lsof -i :3000
# Kill it
kill -9 PID
```

**Out of memory**
```bash
# Increase Node.js heap
NODE_OPTIONS=--max_old_space_size=4096 npm run build
```

**Database connection issues**
```bash
# Check connection string
echo $DATABASE_URL

# Test connection
psql $DATABASE_URL -c "SELECT 1"
```

---

## SUPPORT

- Documentation: [README.md](README.md)
- Email: bookings@panchkedartreks.com
- Emergency: +919876543210

---

**Last Updated:** February 2026
**Version:** 1.0.0
