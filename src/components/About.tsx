import React from 'react';
import { Sparkles, Cpu, Shield, Compass, Tag, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO, ABOUT_FEATURE_CARDS } from '../data/portfolioData';
import { soundFx } from '../utils/audio';

export const About: React.FC = () => {
  const getFeatureIcon = (name: string) => {
    switch (name) {
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#059669]" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-[#0284C7]" />;
      case 'Shield':
        return <Shield className="w-5 h-5 text-[#10B981]" />;
      default:
        return <Compass className="w-5 h-5 text-[#7C3AED]" />;
    }
  };

  return (
    <section
      id="about"
      aria-label="About Section"
      className="relative py-24 border-t border-[#B4D5BF]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-[#065F38] uppercase tracking-wider mb-2">
            <span className="text-[#059669] font-bold">01 //</span>
            <span>SYSTEM PHILOSOPHY &amp; PROFILE</span>
          </div>
          <h2 className="font-space font-bold text-3xl sm:text-4xl text-[#0D2318] tracking-tight">
            Engineering Curiosity &amp; Creative Vision
          </h2>
          <p className="font-mono text-sm sm:text-base text-[#2D523F] mt-2 max-w-2xl">
            Exploring technology from creative expression to computer engineering.
          </p>
        </div>

        {/* Content Layout: Large Information Card + Feature Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Large Left-side Information Card */}
          <div className="lg:col-span-7 rounded-2xl bg-[#EDF5F0] border border-[#B4D5BF] hover:border-[#8FBFA5] p-6 sm:p-8 transition-all duration-300 shadow-2xs">
            {/* Window header */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#B4D5BF]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] inline-block" />
                <span className="font-mono text-xs text-[#065F38] font-semibold">[manifesto.md]</span>
              </div>
              <span className="font-mono text-[11px] text-[#436A56]">
                ORIGIN::NEPAL // 27.6710° N, 85.4298° E
              </span>
            </div>

            <h3 className="font-space font-bold text-xl sm:text-2xl text-[#0D2318] mb-4">
              {PERSONAL_INFO.aboutHeading}
            </h3>

            {/* Paragraphs */}
            <div className="space-y-4 font-sans text-sm sm:text-base text-[#1D3B2C] leading-relaxed">
              {PERSONAL_INFO.aboutParagraphs.map((para, i) => (
                <p key={i} className={i === 0 ? 'text-[#0D2318] font-semibold' : ''}>
                  {para}
                </p>
              ))}
            </div>

            {/* Academic Journey Note */}
            <div className="mt-6 p-3.5 rounded-lg bg-[#E0EFE6] border border-[#B4D5BF] flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-[#059669] mt-0.5 shrink-0" />
              <p className="font-mono text-xs text-[#164E30] leading-normal">
                <strong className="text-[#0D2318]">Academic Foundation:</strong> BE Computer Student. Balancing core theoretical principles with hands-on creative experiments and self-directed software development.
              </p>
            </div>

            {/* Technology Tags */}
            <div className="mt-8 pt-6 border-t border-[#B4D5BF]">
              <div className="flex items-center gap-2 text-xs font-mono text-[#065F38] mb-3 font-semibold">
                <Tag className="w-3.5 h-3.5 text-[#059669]" />
                <span>ACTIVE FOCUS EXPLORATION TAGS</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {PERSONAL_INFO.techTags.map((tag) => (
                  <span
                    key={tag}
                    onMouseEnter={() => soundFx.playHover()}
                    className="px-3 py-1 rounded-md bg-[#DCECE1] border border-[#B4D5BF] text-xs font-mono text-[#0D2318] hover:border-[#059669] hover:bg-[#D0E6D7] transition-colors cursor-default"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right-side Feature Cards (01, 02, 03) */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {ABOUT_FEATURE_CARDS.map((card) => (
              <div
                key={card.number}
                id={`about-feature-${card.number}`}
                onMouseEnter={() => soundFx.playHover()}
                className="group relative rounded-xl bg-[#EDF5F0] border border-[#B4D5BF] hover:border-[#059669] p-6 transition-all duration-300 shadow-2xs hover:-translate-y-0.5"
              >
                {/* Tech corner tick */}
                <div className="absolute top-3 right-3 font-mono text-xs font-bold text-[#436A56] group-hover:text-[#059669] transition-colors">
                  [{card.number}]
                </div>

                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-[#DCECE1] border border-[#B4D5BF] flex items-center justify-center text-[#065F38] group-hover:border-[#059669] transition-colors">
                    {getFeatureIcon(card.icon)}
                  </div>
                  <div>
                    <h4 className="font-space font-bold text-lg text-[#0D2318] group-hover:text-[#065F38] transition-colors">
                      {card.title}
                    </h4>
                  </div>
                </div>

                <p className="font-sans text-sm text-[#1D3B2C] leading-relaxed mb-4">
                  {card.description}
                </p>

                <div className="pt-3 border-t border-[#B4D5BF] font-mono text-[11px] text-[#065F38] font-medium">
                  <span>{card.focus}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
