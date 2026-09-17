import React, { useState } from 'react';
import { Eye, Terminal, Code2, Sparkles, Video, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ProjectItem } from '../types';
import { ProjectModal } from './ProjectModal';
import { soundFx } from '../utils/audio';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const renderVisualHeader = (type: ProjectItem['visualType']) => {
    switch (type) {
      case 'portfolio':
        return (
          <div className="relative h-44 w-full bg-gradient-to-br from-[#E0EFE6] via-[#D8EADB] to-[#E5EFE8] overflow-hidden flex items-center justify-center border-b border-[#B4D5BF]">
            <div className="absolute inset-0 cyber-grid-bg opacity-45" />
            <div className="relative flex flex-col items-center">
              <div className="w-14 h-14 rounded-xl bg-[#EDF5F0] border border-[#B4D5BF] flex items-center justify-center shadow-2xs">
                <Terminal className="w-7 h-7 text-[#059669]" />
              </div>
              <span className="font-mono text-[11px] text-[#065F38] font-bold mt-2.5 tracking-widest uppercase">
                PORTFOLIO::SYS_V1
              </span>
            </div>
          </div>
        );
      case 'graphics':
        return (
          <div className="relative h-44 w-full bg-gradient-to-br from-[#E0EFE6] via-[#D8EADB] to-[#E5EFE8] overflow-hidden flex items-center justify-center border-b border-[#B4D5BF]">
            <div className="absolute inset-0 cyber-dots-bg opacity-45" />
            <div className="relative flex flex-col items-center">
              <div className="w-14 h-14 rounded-xl bg-[#EDF5F0] border border-[#B4D5BF] flex items-center justify-center shadow-2xs">
                <Sparkles className="w-7 h-7 text-[#0284C7]" />
              </div>
              <span className="font-mono text-[11px] text-[#0284C7] font-bold mt-2.5 tracking-widest uppercase">
                VECTOR &amp; RASTER::LAB
              </span>
            </div>
          </div>
        );
      case 'aivideo':
        return (
          <div className="relative h-44 w-full bg-gradient-to-br from-[#E0EFE6] via-[#D8EADB] to-[#E5EFE8] overflow-hidden flex items-center justify-center border-b border-[#B4D5BF]">
            <div className="absolute inset-0 cyber-grid-bg opacity-45" />
            <div className="relative flex flex-col items-center">
              <div className="w-14 h-14 rounded-xl bg-[#EDF5F0] border border-[#B4D5BF] flex items-center justify-center shadow-2xs">
                <Video className="w-7 h-7 text-[#059669]" />
              </div>
              <span className="font-mono text-[11px] text-[#065F38] font-bold mt-2.5 tracking-widest uppercase">
                MOTION &amp; AI::GEN
              </span>
            </div>
          </div>
        );
      case 'webdev':
        return (
          <div className="relative h-44 w-full bg-gradient-to-br from-[#E0EFE6] via-[#D8EADB] to-[#E5EFE8] overflow-hidden flex items-center justify-center border-b border-[#B4D5BF]">
            <div className="absolute inset-0 cyber-dots-bg opacity-45" />
            <div className="relative flex flex-col items-center">
              <div className="w-14 h-14 rounded-xl bg-[#EDF5F0] border border-[#B4D5BF] flex items-center justify-center shadow-2xs">
                <Code2 className="w-7 h-7 text-[#10B981]" />
              </div>
              <span className="font-mono text-[11px] text-[#065F38] font-bold mt-2.5 tracking-widest uppercase">
                FRONTEND::EXPERIMENTS
              </span>
            </div>
          </div>
        );
      case 'security':
        return (
          <div className="relative h-44 w-full bg-gradient-to-br from-[#E0EFE6] via-[#D8EADB] to-[#E5EFE8] overflow-hidden flex items-center justify-center border-b border-[#B4D5BF]">
            <div className="absolute inset-0 cyber-grid-bg opacity-45" />
            <div className="relative flex flex-col items-center">
              <div className="w-14 h-14 rounded-xl bg-[#EDF5F0] border border-[#B4D5BF] flex items-center justify-center shadow-2xs">
                <ShieldCheck className="w-7 h-7 text-[#059669]" />
              </div>
              <span className="font-mono text-[11px] text-[#065F38] font-bold mt-2.5 tracking-widest uppercase">
                LINUX &amp; NET::FUNDAMENTALS
              </span>
            </div>
          </div>
        );
    }
  };

  const getStatusBadge = (status: ProjectItem['status']) => {
    switch (status) {
      case 'Building':
        return (
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-[#D7EADE] text-[#065F38] border border-[#91C7A1] font-semibold">
            ● Building
          </span>
        );
      case 'Exploring':
        return (
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-[#FEF3C7] text-[#92400E] border border-[#FDE68A] font-semibold">
            ● Exploring
          </span>
        );
      case 'Learning':
        return (
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-[#E0EFE6] text-[#0D2318] border border-[#B4D5BF]">
            ● Learning
          </span>
        );
    }
  };

  return (
    <section
      id="projects"
      aria-label="Selected Projects & Experiments"
      className="relative py-24 border-t border-[#B4D5BF]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-[#065F38] uppercase tracking-wider mb-2">
            <span className="text-[#059669] font-bold">03 //</span>
            <span>EXPERIMENTS &amp; BUILDS</span>
          </div>
          <h2 className="font-space font-bold text-3xl sm:text-4xl text-[#0D2318] tracking-tight">
            Selected Projects &amp; Experiments
          </h2>
          <p className="font-mono text-sm sm:text-base text-[#2D523F] mt-2 max-w-2xl">
            Things I'm building, experimenting with, and learning from during Year One.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS_DATA.map((project) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              onMouseEnter={() => soundFx.playHover()}
              className="group relative rounded-2xl bg-[#EDF5F0] border border-[#B4D5BF] hover:border-[#059669] overflow-hidden transition-all duration-300 shadow-2xs hover:shadow-xs hover:-translate-y-0.5 flex flex-col justify-between"
            >
              <div>
                {/* Visual Technical Graphic */}
                {renderVisualHeader(project.visualType)}

                {/* Card Body */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs text-[#365E47]">
                      PROJ {project.number} · {project.category}
                    </span>
                    {getStatusBadge(project.status)}
                  </div>

                  <h3 className="font-space font-bold text-xl text-[#0D2318] group-hover:text-[#065F38] transition-colors mb-2">
                    {project.title}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-[#1D3B2C] leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded bg-[#DCECE1] border border-[#B4D5BF] text-[11px] font-mono text-[#0D2318]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Action Button */}
              <div className="p-6 pt-0">
                <button
                  type="button"
                  onClick={() => {
                    soundFx.playOpen();
                    setSelectedProject(project);
                  }}
                  className="w-full py-2.5 px-4 rounded-lg bg-[#E0EFE6] border border-[#B4D5BF] hover:border-[#059669] hover:bg-[#D5EADF] text-xs font-mono text-[#0D2318] hover:text-[#065F38] transition-all flex items-center justify-center gap-2 cursor-pointer font-medium"
                >
                  <Eye className="w-3.5 h-3.5 text-[#059669]" />
                  <span>View Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Popup */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
