import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Services from './components/Services';
import SelectedWorks from './components/SelectedWorks';
import YouTubeSection from './components/YouTubeSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { PROFILE_BASE64 } from './components/profile-b64';

type PageState = 'home' | 'about' | 'contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageState>('home');

  // State for the uploaded profile picture, locked to the built-in PROFILE_BASE64 or a premium fallback if empty
  const DEFAULT_PROFILE_IMAGE = "https://unavatar.io/youtube/Growth_Lock";

  const [profileImg] = useState<string>(() => {
    return PROFILE_BASE64 || DEFAULT_PROFILE_IMAGE;
  });

  // Auto scroll to top on page switches
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  }, [currentPage]);

  // Routing navigation helper
  const handleNavigate = (page: PageState) => {
    setCurrentPage(page);
  };

  // Smooth scroll links utilities
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const topOffset = 85;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-surface text-on-surface font-sans min-h-screen relative antialiased selection:bg-primary-container selection:text-white">
      {/* Absolute persistent global background overlay */}
      <div className="fixed inset-0 pointer-events-none bg-radial from-primary/2 via-transparent to-transparent -z-10" />

      {/* Navigation section */}
      <Navbar 
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      {/* Main Page Workspace with Animations */}
      <main className="min-h-[80vh]">
        <AnimatePresence mode="wait">
          {currentPage === 'home' && (
            <motion.div
              key="home-page"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Hero 
                profileImg={profileImg}
                onViewPortfolio={() => scrollToSection('portfolio')}
              />
              
              <AboutMe 
                profileImg={profileImg}
              />

              <Services />

              <SelectedWorks />

              <YouTubeSection />

              <ContactForm />
            </motion.div>
          )}

          {currentPage === 'contact' && (
            <motion.div
              key="contact-page"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="pt-20"
            >
              <ContactForm />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
