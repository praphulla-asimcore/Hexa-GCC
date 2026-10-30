import { NextResponse } from 'next/server';
import { sendLeadNotification } from '@/lib/lead-notification';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const data = await request.json().catch(() => null);

    const { name, company, email, country, interest, timeline } = data ?? {};

    // Validate required fields
    const values = [name, company, email, country, interest, timeline];
    if (values.some(value => typeof value !== 'string' || !value.trim() || value.length > 500)
      || typeof email !== 'string' || email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Please complete every field.' },
        { status: 400 }
      );
    }

    const lead = {
      id: crypto.randomUUID(),
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
          <h2 style="color: white; margin: 0;">New proposal request from gcc.hexabusiness.com</h2>
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

    const notification = await sendLeadNotification({
      subject: `New lead: ${name} from ${company} (${country}, ${interest})`,
      body: htmlBody,
    });
    if (notification !== 'accepted') {
      return NextResponse.json({
        success: false,
        message: 'Your enquiry could not be sent. Please try again or email praphulla@hexamatics.com.',
      }, { status: notification === 'unavailable' ? 503 : 502 });
    }

    return NextResponse.json({
      success: true,
      message: 'Enquiry accepted for notification',
      id: lead?.id,
    });

  } catch {
    return NextResponse.json(
      { success: false, message: 'Your enquiry could not be sent. Please try again or email praphulla@hexamatics.com.' },
      { status: 500 }
    );
  }
}
