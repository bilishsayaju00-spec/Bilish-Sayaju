import React, { useState } from 'react';
import { Cpu, Terminal, Shield, Sparkles, Activity, Layers, Code2 } from 'lucide-react';
import { FacebookLogo, InstagramLogo, GmailLogo } from './BrandLogos';
import { PERSONAL_INFO } from '../data/portfolioData';
import { soundFx } from '../utils/audio';

export const ProfileCard: React.FC = () => {
  const [pulseActive, setPulseActive] = useState(true);

  const togglePulse = () => {
    soundFx.playClick();
    setPulseActive(!pulseActive);
  };

  return (
    <div
      id="hero-digital-profile-card"
      className="relative w-full max-w-md mx-auto group animate-cyber-float"
    >
      {/* Outer subtle ambient glow behind card */}
      <div className="absolute -inset-1.5 bg-gradient-to-r from-emerald-300/30 via-teal-300/30 to-cyan-300/30 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Main clean cyber card container */}
      <div className="relative rounded-2xl bg-[#EDF5F0] border-2 border-[#A6CCA2] hover:border-[#059669] transition-all duration-300 backdrop-blur-xl p-5 sm:p-6 shadow-[0_12px_40px_rgba(5,150,105,0.08)]">
        {/* Decorative hacking corner brackets */}
        <div className="absolute top-2.5 left-2.5 w-3 h-3 border-t-2 border-l-2 border-[#059669]" />
        <div className="absolute top-2.5 right-2.5 w-3 h-3 border-t-2 border-r-2 border-[#059669]" />
        <div className="absolute bottom-2.5 left-2.5 w-3 h-3 border-b-2 border-l-2 border-[#059669]" />
        <div className="absolute bottom-2.5 right-2.5 w-3 h-3 border-b-2 border-r-2 border-[#059669]" />

        {/* Top Window Bar: Inverted Obsidian Black with Bold Off-White */}
        <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-[#08150D] border border-[#1A4528] mb-4">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444] inline-block shadow-xs" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B] inline-block shadow-xs" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] inline-block shadow-xs" />
          </div>
          <div className="font-mono text-xs text-[#F4FAF6] font-bold flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-[#34D399]" />
            <span>bilish.init()</span>
          </div>
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={togglePulse}
              title="Toggle Live Status"
              className="font-mono text-[10px] text-[#A7F3D0] font-bold flex items-center gap-1 focus:outline-none cursor-pointer"
            >
              <Activity className={`w-3 h-3 ${pulseActive ? 'animate-pulse text-[#34D399]' : 'text-[#6A947B]'}`} />
              <span className="hidden sm:inline">LIVE</span>
            </button>
          </div>
        </div>

        {/* Center: Stylized Computer Chip / Cyber Icon Graphic */}
        <div className="relative my-3 flex flex-col items-center justify-center">
          <div className="relative w-22 h-22 sm:w-26 sm:h-26 flex items-center justify-center">
            {/* Rotating cyber ring */}
            <div className="absolute inset-0 rounded-full border border-dashed border-[#059669]/60 animate-[spin_20s_linear_infinite]" />
            <div className="absolute inset-2 rounded-full border border-[#B4D5BF]" />
            {/* Deep Obsidian central socket */}
            <div className="absolute inset-4 rounded-xl bg-[#08150D] border-2 border-[#1E4A2E] flex items-center justify-center shadow-md group-hover:border-[#059669] transition-colors">
              {/* Central Stylized Chip */}
              <div className="relative flex items-center justify-center text-[#F4FAF6]">
                <Cpu className="w-9 h-9 stroke-[1.8] text-[#34D399]" />
                <Code2 className="w-4 h-4 absolute text-[#E2F7EB]" />
              </div>
            </div>

            {/* Circuit traces radiating out */}
            <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#059669] rounded-full shadow-[0_0_8px_#059669]" />
            <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#0284C7] rounded-full shadow-[0_0_8px_#0284C7]" />
            <div className="absolute top-1/2 -left-1.5 -translate-y-1/2 w-2 h-2 bg-[#059669] rounded-full shadow-[0_0_8px_#059669]" />
            <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-2 h-2 bg-[#10B981] rounded-full shadow-[0_0_8px_#10B981]" />
          </div>

          {/* Name & Title in Extra-Bold Obsidian Black */}
          <h3 className="font-space font-black text-2xl text-[#050F07] mt-3 tracking-wide text-center">
            Bilish Sayaju
          </h3>
          <p className="font-mono text-xs text-[#065F38] font-bold text-center mt-0.5 flex items-center gap-1.5 justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] inline-block" />
            <span>BE Computer Student</span>
          </p>
        </div>

        {/* Specs Grid */}
        <div className="space-y-2 mt-4 pt-3.5 border-t border-[#B4D5BF] font-mono text-xs">
          {/* Architecture */}
          <div className="flex items-center justify-between p-2 rounded-lg bg-[#E0EFE6] border border-[#B4D5BF] hover:border-[#059669] transition-colors">
            <span className="text-[#102C1B] font-bold flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-[#059669]" />
              Architecture:
            </span>
            <span className="text-[#050F07] font-black text-right">Creative × Technical</span>
          </div>

          {/* Focus Stack */}
          <div className="flex items-center justify-between p-2 rounded-lg bg-[#E0EFE6] border border-[#B4D5BF] hover:border-[#059669] transition-colors">
            <span className="text-[#102C1B] font-bold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#0284C7]" />
              Focus Stack:
            </span>
            <span className="text-[#050F07] font-black text-[11px] text-right">
              Design • AI • Code • Security
            </span>
          </div>

          {/* Status */}
          <div className="flex items-center justify-between p-2 rounded-lg bg-[#E0EFE6] border border-[#B4D5BF] hover:border-[#059669] transition-colors">
            <span className="text-[#102C1B] font-bold flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-[#059669]" />
              Status:
            </span>
            <span className="text-[#065F38] font-black flex items-center gap-1">
              <span>Learning &amp; Building</span>
              <span className="text-xs">⚡</span>
            </span>
          </div>
        </div>

        {/* Verified Social Channels with Inverted Obsidian Buttons */}
        <div className="mt-3.5 pt-3 border-t border-[#B4D5BF]">
          <div className="flex items-center justify-between gap-2">
            {/* Insta */}
            <a
              href={PERSONAL_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundFx.playClick()}
              title="Instagram"
              className="flex-1 flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg bg-[#09150E] hover:bg-[#12281B] border border-[#1E4A2E] hover:border-[#059669] text-[11px] font-mono text-[#F4FAF6] font-bold transition-all shadow-xs"
            >
              <InstagramLogo className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate">Instagram</span>
            </a>

            {/* FB */}
            <a
              href={PERSONAL_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundFx.playClick()}
              title="Facebook"
              className="flex-1 flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg bg-[#09150E] hover:bg-[#12281B] border border-[#1E4A2E] hover:border-[#059669] text-[11px] font-mono text-[#F4FAF6] font-bold transition-all shadow-xs"
            >
              <FacebookLogo className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate">Facebook</span>
            </a>

            {/* Gmail */}
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              onClick={() => soundFx.playClick()}
              title="Gmail"
              className="flex-1 flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg bg-[#09150E] hover:bg-[#12281B] border border-[#1E4A2E] hover:border-[#059669] text-[11px] font-mono text-[#F4FAF6] font-bold transition-all shadow-xs"
            >
              <GmailLogo className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate">Gmail</span>
            </a>
          </div>
        </div>

        {/* Live Telemetry Footer Bar */}
        <div className="mt-3 pt-2.5 border-t border-[#B4D5BF] flex items-center justify-between text-[10px] font-mono text-[#1D472D] font-bold">
          <span className="flex items-center gap-1 text-[#065F38]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] inline-block animate-ping" />
            NODE::NP_BKT
          </span>
          <span className="text-[#050F07]">SEM::01_CE</span>
          <span className="text-[#065F38]">[SYS_OK]</span>
        </div>
      </div>
    </div>
  );
};
