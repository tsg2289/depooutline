'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { db } from '@/lib/db';
import { customQuestions, depositions, matters } from '@/lib/db/schema';
import { eq, and } from 'drizzle-orm';

export async function saveCustomQuestions(
  depositionId: string,
  sectionId: string,
  questions: Array<{
    text?: string;
    textCipher?: string;
    iv?: string;
    salt?: string;
  }>
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
    // Delete existing questions for this section
    await db
      .delete(customQuestions)
      .where(and(
        eq(customQuestions.depositionId, depositionId),
        eq(customQuestions.sectionId, sectionId)
      ));

    // Insert new questions
    if (questions.length > 0) {
      const questionsToInsert = questions.map((question, index) => ({
        depositionId,
        sectionId,
        orderIndex: index,
        textPlain: question.text || null,
        textCipher: question.textCipher || null,
        iv: question.iv || null,
      }));

      await db.insert(customQuestions).values(questionsToInsert);
    }

    revalidatePath('/');
    return { success: true };
  } catch (error) {
    console.error('Failed to save custom questions:', error);
    throw new Error('Failed to save custom questions');
  }
}

export async function getCustomQuestions(depositionId: string, sectionId: string) {
  const session = await getServerSession(authOptions);
  
  if (!session?.user?.id) {
    return [];
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
      return [];
    }

    const questions = await db
      .select()
      .from(customQuestions)
      .where(and(
        eq(customQuestions.depositionId, depositionId),
        eq(customQuestions.sectionId, sectionId)
      ))
      .orderBy(customQuestions.orderIndex);

    return questions;
  } catch (error) {
    console.error('Failed to fetch custom questions:', error);
    return [];
  }
}
