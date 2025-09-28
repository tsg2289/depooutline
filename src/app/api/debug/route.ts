import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Check environment variables
    const envCheck = {
      DATABASE_URL: !!process.env.DATABASE_URL ? 'Set' : 'Missing',
      NEXTAUTH_SECRET: !!process.env.NEXTAUTH_SECRET ? 'Set' : 'Missing',
      NEXTAUTH_URL: process.env.NEXTAUTH_URL || 'Missing',
      RESEND_API_KEY: !!process.env.RESEND_API_KEY ? 'Set' : 'Missing',
      EMAIL_FROM: process.env.EMAIL_FROM || 'Missing',
      NODE_ENV: process.env.NODE_ENV || 'Missing',
    };

    // Test database connection
    let dbStatus = 'Unknown';
    try {
      const { sql } = await import('@vercel/postgres');
      const result = await sql`SELECT 1 as test`;
      dbStatus = result.rows.length > 0 ? 'Connected' : 'No response';
    } catch (dbError) {
      dbStatus = `Error: ${dbError instanceof Error ? dbError.message : 'Unknown DB error'}`;
    }

    // Test Resend
    let resendStatus = 'Unknown';
    try {
      if (process.env.RESEND_API_KEY && process.env.RESEND_API_KEY !== 're_placeholder_for_now') {
        const { Resend } = await import('resend');
        const resend = new Resend(process.env.RESEND_API_KEY);
        // Just check if we can create the instance
        resendStatus = 'API Key Valid';
      } else {
        resendStatus = 'API Key Missing or Placeholder';
      }
    } catch (resendError) {
      resendStatus = `Error: ${resendError instanceof Error ? resendError.message : 'Unknown Resend error'}`;
    }

    return NextResponse.json({ 
      success: true, 
      environment: envCheck,
      database: dbStatus,
      resend: resendStatus,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Debug API error:', error);
    return NextResponse.json({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined
    }, { status: 500 });
  }
}
