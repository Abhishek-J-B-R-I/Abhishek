'use client';

import React from 'react';
import { MapPin, ArrowRight, Mail, FileText, CheckCircle2 } from 'lucide-react';
import { usePortfolio } from '@/context/PortfolioContext';
import { CodeVisual } from './CodeVisual';

export function Hero() {
  const { data } = usePortfolio();
  const { profile } = data;

  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden hero-grid"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Info */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Location & Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-page-surface shadow-soft text-xs text-ink-muted mb-6">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="font-medium text-ink">
                {profile.availability_text || 'Active in Engineering'}
              </span>
              <span className="text-border">•</span>
              <span className="inline-flex items-center gap-1">
                <MapPin className="w-3 h-3 text-ink-subtle" />
                {profile.location || 'Gurugram, India'}
              </span>
            </div>

            {/* Main Name Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ink mb-4">
              {profile.name || 'Abhishek'}
            </h1>

            {/* Professional Headline */}
            <p className="text-lg sm:text-xl font-medium text-brand mb-4 max-w-2xl leading-snug">
              {profile.headline}
            </p>

            {/* Concise Summary */}
            <p className="text-base sm:text-lg text-ink-muted mb-8 max-w-xl leading-relaxed">
              {profile.summary}
            </p>

            {/* Call To Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-medium text-white bg-brand hover:bg-brand-hover shadow-soft transition-all duration-200 active:scale-[0.98] w-full sm:w-auto"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-medium text-ink bg-page-surface hover:bg-page-cardHover border border-border transition-all duration-200 active:scale-[0.98] w-full sm:w-auto"
              >
                <Mail className="w-4 h-4 text-brand" />
                <span>Get in Touch</span>
              </a>

              {profile.resume_url && (
                <a
                  href={profile.resume_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-medium text-ink-muted hover:text-ink border border-transparent hover:border-border transition-colors w-full sm:w-auto text-sm"
                >
                  <FileText className="w-4 h-4" />
                  <span>Resume</span>
                </a>
              )}
            </div>

            {/* Quick Metrics / Focus Badges */}
            <div className="mt-10 pt-6 border-t border-border/80 flex flex-wrap items-center gap-6 text-xs text-ink-muted">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand" />
                <span>2+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-teal" />
                <span>Production Flutter & State Architecture</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Full-Cycle Backend & Cloud Integrations</span>
              </div>
            </div>
          </div>

          {/* Right Column: Abstract Code Visual */}
          <div className="lg:col-span-5 flex justify-center">
            <CodeVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
