'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check, X, Minus } from 'lucide-react';

const comparisonData = [
  {
    aspect: 'Speed of Onboarding',
    hexa: { value: '1-2 weeks', good: true },
    freelancer: { value: '1-4 weeks', neutral: true },
    bigFirm: { value: '4-8 weeks', bad: true },
  },
  {
    aspect: 'Named Account Lead',
    hexa: { value: 'Always', good: true },
    freelancer: { value: 'Single point of failure', bad: true },
    bigFirm: { value: 'Often rotates', neutral: true },
  },
  {
    aspect: 'Documentation Quality',
    hexa: { value: 'Audit-ready, standardized', good: true },
    freelancer: { value: 'Inconsistent', bad: true },
    bigFirm: { value: 'Good but template-heavy', neutral: true },
  },
  {
    aspect: 'Country-Specific Expertise',
    hexa: { value: 'Deep (8 countries)', good: true },
    freelancer: { value: 'Limited (1-2 countries)', bad: true },
    bigFirm: { value: 'Broad but generic', neutral: true },
  },
  {
    aspect: 'Cost',
    hexa: { value: '40-60% savings', good: true },
    freelancer: { value: 'Low but risky', neutral: true },
    bigFirm: { value: 'Premium rates', bad: true },
  },
  {
    aspect: 'Backup & Continuity',
    hexa: { value: 'Cross-trained team', good: true },
    freelancer: { value: 'None', bad: true },
    bigFirm: { value: 'Available', good: true },
  },
  {
    aspect: 'Communication',
    hexa: { value: 'Direct, daily access', good: true },
    freelancer: { value: 'Direct but limited hours', neutral: true },
    bigFirm: { value: 'Through account manager', bad: true },
  },
  {
    aspect: 'Scalability',
    hexa: { value: 'Flexible, fast', good: true },
    freelancer: { value: 'Limited capacity', bad: true },
    bigFirm: { value: 'Scalable but costly', neutral: true },
  },
];

export default function ComparisonSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const getStatusIcon = (item: { good?: boolean; bad?: boolean; neutral?: boolean }) => {
    if (item?.good) return <Check className="w-5 h-5 text-green-500" />;
    if (item?.bad) return <X className="w-5 h-5 text-red-400" />;
    return <Minus className="w-5 h-5 text-yellow-500" />;
  };

  const getRowBg = (item: { good?: boolean; bad?: boolean; neutral?: boolean }) => {
    if (item?.good) return 'bg-green-50';
    if (item?.bad) return 'bg-red-50';
    return 'bg-yellow-50';
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Choose <span className="gradient-text">Hexa GCC</span>?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Compare the ownership, quality, and value you get with different finance operations models.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="overflow-x-auto"
        >
          <table className="w-full min-w-[700px]">
            <thead>
              <tr>
                <th className="text-left py-4 px-4 font-semibold text-gray-500">Aspect</th>
                <th className="py-4 px-4">
                  <div className="gradient-bg rounded-lg py-3 px-4 text-white font-bold">
                    Hexa GCC
                  </div>
                </th>
                <th className="py-4 px-4">
                  <div className="bg-gray-100 rounded-lg py-3 px-4 text-gray-700 font-bold">
                    Freelancer
                  </div>
                </th>
                <th className="py-4 px-4">
                  <div className="bg-gray-100 rounded-lg py-3 px-4 text-gray-700 font-bold">
                    Big 4 / Large Firm
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData?.map((row, index) => (
                <tr key={index} className="border-b border-gray-100">
                  <td className="py-4 px-4 font-medium text-gray-700">{row?.aspect}</td>
                  <td className="py-4 px-4">
                    <div className={`flex items-center justify-center gap-2 rounded-lg py-2 px-3 ${getRowBg(row?.hexa ?? {})}`}>
                      {getStatusIcon(row?.hexa ?? {})}
                      <span className="text-sm font-medium text-gray-700">{row?.hexa?.value}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className={`flex items-center justify-center gap-2 rounded-lg py-2 px-3 ${getRowBg(row?.freelancer ?? {})}`}>
                      {getStatusIcon(row?.freelancer ?? {})}
                      <span className="text-sm text-gray-600">{row?.freelancer?.value}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className={`flex items-center justify-center gap-2 rounded-lg py-2 px-3 ${getRowBg(row?.bigFirm ?? {})}`}>
                      {getStatusIcon(row?.bigFirm ?? {})}
                      <span className="text-sm text-gray-600">{row?.bigFirm?.value}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
