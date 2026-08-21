'use client';

import { motion } from 'framer-motion';
import { Route, UserCheck, Clock, Lock, BrainCircuit, RefreshCw } from 'lucide-react';

export const chassisRows = [
  {
    icon: Route,
    title: 'Transition methodology',
    description: 'Discovery, process mapping, SOP capture, shadow and reverse-shadow, go-live, hypercare. Live in 15 days from contract signing.',
  },
  {
    icon: UserCheck,
    title: 'Governance model',
    description: 'Named account lead, clear escalation matrix, direct communication channels, cross-trained backup resources.',
  },
  {
    icon: Clock,
    title: 'SLA & KPI framework',
    description: 'Month-end close in 5-7 business days. Query response within 24 hours. Reconciliations on a weekly cadence.',
  },
  {
    icon: Lock,
    title: 'Security & controls',
    description: 'Work performed directly on client systems — data never leaves your environment. NDA-protected, least-privilege access, full audit trail.',
  },
  {
    icon: BrainCircuit,
    title: 'Intelligence layer',
    description: 'Anomaly flagging, deadline tracking, and automated reconciliation matching. System suggests; humans review, approve, and sign off.',
  },
  {
    icon: RefreshCw,
    title: 'Continuous improvement',
    description: 'Multi-layer review process, standardized templates and checklists, and an error-tracking log reviewed every quarter.',
  },
];

export default function OperatingModelChassis({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#ded9d3] border border-[#ded9d3]' : 'grid md:grid-cols-2 gap-px bg-[#ded9d3] border border-[#ded9d3]'}>
      {chassisRows.map((row, index) => {
        const Icon = row.icon;
        return (
          <motion.div
            key={row.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: index * 0.05 }}
            className="bg-white p-7"
          >
            <div className="w-10 h-10 bg-[#17171a] flex items-center justify-center mb-5">
              <Icon className="w-5 h-5 text-white" />
            </div>
            <h4 className="text-base font-semibold text-gray-900 mb-2">{row.title}</h4>
            <p className="text-gray-600 text-sm leading-relaxed">{row.description}</p>
          </motion.div>
        );
      })}
    </div>
  );
}
