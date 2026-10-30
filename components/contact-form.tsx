'use client';

import { useState } from 'react';
import { CheckCircle, Loader2 } from 'lucide-react';
import { countries } from '@/lib/countries';
import { trackEvent } from '@/lib/analytics';

const interests = ['Finance', 'Technology', 'Both'] as const;
const timelines = ['Within a month', 'One to three months', 'Three to six months', 'Exploring options'];

const emptyForm = { name: '', company: '', email: '', country: '', interest: '', timeline: '' };

const inputClass =
  'w-full h-12 rounded-xl border border-hexa-ink/15 bg-white px-4 text-[15px] focus:outline-none focus:border-hexa-magenta focus:ring-2 focus:ring-hexa-magenta/20';

export default function ContactForm() {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'done'>('idle');
  const [error, setError] = useState<string | null>(null);

  const set = (key: keyof typeof emptyForm) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setError(null);
    try {
      const response = await fetch('/api/submit-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || result.success !== true) throw new Error(result?.message || 'Something went wrong. Please try again.');
      setStatus('done');
      setForm(emptyForm);
      trackEvent('lead_form_submit');
    } catch (err: any) {
      setError(err?.message || 'Something went wrong. Please try again.');
      setStatus('idle');
    }
  };

  if (status === 'done') {
    return (
      <div className="card p-8 text-center" role="status">
        <CheckCircle className="w-10 h-10 text-hexa-magenta mx-auto mb-4" aria-hidden />
        <h3 className="text-xl font-bold">Thank you. We have your details.</h3>
        <p className="mt-2 text-muted">We will reply within one business day.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card p-6 sm:p-8 grid gap-5 sm:grid-cols-2">
      <label className="grid gap-2">
        <span className="text-sm font-bold">Name</span>
        <input required autoComplete="name" value={form.name} onChange={set('name')} className={inputClass} />
      </label>
      <label className="grid gap-2">
        <span className="text-sm font-bold">Company</span>
        <input required autoComplete="organization" value={form.company} onChange={set('company')} className={inputClass} />
      </label>
      <label className="grid gap-2">
        <span className="text-sm font-bold">Work email</span>
        <input required type="email" autoComplete="email" value={form.email} onChange={set('email')} className={inputClass} />
      </label>
      <label className="grid gap-2">
        <span className="text-sm font-bold">Country</span>
        <select required autoComplete="country-name" value={form.country} onChange={set('country')} className={inputClass}>
          <option value="" disabled>
            Select a country
          </option>
          {countries.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </label>
      <fieldset className="grid gap-2 sm:col-span-2">
        <legend className="text-sm font-bold mb-2">Interest</legend>
        <div className="flex flex-wrap gap-2">
          {interests.map((option) => (
            <label key={option} className="cursor-pointer">
              <input
                type="radio"
                name="interest"
                required
                value={option}
                checked={form.interest === option}
                onChange={set('interest')}
                className="peer sr-only"
              />
              <span className="inline-flex items-center h-11 px-5 rounded-full border border-hexa-ink/15 text-[15px] font-semibold peer-checked:border-transparent peer-checked:text-white peer-checked:[background:var(--hexa-gradient)] peer-focus-visible:ring-2 peer-focus-visible:ring-hexa-magenta">
                {option}
              </span>
            </label>
          ))}
        </div>
      </fieldset>
      <label className="grid gap-2 sm:col-span-2">
        <span className="text-sm font-bold">Timeline</span>
        <select required value={form.timeline} onChange={set('timeline')} className={inputClass}>
          <option value="" disabled>
            When do you want to start?
          </option>
          {timelines.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </label>
      {error && (
        <p className="sm:col-span-2 text-sm text-red-700" role="alert">
          {error}
        </p>
      )}
      <div className="sm:col-span-2 flex flex-col sm:flex-row sm:items-center gap-4">
        <button type="submit" disabled={status === 'submitting'} className="btn btn-primary disabled:opacity-60">
          {status === 'submitting' && <Loader2 className="w-4 h-4 animate-spin" aria-hidden />}
          Request a proposal
        </button>
        <p className="text-sm text-muted">We reply within one business day.</p>
      </div>
    </form>
  );
}
