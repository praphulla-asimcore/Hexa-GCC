import Link from 'next/link';
import { ArrowUpRight, BrainCircuit, CheckCircle, ScanSearch } from 'lucide-react';

const signals = ['Review unusual entries', 'Track country deadlines', 'Keep an audit trail'];

export default function IntelligenceTeaserSection() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-14 items-center">
          <div>
            <p className="eyebrow mb-4">Finance Intelligence™</p>
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900 mb-5">The intelligence layer behind the finance team.</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">Hexa combines country playbooks, workflow controls, and practical automation with human review. The system helps the team move faster; accountable professionals make the decisions.</p>
            <Link href="/finance-intelligence" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-[#E6007E] transition-colors">Explore Finance Intelligence <ArrowUpRight className="w-4 h-4" /></Link>
          </div>
          <div className="bg-[#f6f3ef] border border-[#ded9d3] p-7 sm:p-9">
            <div className="flex items-center justify-between border-b border-[#ded9d3] pb-5 mb-6"><div className="flex items-center gap-3"><div className="w-10 h-10 bg-[#17171a] flex items-center justify-center"><BrainCircuit className="w-5 h-5 text-white" /></div><div><p className="text-xs font-semibold text-gray-900">Human-led intelligence</p><p className="text-xs text-gray-500 mt-1">Embedded in delivery</p></div></div><ScanSearch className="w-5 h-5 text-[#E6007E]" /></div>
            <div className="space-y-3">{signals.map((signal) => <div key={signal} className="flex items-center gap-3 bg-white border border-[#ded9d3] p-4 text-sm text-gray-700"><CheckCircle className="w-4 h-4 text-[#E6007E]" />{signal}<span className="ml-auto text-[10px] uppercase tracking-wider text-gray-400">active</span></div>)}</div>
            <p className="text-xs text-gray-500 mt-6">System suggests. Humans review, approve, and sign off.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
