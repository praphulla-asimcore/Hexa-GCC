const shots = [
  { title: 'Anomaly flagging', description: 'Unusual entries surfaced for review before posting.' },
  { title: 'Deadline tracking', description: 'Every statutory date across every entity, in one calendar.' },
  { title: 'Reconciliation matching', description: 'Automated matching with exceptions routed to a reviewer.' },
];

export default function IntelligenceLayerSection() {
  return (
    <section className="py-24 bg-[#080818] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[.14em] text-[#E6007E] mb-5">The Hexa intelligence layer</p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight max-w-2xl mb-5">
          The system suggests. Humans review, approve, and sign off.
        </h2>
        <p className="text-white/65 text-lg max-w-3xl leading-relaxed">
          Anomaly flagging, deadline tracking, reconciliation matching and ticket triage run across all
          three centres. Every judgement is reviewed and signed off by a named, qualified professional.
          The intelligence layer is one documented component of the operating model, not a separate product.
        </p>
        <div className="grid md:grid-cols-3 gap-5 mt-12">
          {shots.map((shot) => (
            <div key={shot.title} className="border border-white/15 rounded-xl overflow-hidden">
              <div className="h-32 bg-[#0f0f24] border-b border-white/15 flex items-center justify-center">
                <span className="text-[11px] uppercase tracking-[.1em] text-white/35">Screenshot pending</span>
              </div>
              <div className="p-5">
                <h4 className="font-semibold mb-2">{shot.title}</h4>
                <p className="text-sm text-white/50">{shot.description}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-8 text-white/65 border-l-2 border-[#E6007E] pl-4 max-w-2xl">
          Measured impact per client, e.g. exception review time before and after, is published once the
          relevant client data is available for a case study.
        </p>
      </div>
    </section>
  );
}
