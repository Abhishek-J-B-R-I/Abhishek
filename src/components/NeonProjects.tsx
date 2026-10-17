'use client';

import React from 'react';
import { FolderGit2, ArrowUpRight, Sun, MessageSquare, QrCode } from 'lucide-react';

export function NeonProjects() {
  const projects = [
    {
      id: 'loyalty-rewards',
      title: 'Loyalty Rewards App',
      tags: ['Flutter', 'Firebase', 'REST API'],
      description: 'Scan QR codes, earn loyalty points and redeem rewards with smooth flow.',
      link: '#contact',
      icon: QrCode,
      color: 'from-purple-600/40 via-indigo-600/30 to-purple-800/40 border-purple-500/30 text-purple-300',
    },
    {
      id: 'realtime-chat',
      title: 'Real-Time Chat App',
      tags: ['Flutter', 'Firebase'],
      description: 'One-to-one messaging with real-time synchronization and cloud storage.',
      link: '#contact',
      icon: MessageSquare,
      color: 'from-cyan-600/40 via-blue-600/30 to-indigo-800/40 border-cyan-500/30 text-cyan-300',
    },
    {
      id: 'weather-forecast',
      title: 'Weather Forecast App',
      tags: ['Flutter', 'REST API'],
      description: 'Live weather API integration with JSON parsing for temperature & forecasts.',
      link: '#contact',
      isWeatherWidget: true,
      color: 'from-sky-600/40 via-blue-600/30 to-sky-800/40 border-sky-500/30 text-sky-300',
    },
  ];

  return (
    <div id="projects" className="neon-card neon-card-blue group rounded-2xl p-3.5 xl:p-4 h-full flex flex-col justify-between">
      <div>
        {/* Header */}
        <div className="flex items-center justify-between mb-2 pb-1.5 border-b border-slate-800/80">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-110 group-hover:border-cyan-400 group-hover:bg-cyan-500/20 group-hover:shadow-[0_0_14px_rgba(6,182,212,0.4)] transition-all duration-500">
              <FolderGit2 className="w-3 h-3" />
            </div>
            <h2 className="text-xs sm:text-sm font-bold text-white tracking-wide group-hover:text-cyan-200 transition-colors duration-500">
              Featured Projects
            </h2>
          </div>

          <a
            href="#projects"
            className="text-[10px] font-semibold text-cyan-400 hover:text-cyan-300 group-hover:translate-x-1 flex items-center gap-1 font-mono transition-transform duration-500"
          >
            <span>View All</span>
            <span>→</span>
          </a>
        </div>

        {/* 3 Project Rows */}
        <div className="space-y-1.5">
          {projects.map((proj) => {
            const Icon = proj.icon;
            return (
              <div
                key={proj.id}
                className="group/proj p-1.5 rounded-xl bg-slate-900/60 border border-slate-800/80 group-hover:border-slate-700/80 group-hover:bg-slate-900/90 hover:!border-cyan-500/60 hover:!bg-slate-800/90 hover:scale-[1.015] hover:shadow-[0_0_16px_rgba(6,182,212,0.25)] flex items-center gap-2.5 transition-all duration-300 cursor-pointer"
              >
                {/* Visual Widget */}
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br border shrink-0 flex flex-col items-center justify-center p-1 relative overflow-hidden group-hover/proj:scale-105 transition-transform duration-300">
                  {proj.isWeatherWidget ? (
                    <div className="text-center">
                      <div className="text-[10px] font-black text-white leading-none">28°</div>
                      <div className="text-[7px] text-cyan-300 font-mono">Sunny</div>
                    </div>
                  ) : (
                    Icon && <Icon className="w-3.5 h-3.5 text-white" />
                  )}
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1">
                    <h3 className="text-[11px] font-bold text-white group-hover/proj:text-cyan-300 transition-colors duration-300 truncate">
                      {proj.title}
                    </h3>
                    <a
                      href={proj.link}
                      aria-label={`View ${proj.title}`}
                      className="w-4.5 h-4.5 rounded-full bg-slate-800/80 flex items-center justify-center text-slate-400 group-hover/proj:bg-cyan-500 group-hover/proj:text-white group-hover/proj:translate-x-0.5 group-hover/proj:-translate-y-0.5 transition-all duration-300 shrink-0"
                    >
                      <ArrowUpRight className="w-2.5 h-2.5" />
                    </a>
                  </div>

                  <div className="flex flex-wrap gap-1 my-0.5">
                    {proj.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-1 py-0.1 rounded text-[8px] font-mono bg-indigo-950/60 text-cyan-300 border border-indigo-900/50 group-hover/proj:border-cyan-600 transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-[9px] text-slate-400 group-hover/proj:text-slate-300 transition-colors duration-300 truncate">
                    {proj.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="pt-1.5 border-t border-slate-800/80 flex items-center justify-between text-[9px] text-slate-400 font-mono">
        <span>Production Flutter Apps</span>
        <span className="text-cyan-400 group-hover:text-cyan-300 group-hover:shadow-[0_0_12px_rgba(6,182,212,0.4)] font-bold transition-all duration-500">Mobile Ready</span>
      </div>
    </div>
  );
}
