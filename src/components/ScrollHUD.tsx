import React, { useState, useEffect } from 'react';
import { soundFx } from '../utils/audio';

interface ScrollHUDProps {
  activeSection: string;
}

export const ScrollHUD: React.FC<ScrollHUDProps> = ({ activeSection }) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const sections = [
    { id: 'hero', label: 'ORIGIN', num: '00' },
    { id: 'about', label: 'PHILOSOPHY', num: '01' },
    { id: 'skills', label: 'ARSENAL', num: '02' },
    { id: 'projects', label: 'BUILDS', num: '03' },
    { id: 'lab', label: 'LAB', num: '04' },
    { id: 'gaming-tuning', label: 'TUNING', num: '05' },
    { id: 'contact', label: 'TRANSMIT', num: '06' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        const progress = Math.min(Math.round((window.scrollY / scrollHeight) * 100), 100);
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    soundFx.playClick();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside
      id="cyber-scroll-hud"
      aria-label="Interactive Navigation HUD"
      className="fixed right-4 sm:right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center select-none"
    >
      {/* Top HUD Meter with Off-White on Obsidian Black Bold Badge */}
      <div className="mb-3 px-2.5 py-1 rounded-md bg-[#09150E] border border-[#1A472A] shadow-md flex items-center gap-1.5 font-mono text-[10px] text-[#F4FAF6] font-bold tracking-wider">
        <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
        <span className="text-[#34D399]">{scrollProgress.toString().padStart(2, '0')}%</span>
        <span className="text-[#649977] text-[8px]">DEPTH</span>
      </div>

      {/* Vertical Track Container */}
      <div className="relative py-2 flex flex-col items-center">
        {/* Background Vertical Rail Line */}
        <div className="w-[2px] h-48 bg-[#B4D5BF] relative rounded-full overflow-hidden">
          {/* Active Glowing Scroll Indicator filling down */}
          <div
            className="w-full bg-gradient-to-b from-[#059669] to-[#10B981] rounded-full transition-all duration-150 shadow-[0_0_8px_#10B981]"
            style={{ height: `${scrollProgress}%` }}
          />
        </div>

        {/* Section Target Nodes */}
        <div className="absolute inset-y-0 flex flex-col justify-between items-center py-1">
          {sections.map((sec) => {
            const isActive = activeSection === sec.id;
            return (
              <button
                key={sec.id}
                type="button"
                onClick={() => scrollToSection(sec.id)}
                onMouseEnter={() => soundFx.playHover()}
                className="group relative flex items-center justify-center p-1 cursor-pointer focus:outline-none"
                aria-label={`Jump to ${sec.label}`}
              >
                {/* Node Pill */}
                <div
                  className={`transition-all duration-200 rounded-full ${
                    isActive
                      ? 'w-3.5 h-3.5 bg-[#09150E] border-2 border-[#10B981] shadow-[0_0_10px_rgba(16,185,129,0.5)]'
                      : 'w-2 h-2 bg-[#8BB89A] group-hover:bg-[#059669] group-hover:scale-125'
                  }`}
                />

                {/* Hover Flyout Label in Bold Off-White on Obsidian Black */}
                <div className="absolute right-6 opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-150 transform translate-x-2 group-hover:translate-x-0 flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#09150E] border border-[#1A472A] text-[#F4FAF6] font-mono text-[10px] font-bold tracking-wider shadow-lg whitespace-nowrap">
                  <span className="text-[#34D399]">{sec.num}</span>
                  <span>{sec.label}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Bottom Sector Index */}
      <div className="mt-3 font-mono text-[9px] text-[#244734] font-bold tracking-widest uppercase">
        Z-AXIS
      </div>
    </aside>
  );
};
