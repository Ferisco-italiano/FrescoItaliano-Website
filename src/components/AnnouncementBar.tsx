import React, { useEffect, useState } from 'react';

const MESSAGES: string[] = [
  'Zero Capital Cost Office Coffee Placement — Now Serving Halifax, Toronto & Montreal',
  'Give The Perk Of Espresso: Free Bianchi Machine Installation For Qualifying Offices',
  'Own A High-Traffic Location? Earn Passive Income With A Fresco Placement.',
];

interface AnnouncementBarProps {
  onOpenEligibility: () => void;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ onOpenEligibility }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % MESSAGES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#1A1512] text-white">
      <button
        onClick={onOpenEligibility}
        className="w-full max-w-7xl mx-auto flex items-center justify-center gap-3 px-4 py-2.5 text-center cursor-pointer group"
      >
        <span className="relative h-11 sm:h-4 overflow-hidden flex-1 max-w-2xl">
          {MESSAGES.map((msg, i) => (
            <span
              key={msg}
              className={`absolute inset-0 flex items-center justify-center font-sans-clean text-[11px] sm:text-xs leading-relaxed sm:leading-normal tracking-wide transition-all duration-500 ${
                i === index ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
              }`}
            >
              {msg}
            </span>
          ))}
        </span>
        <span className="hidden sm:inline text-[11px] font-sans-clean uppercase tracking-[0.2em] text-[#D4AF6A] group-hover:text-white transition-colors whitespace-nowrap">
          Check Eligibility →
        </span>
      </button>
    </div>
  );
};
