import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Play } from 'lucide-react';

interface HeroProps {
  profileImg: string;
  onViewPortfolio: () => void;
}

export default function Hero({ profileImg, onViewPortfolio }: HeroProps) {
  return (
    <section 
      id="hero-root-section"
      className="relative min-h-[820px] flex flex-col items-center justify-center overflow-hidden rounded-[32px] border border-zinc-200 bg-white mx-3 md:mx-6 my-4 shadow-xl"
    >
      {/* Premium ambient decorative glow spheres */}
      <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-violet-600/5 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] bg-sky-600/5 blur-[130px] rounded-full pointer-events-none" />

      {/* Decorative grids for consistent futuristic modern style */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1.5px,transparent_1.5px),linear-gradient(90deg,rgba(0,0,0,0.02)_1.5px,transparent_1.5px)] bg-[size:32px_32px] pointer-events-none z-0" />
      
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none z-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
      }} />

      {/* Floating high-fidelity designer background icons */}
      <div className="absolute top-[15%] left-[12%] opacity-15 hidden lg:block float-icon">
        <Sparkles className="w-10 h-10 text-violet-500" />
      </div>
      <div className="absolute bottom-[20%] right-[15%] opacity-10 hidden lg:block float-icon float-delay-2">
        <Play className="w-12 h-12 text-sky-500" />
      </div>

      {/* Central Content Area */}
      <div className="relative max-w-5xl w-full mx-auto px-6 py-20 flex flex-col items-center text-center z-10">
        
        {/* Pre-title Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-700 font-sans text-xs font-bold tracking-widest uppercase mb-8"
        >
          <Sparkles className="w-3.5 h-3.5 text-sky-500" />
          <span>CREATIVE PORTFOLIO 2026</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse ml-1" />
        </motion.div>

        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-hanken text-4xl sm:text-6xl md:text-8xl font-extrabold text-zinc-900 mb-6 leading-tight tracking-tight max-w-4xl"
        >
          Editor • Designer • <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-500 via-violet-500 to-amber-500 mb-2 sm:mb-0 inline-block sm:inline">Web Developer</span>
        </motion.h1>

        {/* Copywriting */}
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-sans text-base sm:text-lg md:text-xl text-zinc-600 max-w-3xl mb-12 leading-relaxed"
        >
          Sculpting digital experiences through high-fidelity design, professional video editing, and modern architectural web development.
        </motion.p>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          {/* Start a Project (scrolls to Contact) */}
          <button 
            id="hero-start-project-btn"
            onClick={() => {
              const contactEl = document.getElementById('contact');
              if (contactEl) {
                contactEl.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="w-full sm:w-auto bg-primary hover:bg-primary-container text-white px-10 py-4.5 rounded-2xl font-sans text-base font-extrabold shadow-lg hover:shadow-primary/30 hover:scale-[1.03] active:scale-95 transition-all duration-300 cursor-pointer relative overflow-hidden group border border-[#1e40af]"
          >
            <span className="relative z-10 flex items-center justify-center gap-2 font-black">
              Start a Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>

          {/* View Showreel (scrolls to Portfolio) */}
          <button 
            id="hero-view-showreel-btn"
            onClick={onViewPortfolio}
            className="w-full sm:w-auto px-10 py-4.5 rounded-2xl font-sans text-base font-extrabold border border-zinc-200 text-zinc-800 hover:bg-zinc-50 hover:border-zinc-300 active:scale-95 transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
          >
            <Play className="w-4 h-4 text-sky-500 fill-sky-500" />
            <span>Explore Portfolio</span>
          </button>
        </motion.div>

      </div>
    </section>
  );
}
