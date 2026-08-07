import React from 'react';
import { Coffee, Zap, Leaf, ShieldCheck } from 'lucide-react';

const LEFT_FEATURES = [
  { icon: Coffee, label: 'Fresh Ground\nEvery Cup' },
  { icon: Zap, label: 'Bianchi ISO\nEngineering' },
];

const RIGHT_FEATURES = [
  { icon: Leaf, label: 'Java Blend\nSCA 80+ Beans' },
  { icon: ShieldCheck, label: 'Zero Cap-Ex\nInstallation' },
];

export const CoffeeGuideSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-[780px] bg-[#0A0806] text-[#EDE6D6] overflow-hidden">
      {/* Background photo */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(../../public/images/section5BG.png)`,
          backgroundPosition: '50% 55%',
        }}
      />

      {/* Top + bottom vignette so title and features stay legible over the photo */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(4,3,2,0.85) 0%, rgba(4,3,2,0.35) 24%, transparent 42%, transparent 62%, rgba(4,3,2,0.45) 80%, rgba(4,3,2,0.85) 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full min-h-[780px] flex flex-col justify-between px-6 sm:px-12 py-10 sm:py-12">
        {/* Title top-left, description top-right — same row alignment */}
        <div className="flex items-start justify-between w-full gap-8 flex-wrap">
          <div className="max-w-md">
            <h1 className="font-centaur leading-[0.98] font-normal m-0">
              <span
                className="block text-[#F7F3EA]"
                style={{ fontSize: 'clamp(36px, 4.8vw, 56px)', textShadow: '0 2px 24px rgba(0,0,0,0.7)' }}
              >
                More Than
              </span>
              <span
                className="block text-[#D4B873]"
                style={{ fontSize: 'clamp(36px, 4.8vw, 56px)', textShadow: '0 2px 24px rgba(0,0,0,0.7)' }}
              >
                A Drink.
              </span>
            </h1>

            <div className="w-14 h-0.5 bg-[#C9A961] mt-5" />
          </div>

          <div className="max-w-md pt-2 sm:pt-4">
            <p
              className="font-sans text-base sm:text-lg leading-relaxed text-[#CFC8B8] mb-3 font-light"
              style={{ textShadow: '0 1px 12px rgba(0,0,0,0.6)' }}
            >
              Coffee is the quiet engine behind a good workday — the reason people show up early, gather at the
              break room, and push through the afternoon slump. It sharpens focus and turns a hallway into a place
              where ideas happen.
            </p>
            <p
              className="font-sans text-base sm:text-lg leading-relaxed text-[#CFC8B8] font-light"
              style={{ textShadow: '0 1px 12px rgba(0,0,0,0.6)' }}
            >
              Fresco Italiano brings that same specialty-café quality directly into your building — freshly ground,
              expertly extracted, at zero cost to you.
            </p>
          </div>
        </div>

        {/* Feature row, split left and right of the centered cup */}
        <div className="flex items-end justify-between w-full max-w-3xl mx-auto gap-6 mb-6 sm:mb-10">
          <div className="flex flex-col gap-8">
            {LEFT_FEATURES.map((feature) => (
              <div key={feature.label} className="group flex items-center gap-5 flex-row-reverse text-right">
                <span className="w-[76px] h-[76px] rounded-full border-2 border-[#C9A961] bg-black/25 flex items-center justify-center flex-shrink-0 transition-transform duration-300 ease-out group-hover:scale-125">
                  <feature.icon className="w-9 h-9 text-[#C9A961]" strokeWidth={1.5} />
                </span>
                <span
                  className="font-sans text-[21px] tracking-wide leading-[1.3] text-[#ECE6D8] uppercase font-semibold whitespace-pre-line"
                  style={{ textShadow: '0 1px 10px rgba(0,0,0,0.7)' }}
                >
                  {feature.label}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-8 items-end sm:items-start">
            {RIGHT_FEATURES.map((feature) => (
              <div key={feature.label} className="group flex items-center gap-5 flex-row-reverse sm:flex-row text-right sm:text-left">
                <span className="w-[76px] h-[76px] rounded-full border-2 border-[#C9A961] bg-black/25 flex items-center justify-center flex-shrink-0 transition-transform duration-300 ease-out group-hover:scale-125">
                  <feature.icon className="w-9 h-9 text-[#C9A961]" strokeWidth={1.5} />
                </span>
                <span
                  className="font-sans text-[21px] tracking-wide leading-[1.3] text-[#ECE6D8] uppercase font-semibold whitespace-pre-line"
                  style={{ textShadow: '0 1px 10px rgba(0,0,0,0.7)' }}
                >
                  {feature.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
