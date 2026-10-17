'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { usePortfolio } from '@/context/PortfolioContext';
import {
  FlutterIcon,
  DartIcon,
  FirebaseIcon,
  NodeIcon,
  PythonIcon,
  ReactIcon,
  MysqlIcon,
  RestApiIcon,
} from './TechIcons';

interface SkillVisual {
  name: string;
  icon: React.ElementType;
}

const featuredSkills: SkillVisual[] = [
  { name: 'Flutter', icon: FlutterIcon },
  { name: 'Dart', icon: DartIcon },
  { name: 'Firebase', icon: FirebaseIcon },
  { name: 'REST APIs', icon: RestApiIcon },
  { name: 'Node.js', icon: NodeIcon },
  { name: 'Python', icon: PythonIcon },
  { name: 'React.js', icon: ReactIcon },
  { name: 'MySQL', icon: MysqlIcon },
];

export function Skills() {
  const { data } = usePortfolio();

  return (
    <div className="flex flex-col justify-between">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Technical Skills
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Technologies and tools I work with
          </p>
        </div>
        <a
          href="#contact"
          className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 flex items-center gap-1"
        >
          <span>View All Skills</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Grid of 8 Featured Tech Cards */}
      <div className="grid grid-cols-4 gap-3 sm:gap-4">
        {featuredSkills.map((skill, idx) => {
          const Icon = skill.icon;
          return (
            <div
              key={idx}
              className="bg-white dark:bg-slate-800/80 rounded-2xl border border-slate-100 dark:border-slate-700/80 p-3 sm:p-4 flex flex-col items-center justify-center gap-2 shadow-card hover:shadow-cardHover hover:-translate-y-1 transition-all duration-200 group"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                <Icon className="w-8 h-8 sm:w-9 sm:h-9" />
              </div>
              <span className="text-[11px] sm:text-xs font-semibold text-slate-800 dark:text-slate-200 text-center truncate w-full">
                {skill.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
