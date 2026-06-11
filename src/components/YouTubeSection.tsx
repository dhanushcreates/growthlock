import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Youtube, Instagram, Camera, Maximize2, X } from 'lucide-react';
import { YOUTUBE_CONFIG } from '../config';

export default function YouTubeSection() {
  const [selectedImage, setSelectedImage] = useState<{
    url: string;
    title: string;
    category: string;
    desc: string;
  } | null>(null);

  const galleryItems = [
    {
      id: "gal-1",
      title: "Reaching Ultimate Life Goals",
      category: "Vision & Inspiration",
      desc: "An epic sunrise over pristine alpine peaks representing high-altitude aspirations, unbreakable determination, and chasing dreams to the highest summits.",
      thumbnailUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1000",
      fullUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=95&w=1800",
      techSpecs: "ISO 50 · 24mm · f/4.0 · 1/500s"
    },
    {
      id: "gal-2",
      title: "Cinematic Editing Sanctuary",
      category: "Digital Craft & Grading",
      desc: "A fully custom workspace configured for premium soundscapes, fluid motion curves, precise LUT mapping, and ultimate visual rhythm.",
      thumbnailUrl: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?auto=format&fit=crop&q=80&w=1000",
      fullUrl: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?auto=format&fit=crop&q=95&w=1800",
      techSpecs: "ISO 400 · 35mm · f/1.8 · 1/80s"
    }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 45 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="py-20 bg-white rounded-[32px] md:rounded-[48px] border border-zinc-200 mx-3 md:mx-6 my-6 md:my-10 shadow-xl overflow-hidden relative"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="bg-primary/5 rounded-[40px] p-8 md:p-16 lg:p-20 relative overflow-hidden flex flex-col lg:flex-row items-center gap-12 border border-primary/5 shadow-sm">
          {/* Background Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

          {/* Copy Side */}
          <div className="z-10 text-center lg:text-left space-y-6 lg:w-1/2">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-500/10 text-pink-600 font-sans text-xs font-semibold">
              <Camera className="w-4 h-4 text-pink-500 stroke-[1.5]" />
              Visual Gallery
            </span>
            
            <h2 className="font-hanken text-3xl md:text-4xl lg:text-[40px] leading-[1.1] tracking-tight font-extrabold text-on-surface">
              Crafting High-Resolution Cinematic Stories
            </h2>
            
            <p className="text-secondary font-sans text-base md:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
              Capturing striking visuals and post-processing them to perfection. Explore our highlighted vision board and professional workspace layouts.
            </p>

            <div id="youtube-stats-grid" className="pt-4 max-w-sm mx-auto lg:mx-0">
              {/* Instagram Links */}
              <div className="space-y-2.5">
                <p className="text-[10px] uppercase tracking-widest text-[#000a] dark:text-white/60 font-black text-left block">
                  Connect on Instagram
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Main Instagram Page */}
                  <a
                    id="instagram-main-cta"
                    href="https://www.instagram.com/growth_lock_yt/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col p-4 rounded-2xl bg-surface-container-low border border-outline-variant/10 hover:scale-[1.02] hover:border-pink-500/20 hover:shadow-lg active:scale-98 transition-all group cursor-pointer text-left"
                  >
                    <div className="w-9 h-9 rounded-xl bg-white border border-outline-variant/10 flex items-center justify-center text-[#e1306c] transition-all duration-300 group-hover:bg-gradient-to-tr group-hover:from-[#f09433] group-hover:via-[#e6683c] group-hover:to-[#bc1888] group-hover:text-white shadow-sm mb-2.5">
                      <Instagram className="w-4.5 h-4.5 stroke-current group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs font-black text-on-surface tracking-wide group-hover:text-pink-500 transition-colors">Main Insta Page</p>
                      <p className="text-[10px] text-secondary font-mono">@growth_lock_yt &rarr;</p>
                    </div>
                  </a>

                  {/* Admin Instagram Page */}
                  <a
                    id="instagram-admin-cta"
                    href="https://www.instagram.com/tamil_presents/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col p-4 rounded-2xl bg-surface-container-low border border-outline-variant/10 hover:scale-[1.02] hover:border-purple-500/20 hover:shadow-lg active:scale-98 transition-all group cursor-pointer text-left"
                  >
                    <div className="w-9 h-9 rounded-xl bg-white border border-outline-variant/10 flex items-center justify-center text-[#e1306c] transition-all duration-300 group-hover:bg-gradient-to-tr group-hover:from-[#f09433] group-hover:via-[#e6683c] group-hover:to-[#bc1888] group-hover:text-white shadow-sm mb-2.5">
                      <Instagram className="w-4.5 h-4.5 stroke-current group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs font-black text-on-surface tracking-wide group-hover:text-purple-500 transition-colors">Admin Insta Page</p>
                      <p className="text-[10px] text-secondary font-mono">@tamil_presents &rarr;</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-4 flex justify-center lg:justify-start">
              <a
                href={YOUTUBE_CONFIG.channelLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 text-white px-8 py-4 rounded-full font-sans text-sm font-semibold hover:bg-red-700 hover:scale-[1.01] transition-all shadow-lg shadow-red-600/10 flex items-center gap-3 w-fit cursor-pointer"
              >
                Subscribe on YouTube 
                <Youtube className="w-5 h-5 fill-white stroke-none" />
              </a>
            </div>
          </div>

          {/* Immersive Photo Showcase Side */}
          <div className="lg:w-1/2 w-full space-y-4 z-10">
            <p className="text-xs uppercase tracking-widest text-secondary font-bold text-center lg:text-left">
              Cinematic Masterpieces
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {galleryItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedImage({
                    url: item.fullUrl,
                    title: item.title,
                    category: item.category,
                    desc: item.desc
                  })}
                  className="block p-3 rounded-[24px] bg-white dark:bg-zinc-900 border border-black/[0.06] dark:border-white/[0.06] hover:border-pink-500/30 dark:hover:border-pink-500/40 shadow hover:shadow-2xl hover:shadow-pink-500/5 transition-all hover:-translate-y-2.5 group cursor-pointer text-left relative overflow-hidden"
                >
                  <div className="relative aspect-[3/4] w-full bg-slate-900 rounded-[18px] overflow-hidden mb-3.5">
                    <img 
                      src={item.thumbnailUrl} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Immersive Dark Shadow Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-4 transition-all duration-300">
                      
                      {/* Interactive View Overlay icon */}
                      <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/10 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all">
                        <Maximize2 className="w-3.5 h-3.5 text-white" />
                      </div>

                      {/* Photo Tag */}
                      <span className="w-fit text-[8px] bg-white/15 backdrop-blur-md text-white font-sans uppercase tracking-widest px-2.5 py-1 rounded-full font-black border border-white/10 mb-2">
                        {item.category}
                      </span>

                      {/* Technical Specs Overlay */}
                      <p className="text-[10px] text-white/60 font-mono tracking-wide">{item.techSpecs}</p>
                    </div>
                  </div>

                  <h4 className="font-sans font-black text-sm text-on-surface leading-tight line-clamp-2 pr-4 pl-1 group-hover:text-pink-500 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-[10px] text-secondary font-sans leading-relaxed mt-1 pl-1 line-clamp-2">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Cinematic Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button Trigger */}
            <button 
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center border border-white/10 transition-colors cursor-pointer z-50"
              onClick={() => setSelectedImage(null)}
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Immersive Lightbox Content Area */}
            <motion.div 
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="max-w-4xl w-full flex flex-col md:flex-row items-stretch gap-6 bg-zinc-950 border border-white/10 rounded-3xl overflow-hidden shadow-2xl p-4 md:p-6 text-left"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Main Expanded Image */}
              <div className="w-full md:w-3/5 aspect-video md:aspect-auto md:h-[450px] relative rounded-2xl overflow-hidden bg-black flex items-center justify-center border border-white/5">
                <img 
                  src={selectedImage.url} 
                  alt={selectedImage.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Informative Creative Story Side */}
              <div className="w-full md:w-2/5 flex flex-col justify-between py-2 px-1 text-white">
                <div className="space-y-4">
                  <span className="inline-block text-[9px] bg-pink-500/20 text-pink-400 font-sans uppercase tracking-widest px-3 py-1 rounded-full font-black border border-pink-500/20">
                    {selectedImage.category}
                  </span>
                  <h3 className="font-hanken text-xl md:text-2xl font-black leading-tight tracking-tight text-white">
                    {selectedImage.title}
                  </h3>
                  <div className="w-12 h-[1px] bg-pink-500/40" />
                  <p className="text-sm text-zinc-400 font-sans leading-relaxed">
                    {selectedImage.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10 mt-6 md:mt-0 flex flex-col gap-3">
                  <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-black">Interactive Cinematic Vision</p>
                  <p className="text-xs text-zinc-300 font-sans font-medium flex items-center gap-2">
                    <Camera className="w-4 h-4 text-pink-500" /> Inspired by high-fidelity premium post-production grading systems.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
