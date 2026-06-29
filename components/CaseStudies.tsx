'use client';

const cases = [
  {
    module: 'SALES & SERVICE',
    client: 'JUST Mobile',
    sub: 'Australian MVNO (Mobile Virtual Network Operator)',
    desc: 'Operating 24/7 in multiple languages, the Sales & Service module handles high-volume plan selection, eSIM instant activations, and eSIM delivery seamlessly.',
    stats: [
      { metric: '88%', label: 'GENERAL Q&A MANAGED' },
      { metric: '92%', label: 'ZERO-TOUCH ON NEW CONNECTIONS' }
    ]
  },
  {
    module: 'RECEPTION',
    client: 'MIA',
    sub: 'Your AI Assistant for Sole Traders',
    desc: 'Enables SMEs and tradespeople to never miss vital inbound customer calls. Captures missed or overflow calls, books appointments, and sends instant SMS quotes.',
    stats: [
      { metric: '$70k', label: 'ESTIMATED SOLE TRADER LOSS PREVENTED' },
      { metric: '100%', label: 'CALL CAPTURE & SMS QUALIFICATION' }
    ]
  },
  {
    module: 'CONCIERGE',
    client: 'Rosapenna Hotel & Golf Resort',
    sub: 'European Luxury Golf Resort',
    desc: 'Provides guests with automated, multi-day itinerary packages combining golf tee-times, hotel room selections, and clubhouse fine dining reservations.',
    stats: [
      { metric: '€50k', label: 'ANNUAL ADMINISTRATIVE SAVINGS' },
      { metric: 'Active', label: 'SEAMLESS PACKAGE BOOKING' }
    ]
  },
  {
    module: 'DOCUMENT HANDLER',
    client: 'KREDO',
    sub: 'Unsecured Business Finance Provider',
    desc: 'Automates complex B2B document-heavy lending workflows by collecting, analyzing, and validating identity documents, ABNs, and Equifax bureau files.',
    stats: [
      { metric: 'Instant', label: 'ABN & CREDIT CHECK VALIDATION' },
      { metric: 'Minutes', label: 'KYC/AML ONBOARDING TIME' }
    ]
  }
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="relative py-24 bg-[#020b18] overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-[rgba(0,229,255,0.2)] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center border border-[rgba(0,229,255,0.25)] text-[#00e5ff] text-[11px] font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full bg-[rgba(0,229,255,0.05)] mb-5">
            PROVEN RESULTS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white leading-tight">
            Grounded in Real-World Success
          </h2>
          <p className="mt-6 text-[15px] text-[rgba(255,255,255,0.55)] max-w-2xl mx-auto leading-relaxed">
            Every metric we share is backed by actual, production-grade deployments across regulated verticals. Here is how our modules deliver tangible value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cases.map((c, idx) => (
            <div key={idx} className="bg-[#041124] border border-[rgba(255,255,255,0.08)] rounded-2xl p-8 flex flex-col hover:border-[rgba(0,229,255,0.2)] transition-colors duration-300">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-[10px] font-bold tracking-widest uppercase text-[#00e5ff]">
                  {c.module}
                </span>
                <span className="text-[10px] text-[rgba(255,255,255,0.3)] tracking-wide">
                  Case Study
                </span>
              </div>

              {/* Client Info */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-1">{c.client}</h3>
                <div className="text-[12px] text-[rgba(255,255,255,0.4)]">{c.sub}</div>
              </div>

              {/* Description */}
              <p className="text-[14px] text-[rgba(255,255,255,0.6)] leading-relaxed mb-8 flex-1">
                {c.desc}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-[rgba(255,255,255,0.06)]">
                {c.stats.map((stat, i) => (
                  <div key={i}>
                    <div className="text-[28px] font-extrabold text-white mb-1 tracking-tight">
                      {stat.metric}
                    </div>
                    <div className="text-[9px] font-bold tracking-widest uppercase text-[rgba(255,255,255,0.35)] leading-relaxed">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
