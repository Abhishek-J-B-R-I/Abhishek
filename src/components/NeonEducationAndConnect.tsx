'use client';

import React from 'react';
import { GraduationCap, Send, Mail, Linkedin, Github, Phone, MapPin } from 'lucide-react';
import { usePortfolio } from '@/context/PortfolioContext';

export function NeonEducationAndConnect() {
  const { data } = usePortfolio();
  const { profile } = data;
  const edu = data.education?.[0];

  return (
    <div id="education" className="space-y-2 h-full flex flex-col justify-between transition-all duration-300">
      {/* Education Box */}
      <div className="neon-card neon-card-purple group rounded-2xl p-2.5 sm:p-3 flex items-center justify-between gap-2.5">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-purple-50 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/30 flex items-center justify-center text-purple-700 dark:text-purple-400 group-hover:scale-110 group-hover:border-purple-500 group-hover:bg-purple-100 dark:group-hover:bg-purple-500/20 group-hover:shadow-[0_0_14px_rgba(168,85,247,0.4)] transition-all duration-500 shrink-0">
            <GraduationCap className="w-3 h-3" />
          </div>
          <div>
            <h3 className="text-[11px] font-bold text-slate-900 dark:text-white group-hover:text-purple-700 dark:group-hover:text-purple-200 transition-colors duration-500 leading-tight">
              {edu?.degree || 'Master of Computer Applications (MCA)'}
            </h3>
            <p className="text-[9px] text-slate-600 dark:text-slate-400 group-hover:text-slate-800 dark:group-hover:text-slate-300 transition-colors duration-500">
              {edu?.institution || 'Gurugram University'}
            </p>
          </div>
        </div>

        <span className="text-[9px] font-mono font-bold text-cyan-700 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-800/50 group-hover:border-cyan-400 px-2 py-0.5 rounded-lg transition-all duration-500 shrink-0">
          {edu?.year || '2025'}
        </span>
      </div>

      {/* Let's Connect Box */}
      <div id="contact" className="neon-card neon-card-pink group rounded-2xl p-2.5 sm:p-3 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 mb-1.5 pb-1 border-b border-slate-200 dark:border-slate-800/80">
            <div className="w-5 h-5 rounded-lg bg-pink-50 dark:bg-cyan-500/10 border border-pink-200 dark:border-cyan-500/30 flex items-center justify-center text-pink-600 dark:text-cyan-400 group-hover:scale-110 group-hover:-rotate-45 group-hover:border-pink-500 group-hover:bg-pink-100 dark:group-hover:bg-pink-500/20 group-hover:shadow-[0_0_14px_rgba(236,72,153,0.4)] transition-all duration-500">
              <Send className="w-2.5 h-2.5 -rotate-12" />
            </div>
            <h2 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white tracking-wide group-hover:text-pink-600 dark:group-hover:text-pink-200 transition-colors duration-500">
              Let&apos;s Connect
            </h2>
          </div>

          <p className="text-[10px] text-slate-600 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-slate-100 leading-snug mb-1.5 transition-colors duration-500">
            I&apos;m always open to discussing new opportunities, interesting projects and collaborations.
          </p>

          {/* Visible Direct Phone & Email Badges */}
          <div className="flex flex-wrap items-center gap-1.5 mb-1.5">
            {profile.phone && (
              <a
                href={`tel:${profile.phone.replace(/\s+/g, '')}`}
                title={`Call ${profile.phone}`}
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-500/10 dark:hover:bg-emerald-500/20 border border-emerald-200 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-300 text-[9.5px] font-mono font-semibold transition-all shadow-sm"
              >
                <Phone className="w-2.5 h-2.5 text-emerald-600 dark:text-emerald-400 animate-phone-ring" />
                <span>{profile.phone}</span>
              </a>
            )}

            <a
              href={`mailto:${profile.email}`}
              title={`Email ${profile.email}`}
              className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-cyan-50 hover:bg-cyan-100 dark:bg-cyan-500/10 dark:hover:bg-cyan-500/20 border border-cyan-200 dark:border-cyan-500/30 text-cyan-700 dark:text-cyan-300 text-[9.5px] font-mono font-semibold transition-all shadow-sm"
            >
              <Mail className="w-2.5 h-2.5 text-cyan-600 dark:text-cyan-400 animate-email-pulse" />
              <span>{profile.email}</span>
            </a>
          </div>
        </div>

        {/* Action Row */}
        <div className="flex items-center justify-between gap-2 pt-1.5 border-t border-slate-200 dark:border-slate-800/80">
          <div className="flex items-center gap-1.5">
            {/* Phone button with dialer trigger & ring animation */}
            {profile.phone && (
              <a
                href={`tel:${profile.phone.replace(/\s+/g, '')}`}
                aria-label={`Call ${profile.name || 'Abhishek'}`}
                title={`Call ${profile.phone}`}
                className="w-7 h-7 rounded-lg bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-700 dark:bg-slate-900 dark:border-slate-800 dark:text-emerald-400 dark:hover:text-white dark:hover:border-emerald-500 dark:hover:bg-emerald-500/10 flex items-center justify-center transition-all cursor-pointer group"
              >
                <Phone className="w-3.5 h-3.5 animate-phone-ring" />
              </a>
            )}

            {/* Email button with mail client trigger & pulse animation */}
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email Abhishek"
              title={`Email ${profile.email}`}
              className="w-7 h-7 rounded-lg bg-cyan-50 hover:bg-cyan-100 border border-cyan-200 text-cyan-700 dark:bg-slate-900 dark:border-slate-800 dark:text-cyan-400 dark:hover:text-white dark:hover:border-cyan-500 dark:hover:bg-cyan-500/10 flex items-center justify-center transition-all cursor-pointer group"
            >
              <Mail className="w-3.5 h-3.5 animate-email-pulse" />
            </a>

            {/* Location button with Google Maps trigger & pin bounce animation */}
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(profile.location || 'Gurugram, India')}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Location on Google Maps"
              title="Open Gurugram, India on Google Maps"
              className="w-7 h-7 rounded-lg bg-purple-50 hover:bg-purple-100 border border-purple-200 text-purple-700 dark:bg-slate-900 dark:border-slate-800 dark:text-purple-400 dark:hover:text-white dark:hover:border-purple-500 dark:hover:bg-purple-500/10 flex items-center justify-center transition-all cursor-pointer group"
            >
              <MapPin className="w-3.5 h-3.5 animate-pin-bounce" />
            </a>

            <a
              href={profile.linkedin_url || 'https://linkedin.com'}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              title="LinkedIn"
              className="w-7 h-7 rounded-lg bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-300 dark:hover:text-white dark:hover:border-indigo-500 flex items-center justify-center transition-all"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>

            <a
              href={profile.github_url || 'https://github.com/Abhishek-J-B-R-I/Abhishek'}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              title="GitHub"
              className="w-7 h-7 rounded-lg bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-300 dark:hover:text-white dark:hover:border-purple-500 flex items-center justify-center transition-all"
            >
              <Github className="w-3.5 h-3.5" />
            </a>
          </div>

          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-bold text-[11px] text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:opacity-95 shadow-md shadow-indigo-500/20 transition-all active:scale-95 shrink-0"
          >
            <span>Get In Touch</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
