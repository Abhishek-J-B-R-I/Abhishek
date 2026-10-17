'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { usePortfolio } from '@/context/PortfolioContext';

export function Experience() {
  const { data } = usePortfolio();

  return (
    <div className="flex flex-col justify-between">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Experience
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            My professional journey
          </p>
        </div>
        <a
          href="#experience"
          className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 flex items-center gap-1"
        >
          <span>View Full Timeline</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Vertical Timeline */}
      <div className="relative pl-6 space-y-6 before:absolute before:left-2 before:top-2.5 before:bottom-2.5 before:w-0.5 before:bg-indigo-100 dark:before:bg-indigo-950">
        {/* Role 1 */}
        <div className="relative group">
          {/* Node */}
          <div className="absolute -left-6 top-1.5 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-4 border-indigo-600 shadow-xs" />

          <div>
            <div className="flex flex-wrap items-center justify-between gap-1 mb-0.5">
              <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                Associate Software Engineer (Flutter)
              </h3>
              <span className="text-[11px] font-medium text-slate-400 dark:text-slate-400">
                Mar 2025 - Present
              </span>
            </div>
            <div className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-1.5">
              VCQRU, Gurugram
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Building and maintaining production applications, integrating REST APIs &amp; Firebase, and collaborating with cross-functional teams.
            </p>
          </div>
        </div>

        {/* Role 2 */}
        <div className="relative group">
          {/* Node */}
          <div className="absolute -left-6 top-1.5 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-4 border-slate-300 dark:border-slate-600 shadow-xs" />

          <div>
            <div className="flex flex-wrap items-center justify-between gap-1 mb-0.5">
              <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                Flutter Intern (UI/UX)
              </h3>
              <span className="text-[11px] font-medium text-slate-400 dark:text-slate-400">
                Aug 2024 - Mar 2025
              </span>
            </div>
            <div className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-1.5">
              VCQRU, Gurugram
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Translated design mockups into functional Flutter interfaces and improved app usability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
