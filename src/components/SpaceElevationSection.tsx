import React, { useState } from 'react';
import { Building2, ChevronRight, Calculator, Shield } from 'lucide-react';

interface SpaceElevationSectionProps {
  onOpenEligibility: () => void;
}

export const SpaceElevationSection: React.FC<SpaceElevationSectionProps> = ({ onOpenEligibility }) => {
  const [footTraffic, setFootTraffic] = useState<number>(250);
  const [buildingType, setBuildingType] = useState<'commercial' | 'residential' | 'public'>('commercial');

  const cupsPerDayEstimate = Math.round(footTraffic * 0.35);
  const annualAmenityValue = Math.round(cupsPerDayEstimate * 6 * 365);
  const estimatedPassiveIncomeAnnual = Math.round(cupsPerDayEstimate * 0.40 * 365);

  return (
    <section id="elevate-location" className="relative py-28 sm:py-36 bg-[#FAF8F5] text-[#211D1A] border-t border-[#E3DDD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bluebottle-badge">
            <Building2 className="w-4 h-4" />
            <span className="text-xs font-sans-clean font-semibold uppercase tracking-[0.2em]">
              Elevating The Space
            </span>
          </div>

          <h2 className="font-centaur text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-[#211D1A]">
            Elevate Your <span className="gold-gradient-text">Location.</span>
          </h2>

          <p className="font-sans-clean text-lg sm:text-xl text-[#514A44] leading-relaxed font-normal">
            It's the equivalent of having access to a $6 specialty espresso from a premium local café, seamlessly integrated right inside your building. Providing Fresco isn't just about coffee; it's about providing a highly desired amenity that makes people feel valued.
          </p>
        </div>

        {/* B2B Property Amenity Value & Passive Income Estimator Widget */}
        <div className="bg-white border border-[#E3DDD3] rounded-3xl p-8 sm:p-12 shadow-sm grid lg:grid-cols-12 gap-10 items-center text-left">

          {/* Left: Interactive Controls */}
          <div className="lg:col-span-6 space-y-6">
            <div className="border-b border-[#E3DDD3] pb-4">
              <div className="flex items-center gap-2 text-[#211D1A] text-xs font-sans-clean uppercase tracking-wide">
                <Calculator className="w-4 h-4" /> Property Manager Amenity Estimator
              </div>
              <h3 className="font-centaur text-3xl font-medium text-[#211D1A] mt-1">
                Calculate Location Amenity Value
              </h3>
            </div>

            {/* Building Type Selector */}
            <div className="space-y-2">
              <label className="text-xs font-sans-clean text-[#514A44] uppercase tracking-wide">
                1. Select Property Type:
              </label>
              <div className="grid grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setBuildingType('commercial')}
                  className={`py-2.5 px-3 rounded-xl text-xs font-sans-clean transition-all cursor-pointer border ${
                    buildingType === 'commercial'
                      ? 'bg-[#211D1A] text-white font-semibold border-[#211D1A]'
                      : 'bg-[#FAF8F5] text-[#514A44] border-[#E3DDD3] hover:border-[#211D1A]'
                  }`}
                >
                  Commercial Office
                </button>
                <button
                  type="button"
                  onClick={() => setBuildingType('residential')}
                  className={`py-2.5 px-3 rounded-xl text-xs font-sans-clean transition-all cursor-pointer border ${
                    buildingType === 'residential'
                      ? 'bg-[#211D1A] text-white font-semibold border-[#211D1A]'
                      : 'bg-[#FAF8F5] text-[#514A44] border-[#E3DDD3] hover:border-[#211D1A]'
                  }`}
                >
                  Luxury Residential
                </button>
                <button
                  type="button"
                  onClick={() => setBuildingType('public')}
                  className={`py-2.5 px-3 rounded-xl text-xs font-sans-clean transition-all cursor-pointer border ${
                    buildingType === 'public'
                      ? 'bg-[#211D1A] text-white font-semibold border-[#211D1A]'
                      : 'bg-[#FAF8F5] text-[#514A44] border-[#E3DDD3] hover:border-[#211D1A]'
                  }`}
                >
                  Public &amp; Retail
                </button>
              </div>
            </div>

            {/* Daily Foot Traffic Slider */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-xs font-sans-clean">
                <label className="text-[#514A44] uppercase tracking-wide">
                  2. Daily Foot Traffic / Occupants:
                </label>
                <span className="text-[#211D1A] font-sans-clean font-semibold text-sm">
                  {footTraffic} people/day
                </span>
              </div>
              <input
                type="range"
                min="50"
                max="2000"
                step="25"
                value={footTraffic}
                onChange={(e) => setFootTraffic(Number(e.target.value))}
                className="w-full h-2 bg-[#E3DDD3] rounded-lg appearance-none cursor-pointer accent-[#211D1A]"
              />
              <div className="flex justify-between text-[10px] font-sans-clean text-[#8C8378]">
                <span>50 occupants</span>
                <span>500 occupants</span>
                <span>2,000+ occupants</span>
              </div>
            </div>

            {/* Guaranteed Benefits Checklist */}
            <div className="space-y-2 pt-2 border-t border-[#E3DDD3] text-xs font-sans-clean text-[#514A44]">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-emerald-600" />
                <span>Zero Machine Purchase Cost (Fully Financed &amp; Maintained)</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-emerald-600" />
                <span>Weekly Java Blend SCA 80+ Bean Replenishment</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-emerald-600" />
                <span>Local Advertising Campaigns Run By Fresco To Drive Traffic</span>
              </div>
            </div>
          </div>

          {/* Right: Calculated Value Output Display */}
          <div className="lg:col-span-6 bg-[#FAF8F5] border border-[#E3DDD3] rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#E3DDD3]">
              <span className="text-xs font-sans-clean uppercase tracking-wide text-[#211D1A]">
                Estimated Location Impact
              </span>
              <span className="px-2.5 py-1 rounded bg-[#211D1A] text-[10px] font-sans-clean font-semibold text-white">
                B2B Revenue Share
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 text-left">
              <div className="bg-white p-4 rounded-xl border border-[#E3DDD3]">
                <p className="text-[10px] font-sans-clean text-[#8C8378] uppercase">Estimated Daily Drinks</p>
                <p className="font-centaur text-3xl font-medium text-[#211D1A] mt-1">
                  ~{cupsPerDayEstimate} <span className="text-sm font-sans-clean text-[#8C8378]">cups/day</span>
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-[#E3DDD3]">
                <p className="text-[10px] font-sans-clean text-[#8C8378] uppercase">Perceived Amenity Value</p>
                <p className="font-centaur text-3xl font-medium text-[#211D1A] mt-1">
                  ${(annualAmenityValue / 1000).toFixed(1)}k <span className="text-sm font-sans-clean text-[#8C8378]">/yr</span>
                </p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl border border-[#211D1A]/30 text-left space-y-2">
              <p className="text-xs font-sans-clean text-[#211D1A] uppercase tracking-wide font-semibold">
                Estimated Annual Location Passive Share:
              </p>
              <div className="flex items-baseline gap-2">
                <span className="font-centaur text-4xl sm:text-5xl font-semibold gold-gradient-text">
                  ${estimatedPassiveIncomeAnnual.toLocaleString()}
                </span>
                <span className="text-xs font-sans-clean text-[#8C8378]">/ year (Passive)</span>
              </div>
              <p className="text-[11px] font-sans-clean text-[#8C8378]">
                Plus 100% boost in tenant satisfaction and lobby foot-traffic experience.
              </p>
            </div>

            <button
              onClick={onOpenEligibility}
              className="gold-button w-full py-4 rounded-xl text-xs uppercase tracking-wide font-semibold flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Submit Location For Placement Verification</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
