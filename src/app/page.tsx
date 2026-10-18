'use client';

import React, { useEffect, useState } from 'react';
import { TopNavbar } from '@/components/TopNavbar';
import { NeonHero } from '@/components/NeonHero';
import { NeonAbout } from '@/components/NeonAbout';
import { NeonSkills } from '@/components/NeonSkills';
import { NeonProjects } from '@/components/NeonProjects';
import { NeonExperience } from '@/components/NeonExperience';
import { NeonEducationAndConnect } from '@/components/NeonEducationAndConnect';
import { NeonQuote } from '@/components/NeonQuote';
import { TechMarqueeStream } from '@/components/TechAnimation';
import { OpeningAnimation } from '@/components/OpeningAnimation';
import { FocusedSectionView, NavTab } from '@/components/FocusedSectionView';

export default function Home() {
  const [activeTab, setActiveTab] = useState<NavTab>('all');

  // Soft, smooth mouse-tracking spotlight on all cards
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const target = (e.target as HTMLElement | null)?.closest?.('.neon-card') as HTMLElement | null;
      if (target) {
        const rect = target.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        target.style.setProperty('--mouse-x', `${x}px`);
        target.style.setProperty('--mouse-y', `${y}px`);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Cinematic Opening Animation */}
      <OpeningAnimation />

      <div className="min-h-screen xl:h-screen xl:max-h-screen w-full bg-slate-50 dark:bg-neon-bg text-slate-900 dark:text-white selection:bg-purple-600 selection:text-white ambient-glow overflow-y-auto xl:overflow-hidden transition-colors duration-300">
        <div className="w-full px-2.5 sm:px-4 xl:px-5 py-2 sm:py-2.5 xl:py-3 xl:h-full flex flex-col justify-between gap-2 xl:gap-2.5">
          {/* Top Header Navbar with Active Tab Indicator */}
          <header className="w-full shrink-0">
            <TopNavbar activeTab={activeTab} onSelectTab={setActiveTab} />
          </header>

          {/* Conditional View: Focused Section or Full Overview */}
          {activeTab === 'all' ? (
            <>
              {/* Top Hero Section: Compact, Content-Dense, Interactive */}
              <section aria-label="Hero Section" className="w-full shrink-0">
                <NeonHero />
              </section>

              {/* Floating Tech Stack Ribbon */}
              <div className="hidden 2xl:block shrink-0">
                <TechMarqueeStream />
              </div>

              {/* 3 Responsive High-Density Columns with Complete Space Utilization */}
              <main className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 xl:gap-2.5 items-stretch flex-1 min-h-0 animate-fade-in">
                {/* Column 1: About Me & Experience */}
                <div className="flex flex-col justify-between gap-2 xl:gap-2.5 h-full min-h-0">
                  <div className="shrink-0">
                    <NeonAbout />
                  </div>
                  <div className="flex-1 min-h-0 flex flex-col">
                    <NeonExperience />
                  </div>
                </div>

                {/* Column 2: Skills Matrix & Education / Connect */}
                <div className="flex flex-col justify-between gap-2 xl:gap-2.5 h-full min-h-0">
                  <div className="shrink-0">
                    <NeonSkills />
                  </div>
                  <div className="flex-1 min-h-0 flex flex-col">
                    <NeonEducationAndConnect />
                  </div>
                </div>

                {/* Column 3: Featured Projects & Engineering Capabilities */}
                <div className="flex flex-col justify-between gap-2 xl:gap-2.5 md:col-span-2 lg:col-span-1 h-full min-h-0">
                  <div className="shrink-0">
                    <NeonProjects />
                  </div>
                  <div className="flex-1 min-h-0 flex flex-col">
                    <NeonQuote />
                  </div>
                </div>
              </main>
            </>
          ) : (
            /* Dedicated Focused Section View with Smooth Enter Animation */
            <main className="w-full flex-1 min-h-0 flex flex-col">
              <FocusedSectionView
                activeTab={activeTab}
                onBackToAll={() => setActiveTab('all')}
                onSelectTab={setActiveTab}
              />
            </main>
          )}
        </div>
      </div>
    </>
  );
}
