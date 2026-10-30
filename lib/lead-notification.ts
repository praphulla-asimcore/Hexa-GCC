export type NotificationResult = 'accepted' | 'unavailable' | 'failed';

export async function sendLeadNotification(
  notification: { subject: string; body: string },
  config: {
    ABACUSAI_API_KEY?: string; WEB_APP_ID?: string;
    NOTIF_ID_LEAD_FORM_SUBMISSION?: string; NEXTAUTH_URL?: string;
  } = {
    ABACUSAI_API_KEY: process.env.ABACUSAI_API_KEY,
    WEB_APP_ID: process.env.WEB_APP_ID,
    NOTIF_ID_LEAD_FORM_SUBMISSION: process.env.NOTIF_ID_LEAD_FORM_SUBMISSION,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
  },
  fetchImpl: typeof fetch = fetch,
): Promise<NotificationResult> {
  if (!config.ABACUSAI_API_KEY || !config.WEB_APP_ID || !config.NOTIF_ID_LEAD_FORM_SUBMISSION) {
    return 'unavailable';
  }
  try {
    const hostname = config.NEXTAUTH_URL ? new URL(config.NEXTAUTH_URL).hostname : '';
    const response = await fetchImpl('https://apps.abacus.ai/api/sendNotificationEmail', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      signal: AbortSignal.timeout(10000),
      body: JSON.stringify({
        deployment_token: config.ABACUSAI_API_KEY, app_id: config.WEB_APP_ID,
        notification_id: config.NOTIF_ID_LEAD_FORM_SUBMISSION,
        subject: notification.subject, body: notification.body, is_html: true,
        recipient_email: 'praphulla@hexamatics.com',
        sender_email: hostname ? `noreply@${hostname}` : 'noreply@hexagcc.com',
        sender_alias: hostname ? hostname.split('.')[0] : 'HexaGCC',
      }),
    });
    const result = await response.json();
    // Provider acceptance is not a delivery receipt. A disabled notification is
    // not a successful enquiry: there is no persistent lead store in this app.
    return response.ok && result?.success === true && !result?.notification_disabled
      ? 'accepted' : 'failed';
  } catch {
    // Never expose provider bodies, credentials or submitted personal data.
    return 'failed';
  }
}
