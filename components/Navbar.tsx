'use client';

import { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Opportunity', href: '#opportunity' },
  { label: 'Core Modules', href: '#core-modules' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Agency Model', href: '#agency-model' },
  { label: '90-Day Roadmap', href: '#roadmap' },
  { label: 'Earnings Calculator', href: '#calculator' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#020b18]/95 backdrop-blur-md border-b border-[rgba(0,229,255,0.1)]'
          : 'bg-[#020b18]/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full border border-[rgba(0,229,255,0.4)] flex items-center justify-center bg-[rgba(0,229,255,0.05)]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="#00e5ff" strokeWidth="1.5"/>
                <path d="M8 12 C8 8 16 8 16 12 C16 16 8 16 8 12" stroke="#00e5ff" strokeWidth="1.5" fill="none"/>
                <circle cx="12" cy="12" r="2" fill="#00e5ff"/>
              </svg>
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
                className="nav-link text-[13px] text-[rgba(255,255,255,0.65)] hover:text-white px-3 py-1.5 rounded-md hover:bg-[rgba(255,255,255,0.04)] transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#demos"
              className="flex items-center gap-1.5 text-[13px] font-semibold text-white hover:text-[#00e5ff] transition-colors duration-200"
            >
              Interactive Demos
              <Sparkles className="w-3.5 h-3.5 text-[#00e5ff]" />
            </a>
            <a
              href="#partner"
              className="flex items-center gap-2 bg-[#00e5ff] hover:bg-[#00ccdd] text-[#020b18] text-[13px] font-bold px-4 py-2 rounded-md transition-all duration-200 cyan-glow"
            >
              Become a Partner
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
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
              className="block text-[14px] text-[rgba(255,255,255,0.7)] hover:text-white py-2.5 border-b border-[rgba(255,255,255,0.05)] last:border-0"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-4 flex flex-col gap-3">
            <a href="#demos" className="flex items-center gap-2 text-[13px] font-semibold text-white">
              Interactive Demos <Sparkles className="w-3.5 h-3.5 text-[#00e5ff]" />
            </a>
            <a
              href="#partner"
              className="flex items-center justify-center gap-2 bg-[#00e5ff] text-[#020b18] text-[13px] font-bold px-4 py-2.5 rounded-md"
            >
              Become a Partner <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
