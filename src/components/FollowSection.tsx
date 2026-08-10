import React from 'react';
import { Instagram, ChevronRight } from 'lucide-react';

const GALLERY_IMAGES: string[] = [
  '/images/SocialMedia/InstagramImage1.webp',
  '/images/SocialMedia/InstagramImage2.webp',
  '/images/SocialMedia/InstagramImage3.webp',
  '/images/SocialMedia/InstagramImage4.webp',
  '/images/SocialMedia/InstagramImage5.webp',
  '/images/SocialMedia/InstagramImage6.webp',
  '/images/SocialMedia/InstagramImage7.webp',
  '/images/SocialMedia/InstagramImage8.webp',
  '/images/SocialMedia/InstagramImage9.webp',
];

const SEE_MORE_INDEX = 2;

export const FollowSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-[#dbc1ac] border-t border-[#E3DDD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="inline-flex items-center gap-2 text-xs font-sans-clean uppercase tracking-[0.25em] text-[#211D1A]">
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