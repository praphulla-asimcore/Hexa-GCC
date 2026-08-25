'use client';

import { useId, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X, Calendar, ArrowRight, Info } from 'lucide-react';
import TiltCard from '@/components/tilt-card';
import { markets, HEXA_PRICE_USD, type TierKey } from '@/lib/cost-calculator-data';

const BOOKING_URL = 'https://www.hnpl.business/call';

interface Line {
  id: string;
  countryCode: string;
  tier: TierKey;
  headcount: number;
}

function newLine(id: string): Line {
  const first = markets[0];
  return { id, countryCode: first.code, tier: first.tiers[0].key, headcount: 1 };
}

export default function CostCalculatorSection() {
  // The first line's id must be deterministic (stable across server render and client
  // hydration); ids for lines added afterwards are client-only, so randomness is safe there.
  const [lines, setLines] = useState<Line[]>(() => [newLine('line-initial')]);
  const idBase = useId();

  function updateLine(id: string, patch: Partial<Line>) {
    setLines((prev) =>
      prev.map((line) => {
        if (line.id !== id) return line;
        const next = { ...line, ...patch };
        // If country changed and the current tier isn't offered there, fall back to the first available tier.
        const market = markets.find((m) => m.code === next.countryCode);
        if (market && !market.tiers.some((t) => t.key === next.tier)) {
          next.tier = market.tiers[0].key;
        }
        return next;
      })
    );
  }

  function addLine() {
    setLines((prev) => [...prev, newLine(Math.random().toString(36).slice(2))]);
  }

  function removeLine(id: string) {
    setLines((prev) => (prev.length > 1 ? prev.filter((l) => l.id !== id) : prev));
  }

  const rows = lines.map((line) => {
    const market = markets.find((m) => m.code === line.countryCode)!;
    const tierOption = market.tiers.find((t) => t.key === line.tier)!;
    const hexaMonthly = HEXA_PRICE_USD[line.tier] * line.headcount;
    const localMonthly = tierOption.fullyLoadedLocalUsd * line.headcount;
    return { line, market, tierOption, hexaMonthly, localMonthly };
  });

  const totalHexa = rows.reduce((sum, r) => sum + r.hexaMonthly, 0);
  const totalLocal = rows.reduce((sum, r) => sum + r.localMonthly, 0);
  const totalSaved = totalLocal - totalHexa;
  const pctSaved = totalLocal > 0 ? (totalSaved / totalLocal) * 100 : 0;

  return (
    <section className="py-24 bg-[#f7f7fa] border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <p className="eyebrow mb-4">Cost per hire</p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 mb-5">
            See what a hire actually costs, market by market.
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Finance roles, priced against real 2026 salary benchmarks in each market — compared to Hexa's
            all-in monthly price for the same tier, delivered from our Kathmandu centre.
          </p>
        </div>

        <div className="space-y-3 mb-6">
          <AnimatePresence initial={false}>
            {rows.map(({ line, market, tierOption, hexaMonthly, localMonthly }, index) => (
              <motion.div
                key={line.id}
                layout
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                transition={{ duration: 0.25 }}
              >
                <TiltCard className="bg-white border border-gray-200 rounded-2xl p-5">
                  <div className="grid sm:grid-cols-[1.2fr_1.6fr_auto_auto] gap-3 items-end">
                    <div>
                      <label htmlFor={`${idBase}-country-${line.id}`} className="block text-xs font-semibold text-gray-500 mb-1.5">
                        Country
                      </label>
                      <select
                        id={`${idBase}-country-${line.id}`}
                        value={line.countryCode}
                        onChange={(e) => updateLine(line.id, { countryCode: e.target.value })}
                        className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#E6007E]/30 focus:border-[#E6007E]"
                      >
                        {markets.map((m) => (
                          <option key={m.code} value={m.code}>{m.name}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor={`${idBase}-tier-${line.id}`} className="block text-xs font-semibold text-gray-500 mb-1.5">
                        Tier
                      </label>
                      <select
                        id={`${idBase}-tier-${line.id}`}
                        value={line.tier}
                        onChange={(e) => updateLine(line.id, { tier: e.target.value as TierKey })}
                        className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#E6007E]/30 focus:border-[#E6007E]"
                      >
                        {market.tiers.map((t) => (
                          <option key={t.key} value={t.key}>{t.label}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor={`${idBase}-count-${line.id}`} className="block text-xs font-semibold text-gray-500 mb-1.5">
                        Resources
                      </label>
                      <input
                        id={`${idBase}-count-${line.id}`}
                        type="number"
                        min={1}
                        value={line.headcount}
                        onChange={(e) => updateLine(line.id, { headcount: Math.max(1, parseInt(e.target.value, 10) || 1) })}
                        className="w-20 border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#E6007E]/30 focus:border-[#E6007E]"
                      />
                    </div>
                    <button
                      type="button"
                      onClick={() => removeLine(line.id)}
                      disabled={lines.length === 1}
                      aria-label="Remove line"
                      className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 text-gray-400 hover:text-[#E6007E] hover:border-[#E6007E]/40 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-1 mt-4 pt-4 border-t border-gray-100 text-sm">
                    <span className="text-gray-500">
                      Local fully-loaded: <span className="font-semibold text-gray-900">${localMonthly.toLocaleString()}/mo</span>
                    </span>
                    <span className="text-gray-500">
                      Hexa price: <span className="font-semibold text-gray-900">${hexaMonthly.toLocaleString()}/mo</span>
                    </span>
                    <span className="text-[#E6007E] font-semibold">
                      Saves ${(localMonthly - hexaMonthly).toLocaleString()}/mo
                    </span>
                    <span className="text-xs text-gray-400 ml-auto">Source: {market.source}</span>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <button
          type="button"
          onClick={addLine}
          className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 border border-dashed border-gray-300 rounded-lg px-4 py-2.5 hover:border-[#E6007E]/40 hover:text-[#E6007E] transition-colors mb-10"
        >
          <Plus className="w-4 h-4" />
          Add a line
        </button>

        <TiltCard glareColor="rgba(230,0,126,0.14)" className="bg-[#080818] text-white rounded-2xl p-8 sm:p-10">
          <div className="grid sm:grid-cols-3 gap-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-white/50 mb-2">Local, fully-loaded</p>
              <p className="text-3xl font-semibold tabular-nums">${totalLocal.toLocaleString()}<span className="text-base text-white/50">/mo</span></p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-white/50 mb-2">Hexa, all-in</p>
              <p className="text-3xl font-semibold tabular-nums">${totalHexa.toLocaleString()}<span className="text-base text-white/50">/mo</span></p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#E6007E] mb-2">You save</p>
              <p className="text-3xl font-semibold tabular-nums text-[#E6007E]">
                {pctSaved.toFixed(0)}%
                <span className="text-base text-white/50"> · ${totalSaved.toLocaleString()}/mo</span>
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-8 pt-8 border-t border-white/10">
            <p className="text-sm text-white/50 flex items-start gap-2 flex-1">
              <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
              Finance roles, phase one. Indicative — get a scoped quote for your exact requirement.
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-bg inline-flex items-center justify-center gap-2 px-6 py-3.5 text-white font-semibold rounded-full hover:bg-[#b80065] transition-colors whitespace-nowrap"
            >
              <Calendar className="w-4 h-4" />
              Get this in writing
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </TiltCard>

        <p className="text-xs text-gray-400 mt-6 max-w-2xl">
          "Local, fully-loaded" = published market salary + statutory employer contributions + a standard
          15% office/HR/recruitment overhead allowance, in that market. Only the markets and tiers shown here
          are ones where Hexa's Nepal-delivered price is genuinely lower — we don't show a market or tier
          where it isn't.
        </p>
      </div>
    </section>
  );
}
