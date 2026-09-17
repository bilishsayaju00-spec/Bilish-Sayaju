import React, { useState, useEffect, useRef } from 'react';
import {
  FlaskConical,
  Copy,
  Check,
  RotateCcw,
  Zap,
  Terminal,
  Activity,
  Sparkles,
} from 'lucide-react';
import { soundFx } from '../utils/audio';

export const Lab: React.FC = () => {
  // Experiment 1: Cyber Color & Gradient Generator
  const [color1, setColor1] = useState('#059669');
  const [color2, setColor2] = useState('#0284C7');
  const [gradientDeg, setGradientDeg] = useState(135);
  const [copiedGrad, setCopiedGrad] = useState(false);

  // Experiment 2: Logic Gate Simulator
  const [inputA, setInputA] = useState(1);
  const [inputB, setInputB] = useState(0);
  const [gateType, setGateType] = useState<'AND' | 'OR' | 'XOR' | 'NAND'>('AND');

  const computeGateOutput = () => {
    switch (gateType) {
      case 'AND':
        return inputA && inputB ? 1 : 0;
      case 'OR':
        return inputA || inputB ? 1 : 0;
      case 'XOR':
        return inputA ^ inputB ? 1 : 0;
      case 'NAND':
        return !(inputA && inputB) ? 1 : 0;
    }
  };

  // Experiment 3: Kinetic Typewriter Simulator
  const defaultPhrases = [
    'Exploring computer systems, creative technology & hacking concepts...',
    'Analyzing C memory pointers, buffers and assembly basics...',
    'Designing light cyber terminal interfaces with high readability...',
    'Inspecting TCP/IP packet handshakes and Linux bash permissions...',
  ];
  const [currentPhraseIdx, setCurrentPhraseIdx] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [typingSpeed, setTypingSpeed] = useState(45);

  useEffect(() => {
    let charIdx = 0;
    setTypedText('');
    const phrase = defaultPhrases[currentPhraseIdx];

    const timer = setInterval(() => {
      if (charIdx <= phrase.length) {
        setTypedText(phrase.slice(0, charIdx));
        charIdx++;
      } else {
        clearInterval(timer);
      }
    }, typingSpeed);

    return () => clearInterval(timer);
  }, [currentPhraseIdx, typingSpeed]);

  // Experiment 4: Particle Burst Canvas
  const labCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<Array<{ x: number; y: number; vx: number; vy: number; color: string; life: number }>>([]);

  useEffect(() => {
    const canvas = labCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    canvas.width = canvas.parentElement?.clientWidth || 300;
    canvas.height = 180;

    const render = () => {
      ctx.fillStyle = 'rgba(227, 237, 229, 0.45)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = particlesRef.current.length - 1; i >= 0; i--) {
        const p = particlesRef.current[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 0.02;

        if (p.life <= 0) {
          particlesRef.current.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, 2.5 * p.life, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.life;
        ctx.fill();
      }
      ctx.globalAlpha = 1.0;
      animId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animId);
  }, []);

  const triggerParticleBurst = (e?: React.MouseEvent<HTMLCanvasElement>) => {
    soundFx.playHover();
    const canvas = labCanvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = e ? e.clientX - rect.left : canvas.width / 2;
    const y = e ? e.clientY - rect.top : canvas.height / 2;

    const colors = ['#059669', '#10B981', '#0284C7', '#D97706', '#14B8A6'];
    for (let i = 0; i < 28; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 4 + 1;
      particlesRef.current.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: 1.0,
      });
    }
  };

  const copyGradientCSS = () => {
    soundFx.playSuccess();
    const css = `background: linear-gradient(${gradientDeg}deg, ${color1}, ${color2});`;
    navigator.clipboard.writeText(css).catch(() => {});
    setCopiedGrad(true);
    setTimeout(() => setCopiedGrad(false), 2000);
  };

  return (
    <section
      id="lab"
      aria-label="The Lab & Interactive Playgrounds"
      className="relative py-24 border-t border-[#B4D5BF]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-[#065F38] uppercase tracking-wider mb-2">
            <span className="text-[#059669] font-bold">04 //</span>
            <span>INTERACTIVE EXPERIMENTS &amp; SANDBOX</span>
          </div>
          <h2 className="font-space font-bold text-3xl sm:text-4xl text-[#0D2318] tracking-tight flex items-center gap-3">
            <span>The Lab</span>
            <FlaskConical className="w-8 h-8 text-[#059669]" />
          </h2>
          <p className="font-mono text-sm sm:text-base text-[#2D523F] mt-2 max-w-2xl">
            Small experiments, logic circuits, and technical playgrounds built to test concepts interactively.
          </p>
        </div>

        {/* Playgrounds Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Playground 1: Color / Gradient Generator */}
          <div
            id="lab-card-gradient"
            className="rounded-2xl bg-[#EDF5F0] border border-[#B4D5BF] hover:border-[#059669] p-6 transition-all duration-300 shadow-2xs flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-[#B4D5BF] mb-4">
                <span className="font-mono text-xs text-[#065F38] font-bold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#059669]" />
                  <span>CYBER GRADIENT GENERATOR</span>
                </span>
                <span className="font-mono text-[10px] text-[#436A56]">[01]</span>
              </div>

              {/* Preview Box */}
              <div
                className="w-full h-28 rounded-xl mb-4 border border-[#B4D5BF] shadow-xs flex items-center justify-center transition-all duration-300"
                style={{
                  background: `linear-gradient(${gradientDeg}deg, ${color1}, ${color2})`,
                }}
              >
                <span className="px-3 py-1 rounded bg-[#EDF5F0]/95 backdrop-blur-xs font-mono text-xs text-[#0D2318] border border-[#B4D5BF] shadow-xs font-semibold">
                  {gradientDeg}°
                </span>
              </div>

              {/* Controls */}
              <div className="space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-[#2D523F]">Stop 1:</span>
                  <div className="flex items-center gap-2">
                    <input
                      type="color"
                      value={color1}
                      onChange={(e) => setColor1(e.target.value)}
                      className="w-7 h-7 rounded border border-[#B4D5BF] cursor-pointer bg-transparent"
                    />
                    <span className="text-[#0D2318] font-medium">{color1}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-[#2D523F]">Stop 2:</span>
                  <div className="flex items-center gap-2">
                    <input
                      type="color"
                      value={color2}
                      onChange={(e) => setColor2(e.target.value)}
                      className="w-7 h-7 rounded border border-[#B4D5BF] cursor-pointer bg-transparent"
                    />
                    <span className="text-[#0D2318] font-medium">{color2}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-[#2D523F]">Angle:</span>
                  <input
                    type="range"
                    min="0"
                    max="360"
                    value={gradientDeg}
                    onChange={(e) => setGradientDeg(Number(e.target.value))}
                    className="w-32 accent-[#059669] cursor-pointer"
                  />
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={copyGradientCSS}
              className="mt-6 w-full py-2.5 px-3 rounded-lg bg-[#E0EFE6] border border-[#B4D5BF] hover:border-[#059669] hover:bg-[#D5EADF] text-xs font-mono text-[#0D2318] transition-colors flex items-center justify-center gap-2 cursor-pointer font-medium"
            >
              {copiedGrad ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#059669]" />
                  <span className="text-[#065F38] font-semibold">CSS Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#365E47]" />
                  <span>Copy CSS Snippet</span>
                </>
              )}
            </button>
          </div>

          {/* Playground 2: Logic Gate Visualizer */}
          <div
            id="lab-card-logic"
            className="rounded-2xl bg-[#EDF5F0] border border-[#B4D5BF] hover:border-[#059669] p-6 transition-all duration-300 shadow-2xs flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-[#B4D5BF] mb-4">
                <span className="font-mono text-xs text-[#065F38] font-bold flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-[#059669]" />
                  <span>LOGIC GATE &amp; TRUTH TABLE</span>
                </span>
                <span className="font-mono text-[10px] text-[#436A56]">[02]</span>
              </div>

              {/* Gate Select */}
              <div className="grid grid-cols-4 gap-1.5 mb-4">
                {(['AND', 'OR', 'XOR', 'NAND'] as const).map((gate) => (
                  <button
                    key={gate}
                    type="button"
                    onClick={() => {
                      soundFx.playClick();
                      setGateType(gate);
                    }}
                    className={`py-1.5 rounded text-xs font-mono transition-all cursor-pointer ${
                      gateType === gate
                        ? 'bg-[#0F2D1D] text-[#34D399] font-semibold border border-[#2D6A47] shadow-xs'
                        : 'bg-[#E0EFE6] border border-[#B4D5BF] text-[#244734] hover:bg-[#D5EADF]'
                    }`}
                  >
                    {gate}
                  </button>
                ))}
              </div>

              {/* Live Binary Simulation Display */}
              <div className="p-4 rounded-xl bg-[#E0EFE6] border border-[#B4D5BF] mb-4 flex items-center justify-around font-mono text-sm">
                <div className="flex flex-col items-center">
                  <span className="text-[10px] text-[#2D523F] mb-1">IN_A</span>
                  <button
                    type="button"
                    onClick={() => {
                      soundFx.playClick();
                      setInputA(inputA === 1 ? 0 : 1);
                    }}
                    className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-base transition-all cursor-pointer ${
                      inputA
                        ? 'bg-[#D7EADE] border border-[#91C7A1] text-[#065F38] shadow-xs'
                        : 'bg-[#EDF5F0] border border-[#B4D5BF] text-[#6A947B]'
                    }`}
                  >
                    {inputA}
                  </button>
                </div>

                <div className="text-xs text-[#0D2318] font-bold">
                  {gateType}
                </div>

                <div className="flex flex-col items-center">
                  <span className="text-[10px] text-[#2D523F] mb-1">IN_B</span>
                  <button
                    type="button"
                    onClick={() => {
                      soundFx.playClick();
                      setInputB(inputB === 1 ? 0 : 1);
                    }}
                    className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-base transition-all cursor-pointer ${
                      inputB
                        ? 'bg-[#D7EADE] border border-[#91C7A1] text-[#065F38] shadow-xs'
                        : 'bg-[#EDF5F0] border border-[#B4D5BF] text-[#6A947B]'
                    }`}
                  >
                    {inputB}
                  </button>
                </div>

                <div className="text-base text-[#436A56]">=</div>

                <div className="flex flex-col items-center">
                  <span className="text-[10px] text-[#065F38] mb-1 font-bold">OUT</span>
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-base transition-all ${
                      computeGateOutput()
                        ? 'bg-[#10B981] text-[#064E3B] border border-[#059669] shadow-xs font-bold'
                        : 'bg-[#EDF5F0] border border-[#B4D5BF] text-[#6A947B]'
                    }`}
                  >
                    {computeGateOutput()}
                  </div>
                </div>
              </div>

              <p className="font-sans text-xs text-[#1D3B2C] leading-relaxed">
                Fundamental computer architecture simulation: click IN_A or IN_B to toggle high/low digital logic levels.
              </p>
            </div>

            <div className="pt-4 border-t border-[#B4D5BF] font-mono text-[10px] text-[#436A56] flex justify-between">
              <span>BOOL::LOGIC</span>
              <span className="text-[#065F38] font-semibold">[CIRCUIT_OK]</span>
            </div>
          </div>

          {/* Playground 3: Particle Network & Interactive Burst */}
          <div
            id="lab-card-particles"
            className="rounded-2xl bg-[#EDF5F0] border border-[#B4D5BF] hover:border-[#059669] p-6 transition-all duration-300 shadow-2xs flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-[#B4D5BF] mb-4">
                <span className="font-mono text-xs text-[#065F38] font-bold flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-[#059669]" />
                  <span>PARTICLE NETWORK BURST</span>
                </span>
                <span className="font-mono text-[10px] text-[#436A56]">[03]</span>
              </div>

              {/* Interactive Particle Burst Box */}
              <div
                className="relative rounded-xl overflow-hidden border border-[#B4D5BF] cursor-crosshair bg-[#E0EFE6]"
                onClick={triggerParticleBurst}
              >
                <canvas
                  ref={labCanvasRef}
                  className="w-full h-[140px] block"
                />
                <div className="absolute bottom-2 right-2 font-mono text-[10px] text-[#164E30] bg-[#EDF5F0]/95 border border-[#B4D5BF] px-2 py-0.5 rounded pointer-events-none shadow-xs font-medium">
                  Click canvas to burst
                </div>
              </div>

              <p className="font-sans text-xs text-[#1D3B2C] leading-relaxed mt-4">
                Kinetic canvas physics demonstrating velocity vectors, alpha decay, and real-time interaction hooks.
              </p>
            </div>

            <button
              type="button"
              onClick={() => triggerParticleBurst()}
              className="mt-6 w-full py-2.5 px-3 rounded-lg bg-[#E0EFE6] border border-[#B4D5BF] hover:border-[#059669] hover:bg-[#D5EADF] text-xs font-mono text-[#0D2318] transition-colors flex items-center justify-center gap-2 cursor-pointer font-medium"
            >
              <Zap className="w-3.5 h-3.5 text-[#059669]" />
              <span>Trigger Kinetic Burst</span>
            </button>
          </div>

          {/* Playground 4: Kinetic Typewriter Simulator */}
          <div
            id="lab-card-typewriter"
            className="md:col-span-2 lg:col-span-3 rounded-2xl bg-[#EDF5F0] border border-[#B4D5BF] hover:border-[#059669] p-6 transition-all duration-300 shadow-2xs"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-[#B4D5BF] mb-4 gap-2">
              <span className="font-mono text-xs text-[#065F38] font-bold flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-[#059669]" />
                <span>KINETIC TYPEWRITER ENGINE</span>
              </span>
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-[#2D523F]">Speed: {typingSpeed}ms</span>
                <input
                  type="range"
                  min="20"
                  max="100"
                  value={typingSpeed}
                  onChange={(e) => setTypingSpeed(Number(e.target.value))}
                  className="w-24 accent-[#059669] cursor-pointer"
                />
              </div>
            </div>

            {/* Typewriter Display Console */}
            <div className="p-4 rounded-xl bg-[#0F2D1D] border border-[#2D6A47] font-mono text-sm sm:text-base text-[#34D399] min-h-[64px] flex items-center shadow-inner">
              <span className="text-[#10B981] mr-2">&gt;</span>
              <span>{typedText}</span>
              <span className="w-2 h-4 bg-[#34D399] ml-1 inline-block animate-pulse" />
            </div>

            {/* Controls */}
            <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
              <div className="flex flex-wrap gap-2">
                {defaultPhrases.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      soundFx.playClick();
                      setCurrentPhraseIdx(idx);
                    }}
                    className={`px-2.5 py-1 rounded text-xs font-mono transition-colors cursor-pointer ${
                      currentPhraseIdx === idx
                        ? 'bg-[#0F2D1D] text-[#34D399] font-medium border border-[#2D6A47] shadow-xs'
                        : 'bg-[#E0EFE6] border border-[#B4D5BF] text-[#244734] hover:bg-[#D5EADF]'
                    }`}
                  >
                    Phrase {idx + 1}
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={() => {
                  soundFx.playClick();
                  setCurrentPhraseIdx((prev) => (prev + 1) % defaultPhrases.length);
                }}
                className="px-3 py-1.5 rounded-lg bg-[#E0EFE6] border border-[#B4D5BF] hover:border-[#059669] hover:bg-[#D5EADF] text-xs font-mono text-[#0D2318] flex items-center gap-1.5 transition-colors cursor-pointer font-medium"
              >
                <RotateCcw className="w-3.5 h-3.5 text-[#059669]" />
                <span>Next Phrase</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
