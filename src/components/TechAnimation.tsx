'use client';

import React from 'react';

export interface TechIconItem {
  id: string;
  name: string;
  badge: string;
  role: string;
  color: string;
  glowColor: string;
  delayClass: string;
  svg: React.ReactNode;
}

export const TECH_ICONS: TechIconItem[] = [
  {
    id: 'flutter',
    name: 'Flutter',
    badge: 'Core UI',
    role: 'Cross-Platform Framework',
    color: 'border-cyan-400/80 bg-cyan-500/10 text-cyan-400',
    glowColor: 'rgba(39, 170, 205, 0.45)',
    delayClass: 'animate-tech-float-1',
    svg: (
      /* Official Flutter Multi-Color Logo */
      <svg viewBox="0 0 128 128" className="w-5 h-5 shrink-0">
        <g fill="#3FB6D3">
          <path d="M12.3 64.2L76.3 0h39.4L32.1 83.6zM76.3 128h39.4L81.6 93.9l34.1-34.8H76.3L42.2 93.5z" />
        </g>
        <path fill="#27AACD" d="M81.6 93.9l-20-20-19.4 19.6 19.4 19.6z" />
        <path fill="#19599A" d="M115.7 128L81.6 93.9l-20 19.2L76.3 128z" />
        <path fill="#164A83" d="M61.6 113.1l30.8-8.4-10.8-10.8z" />
      </svg>
    ),
  },
  {
    id: 'firebase',
    name: 'Firebase',
    badge: 'Backend & Sync',
    role: 'Auth, Firestore, Cloud',
    color: 'border-amber-400/80 bg-amber-500/10 text-amber-400',
    glowColor: 'rgba(255, 160, 0, 0.45)',
    delayClass: 'animate-tech-float-2',
    svg: (
      /* Official Google Firebase Multi-Facet Flame */
      <svg viewBox="0 0 32 32" className="w-5 h-5 shrink-0">
        <path d="M19.62 11.558l-3.203 2.98-2.972-5.995 1.538-3.448c.4-.7 1.024-.692 1.414 0z" fill="#FFA000" />
        <path d="M13.445 8.543l2.972 5.995-11.97 11.135z" fill="#F57F17" />
        <path d="M23.123 7.003c.572-.55 1.164-.362 1.315.417l3.116 18.105-10.328 6.2c-.36.2-1.32.286-1.32.286s-.874-.104-1.207-.3L4.447 25.673z" fill="#FFCA28" />
        <path d="M13.445 8.543l-8.997 17.13L8.455.638c.148-.78.592-.855.988-.167z" fill="#FFA000" />
      </svg>
    ),
  },
  {
    id: 'swift',
    name: 'Swift',
    badge: 'iOS Native',
    role: 'Apple iOS Architecture',
    color: 'border-orange-400/80 bg-orange-500/10 text-orange-400',
    glowColor: 'rgba(240, 81, 56, 0.45)',
    delayClass: 'animate-tech-float-1',
    svg: (
      /* Official Apple Swift Bird Logo */
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 shrink-0">
        <defs>
          <linearGradient id="swift-official-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F05138" />
            <stop offset="100%" stopColor="#F88A25" />
          </linearGradient>
        </defs>
        <path
          d="M21.984 16.348c.056-.112.056-.224.112-.336 1.346-5.272-1.851-11.44-7.347-14.693 2.412 3.253 3.365 7.122 2.524 10.599-.056.28-.168.617-.28.897a5.173 5.173 0 0 1-.45-.28S11.104 9.17 5.273 3.282c-.169-.168 3.14 4.71 6.841 8.58-1.738-1.01-6.673-4.542-9.758-7.403.337.617.842 1.234 1.346 1.851 2.58 3.309 5.945 7.346 9.983 10.43-2.86 1.74-6.842 1.851-10.88 0-1.01-.448-1.85-1.009-2.804-1.682 1.682 2.636 4.318 5.048 7.459 6.337 3.757 1.627 7.57 1.515 10.318 0h.057c.112-.056.224-.112.336-.224 1.346-.673 3.982-1.402 5.44 1.402.392.785 1.121-2.86-1.626-6.225z"
          fill="url(#swift-official-grad)"
        />
      </svg>
    ),
  },
  {
    id: 'dart',
    name: 'Dart',
    badge: 'Language',
    role: 'AOT & JIT Optimized',
    color: 'border-sky-400/80 bg-sky-500/10 text-sky-400',
    glowColor: 'rgba(0, 196, 179, 0.45)',
    delayClass: 'animate-tech-float-3',
    svg: (
      /* Official Google Dart Multi-Color Logo */
      <svg viewBox="0 0 128 128" className="w-5 h-5 shrink-0">
        <path fill="#00c4b3" d="M35.2 34.9l-8.3-8.3v59.7l.1 2.8c0 1.3.2 2.8.7 4.3l65.6 23.1 16.3-7.2-74.4-74.4z" />
        <path d="M109.6 109.3l-16.3 7.2-65.4-23.1c1.3 4.8 4 10.1 7 13.2l21.3 21.2 47.6.1 5.8-18.6z" fill="#22d3c5" />
        <path fill="#0075c9" d="M1.7 65.1C-.4 67.3.7 72 4 75.5l14.7 14.8 9.2 3.3c-.3-1.5-.7-3-.7-4.3l-.1-2.8-.2-59.8m82.7 82.6l7.2-16.4-23-65.6c-1.5-.3-3-.6-4.3-.7l-2.9-.1-59.6.1" />
        <path d="M109.6 109.3l17.7-5.8V54.8l-20.4-20.5c-3-3-8.3-5.8-13.2-7l23.1 65.6" fill="#00a8e1" />
        <path fill="#00c4b3" d="M90.5 18.2L75.7 3.5c-3.4-3.4-8-4.4-10.4-2.3L26.9 26.6h59.5l2.9.1c1.3 0 2.8.2 4.3.7l-3.1-9.2z" />
      </svg>
    ),
  },
  {
    id: 'kotlin',
    name: 'Kotlin',
    badge: 'Modern JVM',
    role: 'Android & Native Logic',
    color: 'border-violet-400/80 bg-violet-500/10 text-violet-400',
    glowColor: 'rgba(168, 85, 247, 0.45)',
    delayClass: 'animate-tech-float-2',
    svg: (
      /* Official JetBrains Kotlin Logo */
      <svg viewBox="0 0 128 128" className="w-5 h-5 shrink-0">
        <defs>
          <linearGradient id="kotlin-official-grad" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#e44857" />
            <stop offset="47%" stopColor="#c711e1" />
            <stop offset="100%" stopColor="#7f52ff" />
          </linearGradient>
        </defs>
        <path fill="url(#kotlin-official-grad)" d="M112.484 112.484H15.516V15.516h96.968L64 64Zm0 0" />
      </svg>
    ),
  },
  {
    id: 'apple',
    name: 'Apple / iOS',
    badge: 'Ecosystem',
    role: 'HIG & App Store Standards',
    color: 'border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-white',
    glowColor: 'rgba(255, 255, 255, 0.3)',
    delayClass: 'animate-tech-float-3',
    svg: (
      /* Official Apple Logo */
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.38c.62-.75 1.04-1.8 0.92-2.85-.9.04-1.99.6-2.63 1.35-.57.65-1.06 1.72-.93 2.74 1.01.08 2.03-.5 2.64-1.24z" />
      </svg>
    ),
  },
  {
    id: 'android',
    name: 'Android',
    badge: 'Platform',
    role: 'Material Design & APIs',
    color: 'border-emerald-400/80 bg-emerald-500/10 text-emerald-400',
    glowColor: 'rgba(61, 220, 132, 0.45)',
    delayClass: 'animate-tech-float-1',
    svg: (
      /* Official Android Robot */
      <svg viewBox="0 0 24 24" fill="#3DDC84" className="w-5 h-5 shrink-0">
        <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.551 0 .9993.4482.9993.9993.0001.5511-.4483.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.411 13.8533 8.082 12 8.082s-3.5902.329-5.1368.8677L4.8409 5.4467a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3432-4.1021-2.6889-7.5743-6.1185-9.4396" />
      </svg>
    ),
  },
];

/**
 * Interactive Floating Tech Galaxy & Orbit
 * Uses authentic, exact official vector logos for Flutter, Firebase, Swift, Dart, Kotlin, Apple/iOS, Android
 */
export function TechAnimationCluster() {
  return (
    <div className="w-full flex flex-col justify-between h-full relative overflow-hidden py-0.5 select-none">
      {/* Background Ambient Glow & Orbital Ring */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-30 dark:opacity-40">
        <div className="w-64 h-32 rounded-full border border-dashed border-indigo-500/30 dark:border-cyan-500/30 -rotate-6 animate-pulse" />
      </div>

      {/* Grid of Floating Tech Icon Pods */}
      <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-2 relative z-10 my-auto">
        {TECH_ICONS.map((tech) => (
          <div
            key={tech.id}
            style={{
              boxShadow: `0 2px 12px -2px ${tech.glowColor}`,
            }}
            className={`group/pod p-1.5 sm:p-2 rounded-xl bg-white/95 dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-cyan-400 hover:scale-105 hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 cursor-pointer flex items-center gap-2 ${tech.delayClass}`}
          >
            {/* Tech Icon with Glow */}
            <div className={`w-8 h-8 rounded-lg border flex items-center justify-center shrink-0 p-1 ${tech.color} group-hover/pod:scale-110 transition-transform duration-300`}>
              {tech.svg}
            </div>

            {/* Tech Name & Badge */}
            <div className="min-w-0">
              <div className="flex items-center gap-1">
                <span className="text-[10.5px] font-bold text-slate-900 dark:text-white group-hover/pod:text-indigo-600 dark:group-hover/pod:text-cyan-300 transition-colors duration-300 truncate">
                  {tech.name}
                </span>
              </div>
              <p className="text-[8px] font-mono text-slate-500 dark:text-slate-400 truncate leading-tight">
                {tech.badge}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * Responsive Tech Stream Banner
 * Uses official vector logos, visible on wide screens to utilize empty space
 */
export function TechMarqueeStream() {
  return (
    <div className="hidden 2xl:flex items-center justify-between w-full px-4 py-1.5 rounded-xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-md select-none shrink-0 shadow-xs">
      <div className="flex items-center gap-2 text-[10px] font-mono font-bold text-slate-700 dark:text-slate-300 shrink-0">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
        <span>CORE MOBILE TECH STACK</span>
      </div>

      <div className="flex items-center gap-4 overflow-hidden">
        {TECH_ICONS.map((tech) => (
          <div
            key={tech.id}
            className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 text-[10px] font-semibold text-slate-800 dark:text-slate-200 hover:scale-105 transition-transform ${tech.delayClass}`}
          >
            <div className="w-3.5 h-3.5 shrink-0 flex items-center justify-center">
              {tech.svg}
            </div>
            <span>{tech.name}</span>
          </div>
        ))}
      </div>

      <span className="text-[9px] font-mono text-purple-600 dark:text-cyan-400 font-bold shrink-0">
        Production Tested ✦
      </span>
    </div>
  );
}
