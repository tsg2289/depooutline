'use server';

import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { db } from '@/lib/db';
import { customQuestions, notes, depositions } from '@/lib/db/schema';
import { eq, and, asc } from 'drizzle-orm';
import type { OutlineSection } from '@/types';

export async function loadDepositionProgress(
  depositionId: string,
  sections: OutlineSection[]
): Promise<{ success: boolean; sections?: OutlineSection[]; error?: string }> {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.id) {
      throw new Error('Not authenticated');
    }

    // Verify user has access to this deposition
    const deposition = await db
      .select()
      .from(depositions)
      .where(eq(depositions.id, depositionId))
      .limit(1);

    if (deposition.length === 0) {
      throw new Error('Deposition not found or access denied');
    }

    // Load custom questions for all sections
    const savedQuestions = await db
      .select()
      .from(customQuestions)
      .where(eq(customQuestions.depositionId, depositionId))
      .orderBy(asc(customQuestions.orderIndex));

    // Load notes for all sections
    const savedNotes = await db
      .select()
      .from(notes)
      .where(eq(notes.depositionId, depositionId));

    // Group questions by section
    const questionsBySection: Record<string, string[]> = {};
    savedQuestions.forEach(q => {
      if (!questionsBySection[q.sectionId]) {
        questionsBySection[q.sectionId] = [];
      }
      questionsBySection[q.sectionId].push(q.textPlain || '');
    });

    // Group notes by section
    const notesBySection: Record<string, string> = {};
    savedNotes.forEach(n => {
      notesBySection[n.sectionId] = n.bodyPlain || '';
    });

    // Merge saved data with sections
    const updatedSections = sections.map(section => ({
      ...section,
      customQuestions: questionsBySection[section.id] || section.customQuestions || [],
      notes: notesBySection[section.id] || section.notes || '',
    }));

    return { 
      success: true, 
      sections: updatedSections
    };

  } catch (error) {
    console.error('Load progress error:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Failed to load progress' 
    };
  }
}
