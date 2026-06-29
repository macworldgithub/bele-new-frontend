'use client';

import { useState } from 'react';
import { ChevronDown, ChevronRight, Sparkles, ArrowRight, X, Calendar } from 'lucide-react';
import Image from 'next/image';

const modulesData = [
  {
    id: 'sales',
    title: 'Sales & Service',
    subtitle: '88% General Q&A Managed',
    stat1: '88% General Q&A Managed',
    stat2: '92% Zero-Touch New Connections',
    desc: 'Lives on your website or phone system. Provides 24/7 access to general Q&A topics and detailed product/service information.',
    ideal: 'Telcos, energy retailers, financial services, SaaS — high-volume, high-repetition support flows.',
  },
  {
    id: 'reception',
    title: 'Reception',
    subtitle: '$70k Estimated Loss Prevented',
    stat1: '$70k Estimated Loss Prevented',
    stat2: '24/7/365 Inbound Call Capture',
    desc: 'Enables SMEs to never miss vital inbound customer contact. Captures missed or overflow calls, books appointments, and provides instant quotes.',
    ideal: 'Trades, professional services, clinics, and sales teams with high call volumes.',
  },
  {
    id: 'concierge',
    title: 'Concierge',
    subtitle: '€50k Annual Admin Savings',
    stat1: '€50k Annual Admin Savings',
    stat2: 'Seamless Package Building',
    desc: 'A powerful booking system with built-in upsell and cross-sell functions. Builds customized, guided itineraries and package journeys.',
    ideal: 'Hotels, resorts, multi-venue hospitality groups, and membership-based businesses.',
  },
  {
    id: 'document',
    title: 'Document Handler',
    subtitle: '100% Automated Compliance',
    stat1: 'Instant ABN & Credit Check Validation',
    stat2: 'ABN, Credit & ID Verification',
    desc: 'Collects, analyses, and verifies multiple documents securely. Instantly validates ABNs, interacts with credit agencies, and runs end-to-end KYC/AML.',
    ideal: 'Lenders, brokers, insurance providers, and B2B businesses verifying credentials.',
  }
];

export default function CoreModules() {
  const [activeTab, setActiveTab] = useState(modulesData[0].id);

  const activeModule = modulesData.find(m => m.id === activeTab) || modulesData[0];
  const [isDiscoveryModalOpen, setIsDiscoveryModalOpen] = useState(false);
  return (
    <section id="core-modules" className="relative py-24 bg-[#020b18] overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-25" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center border border-[rgba(0,229,255,0.25)] text-[#00e5ff] text-[11px] font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full bg-[rgba(0,229,255,0.05)] mb-5">
            The Engine Room
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white leading-tight">
            Four Purpose-Built Operating<br />Systems
          </h2>
          <p className="mt-6 text-[15px] text-[rgba(255,255,255,0.55)] max-w-2xl mx-auto">
            Our modules work perfectly off-the-shelf, but their real power is unlocked when integrated directly into your clients' systems and connected to one another.
          </p>
        </div>

        {/* Interactive Modules Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Left Column - Tabs */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            {modulesData.map((mod) => {
              const isActive = activeTab === mod.id;
              return (
                <button
                  key={mod.id}
                  onClick={() => setActiveTab(mod.id)}
                  className={`w-full text-left px-5 py-4 rounded-xl border transition-all duration-200 flex items-center justify-between ${isActive
                    ? 'bg-[rgba(0,229,255,0.05)] border-[rgba(0,229,255,0.3)] shadow-[0_0_15px_rgba(0,229,255,0.1)]'
                    : 'bg-[#041124] border-[rgba(255,255,255,0.05)] hover:border-[rgba(255,255,255,0.15)]'
                    }`}
                >
                  <div>
                    <div className="text-[15px] font-bold text-white mb-1">{mod.title}</div>
                    <div className={`text-[12px] font-medium ${isActive ? 'text-[#00e5ff]' : 'text-[#00e5ff] opacity-80'}`}>
                      {mod.subtitle}
                    </div>
                  </div>
                  {isActive ? (
                    <ChevronDown className="w-4 h-4 text-[#00e5ff]" />
                  ) : (
                    <ChevronRight className="w-4 h-4 text-[rgba(255,255,255,0.3)]" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Column - Content Panel */}
          <div className="lg:col-span-8">
            <div className="bg-[#050f24] border border-[rgba(255,255,255,0.08)] rounded-2xl p-8 lg:p-10 h-full flex flex-col shadow-2xl relative overflow-hidden">
              {/* Subtle background glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[rgba(0,229,255,0.03)] rounded-full blur-3xl pointer-events-none" />

              {/* Header stats */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 mb-8 relative z-10">
                <h3 className="text-2xl font-bold text-white">{activeModule.title}</h3>
                <div className="flex flex-col sm:items-end gap-1">
                  <div className="text-[#00e5ff] font-bold text-[15px]">{activeModule.stat1}</div>
                  <div className="text-[rgba(255,255,255,0.4)] text-[12px]">{activeModule.stat2}</div>
                </div>
              </div>

              {/* Description */}
              <p className="text-[15px] text-[rgba(255,255,255,0.7)] leading-relaxed mb-8 relative z-10 max-w-xl">
                {activeModule.desc}
              </p>

              {/* Ideal Customer Profile Box */}
              <div className="bg-[#0a162e] border border-[rgba(255,255,255,0.05)] rounded-xl p-6 mb-10 relative z-10">
                <div className="text-[10px] font-bold tracking-widest text-[rgba(255,255,255,0.4)] uppercase mb-3">
                  Ideal Customer Profile:
                </div>
                <p className="text-[14px] text-[rgba(255,255,255,0.6)] leading-relaxed">
                  {activeModule.ideal}
                </p>
              </div>

              {/* Bottom Actions */}
              <div className="mt-auto pt-6 border-t border-[rgba(255,255,255,0.06)] flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
                <span className="text-[11px] text-[rgba(255,255,255,0.4)]">
                  Fully compliant & integration-ready
                </span>
                <div className="flex items-center gap-4">
                  <a href="#demo" className="flex items-center gap-2 text-[13px] font-semibold text-white hover:text-[#00e5ff] transition-colors">
                    Try Live Demo <Sparkles className="w-3.5 h-3.5 text-[#00e5ff]" />
                  </a>
                  <button onClick={() => setIsDiscoveryModalOpen(true)} className="flex items-center gap-2 bg-[#00e5ff] hover:bg-[#00ccdd] text-[#020b18] text-[13px] font-bold px-5 py-2.5 rounded-md transition-colors">
                    Book Discovery Call <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Image */}
        <div className="relative flex justify-center mt-10">
          <div className="relative w-full max-w-[800px] rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.05)] shadow-2xl bg-[#041124]">
            <Image
              src="/images/purpose.png"
              alt="Purpose Built Systems Connected"
              width={1000}
              height={400}
              className="w-full h-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-500"
            />
          </div>
        </div>
      </div>
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
    </section>
  );
}
