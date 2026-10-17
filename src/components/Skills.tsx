'use client';

import React, { useState, useMemo } from 'react';
import { Layers, Code2, Database, Terminal, Cpu, Layout, Server, Wrench } from 'lucide-react';
import { usePortfolio } from '@/context/PortfolioContext';

const groupIcons: Record<string, React.ElementType> = {
  'Languages': Code2,
  'Mobile Development': Layers,
  'State Management': Layout,
  'Backend & Networking': Server,
  'Databases': Database,
  'Additional Development': Terminal,
  'Core Computer Science': Cpu,
  'Tools & Practices': Wrench,
};

export function Skills() {
  const { data } = usePortfolio();
  const { skills } = data;
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Extract unique categories in order
  const categories = useMemo(() => {
    const set = new Set<string>();
    skills.forEach((s) => set.add(s.group));
    return ['All', ...Array.from(set)];
  }, [skills]);

  // Group filtered skills
  const groupedSkills = useMemo(() => {
    const filtered =
      selectedCategory === 'All'
        ? skills
        : skills.filter((s) => s.group === selectedCategory);

    const record: Record<string, typeof skills> = {};
    for (const skill of filtered) {
      if (!record[skill.group]) {
        record[skill.group] = [];
      }
      record[skill.group].push(skill);
    }
    return record;
  }, [skills, selectedCategory]);

  return (
    <section id="skills" aria-labelledby="skills-heading" className="py-16 md:py-20 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8 max-w-2xl">
          <p className="text-xs uppercase font-mono tracking-wider text-brand font-semibold mb-2">
            Technical Proficiency
          </p>
          <h2 id="skills-heading" className="text-3xl font-bold tracking-tight text-ink mb-3">
            Skills & Technologies
          </h2>
          <p className="text-sm sm:text-base text-ink-muted">
            Specialized in Flutter cross-platform architecture, reactive state management, and backend-integrated workflows.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-10 pb-2">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-150 cursor-pointer ${
                  isActive
                    ? 'bg-brand text-white shadow-soft'
                    : 'bg-page-surface text-ink-muted border border-border hover:text-ink hover:border-brand/40'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Grouped Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(groupedSkills).map(([groupName, groupItems]) => {
            const Icon = groupIcons[groupName] || Terminal;
            return (
              <div
                key={groupName}
                className="p-5 rounded-xl border border-border bg-page-surface shadow-soft flex flex-col justify-between hover:border-brand/30 transition-colors"
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-border/80">
                    <div className="w-8 h-8 rounded-lg bg-brand/10 border border-brand/20 flex items-center justify-center text-brand">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm font-semibold text-ink tracking-tight">
                      {groupName}
                    </h3>
                  </div>

                  {/* Wrapped skill chips */}
                  <div className="flex flex-wrap gap-2">
                    {groupItems.map((skill) => (
                      <span
                        key={skill.skill_id}
                        className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-page/90 text-ink border border-border hover:border-brand/40 hover:text-brand transition-colors"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-3 text-[11px] text-ink-subtle flex items-center justify-between">
                  <span>{groupItems.length} {groupItems.length === 1 ? 'skill' : 'skills'}</span>
                  <span className="font-mono text-brand/80">verified</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
