import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Mail, MessageCircle } from 'lucide-react';
import { ACCA_REF, BOOKING_URL, CONTACT_EMAIL, WHATSAPP_URL, products, towers } from '@/lib/site';

const columns = [
  { title: 'Products', links: products.map((p) => ({ label: p.name, href: p.href })) },
  {
    title: 'Services',
    links: [
      ...towers.map((t) => ({ label: t.name, href: t.href })),
      { label: 'Accounting for Australian firms', href: '/accounting-outsourcing-australia' },
      { label: 'Offshore accounting teams', href: '/offshore-accounting-teams' },
      { label: 'Hexa Intelligence', href: '/hexa-intelligence' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Why Nepal', href: '/why-nepal' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Security', href: '/security' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Book a call', href: '/call' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="section-dark">
      <div className="blob blob-purple w-[420px] h-[420px] -bottom-40 -left-24" aria-hidden />
      <div className="container-hexa pt-20 pb-10">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div>
            <div className="relative w-[120px] h-[28px] mb-6">
              <Image src="/logo.png" alt="Hexa" fill sizes="120px" className="object-contain object-left" />
            </div>
            <p className="text-on-dark-muted max-w-xs mb-6 leading-relaxed">
              Finance and Technology shared services for growing companies, from added capacity to a full
              capability centre.
            </p>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`} className="inline-flex items-center gap-2 text-white/80 hover:text-white">
                  <Mail className="w-4 h-4 text-hexa-magenta" aria-hidden />
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-track="booking-link"
                  className="inline-flex items-center gap-2 text-white/80 hover:text-white"
                >
                  <Calendar className="w-4 h-4 text-hexa-magenta" aria-hidden />
                  Book a 20-minute call
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white/80 hover:text-white"
                >
                  <MessageCircle className="w-4 h-4 text-hexa-magenta" aria-hidden />
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h2 className="text-sm font-bold uppercase tracking-[0.12em] text-white/60 mb-5">{col.title}</h2>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-white/85 hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row gap-4 md:items-center md:justify-between text-sm text-white/60">
          <p>
            ISO 27001 and ISO 9001 certified · ACCA Approved Employer (ref {ACCA_REF})
          </p>
          <p>© {new Date().getFullYear()} Hexa. Part of the Hexamatics Group, established 2002.</p>
        </div>
      </div>
    </footer>
  );
}
