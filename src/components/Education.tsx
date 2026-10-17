'use client';

import React from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';
import { usePortfolio } from '@/context/PortfolioContext';

export function Education() {
  const { data } = usePortfolio();
  const { education } = data;

  return (
    <section id="education" aria-labelledby="education-heading" className="py-16 md:py-20 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="text-xs uppercase font-mono tracking-wider text-brand font-semibold mb-2">
            Academic Background
          </p>
          <h2 id="education-heading" className="text-3xl font-bold tracking-tight text-ink mb-3">
            Education
          </h2>
          <p className="text-sm sm:text-base text-ink-muted">
            Formal computer science training foundation in algorithms, systems, and software engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
          {education.map((item) => (
            <div
              key={item.education_id}
              className="p-6 rounded-xl border border-border bg-page-surface shadow-soft hover:border-brand/40 transition-colors flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-lg bg-brand/10 border border-brand/20 flex items-center justify-center text-brand shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h3 className="text-base font-bold text-ink">
                    {item.degree}
                  </h3>
                  <div className="inline-flex items-center gap-1 text-xs font-mono text-ink-muted bg-page px-2 py-0.5 rounded border border-border">
                    <Calendar className="w-3 h-3 text-brand" />
                    <span>{item.year}</span>
                  </div>
                </div>
                <p className="text-sm text-brand font-medium mb-1">
                  {item.institution}
                </p>
                {item.details && (
                  <p className="text-xs text-ink-muted mt-2 leading-relaxed">
                    {item.details}
                  </p>
                )}
                <div className="mt-3 flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                  <Award className="w-3.5 h-3.5" />
                  <span>Master&apos;s Degree Program</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
