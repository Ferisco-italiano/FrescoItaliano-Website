import React, { useState } from 'react';
import { AnnouncementBar } from './components/AnnouncementBar';
import { HeroCarousel } from './components/HeroCarousel';
import { CategoryCardSection } from './components/CategoryCardSection';
import { ItalianBaristaSection } from './components/ItalianBaristaSection';
import { CraftsmanOriginSection } from './components/CraftsmanOriginSection';
import { DailyRitualSection } from './components/DailyRitualSection';
import { BrewGuideSection } from './components/BrewGuideSection';
import { CoffeeCultureSection } from './components/CoffeeCultureSection';
import { KitSection } from './components/KitSection';
import { PerksSection } from './components/PerksSection';
import { SpaceElevationSection } from './components/SpaceElevationSection';
import { LocationsSlider } from './components/LocationsSlider';
import { FollowSection } from './components/FollowSection';
import { PrimaryCTASection } from './components/PrimaryCTASection';
import { Footer } from './components/Footer';
import { EligibilityModal } from './components/EligibilityModal';
import { OfficePerksModal } from './components/OfficePerksModal';
import { CateringModal } from './components/CateringModal';
import { CoffeeGuideSection } from './components/CoffeeGuideSection';

export default function App() {
  const [eligibilityOpen, setEligibilityOpen] = useState(false);
  const [officePerksOpen, setOfficePerksOpen] = useState(false);
  const [cateringOpen, setCateringOpen] = useState(false);

  return (
    <div className="min-h-screen font-centaur antialiased selection:bg-[#211D1A] selection:text-white flex flex-col justify-between bg-white text-[#211D1A]">
      <AnnouncementBar onOpenEligibility={() => setEligibilityOpen(true)} />

      <main className="flex-1">
        <HeroCarousel onOpenEligibility={() => setEligibilityOpen(true)} />
        {/* <CategoryCardSection /> */}
        <ItalianBaristaSection onOpenEligibility={() => setEligibilityOpen(true)} />
        <CraftsmanOriginSection onOpenEligibility={() => setEligibilityOpen(true)} />
        <DailyRitualSection onOpenEligibility={() => setEligibilityOpen(true)} />
        <BrewGuideSection />
        <CoffeeGuideSection />
        <CoffeeCultureSection onOpenEligibility={() => setEligibilityOpen(true)} />
        <KitSection onOpenEligibility={() => setEligibilityOpen(true)} />
        {/* <PerksSection
          onOpenOfficePerks={() => setOfficePerksOpen(true)}
          onOpenCatering={() => setCateringOpen(true)}
          onOpenEligibility={() => setEligibilityOpen(true)}
        /> */}
        {/* <SpaceElevationSection onOpenEligibility={() => setEligibilityOpen(true)} /> */}
        {/* <LocationsSlider onOpenEligibility={() => setEligibilityOpen(true)} /> */}
        <FollowSection />
        <PrimaryCTASection onOpenEligibility={() => setEligibilityOpen(true)} />
      </main>

      <Footer
        onOpenEligibility={() => setEligibilityOpen(true)}
        onOpenOfficePerks={() => setOfficePerksOpen(true)}
        onOpenCatering={() => setCateringOpen(true)}
      />

      <EligibilityModal
        isOpen={eligibilityOpen}
        onClose={() => setEligibilityOpen(false)}
      />

      <OfficePerksModal
        isOpen={officePerksOpen}
        onClose={() => setOfficePerksOpen(false)}
      />

      <CateringModal
        isOpen={cateringOpen}
        onClose={() => setCateringOpen(false)}
      />
    </div>
  );
}
