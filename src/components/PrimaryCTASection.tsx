import React from 'react';
import {
  Sparkles,
  ShieldCheck,
  Building,
  MapPin,
  ChevronRight,
  Globe,
  ArrowUpRight,
} from 'lucide-react';

interface PrimaryCTASectionProps {
  onOpenEligibility: () => void;
}

const TRUST_PILLS = [
  { icon: ShieldCheck, label: 'Zero CapEx' },
  { icon: Building, label: 'Turnkey Install' },
  { icon: MapPin, label: 'Local Ad Drive' },
];

export const PrimaryCTASection: React.FC<PrimaryCTASectionProps> = ({ onOpenEligibility }) => {
  return (
    <section id="check-eligibility" className="relative py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-black border border-white/10 rounded-[2rem] shadow-sm overflow-hidden">

          

          {/* Main split */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-6 px-6 sm:px-10 pt-10 sm:pt-12 pb-10 sm:pb-14 items-center">

            {/* Left: copy */}
            <div className="space-y-7">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C9A961]/15 text-[#D4B873] border border-[#C9A961]/30">
                <Sparkles className="w-4 h-4" />
                <span className="text-xs font-sans-clean font-semibold uppercase tracking-[0.2em]">
                  Primary Location Inquiry
                </span>
              </div>

              <h2 className="font-centaur text-white tracking-tight leading-[0.86]" style={{ fontSize: 'clamp(48px, 6vw, 84px)' }}>
                Enhance
                <br />
                <span style={{ color: '#C9A961' }}>Your Location.</span>
              </h2>

              <p className="font-sans-clean text-base sm:text-lg text-white/70 max-w-md leading-relaxed">
                Own a high foot-traffic location? We actively run local ads to bring our community to you. See if your space is eligible for a Fresco machine placement.
              </p>

              {/* Trust pill row, styled like the social icon row in the reference */}
              <div className="flex items-center gap-3 flex-wrap">
                {TRUST_PILLS.map((pill) => (
                  <span
                    key={pill.label}
                    className="w-11 h-11 rounded-full border border-white/15 bg-white/10 flex items-center justify-center"
                    title={pill.label}
                  >
                    <pill.icon className="w-4 h-4 text-[#C9A961]" />
                  </span>
                ))}
              </div>
            </div>

            {/* Right: image block */}
            <div className="relative aspect-square rounded-[1.75rem] overflow-hidden bg-[#C9A961]">
              <img
                src="../../public/images/CTAimage.png"
                alt="Fresco Italiano machine in a partner location"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-black/10" />

              {/* Signature-style mark, top-left */}
              <span
                className="absolute top-5 left-5 text-white/90 text-2xl"
                style={{ fontFamily: "'Brush Script MT', cursive" }}
              >
                Fresco Italiano
              </span>

              {/* Globe icon, top-right */}
              <span className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/90 backdrop-blur flex items-center justify-center">
                <Globe className="w-4 h-4 text-[#211D1A]" />
              </span>

              {/* Thumbnail stack, bottom-left */}
              <div className="absolute bottom-6 left-5 flex flex-col gap-2">
                <span className="w-11 h-11 rounded-full border-2 border-white overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=200&q=80"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </span>
                <span className="w-11 h-11 rounded-full border-2 border-white overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=200&q=80"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </span>
              </div>

              {/* CTA arrow button, bottom-right */}
              <button
                onClick={onOpenEligibility}
                className="absolute bottom-6 right-5 w-14 h-14 rounded-full bg-[#211D1A] flex items-center justify-center hover:scale-105 transition-transform duration-300 cursor-pointer"
                aria-label="Check location eligibility"
              >
                <ArrowUpRight className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>

          {/* Bottom bar: stats left, CTA button right — same grid columns as the split above so the button matches the image block's width */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-6 items-center px-6 sm:px-10 pb-8 sm:pb-10 pt-6 border-t border-white/10">
            {/* Stats row */}
            <div className="flex items-start gap-10 sm:gap-14">
              <div>
                <p className="font-sans-clean font-black text-4xl sm:text-5xl text-white">+250</p>
                <p className="font-sans-clean text-xs sm:text-sm text-white/60 leading-snug mt-1 max-w-[140px]">
                  Locations already earning passive income
                </p>
              </div>
              <div>
                <p className="font-sans-clean font-black text-4xl sm:text-5xl text-white">+800k</p>
                <p className="font-sans-clean text-xs sm:text-sm text-white/60 leading-snug mt-1 max-w-[160px]">
                  Cups poured through partner locations monthly
                </p>
              </div>
            </div>

            {/* CTA button — same column width as the image block above */}
            <button
              onClick={onOpenEligibility}
              className="btn-coffee-gold w-full px-10 py-5 rounded-sm text-base font-sans-clean uppercase tracking-[0.15em] font-semibold flex items-center justify-center gap-3 cursor-pointer hover:scale-[1.02] transition-all duration-300"
            >
              <span>Check Location Eligibility</span>
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};