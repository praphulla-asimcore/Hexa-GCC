// No vendor, storage or network calls. A consent-aware analytics integration can
// listen for hexa:analytics after granting consent through this API.
export type AnalyticsEvent =
  | 'lead_form_submit' | 'service_page_cta_click'
  | 'meeting_booking_click' | 'whatsapp_click' | 'email_click';

let consentGranted = false;

export function setAnalyticsConsent(granted: boolean) {
  consentGranted = granted;
}

export function trackEvent(event: AnalyticsEvent) {
  if (typeof window === 'undefined' || !consentGranted) return;
  window.dispatchEvent(new CustomEvent('hexa:analytics', {
    detail: { event, page_path: window.location.pathname },
  }));
}
