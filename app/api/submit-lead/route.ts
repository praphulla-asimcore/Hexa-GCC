import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const data = await request?.json?.() ?? {};

    const { name, company, email, country, interest, timeline } = data ?? {};

    // Validate required fields
    if (!name || !company || !email || !country || !interest || !timeline) {
      return NextResponse.json(
        { success: false, message: 'Please complete every field.' },
        { status: 400 }
      );
    }

    const lead = {
      id: Math.random().toString(36).substr(2, 9),
      createdAt: new Date(),
    };

    const escapeHtml = (value: unknown) =>
      String(value ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

    const rows = [
      ['Name', name],
      ['Company', company],
      ['Work email', email],
      ['Country', country],
      ['Interest', interest],
      ['Timeline', timeline],
    ]
      .map(
        ([label, value]) => `
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;"><strong style="color: #374151;">${label}:</strong></td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280;">${escapeHtml(value)}</td>
            </tr>`
      )
      .join('');

    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(90deg, #E91E8C, #7B2FBE); padding: 20px; border-radius: 12px 12px 0 0;">
          <h2 style="color: white; margin: 0;">New proposal request from hnpl.business</h2>
        </div>
        <div style="background: #f9fafb; padding: 24px; border-radius: 0 0 12px 12px;">
          <table style="width: 100%; border-collapse: collapse;">${rows}
          </table>
          <div style="margin-top: 20px; padding: 16px; background: #E91E8C10; border-radius: 8px;">
            <p style="margin: 0; color: #374151; font-size: 14px;">
              <strong>Next step:</strong> Reply within one business day, as promised on the site.
            </p>
          </div>
        </div>
        <p style="color: #9ca3af; font-size: 12px; text-align: center; margin-top: 16px;">
          Submitted at: ${new Date().toISOString()}
        </p>
      </div>
    `;

    try {
      const appUrl = process?.env?.NEXTAUTH_URL || '';
      const appName = appUrl ? new URL(appUrl)?.hostname?.split('.')?.[0] || 'HexaGCC' : 'HexaGCC';

      const emailResponse = await fetch('https://apps.abacus.ai/api/sendNotificationEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          deployment_token: process?.env?.ABACUSAI_API_KEY,
          app_id: process?.env?.WEB_APP_ID,
          notification_id: process?.env?.NOTIF_ID_LEAD_FORM_SUBMISSION,
          subject: `New lead: ${name} from ${company} (${country}, ${interest})`,
          body: htmlBody,
          is_html: true,
          recipient_email: 'praphulla@hexamatics.com',
          sender_email: appUrl ? `noreply@${new URL(appUrl)?.hostname}` : 'noreply@hexagcc.com',
          sender_alias: appName,
        }),
      });

      const emailResult = await emailResponse?.json?.() ?? {};
      if (!emailResult?.success && !emailResult?.notification_disabled) {
        console.error('Email notification failed:', emailResult);
      }
    } catch (emailError) {
      console.error('Error sending email notification:', emailError);
      // Don't fail the request if email fails
    }

    return NextResponse.json({
      success: true,
      message: 'Lead submitted successfully',
      id: lead?.id,
    });

  } catch (error: any) {
    console.error('Error submitting lead:', error);
    return NextResponse.json(
      { success: false, message: error?.message || 'Failed to submit lead' },
      { status: 500 }
    );
  }
}
