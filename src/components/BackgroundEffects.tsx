import React, { useEffect, useRef, useState } from 'react';

export const BackgroundEffects: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [scrollDepth, setScrollDepth] = useState(0);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const current = window.scrollY;
      setScrollDepth(max > 0 ? Math.min(Math.round((current / max) * 100), 100) : 0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Track scroll velocity for interactive particle acceleration
    let lastScrollY = window.scrollY;
    let scrollVelocity = 0;
    const onScrollSpeed = () => {
      const currentScrollY = window.scrollY;
      scrollVelocity = (currentScrollY - lastScrollY) * 0.4;
      lastScrollY = currentScrollY;
    };
    window.addEventListener('scroll', onScrollSpeed, { passive: true });

    // Floating technical glyphs
    const glyphs = ['01', '0x42', 'SYS_OK', 'ETH_0', 'PORT::3000', 'BKT_NEPAL', 'CE::2026', 'x86_64', 'ACK'];
    interface CodeGlyph {
      x: number;
      y: number;
      text: string;
      speed: number;
      alpha: number;
    }
    const codeGlyphs: CodeGlyph[] = [];
    for (let i = 0; i < 14; i++) {
      codeGlyphs.push({
        x: Math.random() * width,
        y: Math.random() * height,
        text: glyphs[Math.floor(Math.random() * glyphs.length)],
        speed: 0.15 + Math.random() * 0.25,
        alpha: 0.12 + Math.random() * 0.2,
      });
    }

    // Cyber node particles
    const particleCount = Math.min(Math.floor((width * height) / 24000), 55);
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
      color: string;
      pulseSpeed: number;
    }

    const particles: Particle[] = [];
    const colors = ['#059669', '#10B981', '#0D9488', '#0284C7', '#34D399'];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        size: Math.random() * 1.8 + 0.9,
        alpha: Math.random() * 0.45 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        pulseSpeed: 0.02 + Math.random() * 0.03,
      });
    }

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    let frame = 0;

    const render = () => {
      frame++;
      ctx.clearRect(0, 0, width, height);

      // Dampen scroll velocity
      scrollVelocity *= 0.92;

      // Draw faint floating code glyphs
      ctx.font = '10px JetBrains Mono, monospace';
      for (let g of codeGlyphs) {
        if (!prefersReducedMotion) {
          g.y -= g.speed + scrollVelocity * 0.2;
          if (g.y < -20) {
            g.y = height + 20;
            g.x = Math.random() * width;
          } else if (g.y > height + 20) {
            g.y = -20;
            g.x = Math.random() * width;
          }
        }
        ctx.fillStyle = '#065F38';
        ctx.globalAlpha = g.alpha;
        ctx.fillText(g.text, g.x, g.y);
      }

      // Draw particle nodes and dynamic network web
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (!prefersReducedMotion) {
          p.x += p.vx;
          p.y += p.vy - scrollVelocity * 0.3;

          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;
        }

        // Draw particle dot with gentle breathing
        const currentAlpha = p.alpha + Math.sin(frame * p.pulseSpeed) * 0.1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0.1, Math.min(currentAlpha, 0.7));
        ctx.fill();

        // Connect to mouse pointer with soft cyber beam
        const dxMouse = p.x - mouseX;
        const dyMouse = p.y - mouseY;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
        if (distMouse < 160) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouseX, mouseY);
          ctx.strokeStyle = '#059669';
          ctx.globalAlpha = (1 - distMouse / 160) * 0.35;
          ctx.lineWidth = 1;
          ctx.stroke();
        }

        // Connect neighboring particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = '#059669';
            ctx.globalAlpha = (1 - dist / 130) * 0.22;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 1.0;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', onScrollSpeed);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      id="background-effects"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Base Light Cyber Grid with Crosshair Intersections */}
      <div className="absolute inset-0 cyber-cross-bg opacity-55" />

      {/* Dynamic Cursor Light Halo */}
      {mousePos.x > 0 && (
        <div
          className="absolute w-[460px] h-[460px] rounded-full pointer-events-none transition-transform duration-75 ease-out"
          style={{
            transform: `translate(${mousePos.x - 230}px, ${mousePos.y - 230}px)`,
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.12) 0%, rgba(5, 150, 105, 0.03) 50%, transparent 70%)',
          }}
        />
      )}

      {/* Mesmerizing Shifting Aurora Glows that evolve down the page */}
      <div
        className="absolute -top-40 -left-40 w-[680px] h-[680px] rounded-full bg-emerald-300/20 blur-[150px] transition-transform duration-1000 ease-out pointer-events-none"
        style={{
          transform: `translateY(${scrollDepth * 4}px)`,
        }}
      />
      <div
        className="absolute top-1/4 -right-40 w-[720px] h-[720px] rounded-full bg-teal-300/20 blur-[160px] transition-transform duration-1000 ease-out pointer-events-none"
        style={{
          transform: `translateY(-${scrollDepth * 3}px)`,
        }}
      />
      <div
        className="absolute top-2/3 left-10 w-[620px] h-[620px] rounded-full bg-cyan-300/18 blur-[160px] transition-transform duration-1000 ease-out pointer-events-none"
        style={{
          transform: `translateY(${scrollDepth * 2}px)`,
        }}
      />

      {/* Subtle Horizontal Cyber Scanning Line */}
      <div className="absolute left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#059669]/30 to-transparent animate-cyber-beam pointer-events-none" />

      {/* Technical Cyber HUD Status Tags in Corners */}
      <div className="absolute top-20 left-4 font-mono text-[10px] text-[#065F38]/35 select-none tracking-widest hidden xl:block font-bold">
        [SYS::NP_BKT] 27.67°N 85.42°E // MEM_0x42
      </div>
      <div className="absolute top-24 right-8 font-mono text-[10px] text-[#065F38]/35 select-none tracking-widest hidden xl:block font-bold">
        GRID_SCALE::36PX // LIGHT_CYBER_MATRIX
      </div>
      <div className="absolute bottom-6 left-6 font-mono text-[10px] text-[#065F38]/35 select-none tracking-widest hidden xl:block font-bold">
        SCROLL_DEPTH::{scrollDepth.toString().padStart(2, '0')}% // SECTOR_ACTIVE
      </div>

      {/* Interactive Node Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
};
