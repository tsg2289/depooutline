import { Client } from 'pg';

const connectionString = "postgresql://postgres.lwwhdbclcxdbuthapur:Btmont401989$@aws-0-us-west-1.pooler.supabase.com:6543/postgres";

async function migrate() {
  const client = new Client({ connectionString });
  
  try {
    await client.connect();
    console.log('Connected to database');

    // Create users table (NextAuth)
    await client.query(`
      CREATE TABLE IF NOT EXISTS users (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        name TEXT,
        email TEXT NOT NULL UNIQUE,
        "emailVerified" TIMESTAMP,
        image TEXT,
        created_at TIMESTAMP DEFAULT NOW() NOT NULL
      );
    `);
    console.log('✓ Created users table');

    // Create accounts table (NextAuth)
    await client.query(`
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
    `);
    console.log('✓ Created accounts table');

    // Create sessions table (NextAuth)
    await client.query(`
      CREATE TABLE IF NOT EXISTS sessions (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        "sessionToken" TEXT NOT NULL UNIQUE,
        "userId" UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        expires TIMESTAMP NOT NULL
      );
    `);
    console.log('✓ Created sessions table');

    // Create verification tokens table (NextAuth)
    await client.query(`
      CREATE TABLE IF NOT EXISTS "verificationTokens" (
        identifier TEXT NOT NULL,
        token TEXT NOT NULL UNIQUE,
        expires TIMESTAMP NOT NULL
      );
    `);
    console.log('✓ Created verificationTokens table');

    // Create matters table
    await client.query(`
      CREATE TABLE IF NOT EXISTS matters (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        title TEXT NOT NULL,
        description TEXT,
        e2ee_enabled BOOLEAN DEFAULT true NOT NULL,
        created_at TIMESTAMP DEFAULT NOW() NOT NULL,
        updated_at TIMESTAMP DEFAULT NOW() NOT NULL
      );
    `);
    console.log('✓ Created matters table');

    // Create depositions table
    await client.query(`
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
    `);
    console.log('✓ Created depositions table');

    // Create custom_questions table
    await client.query(`
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
    `);
    console.log('✓ Created custom_questions table');

    // Create notes table
    await client.query(`
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
    `);
    console.log('✓ Created notes table');

    // Create question_templates table
    await client.query(`
      CREATE TABLE IF NOT EXISTS question_templates (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        category TEXT NOT NULL,
        text TEXT NOT NULL,
        jurisdiction TEXT,
        section_id TEXT,
        created_at TIMESTAMP DEFAULT NOW() NOT NULL
      );
    `);
    console.log('✓ Created question_templates table');

    // Create indexes
    await client.query(`CREATE INDEX IF NOT EXISTS idx_matters_user_id ON matters(user_id);`);
    await client.query(`CREATE INDEX IF NOT EXISTS idx_depositions_matter_id ON depositions(matter_id);`);
    console.log('✓ Created indexes');

    console.log('\n🎉 Database migration completed successfully!');

  } catch (error) {
    console.error('Migration failed:', error);
    process.exit(1);
  } finally {
    await client.end();
  }
}

migrate();
