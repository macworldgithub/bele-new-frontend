'use client';

const footerLinks = {
  Product: ['AI Voice Assistant', 'Web Chat Agent', 'Workflow Automation', 'SMS & Messaging AI', 'Analytics Dashboard', 'Custom Integrations'],
  Partnership: ['Become a Partner', 'Partner Portal', 'Earnings Calculator', 'Case Studies', 'Agency Model', '90-Day Roadmap'],
  Company: ['About Bele AI', 'Blog', 'Careers', 'Press', 'Contact'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'SLA Agreement'],
};

export default function Footer() {
  return (
    <footer className="relative bg-[#020b18] border-t border-[rgba(0,229,255,0.1)] overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2 flex flex-col gap-5">
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
            </div>
            <p className="text-[13px] text-[rgba(255,255,255,0.45)] leading-relaxed max-w-xs">
              Intelligent AI solutions for forward-thinking businesses. Empowering agency partners to deliver transformative AI at scale.
            </p>
            <div className="flex items-center gap-3 pt-2">
              {['X', 'Li', 'Yt'].map((icon) => (
                <a
                  key={icon}
                  href="#"
                  className="w-8 h-8 rounded-lg bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.08)] flex items-center justify-center text-[10px] font-bold text-[rgba(255,255,255,0.45)] hover:text-[#00e5ff] hover:border-[rgba(0,229,255,0.25)] transition-all duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section} className="flex flex-col gap-4">
              <div className="text-[11px] font-bold tracking-widest uppercase text-[rgba(255,255,255,0.35)]">{section}</div>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[13px] text-[rgba(255,255,255,0.5)] hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-[rgba(255,255,255,0.07)] py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-[12px] text-[rgba(255,255,255,0.3)]">
            &copy; {new Date().getFullYear()} Bele AI. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5 text-[11px] text-[rgba(255,255,255,0.25)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00e5ff] opacity-60" />
            Empowering the next wave of AI-driven businesses
          </div>
        </div>
      </div>
    </footer>
  );
}
