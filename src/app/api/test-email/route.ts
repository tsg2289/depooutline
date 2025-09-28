import { NextResponse } from 'next/server';

export async function POST() {
  try {
    console.log('Testing email configuration...');
    console.log('RESEND_API_KEY exists:', !!process.env.RESEND_API_KEY);
    console.log('EMAIL_FROM:', process.env.EMAIL_FROM);
    
    if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === 're_placeholder_for_now') {
      return NextResponse.json({ 
        success: false, 
        error: 'RESEND_API_KEY not configured properly',
        apiKey: process.env.RESEND_API_KEY ? 'Set but might be placeholder' : 'Not set'
      }, { status: 400 });
    }

    const { Resend } = await import('resend');
    const resend = new Resend(process.env.RESEND_API_KEY);

    console.log('Attempting to send test email...');
    
    const result = await resend.emails.send({
      from: process.env.EMAIL_FROM || 'onboarding@resend.dev',
      to: 'thomas.st.germain22@gmail.com',
      subject: 'Test Email from DepoOutline',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1>Test Email</h1>
          <p>This is a test email to verify Resend configuration.</p>
          <p>Time: ${new Date().toISOString()}</p>
        </div>
      `,
    });

    console.log('Email send result:', result);

    return NextResponse.json({ 
      success: true, 
      message: 'Test email sent successfully',
      result: result,
      config: {
        from: process.env.EMAIL_FROM || 'onboarding@resend.dev',
        to: 'thomas.st.germain22@gmail.com'
      }
    });

  } catch (error) {
    console.error('Test email error:', error);
    return NextResponse.json({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined
    }, { status: 500 });
  }
}
