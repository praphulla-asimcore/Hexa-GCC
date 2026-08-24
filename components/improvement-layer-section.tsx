import { Users, ClipboardCheck, Sparkles } from 'lucide-react';

const columns = [
  { icon: Users, title: 'Skilled people', description: 'Selected by you, employed by us, qualified for the discipline and the market they work in.' },
  { icon: ClipboardCheck, title: 'A better way of working', description: 'Documented playbooks, controls, reconciliation standards and QA for every process the team takes on.' },
  { icon: Sparkles, title: 'An automation plan', description: 'We set the team, let it run, then map what should not stay manual and advise you on the sequence.' },
];

const cycleItems = [
  'Baseline the work',
  'Identify automation',
  'Implement improvements',
  'Measure time saved',
  'Redeploy capacity to higher-value work',
];

export default function ImprovementLayerSection() {
  return (
    <section className="py-24 bg-[#080818] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[.14em] text-[#E6007E] mb-5">The improvement layer</p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight max-w-2xl mb-5">
          We do not just build the team. We improve how the function operates.
        </h2>
        <p className="text-white/65 text-lg max-w-3xl leading-relaxed">
          Anyone can supply people. What changes your numbers is the way the work is done. Every team
          arrives with playbooks, controls and checklists for the processes it runs, and an automation
          plan written against your actual volumes rather than a generic template.
        </p>

        <div className="grid md:grid-cols-3 gap-5 mt-12">
          {columns.map((column) => {
            const Icon = column.icon;
            return (
              <div key={column.title} className="border border-white/15 rounded-xl p-6">
                <Icon className="w-5 h-5 text-[#E6007E] mb-4" />
                <h4 className="font-semibold mb-2">{column.title}</h4>
                <p className="text-sm text-white/50 leading-relaxed">{column.description}</p>
              </div>
            );
          })}
        </div>

        <p className="mt-8 text-white/65 border-l-2 border-[#E6007E] pl-4 max-w-2xl">
          Every Hexa finance team includes an automation and intelligence layer. The technology centre
          builds it for the finance and people centres, so automation reaches the client rather than
          sitting in a separate service line.
        </p>

        <div className="mt-10 pt-7 border-t border-white/15">
          <span className="text-[11px] font-semibold uppercase tracking-[.14em] text-[#E6007E]">Every quarter</span>
          <div className="flex flex-wrap gap-2.5 mt-4">
            {cycleItems.map((item) => (
              <span key={item} className="text-sm text-white/80 border border-white/15 rounded px-3.5 py-2">
                {item}
              </span>
            ))}
          </div>
        </div>

        <p className="mt-6 text-white border-l-2 border-[#E6007E] pl-4 max-w-3xl">
          A traditional provider earns more when you need more people. We would rather your team absorbed
          more work without growing.
        </p>
      </div>
    </section>
  );
}
