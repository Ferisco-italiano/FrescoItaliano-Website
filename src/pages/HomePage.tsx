import React from 'react';
import { HeroCarousel } from '../components/HeroCarousel';
import { ItalianBaristaSection } from '../components/ItalianBaristaSection';
import { CraftsmanOriginSection } from '../components/CraftsmanOriginSection';
import { DailyRitualSection } from '../components/DailyRitualSection';
import { BrewGuideSection } from '../components/BrewGuideSection';
import { CoffeeGuideSection } from '../components/CoffeeGuideSection';
import { CoffeeCultureSection } from '../components/CoffeeCultureSection';
import { KitSection } from '../components/KitSection';
import { FollowSection } from '../components/FollowSection';
import { PrimaryCTASection } from '../components/PrimaryCTASection';

interface HomePageProps {
  onOpenEligibility: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenEligibility }) => {
  return (
    <>
      <HeroCarousel onOpenEligibility={onOpenEligibility} />
      <ItalianBaristaSection onOpenEligibility={onOpenEligibility} />
      <CraftsmanOriginSection onOpenEligibility={onOpenEligibility} />
      <DailyRitualSection onOpenEligibility={onOpenEligibility} />
      <BrewGuideSection />
      <CoffeeGuideSection />
      <CoffeeCultureSection onOpenEligibility={onOpenEligibility} />
      <KitSection onOpenEligibility={onOpenEligibility} />
      <FollowSection />
      <PrimaryCTASection onOpenEligibility={onOpenEligibility} />
    </>
  );
};
