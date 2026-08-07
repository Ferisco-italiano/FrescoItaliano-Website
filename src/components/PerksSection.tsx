import React from 'react';
import { ChevronRight } from 'lucide-react';

interface PerkItem {
  id: string;
  title: string;
  description: string;
  image: string;
  action: 'perks' | 'catering' | 'eligibility';
}

const PERK_ITEMS: PerkItem[] = [
  {
    id: 'office-perks',
    title: 'Office Perks Program',
    description: 'Unlimited Italian espresso for your team, zero cap-ex cost to your company.',
    image: '/images/office-install-real.jpeg',
    action: 'perks',
  },
  {
    id: 'catering',
    title: 'Event Catering Pop-Up',
    description: 'A full mobile Italian barista bar for weddings, galas, and corporate events.',
    image: '/images/mug-splash-logo.jpeg',
    action: 'catering',
  },
  {
    id: 'property',
    title: 'Property Amenity Placement',
    description: 'Elevate your lobby and earn a passive revenue share on every cup served.',
    image: '/images/latte-art-burlap.jpeg',
    action: 'eligibility',
  },
];

interface PerksSectionProps {
  onOpenOfficePerks: () => void;
  onOpenCatering: () => void;
  onOpenEligibility: () => void;
}

export const PerksSection: React.FC<PerksSectionProps> = ({
  onOpenOfficePerks,
  onOpenCatering,
  onOpenEligibility,
}) => {
  const handleAction = (action: PerkItem['action']) => {
    if (action === 'perks') onOpenOfficePerks();
    else if (action === 'catering') onOpenCatering();
    else onOpenEligibility();
  };

  return (
    <section className="py-20 sm:py-28 bg-white border-t border-[#E3DDD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-sans-clean uppercase tracking-[0.25em] text-[#1C4E6B]">
            For The People You Care About
          </span>
          <h2 className="font-centaur text-3xl sm:text-4xl font-medium text-[#211D1A]">
            Explore Perks &amp; Packages
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-8">
          {PERK_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleAction(item.action)}
              className="group text-left space-y-4 cursor-pointer"
            >
              <div className="w-full h-64 sm:h-72 rounded-xl overflow-hidden border border-[#E3DDD3] bg-[#FAF8F5]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-1">
                <h3 className="font-centaur text-xl font-medium text-[#211D1A] group-hover:text-[#1C4E6B] transition-colors flex items-center gap-1.5">
                  {item.title}
                  <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                </h3>
                <p className="font-sans-clean text-sm text-[#514A44] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
