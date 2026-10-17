'use client';

import React, { useEffect } from 'react';
import { TopNavbar } from '@/components/TopNavbar';
import { NeonHero } from '@/components/NeonHero';
import { NeonAbout } from '@/components/NeonAbout';
import { NeonSkills } from '@/components/NeonSkills';
import { NeonProjects } from '@/components/NeonProjects';
import { NeonExperience } from '@/components/NeonExperience';
import { NeonEducationAndConnect } from '@/components/NeonEducationAndConnect';
import { NeonQuote } from '@/components/NeonQuote';

export default function Home() {
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
    <div className="min-h-screen w-full bg-neon-bg text-white selection:bg-purple-600 selection:text-white ambient-glow xl:min-h-screen overflow-y-auto select-none">
      <div className="w-full max-w-[1680px] mx-auto min-h-screen p-2.5 sm:p-3.5 xl:p-4 flex flex-col justify-between gap-3">
        {/* Top Header Navbar */}
        <TopNavbar />

        {/* Top Hero Section: Compact, Content-Dense, Interactive */}
        <section aria-label="Hero Section" className="w-full shrink-0">
          <NeonHero />
        </section>

        {/* 3 Responsive High-Density Columns with Interactive Soft Slow-Motion Hover Highlights */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 flex-1 items-stretch">
          {/* Column 1: About Me & Experience */}
          <div className="flex flex-col gap-3">
            <NeonAbout />
            <div className="flex-1">
              <NeonExperience />
            </div>
          </div>

          {/* Column 2: Skills Matrix & Education / Connect */}
          <div className="flex flex-col gap-3">
            <NeonSkills />
            <div className="flex-1">
              <NeonEducationAndConnect />
            </div>
          </div>

          {/* Column 3: Featured Projects & Engineering Capabilities */}
          <div className="flex flex-col gap-3 md:col-span-2 xl:col-span-1">
            <NeonProjects />
            <div className="flex-1">
              <NeonQuote />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
