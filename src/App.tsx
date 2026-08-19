import React, { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Footer } from './components/Footer';
import { EligibilityModal } from './components/EligibilityModal';
import { OfficePerksModal } from './components/OfficePerksModal';
import { CateringModal } from './components/CateringModal';
import { HomePage } from './pages/HomePage';
import { PrivateOfficeSpacesPage } from './pages/PrivateOfficeSpacesPage';

export default function App() {
  const [eligibilityOpen, setEligibilityOpen] = useState(false);
  const [officePerksOpen, setOfficePerksOpen] = useState(false);
  const [cateringOpen, setCateringOpen] = useState(false);

  return (
    <HashRouter>
      <div className="min-h-screen font-centaur antialiased selection:bg-[#211D1A] selection:text-white flex flex-col justify-between bg-white text-[#211D1A]">
        <AnnouncementBar onOpenEligibility={() => setEligibilityOpen(true)} />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage onOpenEligibility={() => setEligibilityOpen(true)} />} />
            <Route
              path="/private-office-spaces"
              element={<PrivateOfficeSpacesPage onOpenEligibility={() => setEligibilityOpen(true)} />}
            />
          </Routes>
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
    </HashRouter>
  );
}
