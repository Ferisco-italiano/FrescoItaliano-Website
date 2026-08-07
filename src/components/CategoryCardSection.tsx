import React from 'react';

interface CategoryCard {
  id: string;
  eyebrow: string;
  title: string;
  image: string;
  target: string;
}

const CARDS: CategoryCard[] = [
  {
    id: 'bianchi',
    eyebrow: 'Italian Engineering',
    title: 'Bianchi ISO-Spec Espresso Engine',
    image: '/images/machine-front.jpeg',
    target: 'italian-barista',
  },
  {
    id: 'grinder',
    eyebrow: 'Precision On-Demand',
    title: 'Titanium Ceramic Flat Burr Grinder',
    image: '/images/machine-glossy.jpeg',
    target: 'italian-barista',
  },
  {
    id: 'touch',
    eyebrow: 'Zero-Contact Interface',
    title: 'HD Capacitive Touch Console',
    image: '/images/machine-textured.jpeg',
    target: 'italian-barista',
  },
  {
    id: 'java-blend',
    eyebrow: 'Est. Nova Scotia 1938',
    title: 'Java Blend SCA 80+ Specialty Beans',
    image: '/images/coffee-leaf-beans.jpeg',
    target: 'craftsman-origin',
  },
  {
    id: 'espresso',
    eyebrow: 'Espresso Classico',
    title: 'Authentic 15-Second Espresso Shot',
    image: '/images/espresso-dark-gold.jpeg',
    target: 'coffee-culture',
  },
  {
    id: 'latte-art',
    eyebrow: 'Milano Velvet',
    title: 'Cappuccino & Flat White Milk Drinks',
    image: '/images/latte-art-burlap.jpeg',
    target: 'coffee-culture',
  },
  {
    id: 'compost',
    eyebrow: 'Zero Waste Cycle',
    title: '100% Automated Grounds Composting',
    image: '/images/machine-kitchen-install.jpeg',
    target: 'craftsman-origin',
  },
  {
    id: 'amenity',
    eyebrow: 'Property Amenity',
    title: 'Turnkey Installation, Zero Cap-Ex Cost',
    image: '/images/office-install-real.jpeg',
    target: 'elevate-location',
  },
];

export const CategoryCardSection: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-white border-t border-[#E3DDD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-left space-y-2">
          <span className="text-xs font-sans-clean uppercase tracking-[0.25em] text-[#1C4E6B]">
            The Fresco System
          </span>
          <h2 className="font-centaur text-2xl sm:text-3xl font-medium text-[#211D1A]">
            Everything That Comes With Your Placement
          </h2>
        </div>

        <div className="flex gap-5 overflow-x-auto pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-thumb]:bg-[#E3DDD3] [&::-webkit-scrollbar-track]:bg-transparent">
          {CARDS.map((card) => (
            <button
              key={card.id}
              onClick={() => scrollToSection(card.target)}
              className="group flex-shrink-0 w-[210px] sm:w-[230px] text-left snap-start cursor-pointer"
            >
              <div className="w-full h-[210px] sm:h-[230px] rounded-xl overflow-hidden border border-[#E3DDD3] bg-[#FAF8F5]">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="pt-3 space-y-0.5">
                <span className="text-[10px] font-sans-clean uppercase tracking-wide text-[#8C8378]">
                  {card.eyebrow}
                </span>
                <h3 className="font-sans-clean text-sm font-semibold text-[#211D1A] leading-snug group-hover:text-[#1C4E6B] transition-colors">
                  {card.title}
                </h3>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
