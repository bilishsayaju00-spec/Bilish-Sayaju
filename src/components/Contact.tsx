import React, { useState } from 'react';
import { MapPin, Send, Check, Copy, AlertCircle, ArrowUpRight, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { FacebookLogo, InstagramLogo, GmailLogo } from './BrandLogos';
import { soundFx } from '../utils/audio';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleCopyEmail = () => {
    soundFx.playSuccess();
    navigator.clipboard.writeText(PERSONAL_INFO.email).catch(() => {});
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg('Please fill in all required fields (Name, Email, Message).');
      return;
    }

    setErrorMsg('');
    soundFx.playSuccess();

    const mailtoSubject = encodeURIComponent(formData.subject.trim() || `Portfolio Contact from ${formData.name}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      aria-label="Contact Section & Direct Frequencies"
      className="relative py-24 border-t border-[#B4D5BF]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-[#065F38] uppercase tracking-wider mb-2">
            <span className="text-[#059669] font-bold">06 //</span>
            <span>COMMUNICATION CHANNELS &amp; FREQUENCIES</span>
          </div>
          <h2 className="font-space font-bold text-3xl sm:text-4xl text-[#0D2318] tracking-tight">
            Let's Connect
          </h2>
          <p className="font-mono text-sm sm:text-base text-[#2D523F] mt-2 max-w-2xl">
            Have an idea, want to collaborate on projects, or explore creative tech? Feel free to reach out.
          </p>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Card: Direct Contact */}
          <div className="lg:col-span-5 rounded-2xl bg-[#EDF5F0] border border-[#B4D5BF] shadow-2xs p-6 sm:p-8">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#B4D5BF]">
              <span className="font-mono text-xs text-[#065F38] font-bold flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#059669]" />
                <span>DIRECT CHANNELS</span>
              </span>
              <span className="font-mono text-[11px] text-[#065F38] flex items-center gap-1.5 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                ONLINE / ACTIVE
              </span>
            </div>

            <h3 className="font-space font-bold text-xl text-[#0D2318] mb-2">
              Get in Touch Directly
            </h3>
            <p className="font-sans text-sm text-[#1D3B2C] leading-relaxed mb-6">
              I welcome student inquiries, academic collaboration proposals, creative feedback, technology discussions, and gaming tuning requests.
            </p>

            {/* Direct Contact Items */}
            <div className="space-y-3 font-mono text-xs">
              {/* Email with Original Gmail Logo */}
              <div className="p-3.5 rounded-xl bg-[#E0EFE6] border border-[#B4D5BF] flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-9 h-9 rounded-lg bg-[#EDF5F0] border border-[#B4D5BF] flex items-center justify-center shrink-0 shadow-2xs p-1.5">
                    <GmailLogo className="w-full h-full" />
                  </div>
                  <div className="truncate">
                    <span className="text-[#365E47] block text-[10px] font-bold">GMAIL</span>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-[#0D2318] hover:text-[#065F38] font-medium transition-colors truncate block"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-[#EDF5F0] border border-[#B4D5BF] hover:border-[#059669] text-[#244734] hover:text-[#0D2318] transition-colors shrink-0 shadow-2xs cursor-pointer"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-[#059669]" /> : <Copy className="w-4 h-4 text-[#365E47]" />}
                </button>
              </div>

              {/* Location */}
              <div className="p-3.5 rounded-xl bg-[#E0EFE6] border border-[#B4D5BF] flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#EDF5F0] border border-[#B4D5BF] flex items-center justify-center text-[#059669] shrink-0 shadow-2xs">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[#365E47] block text-[10px] font-bold">LOCATION</span>
                  <span className="text-[#0D2318] font-medium">{PERSONAL_INFO.location}</span>
                </div>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="mt-8 pt-6 border-t border-[#B4D5BF]">
              <span className="font-mono text-xs text-[#065F38] font-bold block mb-3">
                VERIFIED SOCIAL IDENTITIES:
              </span>
              <div className="flex flex-col gap-2.5">
                {/* Instagram with Original Logo */}
                <a
                  href={PERSONAL_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundFx.playClick()}
                  onMouseEnter={() => soundFx.playHover()}
                  className="flex items-center justify-between p-3 rounded-xl bg-[#E0EFE6] border border-[#B4D5BF] hover:border-[#059669] hover:bg-[#D5EADF] text-xs font-mono text-[#0D2318] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <InstagramLogo className="w-5 h-5 shrink-0" />
                    <span className="font-medium">Instagram: <span className="text-[#1D3B2C]">{PERSONAL_INFO.instagram}</span></span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 opacity-70 text-[#065F38]" />
                </a>

                {/* Facebook with Original Logo */}
                <a
                  href={PERSONAL_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundFx.playClick()}
                  onMouseEnter={() => soundFx.playHover()}
                  className="flex items-center justify-between p-3 rounded-xl bg-[#E0EFE6] border border-[#B4D5BF] hover:border-[#059669] hover:bg-[#D5EADF] text-xs font-mono text-[#0D2318] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <FacebookLogo className="w-5 h-5 shrink-0" />
                    <span className="font-medium">Facebook: <span className="text-[#1D3B2C]">{PERSONAL_INFO.facebook}</span></span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 opacity-70 text-[#065F38]" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Card: Send a Message Form */}
          <div className="lg:col-span-7 rounded-2xl bg-[#EDF5F0] border border-[#B4D5BF] shadow-2xs p-6 sm:p-8">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#B4D5BF]">
              <span className="font-mono text-xs text-[#065F38] font-bold flex items-center gap-2">
                <Send className="w-3.5 h-3.5 text-[#059669]" />
                <span>SEND A TRANSMISSION</span>
              </span>
              <span className="font-mono text-[11px] text-[#436A56]">
                DIRECT INQUIRY
              </span>
            </div>

            {submitted && (
              <div className="mb-6 p-4 rounded-xl bg-[#D7EADE] border border-[#91C7A1] text-xs font-mono text-[#065F38] flex items-start gap-3">
                <Check className="w-4 h-4 mt-0.5 shrink-0 text-[#059669]" />
                <div>
                  <p className="font-bold text-[#064E3B]">Transmission Prepared</p>
                  <p className="mt-1 text-[#1D3B2C] font-sans">
                    Your local email client has opened with your message. You can also email directly to{' '}
                    <strong className="text-[#065F38] font-mono">{PERSONAL_INFO.email}</strong>.
                  </p>
                </div>
              </div>
            )}

            {errorMsg && (
              <div className="mb-6 p-3 rounded-xl bg-red-100/90 border border-red-300 text-xs font-mono text-red-800 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                <span>{errorMsg}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Your Name */}
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-mono text-[#0D2318] mb-1.5 font-medium">
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Alex Mercer"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#E0EFE6] border border-[#B4D5BF] focus:bg-[#EDF5F0] focus:border-[#059669] focus:ring-1 focus:ring-[#059669] text-xs font-sans text-[#0D2318] placeholder-[#527F67] outline-none transition-all"
                  />
                </div>

                {/* Your Email */}
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-mono text-[#0D2318] mb-1.5 font-medium">
                    Your Email *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@domain.com"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#E0EFE6] border border-[#B4D5BF] focus:bg-[#EDF5F0] focus:border-[#059669] focus:ring-1 focus:ring-[#059669] text-xs font-sans text-[#0D2318] placeholder-[#527F67] outline-none transition-all"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="contact-subject" className="block text-xs font-mono text-[#0D2318] mb-1.5 font-medium">
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Collaboration / Project Inquiry / Tech Discussion"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#E0EFE6] border border-[#B4D5BF] focus:bg-[#EDF5F0] focus:border-[#059669] focus:ring-1 focus:ring-[#059669] text-xs font-sans text-[#0D2318] placeholder-[#527F67] outline-none transition-all"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="contact-message" className="block text-xs font-mono text-[#0D2318] mb-1.5 font-medium">
                  Message *
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Write your message here..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#E0EFE6] border border-[#B4D5BF] focus:bg-[#EDF5F0] focus:border-[#059669] focus:ring-1 focus:ring-[#059669] text-xs font-sans text-[#0D2318] placeholder-[#527F67] outline-none transition-all resize-none"
                />
              </div>

              {/* Transmit Button */}
              <button
                type="submit"
                id="contact-submit-button"
                onMouseEnter={() => soundFx.playHover()}
                className="w-full py-3 px-6 rounded-lg bg-[#0F2D1D] text-[#34D399] font-space font-medium text-sm hover:bg-[#163E28] transition-all duration-200 flex items-center justify-center gap-2 shadow-xs cursor-pointer border border-[#2D6A47]"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>

              <p className="text-center font-mono text-[11px] text-[#436A56] mt-3">
                Dispatches directly via native mail client to {PERSONAL_INFO.email}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
