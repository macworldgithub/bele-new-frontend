'use client';

import Image from 'next/image';

const features = [
  {
    title: 'Interactive Sales Tools',
    desc: 'Access to customized ROI calculators, white-label pitch decks, and a sandbox environment to run live client demos.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 19V6l12-3v13" stroke="#00e5ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="6" cy="19" r="3" stroke="#00e5ff" strokeWidth="1.5" />
        <circle cx="21" cy="16" r="3" stroke="#00e5ff" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: 'Technical Delivery Tools',
    desc: 'Automated scoping templates, API requirement checklists, and our proven integration mapping framework.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="3" width="20" height="14" rx="2" stroke="#00e5ff" strokeWidth="1.5" />
        <path d="M8 21h8M12 17v4" stroke="#00e5ff" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6 8l3 3-3 3M11 14h6" stroke="#00e5ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Named Technical Mentor',
    desc: 'A dedicated Bele AI engineer assigned to your agency to support your pre-sales calls and manage your deployments.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="8" r="4" stroke="#00e5ff" strokeWidth="1.5" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="#00e5ff" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M19 8l1.5 1.5L23 7" stroke="#00e5ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  }
];

export default function PartnerCTA() {
  return (
    <section id="partner" className="relative py-24 bg-[#020b18] overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-[rgba(0,229,255,0.2)] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center border border-[rgba(0,229,255,0.25)] text-[#00e5ff] text-[11px] font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full bg-[rgba(0,229,255,0.05)] mb-5">
            ECOSYSTEM SUPPORT
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white leading-tight">
            An Extension of Your Team
          </h2>
          <p className="mt-6 text-[15px] text-[rgba(255,255,255,0.55)] max-w-2xl mx-auto leading-relaxed">
            We provide everything you need to sell, deliver, and scale — without increasing your headcount. Our partner ecosystem is designed to make you look like AI experts from day one.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-[#0a1628] border border-[rgba(255,255,255,0.07)] rounded-2xl p-8 shadow-lg hover:border-[rgba(0,229,255,0.2)] transition-colors duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-[rgba(0,229,255,0.08)] border border-[rgba(0,229,255,0.15)] flex items-center justify-center mb-6 group-hover:bg-[rgba(0,229,255,0.12)] transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-[17px] font-bold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-[14px] text-[rgba(255,255,255,0.55)] leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="relative flex justify-center mt-12">
          <div className="relative w-full max-w-5xl rounded-3xl overflow-hidden border border-[rgba(255,255,255,0.08)] bg-[#020b18] shadow-2xl p-4 lg:p-6">
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,229,255,0.02)] to-transparent pointer-events-none rounded-3xl" />
            <Image
              src="/images/support.png"
              alt="Partner Support Ecosystem"
              width={1200}
              height={800}
              className="w-full h-auto object-contain rounded-2xl relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
