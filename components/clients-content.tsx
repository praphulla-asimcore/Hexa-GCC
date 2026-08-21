import { FileText, Building2 } from 'lucide-react';

const currentClients = ['Guardware Australia', 'Seven Sunday Films', 'SBC Kudos', 'Time Energy Solar Emit'];

export default function ClientsContent() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#080818] text-white py-24 lg:py-28">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#E6007E] text-xs font-semibold uppercase tracking-[.16em] mb-6">Case studies</p>
          <h1 className="text-4xl sm:text-5xl leading-[1.05] font-semibold mb-6">Who we work with.</h1>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <p className="text-gray-500 text-sm uppercase tracking-wider mb-4">Current engagements</p>
          <div className="flex flex-wrap justify-center gap-3">
            {currentClients.map((client) => (
              <span key={client} className="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-4 py-2 text-sm font-medium text-gray-700">
                <Building2 className="w-3.5 h-3.5 text-[#E6007E]" />
                {client}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="border border-dashed border-gray-300 rounded-2xl p-8 text-center bg-white">
                <FileText className="w-6 h-6 text-gray-300 mx-auto mb-4" />
                <p className="text-sm text-gray-500">Case study {i} — pending.</p>
                <p className="text-xs text-gray-400 mt-2">Shape needed, ladder built, retention to date, what it replaced.</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-10">
            Two named references willing to take calls are worth more than the rest of this page combined —
            ask us directly during a consultation.
          </p>
        </div>
      </section>
    </>
  );
}
