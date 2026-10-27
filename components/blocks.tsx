import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import {
  CaseStudy,
  GROUP_MARKET_COUNT,
  RETENTION,
  Tower,
  clientLogos,
  included,
  products,
} from '@/lib/site';

type Cta = { label: string; href: string };

function CtaLink({ cta, variant }: { cta: Cta; variant: 'primary' | 'ghost-dark' | 'ghost-light' }) {
  const className = `btn btn-${variant}`;
  if (cta.href.startsWith('http')) {
    return (
      <a href={cta.href} target="_blank" rel="noopener noreferrer" className={className}>
        {cta.label}
      </a>
    );
  }
  return (
    <Link href={cta.href} className={className}>
      {cta.label}
    </Link>
  );
}

export function PageHero({
  eyebrow,
  title,
  subline,
  primary,
  secondary,
  video,
  children,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subline?: React.ReactNode;
  primary?: Cta;
  secondary?: Cta;
  video?: { src: string; poster: string };
  children?: React.ReactNode;
}) {
  return (
    <section className="section-dark pt-[136px] pb-20 md:pt-[168px] md:pb-24">
      {video && (
        <div className="hero-video" style={{ backgroundImage: `url(${video.poster})` }} aria-hidden>
          <video autoPlay muted loop playsInline preload="metadata" poster={video.poster}>
            <source src={video.src} type="video/mp4" />
          </video>
        </div>
      )}
      <div className="blob blob-magenta w-[520px] h-[520px] -top-40 -left-40" aria-hidden />
      <div className="blob blob-purple w-[560px] h-[560px] -top-24 -right-48" aria-hidden />
      <div className="container-hexa">
        <div className="max-w-3xl">
          {eyebrow && <p className="eyebrow mb-5">{eyebrow}</p>}
          <h1 className="text-[2.4rem] leading-[1.08] sm:text-5xl lg:text-[3.6rem] font-bold tracking-tight">{title}</h1>
          {subline && <p className="mt-6 text-lg sm:text-xl text-on-dark-muted leading-relaxed max-w-2xl">{subline}</p>}
          {(primary || secondary) && (
            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              {primary && <CtaLink cta={primary} variant="primary" />}
              {secondary && <CtaLink cta={secondary} variant="ghost-dark" />}
            </div>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  intro,
  center,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  center?: boolean;
}) {
  return (
    <div className={`max-w-2xl mb-12 ${center ? 'mx-auto text-center' : ''}`}>
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <h2 className="text-3xl sm:text-[2.5rem] leading-[1.12] font-bold tracking-tight">{title}</h2>
      {intro && <p className="mt-5 text-lg leading-relaxed opacity-75">{intro}</p>}
    </div>
  );
}

export function ProofBar() {
  const facts = [
    { figure: '2002', label: 'Group operating since' },
    { figure: String(GROUP_MARKET_COUNT), label: 'Markets with group operations' },
    { figure: RETENTION, label: 'Team retention, FY26' },
    { figure: 'ISO', label: '27001 and 9001 certified' },
  ];
  return (
    <dl className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
      {facts.map((f) => (
        <div key={f.label} className="glass px-5 py-5 sm:px-6 sm:py-6">
          <dt className="sr-only">{f.label}</dt>
          <dd className="gradient-text text-3xl sm:text-4xl font-bold tracking-tight">{f.figure}</dd>
          <dd className="mt-2 text-sm text-on-dark-muted leading-snug">{f.label}</dd>
        </div>
      ))}
    </dl>
  );
}

export function ProductLadder({ id, heading = 'Start where you are.' }: { id?: string; heading?: string }) {
  return (
    <section id={id} className="section-dark section">
      <div className="blob blob-magenta w-[420px] h-[420px] top-10 -right-32" aria-hidden />
      <div className="container-hexa">
        <SectionHeader
          eyebrow="Products"
          title={heading}
          intro="Every engagement pairs a service with a product. Start where you are. Grow without switching partner."
        />
        <div className="relative">
          <div className="hidden lg:block absolute top-[38px] left-[16%] right-[16%] gradient-rule" aria-hidden />
          <ol className="relative grid gap-4 lg:grid-cols-3 lg:gap-6">
            {products.map((p, i) => (
              <li key={p.slug}>
                <Link href={p.href} className="glass block h-full p-7 transition-colors hover:border-white/30">
                  <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-hexa-ink border border-white/20 text-sm font-bold mb-6 relative">
                    <span className="gradient-text">0{i + 1}</span>
                  </span>
                  <h3 className="text-2xl font-bold">{p.name}</h3>
                  <p className="mt-3 text-on-dark-muted leading-relaxed">{p.definition}</p>
                  <dl className="mt-6 space-y-3 text-sm">
                    <div>
                      <dt className="font-bold text-white">In Finance</dt>
                      <dd className="text-on-dark-muted">{p.financeExample}</dd>
                    </div>
                    <div>
                      <dt className="font-bold text-white">In Technology</dt>
                      <dd className="text-on-dark-muted">{p.technologyExample}</dd>
                    </div>
                  </dl>
                  <span className="mt-6 inline-flex items-center gap-2 font-bold text-[#FF6DB8]">
                    Explore {p.name} <ArrowRight className="w-4 h-4" aria-hidden />
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export function ServiceTiles({ tower, limit }: { tower: Tower; limit?: number }) {
  const areas = limit ? tower.areas.slice(0, limit) : tower.areas;
  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {areas.map((a) => (
        <li key={a.name}>
          <Link href={tower.href} className="card card-link block h-full p-6">
            <span className="block w-8 h-1 rounded-full mb-5" style={{ background: 'var(--hexa-gradient)' }} aria-hidden />
            <h3 className="font-bold text-lg">{a.name}</h3>
            <p className="mt-2 text-muted text-[15px] leading-relaxed">{a.description}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function CaseCard({ study }: { study: CaseStudy }) {
  return (
    <Link href={`/case-studies#${study.id}`} className="card card-link flex flex-col h-full p-7">
      <div className="flex flex-wrap gap-2 mb-5">
        <span className="tag">{study.tower}</span>
        <span className="tag !bg-hexa-soft !text-hexa-ink/70">{study.market}</span>
      </div>
      <h3 className="text-lg font-bold leading-snug">{study.title}</h3>
      <p className="mt-3 text-muted text-[15px] leading-relaxed">{study.problem}</p>
      <p className="mt-4 text-[15px] leading-relaxed">
        <span className="font-bold">Result: </span>
        {study.result}
      </p>
      <span className="mt-auto pt-6 inline-flex items-center gap-2 font-bold text-hexa-magenta">
        Read the case <ArrowRight className="w-4 h-4" aria-hidden />
      </span>
    </Link>
  );
}

export function ClientLogos({ title = 'Clients we work with' }: { title?: string }) {
  return (
    <div>
      <p className="text-sm font-bold uppercase tracking-[0.12em] text-muted mb-6">{title}</p>
      <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {clientLogos.map((logo) => (
          <li key={logo.name} className="card h-24 flex items-center justify-center px-6">
            <Image
              src={logo.src}
              alt={logo.name}
              width={logo.width}
              height={logo.height}
              className="max-h-12 w-auto object-contain"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export function IncludedGrid() {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {included.map((item) => (
        <li key={item.name} className="card p-6 flex gap-4">
          <span className="mt-0.5 flex-none w-7 h-7 rounded-full flex items-center justify-center text-white" style={{ background: 'var(--hexa-gradient)' }}>
            <Check className="w-4 h-4" aria-hidden />
          </span>
          <div>
            <h3 className="font-bold">{item.name}</h3>
            <p className="mt-1 text-muted text-[15px] leading-relaxed">{item.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export function CheckList({ items, dark }: { items: string[]; dark?: boolean }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 leading-relaxed">
          <Check className="w-5 h-5 flex-none mt-0.5 text-hexa-magenta" aria-hidden />
          <span className={dark ? 'text-on-dark-muted' : ''}>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function CtaBand({
  title = 'Tell us where you are. We will show you where to start.',
  body = 'A 20-minute call with someone who runs delivery, not a sales script.',
  primary = { label: 'Book a call', href: '/call' },
  secondary = { label: 'Request a proposal', href: '/call#proposal' },
}: {
  title?: string;
  body?: string;
  primary?: Cta;
  secondary?: Cta;
}) {
  return (
    <section className="section-dark section">
      <div className="blob blob-magenta w-[460px] h-[460px] -top-40 left-1/4" aria-hidden />
      <div className="blob blob-purple w-[460px] h-[460px] -bottom-40 right-1/4" aria-hidden />
      <div className="container-hexa text-center">
        <h2 className="text-3xl sm:text-[2.5rem] leading-[1.12] font-bold tracking-tight max-w-3xl mx-auto">{title}</h2>
        <p className="mt-5 text-lg text-on-dark-muted max-w-xl mx-auto">{body}</p>
        <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
          <CtaLink cta={primary} variant="primary" />
          {secondary && <CtaLink cta={secondary} variant="ghost-dark" />}
        </div>
      </div>
    </section>
  );
}
