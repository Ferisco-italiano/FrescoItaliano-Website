import React from 'react';
import { Instagram, ChevronRight } from 'lucide-react';

const GALLERY_IMAGES: string[] = [
  'https://images.unsplash.com/photo-1582298538104-fe2e74c27f59?auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1606509036992-4399d5c5afe4?auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1604881988758-f76ad2f7aac1?auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1515697061774-2399f90c2b77?auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1571040358759-a64f3e283c27?auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1520714760316-984348992242?auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1558210834-473f430c09ac?auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1548971856-227577d13929?auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1579265898841-79c7890d69cf?auto=format&fit=crop&w=500&q=80',
];

const SEE_MORE_INDEX = 2;

export const FollowSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-[#dbc1ac] border-t border-[#E3DDD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="inline-flex items-center gap-2 text-xs font-sans-clean uppercase tracking-[0.25em] text-[#1C4E6B]">
            <Instagram className="w-3.5 h-3.5" />
            Follow Us @FrescoItaliano
          </span>
          <h2 className="font-centaur text-3xl sm:text-4xl font-medium text-[#211D1A]">
            Real Cups, Real Moments
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 sm:gap-1.5">
          {GALLERY_IMAGES.map((src, i) => (
            <div
              key={i}
              className="group relative aspect-square overflow-hidden bg-[#E3DDD3] cursor-pointer"
            >
              <img
                src={src}
                alt="Fresco Italiano coffee moment"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

             (
                <div className="absolute inset-0 bg-[#211D1A]/0 group-hover:bg-[#211D1A]/40 transition-colors duration-300 flex items-center justify-center">
                  <Instagram className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              )
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};