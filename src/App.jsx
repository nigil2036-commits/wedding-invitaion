import React, { useState, useEffect } from 'react';
import { weddingConfig } from './config';
import { OpeningScreen } from './components/OpeningScreen';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { InvitationWording } from './components/InvitationWording';
import { CoupleShowcase } from './components/CoupleShowcase';
import { ScratchCardDate } from './components/ScratchCardDate';
import { EventsTimeline } from './components/EventsTimeline';
import { VenueSection } from './components/VenueSection';
import { CountdownTimer } from './components/CountdownTimer';
import { Footer } from './components/Footer';
import { FallingFlowers } from './components/common/FallingFlowers';

export function App() {
  const [lang, setLang] = useState(weddingConfig.defaultLanguage || 'en');
  const [isOpeningShown, setIsOpeningShown] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    // Check if user has already opened the invitation during this session
    const alreadyOpened = sessionStorage.getItem('tamil_invitation_opened');
    if (alreadyOpened === 'true') {
      setIsOpeningShown(false);
    }
  }, []);

  const handleCompleteOpening = () => {
    sessionStorage.setItem('tamil_invitation_opened', 'true');
    setIsOpeningShown(false);
  };

  const handleReplayOpening = () => {
    setIsOpeningShown(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-kumkum-deep text-ivory font-tamilBody selection:bg-gold selection:text-kumkum-dark relative">
      {/* 🌸 AUSPICIOUS FALLING FLOWERS ACROSS THE ENTIRE PAGE */}
      <FallingFlowers className="fixed inset-0 pointer-events-none z-20" />

      {/* 1. Opening Invitation Screen */}
      {isOpeningShown ? (
        <OpeningScreen
          config={weddingConfig}
          onComplete={handleCompleteOpening}
        />
      ) : (
        /* 2. Main Page Flow */
        <div className="relative">
          <Navbar
            lang={lang}
            setLang={setLang}
            isMuted={isMuted}
            setIsMuted={setIsMuted}
            onReplayOpening={handleReplayOpening}
            config={weddingConfig}
          />

          <main>
            <Hero lang={lang} config={weddingConfig} />
            <InvitationWording lang={lang} config={weddingConfig} />
            <CoupleShowcase lang={lang} config={weddingConfig} />
            <ScratchCardDate lang={lang} config={weddingConfig} />
            <EventsTimeline lang={lang} config={weddingConfig} />
            <VenueSection lang={lang} config={weddingConfig} />
            <CountdownTimer lang={lang} config={weddingConfig} />
          </main>

          <Footer
            lang={lang}
            config={weddingConfig}
            onReplayOpening={handleReplayOpening}
          />
        </div>
      )}
    </div>
  );
}

export default App;

