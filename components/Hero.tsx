'use client';

import { ArrowRight, Sparkles } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
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
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold leading-[1.1] text-white">
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
              <a
                href="#partner"
                className="flex items-center gap-2 bg-[#00e5ff] hover:bg-[#00ccdd] active:bg-[#00b8cc] text-[#020b18] text-[14px] font-bold px-6 py-3 rounded-md transition-all duration-200 cyan-glow"
              >
                Apply for Partnership
                <ArrowRight className="w-4 h-4" />
              </a>
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

          {/* Right — Partnership diagram card */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[520px] rounded-2xl border border-[rgba(0,229,255,0.15)] bg-[rgba(10,22,40,0.85)] backdrop-blur-sm p-8 shadow-2xl">
              {/* Glow accent on card */}
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-[rgba(0,229,255,0.08)] to-transparent pointer-events-none" />

              <div className="relative flex flex-col gap-6">
                {/* Customer node */}
                <div className="flex justify-center">
                  <div className="flex items-center gap-2 border border-[rgba(0,229,255,0.3)] bg-[rgba(0,229,255,0.06)] text-[#00e5ff] text-[11px] font-semibold tracking-widest uppercase px-5 py-2 rounded-full">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="8" r="4" strokeWidth="1.8"/>
                      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" strokeWidth="1.8" strokeLinecap="round"/>
                    </svg>
                    Customer
                  </div>
                </div>

                {/* Connecting lines down */}
                <div className="flex justify-center gap-16">
                  <div className="w-px h-6 bg-[rgba(0,229,255,0.3)]" />
                  <div className="w-px h-6 bg-[rgba(0,229,255,0.3)]" />
                </div>

                {/* Partner + Bele AI row */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Partner column */}
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[rgba(255,255,255,0.6)] uppercase tracking-wider">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeWidth="1.8"/>
                        <circle cx="9" cy="7" r="4" strokeWidth="1.8"/>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" strokeWidth="1.8"/>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" strokeWidth="1.8"/>
                      </svg>
                      Partner
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {['Lead Gen', 'Scoping', 'Quote', 'Contract'].map((step) => (
                        <div
                          key={step}
                          className="flex flex-col items-center gap-1 bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.07)] rounded-lg p-2"
                        >
                          <div className="w-6 h-6 rounded-md bg-[rgba(0,229,255,0.1)] border border-[rgba(0,229,255,0.2)] flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-[#00e5ff] opacity-70" />
                          </div>
                          <span className="text-[9px] text-[rgba(255,255,255,0.5)] text-center leading-tight">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bele AI column */}
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[rgba(255,255,255,0.6)] uppercase tracking-wider">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" strokeWidth="1.8"/>
                        <path d="M8 12c0-4 8-4 8 0s-8 4-8 0" strokeWidth="1.4"/>
                      </svg>
                      Bele AI
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {['Build', 'Test & Activate', 'Bill', 'Service'].map((step) => (
                        <div
                          key={step}
                          className="flex flex-col items-center gap-1 bg-[rgba(0,229,255,0.03)] border border-[rgba(0,229,255,0.12)] rounded-lg p-2"
                        >
                          <div className="w-6 h-6 rounded-md bg-[rgba(0,229,255,0.12)] border border-[rgba(0,229,255,0.25)] flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-[#00e5ff]" />
                          </div>
                          <span className="text-[9px] text-[rgba(255,255,255,0.5)] text-center leading-tight">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Handshake center icon */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#020b18] border border-[rgba(0,229,255,0.3)] flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#00e5ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M9 11l3 3L22 4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>

                {/* Bottom label */}
                <div className="flex justify-center pt-2">
                  <span className="text-[9px] tracking-[0.2em] text-[rgba(255,255,255,0.25)] uppercase">
                    Strategic Partnership · Shared Growth
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
