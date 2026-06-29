'use client';

import { CheckCircle2, ArrowRight } from 'lucide-react';

const partnerBenefits = [
  'Up to 40% of all monthly recurring revenue — paid automatically',
  'Zero engineering or support responsibility on your side',
  'White-label option — deploy under your own brand',
  'Dedicated partner success manager from day one',
  'Co-selling support on enterprise and mid-market deals',
  'Quarterly performance bonuses at 5+ active clients',
  'Access to Bele AI partner portal with live revenue dashboard',
  'Priority access to new modules before general release',
];

const tiers = [
  {
    name: 'Affiliate',
    rev: '15%',
    req: 'Refer & introduce clients',
    clients: '1–2 active clients',
    support: 'Standard partner support',
    highlight: false,
  },
  {
    name: 'Silver Partner',
    rev: '25%',
    req: 'Own full sales cycle',
    clients: '3–7 active clients',
    support: 'Dedicated success manager',
    highlight: false,
  },
  {
    name: 'Gold Partner',
    rev: '35%',
    req: 'Certified solution advisor',
    clients: '8–14 active clients',
    support: 'Priority support + co-selling',
    highlight: true,
  },
  {
    name: 'Platinum Partner',
    rev: '40%',
    req: 'Strategic account growth',
    clients: '15+ active clients',
    support: 'Dedicated engineering pod',
    highlight: false,
  },
];

export default function AgencyModel() {
  return (
    <section id="agency-model" className="relative py-24 bg-[#050f1f] overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-25" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-[rgba(0,229,255,0.2)] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center border border-[rgba(0,229,255,0.25)] text-[#00e5ff] text-[11px] font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full bg-[rgba(0,229,255,0.05)] mb-5">
            Agency Model
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            How Partners{' '}
            <span className="text-[#00e5ff]">Earn & Scale</span>
          </h2>
          <p className="mt-4 text-[15px] text-[rgba(255,255,255,0.55)] max-w-2xl mx-auto">
            A transparent revenue-share model built to reward growth. The more clients you bring, the higher your revenue share — with full back-end support at every tier.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left: benefits */}
          <div className="flex flex-col gap-6">
            <h3 className="text-xl font-bold text-white">What You Get as a Partner</h3>
            <ul className="flex flex-col gap-3">
              {partnerBenefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#00e5ff] flex-shrink-0 mt-0.5" />
                  <span className="text-[13px] text-[rgba(255,255,255,0.65)] leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
            <a
              href="#partner"
              className="self-start flex items-center gap-2 bg-[#00e5ff] hover:bg-[#00ccdd] text-[#020b18] text-[13px] font-bold px-6 py-3 rounded-md transition-all duration-200 cyan-glow mt-2"
            >
              Apply Now
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Right: tier table */}
          <div className="flex flex-col gap-3">
            {tiers.map((t) => (
              <div
                key={t.name}
                className={`relative rounded-xl p-5 flex items-center gap-5 module-card ${
                  t.highlight
                    ? 'bg-[rgba(0,229,255,0.08)] border border-[rgba(0,229,255,0.35)]'
                    : 'gradient-border'
                }`}
              >
                {t.highlight && (
                  <div className="absolute -top-2.5 left-6">
                    <span className="text-[9px] font-bold tracking-widest uppercase text-[#020b18] bg-[#00e5ff] px-3 py-0.5 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                {/* Rev share */}
                <div className="flex-shrink-0 w-16 h-16 rounded-xl flex flex-col items-center justify-center bg-[rgba(0,229,255,0.08)] border border-[rgba(0,229,255,0.2)]">
                  <span className="text-2xl font-extrabold text-[#00e5ff] leading-none">{t.rev}</span>
                  <span className="text-[9px] text-[rgba(255,255,255,0.4)] mt-0.5">Rev Share</span>
                </div>
                {/* Details */}
                <div className="flex-1 min-w-0">
                  <div className="text-[15px] font-bold text-white mb-1">{t.name}</div>
                  <div className="text-[11px] text-[rgba(255,255,255,0.45)] mb-0.5">{t.clients}</div>
                  <div className="text-[11px] text-[rgba(255,255,255,0.45)]">{t.support}</div>
                </div>
                {/* Req */}
                <div className="hidden sm:block text-right flex-shrink-0">
                  <div className="text-[10px] text-[rgba(255,255,255,0.3)] uppercase tracking-wider mb-1">Requirement</div>
                  <div className="text-[11px] text-[rgba(255,255,255,0.55)]">{t.req}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
