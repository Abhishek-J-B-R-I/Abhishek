'use client';

import React, { useMemo } from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';
import { usePortfolio } from '@/context/PortfolioContext';

interface GroupedRole {
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  bullets: string[];
}

export function Experience() {
  const { data } = usePortfolio();
  const { experience } = data;

  // Group multiple bullet rows belonging to the same position
  const roles = useMemo(() => {
    const list: GroupedRole[] = [];

    experience.forEach((item) => {
      // Check if last role in list has the same role and company
      const last = list[list.length - 1];
      if (
        last &&
        last.role.trim().toLowerCase() === item.role.trim().toLowerCase() &&
        last.company.trim().toLowerCase() === item.company.trim().toLowerCase() &&
        last.startDate === item.start_date
      ) {
        last.bullets.push(item.description);
      } else {
        list.push({
          role: item.role,
          company: item.company,
          location: item.location,
          startDate: item.start_date,
          endDate: item.end_date,
          bullets: [item.description],
        });
      }
    });

    return list;
  }, [experience]);

  // Format date display: '2025-03' -> 'Mar 2025'
  const formatDate = (dateStr: string) => {
    if (!dateStr) return '';
    if (dateStr.toLowerCase() === 'present') return 'Present';
    const parts = dateStr.split('-');
    if (parts.length === 2) {
      const year = parts[0];
      const monthNum = parseInt(parts[1], 10);
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      if (monthNum >= 1 && monthNum <= 12) {
        return `${months[monthNum - 1]} ${year}`;
      }
    }
    return dateStr;
  };

  return (
    <section id="experience" aria-labelledby="experience-heading" className="py-16 md:py-20 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 max-w-2xl">
          <p className="text-xs uppercase font-mono tracking-wider text-brand font-semibold mb-2">
            Career Timeline
          </p>
          <h2 id="experience-heading" className="text-3xl font-bold tracking-tight text-ink mb-3">
            Professional Experience
          </h2>
          <p className="text-sm sm:text-base text-ink-muted">
            Track record of shipping production Flutter apps, integrating cloud microservices, and crafting internal tooling.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-border/80 ml-3 md:ml-6 pl-6 md:pl-10 space-y-12">
          {roles.map((role, idx) => {
            const isCurrent = role.endDate.toLowerCase() === 'present';
            return (
              <div key={idx} className="relative group">
                {/* Timeline Node Icon */}
                <div
                  className={`absolute -left-[31px] md:-left-[47px] top-1.5 w-7 h-7 rounded-full border-2 flex items-center justify-center transition-colors ${
                    isCurrent
                      ? 'bg-page-surface border-brand text-brand ring-4 ring-brand/10'
                      : 'bg-page-surface border-border text-ink-subtle'
                  }`}
                >
                  <Briefcase className="w-3.5 h-3.5" />
                </div>

                {/* Role Card */}
                <div className="p-6 md:p-7 rounded-xl border border-border bg-page-surface shadow-soft hover:shadow-subtle hover:border-brand/40 transition-all duration-200">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-border/70">
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-ink">
                        {role.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-brand font-medium mt-1">
                        <span className="font-semibold text-ink">{role.company}</span>
                        <span className="text-border">•</span>
                        <span className="inline-flex items-center gap-1 text-ink-muted text-xs">
                          <MapPin className="w-3.5 h-3.5" />
                          {role.location}
                        </span>
                      </div>
                    </div>

                    {/* Date Badge */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium border border-border bg-page text-ink-muted self-start sm:self-auto">
                      <Calendar className="w-3 h-3 text-brand" />
                      <span>
                        {formatDate(role.startDate)} — {formatDate(role.endDate)}
                      </span>
                      {isCurrent && (
                        <span className="ml-1 px-1.5 py-0.5 rounded text-[10px] bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-sans font-semibold">
                          Current
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Bullet Points */}
                  <ul className="space-y-2.5">
                    {role.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5 text-sm sm:text-base text-ink-muted leading-relaxed">
                        <CheckCircle className="w-4 h-4 text-brand shrink-0 mt-1" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
