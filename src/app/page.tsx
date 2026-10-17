import React from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills';
import { Experience } from '@/components/Experience';
import { Education } from '@/components/Education';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-page text-ink selection:bg-indigo-600 selection:text-white">
      <Header />
      <main id="main-content" className="flex-1">
        <Hero />
        <About />
        <Projects />

        {/* Side-by-side Technical Skills and Experience Section from Mockup */}
        <section id="skills-experience" className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              {/* Left Column: Technical Skills */}
              <div id="skills" className="lg:col-span-6">
                <Skills />
              </div>

              {/* Right Column: Experience */}
              <div id="experience" className="lg:col-span-6">
                <Experience />
              </div>
            </div>
          </div>
        </section>

        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
