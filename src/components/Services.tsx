import { useState } from 'react';
import { motion } from 'motion/react';
import { Film, Palette, Code2, LucideIcon, ArrowUpRight, Sparkles, Play } from 'lucide-react';
import { SERVICES_CONFIG } from '../config';
import ServiceApplyModal from './ServiceApplyModal';

const iconMap: Record<string, LucideIcon> = {
  Film: Film,
  Palette: Palette,
  Code2: Code2
};

// High-fidelity graphic design & creative image representation for services
const imageMap: Record<string, string> = {
  'serv-editing': "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&q=80&w=800",
  'serv-design': "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
  'serv-dev': "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800"
};

export default function Services() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);

  const handleCardClick = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    setIsModalOpen(true);
  };

  return (
    <motion.section 
      id="services" 
      initial={{ opacity: 0, y: 45 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="py-24 overflow-hidden relative mx-3 md:mx-6 my-6 md:my-10 rounded-[32px] md:rounded-[48px] border border-zinc-850 shadow-2xl" 
      style={{
        background: `
          radial-gradient(circle at 90% 90%, rgba(255, 255, 255, 0.98) 0%, rgba(192, 132, 252, 0.4) 25%, rgba(59, 130, 246, 0.4) 50%, rgba(15, 23, 42, 0) 80%),
          radial-gradient(circle at 35% 15%, rgba(99, 102, 241, 0.35) 0%, rgba(139, 92, 246, 0.25) 45%, rgba(15, 23, 42, 0) 75%),
          radial-gradient(circle at 10% 50%, rgba(5, 2, 25, 0.95) 0%, rgba(8, 3, 38, 1) 100%),
          #05021a
        `
      }}
    >
      {/* Aesthetic Grain Overlay from the image style */}
      <div className="absolute inset-0 opacity-[0.035] mix-blend-overlay pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
      }} />

      {/* Radial soft ambient highlights */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 md:px-10 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 font-sans text-[10px] font-black uppercase tracking-widest border border-emerald-500/20 mb-3">
            <Sparkles className="w-3 h-3 text-emerald-400" /> Creative Retainers
          </span>
          <h2 className="font-hanken text-3xl md:text-5xl font-black text-white tracking-tight">
            Mastered Disciplines
          </h2>
          <p className="text-zinc-300 mt-3 max-w-md mx-auto font-sans text-sm sm:text-base leading-relaxed">
            Versatile technical skillsets engineered for high brand retention and conversion rate optimizations. Click any service to initiate setup.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES_CONFIG.map((serv, idx) => {
            const Icon = iconMap[serv.iconName] || Code2;
            const imageUrl = imageMap[serv.id];
            
            return (
              <motion.div
                key={serv.id}
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100, damping: 20, delay: idx * 0.12 }}
                onClick={() => handleCardClick(serv.id)}
                className="bg-white p-7 rounded-[32px] shadow-[0_15px_40px_rgba(0,0,0,0.15)] hover:shadow-[0_20px_45px_rgba(16,185,129,0.12)] border border-white/90 hover:border-emerald-500/40 transition-all duration-350 group hover:-translate-y-2.5 cursor-pointer flex flex-col justify-between"
              >
                <div>
                   {/* Beautiful Creative Image Showcase Container */}
                   {imageUrl && (
                    <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden mb-6 border border-zinc-150 shadow-inner bg-zinc-50 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] transition-all duration-300">
                      <img
                        src={imageUrl}
                        alt={serv.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover opacity-95 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                      />
                      {/* Premium Overlay indicator */}
                      <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md border border-zinc-200/50 px-2.5 py-1 rounded-full flex items-center gap-1.5 text-[8.5px] tracking-wider uppercase font-black text-sky-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span>Showcase Project</span>
                      </div>
                      <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-sky-500/90 text-white flex items-center justify-center backdrop-blur-sm scale-90 group-hover:scale-100 group-hover:bg-emerald-500 transition-all duration-300 shadow-md">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  )}

                  <div className="flex justify-between items-start mb-5">
                    <div className="w-12 h-12 bg-sky-50 group-hover:bg-emerald-500/10 rounded-2xl flex items-center justify-center text-sky-600 group-hover:text-emerald-500 transition-transform duration-300 group-hover:scale-108">
                      <Icon className="w-6 h-6" />
                    </div>
                    {/* Dynamic Action Tag */}
                    <div className="w-8 h-8 rounded-full bg-sky-50 flex items-center justify-center border border-sky-100 opacity-70 group-hover:opacity-100 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                  
                  <span className="text-[10px] tracking-widest uppercase font-black text-sky-500/90 mb-1 block">
                    {serv.subtitle}
                  </span>
                  
                  <h3 className="font-sans font-extrabold text-lg mb-2 text-zinc-900 group-hover:text-emerald-600 transition-colors">
                    {serv.title}
                  </h3>
                  
                  <p className="text-zinc-500 text-xs sm:text-xs leading-relaxed font-sans line-clamp-3">
                    {serv.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center justify-between">
                  <span className="text-[9px] uppercase tracking-widest text-zinc-400 font-bold">
                    Active Retainer Slots Open
                  </span>
                  <span className="text-xs font-black text-pink-500 group-hover:text-emerald-500 group-hover:underline flex items-center gap-1 transition-colors duration-300">
                    Apply Now
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Services Application Modal Form */}
      <ServiceApplyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialServiceId={selectedServiceId}
      />
    </motion.section>
  );
}

