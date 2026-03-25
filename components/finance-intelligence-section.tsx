"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Globe,
  Calendar,
  Shield,
  CheckCircle,
  AlertTriangle,
  FileSearch,
  Zap,
  Users,
  ArrowRight,
  Sparkles,
  Target,
  Clock,
  FileText,
  Lightbulb,
} from "lucide-react";
import { useState } from "react";

const intelligenceFeatures = [
  {
    id: "copilot",
    icon: Brain,
    title: "Accounting Copilot",
    subtitle: "Assist your accountants, not replace them",
    description:
      "Your internal assistant that reviews, flags, and suggests—while humans approve and sign off.",
    capabilities: [
      "Reviews journal entries for accuracy",
      "Flags unusual or anomalous entries",
      "Suggests GL mapping based on patterns",
      "Detects anomalies month-over-month",
      "Explains why something looks off",
    ],
    humanRole: {
      title: "Human Role",
      items: ["Approve", "Correct", "Override", "Sign off"],
    },
    gradient: "from-purple-500 to-indigo-600",
  },
  {
    id: "compliance-engine",
    icon: Globe,
    title: "Country-Specific Compliance Intelligence",
    subtitle: "Trained only on your country playbooks + regulations",
    description:
      "Deep regulatory intelligence for each country—decision trees, treatment scenarios, and threshold tracking.",
    countryExamples: [
      {
        country: "Indonesia",
        flag: "🇮🇩",
        items: [
          "PPH21 treatment scenarios",
          "PTKP handling logic",
          "Monthly vs annual exposure analysis",
        ],
      },
      {
        country: "Malaysia",
        flag: "🇲🇾",
        items: [
          "SST applicability decision tree",
          "Withholding tax triggers",
          "E-invoicing readiness checks",
        ],
      },
      {
        country: "Singapore",
        flag: "🇸🇬",
        items: [
          "IRAS filing checklists",
          "GST thresholds & exemptions",
          "CPF computation validation",
        ],
      },
      {
        country: "United Kingdom",
        flag: "🇬🇧",
        items: [
          "HMRC VAT logic",
          "Payroll & PAYE reminders",
          "Companies House filing prep",
        ],
      },
    ],
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    id: "risk-radar",
    icon: Calendar,
    title: "Compliance Calendar + Risk Radar",
    subtitle: "Zero surprises. Ever.",
    description:
      "Auto-generated compliance calendars with escalation logic and intelligent risk detection.",
    features: [
      {
        icon: Calendar,
        title: "Auto-Generated Calendars",
        desc: "Compliance calendar per country, automatically maintained",
      },
      {
        icon: Target,
        title: "Filing vs Payment Tracking",
        desc: "Never miss a deadline or payment date",
      },
      {
        icon: Users,
        title: "Escalation Logic",
        desc: "Accountant → Manager → Client chain",
      },
    ],
    aiFlags: [
      "Missed filings detected instantly",
      "Penalty exposure calculated",
      "Repeated delays flagged for review",
    ],
    gradient: "from-amber-500 to-orange-600",
  },
  {
    id: "audit-defense",
    icon: Shield,
    title: "Audit & Tax Defense Assistant",
    subtitle: "Your secret weapon for regulator queries",
    description:
      "Maps audit queries to data, pulls supporting documents, and prepares draft responses—humans handle the final sign-off.",
    capabilities: [
      "Maps audit queries to relevant data",
      "Pulls supporting documents automatically",
      "Prepares draft responses",
      "Tracks open audit items",
      "Maintains complete audit trail",
    ],
    humanRole: {
      title: "Human Role",
      items: ["Final response review", "Regulator interaction", "Sign-off"],
    },
    gradient: "from-emerald-500 to-teal-600",
  },
];

export function FinanceIntelligenceSection() {
  const [activeFeature, setActiveFeature] = useState("copilot");
  const currentFeature = intelligenceFeatures.find(
    (f) => f.id === activeFeature
  )!;

  return (
    <section id="intelligence" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300 text-sm font-medium">
              Developed by Hexa
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Hexa Finance Intelligence™
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Intelligent tools that augment your finance team—not replace them.
            <br />
            <span className="text-purple-400 font-medium">
              Human oversight. Technology efficiency. Complete control.
            </span>
          </p>
        </motion.div>

        {/* Intro Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Built In-House. Designed for Efficiency.</h3>
                <p className="text-gray-300 leading-relaxed">
                  Hexa Finance Intelligence™ is a suite of proprietary tools developed internally by our team. 
                  These systems are designed to equip, train, and empower our finance professionals—helping them 
                  work faster, more accurately, and with greater consistency across all client engagements.
                </p>
                <p className="text-gray-400 mt-4">
                  This isn&apos;t off-the-shelf software. It&apos;s operational infrastructure built from years of hands-on 
                  experience managing multi-country finance operations—and it&apos;s embedded directly into how we deliver.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Feature Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {intelligenceFeatures.map((feature) => (
            <button
              key={feature.id}
              onClick={() => setActiveFeature(feature.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeFeature === feature.id
                  ? `bg-gradient-to-r ${feature.gradient} text-white shadow-lg shadow-purple-500/25`
                  : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white"
              }`}
            >
              <feature.icon className="w-5 h-5" />
              <span className="hidden sm:inline">{feature.id === "audit-defense" ? "Audit Defense" : feature.title.split(" ").slice(0, 2).join(" ")}</span>
              <span className="sm:hidden">{feature.id === "audit-defense" ? "Audit" : feature.title.split(" ")[0]}</span>
            </button>
          ))}
        </div>

        {/* Feature Content */}
        <motion.div
          key={activeFeature}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="max-w-6xl mx-auto"
        >
          <div
            className={`bg-gradient-to-br ${currentFeature.gradient} p-[1px] rounded-2xl`}
          >
            <div className="bg-gray-900 rounded-2xl p-8 md:p-12">
              {/* Feature Header */}
              <div className="flex flex-col md:flex-row md:items-start gap-6 mb-8">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${currentFeature.gradient} flex items-center justify-center flex-shrink-0`}
                >
                  <currentFeature.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {currentFeature.title}
                  </h3>
                  <p className="text-lg text-purple-400 font-medium mb-3">
                    {currentFeature.subtitle}
                  </p>
                  <p className="text-gray-400 text-lg">
                    {currentFeature.description}
                  </p>
                </div>
              </div>

              {/* Feature-Specific Content */}
              {currentFeature.id === "copilot" && (
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <Zap className="w-5 h-5 text-purple-400" />
                      What It Does
                    </h4>
                    <ul className="space-y-3">
                      {currentFeature.capabilities?.map((cap, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300">{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-gray-800/50 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <Users className="w-5 h-5 text-blue-400" />
                      {currentFeature.humanRole?.title}
                    </h4>
                    <p className="text-gray-400 mb-4">
                      System suggests. Humans decide.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {currentFeature.humanRole?.items.map((item, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 bg-gray-700 rounded-lg text-white font-medium"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {currentFeature.id === "compliance-engine" && (
                <div className="grid md:grid-cols-2 gap-6">
                  {currentFeature.countryExamples?.map((country, idx) => (
                    <div
                      key={idx}
                      className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800/70 transition-colors"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-3xl">{country.flag}</span>
                        <h4 className="text-lg font-semibold text-white">
                          {country.country}
                        </h4>
                      </div>
                      <ul className="space-y-2">
                        {country.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <ArrowRight className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-1" />
                            <span className="text-gray-300 text-sm">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {currentFeature.id === "risk-radar" && (
                <div className="space-y-8">
                  <div className="grid md:grid-cols-3 gap-6">
                    {currentFeature.features?.map((feat, idx) => (
                      <div
                        key={idx}
                        className="bg-gray-800/50 rounded-xl p-6 text-center"
                      >
                        <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center mx-auto mb-4">
                          <feat.icon className="w-6 h-6 text-amber-400" />
                        </div>
                        <h4 className="text-white font-semibold mb-2">
                          {feat.title}
                        </h4>
                        <p className="text-gray-400 text-sm">{feat.desc}</p>
                      </div>
                    ))}
                  </div>
                  <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-amber-400" />
                      Intelligent Risk Flags
                    </h4>
                    <div className="grid md:grid-cols-3 gap-4">
                      {currentFeature.aiFlags?.map((flag, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-3 bg-gray-800/50 rounded-lg p-4"
                        >
                          <div className="w-2 h-2 rounded-full bg-amber-400" />
                          <span className="text-gray-300 text-sm">{flag}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {currentFeature.id === "audit-defense" && (
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <FileSearch className="w-5 h-5 text-emerald-400" />
                      What It Does
                    </h4>
                    <ul className="space-y-3">
                      {currentFeature.capabilities?.map((cap, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300">{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-gray-800/50 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <Users className="w-5 h-5 text-teal-400" />
                      {currentFeature.humanRole?.title}
                    </h4>
                    <p className="text-gray-400 mb-4">
                      System prepares. Humans finalize and interact with regulators.
                    </p>
                    <div className="space-y-2">
                      {currentFeature.humanRole?.items.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-3 bg-gray-700/50 rounded-lg p-3"
                        >
                          <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                            <span className="text-emerald-400 font-bold text-sm">
                              {idx + 1}
                            </span>
                          </div>
                          <span className="text-white font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-6">
            Ready to see how intelligent tools can transform your finance operations?
          </p>
          <a
            href="https://wa.me/9779851338099"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
          >
            <Sparkles className="w-5 h-5" />
            See Finance Intelligence in Action
          </a>
        </motion.div>
      </div>
    </section>
  );
}
