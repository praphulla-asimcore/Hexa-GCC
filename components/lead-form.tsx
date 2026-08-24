'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, Calendar, CheckCircle, Loader2, Building2, User, Mail, Globe, MessageSquare } from 'lucide-react';

const BOOKING_URL = 'https://www.hnpl.business/call';

const countries = [
  { value: 'SG', label: 'Singapore' },
  { value: 'MY', label: 'Malaysia' },
  { value: 'ID', label: 'Indonesia' },
  { value: 'UK', label: 'United Kingdom' },
  { value: 'US', label: 'United States' },
  { value: 'AU', label: 'Australia' },
  { value: 'CA', label: 'Canada' },
  { value: 'OTHER', label: 'Other' },
];

export default function LeadForm() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    country: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/submit-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response?.json?.() ?? {};

      if (!response?.ok) {
        throw new Error(result?.message || 'Failed to submit form');
      }

      setIsSuccess(true);
      setFormData({ name: '', company: '', email: '', country: '', message: '' });
    } catch (err: any) {
      setError(err?.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl p-12 shadow-xl"
          >
            <div className="w-20 h-20 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h3>
            <p className="text-gray-600 mb-8">
              We&apos;ve received your request and will reply within one business day with an
              indicative scope and team shape.
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 gradient-bg px-6 py-3 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              <Calendar className="w-5 h-5" />
              Or Book a Call Now
            </a>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Tell us what you need <span className="gradient-text">covered</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We reply within one business day with an indicative scope and team shape.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      required
                      value={formData?.name ?? ''}
                      onChange={(e) => setFormData({ ...formData, name: e?.target?.value ?? '' })}
                      className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#E6007E]/20 focus:border-[#E6007E] transition-all"
                      placeholder="Your full name"
                    />
                  </div>
                </div>

                {/* Company */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company *</label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      required
                      value={formData?.company ?? ''}
                      onChange={(e) => setFormData({ ...formData, company: e?.target?.value ?? '' })}
                      className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#E6007E]/20 focus:border-[#E6007E] transition-all"
                      placeholder="Company name"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Work Email *</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      required
                      value={formData?.email ?? ''}
                      onChange={(e) => setFormData({ ...formData, email: e?.target?.value ?? '' })}
                      className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#E6007E]/20 focus:border-[#E6007E] transition-all"
                      placeholder="name@company.com"
                    />
                  </div>
                </div>

                {/* Country */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Country of Operation *</label>
                  <div className="relative">
                    <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <select
                      required
                      value={formData?.country ?? ''}
                      onChange={(e) => setFormData({ ...formData, country: e?.target?.value ?? '' })}
                      className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#E6007E]/20 focus:border-[#E6007E] transition-all appearance-none bg-white"
                    >
                      <option value="">Select country</option>
                      {countries?.map((c) => (
                        <option key={c?.value} value={c?.value}>{c?.label}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <span className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" />
                    What do you need covered? <span className="text-gray-400 font-normal">Optional</span>
                  </span>
                </label>
                <textarea
                  value={formData?.message ?? ''}
                  onChange={(e) => setFormData({ ...formData, message: e?.target?.value ?? '' })}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#E6007E]/20 focus:border-[#E6007E] transition-all"
                  placeholder="Scope, entity count, current system, rough team size"
                />
              </div>

              {/* Error */}
              {error && (
                <div className="mt-4 p-4 bg-red-50 text-red-600 rounded-lg text-sm">
                  {error}
                </div>
              )}

              {/* Submit */}
              <div className="mt-8">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full gradient-bg px-8 py-4 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Enquiry
                    </>
                  )}
                </button>
                <p className="text-center text-gray-500 text-sm mt-3">
                  We reply within one business day.
                </p>
              </div>
            </form>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-6"
          >
            {/* WhatsApp Card */}
            <div className="bg-gradient-to-br from-[#E6007E] to-purple-600 rounded-2xl p-6 text-white">
              <MessageSquare className="w-10 h-10 mb-4" />
              <h3 className="text-xl font-bold mb-2">Prefer to Talk?</h3>
              <p className="text-white/80 mb-6">
                Start a WhatsApp conversation with our team to discuss your requirements directly.
              </p>
              <a
                href="https://wa.me/9779851338099"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-white text-[#E6007E] font-semibold py-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Start WhatsApp Conversation
              </a>
            </div>

            {/* Resources */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h4 className="font-bold text-gray-900 mb-2">Not Ready to Talk?</h4>
              <p className="text-gray-600 text-sm mb-4">
                Download the operating model, a market compliance calendar, or the cost
                comparison model. Email address only.
              </p>
              <a href="/resources" className="text-[#E6007E] font-semibold text-sm hover:underline">
                Go to resources →
              </a>
            </div>

            {/* Privacy Note */}
            <p className="text-sm text-gray-600 text-center">
              Your information is secure and will only be used to prepare your proposal.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
