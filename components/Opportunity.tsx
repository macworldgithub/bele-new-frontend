'use client';

import { TrendingUp, DollarSign, Users, Zap } from 'lucide-react';

const stats = [
  {
    value: '$15.7T',
    label: 'AI Market by 2030',
    sub: 'Global addressable market',
    icon: TrendingUp,
    cyan: false,
  },
  {
    value: '78%',
    label: 'SMBs Seeking AI',
    sub: "Haven't deployed yet",
    icon: Users,
    cyan: true,
  },
  {
    value: '$8,400',
    label: 'Avg Monthly Revenue',
    sub: 'Per client deployment',
    icon: DollarSign,
    cyan: true,
  },
  {
    value: '94%',
    label: 'Retention Rate',
    sub: 'Across partner network',
    icon: Zap,
    cyan: false,
  },
];

const pillars = [
  {
    num: '01',
    title: 'Massive Unmet Demand',
    body: 'Every business with a phone line or website is a prospect. AI-powered customer engagement is no longer optional — it\'s the new baseline for competitive businesses.',
  },
  {
    num: '02',
    title: 'High-Margin, Recurring Revenue',
    body: 'Partners earn up to 40% of monthly recurring revenue with no engineering overhead. Bele AI handles builds and support; you focus on relationships and growth.',
  },
  {
    num: '03',
    title: 'White-Glove Enablement',
    body: 'From sales scripts to demo environments to onboarding playbooks — we arm you with everything needed to close and retain enterprise accounts.',
  },
];

export default function Opportunity() {
  return (
    <section id="opportunity" className="relative py-24 bg-[#020b18] overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-[rgba(0,229,255,0.25)] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center border border-[rgba(0,229,255,0.25)] text-[#00e5ff] text-[11px] font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full bg-[rgba(0,229,255,0.05)] mb-5">
            The Opportunity
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            Why Now Is the{' '}
            <span className="text-[#00e5ff]">Perfect Time</span>
          </h2>
          <p className="mt-4 text-[15px] text-[rgba(255,255,255,0.55)] max-w-2xl mx-auto">
            The AI adoption wave is here. Businesses are actively seeking trusted partners to guide their AI transformation — and the window to become that partner is now.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {stats.map((s) => (
            <div
              key={s.label}
              className="gradient-border rounded-xl p-6 module-card"
            >
              <div className={`flex items-center justify-center w-10 h-10 rounded-lg mb-4 ${s.cyan ? 'bg-[rgba(0,229,255,0.12)] border border-[rgba(0,229,255,0.25)]' : 'bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)]'}`}>
                <s.icon className={`w-5 h-5 ${s.cyan ? 'text-[#00e5ff]' : 'text-[rgba(255,255,255,0.6)]'}`} />
              </div>
              <div className={`text-3xl font-extrabold mb-1 ${s.cyan ? 'text-[#00e5ff]' : 'text-white'}`}>{s.value}</div>
              <div className="text-[13px] font-semibold text-white mb-0.5">{s.label}</div>
              <div className="text-[11px] text-[rgba(255,255,255,0.4)]">{s.sub}</div>
            </div>
          ))}
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((p) => (
            <div key={p.num} className="relative gradient-border rounded-xl p-7 module-card">
              <div className="step-num w-9 h-9 rounded-lg flex items-center justify-center text-[12px] font-bold mb-5">
                {p.num}
              </div>
              <h3 className="text-[17px] font-bold text-white mb-3">{p.title}</h3>
              <p className="text-[13px] text-[rgba(255,255,255,0.55)] leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
