'use client';

import React from 'react';
import { LayoutGrid, Code2, Cpu, Server, Database, Smartphone, Wrench } from 'lucide-react';

interface SkillRow {
  category: string;
  icon: React.ElementType;
  iconColor: string;
  skills: string[];
}

export function NeonSkills() {
  const skillRows: SkillRow[] = [
    {
      category: 'Languages',
      icon: Code2,
      iconColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
      skills: ['Dart', 'Python', 'Java', 'C/C++'],
    },
    {
      category: 'Core CS',
      icon: Cpu,
      iconColor: 'text-rose-400 bg-rose-500/10 border-rose-500/20',
      skills: ['DSA', 'Algorithms', 'OOP', 'DBMS'],
    },
    {
      category: 'Backend & APIs',
      icon: Server,
      iconColor: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
      skills: ['REST APIs', 'HTTP', 'JSON', 'Firebase', 'Node.js'],
    },
    {
      category: 'Databases',
      icon: Database,
      iconColor: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
      skills: ['MySQL', 'MongoDB', 'Firestore'],
    },
    {
      category: 'App Development',
      icon: Smartphone,
      iconColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
      skills: ['Flutter', 'BLoC', 'Provider', 'React.js'],
    },
    {
      category: 'Tools & Practices',
      icon: Wrench,
      iconColor: 'text-orange-400 bg-orange-500/10 border-orange-500/20',
      skills: ['Git', 'Version Control', 'Debugging', 'AI-assisted'],
    },
  ];

  return (
    <div id="skills" className="neon-card neon-card-purple group rounded-2xl p-3.5 xl:p-4 h-full flex flex-col justify-between">
      <div>
        {/* Header */}
        <div className="flex items-center gap-2 mb-2 pb-1.5 border-b border-slate-800/80">
          <div className="w-6 h-6 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:scale-110 group-hover:border-purple-400 group-hover:bg-purple-500/20 group-hover:shadow-[0_0_14px_rgba(168,85,247,0.4)] transition-all duration-500">
            <LayoutGrid className="w-3 h-3" />
          </div>
          <h2 className="text-xs sm:text-sm font-bold text-white tracking-wide group-hover:text-purple-200 transition-colors duration-500">
            Skills
          </h2>
        </div>

        {/* 6 Category Rows */}
        <div className="space-y-1.5">
          {skillRows.map((row, idx) => {
            const Icon = row.icon;
            return (
              <div key={idx} className="flex items-center gap-2 group/row">
                <div className="flex items-center gap-1.5 w-24 shrink-0">
                  <div className={`w-3.5 h-3.5 rounded border flex items-center justify-center ${row.iconColor} group-hover:scale-110 transition-transform duration-500`}>
                    <Icon className="w-2 h-2" />
                  </div>
                  <span className="text-[10px] font-semibold text-slate-300 group-hover:text-white transition-colors duration-500 truncate">
                    {row.category}
                  </span>
                </div>

                <div className="flex flex-wrap gap-1 flex-1">
                  {row.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-1.5 py-0.2 rounded bg-slate-900 border border-slate-800 text-[9px] font-mono text-slate-300 group-hover:border-purple-500/40 group-hover:bg-slate-800/80 group-hover:text-purple-200 hover:!scale-110 hover:!border-cyan-400 hover:!bg-cyan-500/20 hover:!text-cyan-200 hover:shadow-[0_0_12px_rgba(6,182,212,0.4)] active:scale-95 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="pt-1.5 border-t border-slate-800/80 flex items-center justify-between text-[9px] text-slate-400 font-mono">
        <span>Frameworks &amp; Tooling</span>
        <span className="text-purple-400 group-hover:text-purple-300 group-hover:shadow-[0_0_12px_rgba(168,85,247,0.4)] font-bold transition-all duration-500">25+ Tech Verified</span>
      </div>
    </div>
  );
}
