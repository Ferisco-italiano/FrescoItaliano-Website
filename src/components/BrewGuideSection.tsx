import React, { useEffect, useState } from 'react';

const SLIDE_IMAGES: string[] = [
  '/images/GymBG.webp',
  '/images/OfficeBG.webp',
  '/images/ConstructionBG.webp',
  '/images/LobbyBG.webp',
];

export const BrewGuideSection: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % SLIDE_IMAGES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full bg-gradient-to-r from-transparent to-[#d4cbb8] py-12 sm:py-20 px-4 sm:px-8">
    <div className="relative w-full max-w-7xl mx-auto min-h-[42.5rem] sm:min-h-[48.75rem] rounded-[2rem] border border-[#E3DDD3] shadow-sm bg-[#0A0806] text-[#EDE6D6] overflow-hidden">
      {/* Cross-fading background photos */}
      <div className="absolute inset-0">
        {SLIDE_IMAGES.map((src, i) => (
          <div
            key={src}
            className="absolute inset-0 transition-opacity duration-[1500ms] ease-in-out"
            style={{ opacity: i === index ? 1 : 0 }}
          >
            <img
              src={src}
              alt=""
              className="w-full h-full object-cover object-[78%_55%] sm:object-[68%_55%] lg:object-[50%_55%]"
            />
          </div>
        ))}
      </div>

      {/* Vignette so the title and description stay legible over any slide */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(90deg, rgba(4,3,2,0.9) 0%, rgba(4,3,2,0.7) 30%, rgba(4,3,2,0.25) 55%, transparent 75%)',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, rgba(4,3,2,0.55) 0%, transparent 22%, transparent 78%, rgba(4,3,2,0.55) 100%)',
        }}
      />

      {/* Static content, left-aligned and vertically centered */}
      <div className="relative z-10 w-full h-full min-h-[42.5rem] sm:min-h-[48.75rem] flex items-center px-6 sm:px-12 py-16">
        <div className="max-w-md">
          <h1 className="font-centaur leading-[0.98] font-normal m-0">
            <span
              className="block text-[#F7F3EA]"
              style={{ fontSize: 'clamp(2.25rem, 4.8vw, 3.5rem)', textShadow: '0 2px 24px rgba(0,0,0,0.7)' }}
            >
              Elevate Your
            </span>
            <span
              className="block text-[#D4B873]"
              style={{ fontSize: 'clamp(2.25rem, 4.8vw, 3.5rem)', textShadow: '0 2px 24px rgba(0,0,0,0.7)' }}
            >
              Location.
            </span>
          </h1>

          <div className="w-14 h-0.5 bg-[#C9A961] mt-5 mb-6" />

          <p
            className="font-sans text-base sm:text-lg leading-relaxed text-[#CFC8B8] mb-3 font-light"
            style={{ textShadow: '0 1px 12px rgba(0,0,0,0.6)' }}
          >
            It's the equivalent of having access to a $6 specialty espresso from a premium local café, seamlessly integrated right inside your building.
          </p>
          <p
            className="font-sans text-base sm:text-lg leading-relaxed text-[#CFC8B8] font-light"
            style={{ textShadow: '0 1px 12px rgba(0,0,0,0.6)' }}
          >
            Providing Fresco isn't just about coffee; it's about providing a highly desired amenity that makes people feel valued — in offices, gyms, job sites, and lobbies alike.
          </p>
        </div>
      </div>

      {/* Slide indicator dots */}
      <div className="absolute bottom-6 left-6 sm:left-12 z-10 flex items-center gap-2">
        {SLIDE_IMAGES.map((src, i) => (
          <button
            key={src}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all cursor-pointer ${
              i === index ? 'w-6 bg-[#D4B873]' : 'w-1.5 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </div>
    </section>
  );
};
