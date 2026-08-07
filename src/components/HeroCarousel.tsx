import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Slide {
  id: string;
  eyebrow: string;
  title: string;
  cta: string;
  image: string;
  focus?: string;
}

const SLIDES: Slide[] = [
  {
    id: 'placement',
    eyebrow: 'Zero Capital Cost Placement',
    title: 'Espresso When You Need It, Where You Need It.',
    cta: 'Check Location Eligibility',
    image: '/images/CoffeeHeroImage.png',
    focus: 'object-center',
  },
  {
    id: 'machine',
    eyebrow: 'Bianchi ISO-Spec Machinery',
    title: 'Your Personal Italian Barista, Installed Free.',
    cta: 'Explore The Machine',
    image: '/images/CoffeeVendingMachinHero.png',
    focus: 'object-center',
  },
  {
    id: 'brand',
    eyebrow: 'Java Blend SCA 80+ Beans',
    title: 'Specialty Coffee, Freshly Roasted In Nova Scotia.',
    cta: 'Explore The Beverage Menu',
    image: '/images/CoffeeVendingMachinHero2.png',
    focus: 'object-center',
  },
];

interface HeroCarouselProps {
  onOpenEligibility: () => void;
}

export const HeroCarousel: React.FC<HeroCarouselProps> = ({ onOpenEligibility }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (i: number) => setIndex((i + SLIDES.length) % SLIDES.length);

  return (
    <section id="hero" className="relative w-full h-[70vh] min-h-[480px] sm:h-[85vh] sm:min-h-[620px] overflow-hidden bg-[#1A1512]">
      {/* Logo + Check Eligibility, overlaid on the hero in place of a navbar */}
      <div className="absolute top-0 inset-x-0 z-30 flex items-center justify-between px-6 sm:px-10 py-5 sm:py-6">
        <img src="/images/logo.svg" alt="Fresco Italiano" className="h-15 w-auto sm:h-15" />
        <button
          onClick={onOpenEligibility}
          className="btn-outline-gold px-5 py-2.5 sm:px-6 sm:py-3 rounded-sm text-[11px] sm:text-xs font-sans-clean uppercase tracking-[0.15em] font-semibold cursor-pointer"
        >
          Check Eligibility
        </button>
      </div>

      {SLIDES.map((slide, i) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === index ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className={`w-full h-full object-cover ${slide.focus || 'object-center'}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1512] via-[#1A1512]/25 to-[#1A1512]/10" />

          <div className="absolute inset-0 flex items-end sm:items-center">
            <div className="max-w-7xl mx-auto px-6 sm:px-10 pb-14 sm:pb-0 w-full">
              <div className="max-w-xl text-left space-y-4">
                <span className="inline-block text-[11px] font-sans-clean uppercase tracking-[0.25em] text-[#D4AF6A]">
                  {slide.eyebrow}
                </span>
                <h1 className="font-centaur text-3xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] text-white tracking-tight">
                  {slide.title}
                </h1>
                <button
                  onClick={onOpenEligibility}
                  className="inline-flex items-center gap-2 bg-white text-[#211D1A] hover:bg-[#F4F0EA] px-6 py-3 rounded-sm text-xs font-sans-clean uppercase tracking-[0.15em] font-semibold transition-colors cursor-pointer"
                >
                  {slide.cta}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Arrows */}
      <button
        onClick={() => goTo(index - 1)}
        aria-label="Previous slide"
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/15 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center text-white transition-colors cursor-pointer"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={() => goTo(index + 1)}
        aria-label="Next slide"
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/15 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center text-white transition-colors cursor-pointer"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-5 sm:bottom-8 right-6 sm:right-10 z-20 flex items-center gap-2">
        {SLIDES.map((slide, i) => (
          <button
            key={slide.id}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all cursor-pointer ${
              i === index ? 'w-6 bg-white' : 'w-1.5 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </section>
  );
};
