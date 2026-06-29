'use client';


export default function Footer() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-[#020b18] border-t border-[rgba(255,255,255,0.05)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left - Logo */}
        <div className="flex items-center gap-3">
          <img src="/images/logo.png" alt="Bele AI" className="w-8 h-8 object-contain" />
          <span className="text-white font-bold text-[15px] tracking-tight">
            Bele<span className="text-[#00e5ff]">.ai</span>
          </span>
        </div>

        {/* Center - Copyright text */}
        <div className="text-[12px] text-[rgba(255,255,255,0.4)] text-center md:text-left flex-1 md:px-8">
          &copy; {new Date().getFullYear()} Bele.ai. All rights reserved. Private & Confidential. For Internal Partner Use Only.
        </div>

        {/* Right - Links */}
        <div className="flex items-center gap-8">
          <a
            href="#opportunity"
            onClick={(e) => handleScroll(e, 'opportunity')}
            className="text-[13px] font-semibold text-[rgba(255,255,255,0.55)] hover:text-[#00e5ff] transition-colors"
          >
            Opportunity
          </a>
          <a
            href="#core-modules"
            onClick={(e) => handleScroll(e, 'core-modules')}
            className="text-[13px] font-semibold text-[rgba(255,255,255,0.55)] hover:text-[#00e5ff] transition-colors"
          >
            Modules
          </a>
          <a
            href="#agency-model"
            onClick={(e) => handleScroll(e, 'agency-model')}
            className="text-[13px] font-semibold text-[rgba(255,255,255,0.55)] hover:text-[#00e5ff] transition-colors"
          >
            Model
          </a>
        </div>

      </div>
    </footer>
  );
}
