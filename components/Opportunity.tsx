'use client';

import { TrendingUp, ShieldCheck, Layers } from 'lucide-react';
import Image from 'next/image';

const features = [
  {
    title: 'High-Margin Recurring Revenue',
    desc: 'Scale your business with escalating recurring commissions up to 40% on all monthly licenses, without the overhead of building a software team.',
    icon: TrendingUp,
  },
  {
    title: 'Enterprise-Grade Architecture',
    desc: 'Deploy highly secure, zero-trust integrated platforms that connect seamlessly with legacy CRMs, databases, and telephony networks.',
    icon: ShieldCheck,
  },
  {
    title: 'Strategic Consulting & Scale',
    desc: 'Offer complete business operations transformation in 90-day rapid implementation cycles to create measurable client impact.',
    icon: Layers,
  },
];

export default function Opportunity() {
  return (
    <section id="opportunity" className="relative py-14 bg-[#020b18] overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-[rgba(0,229,255,0.25)] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            The AI Transition is Happening Now
          </h2>
          <p className="mt-6 text-[16px] text-[rgba(255,255,255,0.6)] max-w-3xl mx-auto leading-relaxed">
            Within 24 months, businesses will run automated pre-sales, onboarding, and support — or lose to those that do. The shift from novelty to necessity is happening now.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Cards */}
          <div className="flex flex-col gap-6">
            {features.map((feature, idx) => (
              <div 
                key={idx}
                className="flex items-start gap-5 p-6 rounded-2xl bg-[#041124] border border-[rgba(255,255,255,0.05)] shadow-lg hover:border-[rgba(0,229,255,0.2)] transition-colors duration-300"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[rgba(0,229,255,0.08)] flex items-center justify-center border border-[rgba(0,229,255,0.15)]">
                  <feature.icon className="w-5 h-5 text-[#00e5ff]" />
                </div>
                <div>
                  <h3 className="text-[17px] font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-[14px] text-[rgba(255,255,255,0.6)] leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Image */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-[600px] rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.1)] shadow-2xl">
              <Image 
                src="/images/keys.png" 
                alt="Four Key Differentiators" 
                width={800} 
                height={600} 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
