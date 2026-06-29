'use client';

import { useState } from 'react';

export default function EarningsCalculator() {
  const [clients, setClients] = useState(5);
  const [avgMrr, setAvgMrr] = useState(6000);
  const [tier, setTier] = useState(0.35);

  const monthly = clients * avgMrr * tier;
  const annual = monthly * 12;

  return (
    <section id="calculator" className="relative py-24 bg-[#050f1f] overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-25" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-[rgba(0,229,255,0.2)] to-transparent" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-flex items-center border border-[rgba(0,229,255,0.25)] text-[#00e5ff] text-[11px] font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full bg-[rgba(0,229,255,0.05)] mb-5">
            Earnings Calculator
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            Model Your{' '}
            <span className="text-[#00e5ff]">Revenue Potential</span>
          </h2>
          <p className="mt-4 text-[15px] text-[rgba(255,255,255,0.55)] max-w-xl mx-auto">
            Adjust the sliders to see your projected monthly and annual earnings as a Bele AI partner.
          </p>
        </div>

        <div className="gradient-border rounded-2xl p-8 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Controls */}
            <div className="flex flex-col gap-8">
              {/* Clients */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-[13px] font-semibold text-[rgba(255,255,255,0.7)]">Number of Active Clients</label>
                  <span className="text-[#00e5ff] text-[20px] font-extrabold">{clients}</span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={30}
                  value={clients}
                  onChange={(e) => setClients(Number(e.target.value))}
                  className="w-full h-1.5 rounded-full appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #00e5ff ${((clients - 1) / 29) * 100}%, rgba(255,255,255,0.1) ${((clients - 1) / 29) * 100}%)`,
                  }}
                />
                <div className="flex justify-between text-[10px] text-[rgba(255,255,255,0.3)] mt-1.5">
                  <span>1</span><span>15</span><span>30</span>
                </div>
              </div>

              {/* Avg MRR */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-[13px] font-semibold text-[rgba(255,255,255,0.7)]">Average Client MRR</label>
                  <span className="text-[#00e5ff] text-[20px] font-extrabold">${avgMrr.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min={1000}
                  max={15000}
                  step={500}
                  value={avgMrr}
                  onChange={(e) => setAvgMrr(Number(e.target.value))}
                  className="w-full h-1.5 rounded-full appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #00e5ff ${((avgMrr - 1000) / 14000) * 100}%, rgba(255,255,255,0.1) ${((avgMrr - 1000) / 14000) * 100}%)`,
                  }}
                />
                <div className="flex justify-between text-[10px] text-[rgba(255,255,255,0.3)] mt-1.5">
                  <span>$1K</span><span>$8K</span><span>$15K</span>
                </div>
              </div>

              {/* Partner Tier */}
              <div>
                <label className="text-[13px] font-semibold text-[rgba(255,255,255,0.7)] block mb-3">Partner Tier</label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { label: 'Affiliate', value: 0.15 },
                    { label: 'Silver', value: 0.25 },
                    { label: 'Gold', value: 0.35 },
                    { label: 'Platinum', value: 0.40 },
                  ].map((t) => (
                    <button
                      key={t.label}
                      onClick={() => setTier(t.value)}
                      className={`py-2 px-3 rounded-lg text-[12px] font-semibold transition-all duration-200 ${
                        tier === t.value
                          ? 'bg-[#00e5ff] text-[#020b18]'
                          : 'bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.1)] text-[rgba(255,255,255,0.55)] hover:border-[rgba(0,229,255,0.3)] hover:text-white'
                      }`}
                    >
                      {t.label} ({(t.value * 100).toFixed(0)}%)
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="flex flex-col gap-5 justify-center">
              <div className="bg-[rgba(0,229,255,0.05)] border border-[rgba(0,229,255,0.2)] rounded-xl p-6 text-center">
                <div className="text-[11px] font-semibold tracking-widest uppercase text-[rgba(255,255,255,0.4)] mb-2">Monthly Earnings</div>
                <div className="text-5xl font-extrabold text-[#00e5ff] cyan-text-glow">
                  ${monthly.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                </div>
                <div className="text-[12px] text-[rgba(255,255,255,0.35)] mt-2">per month</div>
              </div>
              <div className="gradient-border rounded-xl p-6 text-center">
                <div className="text-[11px] font-semibold tracking-widest uppercase text-[rgba(255,255,255,0.4)] mb-2">Annual Earnings</div>
                <div className="text-4xl font-extrabold text-white">
                  ${annual.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                </div>
                <div className="text-[12px] text-[rgba(255,255,255,0.35)] mt-2">per year</div>
              </div>

              <div className="bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.07)] rounded-xl p-5">
                <div className="text-[11px] text-[rgba(255,255,255,0.35)] mb-3 uppercase tracking-wider font-semibold">Breakdown</div>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between text-[12px]">
                    <span className="text-[rgba(255,255,255,0.45)]">Clients × Avg MRR</span>
                    <span className="text-white font-semibold">${(clients * avgMrr).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-[12px]">
                    <span className="text-[rgba(255,255,255,0.45)]">Partner Share</span>
                    <span className="text-[#00e5ff] font-semibold">{(tier * 100).toFixed(0)}%</span>
                  </div>
                  <div className="h-px bg-[rgba(255,255,255,0.06)] my-1" />
                  <div className="flex justify-between text-[12px]">
                    <span className="text-[rgba(255,255,255,0.45)]">Your Monthly Take</span>
                    <span className="text-white font-bold">${monthly.toLocaleString('en-US', { maximumFractionDigits: 0 })}</span>
                  </div>
                </div>
              </div>

              <a
                href="#partner"
                className="flex items-center justify-center gap-2 bg-[#00e5ff] hover:bg-[#00ccdd] text-[#020b18] text-[13px] font-bold px-6 py-3 rounded-md transition-all duration-200 cyan-glow"
              >
                Start Earning — Apply Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Custom range input styles */}
      <style jsx>{`
        input[type='range']::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #00e5ff;
          cursor: pointer;
          box-shadow: 0 0 8px rgba(0, 229, 255, 0.5);
        }
        input[type='range']::-moz-range-thumb {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #00e5ff;
          cursor: pointer;
          border: none;
          box-shadow: 0 0 8px rgba(0, 229, 255, 0.5);
        }
      `}</style>
    </section>
  );
}
