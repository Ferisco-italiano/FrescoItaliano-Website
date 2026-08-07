import React from 'react';
import { ChevronRight, MapPin, Mail, Phone, Award, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onOpenEligibility: () => void;
  onOpenOfficePerks: () => void;
  onOpenCatering: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenEligibility,
  onOpenOfficePerks,
  onOpenCatering,
}) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#FAF8F5] text-[#514A44] border-t border-[#E3DDD3] pt-16 pb-12 font-sans-clean text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Main Footer Grid — mirrors Blue Bottle's Find a Cafe / Careers / Learn / Contact columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 text-left">

          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <img src="/images/logo.svg" alt="Fresco Italiano" className="h-12 w-auto" />

            <p className="font-sans-clean text-sm text-[#8C8378] max-w-sm leading-relaxed">
              Italian ISO-spec machinery meets Nova Scotia's specialty Java Blend SCA 80+ coffee roasting. Providing luxury espresso amenities with zero capital cost.
            </p>

            <div className="pt-2 flex items-center gap-4 text-[#8C8378] font-sans-clean text-[11px]">
              <span className="flex items-center gap-1 text-[#1C4E6B]">
                <ShieldCheck className="w-3.5 h-3.5" /> Made in Italy
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 text-[#1C4E6B]">
                <Award className="w-3.5 h-3.5" /> Java Blend Est. 1938
              </span>
            </div>
          </div>

          {/* Find A Location */}
          <div className="space-y-3">
            <h4 className="font-centaur text-sm font-semibold text-[#211D1A] uppercase tracking-wide border-b border-[#E3DDD3] pb-2">
              Locations
            </h4>
            <ul className="space-y-2 text-[#514A44] font-medium">
              <li>
                <button onClick={() => scrollToSection('locations')} className="hover:text-[#1C4E6B] transition-colors">
                  Find A Fresco Near You
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('elevate-location')} className="hover:text-[#1C4E6B] transition-colors">
                  Property Managers
                </button>
              </li>
              <li>
                <button onClick={onOpenEligibility} className="hover:text-[#1C4E6B] transition-colors">
                  Check Location Eligibility
                </button>
              </li>
              <li>
                <a href="mailto:careers@frescoitaliano.com" className="hover:text-[#1C4E6B] transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Learn */}
          <div className="space-y-3">
            <h4 className="font-centaur text-sm font-semibold text-[#211D1A] uppercase tracking-wide border-b border-[#E3DDD3] pb-2">
              Learn
            </h4>
            <ul className="space-y-2 text-[#514A44] font-medium">
              <li>
                <button onClick={() => scrollToSection('italian-barista')} className="hover:text-[#1C4E6B] transition-colors">
                  The Bianchi Machine
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('craftsman-origin')} className="hover:text-[#1C4E6B] transition-colors">
                  Java Blend &amp; Sustainability
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('coffee-culture')} className="hover:text-[#1C4E6B] transition-colors">
                  Beverage Menu
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('hero')} className="hover:text-[#1C4E6B] transition-colors">
                  Brand Story
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h4 className="font-centaur text-sm font-semibold text-[#211D1A] uppercase tracking-wide border-b border-[#E3DDD3] pb-2">
              Contact
            </h4>
            <ul className="space-y-2 text-[#514A44] font-medium">
              <li>
                <a href="mailto:inquiries@frescoitaliano.com" className="hover:text-[#1C4E6B] transition-colors">
                  Customer Inquiry
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenOfficePerks}
                  className="text-[#1C4E6B] hover:text-[#163e57] font-semibold flex items-center gap-1 group text-left"
                >
                  <span>Office / Corporate Inquiry</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenCatering}
                  className="text-[#1C4E6B] hover:text-[#163e57] font-semibold flex items-center gap-1 group text-left"
                >
                  <span>Event Catering Inquiry</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </li>
            </ul>

            <div className="pt-2 space-y-2 text-[#514A44] font-sans-clean">
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#1C4E6B]" />
                <span>Halifax • Toronto • Montreal</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#1C4E6B]" />
                <span>inquiries@frescoitaliano.com</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#1C4E6B]" />
                <span>+1 (800) 555-FRESCO</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#E3DDD3] flex flex-col sm:flex-row items-center justify-between gap-4 text-[#8C8378] text-[11px] font-sans-clean">
          <p>© {new Date().getFullYear()} Fresco Italiano Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-[#211D1A] cursor-pointer">Privacy Policy</span>
            <span className="hover:text-[#211D1A] cursor-pointer">ISO-9001 Compliance</span>
            <span className="hover:text-[#211D1A] cursor-pointer">SCA Guidelines</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
