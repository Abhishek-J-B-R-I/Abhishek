'use client';

import React from 'react';
import { FolderGit2, ArrowUpRight, Sun, MessageSquare, QrCode } from 'lucide-react';
import { usePortfolio } from '@/context/PortfolioContext';

export function NeonProjects() {
  const { data } = usePortfolio();

  const getProjectVisual = (title: string) => {
    const lower = title.toLowerCase();
    if (lower.includes('loyalty') || lower.includes('qr') || lower.includes('reward')) {
      return {
        icon: QrCode,
        color: 'from-violet-600 via-purple-600 to-indigo-600 border-violet-400 text-white shadow-sm shadow-violet-500/25',
        isWeatherWidget: false,
      };
    }
    if (lower.includes('chat') || lower.includes('message')) {
      return {
        icon: MessageSquare,
        color: 'from-cyan-500 via-blue-600 to-indigo-600 border-cyan-400 text-white shadow-sm shadow-blue-500/25',
        isWeatherWidget: false,
      };
    }
    if (lower.includes('weather') || lower.includes('climate') || lower.includes('forecast')) {
      return {
        icon: Sun,
        color: 'from-amber-400 via-sky-500 to-blue-600 border-amber-300 text-white shadow-sm shadow-sky-500/25',
        isWeatherWidget: true,
      };
    }
    return {
      icon: FolderGit2,
      color: 'from-emerald-500 via-teal-600 to-blue-600 border-emerald-400 text-white shadow-sm shadow-teal-500/25',
      isWeatherWidget: false,
    };
  };

  const projects =
    data.projects && data.projects.length > 0
      ? data.projects.map((p) => {
          const visual = getProjectVisual(p.title);
          return {
            id: p.project_id,
            title: p.title,
            tags: p.technologies && p.technologies.length > 0 ? p.technologies : ['Flutter'],
            description: p.description,
            link: p.live_url || p.repo_url || '#contact',
            icon: visual.icon,
            color: visual.color,
            isWeatherWidget: visual.isWeatherWidget,
          };
        })
      : [
          {
            id: 'loyalty-rewards',
            title: 'Loyalty Rewards App',
            tags: ['Flutter', 'Firebase', 'REST API'],
            description: 'Scan QR codes, earn loyalty points and redeem rewards with smooth flow.',
            link: '#contact',
            icon: QrCode,
            color: 'from-violet-600 via-purple-600 to-indigo-600 border-violet-400 text-white shadow-sm shadow-violet-500/25',
            isWeatherWidget: false,
          },
          {
            id: 'realtime-chat',
            title: 'Real-Time Chat App',
            tags: ['Flutter', 'Firebase'],
            description: 'One-to-one messaging with real-time synchronization and cloud storage.',
            link: '#contact',
            icon: MessageSquare,
            color: 'from-cyan-500 via-blue-600 to-indigo-600 border-cyan-400 text-white shadow-sm shadow-blue-500/25',
            isWeatherWidget: false,
          },
          {
            id: 'weather-forecast',
            title: 'Weather Forecast App',
            tags: ['Flutter', 'REST API'],
            description: 'Live weather API integration with JSON parsing for temperature & forecasts.',
            link: '#contact',
            isWeatherWidget: true,
            color: 'from-amber-400 via-sky-500 to-blue-600 border-amber-300 text-white shadow-sm shadow-sky-500/25',
          },
        ];

  return (
    <div id="projects" className="neon-card neon-card-blue group rounded-2xl p-3.5 xl:p-4 h-full flex flex-col justify-between transition-all duration-300">
      <div>
        {/* Header */}
        <div className="flex items-center justify-between mb-2 pb-1.5 border-b border-slate-200 dark:border-slate-800/80">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/30 flex items-center justify-center text-blue-700 dark:text-blue-400 group-hover:scale-110 group-hover:border-blue-500 group-hover:bg-blue-100 dark:group-hover:bg-cyan-500/20 group-hover:shadow-[0_0_14px_rgba(6,182,212,0.4)] transition-all duration-500">
              <FolderGit2 className="w-3 h-3" />
            </div>
            <h2 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white tracking-wide group-hover:text-blue-700 dark:group-hover:text-cyan-200 transition-colors duration-500">
              Featured Projects
            </h2>
          </div>

          <a
            href="#projects"
            className="text-[10px] font-semibold text-blue-600 dark:text-cyan-400 hover:text-blue-700 dark:hover:text-cyan-300 group-hover:translate-x-1 flex items-center gap-1 font-mono transition-transform duration-500"
          >
            <span>View All</span>
            <span>→</span>
          </a>
        </div>

        {/* 3 Project Rows */}
        <div className="space-y-2">
          {projects.map((proj) => {
            const Icon = proj.icon;
            return (
              <div
                key={proj.id}
                className="group/proj p-2 rounded-xl bg-slate-50/90 hover:bg-white dark:bg-slate-900/60 dark:hover:bg-slate-800/90 border border-slate-200/90 dark:border-slate-800/80 hover:border-blue-400 dark:hover:border-cyan-500/60 hover:scale-[1.015] shadow-xs hover:shadow-md dark:hover:shadow-[0_0_16px_rgba(6,182,212,0.25)] flex items-center gap-2.5 transition-all duration-300 cursor-pointer"
              >
                {/* Visual Vibrant Gradient Widget */}
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${proj.color} border shrink-0 flex flex-col items-center justify-center p-1 relative overflow-hidden group-hover/proj:scale-105 shadow-sm transition-transform duration-300`}>
                  {proj.isWeatherWidget ? (
                    <div className="text-center">
                      <div className="text-[10.5px] font-black text-white leading-none">28°</div>
                      <div className="text-[7.5px] text-amber-100 font-mono font-bold">Sunny</div>
                    </div>
                  ) : (
                    Icon && <Icon className="w-4 h-4 text-white" />
                  )}
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1">
                    <h3 className="text-xs font-bold text-slate-900 dark:text-white group-hover/proj:text-blue-700 dark:group-hover/proj:text-cyan-300 transition-colors duration-300 truncate">
                      {proj.title}
                    </h3>
                    <a
                      href={proj.link}
                      aria-label={`View ${proj.title}`}
                      className="w-5 h-5 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-400 group-hover/proj:bg-blue-600 dark:group-hover/proj:bg-cyan-500 group-hover/proj:text-white group-hover/proj:border-transparent group-hover/proj:translate-x-0.5 group-hover/proj:-translate-y-0.5 transition-all duration-300 shrink-0"
                    >
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>

                  <div className="flex flex-wrap gap-1 my-0.5">
                    {proj.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-1.5 py-0.2 rounded-md text-[8.5px] font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-cyan-300 border border-indigo-200/80 dark:border-indigo-900/50 group-hover/proj:border-indigo-400 dark:group-hover/proj:border-cyan-600 transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-[9.5px] text-slate-600 dark:text-slate-400 group-hover/proj:text-slate-900 dark:group-hover/proj:text-slate-200 line-clamp-1 leading-tight transition-colors duration-300">
                    {proj.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="pt-1.5 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-[9px] text-slate-500 dark:text-slate-400 font-mono">
        <span>Production Flutter Apps</span>
        <span className="text-blue-700 dark:text-cyan-400 group-hover:text-blue-600 dark:group-hover:text-cyan-300 font-bold transition-all duration-500">Mobile Ready</span>
      </div>
    </div>
  );
}
