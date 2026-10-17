'use client';

import React from 'react';
import { User } from 'lucide-react';
import { usePortfolio } from '@/context/PortfolioContext';

export function NeonAbout() {
  const { data } = usePortfolio();
  const { profile } = data;

  return (
    <div id="about" className="neon-card neon-card-cyan group rounded-2xl p-3.5 xl:p-4 h-full flex flex-col justify-between">
      <div>
        {/* Header */}
        <div className="flex items-center gap-2 mb-2 pb-1.5 border-b border-slate-800/80">
          <div className="w-6 h-6 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:border-cyan-400 group-hover:bg-cyan-500/20 group-hover:shadow-[0_0_14px_rgba(6,182,212,0.4)] transition-all duration-500">
            <User className="w-3 h-3" />
          </div>
          <h2 className="text-xs sm:text-sm font-bold text-white tracking-wide group-hover:text-cyan-200 transition-colors duration-500">
            About Me
          </h2>
        </div>

        {/* Content */}
        <p className="text-[11px] text-slate-300 group-hover:text-slate-100 leading-relaxed font-sans transition-colors duration-500">
          {profile.summary ||
            'Software engineer with 2+ years of experience building and maintaining production applications end to end, from UI to REST API and cloud backend integration. Strong foundation in data structures, algorithms, OOP and DBMS, with working knowledge of C/C++, Java and Python. Experienced with real-time data synchronization, client-server communication over HTTP/REST, authentication, and payment & notification workflows.'}
        </p>
      </div>

      <div className="pt-1.5 border-t border-slate-800/80 flex items-center justify-between text-[9px] text-slate-400 font-mono">
        <span>Architecture: BLoC • Cloud</span>
        <span className="text-cyan-400 group-hover:text-cyan-300 group-hover:shadow-[0_0_12px_rgba(6,182,212,0.4)] font-bold transition-all duration-500">2+ YOE Verified</span>
      </div>
    </div>
  );
}
