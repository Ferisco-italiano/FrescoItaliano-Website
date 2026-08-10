import React from 'react';
import { ChevronRight } from 'lucide-react';

interface CraftsmanOriginSectionProps {
  onOpenEligibility: () => void;
}

export const CraftsmanOriginSection: React.FC<CraftsmanOriginSectionProps> = ({ onOpenEligibility }) => {
  return (
    <section id="craftsman-origin" className="relative py-24 sm:py-32 bg-[#dbc1ac] text-[#211D1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">

          {/* Left Column: Product Photo */}
          <div className="lg:col-span-6 order-1">
            <div className="overflow-hidden bg-[#211D1A]">
              <img
                src="../images/Craftsman&TheOrigin.webp"
                alt="Java Blend coffee beans, portafilter, and freshly pulled espresso"
                className="w-full h-full object-cover aspect-square"
              />
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="lg:col-span-6 text-left space-y-10 order-2">
            <h2 className="font-centaur text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.25] font-medium tracking-tight text-[#211D1A]">
              Roasted In The Community
              <br />
              For The Community.
            </h2>

            <div className="space-y-8">
              <div className="space-y-1.5">
                <h3 className="font-sans-clean text-sm font-semibold text-[#211D1A]">
                  Java Blend Partnership
                </h3>
                <p className="font-sans-clean text-sm text-[#514A44] leading-relaxed">
                  A Halifax roaster since 1938, sourcing exclusively specialty-grade beans through direct trade.
                </p>
              </div>

              <div className="space-y-1.5">
                <h3 className="font-sans-clean text-sm font-semibold text-[#211D1A]">
                  SCA 80+ Certified Beans
                </h3>
                <p className="font-sans-clean text-sm text-[#514A44] leading-relaxed">
                  Only the top tier of the global harvest qualifies, with zero commodity fillers or artificial flavoring.
                </p>
              </div>

              <div className="space-y-1.5">
                <h3 className="font-sans-clean text-sm font-semibold text-[#211D1A]">
                  100% Composted Grounds
                </h3>
                <p className="font-sans-clean text-sm text-[#514A44] leading-relaxed">
                  Every spent puck is collected on-site and returned to local organic farms, for zero landfill waste.
                </p>
              </div>
            </div>

            
          </div>

        </div>
      </div>
    </section>
  );
};