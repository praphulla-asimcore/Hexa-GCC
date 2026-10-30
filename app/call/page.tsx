import { pageMetadata } from '@/lib/seo';
import type { Metadata } from 'next';
import { Calendar, Mail } from 'lucide-react';
import ContactForm from '@/components/contact-form';
import { BOOKING_URL, CONTACT_EMAIL } from '@/lib/site';

export const metadata: Metadata = pageMetadata('/call', 'Book a Call | Hexa', 'Book a 20-minute call with Hexa about Finance or Technology shared services, or request a proposal. We reply within one business day.');

export default function CallPage() {
  return (
    <>
      <section className="section-dark pt-[136px] pb-16 md:pt-[168px] md:pb-20">
        <div className="blob blob-magenta w-[520px] h-[520px] -top-40 -left-40" aria-hidden />
        <div className="blob blob-purple w-[520px] h-[520px] -top-24 -right-48" aria-hidden />
        <div className="container-hexa grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow mb-5">Book a call</p>
            <h1 className="text-[2.4rem] leading-[1.08] sm:text-5xl font-bold tracking-tight">
              Talk to someone who runs delivery.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-on-dark-muted leading-relaxed">
              Twenty minutes on what you need run, and where to start. No obligation, no sales script.
            </p>
          </div>
          <div className="glass p-6 sm:p-8">
            <Calendar className="w-7 h-7 text-[#FF6DB8] mb-4" aria-hidden />
            <h2 className="text-xl font-bold">Pick a time that suits you</h2>
            <p className="mt-2 text-on-dark-muted">Choose a slot in our calendar. You will get an invite straight away.</p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-track="booking-link"
              className="btn btn-primary w-full mt-6"
            >
              Book a 20-minute call
            </a>
          </div>
        </div>
      </section>

      <section id="proposal" className="section bg-hexa-soft scroll-mt-16">
        <div className="container-hexa grid gap-10 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <p className="eyebrow mb-4">Request a proposal</p>
            <h2 className="text-3xl sm:text-[2.5rem] leading-[1.12] font-bold tracking-tight">
              Prefer to write? Tell us the basics.
            </h2>
            <p className="mt-5 text-lg text-muted leading-relaxed">
              We will reply within one business day with next steps, or to arrange a visit to the delivery centre.
            </p>
            <a href={`mailto:${CONTACT_EMAIL}`} className="mt-6 inline-flex items-center gap-2 font-bold text-hexa-magenta">
              <Mail className="w-4 h-4" aria-hidden />
              {CONTACT_EMAIL}
            </a>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
