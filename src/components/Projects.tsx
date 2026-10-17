'use client';

import React from 'react';
import Image from 'next/image';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { usePortfolio } from '@/context/PortfolioContext';

const projectImages: Record<string, string> = {
  'loyalty-rewards': '/images/project-loyalty.png',
  'real-time-chat': '/images/project-chat.png',
  'realtime-chat': '/images/project-chat.png',
  'weather-forecast': '/images/project-weather.png',
};

export function Projects() {
  const { data } = usePortfolio();
  const { projects } = data;

  return (
    <section id="projects" aria-labelledby="featured-projects-heading" className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 id="featured-projects-heading" className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-1.5">
              Featured Projects
            </h2>
            <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400">
              A few projects that I have built and worked on
            </p>
          </div>

          <a
            href="#projects"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 hover:underline"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* 3 Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => {
            const imageSrc = projectImages[project.project_id] ||
              (idx === 0 ? '/images/project-loyalty.png' : idx === 1 ? '/images/project-chat.png' : '/images/project-weather.png');

            return (
              <article
                key={project.project_id || idx}
                className="bg-white dark:bg-slate-800/80 rounded-2xl border border-slate-100 dark:border-slate-700/80 shadow-card hover:shadow-cardHover hover:-translate-y-1 transition-all duration-200 overflow-hidden flex flex-col justify-between"
              >
                <div className="p-5 flex gap-4">
                  {/* Left: Mobile Phone Screenshot Mockup */}
                  <div className="w-24 sm:w-28 shrink-0 flex items-center justify-center">
                    <div className="relative w-full aspect-[9/14] rounded-xl overflow-hidden shadow-md border border-slate-200/60 dark:border-slate-700">
                      <Image
                        src={imageSrc}
                        alt={project.title}
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 640px) 100px, 120px"
                      />
                    </div>
                  </div>

                  {/* Right: Project Information */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 leading-tight">
                        {project.title}
                      </h3>

                      {/* Tech Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-2.5">
                        {project.technologies.slice(0, 3).map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-100/60 dark:border-indigo-900/60"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Description */}
                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-3">
                        {project.description}
                      </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-2 mt-4 pt-3 border-t border-slate-100 dark:border-slate-700/60">
                      <a
                        href={project.live_url || '#contact'}
                        target={project.live_url ? '_blank' : '_self'}
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 active:scale-95 transition-all shadow-xs"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>

                      <a
                        href={project.repo_url || data.profile.github_url || '#contact'}
                        target={project.repo_url ? '_blank' : '_self'}
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-700 hover:bg-slate-100 dark:hover:bg-slate-600 border border-slate-200 dark:border-slate-600 transition-all"
                      >
                        <Github className="w-3 h-3" />
                        <span>GitHub</span>
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
