'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, Mail, Briefcase, FolderGit2, GraduationCap, MapPin } from 'lucide-react';
import { usePortfolio } from '@/context/PortfolioContext';

export function Hero() {
  const { data } = usePortfolio();
  const { profile } = data;

  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative pt-6 pb-14 md:pt-12 md:pb-20 overflow-hidden hero-glow"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Info & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start order-1">
            {/* Pulsing Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/80 dark:border-emerald-800/80 text-emerald-700 dark:text-emerald-400 text-xs font-semibold mb-5 shadow-xs">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>{profile.availability_text || 'Available for Opportunities'}</span>
            </div>

            {/* Headline Title */}
            <div className="mb-3">
              <span className="block text-xl sm:text-2xl font-bold text-slate-700 dark:text-slate-300">
                Hi, I&apos;m
              </span>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mt-1">
                ABHISHEK <span className="inline-block transform hover:rotate-12 transition-transform duration-200">👋</span>
              </h1>
            </div>

            {/* Role Subtitle */}
            <h2 className="text-base sm:text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4 leading-snug max-w-2xl">
              Software Engineer | Flutter &amp; Backend-Integrated Application Development
            </h2>

            {/* Bio Summary Paragraph */}
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl mb-7">
              I build modern, scalable and user-friendly mobile applications with Flutter, integrate powerful backend services, and turn ideas into real-world products.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto mb-10">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-sm text-white bg-indigo-600 hover:bg-indigo-700 active:scale-95 shadow-lg shadow-indigo-600/25 transition-all duration-200 w-full sm:w-auto"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-sm text-slate-800 dark:text-slate-100 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 active:scale-95 shadow-xs transition-all duration-200 w-full sm:w-auto"
              >
                <Mail className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* 4 Stat Items Ribbon */}
            <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-200/80 dark:border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-100 dark:border-indigo-900/60 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-base font-bold text-slate-900 dark:text-white leading-tight">2+</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400">Years Experience</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-sky-50 dark:bg-sky-950/60 border border-sky-100 dark:border-sky-900/60 flex items-center justify-center text-sky-600 dark:text-sky-400 shrink-0">
                  <FolderGit2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-base font-bold text-slate-900 dark:text-white leading-tight">3+</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400">Projects</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950/60 border border-purple-100 dark:border-purple-900/60 flex items-center justify-center text-purple-600 dark:text-purple-400 shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-base font-bold text-slate-900 dark:text-white leading-tight">MCA</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400">Gurugram University</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-rose-50 dark:bg-rose-950/60 border border-rose-100 dark:border-rose-900/60 flex items-center justify-center text-rose-600 dark:text-rose-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-base font-bold text-slate-900 dark:text-white leading-tight">India</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400">Gurugram</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Mockup Artwork */}
          <div className="lg:col-span-5 flex justify-center order-2">
            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-none">
              {/* Soft Ambient Backdrop Blur */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-200/40 via-purple-200/30 to-sky-200/20 dark:from-indigo-900/20 dark:via-purple-900/20 dark:to-transparent rounded-3xl blur-2xl -z-10" />

              {/* Mockup Artwork Container */}
              <div className="relative rounded-3xl overflow-hidden border border-slate-200/60 dark:border-slate-800 bg-white/40 dark:bg-slate-900/40 backdrop-blur-xs shadow-card hover:shadow-cardHover transition-all duration-300">
                <Image
                  src="/images/hero-art.png"
                  alt="Abhishek - Flutter Software Engineer"
                  width={900}
                  height={650}
                  className="w-full h-auto object-cover object-center"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
