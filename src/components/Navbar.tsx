import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { PROFILE_BASE64 } from './profile-b64';

interface NavbarProps {
  currentPage: 'home' | 'about' | 'contact';
  onNavigate: (page: 'home' | 'about' | 'contact') => void;
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, page: 'home' | 'about' | 'contact', anchorId?: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onNavigate(page);

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
  };

  return (
    <header 
      id="main-header"
      className={`fixed z-50 transition-all duration-500 ease-in-out ${
        scrolled 
          ? 'top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-[1100px] rounded-full bg-white/90 backdrop-blur-xl py-3 px-2 md:px-4 shadow-[0_16px_36px_rgba(0,0,0,0.08)] border border-outline-variant/10' 
          : 'top-0 left-0 w-full bg-surface/40 backdrop-blur-md py-5'
      }`}
    >
      <nav className="max-w-[1280px] mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <div 
          onClick={() => {
            onNavigate('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="cursor-pointer active:scale-98 transition-transform flex items-center gap-2 md:gap-2.5 group select-none"
        >
          <img 
            src={PROFILE_BASE64}
            alt="Growth Lock Media Logo" 
            className="w-8 h-8 md:w-9 md:h-9 rounded-full object-cover border border-violet-200 shadow-sm ring-2 ring-violet-500/10 group-hover:ring-violet-500/30 group-hover:scale-105 transition-all duration-300"
            referrerPolicy="no-referrer"
          />
          <span className="font-hanken text-base sm:text-lg md:text-xl font-bold tracking-tight flex items-baseline">
            <span className="text-[#8B5CF6] font-extrabold text-lg sm:text-xl md:text-2xl transition-colors duration-300 group-hover:text-[#7C3AED]">G</span>
            <span className="text-zinc-800 transition-colors duration-300">rowth</span>
            <span className="text-[#0EA5E9] font-extrabold text-lg sm:text-xl md:text-2xl ml-[1px] transition-colors duration-300 group-hover:text-[#0284C7]">L</span>
            <span className="text-zinc-800 transition-colors duration-300">ock</span>
            <span className="text-[#EC4899] font-serif italic font-black text-lg sm:text-xl md:text-2xl ml-[2px] transition-colors duration-300 group-hover:text-[#DB2777]">M</span>
            <span className="text-zinc-800 transition-colors duration-300 font-bold">edia</span>
            <span className="text-violet-600 ml-0.5 animate-pulse font-extrabold">.</span>
          </span>
        </div>

        {/* Desktop Links - styled as rounded pill buttons */}
        <div className="hidden md:flex gap-1.5 items-center bg-surface-container-low/55 p-1 rounded-full border border-outline-variant/5">
          <a 
            href="#home" 
            onClick={(e) => handleLinkClick(e, 'home')}
            className={`px-5 py-2 rounded-full font-sans text-xs sm:text-sm font-extrabold transition-all duration-300 ease-out active:scale-95 flex items-center justify-center cursor-pointer ${
              currentPage === 'home' 
                ? 'bg-primary text-white shadow-md shadow-primary/20 scale-[1.02]' 
                : 'text-on-surface-variant hover:text-primary hover:bg-surface-container-high/40'
            }`}
          >
            Home
          </a>
          <a 
            href="#about" 
            onClick={(e) => handleLinkClick(e, 'home', 'about')}
            className="px-5 py-2 rounded-full font-sans text-xs sm:text-sm text-on-surface-variant hover:text-primary hover:bg-surface-container-high/40 transition-all duration-300 ease-out active:scale-95 font-extrabold cursor-pointer"
          >
            About Me
          </a>
          <a 
            href="#portfolio" 
            onClick={(e) => handleLinkClick(e, 'home', 'portfolio')}
            className="px-5 py-2 rounded-full font-sans text-xs sm:text-sm text-on-surface-variant hover:text-primary hover:bg-surface-container-high/40 transition-all duration-300 ease-out active:scale-95 font-extrabold cursor-pointer"
          >
            Portfolio
          </a>
          <a 
            href="#services" 
            onClick={(e) => handleLinkClick(e, 'home', 'services')}
            className="px-5 py-2 rounded-full font-sans text-xs sm:text-sm text-on-surface-variant hover:text-primary hover:bg-surface-container-high/40 transition-all duration-300 ease-out active:scale-95 font-extrabold cursor-pointer"
          >
            Services
          </a>
          <a 
            href="#contact" 
            onClick={(e) => handleLinkClick(e, 'contact')}
            className={`px-5 py-2 rounded-full font-sans text-xs sm:text-sm font-extrabold transition-all duration-300 ease-out active:scale-95 flex items-center justify-center cursor-pointer ${
              currentPage === 'contact' 
                ? 'bg-primary text-white shadow-md shadow-primary/20 scale-[1.02]' 
                : 'text-on-surface-variant hover:text-primary hover:bg-surface-container-high/40'
            }`}
          >
            Contact
          </a>
        </div>

        {/* CTAs */}
        <div className="flex items-center gap-4">
          {/* Mobile Menu Button */}
          <button 
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 text-on-surface hover:bg-surface-container-low rounded-full cursor-pointer"
            aria-label="Toggle mobile navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drops */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-outline-variant/20 shadow-lg py-5 px-6 space-y-4 flex flex-col z-50">
          <a 
            href="#home" 
            onClick={(e) => handleLinkClick(e, 'home')}
            className="font-sans text-sm font-bold text-on-surface-variant hover:text-primary transition-colors"
          >
            Home Layout
          </a>
          <a 
            href="#about" 
            onClick={(e) => handleLinkClick(e, 'home', 'about')}
            className="font-sans text-sm font-bold text-on-surface-variant hover:text-primary transition-colors"
          >
            About Creator
          </a>
          <a 
            href="#portfolio" 
            onClick={(e) => handleLinkClick(e, 'home', 'portfolio')}
            className="font-sans text-sm font-bold text-on-surface-variant hover:text-primary transition-colors"
          >
            Selected Portfolio
          </a>
          <a 
            href="#services" 
            onClick={(e) => handleLinkClick(e, 'home', 'services')}
            className="font-sans text-sm font-bold text-on-surface-variant hover:text-primary transition-colors"
          >
            Services & Disciplines
          </a>
          <a 
            href="#contact" 
            onClick={(e) => handleLinkClick(e, 'contact')}
            className="font-sans text-sm font-bold text-on-surface-variant hover:text-primary transition-colors"
          >
            Get In Touch
          </a>
        </div>
      )}
    </header>
  );
}
