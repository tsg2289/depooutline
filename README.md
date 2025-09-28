# DepoOutline - Professional Deposition Outlines

A secure, modern web application for creating professional deposition outlines with user authentication, data persistence, and optional end-to-end encryption.

## Features

- 🔐 **Secure Authentication**: Magic link email + optional Google OAuth via NextAuth.js
- 📊 **Data Persistence**: PostgreSQL database with Drizzle ORM
- 🔒 **End-to-End Encryption**: Optional client-side encryption for sensitive data
- 📱 **Responsive Design**: Works on desktop, tablet, and mobile
- ⚡ **Modern Stack**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- 🚀 **Vercel Ready**: One-click deployment to Vercel

## Architecture

- **Frontend**: Next.js 14 with App Router, React 19, TypeScript
- **Styling**: Tailwind CSS with custom components
- **Authentication**: NextAuth.js with Drizzle adapter
- **Database**: PostgreSQL (Vercel Postgres recommended)
- **ORM**: Drizzle ORM with migrations
- **Encryption**: Web Crypto API (AES-GCM + PBKDF2)
- **Deployment**: Vercel with GitHub integration

## Data Model

```
User (NextAuth)
├── Matter
    ├── Deposition
        ├── CustomQuestion (encrypted)
        └── Note (encrypted)
```

## Quick Start

### 1. Clone and Install

```bash
git clone <your-repo>
cd depo-nextjs
npm install
```

### 2. Environment Setup

Copy `.env.example` to `.env.local` and configure:

```bash
cp .env.example .env.local
```

Required variables:
```env
# Database
DATABASE_URL="postgres://..."

# NextAuth
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"

# Email (Resend)
RESEND_API_KEY="re_..."
EMAIL_FROM="noreply@yourdomain.com"

# Optional: Google OAuth
GOOGLE_CLIENT_ID="..."
GOOGLE_CLIENT_SECRET="..."
```

### 3. Database Setup

```bash
# Generate migration files
npm run db:generate

# Apply migrations
npm run db:migrate

# Seed question templates
npm run db:seed
```

### 4. Development

```bash
npm run dev
```

Visit `http://localhost:3000`

## Deployment to Vercel

### Prerequisites

1. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
2. **GitHub Repository**: Push your code to GitHub
3. **Resend Account**: Sign up at [resend.com](https://resend.com) for email

### Step 1: Provision Vercel Postgres

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Storage" → "Create Database" → "Postgres"
3. Choose your region and create the database
4. Copy the connection string from the "Settings" tab

### Step 2: Deploy to Vercel

1. **Connect Repository**:
   - Go to Vercel Dashboard
   - Click "New Project"
   - Import your GitHub repository

2. **Configure Environment Variables**:
   ```env
   DATABASE_URL=<your-vercel-postgres-url>
   NEXTAUTH_SECRET=<generate-random-string>
   NEXTAUTH_URL=https://your-app.vercel.app
   RESEND_API_KEY=<your-resend-api-key>
   EMAIL_FROM=noreply@yourdomain.com
   GOOGLE_CLIENT_ID=<optional>
   GOOGLE_CLIENT_SECRET=<optional>
   ```

3. **Deploy**: Click "Deploy"

### Step 3: Run Database Migrations

After deployment:

1. Go to your Vercel project dashboard
2. Click "Functions" → "Edge Config" → "Terminal" (or use Vercel CLI)
3. Run migrations:
   ```bash
   npm run db:migrate
   npm run db:seed
   ```

### Step 4: Configure Custom Domain (Optional)

1. Go to project settings → "Domains"
2. Add your custom domain
3. Update `NEXTAUTH_URL` environment variable

## Environment Variables Reference

| Variable | Required | Description |
|----------|----------|-------------|
| `DATABASE_URL` | ✅ | PostgreSQL connection string |
| `NEXTAUTH_SECRET` | ✅ | Random string for JWT signing |
| `NEXTAUTH_URL` | ✅ | Your app's URL |
| `RESEND_API_KEY` | ✅ | Resend API key for emails |
| `EMAIL_FROM` | ✅ | From email address |
| `GOOGLE_CLIENT_ID` | ❌ | Google OAuth client ID |
| `GOOGLE_CLIENT_SECRET` | ❌ | Google OAuth client secret |
| `UPSTASH_REDIS_REST_URL` | ❌ | Redis URL for rate limiting |
| `UPSTASH_REDIS_REST_TOKEN` | ❌ | Redis token for rate limiting |

## Security Features

### Authentication
- Magic link email authentication (passwordless)
- Optional Google OAuth
- Secure httpOnly cookies
- CSRF protection via NextAuth.js

### Data Protection
- Server-side authorization on all routes
- User data scoping (users can only access their own data)
- Optional end-to-end encryption for sensitive data
- Parameterized queries (SQL injection prevention)

### End-to-End Encryption
When enabled for a matter:
- Notes and custom questions are encrypted client-side
- Server stores only ciphertext + IV
- Uses AES-GCM with PBKDF2 key derivation
- User controls the encryption passphrase

## API Routes

### Server Actions
- `createMatter(formData)` - Create new matter
- `createDeposition(matterId, formData)` - Create new deposition
- `saveCustomQuestions(depositionId, sectionId, questions)` - Save encrypted questions
- `saveNote(depositionId, sectionId, noteData)` - Save encrypted notes

### Authentication
- `/api/auth/[...nextauth]` - NextAuth.js endpoints
- `/auth/signin` - Custom sign-in page
- `/auth/verify-request` - Email verification page

## Database Schema

```sql
-- Users (managed by NextAuth)
users (id, email, name, image, created_at)
accounts (id, user_id, provider, provider_account_id, ...)
sessions (id, user_id, session_token, expires)

-- Application data
matters (id, user_id, title, description, e2ee_enabled, created_at)
depositions (id, matter_id, title, deponent_name, date, case_info, ...)
custom_questions (id, deposition_id, section_id, order_index, text_cipher, iv, text_plain)
notes (id, deposition_id, section_id, body_cipher, iv, body_plain, updated_at)
question_templates (id, category, text, jurisdiction, section_id)
```

## Development Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run db:generate  # Generate Drizzle migrations
npm run db:migrate   # Apply migrations
npm run db:push      # Push schema changes (dev only)
npm run db:studio    # Open Drizzle Studio
npm run db:seed      # Seed question templates
```

## Testing Checklist

### Manual Testing Steps

1. **Authentication Flow**:
   - [ ] Sign in with email magic link
   - [ ] Sign in with Google (if enabled)
   - [ ] Sign out functionality
   - [ ] Protected route access

2. **Matter Management**:
   - [ ] Create new matter
   - [ ] Enable/disable E2EE
   - [ ] Select existing matter

3. **Deposition Management**:
   - [ ] Create new deposition
   - [ ] Fill case metadata
   - [ ] Select existing deposition

4. **Section Management**:
   - [ ] Enable/disable sections
   - [ ] Reorder sections
   - [ ] Add custom questions
   - [ ] Add section notes

5. **Encryption (if enabled)**:
   - [ ] Set encryption passphrase
   - [ ] Encrypt/decrypt notes
   - [ ] Encrypt/decrypt questions
   - [ ] Data persists encrypted

6. **Data Persistence**:
   - [ ] Sign out and back in
   - [ ] Data persists correctly
   - [ ] No cross-user data access

## Troubleshooting

### Common Issues

1. **Database Connection Error**:
   - Check `DATABASE_URL` format
   - Ensure database is accessible
   - Run migrations: `npm run db:migrate`

2. **Email Not Sending**:
   - Verify `RESEND_API_KEY`
   - Check `EMAIL_FROM` domain verification
   - Check spam folder

3. **Authentication Issues**:
   - Verify `NEXTAUTH_SECRET` is set
   - Check `NEXTAUTH_URL` matches deployment URL
   - Clear browser cookies

4. **Encryption Errors**:
   - Ensure HTTPS in production
   - Check browser Web Crypto API support
   - Verify passphrase consistency

### Support

For issues or questions:
1. Check the troubleshooting section above
2. Review Vercel deployment logs
3. Check browser console for client-side errors
4. Verify environment variables are set correctly

## License

MIT License - see LICENSE file for details.