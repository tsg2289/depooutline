'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { db } from '@/lib/db';
import { depositions, matters } from '@/lib/db/schema';
import { eq, and } from 'drizzle-orm';

export async function createDeposition(matterId: string, formData: FormData) {
  const session = await getServerSession(authOptions);
  
  if (!session?.user?.id) {
    redirect('/auth/signin');
  }

  // Verify user owns the matter
  const [matter] = await db
    .select()
    .from(matters)
    .where(and(eq(matters.id, matterId), eq(matters.userId, session.user.id)));

  if (!matter) {
    throw new Error('Matter not found or access denied');
  }

  const title = formData.get('title') as string;
  const deponentName = formData.get('deponentName') as string;
  const date = formData.get('date') as string;
  const caseName = formData.get('caseName') as string;
  const caseNumber = formData.get('caseNumber') as string;
  const jurisdiction = formData.get('jurisdiction') as string;
  const takingAttorney = formData.get('takingAttorney') as string;
  const defendingAttorney = formData.get('defendingAttorney') as string;

  if (!title || !deponentName) {
    throw new Error('Title and deponent name are required');
  }

  try {
    const [deposition] = await db.insert(depositions).values({
      matterId,
      title,
      deponentName,
      date: date ? new Date(date) : null,
      caseName: caseName || null,
      caseNumber: caseNumber || null,
      jurisdiction: jurisdiction || null,
      takingAttorney: takingAttorney || null,
      defendingAttorney: defendingAttorney || null,
    }).returning();

    revalidatePath('/');
    return { success: true, deposition };
  } catch (error) {
    console.error('Failed to create deposition:', error);
    throw new Error('Failed to create deposition');
  }
}

export async function updateDeposition(depositionId: string, formData: FormData) {
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

  const title = formData.get('title') as string;
  const deponentName = formData.get('deponentName') as string;
  const date = formData.get('date') as string;
  const caseName = formData.get('caseName') as string;
  const caseNumber = formData.get('caseNumber') as string;
  const jurisdiction = formData.get('jurisdiction') as string;
  const takingAttorney = formData.get('takingAttorney') as string;
  const defendingAttorney = formData.get('defendingAttorney') as string;

  if (!title || !deponentName) {
    throw new Error('Title and deponent name are required');
  }

  try {
    const [deposition] = await db
      .update(depositions)
      .set({
        title,
        deponentName,
        date: date ? new Date(date) : null,
        caseName: caseName || null,
        caseNumber: caseNumber || null,
        jurisdiction: jurisdiction || null,
        takingAttorney: takingAttorney || null,
        defendingAttorney: defendingAttorney || null,
        updatedAt: new Date(),
      })
      .where(eq(depositions.id, depositionId))
      .returning();

    revalidatePath('/');
    return { success: true, deposition };
  } catch (error) {
    console.error('Failed to update deposition:', error);
    throw new Error('Failed to update deposition');
  }
}

export async function deleteDeposition(depositionId: string) {
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
    await db.delete(depositions).where(eq(depositions.id, depositionId));

    revalidatePath('/');
    return { success: true };
  } catch (error) {
    console.error('Failed to delete deposition:', error);
    throw new Error('Failed to delete deposition');
  }
}

export async function getMatterDepositions(matterId: string) {
  const session = await getServerSession(authOptions);
  
  if (!session?.user?.id) {
    return [];
  }

  try {
    // Verify user owns the matter
    const [matter] = await db
      .select()
      .from(matters)
      .where(and(eq(matters.id, matterId), eq(matters.userId, session.user.id)));

    if (!matter) {
      return [];
    }

    const matterDepositions = await db
      .select()
      .from(depositions)
      .where(eq(depositions.matterId, matterId))
      .orderBy(depositions.createdAt);

    return matterDepositions;
  } catch (error) {
    console.error('Failed to fetch depositions:', error);
    return [];
  }
}
