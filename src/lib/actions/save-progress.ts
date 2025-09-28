'use server';

import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { db } from '@/lib/db';
import { depositions } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';
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

    // Note: Section selections and custom questions are already saved 
    // through their respective components (SectionSelector, etc.)
    
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
