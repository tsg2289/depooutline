'use server';

import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { db } from '@/lib/db';
import { depositions, customQuestions, notes } from '@/lib/db/schema';
import { eq, and } from 'drizzle-orm';
import type { CaseMetadata, OutlineSection } from '@/types';

export async function saveDepositionProgress(
  depositionId: string,
  metadata: CaseMetadata,
  sections: OutlineSection[]
) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.id) {
      throw new Error('Not authenticated');
    }

    // Update the deposition with the current progress
    const result = await db
      .update(depositions)
      .set({
        caseName: metadata.caseName,
        caseNumber: metadata.caseNumber,
        jurisdiction: metadata.jurisdiction,
        deponentName: metadata.deponent,
        date: metadata.depositionDate ? new Date(metadata.depositionDate) : null,
        takingAttorney: metadata.takingAttorney,
        defendingAttorney: metadata.defendingAttorney,
        updatedAt: new Date(),
      })
      .where(eq(depositions.id, depositionId))
      .returning();

    if (result.length === 0) {
      throw new Error('Deposition not found or access denied');
    }

    // Save custom questions and notes for each section
    for (const section of sections) {
      // Save custom questions if they exist
      if (section.customQuestions && section.customQuestions.length > 0) {
        // Delete existing custom questions for this section
        await db
          .delete(customQuestions)
          .where(
            and(
              eq(customQuestions.depositionId, depositionId),
              eq(customQuestions.sectionId, section.id)
            )
          );

        // Insert new custom questions
        const questionsToInsert = section.customQuestions
          .map((question, index) => question.trim())
          .filter(question => question.length > 0)
          .map((question, index) => ({
            depositionId,
            sectionId: section.id,
            orderIndex: index,
            textPlain: question,
            textCipher: null,
            iv: null,
          }));

        if (questionsToInsert.length > 0) {
          await db.insert(customQuestions).values(questionsToInsert);
        }
      }

      // Save notes if they exist
      if (section.notes && section.notes.trim().length > 0) {
        // Check if notes already exist for this section
        const existingNotes = await db
          .select()
          .from(notes)
          .where(
            and(
              eq(notes.depositionId, depositionId),
              eq(notes.sectionId, section.id)
            )
          );

        if (existingNotes.length > 0) {
          // Update existing notes
          await db
            .update(notes)
            .set({
              bodyPlain: section.notes.trim(),
              bodyCipher: null,
              iv: null,
              updatedAt: new Date(),
            })
            .where(
              and(
                eq(notes.depositionId, depositionId),
                eq(notes.sectionId, section.id)
              )
            );
        } else {
          // Insert new notes
          await db.insert(notes).values({
            depositionId,
            sectionId: section.id,
            bodyPlain: section.notes.trim(),
            bodyCipher: null,
            iv: null,
          });
        }
      } else {
        // Delete notes if section.notes is empty
        await db
          .delete(notes)
          .where(
            and(
              eq(notes.depositionId, depositionId),
              eq(notes.sectionId, section.id)
            )
          );
      }
    }
    
    return { 
      success: true, 
      message: 'Progress saved successfully!',
      deposition: result[0]
    };

  } catch (error) {
    console.error('Save progress error:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Failed to save progress' 
    };
  }
}
