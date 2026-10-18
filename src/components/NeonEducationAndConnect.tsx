'use client';

import { GraduationCap, Send, Mail, Linkedin, Github, Phone, MapPin, Download } from 'lucide-react';
import { usePortfolio } from '@/context/PortfolioContext';
import { triggerResumeDownload, getAssetUrl } from '@/lib/downloadResume';

export function NeonEducationAndConnect() {
  const { data } = usePortfolio();
  const { profile } = data;
  const edu = data.education?.[0];

  return (
    <div id="education" className="flex flex-col justify-between h-full gap-2 transition-all duration-300">
      {/* Education Box */}
      <div className="neon-card neon-card-purple group rounded-xl p-2 sm:p-2.5 flex items-center justify-between gap-2 shrink-0">
        <div className="flex items-center gap-2 min-w-0">
          <div className="w-5 h-5 rounded-lg bg-purple-50 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/30 flex items-center justify-center text-purple-700 dark:text-purple-400 group-hover:scale-110 group-hover:border-purple-500 group-hover:bg-purple-100 dark:group-hover:bg-purple-500/20 group-hover:shadow-[0_0_14px_rgba(168,85,247,0.4)] transition-all duration-500 shrink-0">
            <GraduationCap className="w-2.5 h-2.5" />
          </div>
          <div className="min-w-0">
            <h3 className="text-[10.5px] font-bold text-slate-900 dark:text-white group-hover:text-purple-700 dark:group-hover:text-purple-200 transition-colors duration-500 leading-tight truncate">
              {edu?.degree || 'Master of Computer Applications (MCA)'}
            </h3>
            <p className="text-[8.5px] text-slate-600 dark:text-slate-400 group-hover:text-slate-800 dark:group-hover:text-slate-300 transition-colors duration-500 truncate">
              {edu?.institution || 'Gurugram University'}
            </p>
          </div>
        </div>

        <span className="text-[8.5px] font-mono font-bold text-cyan-700 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-800/50 group-hover:border-cyan-400 px-2 py-0.5 rounded-md transition-all duration-500 shrink-0">
          {edu?.year || '2025'}
        </span>
      </div>

      {/* Let's Connect Box */}
      <div id="contact" className="neon-card neon-card-pink group rounded-xl p-2.5 sm:p-3 flex flex-col justify-between flex-1">
        <div>
          <div className="flex items-center gap-1.5 mb-1 pb-1 border-b border-slate-200 dark:border-slate-800/80">
            <div className="w-4 h-4 rounded-md bg-pink-50 dark:bg-cyan-500/10 border border-pink-200 dark:border-cyan-500/30 flex items-center justify-center text-pink-600 dark:text-cyan-400 group-hover:scale-110 group-hover:-rotate-45 group-hover:border-pink-500 group-hover:bg-pink-100 dark:group-hover:bg-pink-500/20 group-hover:shadow-[0_0_14px_rgba(236,72,153,0.4)] transition-all duration-500">
              <Send className="w-2 h-2 -rotate-12" />
            </div>
            <h2 className="text-xs sm:text-[12.5px] font-bold text-slate-900 dark:text-white tracking-wide group-hover:text-pink-600 dark:group-hover:text-pink-200 transition-colors duration-500">
              Let&apos;s Connect
            </h2>
          </div>

          <p className="text-[9.5px] text-slate-600 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-slate-100 leading-snug mb-1 transition-colors duration-500">
            Open for software engineering opportunities, product discussions and collaborations.
          </p>

          {/* Visible Direct Phone & Email Badges */}
          <div className="flex flex-wrap items-center gap-1 mb-1">
            {profile.phone && (
              <a
                href={`tel:${profile.phone.replace(/\s+/g, '')}`}
                title={`Call ${profile.phone}`}
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-500/10 dark:hover:bg-emerald-500/20 border border-emerald-200 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-300 text-[9px] font-mono font-semibold transition-all shadow-sm"
              >
                <Phone className="w-2.5 h-2.5 text-emerald-600 dark:text-emerald-400 animate-phone-ring" />
                <span>{profile.phone}</span>
              </a>
            )}

            <a
              href={`mailto:${profile.email}`}
              title={`Email ${profile.email}`}
              className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-cyan-50 hover:bg-cyan-100 dark:bg-cyan-500/10 dark:hover:bg-cyan-500/20 border border-cyan-200 dark:border-cyan-500/30 text-cyan-700 dark:text-cyan-300 text-[9px] font-mono font-semibold transition-all shadow-sm"
            >
              <Mail className="w-2.5 h-2.5 text-cyan-600 dark:text-cyan-400 animate-email-pulse" />
              <span>{profile.email}</span>
            </a>
          </div>
        </div>

        {/* Action Row */}
        <div className="flex flex-wrap items-center justify-between gap-1.5 pt-1.5 border-t border-slate-200 dark:border-slate-800/80">
          <div className="flex flex-wrap items-center gap-1">
            {/* Phone button */}
            {profile.phone && (
              <a
                href={`tel:${profile.phone.replace(/\s+/g, '')}`}
                aria-label={`Call ${profile.name || 'Abhishek'}`}
                title={`Call ${profile.phone}`}
                className="w-6 h-6 rounded-lg bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-700 dark:bg-slate-900 dark:border-slate-800 dark:text-emerald-400 dark:hover:text-white dark:hover:border-emerald-500 dark:hover:bg-emerald-500/10 flex items-center justify-center transition-all cursor-pointer group shrink-0"
              >
                <Phone className="w-3 h-3 animate-phone-ring" />
              </a>
            )}

            {/* Email button */}
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email Abhishek"
              title={`Email ${profile.email}`}
              className="w-6 h-6 rounded-lg bg-cyan-50 hover:bg-cyan-100 border border-cyan-200 text-cyan-700 dark:bg-slate-900 dark:border-slate-800 dark:text-cyan-400 dark:hover:text-white dark:hover:border-cyan-500 dark:hover:bg-cyan-500/10 flex items-center justify-center transition-all cursor-pointer group shrink-0"
            >
              <Mail className="w-3 h-3 animate-email-pulse" />
            </a>

            {/* Location button */}
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(profile.location || 'Gurugram, India')}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Location on Google Maps"
              title="Open Gurugram, India on Google Maps"
              className="w-6 h-6 rounded-lg bg-purple-50 hover:bg-purple-100 border border-purple-200 text-purple-700 dark:bg-slate-900 dark:border-slate-800 dark:text-purple-400 dark:hover:text-white dark:hover:border-purple-500 dark:hover:bg-purple-500/10 flex items-center justify-center transition-all cursor-pointer group shrink-0"
            >
              <MapPin className="w-3 h-3 animate-pin-bounce" />
            </a>

            <a
              href={profile.linkedin_url || 'https://linkedin.com'}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              title="LinkedIn"
              className="w-6 h-6 rounded-lg bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-300 dark:hover:text-white dark:hover:border-indigo-500 flex items-center justify-center transition-all shrink-0"
            >
              <Linkedin className="w-3 h-3" />
            </a>

            <a
              href={profile.github_url || 'https://github.com/Abhishek-J-B-R-I/Abhishek'}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              title="GitHub"
              className="w-6 h-6 rounded-lg bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-300 dark:hover:text-white dark:hover:border-purple-500 flex items-center justify-center transition-all shrink-0"
            >
              <Github className="w-3 h-3" />
            </a>

            {/* Resume Download Icon Button */}
            <a
              href={getAssetUrl(profile.resume_url || '/Abhishek_Resume.pdf')}
              download="Abhishek_Resume.pdf"
              onClick={(e) => {
                e.preventDefault();
                triggerResumeDownload(data);
              }}
              aria-label="Download Resume (PDF)"
              title="Download Abhishek's Resume (PDF)"
              className="w-6 h-6 rounded-lg bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 text-indigo-700 dark:bg-slate-900 dark:border-slate-800 dark:text-indigo-400 dark:hover:text-white dark:hover:border-indigo-500 flex items-center justify-center transition-all shrink-0 cursor-pointer active:scale-95"
            >
              <Download className="w-3 h-3" />
            </a>
          </div>

          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full font-bold text-[10.5px] text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:opacity-95 shadow-md shadow-indigo-500/20 transition-all active:scale-95 shrink-0"
          >
            <span>Get In Touch</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
