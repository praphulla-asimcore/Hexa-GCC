import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Award,
  BadgeCheck,
  CalendarClock,
  ClipboardCheck,
  Eye,
  FileSpreadsheet,
  KeyRound,
  Landmark,
  ShieldCheck,
  UserMinus,
  Wallet,
  XCircle,
  ArrowRight,
} from 'lucide-react';
import { CheckList, CtaBand, PageHero, SectionHeader } from '@/components/blocks';
import { ACCA_REF, FILE_ENCRYPTION_DEPLOYED } from '@/lib/site';

export const metadata: Metadata = {
  title: { absolute: 'Security and Data Control | Hexa' },
  description:
    'Your data stays in your systems, your keys stay with you. How Hexa protects client finance and technology data, from access controls to persistent file encryption.',
  alternates: { canonical: '/security' },
};

const layers = [
  {
    title: 'Work happens in your environment',
    body: 'Our people work inside your systems and your cloud region, through access you grant and can withdraw. Sessions are logged. Nothing is copied to Hexa systems unless you ask.',
  },
  {
    title: 'People and process under ISO 27001',
    body: 'Background checks before onboarding. Role-based access, reviewed regularly. Clean-desk and device policies. Confidentiality obligations in every employment contract. All run under our ISO 27001 certified management system.',
  },
  {
    title: 'Files protected wherever they go',
    body: FILE_ENCRYPTION_DEPLOYED
      ? 'Sensitive files are protected with persistent file encryption. The protection stays with the file when it’s stored, sent or opened. Only people you authorise can read it.'
      : 'Persistent file encryption is available on request. The protection stays with the file when it’s stored, sent or opened. Only people you authorise can read it.',
  },
];

const keyControls = [
  { icon: Eye, title: 'See every access.', body: 'Who opened a file, when, from where and on which device.' },
  {
    icon: XCircle,
    title: 'Revoke at any time.',
    body: 'Remove access to a file, or every file, remotely and immediately, including copies that have been forwarded or downloaded.',
  },
  {
    icon: CalendarClock,
    title: 'Set expiry dates.',
    body: 'Files tied to a project or engagement can become unreadable automatically when it ends.',
  },
  {
    icon: UserMinus,
    title: 'Stay in control at offboarding.',
    body: 'When someone leaves the team or the engagement ends, access to every file they handled can be revoked the same day.',
  },
];

const financeFiles = [
  { icon: Wallet, title: 'Payroll registers and payslips', body: 'Personal and salary data, protected from export to delivery.' },
  { icon: Landmark, title: 'Bank and payment files', body: 'Account details encrypted end to end, with every access logged.' },
  { icon: FileSpreadsheet, title: 'ERP and ledger exports', body: 'Reports pulled from your systems stay protected after they’re downloaded.' },
  { icon: ClipboardCheck, title: 'Audit workpapers', body: 'Shared with your external auditors, revoked when the audit closes.' },
];

const obligations = [
  'Access logs you can review',
  'Revocation you control',
  'A data processing agreement that sets out how we handle, retain and return your data',
  'Breach notification commitments written into your contract',
];

const credentials = [
  { icon: ShieldCheck, label: 'ISO 27001 certified (information security)' },
  { icon: BadgeCheck, label: 'ISO 9001 certified (quality)' },
  { icon: Award, label: `ACCA Approved Employer (ref ${ACCA_REF})` },
  { icon: KeyRound, label: 'Persistent file encryption with client-held keys' },
];

export default function SecurityPage() {
  return (
    <>
      <PageHero
        eyebrow="Security and data control"
        title={
          <>
            Your data stays yours. <span className="gradient-text">So do the keys.</span>
          </>
        }
        subline={
          FILE_ENCRYPTION_DEPLOYED
            ? 'Our teams work inside your systems, under your controls. Files that do leave are encrypted, logged and revocable by you, not by us.'
            : 'Our teams work inside your systems, under your controls. Files that do leave can be encrypted, logged and revoked by you, not by us.'
        }
        primary={{ label: 'Request our security brief', href: '/call#proposal' }}
        secondary={{ label: 'Book a 20-minute call', href: '/call' }}
      />

      <section className="section">
        <div className="container-hexa grid gap-12 lg:grid-cols-2">
          <SectionHeader
            eyebrow="The question every buyer asks"
            title="What happens to our data once your team has it?"
          />
          <div className="space-y-5 text-lg leading-relaxed lg:pt-10">
            <p>
              It’s the right question. Finance and technology work means handling payroll, bank details, customer
              ledgers and source code. Strong perimeters help, but files still get exported, emailed to auditors and
              downloaded for review.
            </p>
            <p className="text-muted">
              So we answer it in three layers: where the work happens, who can access it, and what protects a file once
              it leaves your systems.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-hexa-soft">
        <div className="container-hexa">
          <SectionHeader eyebrow="Three layers of control" title="Three layers. Each one you can verify." />
          <ol className="grid gap-5 md:grid-cols-3">
            {layers.map((layer, i) => (
              <li key={layer.title} className="card p-7">
                <span className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-black/10 text-sm font-bold mb-6">
                  <span className="gradient-text">0{i + 1}</span>
                </span>
                <h3 className="text-lg font-bold">{layer.title}</h3>
                <p className="mt-3 text-muted leading-relaxed">{layer.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-dark section">
        <div className="blob blob-magenta w-[460px] h-[460px] -top-32 -left-32" aria-hidden />
        <div className="blob blob-purple w-[460px] h-[460px] -bottom-40 -right-32" aria-hidden />
        <div className="container-hexa">
          <div className="grid gap-12 lg:grid-cols-2">
            <SectionHeader
              eyebrow="Client-held keys"
              title="You hold the keys. Not us."
              intro="With persistent file encryption, every protected file has its own encryption key, managed from a console you control. That changes what you can do:"
            />
            <ul className="grid gap-4 sm:grid-cols-2 lg:pt-10">
              {keyControls.map(({ icon: Icon, title, body }) => (
                <li key={title} className="glass p-6">
                  <Icon className="w-6 h-6 text-[#FF6DB8] mb-4" aria-hidden />
                  <h3 className="font-bold">{title}</h3>
                  <p className="mt-2 text-on-dark-muted text-[15px] leading-relaxed">{body}</p>
                </li>
              ))}
            </ul>
          </div>
          <blockquote className="mt-16 pt-12 border-t border-white/10">
            <p className="text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.15] font-bold tracking-tight max-w-4xl">
              If a file reaches someone you didn’t authorise, <span className="gradient-text">they can’t read it.</span>
            </p>
          </blockquote>
        </div>
      </section>

      <section className="section">
        <div className="container-hexa">
          <SectionHeader eyebrow="Where it matters in finance work" title="Built for the files finance teams actually move." />
          <ul className="grid gap-4 sm:grid-cols-2">
            {financeFiles.map(({ icon: Icon, title, body }) => (
              <li key={title} className="card p-7 flex gap-5">
                <span
                  className="flex-none w-11 h-11 rounded-full flex items-center justify-center text-white"
                  style={{ background: 'var(--hexa-gradient)' }}
                >
                  <Icon className="w-5 h-5" aria-hidden />
                </span>
                <div>
                  <h3 className="text-lg font-bold">{title}</h3>
                  <p className="mt-2 text-muted leading-relaxed">{body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/*
        HOLD: named proof and testimonial. Replace this line only after written client
        approval is received. Do not add any client name, logo or quote here until then.
      */}
      <section className="bg-hexa-soft">
        <div className="container-hexa py-10 md:py-12">
          <p className="text-lg sm:text-xl font-bold leading-snug max-w-3xl">
            Our security controls are already in use for clients in data-sensitive industries, including information
            security.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-hexa grid gap-12 lg:grid-cols-2">
          <SectionHeader
            eyebrow="Helping you meet your obligations"
            title="Evidence for your compliance team, not just assurances."
            intro="If you’re in Australia, the UK or elsewhere, you usually remain accountable for personal data you share with an overseas provider. Our controls are designed to give your compliance and privacy teams something concrete to point to:"
          />
          <div className="lg:pt-10">
            <CheckList items={obligations} />
            <p className="mt-8 text-sm text-muted leading-relaxed">
              We’ll walk your privacy or legal team through how these controls map to your obligations. We don’t give
              legal advice on your regulatory position.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-hexa-soft">
        <div className="container-hexa">
          <h2 className="eyebrow mb-6">Credentials</h2>
          <ul className="flex flex-wrap gap-3">
            {credentials.map(({ icon: Icon, label }) => (
              <li key={label} className="card inline-flex items-center gap-3 px-5 py-3 rounded-full">
                <Icon className="w-5 h-5 flex-none text-hexa-magenta" aria-hidden />
                <span className="font-semibold text-[15px]">{label}</span>
              </li>
            ))}
          </ul>
          <p className="mt-10 pt-8 border-t text-lg">
            <span className="font-bold">More questions?</span>{' '}
            <Link href="/faq#security" className="inline-flex items-center gap-2 font-bold text-hexa-magenta">
              See security and data questions in our FAQ <ArrowRight className="w-4 h-4" aria-hidden />
            </Link>
          </p>
        </div>
      </section>

      <CtaBand
        title="Bring your security questionnaire. We’ll answer it line by line."
        body={
          FILE_ENCRYPTION_DEPLOYED
            ? 'A 20-minute call with someone who runs delivery. We’ll show you a protected file being revoked, live.'
            : 'A 20-minute call with someone who runs delivery.'
        }
        primary={{ label: 'Book a call', href: '/call' }}
        secondary={{ label: 'Request our security brief', href: '/call#proposal' }}
      />
    </>
  );
}
