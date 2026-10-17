'use client';

import React from 'react';
import { Database, ShieldCheck, RefreshCw } from 'lucide-react';
import { usePortfolio } from '@/context/PortfolioContext';

export function Footer() {
  const { data, isSyncing, refresh } = usePortfolio();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-page py-10 text-xs text-ink-muted">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Identity and copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
          <span className="font-semibold text-ink">
            {data.profile.name} © {currentYear}
          </span>
          <span className="hidden sm:inline text-border">•</span>
          <span>Software Engineer (Flutter & Backend-Integrated Applications)</span>
        </div>

        {/* Right: Data Sync Telemetry Badge */}
        <div className="flex items-center gap-3">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-page-surface text-[11px] font-mono text-ink-subtle"
            title={
              data.source === 'google_sheets'
                ? 'Content dynamically synchronized with live Google Sheets'
                : 'Using verified bundled static dataset (fail-safe offline ready)'
            }
          >
            <span
              className={`w-2 h-2 rounded-full ${
                data.source === 'google_sheets' ? 'bg-emerald-500' : 'bg-brand'
              }`}
            />
            <span className="capitalize">
              {data.source === 'google_sheets' ? 'Sheets Synced' : 'Static Fallback Ready'}
            </span>
            <button
              type="button"
              onClick={() => refresh()}
              disabled={isSyncing}
              aria-label="Refresh content"
              className="hover:text-brand transition-colors p-0.5 cursor-pointer disabled:opacity-50"
            >
              <RefreshCw className={`w-3 h-3 ${isSyncing ? 'animate-spin text-brand' : ''}`} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
