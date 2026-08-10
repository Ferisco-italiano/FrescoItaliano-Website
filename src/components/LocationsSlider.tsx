import React from 'react';
import { ChevronRight, MapPin } from 'lucide-react';

interface LocationCard {
  id: string;
  city: string;
  name: string;
  image: string;
}

const LOCATIONS: LocationCard[] = [
  {
    id: 'halifax',
    city: 'Halifax, NS',
    name: 'Downtown Office Tower Install',
    image: '/images/office-install-real.jpeg',
  },
  {
    id: 'toronto',
    city: 'Toronto, ON',
    name: 'Financial District Breakroom',
    image: '/images/machine-kitchen-install.jpeg',
  },
  {
    id: 'montreal',
    city: 'Montreal, QC',
    name: 'Innovation Hub Lobby',
    image: '/images/latte-art-burlap.jpeg',
  },
  {
    id: 'next',
    city: 'Your Building',
    name: 'Could Be Next',
    image: '/images/espresso-dark-gold.jpeg',
  },
];

interface LocationsSliderProps {
  onOpenEligibility: () => void;
}

export const LocationsSlider: React.FC<LocationsSliderProps> = ({ onOpenEligibility }) => {
  return (
    <section id="locations" className="py-20 sm:py-28 bg-[#FAF8F5] border-t border-[#E3DDD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="text-left space-y-2">
            <span className="text-xs font-sans-clean uppercase tracking-[0.25em] text-[#211D1A] flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5" /> Now Serving
            </span>
            <h2 className="font-centaur text-3xl sm:text-4xl font-medium text-[#211D1A]">
              Fresco Machines Near You
            </h2>
          </div>
          <button
            onClick={onOpenEligibility}
            className="hidden sm:inline-flex items-center gap-2 border border-[#211D1A] hover:bg-[#211D1A] hover:text-white text-[#211D1A] px-6 py-3 rounded-sm text-xs font-sans-clean uppercase tracking-[0.15em] font-semibold transition-colors cursor-pointer whitespace-nowrap"
          >
            <span>Check Eligibility</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="flex gap-5 overflow-x-auto pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-thumb]:bg-[#E3DDD3] [&::-webkit-scrollbar-track]:bg-transparent">
          {LOCATIONS.map((loc) => (
            <div
              key={loc.id}
              className="flex-shrink-0 w-[16.25rem] sm:w-[18.75rem] snap-start rounded-xl overflow-hidden border border-[#E3DDD3] bg-white"
            >
              <div className="h-48 sm:h-56 overflow-hidden">
                <img src={loc.image} alt={loc.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-4 text-left space-y-0.5">
                <span className="text-[10px] font-sans-clean uppercase tracking-wide text-[#211D1A] font-semibold">
                  {loc.city}
                </span>
                <p className="font-centaur text-base text-[#211D1A]">{loc.name}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="sm:hidden text-center">
          <button
            onClick={onOpenEligibility}
            className="inline-flex items-center gap-2 border border-[#211D1A] hover:bg-[#211D1A] hover:text-white text-[#211D1A] px-6 py-3 rounded-sm text-xs font-sans-clean uppercase tracking-[0.15em] font-semibold transition-colors cursor-pointer"
          >
            <span>Check Eligibility</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
