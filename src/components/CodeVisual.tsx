'use client';

import React from 'react';
import { Smartphone, Layers, Cloud, Database, Cpu, CheckCircle2 } from 'lucide-react';

export function CodeVisual() {
  return (
    <div
      aria-hidden="true"
      className="relative w-full max-w-lg mx-auto lg:max-w-none select-none"
    >
      {/* Background glow accent */}
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-brand/20 via-brand-teal/20 to-brand/20 blur-xl opacity-75 dark:opacity-50 pointer-events-none" />

      {/* Editor container */}
      <div className="relative rounded-xl border border-border bg-page-surface shadow-subtle overflow-hidden">
        {/* Terminal Header Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-page/60 border-b border-border">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-400/80" />
            <div className="w-3 h-3 rounded-full bg-amber-400/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-400/80" />
          </div>
          <div className="flex items-center gap-1.5 font-mono text-xs text-ink-muted">
            <Smartphone className="w-3.5 h-3.5 text-brand" />
            <span>loyalty_rewards_bloc.dart</span>
          </div>
          <div className="flex items-center gap-1 font-mono text-[10px] text-emerald-600 dark:text-emerald-400 font-medium">
            <CheckCircle2 className="w-3 h-3" />
            <span>Ready</span>
          </div>
        </div>

        {/* Code Content */}
        <div className="p-4 sm:p-5 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto text-ink">
          <div className="space-y-1">
            <div className="text-ink-subtle">
              <span className="text-brand font-semibold">import</span> &apos;package:flutter_bloc/flutter_bloc.dart&apos;;
            </div>
            <div className="text-ink-subtle">
              <span className="text-brand font-semibold">import</span> &apos;package:firebase_auth/firebase_auth.dart&apos;;
            </div>
            <div className="py-1 text-ink-subtle italic">// Architecture: Clean State Management & Cloud Integration</div>

            <div>
              <span className="text-brand font-semibold">class</span>{' '}
              <span className="text-brand-teal font-semibold">LoyaltyRewardBloc</span>{' '}
              <span className="text-brand font-semibold">extends</span>{' '}
              <span className="text-ink">Bloc&lt;RewardEvent, RewardState&gt;</span> &#123;
            </div>

            <div className="pl-4">
              <span className="text-ink-muted">LoyaltyRewardBloc() : </span>
              <span className="text-brand font-semibold">super</span>(RewardInitial()) &#123;
            </div>

            <div className="pl-8 text-ink">
              on&lt;<span className="text-brand-teal">ScanQrCodeEvent</span>&gt;((event, emit) <span className="text-brand font-semibold">async</span> &#123;
            </div>

            <div className="pl-12 text-ink-muted">
              emit(RewardProcessing());
            </div>

            <div className="pl-12">
              <span className="text-brand font-semibold">final</span> result ={' '}
              <span className="text-brand font-semibold">await</span> restApi.claimPoints(event.qrHash);
            </div>

            <div className="pl-12">
              <span className="text-brand font-semibold">await</span> firestore.collection(<span className="text-emerald-600 dark:text-emerald-400">&apos;ledger&apos;</span>).add(result);
            </div>

            <div className="pl-12 text-emerald-600 dark:text-emerald-400 font-medium">
              emit(RewardClaimed(points: result.points));
            </div>

            <div className="pl-8">&#125;);</div>
            <div className="pl-4">&#125;</div>
            <div>&#125;</div>
          </div>
        </div>

        {/* Live System Pipeline Telemetry Cards */}
        <div className="grid grid-cols-3 gap-2 p-3 bg-page/40 border-t border-border text-xs">
          <div className="flex flex-col items-center p-2 rounded-lg bg-page-surface border border-border/70 text-center">
            <Layers className="w-4 h-4 text-brand mb-1" />
            <span className="font-semibold text-ink text-[11px]">Flutter BLoC</span>
            <span className="text-[10px] text-ink-muted">Reactive UI</span>
          </div>
          <div className="flex flex-col items-center p-2 rounded-lg bg-page-surface border border-border/70 text-center">
            <Cloud className="w-4 h-4 text-brand-teal mb-1" />
            <span className="font-semibold text-ink text-[11px]">Firebase</span>
            <span className="text-[10px] text-ink-muted">Auth & Sync</span>
          </div>
          <div className="flex flex-col items-center p-2 rounded-lg bg-page-surface border border-border/70 text-center">
            <Database className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mb-1" />
            <span className="font-semibold text-ink text-[11px]">REST / JSON</span>
            <span className="text-[10px] text-ink-muted">Cloud APIs</span>
          </div>
        </div>
      </div>
    </div>
  );
}
