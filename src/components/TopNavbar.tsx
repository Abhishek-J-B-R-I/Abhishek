'use client';

import React from 'react';
import Link from 'next/link';
import { Download, Github, Linkedin, Mail, RefreshCw, Phone, Sun, Moon } from 'lucide-react';
import { usePortfolio } from '@/context/PortfolioContext';
import { useTheme } from '@/context/ThemeContext';

export function TopNavbar() {
  const { data, isSyncing, lastSyncedAt, syncNotification, refresh } = usePortfolio();
  const { theme, toggleTheme } = useTheme();
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
    <header className="w-full flex items-center justify-between px-3 sm:px-4 py-2 bg-white/85 dark:bg-[#0A0E1A]/90 backdrop-blur-md border border-slate-200/90 dark:border-slate-800/80 rounded-xl sm:rounded-2xl mb-2.5 shadow-sm dark:shadow-md select-none shrink-0 relative transition-colors duration-300">
      {/* Left: Brand Logo & Wordmark */}
      <Link href="#hero" className="flex items-center gap-2.5 group">
        <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-600 flex items-center justify-center text-white font-black text-xs shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-200">
          {(profile.name || 'Abhishek').charAt(0).toUpperCase()}
        </div>
        <span className="font-extrabold text-base tracking-wider text-slate-900 dark:text-white uppercase transition-colors duration-300">
          {profile.name || 'ABHISHEK'}
        </span>
      </Link>

      {/* Center: Clean Nav Pills (Visible on md+) */}
      <nav className="hidden md:flex items-center gap-1 bg-slate-100/90 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-full px-2 py-1 transition-colors duration-300">
        {navLinks.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="px-3 py-1 rounded-full text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-white dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800 transition-colors"
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* Right: Theme Toggle, Live Sheet, Availability, Socials & Resume CTA */}
      <div className="flex items-center gap-2">
        {/* Light / Dark Mode Toggle Button */}
        <button
          type="button"
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          className="w-7 h-7 rounded-lg bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 dark:bg-slate-900 dark:border-slate-800 dark:text-amber-400 dark:hover:text-amber-300 dark:hover:bg-slate-800 flex items-center justify-center transition-all cursor-pointer shadow-sm"
        >
          {theme === 'dark' ? (
            <Sun className="w-3.5 h-3.5 animate-spin-slow transition-transform hover:rotate-45" />
          ) : (
            <Moon className="w-3.5 h-3.5 text-indigo-600 transition-transform hover:-rotate-12" />
          )}
        </button>

        {/* Live Sheet Status Pill with Last Synced Timestamp */}
        <button
          type="button"
          onClick={() => refresh()}
          disabled={isSyncing}
          title={`Google Sheet: ${data.source === 'google_sheets' ? 'Connected Live' : 'Bundled Fallback'}. Last synced: ${lastSyncedAt || 'Just now'}. Click to refresh latest Google Sheet edits.`}
          className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-indigo-50 hover:bg-indigo-100/80 border border-indigo-200 text-indigo-700 dark:bg-cyan-500/10 dark:hover:bg-cyan-500/20 dark:border-cyan-500/30 dark:text-cyan-300 text-[10px] font-mono transition-all cursor-pointer"
        >
          <span className={`w-1.5 h-1.5 rounded-full ${isSyncing ? 'bg-amber-400 animate-ping' : 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]'}`} />
          <span>
            {isSyncing
              ? 'Syncing...'
              : data.source === 'google_sheets'
                ? `Sheet: ${lastSyncedAt || 'Live'}`
                : 'Sheet Fallback'}
          </span>
          <RefreshCw className={`w-2.5 h-2.5 ml-0.5 ${isSyncing ? 'animate-spin text-indigo-600 dark:text-cyan-400' : 'text-slate-400'}`} />
        </button>

        {/* Quick Phone Call with ring animation */}
        {profile.phone && (
          <a
            href={`tel:${profile.phone.replace(/\s+/g, '')}`}
            aria-label={`Call ${profile.name || 'Abhishek'}`}
            title={`Call ${profile.phone}`}
            className="w-7 h-7 rounded-lg bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-700 dark:bg-slate-900 dark:border-slate-800 dark:text-emerald-400 dark:hover:text-white dark:hover:border-emerald-500 dark:hover:bg-emerald-500/10 flex items-center justify-center transition-all cursor-pointer"
          >
            <span className="animate-phone-ring">
              <Phone className="w-3.5 h-3.5" />
            </span>
          </a>
        )}

        {/* Quick Mail with pulse animation */}
        <a
          href={`mailto:${profile.email}`}
          aria-label="Email Abhishek"
          title={`Email ${profile.email}`}
          className="w-7 h-7 rounded-lg bg-cyan-50 hover:bg-cyan-100 border border-cyan-200 text-cyan-700 dark:bg-slate-900 dark:border-slate-800 dark:text-cyan-400 dark:hover:text-white dark:hover:border-cyan-500 dark:hover:bg-cyan-500/10 flex items-center justify-center transition-all cursor-pointer"
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
          className="w-7 h-7 rounded-lg bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-400 dark:hover:text-white dark:hover:border-cyan-500 flex items-center justify-center transition-all"
        >
          <Github className="w-3.5 h-3.5" />
        </a>

        <a
          href={profile.linkedin_url || 'https://linkedin.com'}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          title="LinkedIn"
          className="w-7 h-7 rounded-lg bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-400 dark:hover:text-white dark:hover:border-indigo-500 flex items-center justify-center transition-all"
        >
          <Linkedin className="w-3.5 h-3.5" />
        </a>

        {/* Resume Button */}
        <a
          href={profile.resume_url || '#contact'}
          target={profile.resume_url ? '_blank' : '_self'}
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-95 shadow-md shadow-indigo-500/25 transition-all"
        >
          <Download className="w-3 h-3" />
          <span>Resume</span>
        </a>
      </div>

      {/* Floating Sync Notification Toast */}
      {syncNotification && (
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-3 py-1 bg-white/95 dark:bg-slate-900/95 border border-indigo-200 dark:border-cyan-500/40 rounded-full text-[10px] text-indigo-700 dark:text-cyan-300 font-mono shadow-lg flex items-center gap-2 backdrop-blur-md animate-fade-in z-50 pointer-events-none">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-cyan-400 animate-pulse" />
          <span>{syncNotification}</span>
        </div>
      )}
    </header>
  );
}
