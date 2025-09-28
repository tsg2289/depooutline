import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export async function POST(request: NextRequest) {
  try {
    // Create users table (NextAuth)
    await sql`
      CREATE TABLE IF NOT EXISTS users (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        name TEXT,
        email TEXT NOT NULL UNIQUE,
        "emailVerified" TIMESTAMP,
        image TEXT,
        created_at TIMESTAMP DEFAULT NOW() NOT NULL
      );
    `;

    // Create accounts table (NextAuth)
    await sql`
      CREATE TABLE IF NOT EXISTS accounts (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        "userId" UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        type TEXT NOT NULL,
        provider TEXT NOT NULL,
        "providerAccountId" TEXT NOT NULL,
        refresh_token TEXT,
        access_token TEXT,
        expires_at INTEGER,
        token_type TEXT,
        scope TEXT,
        id_token TEXT,
        session_state TEXT
      );
    `;

    // Create sessions table (NextAuth)
    await sql`
      CREATE TABLE IF NOT EXISTS sessions (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        "sessionToken" TEXT NOT NULL UNIQUE,
        "userId" UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        expires TIMESTAMP NOT NULL
      );
    `;

    // Create verification tokens table (NextAuth)
    await sql`
      CREATE TABLE IF NOT EXISTS "verificationTokens" (
        identifier TEXT NOT NULL,
        token TEXT NOT NULL UNIQUE,
        expires TIMESTAMP NOT NULL
      );
    `;

    // Create matters table
    await sql`
      CREATE TABLE IF NOT EXISTS matters (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        title TEXT NOT NULL,
        description TEXT,
        e2ee_enabled BOOLEAN DEFAULT true NOT NULL,
        created_at TIMESTAMP DEFAULT NOW() NOT NULL,
        updated_at TIMESTAMP DEFAULT NOW() NOT NULL
      );
    `;

    // Create depositions table
    await sql`
      CREATE TABLE IF NOT EXISTS depositions (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        matter_id UUID NOT NULL REFERENCES matters(id) ON DELETE CASCADE,
        title TEXT NOT NULL,
        deponent_name TEXT NOT NULL,
        date TIMESTAMP,
        case_name TEXT,
        case_number TEXT,
        jurisdiction TEXT,
        taking_attorney TEXT,
        defending_attorney TEXT,
        created_at TIMESTAMP DEFAULT NOW() NOT NULL,
        updated_at TIMESTAMP DEFAULT NOW() NOT NULL
      );
    `;

    // Create custom_questions table
    await sql`
      CREATE TABLE IF NOT EXISTS custom_questions (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        deposition_id UUID NOT NULL REFERENCES depositions(id) ON DELETE CASCADE,
        section_id TEXT NOT NULL,
        order_index INTEGER NOT NULL,
        text_cipher TEXT,
        iv TEXT,
        text_plain TEXT,
        created_at TIMESTAMP DEFAULT NOW() NOT NULL
      );
    `;

    // Create notes table
    await sql`
      CREATE TABLE IF NOT EXISTS notes (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        deposition_id UUID NOT NULL REFERENCES depositions(id) ON DELETE CASCADE,
        section_id TEXT NOT NULL,
        body_cipher TEXT,
        iv TEXT,
        body_plain TEXT,
        created_at TIMESTAMP DEFAULT NOW() NOT NULL,
        updated_at TIMESTAMP DEFAULT NOW() NOT NULL
      );
    `;

    // Create question_templates table
    await sql`
      CREATE TABLE IF NOT EXISTS question_templates (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        category TEXT NOT NULL,
        text TEXT NOT NULL,
        jurisdiction TEXT,
        section_id TEXT,
        created_at TIMESTAMP DEFAULT NOW() NOT NULL
      );
    `;

    // Create indexes
    await sql`CREATE INDEX IF NOT EXISTS idx_matters_user_id ON matters(user_id);`;
    await sql`CREATE INDEX IF NOT EXISTS idx_depositions_matter_id ON depositions(matter_id);`;

    return NextResponse.json({ 
      success: true, 
      message: 'Database tables created successfully' 
    });

  } catch (error) {
    console.error('Migration error:', error);
    return NextResponse.json({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    }, { status: 500 });
  }
}
