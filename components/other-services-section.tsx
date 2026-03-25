'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BookOpen, Users, Shield, TrendingUp, UserPlus, PieChart, CheckCircle, ArrowRight } from 'lucide-react';
import { servicesData } from '@/lib/services-data';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  BookOpen,
  Users,
  Shield,
  TrendingUp,
  UserPlus,
  PieChart
};

export default function OtherServicesSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="other-services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Other <span className="gradient-text">Services</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Beyond dedicated teams, we offer specialized finance services with clear deliverables, 
            documented processes, and measurable impact.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData?.map((service, index) => {
            const IconComponent = iconMap[service?.icon ?? ''];
            return (
              <motion.div
                key={service?.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6 card-hover border border-gray-100 group"
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    {IconComponent && <IconComponent className="w-6 h-6 text-white" />}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{service?.title}</h3>
                </div>

                {/* What You Get */}
                <div className="mb-4">
                  <p className="text-xs font-semibold text-[#E6007E] uppercase tracking-wider mb-2">What You Get</p>
                  <ul className="space-y-1.5">
                    {service?.whatYouGet?.slice(0, 3)?.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Outputs */}
                <div className="mb-4">
                  <p className="text-xs font-semibold text-purple-600 uppercase tracking-wider mb-2">Outputs Delivered</p>
                  <div className="flex flex-wrap gap-1.5">
                    {service?.outputs?.slice(0, 3)?.map((output, i) => (
                      <span key={i} className="text-xs bg-purple-50 text-purple-700 px-2 py-1 rounded-full">
                        {output}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Impact */}
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Typical Impact</p>
                  <ul className="space-y-1">
                    {service?.impact?.slice(0, 2)?.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-700 font-medium">
                        <ArrowRight className="w-3 h-3 text-[#E6007E]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
