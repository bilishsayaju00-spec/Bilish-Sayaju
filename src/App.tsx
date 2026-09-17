import React, { useState, useEffect } from 'react';
import { BackgroundEffects } from './components/BackgroundEffects';
import { ScrollHUD } from './components/ScrollHUD';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Lab } from './components/Lab';
import { GamingOptimization } from './components/GamingOptimization';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { TerminalCLI } from './components/TerminalCLI';
import { soundFx } from './utils/audio';

export default function App() {
  const [cliOpen, setCliOpen] = useState(false);
  const [sfxEnabled, setSfxEnabled] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');

  // Toggle SFX
  const handleToggleSfx = () => {
    const newState = soundFx.toggle();
    setSfxEnabled(newState);
  };

  // Listen for custom event or key shortcuts to open CLI
  useEffect(() => {
    const handleOpenCliEvent = () => setCliOpen(true);
    window.addEventListener('open-cyber-cli', handleOpenCliEvent);
    return () => window.removeEventListener('open-cyber-cli', handleOpenCliEvent);
  }, []);

  // Section observer for active navbar highlighting
  useEffect(() => {
    const sections = ['hero', 'about', 'skills', 'projects', 'lab', 'gaming-tuning', 'contact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#E3EDE5] text-[#0D2318] selection:bg-[#059669]/25 selection:text-[#052E16]">
      {/* Animated Technical Background with Dynamic Particles and Parallax Grid */}
      <BackgroundEffects />

      {/* Interactive Cyber Scroll HUD Navigation Radar */}
      <ScrollHUD activeSection={activeSection} />

      {/* Sticky Cyber Navigation */}
      <Navbar
        onOpenCli={() => setCliOpen(true)}
        sfxEnabled={sfxEnabled}
        onToggleSfx={handleToggleSfx}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main id="main-content" className="relative z-10 flex flex-col">
        <Hero onOpenCli={() => setCliOpen(true)} />
        <About />
        <Skills />
        <Projects />
        <Lab />
        <GamingOptimization />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Cyber Terminal CLI */}
      <TerminalCLI isOpen={cliOpen} onClose={() => setCliOpen(false)} />
    </div>
  );
}
