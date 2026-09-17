import React, { useEffect } from 'react';
import { X, CheckCircle2, Tag, Terminal, Activity } from 'lucide-react';
import { ProjectItem } from '../types';
import { soundFx } from '../utils/audio';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        soundFx.playClick();
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      id="project-details-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0D2318]/50 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={() => {
        soundFx.playClick();
        onClose();
      }}
    >
      <div
        id="project-details-modal-content"
        className="relative w-full max-w-2xl rounded-2xl bg-[#EDF5F0] border border-[#B4D5BF] shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#B4D5BF]">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs px-2.5 py-1 rounded bg-[#DCECE1] text-[#065F38] border border-[#B4D5BF] font-semibold">
              PROJ::{project.number}
            </span>
            <span className="font-mono text-xs text-[#365E47]">
              {project.category}
            </span>
          </div>

          <button
            type="button"
            onClick={() => {
              soundFx.playClick();
              onClose();
            }}
            className="p-1.5 rounded-lg bg-[#E0EFE6] border border-[#B4D5BF] hover:border-[#059669] text-[#244734] hover:text-[#0D2318] transition-colors cursor-pointer"
            aria-label="Close Project Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Title and Status */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <h3 className="font-space font-bold text-2xl text-[#0D2318]">
            {project.title}
          </h3>
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono w-fit font-semibold ${
              project.status === 'Building'
                ? 'bg-[#D7EADE] text-[#065F38] border border-[#91C7A1]'
                : project.status === 'Exploring'
                ? 'bg-[#FEF3C7] text-[#92400E] border border-[#FDE68A]'
                : 'bg-[#E0EFE6] text-[#0D2318] border border-[#B4D5BF]'
            }`}
          >
            <Activity className="w-3.5 h-3.5" />
            <span>Status: {project.status}</span>
          </span>
        </div>

        {/* Overview */}
        <p className="font-sans text-sm sm:text-base text-[#1D3B2C] leading-relaxed mb-6">
          {project.fullOverview}
        </p>

        {/* Key Highlights */}
        <div className="mb-6 p-4 rounded-xl bg-[#E0EFE6] border border-[#B4D5BF]">
          <h4 className="font-mono text-xs text-[#065F38] uppercase tracking-wider mb-3 flex items-center gap-2 font-bold">
            <Terminal className="w-3.5 h-3.5 text-[#059669]" />
            <span>Core Focus &amp; Key Explorations</span>
          </h4>
          <ul className="space-y-2">
            {project.highlights.map((h, i) => (
              <li
                key={i}
                className="flex items-start gap-2.5 text-xs sm:text-sm font-sans text-[#0D2318]"
              >
                <CheckCircle2 className="w-4 h-4 text-[#059669] mt-0.5 shrink-0" />
                <span className="leading-snug">{h}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies / Tools Used */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-xs font-mono text-[#365E47] mb-2 font-medium">
            <Tag className="w-3.5 h-3.5 text-[#059669]" />
            <span>TECHNOLOGY &amp; TOOLCHAIN</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-md bg-[#DCECE1] border border-[#B4D5BF] text-xs font-mono text-[#0D2318]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="pt-4 border-t border-[#B4D5BF] flex items-center justify-between">
          <span className="font-mono text-[11px] text-[#436A56]">
            Academic Year One Project Track
          </span>
          <button
            type="button"
            onClick={() => {
              soundFx.playClick();
              onClose();
            }}
            className="px-4 py-2 rounded-lg bg-[#0F2D1D] text-[#34D399] font-space font-medium text-xs hover:bg-[#163E28] transition-colors shadow-xs border border-[#2D6A47] cursor-pointer"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
};
