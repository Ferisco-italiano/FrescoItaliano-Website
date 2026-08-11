import React from 'react';
import { ChevronRight } from 'lucide-react';

interface DailyRitualSectionProps {
  onOpenEligibility: () => void;
}

export const DailyRitualSection: React.FC<DailyRitualSectionProps> = ({ onOpenEligibility }) => {
  return (
    <section className="relative w-full h-[42.5rem] sm:h-[47.5rem] lg:h-[51.25rem] overflow-hidden bg-black">
      {/* Background photo */}
      <img
        src="/images/daily-ritual-bg.webp"
        alt="Colleagues gathering and smiling around a Fresco espresso bar"
        className="absolute inset-0 w-full h-full object-cover object-left"
      />

      {/* Extra flat overlay on mobile so the description stays readable over the photo */}
      <div className="absolute inset-0 bg-black/70 sm:hidden" />

      {/* Fade to black on the right where the text sits */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-black" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent from-40% via-black/60 via-65% to-black to-85%" />

      {/* Text panel */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-end">
        <div className="w-full sm:w-[26.25rem] lg:w-[28.75rem] text-left space-y-6">
          <h1 className="font-centaur leading-[0.98] font-normal m-0">
            <span
              className="block text-[#F7F3EA]"
              style={{ fontSize: 'clamp(2.25rem, 4.8vw, 3.5rem)', textShadow: '0 2px 24px rgba(0,0,0,0.7)' }}
            >
              Fueling The Best Part Of
            </span>
            <span
              className="block text-[#D4B873]"
              style={{ fontSize: 'clamp(2.25rem, 4.8vw, 3.5rem)', textShadow: '0 2px 24px rgba(0,0,0,0.7)' }}
            >
              Your Day.
            </span>
          </h1>
          

          <div className="w-14 h-0.5 bg-[#C9A961] mt-5 mb-6" />

          <div className="space-y-4 font-sans-clean text-base sm:text-lg text-white/90 leading-relaxed">
            <p>
              There is a reason people crave high-quality espresso. It elevates your mood, provides clean energy without the sugar crash, and creates a natural gathering point.
            </p>
            <p>
              We provide a nurturing coffee ritual that keeps you moving, right when you need it.
            </p>
          </div>

          <button
            onClick={onOpenEligibility}
            className="btn-outline-gold px-7 py-3.5 rounded-sm text-xs font-sans-clean uppercase tracking-wide font-semibold inline-flex items-center gap-2 cursor-pointer"
          >
            <span>Check Location Eligibility</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
