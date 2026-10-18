'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Download, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { usePortfolio } from '@/context/PortfolioContext';
import { triggerResumeDownload, getAssetUrl } from '@/lib/downloadResume';

export function Header() {
  const { data } = usePortfolio();
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'education', 'contact'];
      for (const s of sections) {
        const el = document.getElementById(s);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(s);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: 'Home', href: '#hero' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'skills', label: 'Skills', href: '#skills' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'experience', label: 'Experience', href: '#experience' },
    { id: 'education', label: 'Education', href: '#education' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-200 ${
          scrolled
            ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-sm border-b border-border/80'
            : 'bg-page/80 backdrop-blur-sm border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand Wordmark with stylized 'A' icon */}
          <Link
            href="#hero"
            className="flex items-center gap-2.5 text-slate-900 dark:text-white group focus-visible:outline-brand"
            aria-label="Abhishek Portfolio"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-indigo-500 flex items-center justify-center text-white font-bold text-lg shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-200">
              A
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white">
              Abhishek
            </span>
          </Link>

          {/* Desktop Center Pill Navigation */}
          <nav
            aria-label="Primary"
            className="hidden lg:flex items-center gap-1 bg-white/95 dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 rounded-full px-3 py-1.5 shadow-sm"
          >
            {navLinks.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-indigo-50 dark:bg-indigo-950/70 text-indigo-600 dark:text-indigo-400 font-semibold shadow-xs'
                      : 'text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-50 dark:hover:bg-slate-700/50'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action Controls: Pill Theme Switcher + Resume Button */}
          <div className="flex items-center gap-3">
            {/* Sleek Pill Theme Switch */}
            <button
              type="button"
              id="theme-toggle"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              className="relative inline-flex items-center w-14 h-7 p-0.5 rounded-full bg-slate-200 dark:bg-slate-700 transition-colors duration-200 focus:outline-none cursor-pointer"
            >
              <div
                className={`w-6 h-6 rounded-full bg-white dark:bg-slate-900 shadow-md transform transition-transform duration-200 flex items-center justify-center ${
                  theme === 'dark' ? 'translate-x-7' : 'translate-x-0'
                }`}
              >
                {theme === 'dark' ? (
                  <Moon className="w-3.5 h-3.5 text-indigo-400" />
                ) : (
                  <Sun className="w-3.5 h-3.5 text-amber-500" />
                )}
              </div>
            </button>

            {/* Resume Button */}
            <a
              href={getAssetUrl(data.profile.resume_url || '/Abhishek_Resume.pdf')}
              download="Abhishek_Resume.pdf"
              onClick={(e) => {
                e.preventDefault();
                triggerResumeDownload(data);
              }}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 active:scale-95 shadow-md shadow-indigo-600/25 transition-all duration-200 cursor-pointer"
              title="Download Abhishek's Resume (PDF)"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Resume</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Panel */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white/98 dark:bg-slate-900/98 backdrop-blur-xl border-b border-border px-4 pt-3 pb-6 shadow-xl animate-fadeIn">
            <nav className="flex flex-col gap-1.5">
              {navLinks.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 font-semibold'
                      : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-3 mt-2 border-t border-border">
                <a
                  href={getAssetUrl(data.profile.resume_url || '/Abhishek_Resume.pdf')}
                  download="Abhishek_Resume.pdf"
                  onClick={(e) => {
                    e.preventDefault();
                    triggerResumeDownload(data);
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 shadow-md cursor-pointer"
                  title="Download Abhishek's Resume (PDF)"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
