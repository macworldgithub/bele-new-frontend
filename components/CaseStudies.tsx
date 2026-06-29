'use client';

const cases = [
  {
    industry: 'Healthcare',
    client: 'Regional Medical Group',
    size: '12 locations',
    challenge: 'Overwhelmed front desk staff missing 35% of inbound calls during peak hours, leading to lost appointments.',
    solution: 'Deployed AI Voice Assistant to handle appointment booking, reminders, and insurance verification across all locations.',
    results: [
      { metric: '94%', label: 'Call Answer Rate' },
      { metric: '2,400+', label: 'Appts / Month' },
      { metric: '$6,800', label: 'MRR Generated' },
    ],
    duration: '3 weeks to deploy',
  },
  {
    industry: 'Real Estate',
    client: 'Boutique Property Firm',
    size: '28 agents',
    challenge: 'Website visitors leaving without converting. Agents spending 60% of time on unqualified inquiries.',
    solution: 'Web Chat Agent with property search, qualification flow, and instant calendar booking for agent walkthroughs.',
    results: [
      { metric: '3.2x', label: 'Lead Conversion' },
      { metric: '58%', label: 'Less Cold Outreach' },
      { metric: '$9,200', label: 'MRR Generated' },
    ],
    duration: '10 days to deploy',
  },
  {
    industry: 'Legal',
    client: 'Personal Injury Law Firm',
    size: 'Single office, 6 attorneys',
    challenge: 'After-hours calls going to voicemail. Competitors capturing cases the firm never knew about.',
    solution: 'AI Voice + SMS workflow for 24/7 intake, urgency scoring, and next-day callback scheduling.',
    results: [
      { metric: '+41%', label: 'New Case Intake' },
      { metric: '24/7', label: 'Coverage' },
      { metric: '$7,500', label: 'MRR Generated' },
    ],
    duration: '2 weeks to deploy',
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="relative py-24 bg-[#020b18] overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-[rgba(0,229,255,0.2)] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center border border-[rgba(0,229,255,0.25)] text-[#00e5ff] text-[11px] font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full bg-[rgba(0,229,255,0.05)] mb-5">
            Case Studies
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            Real Results,{' '}
            <span className="text-[#00e5ff]">Real Revenue</span>
          </h2>
          <p className="mt-4 text-[15px] text-[rgba(255,255,255,0.55)] max-w-2xl mx-auto">
            Partner-deployed Bele AI solutions across industries, each generating predictable recurring revenue within weeks of launch.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((c) => (
            <div key={c.industry} className="gradient-border rounded-xl overflow-hidden module-card flex flex-col">
              {/* Header */}
              <div className="bg-[rgba(0,229,255,0.05)] border-b border-[rgba(0,229,255,0.12)] px-6 py-4 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-[#00e5ff]">{c.industry}</span>
                  <div className="text-[14px] font-bold text-white mt-0.5">{c.client}</div>
                </div>
                <span className="text-[10px] text-[rgba(255,255,255,0.4)] border border-[rgba(255,255,255,0.1)] px-2 py-0.5 rounded-full">
                  {c.size}
                </span>
              </div>

              {/* Body */}
              <div className="px-6 py-5 flex flex-col gap-5 flex-1">
                <div>
                  <div className="text-[10px] font-semibold tracking-widest uppercase text-[rgba(255,255,255,0.35)] mb-2">Challenge</div>
                  <p className="text-[12px] text-[rgba(255,255,255,0.55)] leading-relaxed">{c.challenge}</p>
                </div>
                <div>
                  <div className="text-[10px] font-semibold tracking-widest uppercase text-[rgba(255,255,255,0.35)] mb-2">Solution</div>
                  <p className="text-[12px] text-[rgba(255,255,255,0.55)] leading-relaxed">{c.solution}</p>
                </div>

                {/* Results */}
                <div className="mt-auto pt-4 border-t border-[rgba(255,255,255,0.07)]">
                  <div className="text-[10px] font-semibold tracking-widest uppercase text-[rgba(255,255,255,0.35)] mb-3">Results</div>
                  <div className="grid grid-cols-3 gap-2">
                    {c.results.map((r) => (
                      <div key={r.label} className="flex flex-col items-center bg-[rgba(0,229,255,0.04)] border border-[rgba(0,229,255,0.12)] rounded-lg py-2 px-1">
                        <div className="text-[16px] font-extrabold text-[#00e5ff]">{r.metric}</div>
                        <div className="text-[9px] text-[rgba(255,255,255,0.45)] text-center leading-tight mt-0.5">{r.label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 flex items-center gap-1.5 text-[11px] text-[rgba(255,255,255,0.35)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00e5ff] opacity-60" />
                    {c.duration}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
