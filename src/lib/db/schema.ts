import { pgTable, text, timestamp, uuid, boolean, integer } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

// Users table (managed by NextAuth)
export const users = pgTable('users', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: text('name'),
  email: text('email').notNull().unique(),
  emailVerified: timestamp('emailVerified'),
  image: text('image'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const accounts = pgTable('accounts', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('userId').notNull().references(() => users.id, { onDelete: 'cascade' }),
  type: text('type').notNull(),
  provider: text('provider').notNull(),
  providerAccountId: text('providerAccountId').notNull(),
  refresh_token: text('refresh_token'),
  access_token: text('access_token'),
  expires_at: integer('expires_at'),
  token_type: text('token_type'),
  scope: text('scope'),
  id_token: text('id_token'),
  session_state: text('session_state'),
});

export const sessions = pgTable('sessions', {
  id: uuid('id').primaryKey().defaultRandom(),
  sessionToken: text('sessionToken').notNull().unique(),
  userId: uuid('userId').notNull().references(() => users.id, { onDelete: 'cascade' }),
  expires: timestamp('expires').notNull(),
});

export const verificationTokens = pgTable('verificationTokens', {
  identifier: text('identifier').notNull(),
  token: text('token').notNull().unique(),
  expires: timestamp('expires').notNull(),
});

// Application tables
export const matters = pgTable('matters', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
  title: text('title').notNull(),
  description: text('description'),
  e2eeEnabled: boolean('e2ee_enabled').default(true).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const depositions = pgTable('depositions', {
  id: uuid('id').primaryKey().defaultRandom(),
  matterId: uuid('matter_id').notNull().references(() => matters.id, { onDelete: 'cascade' }),
  title: text('title').notNull(),
  deponentName: text('deponent_name').notNull(),
  date: timestamp('date'),
  caseName: text('case_name'),
  caseNumber: text('case_number'),
  jurisdiction: text('jurisdiction'),
  takingAttorney: text('taking_attorney'),
  defendingAttorney: text('defending_attorney'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const customQuestions = pgTable('custom_questions', {
  id: uuid('id').primaryKey().defaultRandom(),
  depositionId: uuid('deposition_id').notNull().references(() => depositions.id, { onDelete: 'cascade' }),
  sectionId: text('section_id').notNull(),
  orderIndex: integer('order_index').notNull(),
  // For E2EE
  textCipher: text('text_cipher'),
  iv: text('iv'),
  // For non-E2EE
  textPlain: text('text_plain'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const notes = pgTable('notes', {
  id: uuid('id').primaryKey().defaultRandom(),
  depositionId: uuid('deposition_id').notNull().references(() => depositions.id, { onDelete: 'cascade' }),
  sectionId: text('section_id').notNull(),
  // For E2EE
  bodyCipher: text('body_cipher'),
  iv: text('iv'),
  // For non-E2EE
  bodyPlain: text('body_plain'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const questionTemplates = pgTable('question_templates', {
  id: uuid('id').primaryKey().defaultRandom(),
  category: text('category').notNull(),
  text: text('text').notNull(),
  jurisdiction: text('jurisdiction'),
  sectionId: text('section_id'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

// Relations
export const usersRelations = relations(users, ({ many }) => ({
  matters: many(matters),
  accounts: many(accounts),
  sessions: many(sessions),
}));

export const mattersRelations = relations(matters, ({ one, many }) => ({
  user: one(users, {
    fields: [matters.userId],
    references: [users.id],
  }),
  depositions: many(depositions),
}));

export const depositionsRelations = relations(depositions, ({ one, many }) => ({
  matter: one(matters, {
    fields: [depositions.matterId],
    references: [matters.id],
  }),
  customQuestions: many(customQuestions),
  notes: many(notes),
}));

export const customQuestionsRelations = relations(customQuestions, ({ one }) => ({
  deposition: one(depositions, {
    fields: [customQuestions.depositionId],
    references: [depositions.id],
  }),
}));

export const notesRelations = relations(notes, ({ one }) => ({
  deposition: one(depositions, {
    fields: [notes.depositionId],
    references: [depositions.id],
  }),
}));

export const accountsRelations = relations(accounts, ({ one }) => ({
  user: one(users, {
    fields: [accounts.userId],
    references: [users.id],
  }),
}));

export const sessionsRelations = relations(sessions, ({ one }) => ({
  user: one(users, {
    fields: [sessions.userId],
    references: [users.id],
  }),
}));
