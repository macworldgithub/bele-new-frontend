'use client';

import { Phone, Globe, Bot, MessageSquare, BarChart2, Settings } from 'lucide-react';

const modules = [
  {
    icon: Phone,
    title: 'AI Voice Assistant',
    tag: 'Phone Systems',
    desc: 'Intelligent voice AI that handles inbound calls, qualifies leads, books appointments, and escalates complex queries — 24/7 without fatigue.',
    features: ['Natural language understanding', 'CRM integration', 'Live transfer & escalation', 'Call recording & analytics'],
    cyan: true,
  },
  {
    icon: Globe,
    title: 'Web Chat Agent',
    tag: 'Website',
    desc: 'Context-aware chat agents embedded directly into client websites. Handles FAQs, captures leads, and drives conversion with human-like dialogue.',
    features: ['Branded personality', 'Lead capture & routing', 'Product/service Q&A', 'Multi-language support'],
    cyan: false,
  },
  {
    icon: Bot,
    title: 'Workflow Automation',
    tag: 'Back Office',
    desc: 'AI-powered automation of repetitive internal workflows — from data entry and email triage to report generation and inter-system sync.',
    features: ['No-code triggers', 'API integrations', 'Scheduled tasks', 'Audit logging'],
    cyan: false,
  },
  {
    icon: MessageSquare,
    title: 'SMS & Messaging AI',
    tag: 'Outbound',
    desc: 'Automated outbound and inbound SMS campaigns that feel personal. Ideal for appointment reminders, follow-ups, and re-engagement sequences.',
    features: ['Personalized templates', 'Two-way conversations', 'Opt-out compliance', 'A/B testing'],
    cyan: false,
  },
  {
    icon: BarChart2,
    title: 'Analytics Dashboard',
    tag: 'Insights',
    desc: 'Real-time visibility into AI performance, customer sentiment, conversion rates, and ROI metrics — all in one unified command center.',
    features: ['Live KPI tracking', 'Sentiment analysis', 'Revenue attribution', 'Exportable reports'],
    cyan: false,
  },
  {
    icon: Settings,
    title: 'Custom Integrations',
    tag: 'Enterprise',
    desc: 'Bele AI engineers build bespoke integrations with any CRM, ERP, or proprietary system — connecting AI into the client\'s existing stack seamlessly.',
    features: ['REST / GraphQL APIs', 'Webhook support', 'SSO & security', 'SLA-backed delivery'],
    cyan: false,
  },
];

export default function CoreModules() {
  return (
    <section id="core-modules" className="relative py-24 bg-[#050f1f] overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-25" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-[rgba(0,229,255,0.2)] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center border border-[rgba(0,229,255,0.25)] text-[#00e5ff] text-[11px] font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full bg-[rgba(0,229,255,0.05)] mb-5">
            Core Modules
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            The AI Stack You'll{' '}
            <span className="text-[#00e5ff]">Sell & Deploy</span>
          </h2>
          <p className="mt-4 text-[15px] text-[rgba(255,255,255,0.55)] max-w-2xl mx-auto">
            Six production-ready modules covering every major AI touchpoint. Mix and match to build tailored solutions for any industry vertical.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {modules.map((mod) => (
            <div
              key={mod.title}
              className={`relative rounded-xl p-6 module-card flex flex-col gap-4 ${
                mod.cyan
                  ? 'bg-[rgba(0,229,255,0.07)] border border-[rgba(0,229,255,0.3)]'
                  : 'gradient-border'
              }`}
            >
              {mod.cyan && (
                <div className="absolute top-4 right-4">
                  <span className="text-[9px] font-bold tracking-widest uppercase text-[#00e5ff] border border-[rgba(0,229,255,0.3)] px-2 py-0.5 rounded-full bg-[rgba(0,229,255,0.08)]">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="flex items-start gap-4">
                <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${mod.cyan ? 'bg-[rgba(0,229,255,0.18)] border border-[rgba(0,229,255,0.35)]' : 'bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)]'}`}>
                  <mod.icon className={`w-5 h-5 ${mod.cyan ? 'text-[#00e5ff]' : 'text-[rgba(255,255,255,0.6)]'}`} />
                </div>
                <div>
                  <div className="text-[9px] font-semibold tracking-widest uppercase text-[rgba(255,255,255,0.35)] mb-1">{mod.tag}</div>
                  <h3 className="text-[16px] font-bold text-white">{mod.title}</h3>
                </div>
              </div>
              <p className="text-[13px] text-[rgba(255,255,255,0.52)] leading-relaxed">{mod.desc}</p>
              <ul className="flex flex-col gap-2 mt-auto pt-2 border-t border-[rgba(255,255,255,0.06)]">
                {mod.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-[12px] text-[rgba(255,255,255,0.55)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00e5ff] flex-shrink-0 opacity-70" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
