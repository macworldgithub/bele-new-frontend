'use client';

import { useState } from 'react';
import { ArrowRight, X, Calendar, Briefcase } from 'lucide-react';

export default function FinalCTA() {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [isDiscoveryModalOpen, setIsDiscoveryModalOpen] = useState(false);

  return (
    <>
      <section className="relative py-24 bg-[#020b18] overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-30" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[rgba(0,229,255,0.03)] rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-10">
          <div className="flex justify-center mb-8">
            <img src="/images/logo.png" alt="Bele AI" className="w-16 h-16 object-contain" />
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-white leading-[1.1] mb-6">
            Let's Empower Individuals & Organisations Together
          </h2>

          <p className="text-[16px] text-[rgba(255,255,255,0.55)] max-w-2xl mx-auto mb-10 leading-relaxed">
            The AI automation revolution is here. Secure your territory, complete your onboarding, and start deploying enterprise-grade solutions to your clients in under 90 days.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 relative z-10">
            <button
              onClick={() => setIsApplyModalOpen(true)}
              className="flex items-center justify-center gap-2 bg-[#00e5ff] hover:bg-[#00ccdd] text-[#020b18] text-[15px] font-bold px-8 py-4 rounded-md transition-all duration-200 cyan-glow w-full sm:w-auto"
            >
              Apply for Partnership
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsDiscoveryModalOpen(true)}
              className="flex items-center justify-center gap-2 border border-[rgba(255,255,255,0.1)] hover:border-[rgba(0,229,255,0.3)] bg-[rgba(255,255,255,0.03)] hover:bg-[rgba(0,229,255,0.05)] text-white text-[15px] font-semibold px-8 py-4 rounded-md transition-all duration-200 w-full sm:w-auto"
            >
              Schedule Discovery Call
            </button>
          </div>

          <div className="text-[12px] text-[rgba(255,255,255,0.3)]">
            Subject to partner agreement and territorial availability.
          </div>
        </div>
      </section>

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

      {/* Schedule Discovery Call Modal */}
      {isDiscoveryModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsDiscoveryModalOpen(false)} />
          <div className="relative w-full max-w-lg bg-[#020b18] border border-[rgba(255,255,255,0.1)] rounded-xl shadow-2xl flex flex-col">
            <div className="flex items-center justify-between p-5 border-b border-[rgba(255,255,255,0.05)]">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-[#00e5ff]" />
                <h3 className="text-lg font-bold text-white">Schedule Discovery Call</h3>
              </div>
              <button onClick={() => setIsDiscoveryModalOpen(false)} className="text-[rgba(255,255,255,0.5)] hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6">
              <p className="text-[13px] text-[rgba(255,255,255,0.6)] mb-6">
                Select a slot to meet our partner onboarding team and discuss client-scoping workflows.
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
                  <label className="block text-[10px] font-bold tracking-widest text-[rgba(255,255,255,0.5)] uppercase mb-2">Client Pipeline / Focus Verticals</label>
                  <input type="text" placeholder="e.g. Telecommunications, Hospitality..." className="w-full bg-[#050f24] border border-[rgba(255,255,255,0.1)] rounded-md px-4 py-3 text-[14px] text-white focus:outline-none focus:border-[#00e5ff] transition-colors" />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-end gap-4 p-5 border-t border-[rgba(255,255,255,0.05)] bg-[#041124] rounded-b-xl">
              <button onClick={() => setIsDiscoveryModalOpen(false)} className="text-[13px] font-semibold text-[rgba(255,255,255,0.6)] hover:text-white transition-colors">
                Cancel
              </button>
              <button onClick={() => setIsDiscoveryModalOpen(false)} className="bg-[#00e5ff] hover:bg-[#00ccdd] text-[#020b18] text-[14px] font-bold px-6 py-2.5 rounded-md transition-colors shadow-[0_0_15px_rgba(0,229,255,0.3)]">
                Schedule Discovery Call
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
