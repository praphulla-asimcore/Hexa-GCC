'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Braces, CheckCircle, Cloud, Code2, Database, GitBranch, ShieldCheck, Smartphone, TestTube2 } from 'lucide-react';

const capabilities = [
  { icon: Code2, title: 'Product Engineering', description: 'Web applications, mobile experiences, internal platforms, and integrations built around your roadmap.' },
  { icon: TestTube2, title: 'Quality Engineering', description: 'Manual and automated testing, release validation, regression coverage, and QA ownership.' },
  { icon: Cloud, title: 'Cloud & DevOps', description: 'Deployment pipelines, observability, infrastructure support, and dependable release operations.' },
  { icon: Database, title: 'Data & Automation', description: 'Operational dashboards, workflow automation, reporting systems, and practical AI integration.' },
];

const deliverySteps = [
  ['01', 'Understand the product', 'We map the business objective, users, current systems, and delivery constraints.'],
  ['02', 'Assemble the pod', 'A delivery lead and specialized engineers are matched to the work, tools, and pace.'],
  ['03', 'Ship with confidence', 'Clear milestones, QA gates, documentation, and regular stakeholder visibility keep delivery accountable.'],
];

export default function TechnologyDeliverySection() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#17171a] text-white py-28 lg:py-36">
        <div className="absolute inset-0 grid-paper opacity-70" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-[#6ea8ff] text-xs font-semibold uppercase tracking-[.16em] mb-7">Hexa Technology Delivery</p>
            <h1 className="text-5xl sm:text-6xl lg:text-[5.5rem] leading-[.95] tracking-[-.04em] font-semibold mb-8">Build the digital layer your business depends on.</h1>
            <p className="text-lg sm:text-xl text-white/65 max-w-2xl leading-relaxed mb-10">Structured technology pods for companies that need to build, improve, assure, and operate digital products without the hiring bottleneck.</p>
            <a href="#technology-contact" className="inline-flex items-center gap-2 bg-[#3b82f6] px-7 py-4 rounded-full font-semibold hover:bg-[#2563eb] transition-colors">Discuss a technology requirement <ArrowRight className="w-5 h-5" /></a>
          </div>
          <div className="grid sm:grid-cols-3 gap-px bg-white/15 border border-white/15 mt-20 max-w-4xl">
            {['Roadmap-aligned pods', 'Senior delivery ownership', 'Documented, measurable releases'].map((item) => <div key={item} className="bg-[#242427] p-5 text-sm text-white/75"><CheckCircle className="w-4 h-4 text-[#6ea8ff] mb-7" />{item}</div>)}
          </div>
        </div>
      </section>

      <section className="py-28 bg-[#f6f3ef]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14"><p className="eyebrow mb-4">What we deliver</p><h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900 mb-5">Technology capacity that operates like part of your business.</h2><p className="text-lg text-gray-600 leading-relaxed">You bring the context and priorities. Hexa brings the delivery structure, technical talent, and operating discipline to move work from requirement to reliable release.</p></div>
          <div className="grid md:grid-cols-2 gap-px bg-[#d9d4ce] border border-[#d9d4ce]">
            {capabilities.map((item) => { const Icon = item.icon; return <div key={item.title} className="bg-[#f6f3ef] p-8 hover:bg-white transition-colors"><div className="w-11 h-11 bg-[#17171a] flex items-center justify-center mb-8"><Icon className="w-5 h-5 text-white" /></div><h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3><p className="text-gray-600 leading-relaxed">{item.description}</p></div>; })}
          </div>
        </div>
      </section>

      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[.75fr_1.25fr] gap-16">
          <div><p className="eyebrow mb-4">Our delivery model</p><h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900">A pod built around outcomes, not headcount.</h2></div>
          <div className="space-y-px bg-[#ded9d3] border border-[#ded9d3]">{deliverySteps.map(([number, title, description]) => <div key={number} className="bg-white p-7 grid sm:grid-cols-[60px_1fr] gap-5"><span className="text-[#3b82f6] font-semibold">{number}</span><div><h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3><p className="text-gray-600 leading-relaxed">{description}</p></div></div>)}</div>
        </div>
      </section>

      <section id="technology-contact" className="py-24 bg-[#17171a] text-white"><div className="max-w-4xl mx-auto px-4 text-center"><Braces className="w-8 h-8 text-[#6ea8ff] mx-auto mb-6" /><h2 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-5">Have a product, platform, or delivery gap to solve?</h2><p className="text-white/60 text-lg mb-8">Bring us the requirement. We will help shape the right delivery pod and operating model.</p><a href="mailto:praphulla@hexamatics.com?subject=Technology%20delivery%20requirement" className="inline-flex items-center gap-2 bg-[#3b82f6] px-7 py-4 rounded-full font-semibold hover:bg-[#2563eb] transition-colors">Start a conversation <ArrowRight className="w-5 h-5" /></a></div></section>
    </>
  );
}
