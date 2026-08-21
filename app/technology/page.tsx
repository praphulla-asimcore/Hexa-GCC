import { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/footer';
import StickyCTA from '@/components/sticky-cta';
import CentrePageTemplate from '@/components/centre-page-template';

export const metadata: Metadata = {
  title: 'Hexa Technology | Engineering, QA, Cloud and Data',
  description: 'A technology function assembled to your requirement — software engineers, QA, DevOps, cloud, and data specialists, employed by Hexa and directed by you.',
};

export default function TechnologyPage() {
  return (
    <main>
      <Header />
      <CentrePageTemplate
        eyebrow="Centre of excellence"
        title="A technology function, assembled to your requirement."
        tagline="Software engineers, QA, DevOps, cloud, and data specialists — named professionals, employed by us, directed by you, working in your codebase and your systems."
        covered={[
          'Software engineering, full-stack, backend and frontend',
          'Web and mobile engineering',
          'AI and machine learning engineering',
          'DevOps and cloud engineering',
          'QA and test engineering',
          'Data and automation engineering',
          'Application support',
        ]}
        rolesByTier={[
          { tier: 'Junior', role: 'Software engineer', description: 'Daily execution — feature development, bug fixes, first-line delivery.' },
          { tier: 'Mid', role: 'Senior engineer / team lead', description: 'Review, code quality, and technical supervision.' },
          { tier: 'Senior', role: 'Staff engineer / architect', description: 'Judgement on system design, exceptions, and escalation.' },
          { tier: 'Executive', role: 'Engineering director', description: 'Direction and stakeholder-facing technical leadership.' },
        ]}
        qualifications="Engineers certified across major cloud platforms and relevant engineering disciplines."
        systems={['React', 'Node.js', 'AWS', 'Your existing stack and tooling']}
        exampleTitle="A worked example"
        exampleDescription="A growing product team typically needs engineers at full-time execution, a lead reviewing and unblocking at a fraction of their time, an architect handling system-level decisions at a smaller fraction, and a director advising occasionally. We assemble that shape to your actual requirement."
      />
      <Footer />
      <StickyCTA />
    </main>
  );
}
