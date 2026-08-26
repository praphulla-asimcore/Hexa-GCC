'use client';

import { motion } from 'framer-motion';
import { CheckCircle, ShieldCheck, LucideIcon } from 'lucide-react';
import TiltCard from '@/components/tilt-card';
import SectionHero from '@/components/section-hero';
import ProcessSection, { ProcessStep } from '@/components/process-section';
import LeadForm from '@/components/lead-form';

export interface InMarketPageTemplateProps {
  eyebrow: string;
  title: string;
  tagline: string;
  covered: string[];
  whoItSuits: { title: string; description: string }[];
  whatYouKeep: string;
  steps: ProcessStep[];
  markets: string;
}

export default function InMarketPageTemplate({
  eyebrow,
  title,
  tagline,
  covered,
  whoItSuits,
  whatYouKeep,
  steps,
  markets,
}: InMarketPageTemplateProps) {
  return (
    <>
      <SectionHero eyebrow={eyebrow} title={title} tagline={tagline} />

      {/* What it covers */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-8">What it covers</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {covered.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <TiltCard className="flex items-start gap-2 text-gray-700 bg-gray-50 rounded-lg p-4 h-full hover:bg-gray-100 transition-colors">
                  <CheckCircle className="w-4 h-4 text-[#E6007E] flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{item}</span>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it suits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-8">Who it suits</h2>
          <div className="space-y-3">
            {whoItSuits.map((situation, index) => (
              <motion.div
                key={situation.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.06 }}
              >
                <TiltCard className="bg-white border border-gray-200 rounded-xl p-5 hover:border-[#E6007E]/40 transition-colors">
                  <span className="font-semibold text-gray-900">{situation.title}</span>
                  <p className="text-gray-600 text-sm mt-1">{situation.description}</p>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What you keep */}
      <section className="relative overflow-hidden py-20 bg-[#080818] text-white">
        <div
          className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[480px] h-[480px] rounded-full opacity-[0.13] blur-[130px] pointer-events-none"
          style={{ background: 'radial-gradient(circle, #E6007E, transparent 70%)' }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <ShieldCheck className="w-6 h-6 text-[#E6007E]" />
            <h2 className="text-2xl sm:text-3xl font-semibold">What you keep</h2>
          </div>
          <p className="text-lg text-white/75 leading-relaxed border-l-2 border-[#E6007E] pl-4 max-w-2xl">
            {whatYouKeep}
          </p>
        </div>
      </section>

      {/* How it starts */}
      <ProcessSection
        heading="How it starts"
        subheading="A published sequence, not an open-ended search."
        steps={steps}
        tools={null}
      />

      {/* Markets */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Markets</h2>
          <p className="text-gray-700 leading-relaxed max-w-2xl">{markets}</p>
        </div>
      </section>

      <LeadForm />
    </>
  );
}
