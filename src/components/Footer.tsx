import React, { useState } from 'react';
import { Send, CheckCircle, Instagram, Youtube } from 'lucide-react';
import { PROFILE_BASE64 } from './profile-b64';

interface FooterProps {
  onNavigate?: (page: 'home' | 'about' | 'contact') => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
    }, 3000);
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, target: 'home' | 'about' | 'contact', anchorId?: string) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(target);
      if (anchorId) {
        setTimeout(() => {
          const element = document.getElementById(anchorId);
          if (element) {
            const topOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - topOffset;
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }, 120);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-surface-container-low py-16 border-t border-outline-variant/30 font-sans">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        
        {/* Brand column */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 group select-none">
            <img 
              src={PROFILE_BASE64}
              alt="Growth Lock Media Logo" 
              className="w-8 h-8 rounded-full object-cover border border-violet-200 shadow-sm ring-2 ring-violet-500/10 group-hover:ring-violet-500/30 group-hover:scale-105 transition-all duration-300"
              referrerPolicy="no-referrer"
            />
            <span className="font-hanken text-lg font-bold tracking-tight flex items-baseline">
              <span className="text-[#8B5CF6] font-extrabold text-xl transition-colors duration-300 group-hover:text-[#7C3AED]">G</span>
              <span className="text-zinc-800 transition-colors duration-300">rowth</span>
              <span className="text-[#0EA5E9] font-extrabold text-xl ml-[1px] transition-colors duration-300 group-hover:text-[#0284C7]">L</span>
              <span className="text-zinc-800 transition-colors duration-300">ock</span>
              <span className="text-[#EC4899] font-serif italic font-black text-xl ml-[2px] transition-colors duration-300 group-hover:text-[#DB2777]">M</span>
              <span className="text-zinc-800 transition-colors duration-300 font-bold">edia</span>
              <span className="text-violet-600 ml-0.5 animate-pulse font-extrabold">.</span>
            </span>
          </div>
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-55 bg-violet-50 text-violet-700 border border-violet-100 font-sans text-xs font-semibold tracking-wide shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" />
            <span>Founder: Dhanush SK</span>
          </div>

          <p className="text-secondary text-sm leading-relaxed max-w-xs">
            Building a legacy through high-retention digital content, beautiful design systems, and fast web architectures.
          </p>
          
          <div className="flex items-center gap-3 pt-2">
            <a
              id="footer-instagram"
              href="https://www.instagram.com/growth_lock_yt/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-white border border-outline-variant/30 transition-all duration-300 flex items-center justify-center text-[#e1306c] hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#e6683c] hover:to-[#bc1888] hover:text-white hover:scale-105 active:scale-95 shadow-sm text-center cursor-pointer group"
              title="Instagram @growth_lock_yt"
            >
              <Instagram className="w-4 h-4 stroke-current group-hover:text-white transition-colors" />
            </a>
            <a
              id="footer-youtube"
              href="https://youtube.com/@growth_lock"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-surface hover:bg-red-500/10 text-red-600 hover:text-red-700 transition-colors flex items-center justify-center border border-outline-variant/30 text-center"
              title="YouTube"
            >
              <Youtube className="w-4 h-4" />
            </a>
          </div>

          <p className="text-on-surface-variant/50 text-[11px] pt-2">
            © 2026 Growth Lock. All rights reserved.
          </p>
        </div>

        {/* Links column */}
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="font-sans text-sm text-on-surface font-semibold">Quick Links</p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a 
                  href="#about" 
                  onClick={(e) => handleLinkClick(e, 'home', 'about')}
                  className="text-secondary hover:text-primary transition-colors text-sm"
                >
                  About Me
                </a>
              </li>
              <li>
                <a 
                  href="#portfolio" 
                  onClick={(e) => handleLinkClick(e, 'home', 'portfolio')}
                  className="text-secondary hover:text-primary transition-colors text-sm"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => handleLinkClick(e, 'home', 'services')}
                  className="text-secondary hover:text-primary transition-colors text-sm"
                >
                  Services
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={(e) => handleLinkClick(e, 'contact')}
                  className="text-secondary hover:text-primary transition-colors text-sm"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <p className="font-sans text-sm text-on-surface font-semibold">Legal</p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#" className="text-secondary hover:text-primary transition-colors text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary hover:text-primary transition-colors text-sm">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter column */}
        <div className="space-y-4">
          <p className="font-sans text-sm text-on-surface font-semibold">Newsletter</p>
          <p className="text-secondary text-xs sm:text-sm leading-relaxed">
            Get the latest high-value asset drops, coding shortcuts, and video editing design tips right in your inbox.
          </p>
          
          <form onSubmit={handleSubscribe} className="flex gap-2">
            <input
              required
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white border border-outline-variant/40 rounded-xl py-3 px-4 text-xs sm:text-sm focus:ring-1 focus:ring-primary-container outline-none placeholder:text-outline/50"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="bg-primary hover:bg-primary-container text-white p-3 rounded-xl transition-colors cursor-pointer flex items-center justify-center shrink-0"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

          {subscribed && (
            <div className="text-green-600 text-xs flex items-center gap-1.5 animate-pulse pt-1">
              <CheckCircle className="w-3.5 h-3.5" /> Subscribed successfully!
            </div>
          )}
        </div>

      </div>
    </footer>
  );
}
