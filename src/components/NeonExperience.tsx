'use client';

import React from 'react';
import { Briefcase } from 'lucide-react';

export function NeonExperience() {
  const roles = [
    {
      title: 'Associate Software Engineer (Flutter)',
      company: 'VCQRU, Gurugram',
      period: 'Mar 2025 - Present',
      bullets: [
        'Develop and maintain production applications end to end.',
        'Integrate REST APIs and Firebase (auth, payments, notifications).',
        'Built React.js dashboard and Python automation tool.',
        'Debug and improve stability of live features.',
      ],
      nodeColor: 'border-purple-500 shadow-neonPurple',
    },
    {
      title: 'Flutter Intern (UI/UX)',
      company: 'VCQRU, Gurugram',
      period: 'Aug 2024 - Mar 2025',
      bullets: [
        'Converted design mockups to responsive Flutter UI.',
        'Fixed UI bugs and worked in Git-based iterative delivery.',
      ],
      nodeColor: 'border-cyan-400 shadow-neonCyan',
    },
  ];

  return (
    <div id="experience" className="neon-card neon-card-indigo group rounded-2xl p-3.5 xl:p-4 h-full flex flex-col justify-between">
      <div>
        {/* Header */}
        <div className="flex items-center gap-2 mb-2 pb-1.5 border-b border-slate-800/80">
          <div className="w-6 h-6 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-110 group-hover:border-indigo-400 group-hover:bg-indigo-500/20 group-hover:shadow-[0_0_14px_rgba(99,102,241,0.4)] transition-all duration-500">
            <Briefcase className="w-3 h-3" />
          </div>
          <h2 className="text-xs sm:text-sm font-bold text-white tracking-wide group-hover:text-indigo-200 transition-colors duration-500">
            Experience
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative pl-4 space-y-2 before:absolute before:left-1 before:top-1.5 before:bottom-1.5 before:w-0.5 before:bg-slate-800 group-hover:before:bg-indigo-500/50 before:transition-colors before:duration-500">
          {roles.map((role, idx) => (
            <div key={idx} className="relative group/role">
              <div
                className={`absolute -left-4 top-1 w-2.5 h-2.5 rounded-full bg-slate-950 border-2 ${role.nodeColor} group-hover:scale-125 group-hover:shadow-[0_0_14px_rgba(168,85,247,0.7)] transition-all duration-500`}
              />

              <div>
                <div className="flex items-center justify-between gap-1">
                  <h3 className="text-[11px] font-bold text-white group-hover:text-cyan-200 transition-colors duration-500 leading-tight">
                    {role.title}
                  </h3>
                  <span className="text-[9px] font-mono text-slate-400 group-hover:text-slate-300 transition-colors duration-500 shrink-0">
                    {role.period}
                  </span>
                </div>

                <div className="text-[10px] font-medium text-cyan-400 mb-0.5">
                  {role.company}
                </div>

                <ul className="space-y-0.5">
                  {role.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="text-[10px] text-slate-300 group-hover:text-slate-200 transition-colors duration-500 flex items-start gap-1 leading-snug">
                      <span className="text-purple-400 group-hover:text-pink-400 group-hover:scale-110 font-bold transition-all duration-500">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-1.5 border-t border-slate-800/80 flex items-center justify-between text-[9px] text-slate-400 font-mono">
        <span>VCQRU Product Engineering</span>
        <span className="text-purple-400 group-hover:text-purple-300 group-hover:shadow-[0_0_12px_rgba(168,85,247,0.4)] font-bold transition-all duration-500">Shipped in Production</span>
      </div>
    </div>
  );
}
