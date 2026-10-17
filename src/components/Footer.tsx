'use client';

import React from 'react';
import { RefreshCw } from 'lucide-react';
import { usePortfolio } from '@/context/PortfolioContext';

export function Footer() {
  const { data, isSyncing, refresh } = usePortfolio();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800/80 bg-transparent py-6 text-xs text-slate-500">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left: Identity and copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
          <span className="font-semibold text-slate-300">
            {data.profile.name} © {currentYear}
          </span>
          <span className="hidden sm:inline text-slate-700">•</span>
          <span>Software Engineer (Flutter &amp; Backend-Integrated Applications)</span>
        </div>

        {/* Right: Data Sync Telemetry Badge */}
        <div className="flex items-center gap-3">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-800 bg-slate-900/80 text-[11px] font-mono text-slate-400"
            title={
              data.source === 'google_sheets'
                ? 'Content dynamically synchronized with live Google Sheets'
                : 'Using verified bundled static dataset (fail-safe offline ready)'
            }
          >
            <span
              className={`w-2 h-2 rounded-full ${
                data.source === 'google_sheets' ? 'bg-emerald-400 shadow-[0_0_8px_#10B981]' : 'bg-cyan-400 shadow-[0_0_8px_#00D2FF]'
              }`}
            />
            <span className="capitalize text-slate-300">
              {data.source === 'google_sheets' ? 'Sheets Synced' : 'Live Sheet Ready'}
            </span>
            <button
              type="button"
              onClick={() => refresh()}
              disabled={isSyncing}
              aria-label="Refresh content"
              className="hover:text-cyan-400 transition-colors p-0.5 cursor-pointer disabled:opacity-50"
            >
              <RefreshCw className={`w-3 h-3 ${isSyncing ? 'animate-spin text-cyan-400' : ''}`} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
