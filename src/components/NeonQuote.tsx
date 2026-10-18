'use client';

import React from 'react';
import { TechAnimationCluster } from '@/components/TechAnimation';

export function NeonQuote() {
  return (
    <div className="neon-card neon-card-purple rounded-2xl p-2.5 sm:p-3 flex flex-col justify-between h-full relative overflow-hidden group transition-all duration-300">
      <div className="flex flex-col flex-1 justify-between">
        {/* Quote Headline & Mobile Ecosystem Badge */}
        <div className="mb-1.5 pb-1 border-b border-slate-200 dark:border-slate-800/80 flex items-center justify-between gap-1">
          <div className="flex items-center gap-1.5 text-indigo-600 dark:text-cyan-400 font-bold min-w-0">
            <span className="text-lg font-serif leading-none select-none group-hover:scale-125 transition-transform duration-500 shrink-0">“</span>
            <h2 className="text-xs sm:text-[13px] font-black text-slate-900 dark:text-white leading-tight group-hover:text-purple-700 dark:group-hover:text-purple-200 transition-colors duration-500 truncate">
              Turning Ideas Into{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 dark:from-purple-400 dark:via-pink-400 dark:to-indigo-400">
                Real-World Applications
              </span>
            </h2>
          </div>

          <span className="text-[8.5px] font-mono text-indigo-600 dark:text-cyan-400 font-semibold px-2 py-0.5 rounded-full bg-indigo-50 dark:bg-cyan-500/10 border border-indigo-200 dark:border-cyan-500/30 shrink-0">
            Tech Ecosystem
          </span>
        </div>

        {/* Dynamic Floating Tech Icon Animation Cluster (Firebase, Flutter, Kotlin, Swift, Apple/iOS, Dart, Android) */}
        <div className="flex-1 my-1">
          <TechAnimationCluster />
        </div>

        {/* Engineering Principles Ribbon */}
        <div className="flex flex-wrap items-center justify-between gap-1 mt-1 pt-1 border-t border-slate-100 dark:border-slate-800/60 text-[8.5px] font-mono text-slate-600 dark:text-slate-300">
          <span className="px-1.5 py-0.5 rounded bg-slate-100/90 dark:bg-slate-800/70 border border-slate-200/60 dark:border-slate-700/60">✦ BLoC Architecture</span>
          <span className="px-1.5 py-0.5 rounded bg-slate-100/90 dark:bg-slate-800/70 border border-slate-200/60 dark:border-slate-700/60">✦ Real-Time Sync</span>
          <span className="px-1.5 py-0.5 rounded bg-slate-100/90 dark:bg-slate-800/70 border border-slate-200/60 dark:border-slate-700/60">✦ Native iOS & Android</span>
          <span className="px-1.5 py-0.5 rounded bg-slate-100/90 dark:bg-slate-800/70 border border-slate-200/60 dark:border-slate-700/60">✦ CI/CD Delivery</span>
        </div>
      </div>

      {/* Footer Pill */}
      <div className="pt-1 mt-1 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-[8.5px] font-mono text-slate-500 dark:text-slate-400">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-cyan-400 animate-pulse" />
          <span>Engineering Mindset • Clean Code</span>
        </div>
        <span className="text-purple-700 dark:text-purple-400 group-hover:text-purple-600 dark:group-hover:text-purple-300 font-bold transition-all duration-500">100% Production Code</span>
      </div>
    </div>
  );
}
