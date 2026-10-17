'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Home,
  User,
  LayoutGrid,
  Calendar,
  FolderGit2,
  GraduationCap,
  Mail,
  Github,
  Linkedin,
  Menu,
  X,
} from 'lucide-react';
import { usePortfolio } from '@/context/PortfolioContext';

export function Sidebar() {
  const { data } = usePortfolio();
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'education', 'contact'];
      for (const s of sections) {
        const el = document.getElementById(s);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(s);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Home', icon: Home, href: '#hero' },
    { id: 'about', label: 'About', icon: User, href: '#about' },
    { id: 'skills', label: 'Skills', icon: LayoutGrid, href: '#skills' },
    { id: 'experience', label: 'Experience', icon: Calendar, href: '#experience' },
    { id: 'projects', label: 'Projects', icon: FolderGit2, href: '#projects' },
    { id: 'education', label: 'Education', icon: GraduationCap, href: '#education' },
    { id: 'contact', label: 'Contact', icon: Mail, href: '#contact' },
  ];

  return (
    <>
      {/* Mobile Top Floating Bar */}
      <div className="lg:hidden sticky top-0 z-50 flex items-center justify-between px-4 py-3 bg-neon-bg/95 backdrop-blur-xl border-b border-slate-800">
        <Link href="#hero" className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-cyan-400 via-indigo-500 to-purple-600 flex items-center justify-center text-white font-extrabold text-xs shadow-neonCyan">
            A
          </div>
          <span className="font-extrabold text-base tracking-wider text-white">
            ABHISHEK
          </span>
        </Link>

        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-1.5 rounded-lg border border-slate-800 bg-slate-900 text-white"
          aria-label="Toggle navigation"
        >
          {mobileMenuOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Slide-down Panel */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-14 z-40 bg-slate-950/98 backdrop-blur-2xl border-b border-slate-800 p-4 shadow-2xl animate-fadeIn">
          <nav className="flex flex-col gap-1.5">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-neonPurple'
                      : 'text-slate-400 hover:text-white hover:bg-slate-900'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </a>
              );
            })}
          </nav>
        </div>
      )}

      {/* Desktop Fixed Left Sidebar (Fitted to 100vh) */}
      <aside className="hidden lg:flex flex-col justify-between w-52 xl:w-56 h-screen fixed left-0 top-0 bg-[#070A12]/98 border-r border-slate-800/80 p-4 xl:p-5 z-40 select-none">
        <div>
          {/* Brand Logo */}
          <Link href="#hero" className="flex items-center gap-2.5 mb-6 xl:mb-8 group">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-400 via-indigo-500 to-purple-600 flex items-center justify-center text-white font-black text-sm shadow-neonCyan group-hover:scale-105 transition-transform duration-200">
              A
            </div>
            <span className="font-extrabold text-base tracking-wider text-white">
              ABHISHEK
            </span>
          </Link>

          {/* Navigation Items */}
          <nav className="flex flex-col gap-1 xl:gap-1.5" aria-label="Sidebar Navigation">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className={`flex items-center gap-3 px-3.5 py-2 xl:py-2.5 rounded-xl text-xs transition-all duration-150 ${
                    isActive
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-neonPurple font-bold'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60 font-medium'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                </a>
              );
            })}
          </nav>
        </div>

        {/* Bottom Slogan & Socials */}
        <div className="pt-4 border-t border-slate-800/80">
          <div className="text-[11px] text-slate-400 leading-snug font-sans mb-3">
            <div className="font-semibold text-slate-300">Build.</div>
            <div>Scalable Apps.</div>
            <div className="text-indigo-400 font-medium">Create Real Impact.</div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={data.profile.github_url || 'https://github.com/Abhishek-J-B-R-I/Abhishek'}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-7 h-7 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-500/50 hover:shadow-neonCyan transition-all"
            >
              <Github className="w-3.5 h-3.5" />
            </a>

            <a
              href={data.profile.linkedin_url || 'https://linkedin.com'}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-7 h-7 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500/50 hover:shadow-neonIndigo transition-all"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>

            <a
              href={`mailto:${data.profile.email}`}
              aria-label="Email"
              className="w-7 h-7 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-purple-500/50 hover:shadow-neonPurple transition-all"
            >
              <Mail className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
