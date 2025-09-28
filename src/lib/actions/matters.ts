'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { db } from '@/lib/db';
import { matters } from '@/lib/db/schema';
import { eq, and } from 'drizzle-orm';

export async function createMatter(formData: FormData) {
  const session = await getServerSession(authOptions);
  
  if (!session?.user?.id) {
    redirect('/auth/signin');
  }

  const title = formData.get('title') as string;
  const description = formData.get('description') as string;
  const e2eeEnabled = formData.get('e2eeEnabled') === 'true';

  if (!title) {
    throw new Error('Title is required');
  }

  try {
    const [matter] = await db.insert(matters).values({
      userId: session.user.id,
      title,
      description: description || null,
      e2eeEnabled,
    }).returning();

    revalidatePath('/');
    return { success: true, matter };
  } catch (error) {
    console.error('Failed to create matter:', error);
    throw new Error('Failed to create matter');
  }
}

export async function updateMatter(matterId: string, formData: FormData) {
  const session = await getServerSession(authOptions);
  
  if (!session?.user?.id) {
    redirect('/auth/signin');
  }

  const title = formData.get('title') as string;
  const description = formData.get('description') as string;
  const e2eeEnabled = formData.get('e2eeEnabled') === 'true';

  if (!title) {
    throw new Error('Title is required');
  }

  try {
    const [matter] = await db
      .update(matters)
      .set({
        title,
        description: description || null,
        e2eeEnabled,
        updatedAt: new Date(),
      })
      .where(and(eq(matters.id, matterId), eq(matters.userId, session.user.id)))
      .returning();

    if (!matter) {
      throw new Error('Matter not found or access denied');
    }

    revalidatePath('/');
    return { success: true, matter };
  } catch (error) {
    console.error('Failed to update matter:', error);
    throw new Error('Failed to update matter');
  }
}

export async function deleteMatter(matterId: string) {
  const session = await getServerSession(authOptions);
  
  if (!session?.user?.id) {
    redirect('/auth/signin');
  }

  try {
    const [deletedMatter] = await db
      .delete(matters)
      .where(and(eq(matters.id, matterId), eq(matters.userId, session.user.id)))
      .returning();

    if (!deletedMatter) {
      throw new Error('Matter not found or access denied');
    }

    revalidatePath('/');
    return { success: true };
  } catch (error) {
    console.error('Failed to delete matter:', error);
    throw new Error('Failed to delete matter');
  }
}

export async function getUserMatters() {
  const session = await getServerSession(authOptions);
  
  if (!session?.user?.id) {
    return [];
  }

  try {
    const userMatters = await db
      .select()
      .from(matters)
      .where(eq(matters.userId, session.user.id))
      .orderBy(matters.createdAt);

    return userMatters;
  } catch (error) {
    console.error('Failed to fetch matters:', error);
    return [];
  }
}
