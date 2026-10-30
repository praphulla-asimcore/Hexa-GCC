import Link from 'next/link';
import { CheckList, CtaBand, PageHero, SectionHeader } from '@/components/blocks';
import SeoBreadcrumbs from '@/components/seo-breadcrumbs';
import { SITE_URL } from '@/lib/site';

export type AccountingLandingContent = {
  path: string; title: string; intro: string; audience: string;
  scope: string[]; boundary: string;
  steps: { title: string; body: string }[];
  questions: { question: string; answer: string }[];
};

export default function AccountingLandingPage({ content }: { content: AccountingLandingContent }) {
  return <>
    <PageHero eyebrow="Finance & Accounting" title={content.title} subline={content.intro}
      primary={{ label: 'Discuss your accounting workload', href: '/call#proposal' }}
      secondary={{ label: 'Compare engagement models', href: '#engagement-models' }} />
    <SeoBreadcrumbs items={[{ name: 'Finance & Accounting', path: '/finance' }, { name: content.title, path: content.path }]} />
    <section className="section">
      <div className="container-hexa grid gap-12 lg:grid-cols-2">
        <div><SectionHeader eyebrow="Who it fits" title="Make room for the work that needs your judgement." intro={content.audience} />
          <p className="text-muted leading-relaxed">{content.boundary}</p></div>
        <div className="card p-7"><h2 className="text-2xl font-bold mb-5">Scope to discuss</h2><CheckList items={content.scope} /></div>
      </div>
    </section>
    <section className="section bg-hexa-soft"><div className="container-hexa">
      <SectionHeader eyebrow="Transition" title="Agree the workflow before moving the workload." />
      <ol className="grid gap-5 md:grid-cols-3">{content.steps.map((step, index) =>
        <li key={step.title} className="card p-7"><span className="text-hexa-magenta font-bold">0{index + 1}</span>
          <h3 className="text-xl font-bold mt-3">{step.title}</h3><p className="text-muted mt-3 leading-relaxed">{step.body}</p></li>)}</ol>
    </div></section>
    <section id="engagement-models" className="section"><div className="container-hexa">
      <SectionHeader eyebrow="Accountability" title="Choose who directs the work." />
      <div className="grid gap-5 md:grid-cols-3">
        {[
          { href: '/support', title: 'Dedicated capacity: Hexa Support', body: 'You assign priorities and retain the process. Hexa provides capacity and internal quality review.' },
          { href: '/delivery', title: 'Managed process: Hexa Delivery', body: 'Agree a defined function, deliverables, review points and service levels, with Hexa accountable for delivery.' },
          { href: '/centre', title: 'A wider operation: Hexa Centre', body: 'Bring several functions together under dedicated leadership and a joint governance model.' },
        ].map(model => <Link href={model.href} key={model.href} className="card card-link p-7">
          <h3 className="text-xl font-bold">{model.title}</h3><p className="text-muted mt-3 leading-relaxed">{model.body}</p></Link>)}
      </div>
    </div></section>
    <section className="section bg-hexa-soft"><div className="container-hexa grid gap-10 lg:grid-cols-2">
      <div><SectionHeader eyebrow="Review and access" title="Keep approval and access boundaries explicit." />
        <p className="text-muted leading-relaxed">Define who prepares, who reviews and who approves each output. Agree access to your accounting platform and document stores, an escalation route for exceptions, and a reporting cadence before transition.</p>
        <Link href="/security" className="inline-block mt-5 font-bold text-hexa-magenta underline">Explore security and data controls</Link></div>
      <div><h2 className="text-2xl font-bold mb-5">Review the evidence and wider service</h2>
        <p className="text-muted leading-relaxed">The existing case studies include audit preparation support for accounting firms in Malaysia. Explore its preparation and review workflow, then discuss how the scope and responsibilities would differ for your organisation.</p>
        <ul className="mt-5 space-y-3">
          <li><Link href="/case-studies#malaysia-accounting" className="font-bold text-hexa-magenta underline">Accounting and audit support case study</Link></li>
          <li><Link href="/finance" className="font-bold text-hexa-magenta underline">Finance shared services scope</Link></li>
          <li><Link href="/why-nepal" className="font-bold text-hexa-magenta underline">Nepal delivery location and considerations</Link></li>
          <li><Link href={content.path === '/offshore-accounting-teams' ? '/accounting-outsourcing-australia' : '/offshore-accounting-teams'} className="font-bold text-hexa-magenta underline">
            {content.path === '/offshore-accounting-teams' ? 'Accounting outsourcing for Australian firms' : 'Dedicated offshore accounting teams'}</Link></li>
        </ul>
      </div>
    </div></section>
    <section className="section"><div className="container-hexa max-w-4xl">
      <SectionHeader eyebrow="Questions" title="Before you move accounting work offshore." />
      <dl className="space-y-7">{content.questions.map(item => <div key={item.question}>
        <dt className="font-bold text-xl">{item.question}</dt><dd className="text-muted mt-3 leading-relaxed">{item.answer}</dd></div>)}</dl>
    </div></section>
    <CtaBand title="Start with your scope, systems and review requirements." body="Tell us what needs doing, who reviews it and when it is due. We will discuss an appropriate engagement model." />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      '@context': 'https://schema.org', '@type': 'Service', name: content.title,
      description: content.intro, url: `${SITE_URL}${content.path}`,
      provider: { '@type': 'Organization', name: 'Hexa', url: SITE_URL },
      serviceType: 'Finance and accounting support',
    }).replace(/</g, '\u003c') }} />
  </>;
}
