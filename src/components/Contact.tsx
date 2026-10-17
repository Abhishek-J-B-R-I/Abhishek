'use client';

import React, { useState } from 'react';
import { Send, Mail, Copy, Check, ArrowRight, MapPin, Phone, ExternalLink } from 'lucide-react';
import { usePortfolio } from '@/context/PortfolioContext';

export function Contact() {
  const { data } = usePortfolio();
  const { profile } = data;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    if (!profile.email) return;
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Let's Build Something Amazing CTA Banner from Mockup */}
        <div className="rounded-3xl bg-gradient-to-r from-indigo-50/90 via-purple-50/60 to-indigo-50/90 dark:from-slate-800 dark:via-indigo-950/40 dark:to-slate-800 border border-indigo-100 dark:border-slate-700/80 shadow-card p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center text-white shadow-md shadow-indigo-600/30 shrink-0 hidden sm:flex">
              <Send className="w-5 h-5 -rotate-12" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                Let&apos;s Build Something Amazing
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                I&apos;m always open to discussing new projects, opportunities or ideas.
              </p>
            </div>
          </div>

          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-xs sm:text-sm text-white bg-indigo-600 hover:bg-indigo-700 active:scale-95 shadow-md shadow-indigo-600/25 transition-all duration-200 shrink-0"
          >
            <span>Get In Touch</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Contact Details Card */}
        <div className="bg-white dark:bg-slate-800/80 rounded-2xl border border-slate-100 dark:border-slate-700/80 shadow-card p-6 sm:p-8 max-w-2xl mx-auto text-center">
          <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-100 dark:border-indigo-900/60 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mx-auto mb-4">
            <Mail className="w-6 h-6" />
          </div>

          <h2 id="contact-heading" className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-1">
            Get in Touch Directly
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6">
            Feel free to email me regarding mobile applications, Flutter consulting, or roles.
          </p>

          <div className="inline-flex flex-wrap items-center justify-center gap-2 p-2 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 mb-6">
            <a
              href={`mailto:${profile.email}`}
              className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-100 hover:text-indigo-600 dark:hover:text-indigo-400 px-3 py-1.5 transition-colors"
            >
              {profile.email}
            </a>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 shadow-xs transition-all cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="text-emerald-600 dark:text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-400" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          {/* Location and Phone */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
              <span>{profile.location}</span>
            </div>

            {profile.phone && (
              <div className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                <a href={`tel:${profile.phone.replace(/\s+/g, '')}`} className="hover:text-indigo-600">
                  {profile.phone}
                </a>
              </div>
            )}

            {profile.github_url && (
              <a
                href={profile.github_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-indigo-600 transition-colors"
              >
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}

            {profile.linkedin_url && (
              <a
                href={profile.linkedin_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-indigo-600 transition-colors"
              >
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
