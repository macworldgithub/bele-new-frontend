"use client";

import { useState, useEffect } from "react";
import { Sparkles, ArrowRight, Menu, X, Briefcase } from "lucide-react";

const navLinks = [
  { label: "Opportunity", href: "#opportunity" },
  { label: "Core Modules", href: "#core-modules" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Agency Model", href: "#agency-model" },
  { label: "90-Day Roadmap", href: "#roadmap" },
  { label: "Earnings Calculator", href: "#calculator" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#020b18]/95 backdrop-blur-md border-b border-[rgba(0,229,255,0.1)]"
            : "bg-[#020b18]/80 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center">
                <img
                  src="/images/logo.png"
                  alt="Bele AI Logo"
                  className="w-8 h-8 object-contain"
                />
              </div>
              <span className="text-white font-bold text-lg tracking-tight">
                Bele<span className="text-[#00e5ff]">.ai</span>
              </span>
              <div className="hidden sm:block w-px h-5 bg-[rgba(255,255,255,0.15)] mx-1" />
            </div>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="nav-link text-[13px] text-[rgba(255,255,255,0.65)] hover:text-[#00e5ff] no-underline hover:no-underline px-3 py-1.5 rounded-md transition-all duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Right side */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="/demo"
                className="flex items-center gap-1.5 text-[13px] font-semibold text-white hover:text-[#00e5ff] no-underline hover:no-underline transition-colors duration-200"
              >
                Interactive Demos
                <Sparkles className="w-3.5 h-3.5 text-[#00e5ff]" />
              </a>
              <button
                onClick={() => setIsApplyModalOpen(true)}
                className="flex items-center gap-2 bg-[#00e5ff] hover:bg-[#00ccdd] text-[#020b18] text-[13px] font-bold px-4 py-2 rounded-md transition-all duration-200 cyan-glow"
              >
                Become a Partner
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden text-white p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-[#020b18]/98 border-t border-[rgba(0,229,255,0.1)] px-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-[14px] text-[rgba(255,255,255,0.7)] hover:text-[#00e5ff] no-underline hover:no-underline py-2.5 border-b border-[rgba(255,255,255,0.05)] last:border-0"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-4 flex flex-col gap-3">
              <a
                href="/demo"
                className="flex items-center gap-2 text-[13px] font-semibold text-white no-underline hover:no-underline"
              >
                Interactive Demos{" "}
                <Sparkles className="w-3.5 h-3.5 text-[#00e5ff]" />
              </a>
              <button
                onClick={() => setIsApplyModalOpen(true)}
                className="flex items-center justify-center gap-2 bg-[#00e5ff] text-[#020b18] text-[13px] font-bold px-4 py-2.5 rounded-md"
              >
                Become a Partner <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
      </nav>
      {/* Apply for Partnership Modal */}
      {isApplyModalOpen && (
        <div className="fixed inset-0 z-[9999]">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsApplyModalOpen(false)}
          />

          <div className="absolute inset-0 flex items-center justify-center p-4">
            <div className="relative w-full max-w-lg bg-[#020b18] border border-[rgba(255,255,255,0.1)] rounded-xl shadow-2xl flex flex-col">
              <div className="relative w-full max-w-lg bg-[#020b18] border border-[rgba(255,255,255,0.1)] rounded-xl shadow-2xl flex flex-col">
                <div className="flex items-center justify-between p-5 border-b border-[rgba(255,255,255,0.05)]">
                  <div className="flex items-center gap-3">
                    <Briefcase className="w-5 h-5 text-[#00e5ff]" />
                    <h3 className="text-lg font-bold text-white">
                      Apply for Bele AI Partnership
                    </h3>
                  </div>
                  <button
                    onClick={() => setIsApplyModalOpen(false)}
                    className="text-[rgba(255,255,255,0.5)] hover:text-white"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="p-6">
                  <p className="text-[13px] text-[rgba(255,255,255,0.6)] mb-6">
                    Submit your application to secure your territory and begin
                    the 90-day onboarding sequence.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-[10px] font-bold tracking-widest text-[rgba(255,255,255,0.5)] uppercase mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#050f24] border border-[rgba(0,229,255,0.3)] rounded-md px-4 py-3 text-[14px] text-white focus:outline-none focus:border-[#00e5ff] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold tracking-widest text-[rgba(255,255,255,0.5)] uppercase mb-2">
                        Work Email
                      </label>
                      <input
                        type="email"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#050f24] border border-[rgba(255,255,255,0.1)] rounded-md px-4 py-3 text-[14px] text-white focus:outline-none focus:border-[#00e5ff] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold tracking-widest text-[rgba(255,255,255,0.5)] uppercase mb-2">
                        Company / Agency Name
                      </label>
                      <input
                        type="text"
                        placeholder="Acme Digital"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full bg-[#050f24] border border-[rgba(255,255,255,0.1)] rounded-md px-4 py-3 text-[14px] text-white focus:outline-none focus:border-[#00e5ff] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold tracking-widest text-[rgba(255,255,255,0.5)] uppercase mb-2">
                        Estimated Client Count
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 10 clients ready for AI automation"
                        value={formData.estimatedClientCount}
                        onChange={(e) => setFormData({ ...formData, estimatedClientCount: e.target.value })}
                        className="w-full bg-[#050f24] border border-[rgba(255,255,255,0.1)] rounded-md px-4 py-3 text-[14px] text-white focus:outline-none focus:border-[#00e5ff] transition-colors"
                      />
                    </div>
                  </div>
                  {message.text && (
                    <div className={`mt-4 text-[13px] font-medium ${message.type === 'error' ? 'text-red-400' : 'text-green-400'}`}>
                      {message.text}
                    </div>
                  )}
                </div>
                <div className="flex items-center justify-end gap-4 p-5 border-t border-[rgba(255,255,255,0.05)] bg-[#041124] rounded-b-xl">
                  <button
                    onClick={() => setIsApplyModalOpen(false)}
                    className="text-[13px] font-semibold text-[rgba(255,255,255,0.6)] hover:text-white transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleApplySubmit}
                    disabled={loading}
                    className="bg-[#00e5ff] hover:bg-[#00ccdd] disabled:opacity-50 text-[#020b18] text-[14px] font-bold px-6 py-2.5 rounded-md transition-colors shadow-[0_0_15px_rgba(0,229,255,0.3)]"
                  >
                    {loading ? "Submitting..." : "Submit Application"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
