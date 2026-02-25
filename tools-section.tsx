'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ToolCard from './tool-card';

const tools = [
  {
    id: 1,
    name: 'Group Finance Dashboard',
    description: 'A real-time financial intelligence dashboard that automates data extraction from Zoho Books to provide instant visibility into KPIs, cash flow, and profitability without manual exporting.',
    icon: '/hexa-finance-icon.png',
    url: 'https://finance.hexasuite.site/',
    gradient: 'from-pink-500 to-rose-600',
  },
  {
    id: 2,
    name: 'Compliance Management System',
    description: 'An automated Compliance Tracking & Alert System designed to eliminate missed deadlines. It centralizes regulatory calendars and uses a trigger-based notification engine to ensure stakeholders file tax, legal, and statutory requirements on time.',
    icon: '/compliance-icon.png',
    url: 'https://compliance.hexasuite.site/',
    gradient: 'from-purple-500 to-violet-600',
  },
  {
    id: 3,
    name: 'HexaSign',
    description: 'HexaSign is a professional e-signature platform that streamlines the document execution process. It allows users to send, track, and legally sign agreements digitally, replacing manual paperwork with a secure, automated \'Sign Request\' workflow.',
    icon: '/hexasign-icon.png',
    url: 'https://sign.hexasuite.site/',
    gradient: 'from-fuchsia-500 to-purple-600',
  },
  {
    id: 4,
    name: 'Accounting Copilot',
    description: 'An AI-powered internal assistant that acts as a continuous auditor for your financial data. It reviews journal entries, detects anomalies, and suggests General Ledger (GL) mappings, ensuring total data accuracy before a human ever clicks \'Approve\'.',
    icon: '/copilot-icon.png',
    url: 'https://accountingcopilot.hexasuite.site/',
    gradient: 'from-indigo-500 to-purple-600',
  },
  {
    id: 5,
    name: 'HexaSource (ATS)',
    description: 'A centralized recruitment hub designed to automate the hiring lifecycle. From job posting to offer letter, it streamlines candidate sourcing, resume screening, and interview scheduling, ensuring you hire the right talent faster.',
    icon: '/ats-icon.png',
    url: 'https://ats.hexasuite.site/',
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    id: 6,
    name: 'Hexa Jobs',
    description: 'HexaJobs is a modern job portal where candidates create structured, skill-based profiles and employers build verified company pages—enabling faster hiring, better job matching, and more transparent career opportunities.',
    icon: '/hexajobs-icon.png',
    url: 'https://jobs.hexasuite.site/',
    gradient: 'from-emerald-500 to-teal-600',
  },
];

export default function ToolsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="tools" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Our Suite of Tools</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Everything you need to streamline your business operations, all in one place.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {(tools ?? []).map((tool, index) => (
            <motion.div
              key={tool?.id ?? index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <ToolCard tool={tool} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
