import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const data = await request?.json?.() ?? {};

    const { name, company, email, country, servicesNeeded, accountingSoftware, transactionsRange, message } = data ?? {};

    // Validate required fields
    if (!name || !company || !email || !country) {
      return NextResponse.json(
        { success: false, message: 'Name, company, email, and country are required.' },
        { status: 400 }
      );
    }

    // Store lead data temporarily (will integrate DB later)
    const lead = {
      id: Math.random().toString(36).substr(2, 9),
      name: name ?? '',
      company: company ?? '',
      email: email ?? '',
      country: country ?? '',
      servicesNeeded: servicesNeeded ?? [],
      accountingSoftware: accountingSoftware ?? '',
      transactionsRange: transactionsRange ?? '',
      message: message ?? '',
      createdAt: new Date(),
    };

    // Send email notification
    const countryNames: Record<string, string> = {
      SG: 'Singapore',
      MY: 'Malaysia',
      ID: 'Indonesia',
      PH: 'Philippines',
      UK: 'United Kingdom',
      US: 'United States',
      AU: 'Australia',
      CA: 'Canada',
      OTHER: 'Other',
    };

    const countryLabel = countryNames?.[country] || country || 'Not specified';

    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #E6007E, #8B5CF6); padding: 20px; border-radius: 12px 12px 0 0;">
          <h2 style="color: white; margin: 0;">New Lead from Hexa GCC Website</h2>
        </div>
        <div style="background: #f9fafb; padding: 24px; border-radius: 0 0 12px 12px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                <strong style="color: #374151;">Name:</strong>
              </td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280;">
                ${name ?? 'Not provided'}
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                <strong style="color: #374151;">Company:</strong>
              </td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280;">
                ${company ?? 'Not provided'}
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                <strong style="color: #374151;">Email:</strong>
              </td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                <a href="mailto:${email ?? ''}" style="color: #E6007E;">${email ?? 'Not provided'}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                <strong style="color: #374151;">Country:</strong>
              </td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280;">
                ${countryLabel}
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                <strong style="color: #374151;">Services Needed:</strong>
              </td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280;">
                ${(servicesNeeded ?? [])?.length > 0 ? (servicesNeeded ?? [])?.join(', ') : 'Not specified'}
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                <strong style="color: #374151;">Accounting Software:</strong>
              </td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280;">
                ${accountingSoftware || 'Not specified'}
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                <strong style="color: #374151;">Monthly Transactions:</strong>
              </td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280;">
                ${transactionsRange || 'Not specified'}
              </td>
            </tr>
            ${message ? `
            <tr>
              <td colspan="2" style="padding: 12px 0;">
                <strong style="color: #374151;">Message:</strong>
                <div style="margin-top: 8px; padding: 16px; background: white; border-radius: 8px; border-left: 4px solid #E6007E; color: #6b7280;">
                  ${message}
                </div>
              </td>
            </tr>
            ` : ''}
          </table>
          <div style="margin-top: 20px; padding: 16px; background: #E6007E10; border-radius: 8px;">
            <p style="margin: 0; color: #374151; font-size: 14px;">
              <strong>Next Step:</strong> Respond to this lead within 24 business hours with a country-specific service plan.
            </p>
          </div>
        </div>
        <p style="color: #9ca3af; font-size: 12px; text-align: center; margin-top: 16px;">
          Submitted at: ${new Date()?.toLocaleString?.() ?? 'Unknown time'}
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
          subject: `New Lead: ${name ?? 'Unknown'} from ${company ?? 'Unknown Company'} (${countryLabel})`,
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
