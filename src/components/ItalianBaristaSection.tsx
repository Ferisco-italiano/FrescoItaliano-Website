import React from 'react';
import { Award, ShieldCheck, ChevronRight } from 'lucide-react';

interface ItalianBaristaSectionProps {
  onOpenEligibility: () => void;
}

// Simple Italy boot outline icon (lucide has no equivalent)
const ItalyIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <path
      d="M9.5 2.5c.6.2 1 .7 1.1 1.3.1.7-.2 1.2-.5 1.8-.3.6-.5 1.1-.2 1.6.3.6 1 .7 1.6 1 .7.3 1.3.8 1.4 1.6.1.6-.1 1-.4 1.5-.4.6-.9 1-.9 1.7 0 .6.4 1 .9 1.3.7.4 1.5.6 1.9 1.3.4.7.2 1.5-.2 2.1-.5.8-1.3 1.3-1.6 2.2-.2.6 0 1.2-.3 1.7-.4.7-1.3.9-2 1.2-.8.3-1.5.8-2.3.7-.6-.1-1-.6-1.2-1.2-.2-.7 0-1.4-.3-2-.3-.6-1-.9-1.3-1.5-.3-.6-.2-1.3.1-1.9.3-.6.8-1.1.8-1.8 0-.6-.4-1.1-.5-1.7-.1-.7.1-1.4.6-1.9.4-.4 1-.6 1.2-1.1.2-.5 0-1-.2-1.5-.3-.7-.7-1.4-.6-2.2.1-.8.7-1.5 1.5-1.8.1 0 .2-.1.4-.1z"
      strokeLinejoin="round"
    />
  </svg>
);

export const ItalianBaristaSection: React.FC<ItalianBaristaSectionProps> = ({ onOpenEligibility }) => {
  return (
    <section id="italian-barista" className="relative py-36 sm:py-48 min-h-[40rem] flex items-center bg-black text-white overflow-hidden">
      {/* Full-bleed background photo */}
      <div className="absolute inset-0">
        <img
          src="/images/CoffeeEvolutionBG.webp"
          alt="Barista pouring milk into a Bianchi espresso cup beside a modern Bianchi coffee machine"
          className="w-full h-full object-cover"
        />
        {/* Light overall tint plus a soft center-focused vignette behind the centered text, so the barista (left) and machine (right) both stay visible */}
        <div className="absolute inset-0 bg-black/25" />
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 65% 60% at 50% 50%, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.35) 55%, rgba(0,0,0,0.1) 80%)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          {/* Eyebrow */}
          {/* <div className="mb-5">
            <span className="text-xs font-sans-clean font-semibold uppercase tracking-[0.25em] text-[#C9A24B]">
              Section 2
            </span>
          </div> */}

          {/* Headline */}
          <h2 className="max-w-xl font-centaur text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.1] font-medium tracking-tight text-white">
            Your Personal <em className="not-italic text-[#C9A24B]">Italian</em> Barista.
          </h2>

          {/* Tricolor divider */}
          <div className="flex w-16 h-[3px] my-6 rounded-full overflow-hidden">
            <div className="w-1/3 bg-emerald-600" />
            <div className="w-1/3 bg-white" />
            <div className="w-1/3 bg-red-600" />
          </div>

          {/* Body copy */}
          <p className="max-w-3xl font-sans-clean text-base sm:text-lg text-white/70 leading-relaxed">
            We refuse to compromise on quality. Our world-class, ISO-spec espresso machinery is built in Italy. It
            fits comfortably into any room, bringing a sleek, high-end aesthetic that instantly elevates your space
            while serving as your dedicated on-site barista.
          </p>

          {/* Icon badge row */}
          <div className="grid grid-cols-3 gap-6 mt-12 max-w-md mx-auto">
            <div className="flex flex-col items-center text-center gap-3">
              <Award className="w-7 h-7 text-[#C9A24B]" strokeWidth={1.5} />
              <span className="text-xs font-sans-clean font-semibold uppercase tracking-wide text-white/90 leading-snug">
                World-Class
                <br />
                Quality
              </span>
            </div>
            <div className="flex flex-col items-center text-center gap-3">
              <ShieldCheck className="w-7 h-7 text-[#C9A24B]" strokeWidth={1.5} />
              <span className="text-xs font-sans-clean font-semibold uppercase tracking-wide text-white/90 leading-snug">
                ISO-Spec
                <br />
                Engineering
              </span>
            </div>
            <div className="flex flex-col items-center text-center gap-3">
              <ItalyIcon className="w-7 h-7 text-[#C9A24B]" />
              <span className="text-xs font-sans-clean font-semibold uppercase tracking-wide text-white/90 leading-snug">
                Built in
                <br />
                Italy
              </span>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12">
            <button
              onClick={onOpenEligibility}
              className="btn-outline-gold inline-flex items-center gap-2 px-6 py-3.5 rounded-sm text-xs uppercase tracking-wide font-semibold cursor-pointer"
            >
              <span>Request Bianchi Machine In Location</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};