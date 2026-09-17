import React, { useState } from 'react';
import {
  Crosshair,
  Zap,
  Gauge,
  Sliders,
  Check,
  Copy,
  ExternalLink,
  ShieldCheck,
  Cpu,
  Monitor,
  Sparkles,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { FacebookLogo, InstagramLogo } from './BrandLogos';
import { soundFx } from '../utils/audio';

export const GamingOptimization: React.FC = () => {
  const [copiedTemplate, setCopiedTemplate] = useState(false);

  const inquiryTemplate = `Hey Bilish, I'm reaching out regarding your gaming tuning services!
- Service interested in: [Sensi Tuning / Regedit Tweaks / Paid PC Optimization]
- Main games: [Valorant / CS2 / Fortnite / Apex / Free Fire / Other]
- Current PC specs & refresh rate: [CPU / GPU / RAM / Hz]`;

  const handleCopyTemplate = () => {
    soundFx.playSuccess();
    navigator.clipboard.writeText(inquiryTemplate).catch(() => {});
    setCopiedTemplate(true);
    setTimeout(() => setCopiedTemplate(false), 2500);
  };

  const services = [
    {
      id: 'sensi',
      icon: Crosshair,
      tag: 'CALIBRATION',
      title: 'Custom Sensi Tuning',
      description:
        'Custom sensitivity conversion, DPI scaling, and raw input calibration tailored to your grip and mousepad.',
      specs: [
        '1:1 Raw input alignment & zero pixel skipping',
        'eDPI conversion across Valorant, CS2, Fortnite, Apex & more',
        'Flick consistency & micro-tracking curve balance',
        'Windows pointer speed & polling rate verification',
      ],
      badgeColor: 'text-[#065F38] bg-[#D7EADE] border-[#91C7A1]',
    },
    {
      id: 'redigit',
      icon: Zap,
      tag: 'LATENCY REDUCTION',
      title: 'Regedit & Latency Tweaks',
      description:
        'Precision Windows registry latency configurations to eliminate hidden input delay and packet jitter.',
      specs: [
        'Network packet pacing (TCPackFrequency & TCPNoDelay)',
        'System timer resolution unlock for immediate click registration',
        'DPC latency reduction & mouse acceleration neutralization',
        'Safe, verified registry values with clean backups',
      ],
      badgeColor: 'text-[#92400E] bg-[#FEF3C7] border-[#FDE68A]',
    },
    {
      id: 'pc-optimization',
      icon: Gauge,
      tag: 'PAID SERVICE',
      title: 'Paid PC Optimization for Online Games',
      description:
        'Comprehensive deep-clean OS and hardware tuning to maximize FPS, stabilize 1% lows, and cut input lag.',
      specs: [
        'Deep Windows debloat & telemetry process trimming',
        'CPU core unparking & priority scheduling for game engines',
        'GPU driver latency trimming & shader cache calibration',
        'Frametime stabilization for stutter-free competitive matches',
      ],
      badgeColor: 'text-[#065F38] bg-[#D7EADE] border-[#91C7A1]',
    },
  ];

  return (
    <section
      id="gaming-tuning"
      aria-label="Gaming & PC Performance Optimization"
      className="relative py-24 border-t border-[#B4D5BF]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="flex items-center gap-2 text-xs font-mono text-[#065F38] uppercase tracking-wider mb-2">
            <span className="text-[#059669] font-bold">05 //</span>
            <span>PERFORMANCE &amp; ESPORTS TUNING</span>
          </div>
          <div className="flex flex-wrap items-baseline gap-3">
            <h2 className="font-space font-bold text-3xl sm:text-4xl text-[#0D2318] tracking-tight">
              Gaming &amp; PC Optimization
            </h2>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-[#D7EADE] text-[#065F38] border border-[#91C7A1] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
              OPEN FOR DIRECT DMS
            </span>
          </div>
          <p className="font-mono text-sm sm:text-base text-[#2D523F] mt-2 max-w-3xl leading-relaxed">
            Need an edge in competitive online games? Reach out directly for personalized mouse sensitivity curves, tested regedit latency tweaks, and full paid PC debloat and optimization.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.id}
                id={`tuning-card-${svc.id}`}
                className="rounded-2xl bg-[#EDF5F0] border border-[#B4D5BF] hover:border-[#059669] p-6 transition-all duration-200 flex flex-col justify-between shadow-2xs group cursor-default"
                onMouseEnter={() => soundFx.playHover()}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#DCECE1] border border-[#B4D5BF] flex items-center justify-center text-[#065F38] group-hover:border-[#059669] transition-colors shadow-2xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span
                      className={`font-mono text-[10px] px-2.5 py-0.5 rounded-full border font-semibold ${svc.badgeColor}`}
                    >
                      {svc.tag}
                    </span>
                  </div>

                  <h3 className="font-space font-bold text-lg sm:text-xl text-[#0D2318] mb-2 group-hover:text-[#065F38] transition-colors">
                    {svc.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#1D3B2C] leading-relaxed mb-6">
                    {svc.description}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-[#B4D5BF]">
                    <span className="font-mono text-[10px] text-[#436A56] uppercase tracking-wider block mb-2 font-bold">
                      KEY DELIVERABLES
                    </span>
                    {svc.specs.map((spec, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs font-sans text-[#0D2318]">
                        <Check className="w-3.5 h-3.5 text-[#059669] mt-0.5 shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#B4D5BF] flex items-center justify-between font-mono text-[11px] text-[#436A56]">
                  <span className="flex items-center gap-1.5 text-[#065F38] font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Clean &amp; Reversible</span>
                  </span>
                  <span>ESPORTS READY</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Direct DM Banner */}
        <div className="rounded-2xl bg-[#EDF5F0] border border-[#B4D5BF] p-6 sm:p-8 shadow-2xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Info */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 text-xs font-mono text-[#065F38] mb-2 font-bold">
                <Sparkles className="w-3.5 h-3.5 text-[#059669]" />
                <span>DIRECT INQUIRIES &amp; PRICING</span>
              </div>
              <h3 className="font-space font-bold text-2xl text-[#0D2318] mb-2">
                Ready to optimize your competitive gaming setup?
              </h3>
              <p className="font-sans text-sm text-[#1D3B2C] leading-relaxed mb-4">
                Whether you want to lock in smooth mouse tracking with a calibrated sensitivity, apply safe regedit low-latency tweaks, or book a full paid PC optimization session, send me a DM anytime on social channels.
              </p>

              {/* Verified Trust Points */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs text-[#0D2318]">
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#E0EFE6] border border-[#B4D5BF]">
                  <Monitor className="w-4 h-4 text-[#0284C7] shrink-0" />
                  <span>Low Input Delay</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#E0EFE6] border border-[#B4D5BF]">
                  <Cpu className="w-4 h-4 text-[#059669] shrink-0" />
                  <span>Stable 1% Low FPS</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#E0EFE6] border border-[#B4D5BF]">
                  <Sliders className="w-4 h-4 text-[#D97706] shrink-0" />
                  <span>Tailored Sensi</span>
                </div>
              </div>
            </div>

            {/* Right Action Box */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={PERSONAL_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2.5 px-4 py-3 rounded-lg bg-[#0F2D1D] hover:bg-[#163E28] text-[#34D399] font-mono text-xs font-medium transition-all shadow-xs border border-[#2D6A47]"
                  onClick={() => soundFx.playClick()}
                >
                  <InstagramLogo className="w-4 h-4 shrink-0" />
                  <span>DM on Instagram</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </a>

                <a
                  href={PERSONAL_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2.5 px-4 py-3 rounded-lg bg-[#E0EFE6] hover:bg-[#D5EADF] text-[#0D2318] font-mono text-xs font-medium border border-[#B4D5BF] transition-all shadow-xs"
                  onClick={() => soundFx.playClick()}
                >
                  <FacebookLogo className="w-4 h-4 shrink-0" />
                  <span>DM on Facebook</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70 text-[#065F38]" />
                </a>
              </div>

              {/* Copy Inquire Template Button */}
              <button
                type="button"
                onClick={handleCopyTemplate}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#E0EFE6] border border-[#B4D5BF] hover:bg-[#D5EADF] hover:border-[#059669] text-[#0D2318] font-mono text-xs transition-colors cursor-pointer"
              >
                {copiedTemplate ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#059669]" />
                    <span className="text-[#065F38] font-semibold">Template copied to clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#365E47]" />
                    <span>Copy Pre-Filled DM Inquiry Template</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
