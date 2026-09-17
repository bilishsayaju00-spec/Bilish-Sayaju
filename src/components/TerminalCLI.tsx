import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, CornerDownLeft } from 'lucide-react';
import { PERSONAL_INFO, SKILLS_DATA, PROJECTS_DATA } from '../data/portfolioData';
import { TerminalOutputLine } from '../types';
import { soundFx } from '../utils/audio';

interface TerminalCLIProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TerminalCLI: React.FC<TerminalCLIProps> = ({ isOpen, onClose }) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<TerminalOutputLine[]>([
    {
      id: 'init-1',
      type: 'system',
      text: 'CYBER CORE SEQUENCE: BILISH_PORTFOLIO_OS [LIGHT_CYBER_EDITION]',
    },
    {
      id: 'init-2',
      type: 'system',
      text: 'KERNEL: Linux 6.8.0-ce-nepal · USER: bilish · ARCH: x86_64',
    },
    {
      id: 'init-3',
      type: 'success',
      text: 'Type "help" to view all available commands, or click the quick command chips below.',
    },
  ]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [isMaximized, setIsMaximized] = useState(false);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const terminalBottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  useEffect(() => {
    terminalBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  // Global keyboard shortcut Ctrl+K or Cmd+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        soundFx.playOpen();
        if (isOpen) {
          onClose();
        } else {
          window.dispatchEvent(new CustomEvent('open-cyber-cli'));
        }
      } else if (e.key === 'Escape' && isOpen) {
        soundFx.playClick();
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const executeCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim().toLowerCase();
    soundFx.playKey();

    if (!trimmed) return;

    const userLine: TerminalOutputLine = {
      id: `input-${Date.now()}`,
      type: 'input',
      text: `bilish@portfolio:~$ ${cmdStr}`,
    };

    setCommandHistory((prev) => [cmdStr, ...prev]);
    setHistoryIndex(-1);

    const newOutputs: TerminalOutputLine[] = [userLine];

    switch (trimmed) {
      case 'help':
        soundFx.playSuccess();
        newOutputs.push({
          id: `out-${Date.now()}-1`,
          type: 'output',
          text: `AVAILABLE CYBER COMMANDS:\n` +
            `  • help      - Display this command manual\n` +
            `  • about     - Learn about Bilish Sayaju's identity and engineering focus\n` +
            `  • skills    - List technical arsenal and active learning domains\n` +
            `  • projects  - Review active projects and exploratory labs\n` +
            `  • tuning    - Competitive sensi, regedit tweaks & paid PC optimization\n` +
            `  • contact   - View transmission frequencies and direct email\n` +
            `  • social    - View Instagram, Facebook, and verified profiles\n` +
            `  • whoami    - Display current user context and origin\n` +
            `  • date      - Output system timestamp\n` +
            `  • clear     - Purge terminal buffer screen`,
        });
        break;

      case 'about':
        soundFx.playSuccess();
        newOutputs.push({
          id: `out-${Date.now()}-1`,
          type: 'output',
          text: `NAME: ${PERSONAL_INFO.name}\n` +
            `ROLE: ${PERSONAL_INFO.title}\n` +
            `LOCATION: ${PERSONAL_INFO.location}\n` +
            `CORE FOCUS: Creative Mind. Technical Vision.\n\n` +
            `BIO: ${PERSONAL_INFO.heroDescription}\n\n` +
            `NOTE: First-year student combining strong engineering fundamentals with creative thinking.`,
        });
        break;

      case 'skills':
        soundFx.playSuccess();
        const skillList = SKILLS_DATA.map(
          (s) => `  [${s.status.toUpperCase()}] ${s.name.padEnd(28)} - ${s.category}`
        ).join('\n');
        newOutputs.push({
          id: `out-${Date.now()}-1`,
          type: 'output',
          text: `TECHNICAL ARSENAL (ACTIVE STUDY STATUS):\n${skillList}`,
        });
        break;

      case 'projects':
        soundFx.playSuccess();
        const projList = PROJECTS_DATA.map(
          (p) => `  [${p.number}] ${p.title} (${p.status}) -> ${p.technologies.join(', ')}\n      ${p.description}`
        ).join('\n\n');
        newOutputs.push({
          id: `out-${Date.now()}-1`,
          type: 'output',
          text: `CURRENT PROJECTS & LABS:\n\n${projList}`,
        });
        break;

      case 'tuning':
      case 'services':
      case 'gaming':
        soundFx.playSuccess();
        newOutputs.push({
          id: `out-${Date.now()}-1`,
          type: 'output',
          text: `GAMING & PC OPTIMIZATION SERVICES:\n` +
            `  1. Custom Sensi Tuning:\n` +
            `     - 1:1 Raw input calibration, zero pixel skipping, custom eDPI conversion\n` +
            `  2. Regedit & Low-Latency Tweaks (Redigit):\n` +
            `     - Network packet pacing (TCPackFrequency), timer resolution unlock, input delay suppression\n` +
            `  3. Paid PC Optimization for Online Games:\n` +
            `     - Deep Windows debloat, CPU core unparking, GPU driver latency tuning, 1% low FPS stabilization\n\n` +
            `HOW TO INQUIRE:\n` +
            `  Send a direct message on Instagram (@${PERSONAL_INFO.instagram}) or Facebook (@${PERSONAL_INFO.facebook}) with your PC specs and main games!`,
        });
        break;

      case 'contact':
        soundFx.playSuccess();
        newOutputs.push({
          id: `out-${Date.now()}-1`,
          type: 'output',
          text: `DIRECT FREQUENCIES:\n` +
            `  • Email:    ${PERSONAL_INFO.email}\n` +
            `  • Location: ${PERSONAL_INFO.location}\n` +
            `  • Domain:   ${PERSONAL_INFO.domain}\n` +
            `Send message directly via the contact form or email client.`,
        });
        break;

      case 'social':
        soundFx.playSuccess();
        newOutputs.push({
          id: `out-${Date.now()}-1`,
          type: 'output',
          text: `OFFICIAL SOCIAL IDENTITIES:\n` +
            `  • Instagram: ${PERSONAL_INFO.instagram} (${PERSONAL_INFO.instagramUrl})\n` +
            `  • Facebook:  ${PERSONAL_INFO.facebook} (${PERSONAL_INFO.facebookUrl})\n` +
            `  • Email:     ${PERSONAL_INFO.email}`,
        });
        break;

      case 'whoami':
        soundFx.playSuccess();
        newOutputs.push({
          id: `out-${Date.now()}-1`,
          type: 'output',
          text: `guest@bilish-portfolio (authenticated as Visitor from Internet via HTTPS)`,
        });
        break;

      case 'date':
        newOutputs.push({
          id: `out-${Date.now()}-1`,
          type: 'output',
          text: new Date().toUTCString(),
        });
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        newOutputs.push({
          id: `err-${Date.now()}`,
          type: 'error',
          text: `Command not found: "${trimmed}". Type "help" to list available commands.`,
        });
        break;
    }

    setHistory((prev) => [...prev, ...newOutputs]);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const nextIdx = Math.min(historyIndex + 1, commandHistory.length - 1);
        setHistoryIndex(nextIdx);
        setInputVal(commandHistory[nextIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIdx = historyIndex - 1;
        setHistoryIndex(nextIdx);
        setInputVal(commandHistory[nextIdx]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInputVal('');
      }
    } else {
      soundFx.playKey();
    }
  };

  const quickCommands = ['help', 'about', 'skills', 'projects', 'tuning', 'contact', 'clear'];

  return (
    <div
      id="cyber-cli-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#0D2318]/50 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={() => {
        soundFx.playClick();
        onClose();
      }}
    >
      <div
        id="cyber-cli-window"
        className={`relative w-full rounded-2xl bg-[#E3EDE5] border-2 border-[#5B9C73] shadow-2xl flex flex-col overflow-hidden transition-all duration-300 ${
          isMaximized ? 'h-[95vh] max-w-[98vw]' : 'h-[620px] max-w-3xl'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Title Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#D4E8DC] border-b border-[#B4D5BF]">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500 inline-block shadow-xs" />
            <span className="w-3 h-3 rounded-full bg-amber-500 inline-block shadow-xs" />
            <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block shadow-xs" />
            <span className="ml-2 font-mono text-xs text-[#0D2318] font-bold flex items-center gap-1.5">
              <TerminalIcon className="w-3.5 h-3.5 text-[#059669]" />
              <span>bilish@portfolio: ~ (bash / light-cyber)</span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsMaximized(!isMaximized)}
              className="p-1 rounded text-[#244734] hover:text-[#0D2318] cursor-pointer"
              title={isMaximized ? 'Restore' : 'Maximize'}
            >
              {isMaximized ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
            <button
              type="button"
              onClick={() => {
                soundFx.playClick();
                onClose();
              }}
              className="p-1 rounded text-[#244734] hover:text-rose-600 cursor-pointer"
              title="Close Terminal (Esc)"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Terminal Content Area (Light Cyber Console) */}
        <div
          className="flex-1 p-4 sm:p-5 overflow-y-auto font-mono text-xs sm:text-sm space-y-3 bg-[#0F2D1D] text-[#D1FAE5]"
          onClick={() => inputRef.current?.focus()}
        >
          {history.map((line) => {
            if (line.type === 'input') {
              return (
                <div key={line.id} className="text-[#34D399] font-bold">
                  {line.text}
                </div>
              );
            }
            if (line.type === 'system') {
              return (
                <div key={line.id} className="text-[#6EE7B7]/80">
                  [SYS] {line.text}
                </div>
              );
            }
            if (line.type === 'success') {
              return (
                <div key={line.id} className="text-[#10B981] font-semibold">
                  ✔ {line.text}
                </div>
              );
            }
            if (line.type === 'error') {
              return (
                <div key={line.id} className="text-[#F87171] font-semibold">
                  ✖ {line.text}
                </div>
              );
            }
            return (
              <pre
                key={line.id}
                className="text-[#E0EFE6] whitespace-pre-wrap font-mono leading-relaxed"
              >
                {line.text}
              </pre>
            );
          })}

          {/* Active Prompt Line */}
          <div className="flex items-center gap-2 text-[#34D399] pt-2">
            <span className="shrink-0 text-[#10B981] font-bold">bilish@portfolio:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent border-none outline-none text-[#F0FDF4] font-mono text-xs sm:text-sm caret-[#34D399]"
              autoComplete="off"
              spellCheck="false"
              aria-label="Terminal input line"
            />
          </div>

          <div ref={terminalBottomRef} />
        </div>

        {/* Quick Command Suggestion Bar */}
        <div className="px-4 py-2.5 bg-[#D4E8DC] border-t border-[#B4D5BF] flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="font-mono text-[11px] text-[#0D2318] font-bold hidden sm:inline">
              Quick:
            </span>
            {quickCommands.map((cmd) => (
              <button
                key={cmd}
                type="button"
                onClick={() => {
                  setInputVal(cmd);
                  executeCommand(cmd);
                }}
                className="px-2.5 py-1 rounded-md bg-[#EDF5F0] border border-[#B4D5BF] hover:border-[#059669] hover:bg-[#D5EADF] text-[11px] font-mono text-[#065F38] font-bold transition-colors cursor-pointer"
              >
                {cmd}
              </button>
            ))}
          </div>

          <div className="font-mono text-[11px] text-[#436A56] flex items-center gap-1">
            <CornerDownLeft className="w-3 h-3 text-[#059669]" />
            <span>Enter to execute</span>
          </div>
        </div>
      </div>
    </div>
  );
};
