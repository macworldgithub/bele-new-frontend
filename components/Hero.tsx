'use client';

import { ArrowRight, Sparkles } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { Briefcase, X } from 'lucide-react';

export default function Hero() {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-16 overflow-hidden bg-[#020b18]">
      {/* Background dot grid */}
      <div className="absolute inset-0 dot-grid opacity-60" />
      {/* Radial glow top */}
      <div className="absolute inset-0 hero-glow pointer-events-none" />
      {/* Side glow accents */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[rgba(0,100,180,0.12)] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-[rgba(0,229,255,0.06)] rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left */}
          <div className="flex flex-col gap-7">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 self-start">
              <span className="badge-pulse flex items-center gap-2 border border-[rgba(0,229,255,0.3)] bg-[rgba(0,229,255,0.05)] text-[#00e5ff] text-[11px] font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full">
                <Sparkles className="w-3 h-3" />
                Bele AI Agency Partnership Program
              </span>
            </div>

            {/* Headline */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-[48px] font-extrabold leading-[1.1] text-white">
                Empower Your Network
                <br />
                with{' '}
                <span className="text-[#00e5ff] cyan-text-glow">Intelligent AI</span>
                <br />
                <span className="text-[#00e5ff] cyan-text-glow">Solutions</span>
              </h1>
            </div>

            {/* Subtext */}
            <p className="text-[15px] text-[rgba(255,255,255,0.62)] leading-relaxed max-w-[480px]">
              Unlock a high-margin recurring revenue stream. You own the client
              relationship and opportunity scoping. Bele AI's world-class
              engineering team handles the complex custom builds, deployment,
              and level-2 support.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-5">
              <button
                onClick={() => setIsApplyModalOpen(true)}
                className="flex items-center gap-2 bg-[#00e5ff] hover:bg-[#00ccdd] active:bg-[#00b8cc] text-[#020b18] text-[14px] font-bold px-6 py-3 rounded-md transition-all duration-200 cyan-glow"
              >
                Apply for Partnership
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="#demos"
                className="flex items-center gap-2 text-[14px] font-medium text-white hover:text-[#00e5ff] transition-colors duration-200"
              >
                Try Interactive Demos
                <Sparkles className="w-4 h-4 text-[#00e5ff]" />
              </a>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-10 pt-4 border-t border-[rgba(255,255,255,0.07)]">
              <div>
                <div className="text-3xl font-extrabold text-white">200+</div>
                <div className="text-[12px] text-[rgba(255,255,255,0.45)] mt-0.5">Global Deployments</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-[#00e5ff]">3M+</div>
                <div className="text-[12px] text-[rgba(255,255,255,0.45)] mt-0.5">Monthly Interactions</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-[#00e5ff]">40%</div>
                <div className="text-[12px] text-[rgba(255,255,255,0.45)] mt-0.5">Max Partner Share</div>
              </div>
            </div>
          </div>

          {/* Right — Partnership diagram image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[600px] rounded-2xl overflow-hidden border border-[rgba(0,229,255,0.15)] shadow-2xl">
              <Image
                src="/images/hero.png"
                alt="Bele AI Strategic Partnership"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
      {/* Apply for Partnership Modal */}
      {isApplyModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsApplyModalOpen(false)} />
          <div className="relative w-full max-w-lg bg-[#020b18] border border-[rgba(255,255,255,0.1)] rounded-xl shadow-2xl flex flex-col">
            <div className="flex items-center justify-between p-5 border-b border-[rgba(255,255,255,0.05)]">
              <div className="flex items-center gap-3">
                <Briefcase className="w-5 h-5 text-[#00e5ff]" />
                <h3 className="text-lg font-bold text-white">Apply for Bele AI Partnership</h3>
              </div>
              <button onClick={() => setIsApplyModalOpen(false)} className="text-[rgba(255,255,255,0.5)] hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6">
              <p className="text-[13px] text-[rgba(255,255,255,0.6)] mb-6">
                Submit your application to secure your territory and begin the 90-day onboarding sequence.
              </p>
              <div className="space-y-4">
                <div>
                  <label className="block text-[10px] font-bold tracking-widest text-[rgba(255,255,255,0.5)] uppercase mb-2">Your Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-[#050f24] border border-[rgba(0,229,255,0.3)] rounded-md px-4 py-3 text-[14px] text-white focus:outline-none focus:border-[#00e5ff] transition-colors" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold tracking-widest text-[rgba(255,255,255,0.5)] uppercase mb-2">Work Email</label>
                  <input type="email" placeholder="john@company.com" className="w-full bg-[#050f24] border border-[rgba(255,255,255,0.1)] rounded-md px-4 py-3 text-[14px] text-white focus:outline-none focus:border-[#00e5ff] transition-colors" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold tracking-widest text-[rgba(255,255,255,0.5)] uppercase mb-2">Company / Agency Name</label>
                  <input type="text" placeholder="Acme Digital" className="w-full bg-[#050f24] border border-[rgba(255,255,255,0.1)] rounded-md px-4 py-3 text-[14px] text-white focus:outline-none focus:border-[#00e5ff] transition-colors" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold tracking-widest text-[rgba(255,255,255,0.5)] uppercase mb-2">Estimated Client Count</label>
                  <input type="text" placeholder="e.g. 10 clients ready for AI automation" className="w-full bg-[#050f24] border border-[rgba(255,255,255,0.1)] rounded-md px-4 py-3 text-[14px] text-white focus:outline-none focus:border-[#00e5ff] transition-colors" />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-end gap-4 p-5 border-t border-[rgba(255,255,255,0.05)] bg-[#041124] rounded-b-xl">
              <button onClick={() => setIsApplyModalOpen(false)} className="text-[13px] font-semibold text-[rgba(255,255,255,0.6)] hover:text-white transition-colors">
                Cancel
              </button>
              <button onClick={() => setIsApplyModalOpen(false)} className="bg-[#00e5ff] hover:bg-[#00ccdd] text-[#020b18] text-[14px] font-bold px-6 py-2.5 rounded-md transition-colors shadow-[0_0_15px_rgba(0,229,255,0.3)]">
                Submit Application
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
