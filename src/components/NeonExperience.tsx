'use client';

import React from 'react';
import { Briefcase } from 'lucide-react';
import { usePortfolio } from '@/context/PortfolioContext';

export function NeonExperience() {
  const { data } = usePortfolio();

  const groupedRoles = (data.experience || []).reduce((acc, item) => {
    const key = `${item.role}__${item.company}`;
    if (!acc[key]) {
      acc[key] = {
        title: item.role,
        company: item.location ? `${item.company}, ${item.location}` : item.company,
        period: `${item.start_date} - ${item.end_date}`,
        bullets: [] as string[],
      };
    }
    if (item.description) {
      acc[key].bullets.push(item.description);
    }
    return acc;
  }, {} as Record<string, { title: string; company: string; period: string; bullets: string[] }>);

  const parsedRoles = Object.values(groupedRoles);

  const colors = [
    'border-purple-500 shadow-neonPurple',
    'border-cyan-400 shadow-neonCyan',
    'border-indigo-400 shadow-neonBlue',
  ];

  const roles =
    parsedRoles.length > 0
      ? parsedRoles.map((r, i) => ({
          ...r,
          bullets: r.bullets.slice(0, 4),
          nodeColor: colors[i % colors.length],
        }))
      : [
          {
            title: 'Associate Software Engineer (Flutter)',
            company: `${data.experience?.[0]?.company || 'WSY'}, Gurugram`,
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
            company: `${data.experience?.[0]?.company || 'WSY'}, Gurugram`,
            period: 'Aug 2024 - Mar 2025',
            bullets: [
              'Converted design mockups to responsive Flutter UI.',
              'Fixed UI bugs and worked in Git-based iterative delivery.',
            ],
            nodeColor: 'border-cyan-400 shadow-neonCyan',
          },
        ];

  return (
    <div id="experience" className="neon-card neon-card-indigo group rounded-2xl p-2.5 sm:p-3 flex flex-col justify-between h-full transition-all duration-300">
      <div>
        {/* Header */}
        <div className="flex items-center gap-2 mb-1.5 pb-1 border-b border-slate-200 dark:border-slate-800/80">
          <div className="w-5 h-5 rounded-lg bg-indigo-50 dark:bg-blue-500/10 border border-indigo-200 dark:border-blue-500/30 flex items-center justify-center text-indigo-700 dark:text-blue-400 group-hover:scale-110 group-hover:border-indigo-500 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-500/20 group-hover:shadow-[0_0_14px_rgba(99,102,241,0.4)] transition-all duration-500 shrink-0">
            <Briefcase className="w-2.5 h-2.5" />
          </div>
          <h2 className="text-xs sm:text-[13px] font-bold text-slate-900 dark:text-white tracking-wide group-hover:text-indigo-700 dark:group-hover:text-indigo-200 transition-colors duration-500">
            Experience
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative pl-3.5 space-y-2 before:absolute before:left-1 before:top-1.5 before:bottom-1.5 before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800 group-hover:before:bg-indigo-500/50 before:transition-colors before:duration-500">
          {roles.map((role, idx) => (
            <div key={idx} className="relative group/role">
              <div
                className={`absolute -left-3.5 top-1 w-2 h-2 rounded-full bg-white dark:bg-slate-950 border-2 ${role.nodeColor} group-hover:scale-125 group-hover:shadow-[0_0_14px_rgba(168,85,247,0.7)] transition-all duration-500`}
              />

              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-1">
                  <h3 className="text-[11px] sm:text-[11.5px] font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-cyan-200 transition-colors duration-500 leading-tight">
                    {role.title}
                  </h3>
                  <span className="text-[9px] font-mono text-slate-500 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors duration-500 shrink-0">
                    {role.period}
                  </span>
                </div>

                <div className="text-[10px] font-medium text-indigo-600 dark:text-cyan-400 mb-0.5">
                  {role.company}
                </div>

                <ul className="space-y-0.5">
                  {role.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="text-[9.5px] sm:text-[10px] text-slate-600 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-colors duration-500 flex items-start gap-1 leading-snug">
                      <span className="text-purple-600 dark:text-purple-400 group-hover:text-pink-500 group-hover:scale-110 font-bold transition-all duration-500 shrink-0 mt-0.5">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-1.5 mt-2 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-[8.5px] text-slate-500 dark:text-slate-400 font-mono">
        <span>{data.experience?.[0]?.company || 'WSY'} Product Engineering</span>
        <span className="text-purple-700 dark:text-purple-400 group-hover:text-purple-600 dark:group-hover:text-purple-300 font-bold transition-all duration-500">Shipped in Production</span>
      </div>
    </div>
  );
}
