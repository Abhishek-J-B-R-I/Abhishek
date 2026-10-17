'use client';

import React from 'react';
import { GraduationCap, Send, Mail, Linkedin, Github, Phone, MapPin } from 'lucide-react';
import { usePortfolio } from '@/context/PortfolioContext';

export function NeonEducationAndConnect() {
  const { data } = usePortfolio();
  const { profile } = data;

  return (
    <div id="education" className="space-y-2 h-full flex flex-col justify-between">
      {/* Education Box */}
      <div className="neon-card neon-card-purple group rounded-2xl p-2.5 sm:p-3 flex items-center justify-between gap-2.5">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:scale-110 group-hover:border-purple-400 group-hover:bg-purple-500/20 group-hover:shadow-[0_0_14px_rgba(168,85,247,0.4)] transition-all duration-500 shrink-0">
            <GraduationCap className="w-3 h-3" />
          </div>
          <div>
            <h3 className="text-[11px] font-bold text-white group-hover:text-purple-200 transition-colors duration-500 leading-tight">
              Master of Computer Applications (MCA)
            </h3>
            <p className="text-[9px] text-slate-400 group-hover:text-slate-300 transition-colors duration-500">
              Gurugram University
            </p>
          </div>
        </div>

        <span className="text-[9px] font-mono font-bold text-cyan-400 bg-cyan-950/40 border border-cyan-800/50 group-hover:border-cyan-400 group-hover:shadow-[0_0_10px_rgba(6,182,212,0.4)] px-2 py-0.5 rounded-lg transition-all duration-500 shrink-0">
          2025
        </span>
      </div>

      {/* Let's Connect Box */}
      <div id="contact" className="neon-card neon-card-pink group rounded-2xl p-2.5 sm:p-3 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 mb-1.5 pb-1 border-b border-slate-800/80">
            <div className="w-5 h-5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:-rotate-45 group-hover:border-pink-400 group-hover:bg-pink-500/20 group-hover:shadow-[0_0_14px_rgba(236,72,153,0.4)] transition-all duration-500">
              <Send className="w-2.5 h-2.5 -rotate-12" />
            </div>
            <h2 className="text-xs sm:text-sm font-bold text-white tracking-wide group-hover:text-pink-200 transition-colors duration-500">
              Let&apos;s Connect
            </h2>
          </div>

          <p className="text-[10px] text-slate-300 group-hover:text-slate-100 leading-snug mb-1.5 transition-colors duration-500">
            I&apos;m always open to discussing new opportunities, interesting projects and collaborations.
          </p>
        </div>

        {/* Action Row */}
        <div className="flex items-center justify-between gap-2 pt-1.5 border-t border-slate-800/80">
          <div className="flex items-center gap-1.5">
            {/* Phone button with dialer trigger & ring animation */}
            <a
              href={`tel:${(profile.phone || '+91 8299398980').replace(/\s+/g, '')}`}
              aria-label="Call Abhishek"
              title={`Call ${profile.phone || '+91 8299398980'}`}
              className="w-7 h-7 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400 hover:text-white hover:border-emerald-500 hover:bg-emerald-500/10 transition-all cursor-pointer group"
            >
              <Phone className="w-3.5 h-3.5 animate-phone-ring" />
            </a>

            {/* Email button with mail client trigger & pulse animation */}
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email Abhishek"
              title={`Email ${profile.email}`}
              className="w-7 h-7 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 hover:text-white hover:border-cyan-500 hover:bg-cyan-500/10 transition-all cursor-pointer group"
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
              className="w-7 h-7 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-purple-400 hover:text-white hover:border-purple-500 hover:bg-purple-500/10 transition-all cursor-pointer group"
            >
              <MapPin className="w-3.5 h-3.5 animate-pin-bounce" />
            </a>

            <a
              href={profile.linkedin_url || 'https://linkedin.com'}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              title="LinkedIn"
              className="w-7 h-7 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-indigo-500 transition-all"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>

            <a
              href={profile.github_url || 'https://github.com/Abhishek-J-B-R-I/Abhishek'}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              title="GitHub"
              className="w-7 h-7 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-purple-500 transition-all"
            >
              <Github className="w-3.5 h-3.5" />
            </a>
          </div>

          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-bold text-[11px] text-white bg-gradient-to-r from-indigo-500 via-purple-600 to-purple-500 hover:opacity-95 shadow-neonPurple transition-all active:scale-95 shrink-0"
          >
            <span>Get In Touch</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
