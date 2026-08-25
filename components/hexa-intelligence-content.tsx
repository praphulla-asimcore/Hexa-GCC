'use client';

import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Wallet, LineChart, ShieldCheck, ScrollText, MessagesSquare, Gauge, Cpu } from 'lucide-react';
import TiltCard from '@/components/tilt-card';

const BOOKING_URL = 'https://www.hnpl.business/call';

const products = [
  {
    icon: Wallet,
    name: 'APEX',
    tagline: 'Payroll & consultant-payment processing',
    description: 'A web-based payroll and consultant-payment processing platform for a Malaysian EOR/consulting operation. It takes a monthly payroll or CSI spreadsheet and drives it all the way through validation, approval, accounting, statutory filing, and bank payment, with a full audit trail.',
  },
  {
    icon: LineChart,
    name: 'HexaInsights',
    tagline: 'Multi-entity financial reporting',
    description: 'Multi-entity P&L, balance sheet, cash flow, accounts receivable ageing, and CFO-grade executive summaries. IAS 21 compliant.',
  },
  {
    icon: ScrollText,
    name: 'HexaComply',
    tagline: 'Compliance tracking across entities',
    description: 'Centralised compliance tracking, document management, deadline monitoring, and audit-ready reporting across all group entities.',
  },
  {
    icon: ShieldCheck,
    name: 'Hexa SmartLedger',
    tagline: 'AI journal entry audit for Zoho Books',
    description: 'AI-powered journal entry auditor for Zoho Books. Detects anomalies, duplicates, and risks in seconds.',
  },
  {
    icon: MessagesSquare,
    name: 'HexaCoPilot',
    tagline: 'Accounting assistant',
    description: 'An accounting assistant that answers organisational accounting and finance questions directly, trained on your own books and policies.',
  },
];

export default function HexaIntelligenceContent() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#080818] text-white py-24 lg:py-28">
        <div
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-[0.14] blur-[130px] pointer-events-none"
          style={{ background: 'radial-gradient(circle, #E6007E, transparent 70%)' }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative w-16 h-16 mx-auto mb-8"
          >
            <motion.div
              animate={{ scale: [1, 1.35, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-0 rounded-full border border-[#E6007E]/40"
            />
            <div className="relative w-16 h-16 rounded-full bg-white/5 border border-white/15 flex items-center justify-center">
              <Cpu className="w-7 h-7 text-[#E6007E]" />
            </div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[#E6007E] text-xs font-semibold uppercase tracking-[.16em] mb-6"
          >
            Built in-house
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl sm:text-5xl leading-[1.05] font-semibold mb-6"
          >
            Hexa Intelligence
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-white/65 max-w-2xl mx-auto leading-relaxed"
          >
            Our own business intelligence and automation platform, built internally and running in production
            across every centre. Not a demo, not a slide — software our own teams depend on every day.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="inline-flex items-center gap-2 mt-8 text-sm text-white/75 border border-white/15 rounded-full px-5 py-2.5"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E6007E] opacity-60" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#E6007E]" />
            </span>
            <Gauge className="w-4 h-4 text-[#E6007E]" />
            99.9% platform uptime across all five products
          </motion.div>
        </div>
      </section>

      {/* Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="eyebrow mb-4">The platform</p>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 mb-5">
              Five systems, one platform.
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Each one built to solve a real, recurring problem inside our own delivery centres, then
              hardened into production software.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => {
              const Icon = product.icon;
              return (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.08 }}
                >
                  <TiltCard className="h-full bg-gray-50 border border-gray-200 rounded-2xl p-7 hover:border-[#E6007E]/40 transition-colors">
                    <div className="w-11 h-11 bg-[#080818] rounded-xl flex items-center justify-center mb-5">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1.5">{product.name}</h3>
                    <p className="text-xs font-semibold text-[#E6007E] tracking-wide uppercase mb-3">{product.tagline}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
                  </TiltCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* When it's introduced */}
      <section className="py-20 bg-[#f7f7fa]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="eyebrow mb-4">How this fits your engagement</p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 mb-6">
            Introduced once the fundamentals are running, not on day one.
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Hexa Intelligence is not part of the initial build. Once your team is embedded and the core
            workflow is stable — typically around the third month of an engagement — we walk you through
            which of these tools fit your operation and bring them into your workflow.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            For clients who want their own version, we can also build an equivalent platform in-house for
            your organisation, using the same engineering team that built these five.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900 mb-6">
            See Hexa Intelligence in a working engagement.
          </h2>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-bg inline-flex items-center gap-2 px-7 py-4 text-white font-semibold rounded-full hover:bg-[#b80065] transition-colors"
          >
            <Calendar className="w-5 h-5" />
            Book a 20-minute consultation
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </>
  );
}
