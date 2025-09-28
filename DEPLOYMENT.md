# Vercel Deployment Checklist

## Pre-Deployment Setup

### 1. Accounts Required
- [ ] **Vercel Account**: [vercel.com](https://vercel.com)
- [ ] **GitHub Account**: Repository hosted on GitHub
- [ ] **Resend Account**: [resend.com](https://resend.com) for email delivery
- [ ] **Google Cloud Console** (optional): For Google OAuth

### 2. Domain Setup (Optional)
- [ ] Purchase/configure custom domain
- [ ] DNS records ready for Vercel

## Vercel Configuration

### 1. Create Vercel Postgres Database
1. [ ] Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. [ ] Click "Storage" → "Create Database"
3. [ ] Select "Postgres" 
4. [ ] Choose region (same as your app deployment)
5. [ ] Name your database (e.g., "depooutline-db")
6. [ ] Click "Create"
7. [ ] Copy connection string from Settings tab

### 2. Deploy Application
1. [ ] Go to Vercel Dashboard
2. [ ] Click "New Project"
3. [ ] Import from GitHub repository
4. [ ] Configure project settings:
   - Framework Preset: Next.js
   - Root Directory: `./` (if repo root)
   - Build Command: `npm run build`
   - Output Directory: `.next`

### 3. Environment Variables
Add these in Vercel project settings → Environment Variables:

#### Required Variables
```env
DATABASE_URL=<your-vercel-postgres-connection-string>
NEXTAUTH_SECRET=<generate-32-char-random-string>
NEXTAUTH_URL=https://your-app-name.vercel.app
RESEND_API_KEY=<your-resend-api-key>
EMAIL_FROM=noreply@yourdomain.com
```

#### Optional Variables
```env
GOOGLE_CLIENT_ID=<your-google-oauth-client-id>
GOOGLE_CLIENT_SECRET=<your-google-oauth-client-secret>
UPSTASH_REDIS_REST_URL=<redis-url-for-rate-limiting>
UPSTASH_REDIS_REST_TOKEN=<redis-token-for-rate-limiting>
```

### 4. Generate Secrets
```bash
# Generate NEXTAUTH_SECRET (32 characters)
openssl rand -base64 32

# Or use online generator
# https://generate-secret.vercel.app/32
```

## Email Configuration (Resend)

### 1. Resend Setup
1. [ ] Sign up at [resend.com](https://resend.com)
2. [ ] Verify your sending domain
3. [ ] Create API key
4. [ ] Add API key to Vercel environment variables

### 2. Domain Verification
1. [ ] Add DNS records for your domain:
   ```
   Type: TXT
   Name: @
   Value: <resend-verification-code>
   ```
2. [ ] Wait for DNS propagation (up to 24 hours)
3. [ ] Verify domain in Resend dashboard

## Google OAuth Setup (Optional)

### 1. Google Cloud Console
1. [ ] Go to [Google Cloud Console](https://console.cloud.google.com)
2. [ ] Create new project or select existing
3. [ ] Enable Google+ API
4. [ ] Go to "Credentials" → "Create Credentials" → "OAuth 2.0 Client IDs"
5. [ ] Application type: Web application
6. [ ] Authorized redirect URIs:
   ```
   https://your-app.vercel.app/api/auth/callback/google
   ```
7. [ ] Copy Client ID and Client Secret

### 2. Add to Vercel
1. [ ] Add `GOOGLE_CLIENT_ID` environment variable
2. [ ] Add `GOOGLE_CLIENT_SECRET` environment variable
3. [ ] Redeploy application

## Database Migration

### Method 1: Vercel CLI (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Link project
vercel link

# Run migrations
vercel env pull .env.local
npm run db:migrate
npm run db:seed
```

### Method 2: Local with Production DB
```bash
# Set production DATABASE_URL in .env.local
DATABASE_URL="<your-vercel-postgres-url>"

# Run migrations
npm run db:migrate
npm run db:seed
```

### Method 3: Vercel Functions (Advanced)
Create a temporary API route for migration:
```typescript
// pages/api/migrate.ts (temporary)
import { db } from '@/lib/db';
import { migrate } from 'drizzle-orm/vercel-postgres/migrator';

export default async function handler(req, res) {
  if (process.env.NODE_ENV !== 'production') {
    return res.status(403).json({ error: 'Not allowed' });
  }
  
  await migrate(db, { migrationsFolder: './drizzle' });
  res.json({ success: true });
}
```

## Post-Deployment Verification

### 1. Application Health Check
- [ ] Visit deployed URL
- [ ] Check all pages load correctly
- [ ] Verify responsive design on mobile

### 2. Authentication Flow
- [ ] Test magic link email sign-in
- [ ] Check email delivery (inbox + spam)
- [ ] Test Google OAuth (if enabled)
- [ ] Verify sign-out functionality

### 3. Database Functionality
- [ ] Create test matter
- [ ] Create test deposition
- [ ] Add custom questions
- [ ] Add section notes
- [ ] Verify data persistence

### 4. Encryption (if enabled)
- [ ] Enable E2EE on test matter
- [ ] Set encryption passphrase
- [ ] Add encrypted notes
- [ ] Sign out and back in
- [ ] Verify data decrypts correctly

### 5. Performance Check
- [ ] Check Lighthouse scores
- [ ] Verify fast page loads
- [ ] Test on slow connections

## Domain Configuration (Optional)

### 1. Add Custom Domain
1. [ ] Go to Vercel project → Settings → Domains
2. [ ] Add your domain (e.g., `depooutline.com`)
3. [ ] Configure DNS records as shown
4. [ ] Wait for SSL certificate provisioning

### 2. Update Environment Variables
1. [ ] Update `NEXTAUTH_URL` to your custom domain
2. [ ] Update Google OAuth redirect URIs (if using)
3. [ ] Redeploy application

## Security Checklist

### 1. Environment Variables
- [ ] All secrets are in environment variables (not code)
- [ ] `NEXTAUTH_SECRET` is cryptographically secure
- [ ] Database credentials are secure
- [ ] No sensitive data in client-side code

### 2. Authentication
- [ ] Magic link emails work correctly
- [ ] Session cookies are httpOnly and secure
- [ ] Protected routes require authentication
- [ ] Users can only access their own data

### 3. Database Security
- [ ] Connection uses SSL
- [ ] User data is properly scoped
- [ ] No SQL injection vulnerabilities
- [ ] Proper indexing for performance

## Monitoring & Maintenance

### 1. Set Up Monitoring
- [ ] Vercel Analytics enabled
- [ ] Error tracking (Sentry, etc.)
- [ ] Uptime monitoring
- [ ] Performance monitoring

### 2. Backup Strategy
- [ ] Database backup schedule
- [ ] Environment variables backup
- [ ] Code repository backup

### 3. Update Strategy
- [ ] Dependency update schedule
- [ ] Security patch process
- [ ] Database migration strategy

## Troubleshooting

### Common Issues

#### 1. Build Failures
```bash
# Check build logs in Vercel dashboard
# Common fixes:
npm run build  # Test locally first
npm run lint   # Fix linting errors
```

#### 2. Database Connection Issues
- [ ] Verify `DATABASE_URL` format
- [ ] Check Vercel Postgres status
- [ ] Ensure migrations are applied

#### 3. Email Delivery Issues
- [ ] Check Resend dashboard for delivery status
- [ ] Verify domain DNS records
- [ ] Check spam folders
- [ ] Test with different email providers

#### 4. Authentication Problems
- [ ] Verify `NEXTAUTH_URL` matches deployment URL
- [ ] Check `NEXTAUTH_SECRET` is set
- [ ] Clear browser cookies and try again

## Success Criteria

Your deployment is successful when:
- [ ] Application loads without errors
- [ ] Users can sign in via email magic link
- [ ] Users can create matters and depositions
- [ ] Data persists between sessions
- [ ] Encryption works (if enabled)
- [ ] All forms and interactions work
- [ ] Mobile experience is good
- [ ] Performance is acceptable

## Support Resources

- **Vercel Documentation**: [vercel.com/docs](https://vercel.com/docs)
- **NextAuth.js Docs**: [next-auth.js.org](https://next-auth.js.org)
- **Drizzle ORM Docs**: [orm.drizzle.team](https://orm.drizzle.team)
- **Resend Documentation**: [resend.com/docs](https://resend.com/docs)

---

**Note**: Keep this checklist handy for future deployments and updates. Consider creating a staging environment for testing changes before production deployment.
