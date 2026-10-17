'use client';

import React from 'react';
import { Smartphone, Server, Sparkles } from 'lucide-react';
import { usePortfolio } from '@/context/PortfolioContext';

export function About() {
  const { data } = usePortfolio();
  const { profile } = data;

  const highlights = [
    {
      icon: Smartphone,
      title: 'Mobile Architecture & Flutter',
      description:
        'Engineering performant, reactive cross-platform applications with robust BLoC and Provider state management patterns.',
    },
    {
      icon: Server,
      title: 'Backend & Cloud Integration',
      description:
        'Connecting client interfaces to reliable REST APIs and cloud infrastructure including Firebase Auth, Firestore, and Cloud Messaging.',
    },
    {
      icon: Sparkles,
      title: 'Engineering Rigor & Tooling',
      description:
        'Disciplined approach using Git workflows, proactive debugging, internal automation tools (Python/Windows), and modern web dashboards.',
    },
  ];

  return (
    <section id="about" aria-labelledby="about-heading" className="py-16 md:py-20 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 max-w-2xl">
          <p className="text-xs uppercase font-mono tracking-wider text-brand font-semibold mb-2">
            Background & Focus
          </p>
          <h2 id="about-heading" className="text-3xl font-bold tracking-tight text-ink mb-4">
            About Abhishek
          </h2>
          <p className="text-base sm:text-lg text-ink-muted leading-relaxed">
            {profile.summary}
          </p>
        </div>

        {/* Pillars / Key Strengths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-xl border border-border bg-page-surface shadow-soft hover:shadow-subtle hover:border-brand/40 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-lg bg-brand/10 border border-brand/20 flex items-center justify-center text-brand mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-ink mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-ink-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
