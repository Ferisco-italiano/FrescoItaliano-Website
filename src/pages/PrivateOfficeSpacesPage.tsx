import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ShieldCheck, Building2, Clock } from 'lucide-react';

interface PrivateOfficeSpacesPageProps {
  onOpenEligibility: () => void;
}

const FEATURES = [
  { icon: ShieldCheck, label: 'Zero Capital Cost', copy: 'Free installation and maintenance for qualifying offices — no upfront spend.' },
  { icon: Building2, label: 'Built For Offices', copy: 'Sized and finished to fit break rooms and reception areas without disrupting the space.' },
  { icon: Clock, label: 'Fast Turnkey Setup', copy: 'From eligibility check to first pour, most offices are up and running within days.' },
];

export const PrivateOfficeSpacesPage: React.FC<PrivateOfficeSpacesPageProps> = ({ onOpenEligibility }) => {
  return (
    <>
      {/* Hero */}
      <section className="relative w-full h-[38rem] sm:h-[42.5rem] overflow-hidden bg-[#1A1512]">
        <img
          src="/images/OfficeBG.webp"
          alt="Modern private office break room with an espresso bar"
          className="absolute inset-0 w-full h-full object-cover object-[68%_55%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1512] via-[#1A1512]/50 to-[#1A1512]/20" />

        {/* Logo + nav link back to Home, overlaid on the hero */}
        <div className="absolute top-0 inset-x-0 z-30 flex items-center justify-between px-6 sm:px-10 py-5 sm:py-6">
          <Link to="/">
            <img src="/images/logo.svg" alt="Fresco Italiano" className="h-15 w-auto sm:h-15" />
          </Link>
          <div className="flex items-center gap-5 sm:gap-8">
            <Link
              to="/"
              className="text-[0.6875rem] sm:text-xs font-sans-clean uppercase tracking-[0.15em] font-semibold text-white hover:text-[#D4AF6A] transition-colors"
            >
              Home
            </Link>
            <button
              onClick={onOpenEligibility}
              className="btn-outline-gold px-5 py-2.5 sm:px-6 sm:py-3 rounded-sm text-[0.6875rem] sm:text-xs font-sans-clean uppercase tracking-[0.15em] font-semibold cursor-pointer"
            >
              Check Eligibility
            </button>
          </div>
        </div>

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 w-full">
            <div className="max-w-xl text-left space-y-4">
              <span className="inline-block text-[0.6875rem] font-sans-clean uppercase tracking-[0.25em] text-[#D4AF6A]">
                Directed At Private Office Spaces
              </span>
              <h1 className="font-centaur text-3xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] text-white tracking-tight">
                A Premium Espresso Bar For Your Office.
              </h1>
              <p className="font-sans-clean text-base sm:text-lg text-white/80 leading-relaxed max-w-md">
                Give your team the perk of café-quality espresso, installed free, right in your break room.
              </p>
              <button
                onClick={onOpenEligibility}
                className="inline-flex items-center gap-2 bg-white text-[#211D1A] hover:bg-[#F4F0EA] px-6 py-3 rounded-sm text-xs font-sans-clean uppercase tracking-[0.15em] font-semibold transition-colors cursor-pointer"
              >
                <span>Check Location Eligibility</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Short pitch */}
      <section className="bg-[#FAF8F5] py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-6 sm:px-10 text-center space-y-12">
          <div className="max-w-2xl mx-auto space-y-4">
            <h2 className="font-centaur text-3xl sm:text-4xl font-normal text-[#211D1A] leading-[1.05]">
              Built For The Way Private Offices Work.
            </h2>
            <p className="font-sans-clean text-base sm:text-lg text-[#514A44] leading-relaxed">
              Fresco Italiano brings ISO-spec Bianchi machinery and Java Blend SCA 80+ beans into private
              offices at zero capital cost — a low-effort amenity that keeps your team energized and gives
              guests a genuinely great first impression.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto text-left">
            {FEATURES.map((feature) => (
              <div key={feature.label} className="space-y-3">
                <span className="w-12 h-12 rounded-full border-2 border-[#C9A961] bg-white flex items-center justify-center">
                  <feature.icon className="w-5 h-5 text-[#C9A961]" strokeWidth={1.5} />
                </span>
                <h3 className="font-sans-clean text-sm font-semibold uppercase tracking-wide text-[#211D1A]">
                  {feature.label}
                </h3>
                <p className="font-sans-clean text-sm text-[#514A44] leading-relaxed">{feature.copy}</p>
              </div>
            ))}
          </div>

          <button
            onClick={onOpenEligibility}
            className="gold-button inline-flex items-center gap-2 px-8 py-4 rounded-sm text-xs font-sans-clean uppercase tracking-[0.15em] font-semibold cursor-pointer"
          >
            <span>Check Location Eligibility</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </>
  );
};
