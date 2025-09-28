-- Rename tables to match NextAuth expectations (singular names)
ALTER TABLE users RENAME TO "user";
ALTER TABLE accounts RENAME TO account;
ALTER TABLE sessions RENAME TO session;
ALTER TABLE "verificationTokens" RENAME TO "verificationToken";

-- Update foreign key references if needed
-- (PostgreSQL should handle this automatically with the RENAME)
