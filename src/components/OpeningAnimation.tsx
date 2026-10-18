'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ArrowRight, Check, Code2, Database, Smartphone } from 'lucide-react';
import { getAssetUrl } from '@/lib/assets';

interface OpeningAnimationProps {
  onComplete?: () => void;
}

export function OpeningAnimation({ onComplete }: OpeningAnimationProps) {
  const [elapsed, setElapsed] = useState<number>(0);
  const [isFadingOut, setIsFadingOut] = useState<boolean>(false);
  const [isDismissed, setIsDismissed] = useState<boolean>(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // High-Speed 60FPS Continuous Animation Loop (~5.0 seconds total duration)
  useEffect(() => {
    let animFrame: number;
    const startTime = performance.now();
    const TOTAL_DURATION = 5000;

    const updateLoop = (now: number) => {
      const ms = now - startTime;
      setElapsed(ms);

      // Trigger final full-screen dissolve at 4.4s
      if (ms >= 4400 && !isFadingOut) {
        setIsFadingOut(true);
      }

      // Complete and unmount overlay at 5.0s
      if (ms >= TOTAL_DURATION) {
        setIsDismissed(true);
        if (onComplete) onComplete();
        return;
      }

      animFrame = requestAnimationFrame(updateLoop);
    };

    animFrame = requestAnimationFrame(updateLoop);

    // Escape key shortcut to instantly bypass
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleSkip();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onComplete, isFadingOut]);

  // Background Interactive 3D Stardust Particle & Energy Ribbon Canvas Engine
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // 80 Orbiting & Swirling Particles
    const particles = Array.from({ length: 80 }, (_, i) => {
      const orbitBand = i % 3;
      return {
        theta: Math.random() * Math.PI * 2,
        speed: (Math.random() * 0.02 + 0.012) * (i % 2 === 0 ? 1 : -1),
        radiusX: orbitBand === 0 ? 180 + Math.random() * 30 : orbitBand === 1 ? 240 + Math.random() * 40 : 300 + Math.random() * 50,
        radiusY: orbitBand === 0 ? 65 + Math.random() * 15 : orbitBand === 1 ? 85 + Math.random() * 20 : 105 + Math.random() * 25,
        tilt: orbitBand === 0 ? -0.4 : orbitBand === 1 ? 0.5 : -0.15,
        size: Math.random() * 2.2 + 1,
        color: orbitBand === 0 ? '#00D2FF' : orbitBand === 1 ? '#A855F7' : '#6366F1',
        alpha: Math.random() * 0.7 + 0.3,
        trail: [] as { x: number; y: number; alpha: number }[],
      };
    });

    // 40 Ambient background stardust sparks
    const ambientStars = Array.from({ length: 40 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.8 + 0.8,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      color: Math.random() > 0.5 ? '#38BDF8' : '#C084FC',
      alpha: Math.random() * 0.6 + 0.2,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      const cx = width / 2;
      const cy = height / 2;

      // 1. Ambient Stardust Drift
      ambientStars.forEach((star) => {
        star.x += star.vx;
        star.y += star.vy;
        if (star.x < 0) star.x = width;
        if (star.x > width) star.x = 0;
        if (star.y < 0) star.y = height;
        if (star.y > height) star.y = 0;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.globalAlpha = star.alpha;
        ctx.shadowBlur = 6;
        ctx.shadowColor = star.color;
        ctx.fill();
      });

      // 2. Continuous 3D Flowing Energy Ribbon Arcs
      const t = performance.now() * 0.002;
      const drawRibbon = (rx: number, ry: number, tilt: number, color: string, dashOffset: number) => {
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(tilt);

        ctx.beginPath();
        ctx.ellipse(0, 0, rx, ry, 0, 0, Math.PI * 2);
        ctx.strokeStyle = color;
        ctx.lineWidth = 1.6;
        ctx.globalAlpha = 0.3;
        ctx.shadowBlur = 18;
        ctx.shadowColor = color;
        ctx.stroke();

        ctx.beginPath();
        ctx.ellipse(0, 0, rx, ry, 0, 0, Math.PI * 2);
        ctx.strokeStyle = '#FFFFFF';
        ctx.lineWidth = 2.2;
        ctx.lineDashOffset = dashOffset;
        ctx.setLineDash([30, 60, 10, 80]);
        ctx.globalAlpha = 0.7;
        ctx.shadowBlur = 22;
        ctx.shadowColor = color;
        ctx.stroke();

        ctx.restore();
      };

      drawRibbon(190, 70, -0.4, '#00D2FF', -t * 50);
      drawRibbon(240, 85, 0.5, '#A855F7', t * 45);
      drawRibbon(295, 105, -0.15, '#6366F1', -t * 35);

      // 3. Render 3D Orbiting Stardust Particles
      particles.forEach((p) => {
        p.theta += p.speed;

        const cosT = Math.cos(p.theta);
        const sinT = Math.sin(p.theta);
        const cosTilt = Math.cos(p.tilt);
        const sinTilt = Math.sin(p.tilt);

        const x = cx + p.radiusX * cosT * cosTilt - p.radiusY * sinT * sinTilt;
        const y = cy + p.radiusX * cosT * sinTilt + p.radiusY * sinT * cosTilt;
        const z = sinT;

        p.trail.unshift({ x, y, alpha: p.alpha });
        if (p.trail.length > 5) p.trail.pop();

        for (let j = 0; j < p.trail.length; j++) {
          const pt = p.trail[j];
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, Math.max(0.5, p.size * (1 - j / p.trail.length)), 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = (p.alpha * (1 - j / p.trail.length) * 0.4) * (z > 0 ? 1 : 0.35);
          ctx.fill();
        }

        const depthScale = z > 0 ? 1.3 : 0.75;
        const depthAlpha = z > 0 ? p.alpha : p.alpha * 0.4;

        ctx.beginPath();
        ctx.arc(x, y, p.size * depthScale, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = depthAlpha;
        ctx.shadowBlur = z > 0 ? 14 : 5;
        ctx.shadowColor = p.color;
        ctx.fill();
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Instant Skip Action
  const handleSkip = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      setIsDismissed(true);
      if (onComplete) onComplete();
    }, 300);
  };

  if (isDismissed) return null;

  // Choreography timeline flags (Sequential organic build-up)
  const showLogo = elapsed >= 100;
  const showName = elapsed >= 600;
  const showTechOrbit = elapsed >= 1000;
  const showPhoneShowcase = elapsed >= 1600 && elapsed < 3500;
  const showTagline = elapsed >= 2400 && elapsed < 3900;
  const showCheckmark = elapsed >= 3700;

  // Laser progress calculation (fills smoothly from 2.4s to 3.7s)
  const progressPct = Math.min(
    100,
    elapsed < 2400 ? 0 : Math.round(((elapsed - 2400) / 1300) * 100)
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Futuristic Portfolio Intro Animation"
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-between bg-[#040612] text-white overflow-hidden select-none transition-all duration-700 ease-out ${
        isFadingOut
          ? 'opacity-0 scale-105 filter blur-lg pointer-events-none'
          : 'opacity-100 scale-100 blur-0'
      }`}
    >
      {/* Living Interactive 3D Canvas (Energy Ribbons + Orbiting Stardust) */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0" />

      {/* Cyber Ambient Volumetric Neon Glows */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.18)_0%,transparent_70%)]" />

        {/* Ambient Grid Floor Perspective */}
        <div className="absolute bottom-0 inset-x-0 h-64 bg-[linear-gradient(to_right,#1f293715_1px,transparent_1px),linear-gradient(to_bottom,#1f293715_1px,transparent_1px)] bg-[size:4rem_2rem] [mask-image:linear-gradient(to_top,black,transparent)] opacity-40" />
      </div>

      {/* Top Header: Brand Wordmark & Skip Intro Button */}
      <header className="relative w-full max-w-7xl px-4 sm:px-8 pt-4 sm:pt-6 flex items-center justify-between z-30 shrink-0">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
          <span className="text-xs sm:text-sm font-black tracking-widest uppercase bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 font-mono">
            ABHISHEK SO J B
          </span>
          <span className="hidden sm:inline-block text-[10px] font-mono text-cyan-300/80 px-2.5 py-0.5 rounded-full bg-cyan-950/40 border border-cyan-800/40">
            Flutter & Mobile Engineer
          </span>
        </div>

        <button
          type="button"
          onClick={handleSkip}
          className="group inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold text-slate-200 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-400 backdrop-blur-md shadow-lg shadow-indigo-500/10 hover:shadow-cyan-500/20 active:scale-95 transition-all duration-300 cursor-pointer"
        >
          <span>Skip Intro</span>
          <ArrowRight className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </header>

      {/* Main Single-Scene Cinematic Choreography (Living Motion Graphics, No Slideshow!) */}
      <main className="relative flex-1 w-full max-w-5xl flex flex-col items-center justify-center p-4 z-20 min-h-0 text-center">
        {/* ======================================================== */}
        {/* 1. AUTHENTIC 3D CRYSTALLINE "A" LOGO + ORBITING TECH */}
        {/* ======================================================== */}
        <div className="relative flex flex-col items-center justify-center">
          {/* Reflective Floor Light Pool */}
          <div
            className={`absolute -bottom-16 w-80 h-14 bg-gradient-to-r from-cyan-500/30 via-indigo-500/35 to-purple-500/30 rounded-full blur-2xl pointer-events-none transition-opacity duration-700 ${
              showLogo ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
            }`}
          />

          {/* EXACT 3D Crystalline Neon "A" Logo with Floor Reflection (From Storyboard Screenshot!) */}
          <div
            className={`relative transition-all duration-700 transform ${
              showLogo
                ? 'opacity-100 scale-100 translate-y-0 filter blur-0 drop-shadow-[0_0_40px_rgba(6,182,212,0.8)]'
                : 'opacity-0 scale-50 -translate-y-8 filter blur-md'
            }`}
          >
            <div className="relative w-36 h-32 sm:w-48 sm:h-40 flex items-center justify-center">
              {/* Glowing vector neon monogram anchor so the screen is NEVER blank even before image decode */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
                <span className="text-6xl sm:text-7xl font-black bg-gradient-to-tr from-cyan-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent opacity-90 filter drop-shadow-[0_0_30px_rgba(6,182,212,0.85)]">
                  A
                </span>
              </div>
              <Image
                src={getAssetUrl('/opening_frames/logo-transparent.png')}
                alt="3D Crystalline Neon A Logo"
                fill
                priority
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
                className="object-contain filter brightness-110 drop-shadow-[0_0_25px_rgba(99,102,241,0.9)] z-10"
                sizes="(max-width: 768px) 144px, 192px"
              />
            </div>
          </div>

          {/* 5 Orbiting Tech Satellites: Revolving 360° around the authentic Logo */}
          <div
            className={`absolute inset-0 pointer-events-none transition-all duration-700 ${
              showTechOrbit ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
            }`}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-60 h-60 sm:w-76 sm:h-76 rounded-full animate-orbit-spin">
                {/* 1. Flutter (Top: 0°) */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="animate-orbit-counter-spin">
                    <div className="p-2 sm:p-2.5 rounded-xl sm:rounded-2xl bg-slate-900/95 border-2 border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.8)] flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12">
                      <svg viewBox="0 0 128 128" className="w-5 h-5 sm:w-6 sm:h-6">
                        <g fill="#3FB6D3">
                          <path d="M12.3 64.2L76.3 0h39.4L32.1 83.6zM76.3 128h39.4L81.6 93.9l34.1-34.8H76.3L42.2 93.5z" />
                        </g>
                        <path fill="#27AACD" d="M81.6 93.9l-20-20-19.4 19.6 19.4 19.6z" />
                        <path fill="#19599A" d="M115.7 128L81.6 93.9l-20 19.2L76.3 128z" />
                        <path fill="#164A83" d="M61.6 113.1l30.8-8.4-10.8-10.8z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* 2. Firebase (Top Right: 72°) */}
                <div className="absolute top-[20%] right-[3%] translate-x-1/2 -translate-y-1/2">
                  <div className="animate-orbit-counter-spin">
                    <div className="p-2 sm:p-2.5 rounded-xl sm:rounded-2xl bg-slate-900/95 border-2 border-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.8)] flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12">
                      <svg viewBox="0 0 32 32" className="w-5 h-5 sm:w-6 sm:h-6">
                        <path d="M19.62 11.558l-3.203 2.98-2.972-5.995 1.538-3.448c.4-.7 1.024-.692 1.414 0z" fill="#FFA000" />
                        <path d="M13.445 8.543l2.972 5.995-11.97 11.135z" fill="#F57F17" />
                        <path d="M23.123 7.003c.572-.55 1.164-.362 1.315.417l3.116 18.105-10.328 6.2c-.36.2-1.32.286-1.32.286s-.874-.104-1.207-.3L4.447 25.673z" fill="#FFCA28" />
                        <path d="M13.445 8.543l-8.997 17.13L8.455.638c.148-.78.592-.855.988-.167z" fill="#FFA000" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* 3. Mobile Device (Bottom Right: 144°) */}
                <div className="absolute bottom-[15%] right-[8%] translate-x-1/2 translate-y-1/2">
                  <div className="animate-orbit-counter-spin">
                    <div className="p-2 sm:p-2.5 rounded-xl sm:rounded-2xl bg-slate-900/95 border-2 border-fuchsia-400 shadow-[0_0_20px_rgba(217,70,239,0.8)] flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 text-fuchsia-400">
                      <Smartphone className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                  </div>
                </div>

                {/* 4. Databases (Bottom Left: 216°) */}
                <div className="absolute bottom-[15%] left-[8%] -translate-x-1/2 translate-y-1/2">
                  <div className="animate-orbit-counter-spin">
                    <div className="p-2 sm:p-2.5 rounded-xl sm:rounded-2xl bg-slate-900/95 border-2 border-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.8)] flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 text-emerald-400">
                      <Database className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                  </div>
                </div>

                {/* 5. REST APIs / Code (Top Left: 288°) */}
                <div className="absolute top-[20%] left-[3%] -translate-x-1/2 -translate-y-1/2">
                  <div className="animate-orbit-counter-spin">
                    <div className="p-2 sm:p-2.5 rounded-xl sm:rounded-2xl bg-slate-900/95 border-2 border-indigo-400 shadow-[0_0_20px_rgba(99,102,241,0.8)] flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 text-indigo-400">
                      <Code2 className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* 2. NAME & TITLE CAPSULE */}
        {/* ======================================================== */}
        <div
          className={`mt-1 flex flex-col items-center justify-center transition-all duration-700 transform ${
            showName
              ? 'opacity-100 translate-y-0 filter blur-0'
              : 'opacity-0 translate-y-4 filter blur-sm pointer-events-none'
          }`}
        >
          <h1 className="text-2xl sm:text-4xl font-black tracking-widest text-white uppercase drop-shadow-[0_0_25px_rgba(255,255,255,0.7)] font-mono">
            ABHISHEK
          </h1>

          <p className="text-xs sm:text-sm font-semibold text-cyan-400 tracking-wider mt-0.5">
            Software Engineer
          </p>

          <p className="text-[10px] sm:text-xs font-mono text-purple-300/80 tracking-wide mt-0.5">
            Flutter & Backend-Integrated Mobile Applications
          </p>

          {/* Luminous Neon Underline */}
          <div className="w-36 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent my-1.5 shadow-[0_0_10px_#22d3ee]" />
        </div>

        {/* ======================================================== */}
        {/* 3. RAZOR-SHARP 3D FLOATING MOBILE APPS (ZERO BLUR!) */}
        {/* ======================================================== */}
        <div
          className={`w-full max-w-2xl py-2 flex items-center justify-center gap-3 sm:gap-6 transition-all duration-700 transform ${
            showPhoneShowcase
              ? 'opacity-100 scale-100 translate-y-0 filter blur-0 pointer-events-auto'
              : 'opacity-0 scale-75 translate-y-6 filter blur-sm pointer-events-none'
          }`}
        >
          {/* Phone 1 (Left): Chat App Screen (100% Crisp Retina!) */}
          <div className="animate-float-phone-left relative w-24 sm:w-36 h-40 sm:h-56 rounded-2xl sm:rounded-3xl border-2 border-slate-700 bg-slate-950 p-1 shadow-xl shadow-cyan-500/20">
            <div className="w-full h-full rounded-xl sm:rounded-2xl overflow-hidden relative bg-slate-900">
              <Image
                src={getAssetUrl('/images/phone-screen-chat.png')}
                alt="Real-Time Chat App"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 96px, 144px"
              />
              <div className="absolute bottom-1.5 inset-x-1.5 bg-black/85 backdrop-blur-sm rounded-lg p-0.5 text-[8px] font-mono font-bold text-cyan-300 text-center">
                Chat App
              </div>
            </div>
          </div>

          {/* Phone 2 (Center - Prominent): Loyalty Rewards App (100% Crisp Retina!) */}
          <div className="animate-float-phone-center relative w-28 sm:w-44 h-48 sm:h-64 rounded-2xl sm:rounded-3xl border-2 border-indigo-400 bg-slate-950 p-1.5 shadow-2xl shadow-indigo-500/40 z-20">
            <div className="w-full h-full rounded-xl sm:rounded-2xl overflow-hidden relative bg-slate-900">
              <Image
                src={getAssetUrl('/images/phone-screen-loyalty.png')}
                alt="Loyalty Rewards App"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 112px, 176px"
              />
              <div className="absolute bottom-2 inset-x-2 bg-indigo-950/90 border border-indigo-500/50 backdrop-blur-md rounded-lg p-1 text-[9px] font-mono font-bold text-white text-center shadow-lg">
                Loyalty Rewards
              </div>
            </div>
          </div>

          {/* Phone 3 (Right): Weather Forecast App (100% Crisp Retina!) */}
          <div className="animate-float-phone-right relative w-24 sm:w-36 h-40 sm:h-56 rounded-2xl sm:rounded-3xl border-2 border-slate-700 bg-slate-950 p-1 shadow-xl shadow-amber-500/20">
            <div className="w-full h-full rounded-xl sm:rounded-2xl overflow-hidden relative bg-slate-900">
              <Image
                src={getAssetUrl('/images/phone-screen-weather.png')}
                alt="Weather Forecast App"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 96px, 144px"
              />
              <div className="absolute bottom-1.5 inset-x-1.5 bg-black/85 backdrop-blur-sm rounded-lg p-0.5 text-[8px] font-mono font-bold text-amber-300 text-center">
                28° Sunny
              </div>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* 4. TAGLINE & LASER PROGRESS BAR */}
        {/* ======================================================== */}
        <div
          className={`flex flex-col items-center justify-center transition-all duration-500 transform ${
            showTagline
              ? 'opacity-100 translate-y-0 filter blur-0 pointer-events-auto'
              : 'opacity-0 translate-y-4 filter blur-sm pointer-events-none'
          }`}
        >
          <p className="text-xs sm:text-base font-extrabold tracking-wide uppercase bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 drop-shadow-[0_0_20px_rgba(168,85,247,0.7)]">
            Turning Ideas Into Real-World Mobile Applications
          </p>

          {/* Laser Progress Bar */}
          <div className="w-64 sm:w-80 h-2 rounded-full bg-slate-900/90 border border-slate-700/80 p-0.5 mt-2 overflow-hidden shadow-inner relative">
            <div
              className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 rounded-full transition-all duration-100 shadow-[0_0_15px_rgba(6,182,212,0.9)]"
              style={{ width: `${progressPct}%` }}
            />
          </div>
          <div className="flex items-center justify-between w-64 sm:w-80 text-[10px] font-mono text-slate-400 mt-1">
            <span>{progressPct < 100 ? 'Initializing Architecture...' : 'System Ready'}</span>
            <span className="text-cyan-400 font-bold">{progressPct}%</span>
          </div>
        </div>

        {/* ======================================================== */}
        {/* 5. FINALE CHECKMARK OVERLAY (Flashes cleanly at end) */}
        {/* ======================================================== */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center z-30 transition-all duration-500 transform ${
            showCheckmark
              ? 'opacity-100 scale-100 filter blur-0 pointer-events-auto'
              : 'opacity-0 scale-75 filter blur-md pointer-events-none'
          }`}
        >
          {/* Luminous Checkmark Ring with Shockwave Burst */}
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-cyan-400 via-indigo-500 to-emerald-400 p-1 shadow-[0_0_60px_rgba(6,182,212,0.9)] flex items-center justify-center animate-checkmark-pop">
            <div className="w-full h-full rounded-full bg-[#040612] flex items-center justify-center">
              <Check className="w-10 h-10 sm:w-12 sm:h-12 text-cyan-400 stroke-[3]" />
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-wide mt-3">
            Ready!
          </h2>
          <p className="text-sm sm:text-base font-semibold text-slate-300 mt-0.5">
            Welcome to my Portfolio
          </p>
        </div>
      </main>

      {/* Clean Futuristic Footer Watermark */}
      <footer className="relative w-full max-w-4xl px-4 sm:px-6 pb-3 sm:pb-5 flex items-center justify-center z-30 shrink-0">
        <div className="text-[10px] font-mono text-slate-500 tracking-wider">
          ✦ CYBER CORE v2.4 • MOBILE ARCHITECTURE • 60 FPS INTRO ✦
        </div>
      </footer>
    </div>
  );
}
