'use client';

import { ArrowRight, Sparkles } from 'lucide-react';

export default function PartnerCTA() {
  return (
    <section id="partner" className="relative py-24 bg-[#020b18] overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(0,50,100,0.15)] to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[rgba(0,229,255,0.04)] rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 border border-[rgba(0,229,255,0.25)] text-[#00e5ff] text-[11px] font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full bg-[rgba(0,229,255,0.05)] mb-8">
          <Sparkles className="w-3 h-3" />
          Limited Partner Spots Available
        </div>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6">
          Ready to Build Your{' '}
          <span className="text-[#00e5ff] cyan-text-glow">AI Revenue Stream?</span>
        </h2>

        <p className="text-[16px] text-[rgba(255,255,255,0.55)] max-w-2xl mx-auto mb-10 leading-relaxed">
          Join a growing network of agency partners generating predictable, high-margin recurring revenue. Apply today — onboarding takes less than 48 hours.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="mailto:partners@bele.ai"
            className="flex items-center gap-2 bg-[#00e5ff] hover:bg-[#00ccdd] text-[#020b18] text-[15px] font-bold px-8 py-4 rounded-md transition-all duration-200 cyan-glow"
          >
            Apply for Partnership
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#demos"
            className="flex items-center gap-2 border border-[rgba(0,229,255,0.3)] text-white hover:text-[#00e5ff] hover:border-[rgba(0,229,255,0.5)] text-[15px] font-semibold px-8 py-4 rounded-md transition-all duration-200"
          >
            View Live Demos
          </a>
        </div>

        {/* Trust signals */}
        <div className="flex flex-wrap items-center justify-center gap-8 pt-8 border-t border-[rgba(255,255,255,0.07)]">
          {[
            { val: 'No Setup Fee', sub: 'Free to become a partner' },
            { val: '48-Hour', sub: 'Onboarding turnaround' },
            { val: 'Month-to-Month', sub: 'No long-term lock-in' },
          ].map((t) => (
            <div key={t.val} className="text-center">
              <div className="text-[15px] font-bold text-white">{t.val}</div>
              <div className="text-[11px] text-[rgba(255,255,255,0.4)] mt-0.5">{t.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
