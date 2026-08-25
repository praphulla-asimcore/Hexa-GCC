'use client';

import { Download, ArrowRight, Calendar } from 'lucide-react';
import Image from 'next/image';
import { markets, HEXA_PRICE_USD, TIER_LABELS } from '@/lib/cost-calculator-data';

const BOOKING_URL = 'https://www.hnpl.business/call';

const preparedDate = new Date().toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

const rows = markets.flatMap((market) =>
  market.tiers.map((tier) => {
    const hexaUsd = HEXA_PRICE_USD[tier.key];
    const saved = tier.fullyLoadedLocalUsd - hexaUsd;
    const pct = (saved / tier.fullyLoadedLocalUsd) * 100;
    return { market, tier, hexaUsd, saved, pct };
  })
);

export default function CostComparisonDocument() {
  return (
    <section className="py-16 bg-white print:py-0">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 mb-10 print:hidden">
          <a
            href="/resources"
            className="text-sm font-semibold text-gray-500 hover:text-[#E6007E] transition-colors"
          >
            ← Resources
          </a>
          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 px-5 py-2.5 gradient-bg text-white text-sm font-semibold rounded-full hover:opacity-90 transition-opacity"
          >
            <Download className="w-4 h-4" />
            Download PDF
          </button>
        </div>

        <div className="flex items-center justify-between gap-6 border-b border-gray-200 pb-8 mb-10">
          <div className="relative w-32 h-10">
            <Image src="/logo.png" alt="Hexa" fill className="object-contain object-left" />
          </div>
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 text-right">
            Prepared {preparedDate}
          </p>
        </div>

        <p className="eyebrow mb-3">Cost comparison model</p>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 mb-5">
          What an embedded Hexa hire costs against a local hire, market by market.
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mb-10">
          Finance roles, priced against real 2026 salary benchmarks in each market and compared to Hexa's
          actual quoted all-in price for the same tier, delivered from our Nepal centre.
        </p>

        <div className="grid sm:grid-cols-3 gap-4 mb-10 print:grid-cols-3">
          {(Object.keys(TIER_LABELS) as Array<keyof typeof TIER_LABELS>).map((key) => (
            <div key={key} className="border border-gray-200 rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">{TIER_LABELS[key]}</p>
              <p className="text-2xl font-semibold text-gray-900 tabular-nums">${HEXA_PRICE_USD[key].toLocaleString()}<span className="text-sm text-gray-400 font-normal">/mo all-in</span></p>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-500 mb-12 max-w-2xl">
          Hexa's price is quoted, all-in: office space, management fee and salary for a Nepal-delivered
          resource, converted to USD. It does not change by market.
        </p>

        <div className="overflow-x-auto border border-gray-200 rounded-xl mb-6 print:overflow-visible print:border-0">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left font-semibold text-gray-500 uppercase tracking-wider text-xs px-4 py-3">Market</th>
                <th className="text-left font-semibold text-gray-500 uppercase tracking-wider text-xs px-4 py-3">Tier</th>
                <th className="text-right font-semibold text-gray-500 uppercase tracking-wider text-xs px-4 py-3">Local, fully-loaded</th>
                <th className="text-right font-semibold text-gray-500 uppercase tracking-wider text-xs px-4 py-3">Hexa, all-in</th>
                <th className="text-right font-semibold text-gray-500 uppercase tracking-wider text-xs px-4 py-3">You save</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(({ market, tier, hexaUsd, saved, pct }) => (
                <tr key={`${market.code}-${tier.key}`} className="border-b border-gray-100 last:border-0">
                  <td className="px-4 py-3 font-medium text-gray-900">{market.name}</td>
                  <td className="px-4 py-3 text-gray-600">{tier.label}</td>
                  <td className="px-4 py-3 text-right tabular-nums text-gray-600">${tier.fullyLoadedLocalUsd.toLocaleString()}/mo</td>
                  <td className="px-4 py-3 text-right tabular-nums text-gray-600">${hexaUsd.toLocaleString()}/mo</td>
                  <td className="px-4 py-3 text-right tabular-nums font-semibold text-[#E6007E]">
                    {pct.toFixed(0)}% · ${saved.toLocaleString()}/mo
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-xs text-gray-400 mb-14 max-w-2xl">
          "Local, fully-loaded" = published market salary + statutory employer contributions + a standard
          15% office/HR/recruitment overhead allowance, in that market. Only the markets and tiers shown here
          are ones where Hexa's price is genuinely lower — we don't show a market or tier where it isn't.
          Full sourcing and methodology available on request.
        </p>

        <div className="print:hidden bg-[#080818] text-white rounded-2xl p-8 sm:p-10 flex flex-col sm:flex-row sm:items-center gap-6 justify-between">
          <div>
            <h2 className="text-xl font-semibold mb-1">Want this run against your exact headcount?</h2>
            <p className="text-white/60 text-sm">Use the interactive calculator, or get a scoped quote on a call.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <a
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-white/20 text-white font-semibold rounded-full hover:bg-white/5 transition-colors whitespace-nowrap"
            >
              Open calculator
            </a>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-bg inline-flex items-center justify-center gap-2 px-6 py-3.5 text-white font-semibold rounded-full hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              <Calendar className="w-4 h-4" />
              Book a call
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
