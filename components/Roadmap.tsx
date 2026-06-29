'use client';

const phases = [
  {
    phase: 'Phase 1',
    label: 'Days 1–14',
    title: 'Onboarding & Enablement',
    color: '#00e5ff',
    steps: [
      'Complete partner certification program (8 hrs online)',
      'Access partner portal, CRM, and demo environments',
      '1:1 kickoff call with your dedicated success manager',
      'Receive sales playbook, pitch decks, and objection scripts',
    ],
  },
  {
    phase: 'Phase 2',
    label: 'Days 15–45',
    title: 'First Client Acquisition',
    color: '#00e5ff',
    steps: [
      'Identify 20 target prospects using our outreach templates',
      'Run co-selling discovery calls with Bele AI support',
      'Submit first client brief for custom build scoping',
      'First deployment live within 2–3 weeks of signed contract',
    ],
  },
  {
    phase: 'Phase 3',
    label: 'Days 46–75',
    title: 'Revenue Activation',
    color: '#00e5ff',
    steps: [
      'Receive first revenue-share payment (paid monthly)',
      'Onboard 2nd and 3rd clients using proven playbook',
      'Attend monthly partner roundtable for new strategies',
      'Unlock Silver Partner tier benefits',
    ],
  },
  {
    phase: 'Phase 4',
    label: 'Days 76–90',
    title: 'Scale & Optimize',
    color: '#00e5ff',
    steps: [
      'Review client performance dashboards with success manager',
      'Identify upsell and cross-sell opportunities in active accounts',
      'Begin Gold Partner certification track',
      'Project monthly recurring revenue of $15K–$30K+',
    ],
  },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="relative py-24 bg-[#020b18] overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-[rgba(0,229,255,0.2)] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center border border-[rgba(0,229,255,0.25)] text-[#00e5ff] text-[11px] font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full bg-[rgba(0,229,255,0.05)] mb-5">
            90-Day Roadmap
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            From Zero to{' '}
            <span className="text-[#00e5ff]">First $30K MRR</span>
          </h2>
          <p className="mt-4 text-[15px] text-[rgba(255,255,255,0.55)] max-w-2xl mx-auto">
            A proven, step-by-step framework to get certified, land your first clients, and build a scalable recurring revenue business in 90 days.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[rgba(0,229,255,0.4)] via-[rgba(0,229,255,0.2)] to-transparent" />

          <div className="flex flex-col gap-10">
            {phases.map((p, i) => (
              <div
                key={p.phase}
                className={`relative flex items-start gap-8 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Mobile dot */}
                <div className="absolute left-8 w-0 md:hidden">
                  <div className="w-4 h-4 rounded-full timeline-dot -translate-x-2" />
                </div>

                {/* Desktop: half-width content */}
                <div className={`w-full md:w-5/12 pl-16 md:pl-0 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="gradient-border rounded-xl p-6 module-card">
                    <div className="flex items-center gap-3 mb-4 flex-wrap">
                      <span className="step-num text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full">
                        {p.phase}
                      </span>
                      <span className="text-[11px] text-[rgba(255,255,255,0.35)]">{p.label}</span>
                    </div>
                    <h3 className="text-[17px] font-bold text-white mb-4">{p.title}</h3>
                    <ul className="flex flex-col gap-2.5">
                      {p.steps.map((s) => (
                        <li key={s} className="flex items-start gap-2 text-[12px] text-[rgba(255,255,255,0.55)] leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#00e5ff] flex-shrink-0 mt-1.5 opacity-70" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Desktop center dot */}
                <div className="hidden md:flex w-2/12 justify-center items-center">
                  <div className="w-5 h-5 rounded-full timeline-dot" />
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-5/12" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
