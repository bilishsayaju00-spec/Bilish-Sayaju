import React, { useState, useEffect } from 'react';
import { Terminal, Volume2, VolumeX, Menu, X, ShieldCheck, Activity } from 'lucide-react';
import { FacebookLogo, InstagramLogo, GmailLogo } from './BrandLogos';
import { PERSONAL_INFO } from '../data/portfolioData';
import { soundFx } from '../utils/audio';

interface NavbarProps {
  onOpenCli: () => void;
  sfxEnabled: boolean;
  onToggleSfx: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenCli,
  sfxEnabled,
  onToggleSfx,
  activeSection,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'about', num: '01.', label: 'About', href: '#about' },
    { id: 'skills', num: '02.', label: 'Skills', href: '#skills' },
    { id: 'projects', num: '03.', label: 'Projects', href: '#projects' },
    { id: 'lab', num: '04.', label: 'Lab', href: '#lab' },
    { id: 'gaming-tuning', num: '05.', label: 'Tuning', href: '#gaming-tuning' },
    { id: 'contact', num: '06.', label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#E3EDE5]/90 backdrop-blur-md border-b border-[#B4D5BF] shadow-xs py-2.5'
          : 'bg-transparent py-4 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Minimalist Monogram Logo & Name */}
        <a
          href="#hero"
          id="nav-logo"
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 rounded-lg p-1"
          onClick={() => soundFx.playClick()}
          onMouseEnter={() => soundFx.playHover()}
        >
          {/* Square Cyber Monogram Logo */}
          <div className="relative w-9 h-9 rounded-lg bg-[#0F2D1D] border border-[#2D6A47] flex items-center justify-center font-mono font-bold text-sm text-[#34D399] group-hover:bg-[#153D28] transition-colors shadow-xs">
            <span className="relative z-10 tracking-tighter">BS</span>
            <span className="absolute -bottom-0.5 -right-0.5 w-1.5 h-1.5 bg-[#10B981] rounded-full animate-ping" />
          </div>

          {/* Name & Title */}
          <div className="flex flex-col">
            <span className="font-space font-bold tracking-wider text-xs sm:text-sm text-[#0D2318] group-hover:text-[#059669] transition-colors leading-tight">
              BILISH SAYAJU
            </span>
            <span className="font-mono text-[10px] text-[#2B543D] tracking-wider leading-tight">
              BE COMPUTER STUDENT
            </span>
          </div>
        </a>

        {/* Center: Desktop Navigation Links */}
        <nav id="desktop-navigation" aria-label="Main Navigation" className="hidden lg:flex items-center gap-5 xl:gap-7">
          {navLinks.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                id={`nav-link-${item.id}`}
                className={`flex items-center gap-1.5 text-xs xl:text-sm font-medium transition-all py-1 px-1.5 relative group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 rounded ${
                  isActive
                    ? 'text-[#065F38] font-semibold'
                    : 'text-[#2D523F] hover:text-[#0D2318]'
                }`}
                onMouseEnter={() => soundFx.playHover()}
                onClick={() => soundFx.playClick()}
              >
                <span className="font-mono text-[11px] text-[#4F7D63] group-hover:text-[#059669] transition-colors">
                  {item.num}
                </span>
                <span className="font-space tracking-wide">{item.label}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#059669] rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Side: Social Logos, SFX, CLI button, Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Quick Colorful Social Icons in Header */}
          <div className="hidden sm:flex items-center gap-2 px-2.5 py-1 rounded-lg bg-[#EDF5F0] border border-[#B4D5BF]">
            <a
              href={PERSONAL_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram Profile"
              onClick={() => soundFx.playClick()}
              className="p-1 rounded-md hover:bg-[#DEEFE5] transition-colors"
            >
              <InstagramLogo className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Facebook Profile"
              onClick={() => soundFx.playClick()}
              className="p-1 rounded-md hover:bg-[#DEEFE5] transition-colors"
            >
              <FacebookLogo className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              title="Send Gmail"
              onClick={() => soundFx.playClick()}
              className="p-1 rounded-md hover:bg-[#DEEFE5] transition-colors"
            >
              <GmailLogo className="w-4 h-4" />
            </a>
          </div>

          {/* SFX Toggle */}
          <button
            id="nav-sfx-toggle"
            type="button"
            onClick={() => {
              onToggleSfx();
            }}
            onMouseEnter={() => soundFx.playHover()}
            title={sfxEnabled ? 'Mute Sound FX' : 'Enable Sound FX'}
            className="p-2 rounded-lg bg-[#EDF5F0] border border-[#B4D5BF] hover:border-[#8FBFA5] text-[#244734] hover:text-[#0D2318] shadow-xs transition-colors cursor-pointer"
          >
            {sfxEnabled ? <Volume2 className="w-4 h-4 text-[#059669]" /> : <VolumeX className="w-4 h-4 text-[#6A947B]" />}
          </button>

          {/* Launch Developer CLI Terminal Button */}
          <button
            id="nav-cli-toggle"
            type="button"
            onClick={() => {
              soundFx.playOpen();
              onOpenCli();
            }}
            onMouseEnter={() => soundFx.playHover()}
            className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#EDF5F0] border border-[#B4D5BF] hover:border-[#059669] text-xs font-mono text-[#0D2318] hover:text-[#065F38] shadow-xs transition-all cursor-pointer"
          >
            <Terminal className="w-3.5 h-3.5 text-[#059669]" />
            <span>CLI</span>
            <span className="text-[10px] px-1 py-0.2 rounded bg-[#DCECE1] text-[#244734] border border-[#B4D5BF] font-mono">
              `
            </span>
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            id="mobile-menu-toggle"
            type="button"
            onClick={() => {
              soundFx.playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            aria-label="Toggle Mobile Menu"
            className="lg:hidden p-2 rounded-lg bg-[#EDF5F0] border border-[#B4D5BF] text-[#244734] hover:text-[#0D2318] shadow-xs"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer"
          className="lg:hidden fixed inset-x-0 top-[60px] bg-[#E4EDE6]/98 border-b border-[#B4D5BF] p-6 shadow-xl backdrop-blur-xl animate-in slide-in-from-top-4 duration-200"
        >
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#B4D5BF]">
              <div className="flex items-center gap-2 text-xs font-mono text-[#0D2318]">
                <Activity className="w-3.5 h-3.5 text-[#059669]" />
                <span>ONLINE · BE COMPUTER STUDENT</span>
              </div>
              <div className="flex items-center gap-2">
                <InstagramLogo className="w-4 h-4" />
                <FacebookLogo className="w-4 h-4" />
                <GmailLogo className="w-4 h-4" />
              </div>
            </div>

            <nav className="flex flex-col gap-1.5">
              {navLinks.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => {
                    soundFx.playClick();
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center justify-between py-2 px-3 rounded-lg font-mono text-sm ${
                    activeSection === item.id
                      ? 'bg-[#D6E8DC] text-[#065F38] font-semibold border border-[#9DC4AB]'
                      : 'text-[#2D523F] hover:text-[#0D2318] hover:bg-[#EDF5F0]'
                  }`}
                >
                  <span className="font-space">{item.label}</span>
                  <span className="text-xs text-[#527F67]">{item.num}</span>
                </a>
              ))}
            </nav>

            <div className="pt-3 border-t border-[#B4D5BF] flex items-center justify-between">
              <button
                type="button"
                onClick={() => {
                  onToggleSfx();
                }}
                className="flex items-center gap-2 text-xs font-mono text-[#2D523F] hover:text-[#0D2318]"
              >
                {sfxEnabled ? <Volume2 className="w-4 h-4 text-[#059669]" /> : <VolumeX className="w-4 h-4 text-[#6A947B]" />}
                <span>{sfxEnabled ? 'SFX Active' : 'SFX Muted'}</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  soundFx.playOpen();
                  onOpenCli();
                }}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#0F2D1D] text-[#34D399] text-xs font-mono border border-[#2D6A47]"
              >
                <Terminal className="w-3.5 h-3.5" />
                <span>Launch CLI</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
