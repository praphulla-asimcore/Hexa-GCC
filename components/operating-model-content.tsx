'use client';

import { motion } from 'framer-motion';
import { Search, Puzzle, Eye, PlayCircle, LifeBuoy, Users, AlertTriangle, Calendar } from 'lucide-react';
import OperatingModelChassis from './operating-model-chassis';

const stages = [
  { icon: Search, when: 'Days 1-3', title: 'Discovery & process mapping', description: 'We map your business objective, current systems, country requirements, and success measures.' },
  { icon: Puzzle, when: 'Days 4-7', title: 'Pod assembly & SOP capture', description: 'The right specialists, lead, and workflows are assembled. Standard operating procedures are documented against your existing process.' },
  { icon: Eye, when: 'Days 8-11', title: 'Shadow & reverse-shadow', description: 'Your team observes ours, then ours observes yours — the handoff runs both directions before anything goes live.' },
  { icon: PlayCircle, when: 'Days 12-15', title: 'Go-live', description: 'The pod begins operating with defined milestones, named ownership, and direct communication channels.' },
  { icon: LifeBuoy, when: 'Ongoing', title: 'Hypercare & continuous improvement', description: 'Heightened review in the first weeks post go-live, then a standard monthly/quarterly review cadence.' },
];

const governanceCadence = [
  { cadence: 'Weekly', activity: 'Operations call with the named account lead' },
  { cadence: 'Monthly', activity: 'Service review against SLAs and KPIs' },
  { cadence: 'Quarterly', activity: 'Business review with escalation path and scope-expansion discussion' },
];

export default function OperatingModelContent() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#17171a] text-white py-28 lg:py-32">
        <div className="absolute inset-0 grid-paper opacity-70" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#E6007E] text-xs font-semibold uppercase tracking-[.16em] mb-7">How We Run It</p>
          <h1 className="text-5xl sm:text-6xl leading-[.98] tracking-[-.04em] font-semibold mb-6">The operating model behind every tower.</h1>
          <p className="text-lg text-white/65 max-w-2xl mx-auto leading-relaxed">
            Same transition process, same governance, same controls — whichever tower you start in.
          </p>
        </div>
      </section>

      {/* Transition timeline */}
      <section className="py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <p className="eyebrow mb-4">Transition methodology</p>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 mb-5">Live in 15 days from signing.</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              A realistic stage-by-stage timeline for a typical finance or people-ops transition.
            </p>
          </div>
          <div className="space-y-6">
            {stages.map((stage, index) => {
              const Icon = stage.icon;
              return (
                <motion.div
                  key={stage.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.08 }}
                  className="flex gap-5 bg-gray-50 border border-gray-200 rounded-2xl p-6"
                >
                  <div className="w-11 h-11 gradient-bg rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#E6007E] uppercase tracking-wider mb-1">{stage.when}</p>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{stage.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{stage.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Governance cadence */}
      <section className="py-28 bg-[#f6f3ef]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-6 h-6 text-[#E6007E]" />
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">Governance cadence</h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6">
              A named account lead owns your engagement. Escalation runs through a clear matrix, not a
              generic support queue.
            </p>
            <div className="space-y-3">
              {governanceCadence.map((row) => (
                <div key={row.cadence} className="flex items-start gap-3 bg-white border border-gray-200 rounded-xl p-4">
                  <Calendar className="w-4 h-4 text-[#E6007E] flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold text-gray-900">{row.cadence}: </span>
                    <span className="text-gray-700 text-sm">{row.activity}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl p-8">
            <AlertTriangle className="w-6 h-6 text-amber-500 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Escalation matrix</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Named account lead → engagement manager → tower lead. Every escalation is logged with an
              audit trail and a documented resolution.
            </p>
          </div>
        </div>
      </section>

      {/* Full chassis */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <p className="eyebrow mb-4">The Hexa Operating Model</p>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 mb-5">
              Common to every tower, every engagement.
            </h2>
          </div>
          <OperatingModelChassis />
        </div>
      </section>
    </>
  );
}
