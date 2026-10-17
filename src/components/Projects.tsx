'use client';

import React from 'react';
import { ExternalLink, Github, QrCode, MessageSquare, CloudSun, Sparkles, CheckCircle2 } from 'lucide-react';
import { usePortfolio } from '@/context/PortfolioContext';
import { sanitizeUrl } from '@/lib/content/sanitize';

const projectVisuals: Record<string, { icon: React.ElementType; theme: string; tag: string }> = {
  'loyalty-rewards': {
    icon: QrCode,
    theme: 'from-blue-500/10 via-brand/10 to-teal-500/10 text-brand',
    tag: 'Fintech & Rewards Flow',
  },
  'realtime-chat': {
    icon: MessageSquare,
    theme: 'from-indigo-500/10 via-purple-500/10 to-brand/10 text-brand-teal',
    tag: 'WebSockets & Sync Engine',
  },
  'weather-forecast': {
    icon: CloudSun,
    theme: 'from-sky-500/10 via-teal-500/10 to-emerald-500/10 text-emerald-600 dark:text-emerald-400',
    tag: 'Live Telemetry & JSON',
  },
};

export function Projects() {
  const { data } = usePortfolio();
  const { projects } = data;

  return (
    <section id="projects" aria-labelledby="projects-heading" className="py-16 md:py-20 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 max-w-2xl">
          <p className="text-xs uppercase font-mono tracking-wider text-brand font-semibold mb-2">
            Selected Works
          </p>
          <h2 id="projects-heading" className="text-3xl font-bold tracking-tight text-ink mb-3">
            Featured Projects
          </h2>
          <p className="text-sm sm:text-base text-ink-muted">
            Production-grade mobile applications emphasizing clean architecture, responsive state management, and resilient backend integrations.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const visual = projectVisuals[project.project_id] || {
              icon: Sparkles,
              theme: 'from-brand/10 to-brand-teal/10 text-brand',
              tag: 'Application',
            };
            const Icon = visual.icon;
            const validLiveUrl = sanitizeUrl(project.live_url);
            const validRepoUrl = sanitizeUrl(project.repo_url);

            return (
              <article
                key={project.project_id}
                className="flex flex-col justify-between rounded-xl border border-border bg-page-surface shadow-soft hover:shadow-subtle hover:border-brand/40 transition-all duration-200 overflow-hidden group"
              >
                <div>
                  {/* Abstract Visual Header */}
                  <div
                    aria-hidden="true"
                    className={`h-40 bg-gradient-to-br ${visual.theme} border-b border-border flex flex-col items-center justify-center p-6 relative overflow-hidden`}
                  >
                    {/* Background geometric accents */}
                    <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full border border-border/40 opacity-40 group-hover:scale-110 transition-transform duration-300" />
                    <div className="w-14 h-14 rounded-2xl bg-page-surface border border-border shadow-soft flex items-center justify-center mb-2 z-10 group-hover:scale-105 transition-transform duration-200">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-[11px] font-mono font-medium text-ink-muted z-10">
                      {visual.tag}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    {/* Subtitle / Tech pill */}
                    <div className="text-xs font-mono text-brand font-medium mb-1.5">
                      {project.subtitle}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-ink mb-3 tracking-tight">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-ink-muted leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Technology Stack Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded text-[11px] font-mono bg-page border border-border/80 text-ink-muted"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer: Safe Links or Architecture Badge */}
                <div className="px-6 pb-6 pt-3 border-t border-border/60 flex items-center justify-between text-xs">
                  {validLiveUrl || validRepoUrl ? (
                    <div className="flex items-center gap-3">
                      {validLiveUrl && (
                        <a
                          href={validLiveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 font-medium text-brand hover:text-brand-hover"
                        >
                          <span>Live App</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {validRepoUrl && (
                        <a
                          href={validRepoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 font-medium text-ink-muted hover:text-ink"
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>Code</span>
                        </a>
                      )}
                    </div>
                  ) : (
                    <div className="inline-flex items-center gap-1.5 text-ink-subtle text-[11px]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                      <span>Verified Architecture</span>
                    </div>
                  )}

                  <span className="font-mono text-[11px] text-ink-subtle">
                    0{project.sort_order}
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
