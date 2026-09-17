import React from 'react';
import { ArrowUp, Zap } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { FacebookLogo, InstagramLogo, GmailLogo } from './BrandLogos';
import { soundFx } from '../utils/audio';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    soundFx.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="main-footer"
      className="relative bg-[#DCECE1] border-t border-[#B4D5BF] py-12 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand and Engineering identity */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 text-sm font-space font-semibold text-[#0D2318]">
              <span>Designed &amp; Built with</span>
              <Zap className="w-4 h-4 text-[#059669] fill-[#059669]" />
              <span>by Bilish Sayaju</span>
            </div>
            <div className="font-mono text-xs text-[#2D523F] mt-1">
              BE Computer Student · Bhaktapur, Nepal
            </div>
          </div>

          {/* Authentic Social Logos */}
          <div className="flex items-center gap-3">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              aria-label="Email via Gmail"
              onClick={() => soundFx.playClick()}
              onMouseEnter={() => soundFx.playHover()}
              className="p-2 rounded-lg bg-[#EDF5F0] border border-[#B4D5BF] hover:border-[#059669] hover:bg-[#F3F9F5] transition-all shadow-2xs"
            >
              <GmailLogo className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Profile"
              onClick={() => soundFx.playClick()}
              onMouseEnter={() => soundFx.playHover()}
              className="p-2 rounded-lg bg-[#EDF5F0] border border-[#B4D5BF] hover:border-[#059669] hover:bg-[#F3F9F5] transition-all shadow-2xs"
            >
              <InstagramLogo className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Profile"
              onClick={() => soundFx.playClick()}
              onMouseEnter={() => soundFx.playHover()}
              className="p-2 rounded-lg bg-[#EDF5F0] border border-[#B4D5BF] hover:border-[#059669] hover:bg-[#F3F9F5] transition-all shadow-2xs"
            >
              <FacebookLogo className="w-4 h-4" />
            </a>
          </div>

          {/* Back to Top */}
          <button
            type="button"
            onClick={scrollToTop}
            onMouseEnter={() => soundFx.playHover()}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#EDF5F0] border border-[#B4D5BF] hover:border-[#059669] text-xs font-mono text-[#0D2318] hover:bg-[#E5F0E8] transition-all shadow-2xs cursor-pointer font-medium"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#059669]" />
          </button>
        </div>

        {/* Bottom Copyright & Status */}
        <div className="mt-8 pt-6 border-t border-[#B4D5BF] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#436A56]">
          <span>&copy; 2026 Bilish Sayaju. All rights reserved.</span>
          <span className="flex items-center gap-1.5 text-[#065F38] font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] inline-block animate-pulse" />
            <span>bilishsayaju.com.np · [CYBER_VERIFIED_BUILD]</span>
          </span>
        </div>
      </div>
    </footer>
  );
};
