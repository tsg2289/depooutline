# Environment Variables to Copy to depo-nextjs Project

Copy these environment variables from your `depooutline` project to your `depo-nextjs` project:

## Required Variables for depo-nextjs:

1. **DATABASE_URL**
   - Copy the value from depooutline project

2. **NEXTAUTH_SECRET** 
   - Copy the value from depooutline project

3. **NEXTAUTH_URL**
   - Set to: `https://depo-nextjs-i2m18nrsm-thomas-st-germains-projects.vercel.app`

4. **RESEND_API_KEY**
   - Copy the value from depooutline project

5. **EMAIL_FROM**
   - Copy the value from depooutline project

6. **NODE_ENV**
   - Set to: `production`

## Quick Steps:

1. Go to: https://vercel.com/dashboard
2. Click on **depooutline** project
3. Go to Settings → Environment Variables
4. **Copy each value** (click the eye icon to reveal)
5. Go back to dashboard and click **depo-nextjs** project
6. Go to Settings → Environment Variables
7. **Add each variable** with the copied values

## Alternative: Use Vercel CLI (if available)

```bash
# This would be the ideal way, but Vercel CLI doesn't support this directly
vercel env pull .env.production --environment=production
```

Unfortunately, you'll need to copy them manually through the Vercel dashboard.
