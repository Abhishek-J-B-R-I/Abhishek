'use client';

import React from 'react';
import { User } from 'lucide-react';
import { usePortfolio } from '@/context/PortfolioContext';

export function NeonAbout() {
  const { data } = usePortfolio();
  const { profile } = data;

  return (
    <div id="about" className="neon-card neon-card-cyan group rounded-2xl p-2.5 sm:p-3 flex flex-col justify-between transition-all duration-300">
      <div>
        {/* Header */}
        <div className="flex items-center gap-2 mb-1.5 pb-1 border-b border-slate-200 dark:border-slate-800/80">
          <div className="w-5 h-5 rounded-lg bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/30 flex items-center justify-center text-cyan-700 dark:text-cyan-400 group-hover:scale-110 group-hover:border-cyan-500 group-hover:bg-cyan-100 dark:group-hover:bg-cyan-500/20 group-hover:shadow-[0_0_14px_rgba(6,182,212,0.4)] transition-all duration-500 shrink-0">
            <User className="w-2.5 h-2.5" />
          </div>
          <h2 className="text-xs sm:text-[13px] font-bold text-slate-900 dark:text-white tracking-wide group-hover:text-cyan-700 dark:group-hover:text-cyan-200 transition-colors duration-500">
            About Me
          </h2>
        </div>

        {/* Summary & Core Pillars */}
        <div className="space-y-1.5 font-sans">
          <p className="text-[10px] sm:text-[10.5px] text-slate-700 dark:text-slate-200 group-hover:text-slate-900 dark:group-hover:text-white leading-relaxed transition-colors duration-500">
            Software engineer with 2+ years of experience building and maintaining production applications end to end, from UI to REST API and cloud backend integration.
          </p>
          <div className="space-y-0.5 text-[9px] sm:text-[9.5px] text-slate-600 dark:text-slate-300">
            <div className="flex items-start gap-1.5">
              <span className="text-cyan-600 dark:text-cyan-400 font-bold shrink-0 mt-0.5">▸</span>
              <span><strong>Core CS:</strong> Strong foundation in Data Structures, Algorithms, OOP & DBMS.</span>
            </div>
            <div className="flex items-start gap-1.5">
              <span className="text-cyan-600 dark:text-cyan-400 font-bold shrink-0 mt-0.5">▸</span>
              <span><strong>Systems:</strong> RESTful APIs, real-time Firebase sync, payment & notification flows.</span>
            </div>
            <div className="flex items-start gap-1.5">
              <span className="text-cyan-600 dark:text-cyan-400 font-bold shrink-0 mt-0.5">▸</span>
              <span><strong>Delivery:</strong> Comfortable owning modules independently & resolving live issues.</span>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-1.5 mt-2 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-[8.5px] text-slate-500 dark:text-slate-400 font-mono">
        <span>Architecture: BLoC • Cloud</span>
        <span className="text-cyan-700 dark:text-cyan-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 font-bold transition-all duration-500">2+ YOE Verified</span>
      </div>
    </div>
  );
}
