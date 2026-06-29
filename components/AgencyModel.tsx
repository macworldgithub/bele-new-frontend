'use client';

import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

const responsibilities = {
  partner: {
    title: 'Focus on Growth & Strategy',
    desc: 'As the partner, you maintain the commercial relationship. You identify high-value opportunities, scope requirements, and secure the contract using our comprehensive sales playbooks and tools.',
    items: [
      {
        title: 'Lead Generation:',
        desc: 'Source mid-market and enterprise opportunities with our Ideal Customer Profile.'
      },
      {
        title: 'Opportunity Scoping:',
        desc: 'Identify business operational friction points and map modules to customer needs.'
      },
      {
        title: 'Proposal & Contract:',
        desc: 'Quote licenses and integrations using our pricing matrices and sign agreements.'
      }
    ]
  },
  bele: {
    title: 'Enterprise Engineering Delivery',
    desc: 'Bele AI`s engineering team takes over the entire technical lifecycle. We handle the complex integrations, build robust automation workflows, manage secure testing, and maintain the ongoing service infrastructure.',
    items: [
      {
        title: 'Custom Build:',
        desc: 'We configure and deploy selected modules and build custom read/write API integrations.'
      },
      {
        title: 'Testing & Activation:',
        desc: 'We manage end-to-end security audits, sandboxed testing, and go-live operations.'
      },
      {
        title: 'Billing & Ongoing Support:',
        desc: 'We bill licenses, manage usage caps, and provide 24/7 level-2 platform support.'
      }
    ]
  }
};

export default function AgencyModel() {
  const [activeTab, setActiveTab] = useState<'partner' | 'bele'>('partner');
  const activeContent = responsibilities[activeTab];

  return (
    <section id="agency-model" className="relative py-24 bg-[#020b18] overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-[rgba(0,229,255,0.2)] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-flex items-center border border-[rgba(0,229,255,0.25)] text-[#00e5ff] text-[11px] font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full bg-[rgba(0,229,255,0.05)] mb-5">
            PARTNERSHIP BLUEPRINT
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white leading-tight mb-6">
            How the Agency Model Works
          </h2>
          <p className="text-[16px] text-[rgba(255,255,255,0.6)] max-w-3xl mx-auto leading-relaxed">
            We work closely as a team to ensure the end-to-end journey for clients is seamless. You manage the client relationship; we handle the complex engineering.
          </p>
        </div>

        {/* Toggle Switch */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex bg-[#041124] border border-[rgba(255,255,255,0.08)] rounded-full p-1 relative z-10 shadow-lg">
            <button
              onClick={() => setActiveTab('partner')}
              className={`px-6 py-2.5 rounded-full text-[13px] font-bold transition-all duration-300 ${activeTab === 'partner'
                ? 'bg-[#00e5ff] text-[#020b18] shadow-[0_0_15px_rgba(0,229,255,0.4)]'
                : 'text-[rgba(255,255,255,0.5)] hover:text-white'
                }`}
            >
              Your Responsibilities (Partner)
            </button>
            <button
              onClick={() => setActiveTab('bele')}
              className={`px-6 py-2.5 rounded-full text-[13px] font-bold transition-all duration-300 ${activeTab === 'bele'
                ? 'bg-[#00e5ff] text-[#020b18] shadow-[0_0_15px_rgba(0,229,255,0.4)]'
                : 'text-[rgba(255,255,255,0.5)] hover:text-white'
                }`}
            >
              Bele AI's Responsibilities
            </button>
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side - Text Content */}
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {activeContent.title}
              </h3>
              <p className="text-[15px] text-[rgba(255,255,255,0.6)] leading-relaxed">
                {activeContent.desc}
              </p>
            </div>
            <div className="flex flex-col gap-6">
              {activeContent.items.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <CheckCircle2 className="w-5 h-5 text-[#00e5ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white text-[15px] mr-2">{item.title}</span>
                    <span className="text-[14px] text-[rgba(255,255,255,0.55)] leading-relaxed">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-[600px] rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.08)] bg-[#041124] shadow-2xl p-2">
              <div className="absolute inset-0 bg-gradient-to-tr from-[rgba(0,229,255,0.03)] to-transparent pointer-events-none rounded-2xl" />
              <Image
                src="/images/hero.png"
                alt="Partnership Blueprint"
                width={800}
                height={600}
                className="w-full h-auto object-contain rounded-xl relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
