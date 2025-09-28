import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Check environment variables
    const envCheck = {
      DATABASE_URL: !!process.env.DATABASE_URL,
      NEXTAUTH_SECRET: !!process.env.NEXTAUTH_SECRET,
      NEXTAUTH_URL: !!process.env.NEXTAUTH_URL,
      RESEND_API_KEY: !!process.env.RESEND_API_KEY,
      NODE_ENV: process.env.NODE_ENV,
    };

    return NextResponse.json({ 
      success: true, 
      message: 'API is working',
      environment: envCheck,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Test API error:', error);
    return NextResponse.json({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    }, { status: 500 });
  }
}
