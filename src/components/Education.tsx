'use client';

import React from 'react';
import { GraduationCap } from 'lucide-react';
import { usePortfolio } from '@/context/PortfolioContext';

export function Education() {
  const { data } = usePortfolio();

  return (
    <section id="education" aria-labelledby="education-heading" className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="education-heading" className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
          Education
        </h2>

        {/* Education Card */}
        <div className="bg-white dark:bg-slate-800/80 rounded-2xl border border-slate-100 dark:border-slate-700/80 shadow-card p-5 sm:p-6 flex items-center justify-between gap-4 hover:shadow-cardHover transition-all duration-200">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-purple-50 dark:bg-purple-950/60 border border-purple-100 dark:border-purple-900/60 flex items-center justify-center text-purple-600 dark:text-purple-400 shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                Master of Computer Applications (MCA)
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                Gurugram University
              </p>
            </div>
          </div>

          <div className="text-xs sm:text-sm font-semibold text-slate-400 dark:text-slate-400 font-mono">
            2025
          </div>
        </div>
      </div>
    </section>
  );
}
