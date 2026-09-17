import React, { useState } from 'react';
import {
  Code,
  Palette,
  FileCode,
  Terminal,
  Binary,
  Cpu,
  Coffee,
  Network,
  TerminalSquare,
  Key,
  Eye,
  Filter,
} from 'lucide-react';
import { SKILLS_DATA, SKILL_CATEGORIES } from '../data/portfolioData';
import { SkillStatus } from '../types';
import { soundFx } from '../utils/audio';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const renderIcon = (name: string) => {
    const iconClass = 'w-4 h-4 text-[#065F38]';
    switch (name) {
      case 'Code':
        return <Code className={iconClass} />;
      case 'Palette':
        return <Palette className={iconClass} />;
      case 'FileCode':
        return <FileCode className={iconClass} />;
      case 'Terminal':
        return <Terminal className={iconClass} />;
      case 'Binary':
        return <Binary className={iconClass} />;
      case 'Cpu':
        return <Cpu className={iconClass} />;
      case 'Coffee':
        return <Coffee className={iconClass} />;
      case 'Network':
        return <Network className={iconClass} />;
      case 'TerminalSquare':
        return <TerminalSquare className={iconClass} />;
      case 'Key':
        return <Key className={iconClass} />;
      case 'Eye':
        return <Eye className={iconClass} />;
      default:
        return <Code className={iconClass} />;
    }
  };

  const getStatusBadge = (status: SkillStatus) => {
    switch (status) {
      case 'Practising':
        return (
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-mono bg-[#D7EADE] text-[#065F38] border border-[#91C7A1] font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#059669]" />
            Practising
          </span>
        );
      case 'Learning':
        return (
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-mono bg-[#E0EFE6] text-[#0D2318] border border-[#B4D5BF]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
            Learning
          </span>
        );
      case 'Exploring':
        return (
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-mono bg-[#FEF3C7] text-[#92400E] border border-[#FDE68A]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
            Exploring
          </span>
        );
    }
  };

  const filteredSkills =
    activeCategory === 'All'
      ? SKILLS_DATA
      : SKILLS_DATA.filter((s) => s.category === activeCategory);

  return (
    <section
      id="skills"
      aria-label="Technical Arsenal & Skills"
      className="relative py-24 border-t border-[#B4D5BF]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#065F38] uppercase tracking-wider mb-2">
              <span className="text-[#059669] font-bold">02 //</span>
              <span>CORE TECHNICAL ARSENAL</span>
            </div>
            <h2 className="font-space font-bold text-3xl sm:text-4xl text-[#0D2318] tracking-tight">
              Technical Arsenal
            </h2>
            <p className="font-mono text-sm sm:text-base text-[#2D523F] mt-2 max-w-2xl">
              Foundational languages, systems, and security concepts actively studied and practiced.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center flex-wrap gap-2">
            <button
              type="button"
              onClick={() => {
                soundFx.playClick();
                setActiveCategory('All');
              }}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                activeCategory === 'All'
                  ? 'bg-[#0F2D1D] text-[#34D399] font-semibold border border-[#2D6A47] shadow-xs'
                  : 'bg-[#EDF5F0] border border-[#B4D5BF] text-[#244734] hover:text-[#0D2318] hover:border-[#8FBFA5]'
              }`}
            >
              All ({SKILLS_DATA.length})
            </button>
            {SKILL_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  soundFx.playClick();
                  setActiveCategory(cat);
                }}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#0F2D1D] text-[#34D399] font-semibold border border-[#2D6A47] shadow-xs'
                    : 'bg-[#EDF5F0] border border-[#B4D5BF] text-[#244734] hover:text-[#0D2318] hover:border-[#8FBFA5]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredSkills.map((skill) => (
            <div
              key={skill.id}
              id={`skill-card-${skill.id}`}
              onMouseEnter={() => soundFx.playHover()}
              className="group relative rounded-xl bg-[#EDF5F0] border border-[#B4D5BF] hover:border-[#059669] p-5 transition-all duration-200 hover:-translate-y-0.5 flex flex-col justify-between shadow-2xs"
            >
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#DCECE1] border border-[#B4D5BF] flex items-center justify-center text-[#065F38] group-hover:border-[#059669] transition-colors">
                    {renderIcon(skill.iconName)}
                  </div>
                  {getStatusBadge(skill.status)}
                </div>

                <h3 className="font-space font-bold text-base text-[#0D2318] group-hover:text-[#065F38] transition-colors">
                  {skill.name}
                </h3>
                <span className="font-mono text-[11px] text-[#059669] block mb-2 font-medium">
                  {skill.category}
                </span>

                <p className="font-sans text-xs text-[#1D3B2C] leading-relaxed">
                  {skill.detail}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#B4D5BF] flex items-center justify-between text-[10px] font-mono text-[#436A56]">
                <span>BE_COMPUTER</span>
                <span className="text-[#065F38] font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                  ACTIVE
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Honest Academic Note */}
        <div className="mt-8 p-4 rounded-xl bg-[#E0EFE6] border border-[#B4D5BF] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#244734]">
          <div className="flex items-center gap-2 text-[#065F38] font-semibold">
            <Filter className="w-4 h-4 text-[#059669]" />
            <span>AUTHENTIC PROFICIENCY METRIC</span>
          </div>
          <p className="text-center sm:text-right text-[#365E47]">
            Curated strictly to foundational languages, operating systems, networking, and cyber exploration.
          </p>
        </div>
      </div>
    </section>
  );
};
