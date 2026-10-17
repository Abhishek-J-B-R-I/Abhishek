'use client';

import React from 'react';
import { Smartphone, Cloud, Layers, Monitor } from 'lucide-react';

export function About() {
  const services = [
    {
      title: 'Mobile App Development',
      description: 'Beautiful, high-performance apps using Flutter',
      icon: Smartphone,
      color: 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border-indigo-100 dark:border-indigo-900/60',
    },
    {
      title: 'Backend Integration',
      description: 'REST APIs, Firebase & real-time data sync',
      icon: Cloud,
      color: 'bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 border-sky-100 dark:border-sky-900/60',
    },
    {
      title: 'Clean Architecture',
      description: 'BLoC, Provider & scalable code structure',
      icon: Layers,
      color: 'bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 border-purple-100 dark:border-purple-900/60',
    },
    {
      title: 'Problem Solving',
      description: 'Debugging, optimization and production-ready apps',
      icon: Monitor,
      color: 'bg-teal-50 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400 border-teal-100 dark:border-teal-900/60',
    },
  ];

  return (
    <section id="about" aria-labelledby="what-i-do-heading" className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8">
          <h2 id="what-i-do-heading" className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-1.5">
            What I Do
          </h2>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400">
            Turning ideas into real-world mobile and web solutions
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-100 dark:border-slate-700/80 shadow-card hover:shadow-cardHover hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center mb-5 ${item.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
