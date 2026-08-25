'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Landmark, Receipt, Wallet, FileCheck2, Calendar, ArrowRight } from 'lucide-react';
import { markets } from '@/lib/markets-data';
import TiltCard from '@/components/tilt-card';

const BOOKING_URL = 'https://www.hnpl.business/call';

const detailBlocks = [
  { key: 'regulators' as const, label: 'Regulators & compliance bodies', icon: Landmark },
  { key: 'taxation' as const, label: 'Taxation & statutory filings', icon: Receipt },
  { key: 'financePayroll' as const, label: 'Finance & payroll operations', icon: Wallet },
];

export default function MarketsExplorer() {
  const [activeCode, setActiveCode] = useState(markets[0].code);
  const active = markets.find((m) => m.code === activeCode) ?? markets[0];
  const activeIndex = markets.findIndex((m) => m.code === active.code);

  return (
    <section className="relative overflow-hidden bg-[#0c0c14] text-white py-24 lg:py-28">
      <div
        className="absolute -top-40 right-0 w-[560px] h-[560px] rounded-full opacity-[0.12] blur-[120px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #E6007E, transparent 70%)' }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <p className="eyebrow mb-4">Work we already do</p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-5">
            These are not markets we could cover. They are markets we close books in.
          </h2>
          <p className="text-lg text-white/65 leading-relaxed">
            In each one below, our own teams keep the ledgers, prepare the workpapers and meet the filing
            calendar, in house, on live client entities. Select any market to see exactly what we handle
            there. Nothing here is subcontracted and nothing is aspirational.
          </p>
        </div>

        <div className="grid lg:grid-cols-[360px_1fr] gap-6">
          {/* Country list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2 lg:max-h-[560px] lg:overflow-y-auto lg:pr-2">
            {markets.map((market, i) => {
              const isActive = market.code === activeCode;
              return (
                <button
                  key={market.code}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveCode(market.code)}
                  className="group relative flex items-center gap-3 rounded-xl px-4 py-3.5 text-left"
                >
                  {isActive && (
                    <motion.div
                      layoutId="market-highlight"
                      className="absolute inset-0 rounded-xl bg-white/10 border border-[#E6007E]/60"
                      transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                    />
                  )}
                  <span
                    className={`absolute inset-0 rounded-xl border transition-colors ${
                      isActive ? 'border-transparent' : 'border-white/10 group-hover:border-white/20 group-hover:bg-white/[0.04]'
                    }`}
                  />
                  <span
                    className={`relative flex items-center justify-center w-9 h-9 shrink-0 rounded-lg text-[11px] font-bold tracking-wide transition-colors ${
                      isActive
                        ? 'bg-[#E6007E]/15 border border-[#E6007E]/50 text-white'
                        : 'bg-white/5 border border-white/10 text-white/60'
                    }`}
                  >
                    {market.code}
                  </span>
                  <span className={`relative text-sm font-medium ${isActive ? 'text-white' : 'text-white/75'}`}>
                    {market.name}
                  </span>
                  <span
                    className={`relative ml-auto text-[11px] font-semibold tabular-nums ${
                      isActive ? 'text-[#E6007E]' : 'text-white/25'
                    }`}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Detail panel */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.code}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
              >
              <TiltCard glareColor="rgba(230,0,126,0.18)" className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
                <div className="flex items-center gap-4 mb-8">
                  <span className="flex items-center justify-center w-14 h-14 rounded-xl bg-[#E6007E]/10 border border-[#E6007E]/30 text-sm font-bold tracking-wide text-white">
                    {active.code}
                  </span>
                  <div>
                    <h3 className="text-2xl font-semibold text-white">{active.name}</h3>
                    <p className="text-xs font-semibold text-[#E6007E] tracking-wide uppercase mt-1">
                      Market {activeIndex + 1} of {markets.length}
                    </p>
                  </div>
                </div>

                <div className="space-y-7">
                  {detailBlocks.map(({ key, label, icon: Icon }) => (
                    <div key={key}>
                      <div className="flex items-center gap-2 mb-3">
                        <Icon className="w-4 h-4 text-[#E6007E]" />
                        <p className="text-sm font-semibold text-white/90">{label}</p>
                      </div>
                      <ul className="flex flex-wrap gap-2">
                        {active[key].map((item) => (
                          <li
                            key={item}
                            className="text-sm text-white/70 bg-white/5 border border-white/10 rounded-lg px-3 py-1.5"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}

                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <FileCheck2 className="w-4 h-4 text-[#E6007E]" />
                      <p className="text-sm font-semibold text-white/90">Reporting standard — IFRS / local GAAP</p>
                    </div>
                    <p className="text-sm text-white/70 leading-relaxed">{active.standard}</p>
                  </div>
                </div>

                <div className="mt-8 flex gap-1.5">
                  {markets.map((m) => (
                    <button
                      key={m.code}
                      type="button"
                      aria-label={`Show ${m.name}`}
                      onClick={() => setActiveCode(m.code)}
                      className={`h-1 rounded-full transition-all ${
                        m.code === active.code ? 'w-6 bg-[#E6007E]' : 'w-3 bg-white/15 hover:bg-white/30'
                      }`}
                    />
                  ))}
                </div>
              </TiltCard>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Consultation CTA */}
        <div className="mt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 rounded-2xl border border-white/10 bg-white/[0.03] px-6 sm:px-8 py-8">
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">Need a capability beyond these 13 markets?</h3>
            <p className="text-white/65 text-sm max-w-xl">
              We scope new jurisdictions on request. Book a 20-minute consultation and we'll tell you
              exactly what's possible.
            </p>
          </div>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-bg px-7 py-4 text-white font-semibold rounded-full hover:bg-[#b80065] transition-colors flex items-center gap-2 w-full sm:w-auto justify-center shrink-0"
          >
            <Calendar className="w-5 h-5" />
            Book a 20-minute consultation
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
