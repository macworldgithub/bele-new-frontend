"use client";

import { useState } from "react";
import Image from "next/image";

const roadmapData = [
  {
    id: "w1",
    weeks: "WEEKS 1-2",
    title: "Onboarding & Enablement",
    milestone: "Demo certified",
    desc: "Get equipped for success. Receive access to the partner portal, e-learning modules, sales playbooks, and interactive demos. Confidently demo all four modules with your named technical mentor.",
  },
  {
    id: "w2",
    weeks: "WEEKS 3-6",
    title: "First Prospect Engagement",
    milestone: "Qualified pipeline",
    desc: "Open high-value conversations. Identify 5–10 customers fitting our Ideal Customer Profile. Leverage joint-call support, scoping templates, and custom live demos.",
  },
  {
    id: "w3",
    weeks: "WEEKS 7-10",
    title: "Scope & Quote",
    milestone: "First signed deal",
    desc: "Build tailored customer-ready proposals using our rapid quoting tools. The Bele solutions team joins technical calls to ensure deep architectural fit.",
  },
  {
    id: "w4",
    weeks: "WEEKS 11-13",
    title: "Activation & Scale",
    milestone: "Compounding MRR",
    desc: "Bele runs the entire technical build, testing, and deployment. You stay updated via the live delivery tracker. First recurring MRR bills and scales.",
  },
];

export default function Roadmap() {
  const [activeTab, setActiveTab] = useState(roadmapData[0].id);
  const activeContent =
    roadmapData.find((d) => d.id === activeTab) || roadmapData[0];

  return (
    <section
      id="roadmap"
      className="relative py-14 bg-[#020b18] overflow-hidden"
    >
      <div className="absolute inset-0 dot-grid opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-[rgba(0,229,255,0.2)] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center border border-[rgba(0,229,255,0.25)] text-[#00e5ff] text-[11px] font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full bg-[rgba(0,229,255,0.05)] mb-5">
            THE PATH TO REVENUE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white leading-tight">
            Your First 90 Days
          </h2>
          <p className="mt-6 text-[15px] text-[rgba(255,255,255,0.55)] max-w-2xl mx-auto leading-relaxed">
            Our onboarding program is designed to get you producing recurring
            revenue within the first quarter, backed by direct support from our
            founders.
          </p>
        </div>

        {/* Tabs Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {roadmapData.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`text-left p-5 rounded-xl border transition-all duration-300 ${
                  isActive
                    ? "bg-[#041124] border-[rgba(0,229,255,0.3)] shadow-[0_0_15px_rgba(0,229,255,0.1)]"
                    : "bg-[#041124] border-[rgba(255,255,255,0.05)] hover:border-[rgba(255,255,255,0.15)]"
                }`}
              >
                <div
                  className={`text-[11px] font-bold tracking-widest uppercase mb-1.5 ${isActive ? "text-[#00e5ff]" : "text-[rgba(255,255,255,0.4)]"}`}
                >
                  {tab.weeks}
                </div>
                <div className="text-[15px] font-bold text-white mb-3 leading-tight">
                  {tab.title}
                </div>
                <div className="inline-flex text-[11px] font-semibold text-[rgba(255,255,255,0.5)] bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.05)] px-2.5 py-1 rounded-md">
                  {tab.milestone}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Content Panel */}
        <div className="bg-[#050f24] border border-[rgba(255,255,255,0.08)] rounded-2xl p-8 lg:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[rgba(0,229,255,0.03)] rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            {/* Left side text */}
            <div>
              <div className="text-[12px] font-bold tracking-widest uppercase text-[#00e5ff] mb-2">
                {activeContent.weeks}
              </div>
              <h3 className="text-[28px] font-extrabold text-white mb-6">
                {activeContent.title}
              </h3>
              <p className="text-[15px] text-[rgba(255,255,255,0.6)] leading-relaxed mb-8">
                {activeContent.desc}
              </p>
              <div className="flex items-center gap-3">
                <span className="text-[13px] font-bold text-[#00e5ff]">
                  Target Milestone:
                </span>
                <span className="inline-flex text-[12px] font-semibold text-white bg-[rgba(0,229,255,0.1)] border border-[rgba(0,229,255,0.2)] px-3 py-1.5 rounded-md">
                  {activeContent.milestone}
                </span>
              </div>
            </div>

            {/* Right side Image */}
            <div className="relative flex justify-center">
              <div className="relative w-full rounded-xl overflow-hidden border border-[rgba(255,255,255,0.08)] bg-[#041124] shadow-lg">
                <Image
                  src="/images/patner.png"
                  alt="90 Day Partner Journey"
                  width={600}
                  height={400}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
