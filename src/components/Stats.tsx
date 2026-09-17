import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { soundFx } from '../utils/audio';

export const Stats: React.FC = () => {
  return (
    <div id="hero-stat-cards" className="w-full mt-12 sm:mt-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        {PERSONAL_INFO.stats.map((stat, idx) => (
          <div
            key={idx}
            id={`stat-card-${idx}`}
            onMouseEnter={() => soundFx.playHover()}
            className="group relative rounded-xl bg-[#EDF5F0] border border-[#B4D5BF] hover:border-[#059669] p-4 sm:p-5 transition-all duration-200 shadow-2xs hover:shadow-md hover:-translate-y-0.5 cursor-default"
          >
            {/* Tech bracket accent in bold Off-White on Obsidian Black badge */}
            <div className="absolute top-2.5 right-2.5 font-mono text-[9px] font-bold px-1.5 py-0.5 rounded bg-[#09150E] border border-[#1B4329] text-[#F4FAF6] group-hover:border-[#059669] transition-colors">
              {stat.code}
            </div>

            <div className="flex flex-col h-full justify-between pt-1">
              <div>
                <span className="font-space font-black text-lg sm:text-xl text-[#050F07] block leading-tight group-hover:text-[#065F38] transition-colors">
                  {stat.top}
                </span>
                <span className="font-mono text-xs sm:text-sm text-[#1B4329] font-bold block mt-1 leading-snug">
                  {stat.bottom}
                </span>
              </div>

              <div className="mt-4 pt-2.5 border-t border-[#B4D5BF] flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-[#065F38] font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                  {stat.highlight}
                </span>
                <span className="font-mono text-[10px] text-[#050F07] font-black">
                  [0{idx + 1}]
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
