import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, PlayCircle, Calendar, User, Sliders } from 'lucide-react';
import { Project } from '../types';
import { PORTFOLIO_CONFIG } from '../config';

export default function SelectedWorks() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'video' | 'design' | 'web'>('all');
  const [activeWorkModal, setActiveWorkModal] = useState<Project | null>(null);

  const filteredProjects = PORTFOLIO_CONFIG.filter(
    (proj) => selectedCategory === 'all' || proj.category === selectedCategory
  );

  return (
    <motion.section 
      id="portfolio" 
      initial={{ opacity: 0, y: 45 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="py-24 bg-zinc-50 rounded-[32px] md:rounded-[48px] border border-zinc-200 mx-3 md:mx-6 my-6 md:my-10 shadow-xl overflow-hidden relative"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <h2 className="font-hanken text-3xl md:text-4xl font-extrabold text-zinc-900 tracking-tight">
              Selected Works
            </h2>
            <p className="text-zinc-500 mt-2 font-sans">
              A curation of highly-polished digital and visual projects.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 bg-zinc-100 p-1.5 rounded-full border border-zinc-200">
            {(['all', 'video', 'design', 'web'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full font-sans text-xs font-semibold capitalize transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-zinc-900 text-white shadow-md'
                    : 'text-zinc-650 hover:bg-zinc-200/75'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                onClick={() => setActiveWorkModal(project)}
                className="group cursor-pointer block text-left"
              >
                <div className="relative aspect-video rounded-3xl overflow-hidden mb-5 bg-white border border-zinc-200 shadow-sm">
                  <img
                    src={project.imageUrl || undefined}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Dynamic Custom growth-lock Edited Thumbnail Overlay */}
                  {project.id === "proj-3" && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex flex-col justify-between p-5 select-none pointer-events-none">
                      <div className="flex justify-between items-start w-full">
                        <span className="bg-[#a855f7] hover:bg-[#a855f7]/80 text-white text-[9px] sm:text-[10px] uppercase tracking-widest font-extrabold px-3 py-1.5 rounded-full border border-white/20 shadow-md transition-all">
                          PORTFOLIO BASE
                        </span>
                        <span className="bg-black/60 text-white text-[9px] sm:text-[10px] font-mono px-2.5 py-1 rounded-lg border border-white/10 tracking-wider">
                          16:9 UHD
                        </span>
                      </div>
                      
                      <div className="pb-2">
                        <h5 className="font-hanken font-black text-2xl sm:text-3xl text-white tracking-tighter uppercase leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                          GROWTH <span className="text-yellow-400">LOCK</span>
                        </h5>
                        <div className="h-0.5 w-12 bg-white/70 rounded my-1.5" />
                        <p className="text-[9px] sm:text-[10px] text-white/90 font-mono tracking-widest uppercase">
                          OFFICIAL CONCEPT CREATIVE
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-white font-sans text-xs font-semibold flex items-center gap-1.5 bg-black/50 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10">
                      View Case Details
                      {project.category === 'video' ? (
                        <PlayCircle className="w-3.5 h-3.5 text-white" />
                      ) : (
                        <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                      )}
                    </span>
                  </div>
                </div>
                <h4 className="font-hanken text-lg md:text-xl font-semibold text-zinc-900 group-hover:text-violet-600 transition-colors">
                  {project.title}
                </h4>
                <p className="text-zinc-500 text-sm font-sans mt-1">
                  {project.service}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Case Study Detail Modal */}
      <AnimatePresence>
        {activeWorkModal && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-black/65 backdrop-blur-md flex justify-center p-4 md:p-6">
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.98 }}
              className="bg-white rounded-[32px] overflow-hidden max-w-2xl w-full shadow-2xl relative my-auto text-left border border-zinc-200"
            >
              <div className="relative aspect-video w-full bg-slate-100">
                <img
                  src={activeWorkModal.imageUrl || undefined}
                  alt={activeWorkModal.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />

                {/* Edit modal image for project 3 to also show dynamic thumbnail styling */}
                {activeWorkModal.id === "proj-3" && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex flex-col justify-between p-6 select-none pointer-events-none">
                    <div className="flex justify-between items-start w-full">
                      <span className="bg-[#a855f7] text-white text-[10px] uppercase tracking-widest font-extrabold px-3 py-1.5 rounded-full border border-white/20 shadow-md">
                        PORTFOLIO BASE
                      </span>
                      <span className="bg-black/60 text-white text-[10px] font-mono px-2.5 py-1 rounded-lg border border-white/10 tracking-wider">
                        16:9 UHD
                      </span>
                    </div>
                    
                    <div className="pb-2">
                      <h5 className="font-hanken font-black text-3xl sm:text-4xl text-white tracking-tighter uppercase leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                        GROWTH <span className="text-yellow-400">LOCK</span>
                      </h5>
                      <div className="h-0.5 w-16 bg-white/70 rounded my-2" />
                      <p className="text-[10px] text-white/90 font-mono tracking-widest uppercase">
                        OFFICIAL CONCEPT CREATIVE
                      </p>
                    </div>
                  </div>
                )}

                <button
                  onClick={() => setActiveWorkModal(null)}
                  className="absolute top-4 right-4 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 cursor-pointer transition-colors"
                  aria-label="Close modal"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
              </div>

              <div className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3.5 py-1 rounded-full bg-violet-100 text-violet-800 text-xs font-semibold capitalize">
                    {activeWorkModal.category} Work
                  </span>
                  <span className="text-xs text-zinc-500 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" /> 2026 Edition
                  </span>
                </div>

                <h3 className="font-hanken text-2xl font-bold text-zinc-900 mb-2">
                  {activeWorkModal.title}
                </h3>
                <p className="text-zinc-500 text-sm font-sans mb-5 italic">
                  {activeWorkModal.service}
                </p>

                <div className="border-t border-zinc-200 pt-4 space-y-4">
                  <p className="text-zinc-650 text-sm md:text-base leading-relaxed">
                    {activeWorkModal.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 bg-zinc-50 p-4 rounded-2xl text-xs text-zinc-600">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-violet-550" />
                      <span><strong>Lead Creator:</strong> Dhanush SK</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Sliders className="w-4 h-4 text-violet-550" />
                      <span><strong>State:</strong> Complete</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex justify-end">
                  <button
                    onClick={() => setActiveWorkModal(null)}
                    className="bg-zinc-900 text-white px-6 py-2.5 rounded-full text-xs font-semibold hover:bg-zinc-800 transition-all cursor-pointer"
                  >
                    Close Project Details
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}

