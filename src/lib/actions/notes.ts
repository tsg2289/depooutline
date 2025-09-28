'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { db } from '@/lib/db';
import { notes, depositions, matters } from '@/lib/db/schema';
import { eq, and } from 'drizzle-orm';

export async function saveNote(
  depositionId: string,
  sectionId: string,
  noteData: {
    body?: string;
    bodyCipher?: string;
    iv?: string;
    salt?: string;
  }
) {
  const session = await getServerSession(authOptions);
  
  if (!session?.user?.id) {
    redirect('/auth/signin');
  }

  // Verify user owns the deposition through matter
  const [existingDeposition] = await db
    .select({
      deposition: depositions,
      matter: matters,
    })
    .from(depositions)
    .innerJoin(matters, eq(depositions.matterId, matters.id))
    .where(and(eq(depositions.id, depositionId), eq(matters.userId, session.user.id)));

  if (!existingDeposition) {
    throw new Error('Deposition not found or access denied');
  }

  try {
    // Check if note exists
    const [existingNote] = await db
      .select()
      .from(notes)
      .where(and(
        eq(notes.depositionId, depositionId),
        eq(notes.sectionId, sectionId)
      ));

    const noteValues = {
      bodyPlain: noteData.body || null,
      bodyCipher: noteData.bodyCipher || null,
      iv: noteData.iv || null,
      updatedAt: new Date(),
    };

    if (existingNote) {
      // Update existing note
      const [updatedNote] = await db
        .update(notes)
        .set(noteValues)
        .where(eq(notes.id, existingNote.id))
        .returning();

      revalidatePath('/');
      return { success: true, note: updatedNote };
    } else {
      // Create new note
      const [newNote] = await db
        .insert(notes)
        .values({
          depositionId,
          sectionId,
          ...noteValues,
        })
        .returning();

      revalidatePath('/');
      return { success: true, note: newNote };
    }
  } catch (error) {
    console.error('Failed to save note:', error);
    throw new Error('Failed to save note');
  }
}

export async function getNote(depositionId: string, sectionId: string) {
  const session = await getServerSession(authOptions);
  
  if (!session?.user?.id) {
    return null;
  }

  try {
    // Verify user owns the deposition through matter
    const [existingDeposition] = await db
      .select({
        deposition: depositions,
        matter: matters,
      })
      .from(depositions)
      .innerJoin(matters, eq(depositions.matterId, matters.id))
      .where(and(eq(depositions.id, depositionId), eq(matters.userId, session.user.id)));

    if (!existingDeposition) {
      return null;
    }

    const [note] = await db
      .select()
      .from(notes)
      .where(and(
        eq(notes.depositionId, depositionId),
        eq(notes.sectionId, sectionId)
      ));

    return note || null;
  } catch (error) {
    console.error('Failed to fetch note:', error);
    return null;
  }
}

export async function deleteNote(depositionId: string, sectionId: string) {
  const session = await getServerSession(authOptions);
  
  if (!session?.user?.id) {
    redirect('/auth/signin');
  }

  // Verify user owns the deposition through matter
  const [existingDeposition] = await db
    .select({
      deposition: depositions,
      matter: matters,
    })
    .from(depositions)
    .innerJoin(matters, eq(depositions.matterId, matters.id))
    .where(and(eq(depositions.id, depositionId), eq(matters.userId, session.user.id)));

  if (!existingDeposition) {
    throw new Error('Deposition not found or access denied');
  }

  try {
    await db
      .delete(notes)
      .where(and(
        eq(notes.depositionId, depositionId),
        eq(notes.sectionId, sectionId)
      ));

    revalidatePath('/');
    return { success: true };
  } catch (error) {
    console.error('Failed to delete note:', error);
    throw new Error('Failed to delete note');
  }
}
