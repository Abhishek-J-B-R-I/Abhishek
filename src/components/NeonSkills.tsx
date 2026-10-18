'use client';

import React from 'react';
import { LayoutGrid, Code2, Cpu, Server, Database, Smartphone, Wrench } from 'lucide-react';
import { usePortfolio } from '@/context/PortfolioContext';

interface SkillRow {
  category: string;
  icon: React.ElementType;
  iconColor: string;
  skills: string[];
}

export function NeonSkills() {
  const { data } = usePortfolio();
  const skillsByGroup = data.skillsByGroup || {};

  const getCategoryMeta = (cat: string) => {
    const lower = cat.toLowerCase();
    if (lower.includes('lang')) {
      return { icon: Code2, iconColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20' };
    }
    if (lower.includes('core') || lower.includes('cs') || lower.includes('algo')) {
      return { icon: Cpu, iconColor: 'text-rose-400 bg-rose-500/10 border-rose-500/20' };
    }
    if (lower.includes('backend') || lower.includes('net') || lower.includes('api')) {
      return { icon: Server, iconColor: 'text-purple-400 bg-purple-500/10 border-purple-500/20' };
    }
    if (lower.includes('data')) {
      return { icon: Database, iconColor: 'text-amber-400 bg-amber-500/10 border-amber-500/20' };
    }
    if (lower.includes('app') || lower.includes('mobile')) {
      return { icon: Smartphone, iconColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20' };
    }
    return { icon: Wrench, iconColor: 'text-orange-400 bg-orange-500/10 border-orange-500/20' };
  };

  const groupKeys = Object.keys(skillsByGroup);

  const skillRows: SkillRow[] =
    groupKeys.length > 0
      ? groupKeys.map((grpName) => {
          const meta = getCategoryMeta(grpName);
          const shortName = grpName
            .replace('Core Computer Science', 'Core CS')
            .replace('Backend & Networking', 'Backend & APIs')
            .replace('Application Development', 'App Dev');
          return {
            category: shortName,
            icon: meta.icon,
            iconColor: meta.iconColor,
            skills: skillsByGroup[grpName].map((s) => s.name),
          };
        })
      : [
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
            category: 'App Dev',
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

  const totalSkillsCount = data.skills?.length || 25;

  return (
    <div id="skills" className="neon-card neon-card-purple group rounded-2xl p-3.5 xl:p-4 h-full flex flex-col justify-between transition-all duration-300">
      <div>
        {/* Header */}
        <div className="flex items-center gap-2 mb-2 pb-1.5 border-b border-slate-200 dark:border-slate-800/80">
          <div className="w-6 h-6 rounded-lg bg-purple-50 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/30 flex items-center justify-center text-purple-700 dark:text-purple-400 group-hover:scale-110 group-hover:border-purple-500 group-hover:bg-purple-100 dark:group-hover:bg-purple-500/20 group-hover:shadow-[0_0_14px_rgba(168,85,247,0.4)] transition-all duration-500">
            <LayoutGrid className="w-3 h-3" />
          </div>
          <h2 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white tracking-wide group-hover:text-purple-700 dark:group-hover:text-purple-200 transition-colors duration-500">
            Skills
          </h2>
        </div>

        {/* Dynamic Category Rows */}
        <div className="space-y-2">
          {skillRows.map((row, idx) => {
            const Icon = row.icon;
            return (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 group/row">
                <div className="flex items-center gap-1.5 w-auto sm:w-28 shrink-0">
                  <div className={`w-4 h-4 rounded-md border flex items-center justify-center ${row.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-2.5 h-2.5" />
                  </div>
                  <span className="text-[10.5px] font-bold text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-white transition-colors duration-300 whitespace-nowrap">
                    {row.category}
                  </span>
                </div>

                <div className="flex flex-wrap gap-1 flex-1">
                  {row.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-0.5 rounded-md bg-slate-50 hover:bg-indigo-50 dark:bg-slate-900 border border-slate-200/90 hover:border-indigo-300 dark:border-slate-800 text-[9.5px] font-medium text-slate-700 hover:text-indigo-700 dark:text-slate-300 dark:hover:border-cyan-400 dark:hover:bg-cyan-500/20 dark:hover:text-cyan-200 shadow-[0_1px_2px_rgba(0,0,0,0.03)] hover:scale-105 active:scale-95 transition-all duration-200 cursor-default"
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

      <div className="pt-1.5 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-[9px] text-slate-500 dark:text-slate-400 font-mono">
        <span>Frameworks &amp; Tooling</span>
        <span className="text-purple-700 dark:text-purple-400 group-hover:text-purple-600 dark:group-hover:text-purple-300 font-bold transition-all duration-500">{totalSkillsCount}+ Tech Verified</span>
      </div>
    </div>
  );
}

