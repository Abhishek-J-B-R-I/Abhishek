'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  ArrowLeft,
  User,
  LayoutGrid,
  FolderGit2,
  Briefcase,
  GraduationCap,
  Send,
  Phone,
  Mail,
  Linkedin,
  Github,
  ExternalLink,
  Code2,
  Cpu,
  Server,
  Database,
  Smartphone,
  CheckCircle2,
  Sparkles,
  MapPin,
  ShieldCheck,
  QrCode,
  MessageSquare,
  Sun,
  Download,
} from 'lucide-react';
import { usePortfolio } from '@/context/PortfolioContext';
import { triggerResumeDownload, getAssetUrl } from '@/lib/downloadResume';

export type NavTab = 'all' | 'about' | 'skills' | 'projects' | 'experience' | 'education' | 'contact';

interface FocusedSectionViewProps {
  activeTab: 'about' | 'skills' | 'projects' | 'experience' | 'education' | 'contact';
  onBackToAll: () => void;
  onSelectTab: (tab: NavTab) => void;
}

export function FocusedSectionView({ activeTab, onBackToAll }: FocusedSectionViewProps) {
  const { data } = usePortfolio();
  const { profile, education = [], experience = [], projects = [], skillsByGroup = {} } = data;
  const edu = education[0];

  // Contact form submission simulation state
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => setFormSent(false), 4000);
  };

  return (
    <div className="w-full flex-1 flex flex-col min-h-0 animate-tab-enter">
      {/* Clean Header Bar: ONLY "Back to Overview" + Section Badge (NO duplicate nav pills!) */}
      <div className="w-full flex items-center justify-between pb-2 mb-2 border-b border-slate-200 dark:border-slate-800/80 shrink-0">
        <button
          type="button"
          onClick={onBackToAll}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-white bg-slate-100 hover:bg-indigo-600 dark:bg-slate-900/90 dark:hover:bg-indigo-600 border border-slate-200 dark:border-slate-800 hover:border-indigo-500 shadow-sm transition-all duration-200 group cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Overview</span>
        </button>

        <div className="text-[11px] font-mono text-cyan-600 dark:text-cyan-400 font-bold tracking-wider uppercase">
          ✦ {activeTab.toUpperCase()} ✦
        </div>
      </div>

      {/* Main Focused Section Content */}
      <div className="flex-1 w-full min-h-0 overflow-y-auto pr-1">
        {/* ======================================================== */}
        {/* 1. ABOUT ME (FOCUSED VIEW) */}
        {/* ======================================================== */}
        {activeTab === 'about' && (
          <div className="space-y-4 max-w-4xl mx-auto py-2">
            <div className="neon-card neon-card-cyan rounded-2xl p-5 sm:p-6">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <h1 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-wide">
                    About Abhishek
                  </h1>
                  <p className="text-xs text-cyan-600 dark:text-cyan-400 font-mono">
                    Software Engineer • Flutter & Backend Integration
                  </p>
                </div>
              </div>

              {/* Bio & Philosophy */}
              <div className="mt-4 space-y-3 text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                <p>
                  I am a passionate <strong>Software Engineer</strong> specializing in crafting high-performance,
                  scalable, and visually stunning cross-platform mobile applications. With over 2+ years of hands-on
                  production experience, I bridge the gap between creative UI/UX and robust cloud backends.
                </p>
                <p>
                  My engineering expertise spans the full mobile application lifecycle: from architecting maintainable
                  state management using <strong>BLoC, Provider, and Riverpod</strong> to integrating complex
                  RESTful APIs, Firebase real-time data synchronization, push notifications, and payment gateways.
                </p>
              </div>

              {/* Core Engineering Pillars */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-5">
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-bold text-xs mb-1">
                    <Cpu className="w-4 h-4" />
                    <span>Core Computer Science</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300">
                    Strong foundation in Data Structures, Algorithms, Object-Oriented System Design, and DBMS.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-bold text-xs mb-1">
                    <Server className="w-4 h-4" />
                    <span>Cloud & Backend Sync</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300">
                    REST APIs, Firebase Authentication, Cloud Firestore, Cloud Messaging, and WebSockets.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-xs mb-1">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Production Reliability</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300">
                    Proactive crash prevention, 60 FPS smooth rendering, automated Git CI/CD, and live feature ownership.
                  </p>
                </div>
              </div>

              {/* Verified Metrics Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-5 pt-4 border-t border-slate-200 dark:border-slate-800">
                <div className="text-center p-2 rounded-lg bg-cyan-50/50 dark:bg-cyan-950/20">
                  <div className="text-lg font-black text-cyan-600 dark:text-cyan-400">2+</div>
                  <div className="text-[10px] text-slate-600 dark:text-slate-400 uppercase font-mono">Years Exp</div>
                </div>
                <div className="text-center p-2 rounded-lg bg-purple-50/50 dark:bg-purple-950/20">
                  <div className="text-lg font-black text-purple-600 dark:text-purple-400">15+</div>
                  <div className="text-[10px] text-slate-600 dark:text-slate-400 uppercase font-mono">Apps Built</div>
                </div>
                <div className="text-center p-2 rounded-lg bg-emerald-50/50 dark:bg-emerald-950/20">
                  <div className="text-lg font-black text-emerald-600 dark:text-emerald-400">99.9%</div>
                  <div className="text-[10px] text-slate-600 dark:text-slate-400 uppercase font-mono">Crash-Free</div>
                </div>
                <div className="text-center p-2 rounded-lg bg-indigo-50/50 dark:bg-indigo-950/20">
                  <div className="text-lg font-black text-indigo-600 dark:text-indigo-400">MCA</div>
                  <div className="text-[10px] text-slate-600 dark:text-slate-400 uppercase font-mono">Gurugram Univ</div>
                </div>
              </div>

              {/* Action Strip: Download Resume CTA */}
              <div className="mt-5 pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-xs text-slate-500 font-mono">
                  Get the verified engineering background and credentials
                </span>
                <a
                  href={getAssetUrl(profile.resume_url || '/Abhishek_Resume.pdf')}
                  download="Abhishek_Resume.pdf"
                  onClick={(e) => {
                    e.preventDefault();
                    triggerResumeDownload(data);
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-95 shadow-md shadow-indigo-500/25 transition-all cursor-pointer active:scale-95 shrink-0"
                  title="Download Abhishek's Resume (PDF)"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume (PDF)</span>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* 2. SKILLS (FOCUSED VIEW) */}
        {/* ======================================================== */}
        {activeTab === 'skills' && (
          <div className="space-y-4 max-w-4xl mx-auto py-2">
            <div className="neon-card neon-card-purple rounded-2xl p-5 sm:p-6">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/30 flex items-center justify-center text-purple-600 dark:text-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.3)]">
                  <LayoutGrid className="w-5 h-5" />
                </div>
                <div>
                  <h1 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-wide">
                    Skills & Technical Arsenal
                  </h1>
                  <p className="text-xs text-purple-600 dark:text-purple-400 font-mono">
                    Languages • Frameworks • Backend & Cloud • Architecture
                  </p>
                </div>
              </div>

              {/* Skills Grid by Category */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
                {Object.keys(skillsByGroup).map((grpName) => {
                  const skills = skillsByGroup[grpName].map((s) => s.name);
                  return (
                    <div
                      key={grpName}
                      className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-purple-500/50 transition-all shadow-sm"
                    >
                      <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase font-mono tracking-wider mb-2.5 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                        <span>{grpName}</span>
                      </h3>
                      <div className="flex flex-wrap gap-1.5">
                        {skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 text-slate-800 dark:text-slate-200 shadow-sm hover:border-cyan-400 hover:text-cyan-400 transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* 3. PROJECTS (FOCUSED VIEW - 100% RAZOR-SHARP 16:9 MOCKUPS!) */}
        {/* ======================================================== */}
        {activeTab === 'projects' && (
          <div className="space-y-4 max-w-5xl mx-auto py-2">
            <div className="neon-card neon-card-cyan rounded-2xl p-5 sm:p-6">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                  <FolderGit2 className="w-5 h-5" />
                </div>
                <div>
                  <h1 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-wide">
                    Featured Mobile Projects
                  </h1>
                  <p className="text-xs text-cyan-600 dark:text-cyan-400 font-mono">
                    Production Applications • Architecture • Live Demonstrations
                  </p>
                </div>
              </div>

              {/* Projects Grid: 100% Razor Sharp 16:9 Mockups with Zero Blur */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
                {/* 1. Loyalty Rewards App */}
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-indigo-500 transition-all flex flex-col justify-between group">
                  <div>
                    <div className="w-full aspect-video rounded-xl overflow-hidden relative mb-3 bg-slate-950 border border-indigo-500/30 shadow-lg group-hover:scale-[1.02] transition-transform duration-300">
                      <Image
                        src={getAssetUrl('/images/mockup-loyalty.jpg')}
                        alt="Loyalty Rewards App 4K UI Mockup"
                        fill
                        priority
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white leading-tight">
                      Loyalty Rewards App
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                      Scan QR codes, track customer points, and redeem gift coupons in real-time with smooth wallet integration.
                    </p>
                  </div>
                  <div className="mt-3 pt-2.5 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 font-semibold">
                        Flutter
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400 font-semibold">
                        Firebase
                      </span>
                    </div>
                    <a
                      href="#contact"
                      className="text-xs font-bold text-cyan-600 dark:text-cyan-400 hover:underline inline-flex items-center gap-1"
                    >
                      Demo <ArrowLeft className="w-3 h-3 rotate-180" />
                    </a>
                  </div>
                </div>

                {/* 2. Real-Time Chat App */}
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-cyan-500 transition-all flex flex-col justify-between group">
                  <div>
                    <div className="w-full aspect-video rounded-xl overflow-hidden relative mb-3 bg-slate-950 border border-cyan-500/30 shadow-lg group-hover:scale-[1.02] transition-transform duration-300">
                      <Image
                        src={getAssetUrl('/images/mockup-chat.jpg')}
                        alt="Real-Time Chat App 4K UI Mockup"
                        fill
                        priority
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white leading-tight">
                      Real-Time Chat App
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                      Instant messaging with typing indicators, online/offline presence, media attachments, and Firebase Cloud Messaging.
                    </p>
                  </div>
                  <div className="mt-3 pt-2.5 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-50 dark:bg-cyan-950/40 text-cyan-600 dark:text-cyan-400 font-semibold">
                        Flutter
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 font-semibold">
                        WebSockets
                      </span>
                    </div>
                    <a
                      href="#contact"
                      className="text-xs font-bold text-cyan-600 dark:text-cyan-400 hover:underline inline-flex items-center gap-1"
                    >
                      Demo <ArrowLeft className="w-3 h-3 rotate-180" />
                    </a>
                  </div>
                </div>

                {/* 3. Weather Forecast App */}
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-amber-500 transition-all flex flex-col justify-between group">
                  <div>
                    <div className="w-full aspect-video rounded-xl overflow-hidden relative mb-3 bg-slate-950 border border-amber-500/30 shadow-lg group-hover:scale-[1.02] transition-transform duration-300">
                      <Image
                        src={getAssetUrl('/images/mockup-weather.jpg')}
                        alt="Weather Forecast App 4K UI Mockup"
                        fill
                        priority
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white leading-tight">
                      Weather Forecast App
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                      Hyper-local live meteorological data, hourly curves, radar maps, and atmospheric humidity graphs.
                    </p>
                  </div>
                  <div className="mt-3 pt-2.5 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 font-semibold">
                        OpenWeather API
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sky-50 dark:bg-sky-950/40 text-sky-600 dark:text-sky-400 font-semibold">
                        BLoC
                      </span>
                    </div>
                    <a
                      href="#contact"
                      className="text-xs font-bold text-cyan-600 dark:text-cyan-400 hover:underline inline-flex items-center gap-1"
                    >
                      Demo <ArrowLeft className="w-3 h-3 rotate-180" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* 4. EXPERIENCE (FOCUSED VIEW) */}
        {/* ======================================================== */}
        {activeTab === 'experience' && (
          <div className="space-y-4 max-w-4xl mx-auto py-2">
            <div className="neon-card neon-card-indigo rounded-2xl p-5 sm:p-6">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shadow-[0_0_20px_rgba(99,102,241,0.3)]">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h1 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-wide">
                    Career Timeline & Experience
                  </h1>
                  <p className="text-xs text-indigo-600 dark:text-indigo-400 font-mono">
                    {data.experience?.[0]?.company || 'WSY'} • Production Mobile Engineering • Client Deliverables
                  </p>
                </div>
              </div>

              {/* Roles Timeline */}
              <div className="mt-5 space-y-4">
                {/* Role 1 */}
                <div className="relative pl-6 border-l-2 border-indigo-500/60 pb-2">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-indigo-600 border-2 border-white dark:border-slate-900 shadow-[0_0_12px_#6366f1]" />
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">
                      Associate Software Engineer (Flutter)
                    </h3>
                    <span className="text-xs font-mono font-semibold text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/40 px-2.5 py-0.5 rounded-full w-fit mt-1 sm:mt-0">
                      Mar 2025 – Present
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
                    {data.experience?.[0]?.company || 'WSY'} • Gurugram, India
                  </p>
                  <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-500 font-bold">▸</span>
                      <span>Architect and maintain full-lifecycle production mobile applications end-to-end.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-500 font-bold">▸</span>
                      <span>Integrate mission-critical REST APIs, payment gateways, and Firebase authentication.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-500 font-bold">▸</span>
                      <span>Collaborate in agile sprints, optimize memory footprints, and achieve 99.9% crash-free sessions.</span>
                    </li>
                  </ul>
                </div>

                {/* Role 2 */}
                <div className="relative pl-6 border-l-2 border-slate-300 dark:border-slate-800 pb-2">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-400 dark:bg-slate-700 border-2 border-white dark:border-slate-900" />
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">
                      Flutter Intern (UI/UX Engineering)
                    </h3>
                    <span className="text-xs font-mono font-semibold text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-0.5 rounded-full w-fit mt-1 sm:mt-0">
                      Aug 2024 – Mar 2025
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-slate-500 mb-2">
                    {data.experience?.[0]?.company || 'WSY'} • Gurugram, India
                  </p>
                  <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="text-slate-400 font-bold">▸</span>
                      <span>Translated complex Figma design systems into pixel-perfect, responsive Flutter interfaces.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-slate-400 font-bold">▸</span>
                      <span>Implemented unit and widget tests, reducing UI bug regression by 25%.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Action Strip: Download Resume CTA */}
              <div className="mt-5 pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-xs text-slate-500 font-mono">
                  Looking for full work history, technical scope, and project references?
                </span>
                <a
                  href={getAssetUrl(profile.resume_url || '/Abhishek_Resume.pdf')}
                  download="Abhishek_Resume.pdf"
                  onClick={(e) => {
                    e.preventDefault();
                    triggerResumeDownload(data);
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-95 shadow-md shadow-indigo-500/25 transition-all cursor-pointer active:scale-95 shrink-0"
                  title="Download Abhishek's Resume (PDF)"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Full Resume (PDF)</span>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* 5. EDUCATION (FOCUSED VIEW) */}
        {/* ======================================================== */}
        {activeTab === 'education' && (
          <div className="space-y-4 max-w-4xl mx-auto py-2">
            <div className="neon-card neon-card-purple rounded-2xl p-5 sm:p-6">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/30 flex items-center justify-center text-purple-600 dark:text-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.3)]">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h1 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-wide">
                    Education & Academic Credentials
                  </h1>
                  <p className="text-xs text-purple-600 dark:text-purple-400 font-mono">
                    Master of Computer Applications • Advanced Computer Science
                  </p>
                </div>
              </div>

              {/* Education Degree Details */}
              <div className="mt-5 p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">
                      {edu?.degree || 'Master of Computer Applications (MCA)'}
                    </h3>
                    <p className="text-xs font-semibold text-purple-600 dark:text-purple-400">
                      {edu?.institution || 'Gurugram University, Haryana, India'}
                    </p>
                  </div>
                  <span className="text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-800/50 px-3 py-1 rounded-md w-fit">
                    Graduation: {edu?.year || '2025'}
                  </span>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800">
                  <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase font-mono mb-2">
                    Core Computer Science Curriculum:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 dark:text-slate-300">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
                      <span>Advanced Data Structures & Algorithms</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
                      <span>Mobile Systems & Software Architecture</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
                      <span>Relational & NoSQL Database Management</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
                      <span>Cloud Computing & Microservices Integration</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* 6. CONTACT (FOCUSED VIEW) */}
        {/* ======================================================== */}
        {activeTab === 'contact' && (
          <div className="space-y-4 max-w-4xl mx-auto py-2">
            <div className="neon-card neon-card-pink rounded-2xl p-5 sm:p-6">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-pink-50 dark:bg-pink-500/10 border border-pink-200 dark:border-pink-500/30 flex items-center justify-center text-pink-600 dark:text-pink-400 shadow-[0_0_20px_rgba(236,72,153,0.3)]">
                  <Send className="w-5 h-5 -rotate-12" />
                </div>
                <div>
                  <h1 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-wide">
                    Let&apos;s Connect & Collaborate
                  </h1>
                  <p className="text-xs text-pink-600 dark:text-pink-400 font-mono">
                    Available for Full-time Roles, Freelance & Contract Projects
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
                {/* Contact Information Cards */}
                <div className="space-y-3">
                  <h3 className="text-xs font-bold uppercase font-mono tracking-wider text-slate-500 dark:text-slate-400">
                    Direct Contact Channels
                  </h3>

                  {/* Email */}
                  <a
                    href={`mailto:${profile.email}`}
                    className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-cyan-400 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-cyan-50 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-500 font-mono">Email Address</div>
                      <div className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-cyan-400">
                        {profile.email}
                      </div>
                    </div>
                  </a>

                  {/* Phone */}
                  {profile.phone && (
                    <a
                      href={`tel:${profile.phone.replace(/\s+/g, '')}`}
                      className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-emerald-400 transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[10px] text-slate-500 font-mono">Phone / WhatsApp</div>
                        <div className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-emerald-400">
                          {profile.phone}
                        </div>
                      </div>
                    </a>
                  )}

                  {/* Location */}
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                    <div className="w-8 h-8 rounded-lg bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-500 font-mono">Location</div>
                      <div className="text-xs font-bold text-slate-900 dark:text-white">
                        {profile.location || 'Gurugram, Haryana, India'}
                      </div>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex items-center gap-2 pt-2">
                    <a
                      href={profile.github_url || 'https://github.com/Abhishek-J-B-R-I/Abhishek'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 p-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-xs font-semibold text-slate-800 dark:text-white transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>GitHub</span>
                    </a>

                    <a
                      href={profile.linkedin_url || 'https://linkedin.com'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 p-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-xs font-semibold text-slate-800 dark:text-white transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                      <span>LinkedIn</span>
                    </a>
                  </div>

                  {/* Download Resume Button */}
                  <a
                    href={getAssetUrl(profile.resume_url || '/Abhishek_Resume.pdf')}
                    download="Abhishek_Resume.pdf"
                    onClick={(e) => {
                      e.preventDefault();
                      triggerResumeDownload(data);
                    }}
                    className="w-full flex items-center justify-center gap-2 p-3 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-bold text-xs shadow-md shadow-indigo-500/25 hover:opacity-95 transition-all cursor-pointer active:scale-98"
                    title="Download Abhishek's Resume (PDF)"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Complete Resume (PDF)</span>
                  </a>
                </div>

                {/* Send a Message Form */}
                <form
                  onSubmit={handleContactSubmit}
                  className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <h3 className="text-xs font-bold uppercase font-mono tracking-wider text-slate-500 dark:text-slate-400">
                      Send a Message
                    </h3>

                    <div>
                      <label className="text-[10px] font-mono text-slate-500 block mb-1">Your Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] font-mono text-slate-500 block mb-1">Your Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] font-mono text-slate-500 block mb-1">Message</label>
                      <textarea
                        required
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Hi Abhishek, let's discuss a mobile project..."
                        className="w-full px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 resize-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="mt-3 w-full py-2 rounded-lg bg-gradient-to-r from-pink-500 via-indigo-600 to-cyan-500 text-white font-bold text-xs shadow-md shadow-indigo-500/20 hover:opacity-95 transition-opacity flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    {formSent ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                        <span>Message Sent Successfully!</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
