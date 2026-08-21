import { FileText, Calendar, Calculator } from 'lucide-react';

const resources = [
  { icon: FileText, title: 'The operating model', description: 'How a Hexa function becomes operational, stage by stage.' },
  { icon: Calendar, title: 'A market compliance calendar', description: 'Statutory filing dates for the markets we work in.' },
  { icon: Calculator, title: 'The cost comparison model', description: 'A downloadable model for comparing embedded-team cost against a local hire.' },
];

export default function ResourcesContent() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#080818] text-white py-24 lg:py-28">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#E6007E] text-xs font-semibold uppercase tracking-[.16em] mb-6">Resources</p>
          <h1 className="text-4xl sm:text-5xl leading-[1.05] font-semibold mb-6">Not ready to talk? Start here.</h1>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 mb-14">
            {resources.map((resource) => {
              const Icon = resource.icon;
              return (
                <div key={resource.title} className="border border-gray-200 rounded-2xl p-6">
                  <div className="w-11 h-11 gradient-bg rounded-xl flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{resource.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">Pending</span>
                </div>
              );
            })}
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 max-w-lg mx-auto text-center">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Get notified when they're ready</h2>
            <p className="text-gray-600 text-sm mb-6">Email address only — nothing else.</p>
            <a
              href="mailto:praphulla@hexamatics.com?subject=Resource%20access%20request"
              className="inline-flex items-center justify-center gap-2 w-full gradient-bg px-6 py-3 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              Email us for early access
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
