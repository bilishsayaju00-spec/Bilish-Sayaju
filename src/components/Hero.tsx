import React from 'react';
import { ArrowRight, Terminal, Mail, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ProfileCard } from './ProfileCard';
import { Stats } from './Stats';
import { FacebookLogo, InstagramLogo, GmailLogo } from './BrandLogos';
import { soundFx } from '../utils/audio';

interface HeroProps {
  onOpenCli: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCli }) => {
  return (
    <section
      id="hero"
      aria-label="Hero Introduction"
      className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Top high-contrast Obsidian status badge */}
            <div
              id="hero-status-badge"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#08150D] border border-[#1A4528] text-xs font-mono text-[#F4FAF6] shadow-sm mb-6 hover:border-[#059669] transition-all cursor-default"
              onMouseEnter={() => soundFx.playHover()}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#059669]" />
              </span>
              <span className="font-bold text-[#E2F7EB]">{PERSONAL_INFO.statusBadge}</span>
              <span className="text-[#34D399]">|</span>
              <span className="text-[#84C29B] text-[11px] font-bold">SYS::ONLINE</span>
            </div>

            {/* Intro Lead */}
            <div className="font-mono text-sm sm:text-base text-[#1D472D] tracking-wider mb-2 flex items-center gap-2 font-bold">
              <span className="text-[#059669] font-black">&gt;</span>
              <span>Hello, World! I am</span>
            </div>

            {/* Headline Name - Extra Bold Obsidian Black & Emerald */}
            <h1
              id="hero-name-headline"
              className="font-space font-black text-4xl sm:text-6xl md:text-7xl tracking-tight leading-[1.08] mb-3"
            >
              <span className="text-[#050F07]">BILISH </span>
              <span className="text-[#059669]">
                SAYAJU
              </span>
            </h1>

            {/* Sub-identity Role */}
            <div className="font-mono text-base sm:text-lg text-[#0F3520] font-bold tracking-wide mb-6 flex items-center gap-2">
              <span className="text-[#065F38]">{PERSONAL_INFO.headlineRole}</span>
              <span className="hidden sm:inline-block text-[#6CA880]">•</span>
              <span className="hidden sm:inline-block font-space text-sm text-[#275338] font-semibold">
                {PERSONAL_INFO.shortIdentity}
              </span>
            </div>

            {/* Main Description */}
            <p className="font-sans text-[#122E1F] text-base sm:text-lg leading-relaxed max-w-2xl mb-7 font-normal">
              {PERSONAL_INFO.heroDescription}
            </p>

            {/* Quick Original Colorful Social Channels in Inverted Obsidian Pills */}
            <div className="mb-7 flex flex-wrap items-center gap-3">
              <span className="font-mono text-xs text-[#0F3520] font-bold">Direct Transmit:</span>
              
              {/* Instagram */}
              <a
                href={PERSONAL_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playClick()}
                onMouseEnter={() => soundFx.playHover()}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#09150E] hover:bg-[#12281B] border border-[#1E4A2E] hover:border-[#059669] text-xs font-mono text-[#F4FAF6] font-bold transition-all shadow-xs"
              >
                <InstagramLogo className="w-4 h-4 shrink-0" />
                <span>Instagram</span>
              </a>

              {/* Facebook */}
              <a
                href={PERSONAL_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playClick()}
                onMouseEnter={() => soundFx.playHover()}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#09150E] hover:bg-[#12281B] border border-[#1E4A2E] hover:border-[#059669] text-xs font-mono text-[#F4FAF6] font-bold transition-all shadow-xs"
              >
                <FacebookLogo className="w-4 h-4 shrink-0" />
                <span>Facebook</span>
              </a>

              {/* Gmail */}
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                onClick={() => soundFx.playClick()}
                onMouseEnter={() => soundFx.playHover()}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#09150E] hover:bg-[#12281B] border border-[#1E4A2E] hover:border-[#059669] text-xs font-mono text-[#F4FAF6] font-bold transition-all shadow-xs"
              >
                <GmailLogo className="w-4 h-4 shrink-0" />
                <span>Gmail</span>
              </a>
            </div>

            {/* CTA Buttons - High Contrast Off-White & Black */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto">
              {/* Explore Projects - Obsidian Black with Off-White Bold text */}
              <a
                href="#projects"
                id="hero-cta-projects"
                onClick={() => soundFx.playClick()}
                onMouseEnter={() => soundFx.playHover()}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#061209] hover:bg-[#112918] text-[#F7FAF8] font-space font-bold text-sm border border-[#245837] transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#059669] cursor-pointer"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 text-[#34D399]" />
              </a>

              {/* Open Developer CLI - Off-White Card with Bold Black */}
              <button
                type="button"
                id="hero-cta-cli"
                onClick={() => {
                  soundFx.playOpen();
                  onOpenCli();
                }}
                onMouseEnter={() => soundFx.playHover()}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#EDF5F0] hover:bg-[#F4FAF6] border border-[#A2CCA7] hover:border-[#059669] text-[#050F07] font-mono font-bold text-sm transition-all duration-200 shadow-xs hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#059669] cursor-pointer"
              >
                <Terminal className="w-4 h-4 text-[#059669]" />
                <span>Open CLI</span>
              </button>

              {/* Get In Touch */}
              <a
                href="#contact"
                id="hero-cta-contact"
                onClick={() => soundFx.playClick()}
                onMouseEnter={() => soundFx.playHover()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#EDF5F0] border border-[#B4D5BF] hover:border-[#059669] text-[#0F3520] font-space font-bold text-sm hover:bg-[#E2EDE5] transition-all duration-200 shadow-xs hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#059669] cursor-pointer"
              >
                <Mail className="w-4 h-4 text-[#059669]" />
                <span>Get In Touch</span>
              </a>
            </div>

            {/* Quick Status Tagline */}
            <div className="mt-8 flex items-center gap-3 text-xs font-mono text-[#1D472D] font-bold">
              <span className="flex items-center gap-1.5 text-[#065F38]">
                <Sparkles className="w-3.5 h-3.5 text-[#059669]" />
                <span>Bhaktapur, Nepal</span>
              </span>
              <span className="text-[#6CA880]">•</span>
              <span className="text-[#059669]">{PERSONAL_INFO.domain}</span>
            </div>
          </div>

          {/* Right Column: Floating Digital Profile Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
            <ProfileCard />
          </div>
        </div>

        {/* Four Compact Hero Stat Cards */}
        <Stats />
      </div>
    </section>
  );
};
