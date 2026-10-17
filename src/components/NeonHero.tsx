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

export function NeonHero() {
  const { data } = usePortfolio();
  const { profile } = data;

  const highlights = [
    {
      icon: Briefcase,
      value: '2+ Years',
      label: 'Experience',
      subtext: 'VCQRU Product Engineering',
      color: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
    },
    {
      icon: FolderGit2,
      value: '5+ Apps',
      label: 'Production Projects',
      subtext: 'Flutter & Cloud Integrated',
      color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
    },
    {
      icon: GraduationCap,
      value: 'MCA (2025)',
      label: 'Post-Graduate',
      subtext: 'Gurugram University',
      color: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
    },
    {
      icon: Zap,
      value: 'Flutter & Dart',
      label: 'Core Expertise',
      subtext: 'BLoC • REST APIs • Firebase',
      color: 'text-pink-400 bg-pink-500/10 border-pink-500/20',
    },
  ];

  const focusPills = [
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
      className="neon-card neon-card-purple group rounded-2xl xl:rounded-3xl p-3 sm:p-4 relative overflow-hidden"
    >
      {/* Ambient background glow flares */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit] -z-10">
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-purple-600/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-cyan-500/15 rounded-full blur-3xl" />
      </div>

      {/* Main 2-Column Responsive Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-center">
        {/* Left Column: Personal Title, Bio & Direct Contact (~58% width) */}
        <div className="lg:col-span-7 flex flex-col items-start justify-center">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] sm:text-[11px] font-semibold mb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>{profile.availability_text || 'Available for Opportunities'}</span>
          </div>

          {/* Name & Headline */}
          <div className="flex flex-wrap items-baseline gap-2 mb-0.5">
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              ABHIS<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">HEK</span>
            </h1>
            <span className="text-xs sm:text-sm font-bold text-slate-300">
              — Software Engineer
            </span>
          </div>

          {/* Specialization Subtitle */}
          <p className="text-[11px] sm:text-xs font-semibold text-cyan-400 mb-1">
            Flutter &amp; Backend-Integrated Application Development
          </p>

          {/* Bio Summary */}
          <p className="text-[11px] text-slate-300 leading-relaxed mb-2 max-w-2xl">
            {profile.summary ? profile.summary.split('. ')[0] + '.' : 'Building real-world mobile & web applications with clean UI, powerful backend integration, and scalable architecture.'}
          </p>

          {/* Contact Meta Row & Action Buttons */}
          <div className="w-full flex flex-wrap items-center justify-between gap-2 pt-1.5 border-t border-slate-800/80">
            <div className="flex flex-wrap items-center gap-1.5 text-[10px] font-mono">
              {/* Location Pill with Pulse & Map trigger */}
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(profile.location || 'Gurugram, India')}`}
                target="_blank"
                rel="noopener noreferrer"
                title="Click to view Gurugram, India on Google Maps"
                className="relative inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 hover:border-purple-400 text-purple-300 hover:text-white transition-all duration-200 group active:scale-95 shadow-[0_0_12px_rgba(168,85,247,0.15)] hover:shadow-[0_0_18px_rgba(168,85,247,0.4)] cursor-pointer"
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-purple-500" />
                </span>
                <span className="animate-pin-bounce">
                  <MapPin className="w-3 h-3 text-purple-400 group-hover:scale-110 transition-transform shrink-0" />
                </span>
                <span className="font-semibold">{profile.location || 'Gurugram, India'}</span>
                <span className="text-[8px] text-purple-400 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all">↗</span>
              </a>

              {/* Email Pill with Pulse & Mail trigger */}
              <a
                href={`mailto:${profile.email}`}
                title={`Click to send email to ${profile.email}`}
                className="relative inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 hover:border-cyan-400 text-cyan-300 hover:text-white transition-all duration-200 group active:scale-95 shadow-[0_0_12px_rgba(6,182,212,0.15)] hover:shadow-[0_0_18px_rgba(6,182,212,0.4)] cursor-pointer"
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-500" />
                </span>
                <span className="animate-email-pulse">
                  <Mail className="w-3 h-3 text-cyan-400 group-hover:scale-110 transition-transform shrink-0" />
                </span>
                <span className="font-semibold">{profile.email}</span>
                <span className="text-[8px] text-cyan-400 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all">✉</span>
              </a>

              {/* Phone Pill with Ringing Animation & Phone App trigger */}
              <a
                href={`tel:${(profile.phone || '+91 8299398980').replace(/\s+/g, '')}`}
                title={`Click to call ${profile.phone || '+91 8299398980'}`}
                className="relative inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 hover:border-emerald-400 text-emerald-300 hover:text-white transition-all duration-200 group active:scale-95 shadow-[0_0_12px_rgba(16,185,129,0.15)] hover:shadow-[0_0_18px_rgba(16,185,129,0.4)] cursor-pointer"
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                </span>
                <span className="animate-phone-ring">
                  <Phone className="w-3 h-3 text-emerald-400 group-hover:scale-110 transition-transform shrink-0" />
                </span>
                <span className="font-semibold">{profile.phone || '+91 8299398980'}</span>
                <span className="text-[8px] text-emerald-400 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all">📞</span>
              </a>
            </div>

            <div className="flex items-center gap-2">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-1.5 px-3 py-1 rounded-full font-bold text-[11px] text-white bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 hover:opacity-95 shadow-neonPurple transition-all active:scale-95"
              >
                <Send className="w-2.5 h-2.5 -rotate-12" />
                <span>Get In Touch</span>
                <span>→</span>
              </a>

              <a
                href={profile.resume_url || '#contact'}
                target={profile.resume_url ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1 px-3 py-1 rounded-full font-semibold text-[11px] text-slate-200 bg-slate-900/90 border border-slate-700 hover:border-slate-500 hover:text-white transition-all active:scale-95"
              >
                <Download className="w-2.5 h-2.5" />
                <span>Resume</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Real Content - Executive Metric Cards (~42% width) */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-2">
          {/* 4 Stat Cards in 2x2 Grid */}
          <div className="grid grid-cols-2 gap-2">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-2 rounded-xl bg-slate-900/80 border border-slate-800/90 group-hover:border-slate-700/80 group-hover:bg-slate-900/95 hover:!border-purple-400/60 hover:!bg-slate-800/90 hover:scale-[1.03] hover:shadow-[0_0_14px_rgba(168,85,247,0.25)] flex items-center gap-2.5 transition-all duration-300 cursor-default"
                >
                  <div
                    className={`w-7 h-7 rounded-lg border flex items-center justify-center shrink-0 ${item.color} group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs sm:text-sm font-black text-white group-hover:text-purple-200 transition-colors duration-300 leading-tight truncate">
                      {item.value}
                    </div>
                    <div className="text-[9px] text-slate-300 font-medium truncate">
                      {item.label}
                    </div>
                    <div className="text-[8px] text-slate-400 font-mono truncate">
                      {item.subtext}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Core Competencies Ribbon */}
          <div className="flex flex-wrap items-center gap-1 pt-1 border-t border-slate-800/60">
            <span className="text-[9px] font-mono font-semibold text-slate-400 flex items-center gap-1 mr-1">
              <CheckCircle2 className="w-2.5 h-2.5 text-cyan-400" />
              Focus:
            </span>
            {focusPills.map((pill, pIdx) => (
              <span
                key={pIdx}
                className="px-1.5 py-0.5 rounded text-[8.5px] font-mono text-cyan-300 bg-cyan-950/40 border border-cyan-800/40 group-hover:border-cyan-700/80 hover:!border-cyan-400 hover:!bg-cyan-900/50 hover:!text-white hover:scale-105 transition-all duration-300 cursor-default"
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
