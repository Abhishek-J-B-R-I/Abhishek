'use client';

import React from 'react';
import Link from 'next/link';
import { Download, Github, Linkedin, Mail, RefreshCw, Phone } from 'lucide-react';
import { usePortfolio } from '@/context/PortfolioContext';

export function TopNavbar() {
  const { data, isSyncing, refresh } = usePortfolio();
  const { profile } = data;

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="w-full flex items-center justify-between px-3 sm:px-4 py-2 bg-[#0A0E1A]/90 backdrop-blur-md border border-slate-800/80 rounded-xl sm:rounded-2xl mb-2.5 shadow-md select-none shrink-0">
      {/* Left: Brand Logo & Wordmark */}
      <Link href="#hero" className="flex items-center gap-2.5 group">
        <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-cyan-400 via-indigo-500 to-purple-600 flex items-center justify-center text-white font-black text-xs shadow-neonCyan group-hover:scale-105 transition-transform duration-200">
          A
        </div>
        <span className="font-extrabold text-base tracking-wider text-white">
          ABHISHEK
        </span>
      </Link>

      {/* Center: Clean Nav Pills (Visible on md+) */}
      <nav className="hidden md:flex items-center gap-1 bg-slate-900/80 border border-slate-800 rounded-full px-2 py-1">
        {navLinks.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="px-3 py-1 rounded-full text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* Right: Availability, Socials & Resume CTA */}
      <div className="flex items-center gap-2.5">
        {/* Status Pill */}
        <div className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>Available</span>
        </div>

        {/* Quick Phone Call with ring animation */}
        <a
          href={`tel:${(profile.phone || '+91 8299398980').replace(/\s+/g, '')}`}
          aria-label="Call Abhishek"
          title={`Call ${profile.phone || '+91 8299398980'}`}
          className="w-7 h-7 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400 hover:text-white hover:border-emerald-500 hover:bg-emerald-500/10 transition-all cursor-pointer"
        >
          <Phone className="w-3.5 h-3.5 animate-phone-ring" />
        </a>

        {/* Quick Mail with pulse animation */}
        <a
          href={`mailto:${profile.email}`}
          aria-label="Email Abhishek"
          title={`Email ${profile.email}`}
          className="w-7 h-7 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 hover:text-white hover:border-cyan-500 hover:bg-cyan-500/10 transition-all cursor-pointer"
        >
          <Mail className="w-3.5 h-3.5 animate-email-pulse" />
        </a>

        {/* Social Icons */}
        <a
          href={profile.github_url || 'https://github.com/Abhishek-J-B-R-I/Abhishek'}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          title="GitHub"
          className="w-7 h-7 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-500 transition-all"
        >
          <Github className="w-3.5 h-3.5" />
        </a>

        <a
          href={profile.linkedin_url || 'https://linkedin.com'}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          title="LinkedIn"
          className="w-7 h-7 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500 transition-all"
        >
          <Linkedin className="w-3.5 h-3.5" />
        </a>

        {/* Resume Button */}
        <a
          href={profile.resume_url || '#contact'}
          target={profile.resume_url ? '_blank' : '_self'}
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-600 hover:opacity-95 shadow-neonPurple transition-all"
        >
          <Download className="w-3 h-3" />
          <span>Resume</span>
        </a>

        {/* Sheet Sync Indicator */}
        <button
          type="button"
          onClick={() => refresh()}
          disabled={isSyncing}
          title="Refresh from Google Sheet"
          aria-label="Refresh content from Google Sheet"
          className="w-7 h-7 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-all cursor-pointer"
        >
          <RefreshCw className={`w-3 h-3 ${isSyncing ? 'animate-spin text-cyan-400' : ''}`} />
        </button>
      </div>
    </header>
  );
}
