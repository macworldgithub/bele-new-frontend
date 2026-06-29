'use client';

import { useState } from 'react';
import { ArrowRight, X, Briefcase } from 'lucide-react';

export default function EarningsCalculator() {
  const [clients, setClients] = useState(5);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [modules, setModules] = useState(2);
  const [integrations, setIntegrations] = useState(1);
  const [formData, setFormData] = useState({ name: "", email: "", company: "", estimatedClientCount: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const handleApplySubmit = async () => {
    if (!formData.name || !formData.email || !formData.company) {
      setMessage({ type: "error", text: "Name, email, and company are required." });
      return;
    }
    setLoading(true);
    setMessage({ type: "", text: "" });
    try {
      const res = await fetch("https://bele-email.omnisuiteai.com/api/partnership", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        setMessage({ type: "success", text: data.message || "Application submitted successfully!" });
        setFormData({ name: "", email: "", company: "", estimatedClientCount: "" });
        setTimeout(() => {
          setIsApplyModalOpen(false);
          setMessage({ type: "", text: "" });
        }, 2000);
      } else {
        setMessage({ type: "error", text: data.error || "Failed to submit application." });
      }
    } catch (error) {
      setMessage({ type: "error", text: "An error occurred. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  // Pricing constants based on screenshot footnote
  const setupPerMod = 1500;
  const setupPerInt = 500;
  const licensePerMod = 450;
  const licensePerInt = 150;

  // Tier logic (inferred from design)
  let tierName = 'Partner Tier 1';
  let mrrShare = 0.20;
  let setupShare = 0.15;

  if (clients >= 6 && clients <= 15) {
    tierName = 'Partner Tier 2';
    mrrShare = 0.30;
    setupShare = 0.20;
  } else if (clients > 15) {
    tierName = 'Partner Tier 3';
    mrrShare = 0.40;
    setupShare = 0.25;
  }

  // Calculations
  const totalSetup = clients * ((modules * setupPerMod) + (integrations * setupPerInt));
  const totalMrr = clients * ((modules * licensePerMod) + (integrations * licensePerInt));

  const yourShareMrr = totalMrr * mrrShare;
  const yourShareSetup = totalSetup * setupShare;

  const year1Earnings = yourShareSetup + (yourShareMrr * 12);

  return (
    <>
      <section id="calculator" className="relative py-14 bg-[#020b18] overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-30" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-[rgba(0,229,255,0.2)] to-transparent" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center border border-[rgba(0,229,255,0.25)] text-[#00e5ff] text-[11px] font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full bg-[rgba(0,229,255,0.05)] mb-5">
              INTERACTIVE MODELER
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white leading-tight">
              Model Your Partnership Earnings
            </h2>
            <p className="mt-6 text-[15px] text-[rgba(255,255,255,0.55)] max-w-2xl mx-auto leading-relaxed">
              Use our live modeler to estimate your setup fee share and monthly recurring revenue (MRR) based on your client network scale.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Panel - Controls */}
            <div className="bg-[#041124] border border-[rgba(255,255,255,0.08)] rounded-2xl p-8 lg:p-10 shadow-lg flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-white mb-8 flex items-center gap-2">
                  <span className="text-[#00e5ff]">%</span> Revenue Parameters
                </h3>

                <div className="flex flex-col gap-10">
                  {/* Clients */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <label className="text-[14px] font-bold text-white">Active Clients Portfolio</label>
                      <span className="text-[#00e5ff] text-[18px] font-extrabold">{clients} Clients</span>
                    </div>
                    <input
                      type="range"
                      min={1}
                      max={50}
                      value={clients}
                      onChange={(e) => setClients(Number(e.target.value))}
                      className="w-full h-1 bg-[rgba(255,255,255,0.1)] rounded-full appearance-none cursor-pointer"
                      style={{
                        background: `linear-gradient(to right, #00e5ff ${((clients - 1) / 49) * 100}%, rgba(255,255,255,0.1) ${((clients - 1) / 49) * 100}%)`,
                      }}
                    />
                    <div className="flex justify-between text-[11px] font-medium text-[rgba(255,255,255,0.3)] mt-2">
                      <span>1 Client</span><span>50 Clients</span>
                    </div>
                  </div>

                  {/* Modules */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <label className="text-[14px] font-bold text-white">Average Modules deployed per client</label>
                      <span className="text-[#00e5ff] text-[18px] font-extrabold">{modules} {modules === 1 ? 'Module' : 'Modules'}</span>
                    </div>
                    <input
                      type="range"
                      min={1}
                      max={4}
                      value={modules}
                      onChange={(e) => setModules(Number(e.target.value))}
                      className="w-full h-1 bg-[rgba(255,255,255,0.1)] rounded-full appearance-none cursor-pointer"
                      style={{
                        background: `linear-gradient(to right, #00e5ff ${((modules - 1) / 3) * 100}%, rgba(255,255,255,0.1) ${((modules - 1) / 3) * 100}%)`,
                      }}
                    />
                    <div className="flex justify-between text-[11px] font-medium text-[rgba(255,255,255,0.3)] mt-2">
                      <span>1 Module</span><span>4 Modules (Full Suite)</span>
                    </div>
                  </div>

                  {/* Integrations */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <label className="text-[14px] font-bold text-white">Custom integrations per client</label>
                      <span className="text-[#00e5ff] text-[18px] font-extrabold">{integrations} {integrations === 1 ? 'Integration' : 'Integrations'}</span>
                    </div>
                    <input
                      type="range"
                      min={0}
                      max={5}
                      value={integrations}
                      onChange={(e) => setIntegrations(Number(e.target.value))}
                      className="w-full h-1 bg-[rgba(255,255,255,0.1)] rounded-full appearance-none cursor-pointer"
                      style={{
                        background: `linear-gradient(to right, #00e5ff ${(integrations / 5) * 100}%, rgba(255,255,255,0.1) ${(integrations / 5) * 100}%)`,
                      }}
                    />
                    <div className="flex justify-between text-[11px] font-medium text-[rgba(255,255,255,0.3)] mt-2">
                      <span>0 (Off-the-shelf)</span><span>5 Integrations</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-6 border-t border-[rgba(255,255,255,0.05)] text-[11px] text-[rgba(255,255,255,0.4)] leading-relaxed">
                Calculations are modeled on standard setup fee ($1,500/mod, $500/int) and license pricing ($450/mod, $150/int).
              </div>
            </div>

            {/* Right Panel - Results */}
            <div className="bg-[#050f24] border border-[rgba(255,255,255,0.08)] rounded-2xl p-8 lg:p-10 shadow-2xl relative flex flex-col">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[rgba(0,229,255,0.03)] rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center justify-between mb-10 relative z-10">
                <h3 className="text-xl font-bold text-white">Your Share Projections</h3>
                <span className="inline-flex text-[11px] font-bold text-[#00e5ff] bg-[rgba(0,229,255,0.08)] border border-[rgba(0,229,255,0.2)] px-3 py-1 rounded-full uppercase tracking-wider">
                  {tierName}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-8 mb-10 relative z-10">
                <div>
                  <div className="text-[11px] font-bold tracking-widest text-[rgba(255,255,255,0.4)] uppercase mb-2">MRR Share Percentage</div>
                  <div className="text-3xl font-extrabold text-white">{(mrrShare * 100).toFixed(0)}%</div>
                </div>
                <div>
                  <div className="text-[11px] font-bold tracking-widest text-[rgba(255,255,255,0.4)] uppercase mb-2">Setup Share Percentage</div>
                  <div className="text-3xl font-extrabold text-white">{(setupShare * 100).toFixed(0)}%</div>
                </div>
              </div>

              <div className="flex flex-col gap-4 mb-8 relative z-10 border-b border-[rgba(255,255,255,0.06)] pb-8">
                <div className="flex justify-between items-end">
                  <span className="text-[13px] text-[rgba(255,255,255,0.5)]">Total Portfolio Setup Fees:</span>
                  <span className="text-[15px] font-bold text-white">${totalSetup.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-end">
                  <span className="text-[13px] text-[rgba(255,255,255,0.5)]">Total Portfolio Monthly Fees:</span>
                  <span className="text-[15px] font-bold text-white">${totalMrr.toLocaleString()}/mo</span>
                </div>
              </div>

              <div className="mb-2 border border-[#00CCDD] p-4 rounded-xl relative z-10">
                <div className="flex justify-between items-center">
                  <span className="text-[13px] font-bold text-[#00e5ff] flex items-center gap-2">
                    <span className="text-[15px]">$</span> Your Share MRR:
                  </span>
                  <span className="text-[16px] font-extrabold text-[#00e5ff] tracking-tight">
                    ${yourShareMrr.toLocaleString()}/mo
                  </span>
                </div>
              </div>

              <div className="mt-auto relative z-10">
                <div className="flex justify-between items-end mb-6">
                  <div>
                    <div className="text-[11px] font-bold tracking-widest text-[rgba(255,255,255,0.4)] uppercase mb-1">Year 1 Earnings Potential</div>
                    <div className="text-[10px] text-[rgba(255,255,255,0.3)]">(Setup share + 12mo MRR share)</div>
                  </div>
                  <span className="text-2xl font-extrabold text-white">
                    ${year1Earnings.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                  </span>
                </div>

                <button
                  onClick={() => setIsApplyModalOpen(true)}
                  className="w-full flex items-center justify-center gap-2 bg-[#00e5ff] hover:bg-[#00ccdd] text-[#020b18] text-[15px] font-bold py-4 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(0,229,255,0.15)] hover:shadow-[0_0_25px_rgba(0,229,255,0.3)]"
                >
                  Become a Partner & Start Earning <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
        input[type='range']::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #00e5ff;
          cursor: pointer;
          border: 4px solid #020b18;
          box-shadow: 0 0 10px rgba(0, 229, 255, 0.5);
        }
        input[type='range']::-moz-range-thumb {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #00e5ff;
          cursor: pointer;
          border: 4px solid #020b18;
          box-shadow: 0 0 10px rgba(0, 229, 255, 0.5);
        }
      `}</style>
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
                  <input type="text" placeholder="John Doe" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full bg-[#050f24] border border-[rgba(0,229,255,0.3)] rounded-md px-4 py-3 text-[14px] text-white focus:outline-none focus:border-[#00e5ff] transition-colors" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold tracking-widest text-[rgba(255,255,255,0.5)] uppercase mb-2">Work Email</label>
                  <input type="email" placeholder="john@company.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full bg-[#050f24] border border-[rgba(255,255,255,0.1)] rounded-md px-4 py-3 text-[14px] text-white focus:outline-none focus:border-[#00e5ff] transition-colors" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold tracking-widest text-[rgba(255,255,255,0.5)] uppercase mb-2">Company / Agency Name</label>
                  <input type="text" placeholder="Acme Digital" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} className="w-full bg-[#050f24] border border-[rgba(255,255,255,0.1)] rounded-md px-4 py-3 text-[14px] text-white focus:outline-none focus:border-[#00e5ff] transition-colors" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold tracking-widest text-[rgba(255,255,255,0.5)] uppercase mb-2">Estimated Client Count</label>
                  <input type="text" placeholder="e.g. 10 clients ready for AI automation" value={formData.estimatedClientCount} onChange={(e) => setFormData({ ...formData, estimatedClientCount: e.target.value })} className="w-full bg-[#050f24] border border-[rgba(255,255,255,0.1)] rounded-md px-4 py-3 text-[14px] text-white focus:outline-none focus:border-[#00e5ff] transition-colors" />
                </div>
              </div>
              {message.text && (
                <div className={`mt-4 text-[13px] font-medium ${message.type === 'error' ? 'text-red-400' : 'text-green-400'}`}>
                  {message.text}
                </div>
              )}
            </div>
            <div className="flex items-center justify-end gap-4 p-5 border-t border-[rgba(255,255,255,0.05)] bg-[#041124] rounded-b-xl">
              <button onClick={() => setIsApplyModalOpen(false)} className="text-[13px] font-semibold text-[rgba(255,255,255,0.6)] hover:text-white transition-colors">
                Cancel
              </button>
              <button onClick={handleApplySubmit} disabled={loading} className="bg-[#00e5ff] hover:bg-[#00ccdd] disabled:opacity-50 text-[#020b18] text-[14px] font-bold px-6 py-2.5 rounded-md transition-colors shadow-[0_0_15px_rgba(0,229,255,0.3)]">
                {loading ? "Submitting..." : "Submit Application"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
