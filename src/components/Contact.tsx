'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, ExternalLink, ArrowUp, Send } from 'lucide-react';
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-16 md:py-24 border-t border-border bg-page-surface/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase font-mono tracking-wider text-brand font-semibold mb-2">
            Get in Touch
          </p>
          <h2 id="contact-heading" className="text-3xl sm:text-4xl font-bold tracking-tight text-ink mb-4">
            Let&apos;s Connect
          </h2>
          <p className="text-base sm:text-lg text-ink-muted leading-relaxed mb-8">
            Interested in discussing Flutter development, full-stack application architecture, or engineering opportunities? Reach out directly.
          </p>

          {/* Large Tap Target Direct Email Card */}
          <div className="p-6 sm:p-8 rounded-2xl border border-border bg-page-surface shadow-subtle mb-10 max-w-xl mx-auto flex flex-col items-center">
            <div className="w-12 h-12 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand mb-4">
              <Mail className="w-6 h-6" />
            </div>

            <p className="text-xs text-ink-subtle uppercase tracking-wider font-mono mb-1">
              Direct Contact
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="text-lg sm:text-xl font-bold text-ink hover:text-brand transition-colors mb-6 break-all"
            >
              {profile.email}
            </a>

            <div className="flex flex-wrap items-center justify-center gap-3 w-full">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium text-white bg-brand hover:bg-brand-hover shadow-soft transition-all duration-200 active:scale-95 flex-1 min-w-[160px]"
              >
                <Send className="w-4 h-4" />
                <span>Send Email</span>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-medium text-ink bg-page hover:bg-page-cardHover border border-border transition-all duration-200 active:scale-95 cursor-pointer"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span className="text-emerald-600 dark:text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-ink-muted" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Optional Phone if visible in sheet */}
            {profile.phone && (
              <div className="mt-6 pt-4 border-t border-border/70 flex items-center justify-center gap-2 text-sm text-ink-muted">
                <Phone className="w-4 h-4 text-brand" />
                <a
                  href={`tel:${profile.phone.replace(/\s+/g, '')}`}
                  className="hover:text-brand font-mono transition-colors"
                >
                  {profile.phone}
                </a>
              </div>
            )}
          </div>

          {/* Social Profiles & Location */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-ink-muted mb-8">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-brand" />
              <span>{profile.location}</span>
            </div>

            {profile.github_url && (
              <a
                href={profile.github_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-brand transition-colors"
              >
                <span>GitHub</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {profile.linkedin_url && (
              <a
                href={profile.linkedin_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-brand transition-colors"
              >
                <span>LinkedIn</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>

          {/* Back to top button */}
          <div>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-medium text-ink-muted hover:text-ink bg-page border border-border hover:border-brand/40 transition-colors cursor-pointer"
            >
              <ArrowUp className="w-3.5 h-3.5 text-brand" />
              <span>Back to top</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
