import { motion } from 'motion/react';
import { Award, Target, Flame, CheckCircle } from 'lucide-react';
import { CONTACT_CONFIG, YOUTUBE_CONFIG } from '../config';

interface AboutMeProps {
  profileImg: string;
}

export default function AboutMe({ profileImg }: AboutMeProps) {
  const highlights = [
    {
      icon: Award,
      title: "Design Precision",
      description: "Apple-inspired layouts emphasizing meticulous grid systems and deep contrast."
    },
    {
      icon: Target,
      title: "Content Engineering",
      description: "Crafting narratives that secure viewer attention and elevate brand metrics."
    }
  ];

  return (
    <motion.section 
      id="about" 
      initial={{ opacity: 0, y: 45 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="py-20 bg-white rounded-[32px] md:rounded-[48px] border border-zinc-200 mx-3 md:mx-6 my-6 md:my-10 shadow-xl overflow-hidden relative"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Visual Profile/Aesthetic Grid */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-4 bg-primary/5 rounded-[48px] -rotate-2 scale-98 blur-md"></div>
            <div className="relative rounded-[40px] overflow-hidden border border-outline-variant/20 shadow-2xl bg-white p-4">
              <div className="aspect-square bg-surface-container-low rounded-[32px] overflow-hidden relative group">
                <img 
                  src={profileImg || undefined}
                  alt="Growth Lock Creator Profile"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  referrerPolicy="no-referrer"
                />

                <div className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/25 flex justify-between items-center shadow-lg">
                  <div>
                    <p className="font-hanken font-bold text-on-surface text-sm">Growth Lock</p>
                    <p className="text-secondary text-[11px] font-medium">Founder & Digital Creator</p>
                  </div>
                  <div className="flex items-center gap-1 bg-green-500/15 text-green-700 font-sans text-[10px] font-bold px-2.5 py-1 rounded-full border border-green-500/20">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping"></span>
                    ACTIVE
                  </div>
                </div>
              </div>
            </div>
            
            {/* Quick Experience Badge */}
            <div className="absolute -top-6 -right-6 bg-primary-container text-white p-6 rounded-3xl shadow-xl border border-white/10 hidden sm:block font-sans">
              <p className="font-hanken text-3xl font-extrabold text-white">1+</p>
              <p className="text-[10px] uppercase tracking-widest font-bold text-on-primary-container/85">Year Curation</p>
            </div>
          </div>

          {/* Copy Description Side */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="text-[11px] uppercase tracking-widest font-bold text-primary font-sans block">
                The Architect Behind Growth Lock
              </span>
              <h2 className="font-hanken text-3xl md:text-4xl font-extrabold text-on-surface tracking-tight leading-tight">
                Engineering Visual Content & Modern Interfaces
              </h2>
            </div>

            <p className="text-secondary font-sans text-base leading-relaxed">
              Hello, I'm Growth Lock. I am a digital creator, video editor, and product designer. I create simple and modern digital assets like video templates, design presets, and creative content. My focus is clean design, smooth visuals, and improving my skills step by step.
            </p>

            <div className="border-t border-dashed border-outline-variant/30 pt-6">
              <p className="text-xs font-bold text-on-surface-variant mb-4 uppercase tracking-wider">CREATOR PHILOSOPHY</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {highlights.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="space-y-2">
                      <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center text-primary-container">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="font-hanken font-bold text-on-surface text-sm">{item.title}</h4>
                      <p className="text-secondary text-xs leading-normal">{item.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-surface-container-low p-4 rounded-2xl border border-outline-variant/10 text-xs text-secondary font-sans leading-relaxed">
              <CheckCircle className="w-5 h-5 text-primary-container shrink-0 mt-0.5 sm:mt-0" />
              <span>{CONTACT_CONFIG.availability}</span>
            </div>
          </div>

        </div>
      </div>
    </motion.section>
  );
}
