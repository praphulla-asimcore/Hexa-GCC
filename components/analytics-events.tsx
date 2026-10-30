'use client';

import { useEffect } from 'react';
import { trackEvent } from '@/lib/analytics';
import { BOOKING_URL, WHATSAPP_URL } from '@/lib/site';

export default function AnalyticsEvents() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;
      const anchor = event.target.closest('a');
      if (!anchor) return;
      const href = anchor.getAttribute('href') || '';
      if (href.startsWith('mailto:')) trackEvent('email_click');
      else if (href === WHATSAPP_URL) trackEvent('whatsapp_click');
      else if (href === BOOKING_URL) trackEvent('meeting_booking_click');
      else if (href === '/call' || href.startsWith('/call#')) trackEvent('service_page_cta_click');
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);
  return null;
}
