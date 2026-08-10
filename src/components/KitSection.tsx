import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

interface KitItem {
  id: string;
  number: string;
  label: string;
  title: string;
  description: string;
  tag: string;
  image: string;
}

const KIT_ITEMS: KitItem[] = [
  {
    id: 'engine',
    number: '01',
    label: 'Engine',
    title: 'Bianchi Espresso Engine',
    description: '15-bar constant pressure extraction, built and certified in Milan, Italy.',
    tag: 'Core Machine',
    image: '/images/machine1.webp',
  },
  {
    id: 'console',
    number: '02',
    label: 'Console',
    title: 'HD Touch Console',
    description: 'Zero-contact ordering with custom brew strength and mug size selection.',
    tag: 'Interface',
    image: '/images/machine2.webp',
  },
  {
    id: 'grinder-tower',
    number: '03',
    label: 'Grinder',
    title: 'Ceramic Grinding Tower',
    description: 'On-demand titanium ceramic burrs grind each cup fresh in under 3 seconds.',
    tag: 'Freshness System',
    image: '/images/machine3.webp',
  },
];

interface KitSectionProps {
  onOpenEligibility: () => void;
}

export const KitSection: React.FC<KitSectionProps> = ({ onOpenEligibility }) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="py-20 sm:py-28 bg-[#0A0A0A] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-sans-clean uppercase tracking-[0.25em] text-[#C9A961]">
            Included With Every Placement
          </span>
          <h2 className="font-centaur text-3xl sm:text-4xl font-medium text-white">
            The Fresco Installation Kit
          </h2>
        </div>

        {/* Glassmorphic expanding list */}
        <div className="space-y-3">
          {KIT_ITEMS.map((item) => {
            const isHovered = hoveredId === item.id;
            return (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-500 ease-in-out bg-white/[0.06] backdrop-blur-xl border border-white/10 hover:border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
              >
                {/* Fixed-width number column via inline-grid template, so it's IDENTICAL across every row */}
                <div className="grid grid-cols-[96px_1fr] sm:grid-cols-[140px_1fr] items-stretch">

                  {/* Left number badge block — fixed width column, no longer content-sized */}
                  <div
                    className={`flex flex-col items-center justify-center gap-1.5 sm:gap-0.5 border-r border-white/10 transition-all duration-500 ease-in-out ${
                      isHovered ? 'py-6 sm:py-8' : 'py-3'
                    }`}
                  >
                    <span
                      className={`font-centaur font-medium text-white leading-none transition-all duration-500 ease-in-out ${
                        isHovered ? 'text-3xl sm:text-4xl' : 'text-lg sm:text-xl'
                      }`}
                    >
                      {item.number}
                    </span>
                    <span className="font-sans-clean text-[9px] uppercase tracking-widest text-white/50 whitespace-nowrap">
                      {item.label}
                    </span>
                  </div>

                  {/* Right side: image + text + arrow, always starts at the same x-position now */}
                  <div className="flex flex-col sm:flex-row items-stretch">

                    {/* Expandable image panel */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out flex items-center flex-shrink-0 ${
                        isHovered
                          ? 'sm:w-80 max-h-96 opacity-100'
                          : 'sm:w-0 max-h-0 opacity-0'
                      }`}
                    >
                      <div
                        className={`w-full p-4 sm:p-5 transition-all duration-500 ease-in-out ${
                          isHovered ? 'h-72 sm:h-full sm:min-h-[280px]' : 'h-0 sm:h-0 sm:min-h-0'
                        }`}
                      >
                        <div className="w-full h-full rounded-2xl overflow-hidden border border-white/10 bg-black/40">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Name above, description below, vertically stacked */}
                    <div
                      className={`flex-1 flex flex-col justify-center gap-2 px-6 sm:px-8 transition-all duration-500 ease-in-out ${
                        isHovered ? 'py-8' : 'py-3'
                      }`}
                    >
                      <div className="space-y-1">
                        <span
                          className={`font-sans-clean text-[10px] uppercase tracking-wide text-white/40 overflow-hidden block transition-all duration-500 ease-in-out ${
                            isHovered ? 'max-h-5 opacity-100' : 'max-h-0 opacity-0'
                          }`}
                        >
                          {item.tag}
                        </span>
                        <h3
                          className={`font-centaur font-medium text-white transition-all duration-500 ease-in-out ${
                            isHovered ? 'text-2xl sm:text-3xl' : 'text-base sm:text-lg'
                          }`}
                        >
                          {item.title}
                        </h3>
                      </div>
                      <p
                        className={`font-sans-clean text-sm sm:text-base text-white/70 leading-relaxed overflow-hidden transition-all duration-500 ease-in-out ${
                          isHovered ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        {item.description}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div className="hidden sm:flex items-center pr-6">
                      <ChevronRight
                        className={`transition-all duration-300 ${
                          isHovered ? 'w-6 h-6 text-white translate-x-1' : 'w-4 h-4 text-white/40'
                        }`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <button
            onClick={onOpenEligibility}
            className="btn-outline-gold inline-flex items-center gap-2 px-8 py-3.5 rounded-sm text-xs font-sans-clean uppercase tracking-[0.15em] font-semibold cursor-pointer"
          >
            <span>View Full Installation Kit</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};