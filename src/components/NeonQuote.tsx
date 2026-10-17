'use client';

import React from 'react';
import { Smartphone, ShieldCheck, Zap, GitCommit } from 'lucide-react';

export function NeonQuote() {
  const highlights = [
    {
      icon: Smartphone,
      title: 'Production Flutter Apps',
      desc: 'Pixel-perfect UI, responsive across phones, tablets & web.',
      color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
    },
    {
      icon: Zap,
      title: 'Real-Time Sync & APIs',
      desc: 'Firebase, WebSockets, RESTful endpoints & JSON caching.',
      color: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
    },
    {
      icon: ShieldCheck,
      title: 'Architecture & Testing',
      desc: 'BLoC state management, Clean Architecture, unit testing.',
      color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    },
    {
      icon: GitCommit,
      title: 'CI/CD & Iterative Delivery',
      desc: 'Git version control, code reviews & release pipelines.',
      color: 'text-pink-400 bg-pink-500/10 border-pink-500/20',
    },
  ];

  return (
    <div className="neon-card neon-card-purple rounded-2xl p-3 sm:p-3.5 h-full flex flex-col justify-between relative overflow-hidden group">
      <div>
        {/* Quote Headline */}
        <div className="mb-2 pb-1.5 border-b border-slate-800/80">
          <div className="flex items-center gap-1.5 text-cyan-400 font-bold">
            <span className="text-xl font-serif leading-none select-none group-hover:scale-125 transition-transform duration-500">“</span>
            <h2 className="text-xs sm:text-sm font-black text-white leading-tight group-hover:text-purple-200 transition-colors duration-500">
              Turning Ideas Into{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400">
                Real-World Applications
              </span>
            </h2>
          </div>
        </div>

        {/* 4 Engineering Capability Tiles */}
        <div className="grid grid-cols-2 gap-1.5">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-1.5 rounded-xl bg-slate-900/60 border border-slate-800/80 group-hover:border-slate-700/80 group-hover:bg-slate-900/90 hover:!border-cyan-400/60 hover:!bg-slate-800/90 hover:scale-[1.03] hover:shadow-[0_0_14px_rgba(6,182,212,0.25)] flex items-start gap-2 transition-all duration-300 cursor-default"
              >
                <div
                  className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 mt-0.5 ${item.color} group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-2.5 h-2.5" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-[10px] font-bold text-white group-hover:text-cyan-200 transition-colors duration-300 truncate">
                    {item.title}
                  </h3>
                  <p className="text-[8.5px] text-slate-400 group-hover:text-slate-300 line-clamp-1 leading-tight transition-colors duration-300">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer Pill */}
      <div className="pt-1.5 border-t border-slate-800/80 flex items-center justify-between text-[9px] font-mono text-slate-400">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span>Engineering Mindset • Clean Code</span>
        </div>
        <span className="text-purple-400 group-hover:text-purple-300 group-hover:shadow-[0_0_12px_rgba(168,85,247,0.4)] font-bold transition-all duration-500">100% Production Code</span>
      </div>
    </div>
  );
}
