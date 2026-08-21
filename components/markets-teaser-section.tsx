import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const depthMarkets = [
  { name: 'Malaysia', reg: 'LHDN · SSM' },
  { name: 'Singapore', reg: 'ACRA · IRAS' },
  { name: 'Australia', reg: 'ATO · ASIC' },
  { name: 'Indonesia', reg: 'DJP' },
];

export default function MarketsTeaserSection() {
  return (
    <section className="py-24 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <p className="eyebrow mb-4">Depth, not a country list</p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 mb-5">
            Four markets in depth. Eleven supported.
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We handle the statutory calendar, the filings, and the reporting standard in each. Other
            jurisdictions are supported on request.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {depthMarkets.map((market) => (
            <div key={market.name} className="border border-gray-200 rounded-xl p-5">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">{market.name}</h3>
              <p className="text-xs font-semibold text-[#E6007E] tracking-wide">{market.reg}</p>
            </div>
          ))}
        </div>
        <Link href="/markets" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-[#E6007E] transition-colors">
          See all markets we support <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
