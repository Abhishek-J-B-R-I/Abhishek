'use client';

import React from 'react';
import {
  Send,
  Download,
  MapPin,
  Mail,
  Phone,
  Briefcase,
  FolderGit2,
  GraduationCap,
  Zap,
  CheckCircle2,
} from 'lucide-react';
import { usePortfolio } from '@/context/PortfolioContext';
import { triggerResumeDownload, getAssetUrl } from '@/lib/downloadResume';

export function NeonHero() {
  const { data } = usePortfolio();
  const { profile } = data;

  const rawName = (profile.name || 'ABHISHEK').trim();
  const nameParts = rawName.split(/\s+/);
  const primaryName = nameParts[0] || 'ABHISHEK';
  const secondaryName = nameParts.slice(1).join(' ');

  const headlineParts = profile.headline
    ? profile.headline.split('|').map((s) => s.trim())
    : ['Software Engineer', 'Flutter & Backend-Integrated Application Development'];
  const primaryRole = headlineParts[0] || 'Software Engineer';
  const subHeadline = headlineParts[1] || 'Flutter & Backend-Integrated Application Development';

  const eduItem = data.education?.[0];
  const eduShort = eduItem?.degree?.includes('MCA')
    ? `MCA (${eduItem.year || '2025'})`
    : eduItem?.degree || 'MCA (2025)';
  const eduSchool = eduItem?.institution || 'Gurugram University';

  const projectsCount = data.projects && data.projects.length > 0 ? `${data.projects.length}+ Apps` : '5+ Apps';

  const highlights = [
    {
      icon: Briefcase,
      value: '2+ Years',
      label: 'Experience',
      subtext: `${data.experience?.[0]?.company || 'WSY'} Product Engineering`,
      color: 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 border-indigo-200 dark:border-indigo-500/20',
    },
    {
      icon: FolderGit2,
      value: projectsCount,
      label: 'Production Projects',
      subtext: 'Flutter & Cloud Integrated',
      color: 'text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-500/10 border-cyan-200 dark:border-cyan-500/20',
    },
    {
      icon: GraduationCap,
      value: eduShort,
      label: 'Post-Graduate',
      subtext: eduSchool,
      color: 'text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-500/10 border-purple-200 dark:border-purple-500/20',
    },
    {
      icon: Zap,
      value: 'Flutter & Dart',
      label: 'Core Expertise',
      subtext: 'BLoC • REST APIs • Firebase',
      color: 'text-pink-600 dark:text-pink-400 bg-pink-50 dark:bg-pink-500/10 border-pink-200 dark:border-pink-500/20',
    },
  ];

  const focusPills =
    data.skills && data.skills.length >= 4
      ? data.skills.slice(0, 5).map((s) => s.name)
      : [
          'BLoC & Provider',
          'REST APIs & JSON',
          'Firebase Auth & Cloud',
          'Real-Time Sync',
          'Clean Architecture',
        ];

  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="neon-card neon-card-purple group rounded-2xl p-2.5 sm:p-3 relative overflow-hidden"
    >
      {/* Ambient background glow flares */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit] -z-10">
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-purple-600/5 dark:bg-purple-600/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-cyan-500/5 dark:bg-cyan-500/15 rounded-full blur-3xl" />
      </div>

      {/* Main 2-Column Responsive Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-2.5 items-center">
        {/* Left Column: Personal Title, Bio & Direct Contact (~58% width) */}
        <div className="lg:col-span-7 flex flex-col items-start justify-center">
          {/* Status Badge & Location Row */}
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-[10px] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
              <span>{profile.availability_text || 'Available for Opportunities'}</span>
            </div>

            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(profile.location || 'Gurugram, India')}`}
              target="_blank"
              rel="noopener noreferrer"
              title={`View ${profile.location || 'Gurugram, India'} on Google Maps`}
              className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-100 hover:bg-slate-200/80 dark:bg-purple-500/10 dark:hover:bg-purple-500/20 border border-slate-200/90 dark:border-purple-500/30 text-slate-700 dark:text-purple-300 text-[9.5px] font-medium transition-all"
            >
              <MapPin className="w-2.5 h-2.5 text-indigo-600 dark:text-purple-400" />
              <span>{profile.location || 'Gurugram, India'}</span>
            </a>
          </div>

          {/* Name & Primary Role */}
          <div className="flex flex-wrap items-baseline gap-2 mb-0.5">
            <h1 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 dark:text-white uppercase">
              {primaryName}
              {secondaryName && (
                <span className="ml-1.5 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-purple-400 dark:to-indigo-400">
                  {secondaryName}
                </span>
              )}
            </h1>
            <span className="text-xs sm:text-sm font-bold text-slate-600 dark:text-slate-300 font-mono">
              / {primaryRole}
            </span>
          </div>

          {/* Specialization Subtitle */}
          <p className="text-[11px] sm:text-xs font-semibold text-indigo-600 dark:text-cyan-400 mb-1">
            {subHeadline}
          </p>

          {/* Bio Summary: Clean, complete, no awkward mid-word cutoffs */}
          <p className="text-[10px] sm:text-[10.5px] text-slate-600 dark:text-slate-300 leading-relaxed mb-1.5 max-w-2xl">
            Software engineer with 2+ years of experience engineering production applications end to end — from fluid UI architecture with BLoC & Provider to REST APIs, real-time Firebase sync, and cloud services.
          </p>

          {/* Contact Meta Row & Action Buttons */}
          <div className="w-full flex flex-wrap items-center justify-between gap-1.5 pt-1.5 border-t border-slate-200 dark:border-slate-800/80">
            <div className="flex flex-wrap items-center gap-1.5 text-[10px]">

              {/* Email Pill with Pulse & Mail trigger */}
              <a
                href={`mailto:${profile.email}`}
                title={`Click to send email to ${profile.email}`}
                className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-indigo-50 hover:bg-indigo-100/80 dark:bg-cyan-500/10 dark:hover:bg-cyan-500/20 border border-indigo-200/80 dark:border-cyan-500/30 text-indigo-700 dark:text-cyan-300 hover:text-indigo-900 dark:hover:text-white font-medium transition-all group active:scale-95 shadow-sm cursor-pointer"
              >
                <Mail className="w-3 h-3 text-indigo-600 dark:text-cyan-400 group-hover:scale-110 transition-transform shrink-0" />
                <span>{profile.email}</span>
              </a>

              {/* Phone Pill with Ringing Animation & Phone App trigger */}
              {profile.phone && (
                <a
                  href={`tel:${profile.phone.replace(/\s+/g, '')}`}
                  title={`Click to call ${profile.phone}`}
                  className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 hover:bg-emerald-100/80 dark:bg-emerald-500/10 dark:hover:bg-emerald-500/20 border border-emerald-200/80 dark:border-emerald-500/30 text-emerald-800 dark:text-emerald-300 hover:text-emerald-950 dark:hover:text-white font-medium transition-all group active:scale-95 shadow-sm cursor-pointer"
                >
                  <Phone className="w-3 h-3 text-emerald-600 dark:text-emerald-400 animate-phone-ring group-hover:scale-110 transition-transform shrink-0" />
                  <span>{profile.phone}</span>
                </a>
              )}
            </div>

            <div className="flex items-center gap-1.5 shrink-0">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-1 px-3 py-1 rounded-full font-bold text-[11px] text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:opacity-95 shadow-md shadow-indigo-500/25 transition-all active:scale-95"
              >
                <Send className="w-2.5 h-2.5 -rotate-12" />
                <span>Get In Touch</span>
                <span>→</span>
              </a>

              <a
                href={getAssetUrl(profile.resume_url || '/Abhishek_Resume.pdf')}
                download="Abhishek_Resume.pdf"
                onClick={(e) => {
                  e.preventDefault();
                  triggerResumeDownload(data);
                }}
                className="inline-flex items-center justify-center gap-1 px-3 py-1 rounded-full font-semibold text-[11px] text-slate-700 dark:text-slate-200 bg-white hover:bg-slate-50 dark:bg-slate-900/90 border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-white shadow-sm transition-all active:scale-95 cursor-pointer"
                title="Download Abhishek's Resume (PDF)"
              >
                <Download className="w-2.5 h-2.5" />
                <span>Resume</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Real Content - Executive Metric Cards (~40% width) */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-1.5">
          {/* 4 Stat Cards in 2x2 Grid */}
          <div className="grid grid-cols-2 gap-1.5">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-1.5 sm:p-2 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800/90 group-hover:border-indigo-300 dark:group-hover:border-slate-700/80 hover:!border-indigo-500 dark:hover:!border-purple-500 hover:scale-[1.02] shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-md dark:hover:shadow-[0_0_14px_rgba(168,85,247,0.25)] flex items-center gap-2 transition-all duration-300 cursor-default"
                >
                  <div
                    className={`w-7 h-7 rounded-lg border flex items-center justify-center shrink-0 ${item.color} group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs sm:text-[13px] font-black text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-purple-200 transition-colors duration-300 leading-tight truncate">
                      {item.value}
                    </div>
                    <div className="text-[9.5px] text-slate-700 dark:text-slate-300 font-semibold truncate">
                      {item.label}
                    </div>
                    <div className="text-[8px] text-slate-500 dark:text-slate-400 font-mono truncate">
                      {item.subtext}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Core Competencies Ribbon */}
          <div className="flex flex-wrap items-center gap-1 pt-1 border-t border-slate-200 dark:border-slate-800/60">
            <span className="text-[9px] font-mono font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1 mr-0.5">
              <CheckCircle2 className="w-2.5 h-2.5 text-indigo-600 dark:text-cyan-400" />
              Focus:
            </span>
            {focusPills.map((pill, pIdx) => (
              <span
                key={pIdx}
                className="px-1.5 py-0.2 rounded text-[8.5px] font-mono text-slate-700 dark:text-cyan-300 bg-slate-100 dark:bg-cyan-950/40 border border-slate-200 dark:border-cyan-800/40 hover:!border-indigo-400 dark:hover:!border-cyan-400 hover:!bg-indigo-50 dark:hover:!bg-cyan-900/50 hover:!text-indigo-700 hover:scale-105 transition-all duration-300 cursor-default"
              >
                {pill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
