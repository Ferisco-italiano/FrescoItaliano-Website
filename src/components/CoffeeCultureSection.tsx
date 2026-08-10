import React, { useState, useRef } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { SIGNATURE_DRINKS, CoffeeDrink } from '../data/coffeeData';

interface CoffeeCultureSectionProps {
  onOpenEligibility: () => void;
}

const CORNER_ZONE_WIDTH = 90; // px — width of the clickable corner hotspot on each side

export const CoffeeCultureSection: React.FC<CoffeeCultureSectionProps> = ({ onOpenEligibility }) => {
  const [filterCategory, setFilterCategory] = useState<'all' | 'espresso' | 'milk' | 'tea' | 'other'>('all');
  const [activeDrink, setActiveDrink] = useState<CoffeeDrink>(SIGNATURE_DRINKS[0]);

  const filteredDrinks = SIGNATURE_DRINKS.filter(
    (drink) => filterCategory === 'all' || drink.category === filterCategory
  );

  const scrollRef = useRef<HTMLDivElement>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [cursorZone, setCursorZone] = useState<'left' | 'right' | null>(null);

  const scrollByAmount = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const scrollAmount = 360; // ~card width + gap
    scrollRef.current.scrollBy({
      left: direction === 'right' ? scrollAmount : -scrollAmount,
      behavior: 'smooth',
    });
  };

  const handleZoneMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  return (
    <section id="coffee-culture" className="relative py-24 sm:py-32 bg-white text-[#211D1A] border-t border-[#E3DDD3]">

      {/* Interactive Menu Showcase Section — wider cap than the site's usual max-w-7xl so this
          carousel keeps claiming more horizontal space as the viewport grows past 1440px,
          instead of staying boxed in while whitespace opens up on the sides. */}
      <div id="beverage-menu" className="max-w-7xl 2xl:max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Simple left-aligned heading, matching reference style */}
        <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
          <h3 className="font-centaur text-3xl sm:text-4xl font-medium text-[#211D1A]">
            Best Beverages
          </h3>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {(
              [
                { key: 'all', label: 'All Beverages' },
                { key: 'espresso', label: 'Espresso Bar' },
                { key: 'milk', label: 'Milk Drinks' },
                { key: 'tea', label: 'Tea Bar' },
                { key: 'other', label: 'Wellness & Comfort' },
              ] as const
            ).map((item) => (
              <button
                key={item.key}
                onClick={() => setFilterCategory(item.key)}
                className={`px-4 py-2 rounded-sm text-xs font-sans-clean transition-all cursor-pointer ${
                  filterCategory === item.key
                    ? 'bg-[#3B2417] text-white font-semibold'
                    : 'bg-[#F4F0EA] text-[#514A44] hover:text-[#211D1A] border border-[#E3DDD3]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Drink Cards — Horizontal Scroll with corner nav overlays */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {filteredDrinks.map((drink) => (
              <div
                key={drink.id}
                onClick={() => setActiveDrink(drink)}
                className="relative h-[27.5rem] w-[18.75rem] sm:w-[21.25rem] flex-shrink-0 overflow-hidden group cursor-pointer"
              >
                <img
                  src={drink.image}
                  alt={drink.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/10 to-black/60" />

                {/* Top overlay: description */}
                <div className="absolute top-0 left-0 right-0 p-5">
                  <p className="font-sans-clean text-xs text-white/90 leading-relaxed">
                    {drink.description}
                  </p>
                </div>

                {/* Bottom overlay: name + See Now link */}
                <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
                  <div>
                    <span className="text-[0.625rem] font-sans-clean text-white/70 uppercase tracking-wide block">
                      {drink.italianName}
                    </span>
                    <h4 className="font-centaur text-[2.5rem] font-medium text-white">{drink.name}</h4>
                  </div>
                  {/* <span className="text-xs font-sans-clean text-white font-semibold flex items-center gap-1 whitespace-nowrap group-hover:gap-2 transition-all">
                    See Now <ChevronRight className="w-3.5 h-3.5" />
                  </span> */}
                </div>
              </div>
            ))}
          </div>

          {/* Left click/hover zone — sits above the cards, only at the edge */}
          <div
            onMouseEnter={() => setCursorZone('left')}
            onMouseMove={handleZoneMouseMove}
            onMouseLeave={() => setCursorZone((z) => (z === 'left' ? null : z))}
            onClick={() => scrollByAmount('left')}
            style={{ width: CORNER_ZONE_WIDTH }}
            className="absolute left-0 top-0 bottom-4 z-20 cursor-none"
          />

          {/* Right click/hover zone */}
          <div
            onMouseEnter={() => setCursorZone('right')}
            onMouseMove={handleZoneMouseMove}
            onMouseLeave={() => setCursorZone((z) => (z === 'right' ? null : z))}
            onClick={() => scrollByAmount('right')}
            style={{ width: CORNER_ZONE_WIDTH }}
            className="absolute right-0 top-0 bottom-4 z-20 cursor-none"
          />
        </div>

        {/* Custom Glassmorphic Cursor — only visible in corner zones */}
        {cursorZone && (
          <div
            className="fixed z-50 pointer-events-none flex items-center justify-center w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/40 shadow-lg transition-transform duration-150 ease-out"
            style={{
              left: cursorPos.x,
              top: cursorPos.y,
              transform: 'translate(-50%, -50%)',
            }}
          >
            {cursorZone === 'right' ? (
              <ChevronRight className="w-5 h-5 text-white" strokeWidth={2.5} />
            ) : (
              <ChevronLeft className="w-5 h-5 text-white" strokeWidth={2.5} />
            )}
          </div>
        )}

        
      </div>
    </section>
  );
};