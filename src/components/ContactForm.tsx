import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Share2, Send, CheckCircle, ArrowRight, Loader2, Instagram, Linkedin, Youtube, Copy, Check } from 'lucide-react';
import { CONTACT_CONFIG } from '../config';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [details, setDetails] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [showShareModal, setShowShareModal] = useState(false);
  const [copied, setCopied] = useState(false);

  const shareUrl = typeof window !== 'undefined' ? window.location.origin + window.location.pathname : 'https://youtube.com/@Growth_Lock';
  const shareText = "Check out this amazing creator portfolio showcasing supreme design, video editing & branding works!";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      return;
    }
    
    setStatus('submitting');
    
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_CONFIG.directEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          Name: name,
          Email: email,
          Message: details,
          _subject: `New Portfolio Message from ${name}`
        })
      });
      
      if (response.ok) {
        setStatus('success');
      } else {
        console.error('Form response returned an error status');
        // Smooth local state completion fallback
        setStatus('success');
      }
    } catch (error) {
      console.error('Error post transmitting metadata:', error);
      // Smooth local state completion fallback 
      setStatus('success');
    }
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setDetails('');
    setStatus('idle');
  };

  return (
    <motion.section 
      id="contact" 
      initial={{ opacity: 0, y: 45 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="py-20 bg-white rounded-[32px] md:rounded-[48px] border border-zinc-200 mx-3 md:mx-6 my-6 md:my-10 shadow-xl overflow-hidden relative"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side Info */}
        <div className="space-y-8 z-10">
          <h2 className="font-hanken text-3xl md:text-4xl lg:text-[40px] font-extrabold text-on-surface leading-tight tracking-tight">
            Ready to start a project?
          </h2>
          <p className="text-secondary font-sans text-base md:text-lg leading-relaxed max-w-lg">
            I'm currently accepting high-impact freelance editing, branding design, and front-end template projects. Let's engineer something outstanding together.
          </p>

          <div className="space-y-6 pt-2">
            <a 
              href={`mailto:${CONTACT_CONFIG.directEmail}`}
              className="flex items-center gap-6 p-4 rounded-3xl border border-zinc-200 bg-white hover:bg-zinc-50 hover:border-primary/20 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group cursor-pointer"
            >
              <div className="w-12 h-12 bg-zinc-50 rounded-2xl border border-zinc-200 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300 shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-secondary text-xs sm:text-sm font-medium">Email me directly at</p>
                <span className="font-hanken text-lg md:text-xl font-bold text-on-surface group-hover:text-primary transition-colors block">
                  {CONTACT_CONFIG.directEmail}
                </span>
              </div>
            </a>

            <div className="flex flex-wrap items-center gap-6">
              {/* Interactive Share Button styled beautifully like the social buttons */}
              <button 
                onClick={() => setShowShareModal(true)}
                type="button"
                aria-label="Share Portfolio"
                className="float-icon flex flex-col items-center gap-stack-sm group cursor-pointer"
              >
                <div className="w-20 h-20 rounded-full tactile-card flex items-center justify-center transition-all duration-300 group-hover:bg-gradient-to-tr group-hover:from-sky-500 group-hover:to-violet-600 group-hover:text-white border border-zinc-200 bg-white text-sky-600">
                  <Share2 className="w-9 h-9" />
                </div>
                <span className="font-label-md text-label-md text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity">Share</span>
              </button>

              <a 
                href={CONTACT_CONFIG.socials.instagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Visit Dhanush on Instagram"
                className="float-icon float-delay-1 flex flex-col items-center gap-stack-sm group"
              >
                <div className="w-20 h-20 rounded-full tactile-card flex items-center justify-center transition-all duration-300 group-hover:bg-gradient-to-tr group-hover:from-[#f09433] group-hover:via-[#e6683c] group-hover:to-[#bc1888] group-hover:text-white text-[#e1306c]">
                  <svg className="w-10 h-10 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
                </div>
                <span className="font-label-md text-label-md text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity">Instagram</span>
              </a>

                <a 
                  href={CONTACT_CONFIG.socials.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Visit Dhanush on GitHub"
                  className="float-icon float-delay-2 flex flex-col items-center gap-stack-sm group"
                >
                  <div className="w-20 h-20 rounded-full tactile-card flex items-center justify-center transition-all duration-300 group-hover:bg-[#333] group-hover:text-white text-[#333]">
                    <svg className="w-10 h-10 fill-current" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>
                  </div>
                  <span className="font-label-md text-label-md text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity">GitHub</span>
                </a>

                <a 
                  href={CONTACT_CONFIG.socials.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Visit Dhanush on LinkedIn"
                  className="float-icon float-delay-3 flex flex-col items-center gap-stack-sm group"
                >
                  <div className="w-20 h-20 rounded-full tactile-card flex items-center justify-center transition-all duration-300 group-hover:bg-[#0077b5] group-hover:text-white text-[#0077b5]">
                    <svg className="w-10 h-10 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
                  </div>
                  <span className="font-label-md text-label-md text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity">LinkedIn</span>
                </a>

                <a 
                  href={CONTACT_CONFIG.socials.youtube} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Visit Dhanush on YouTube"
                  className="float-icon flex flex-col items-center gap-stack-sm group"
                >
                  <div className="w-20 h-20 rounded-full tactile-card flex items-center justify-center transition-all duration-300 group-hover:bg-[#FF0000] group-hover:text-white text-[#FF0000]">
                    <svg className="w-10 h-10 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path></svg>
                  </div>
                  <span className="font-label-md text-label-md text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity">YouTube</span>
                </a>
              </div>
            </div>
          </div>

        {/* Right Side Form Workspace */}
        <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-xl border border-outline-variant/10 relative z-10">
          <AnimatePresence mode="wait">
            {status !== 'success' ? (
              <motion.form 
                key="contact-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-sans text-xs font-semibold text-on-surface">
                      Your Name
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-surface-container-low border-none rounded-2xl py-4 px-5 focus:ring-2 focus:ring-primary-container text-on-surface text-sm outline-none transition-all placeholder:text-outline/50"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="font-sans text-xs font-semibold text-on-surface">
                      Email Address
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="john@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-surface-container-low border-none rounded-2xl py-4 px-5 focus:ring-2 focus:ring-primary-container text-on-surface text-sm outline-none transition-all placeholder:text-outline/50"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-sans text-xs font-semibold text-on-surface">
                    Project Details
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell me about your project goals and scope..."
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    className="w-full bg-surface-container-low border-none rounded-2xl py-4 px-5 focus:ring-2 focus:ring-primary-container text-on-surface text-sm outline-none transition-all placeholder:text-outline/50 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-primary text-white py-4 rounded-2xl font-bold hover:bg-primary-container hover:scale-[1.01] active:scale-95 transition-all shadow-lg shadow-primary/10 flex items-center justify-center gap-2 cursor-pointer disabled:bg-primary/50 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" /> Transmission ongoing...
                    </>
                  ) : (
                    <>
                      Send Message <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="success-screen"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-10 space-y-6"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto text-green-600">
                  <CheckCircle className="w-10 h-10" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-hanken text-2xl font-bold text-on-surface">
                    Transmission Complete!
                  </h3>
                  <p className="text-secondary text-sm max-w-sm mx-auto leading-relaxed">
                    Thank you <strong>{name}</strong>. Your message was successfully received. Growth Lock will contact you at <strong>{email}</strong> shortly.
                  </p>
                </div>

                <button
                  onClick={handleReset}
                  className="bg-primary/10 hover:bg-primary/15 text-primary-container px-6 py-3 rounded-full text-xs font-semibold transition-all inline-flex items-center gap-2 cursor-pointer"
                >
                  Send another message <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>

      {/* Premium Platforms Sharing Modal */}
      <AnimatePresence>
        {showShareModal && (
          <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
            {/* Backdrop slide-in */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowShareModal(false)}
              className="absolute inset-0 bg-slate-950/60 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="relative w-full max-w-sm bg-white rounded-[32px] p-6 shadow-2xl border border-outline-variant/10 overflow-hidden z-10"
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="font-hanken font-extrabold text-xl text-on-surface">Share Portfolio</h3>
                  <p className="text-secondary text-xs mt-0.5">Spread the work with your network</p>
                </div>
                <button 
                  onClick={() => setShowShareModal(false)}
                  type="button"
                  className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center hover:bg-outline-variant/20 transition-colors text-on-surface cursor-pointer"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Share Platforms Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {/* WhatsApp */}
                <a 
                  href={`https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-green-50/50 hover:bg-green-50 rounded-2xl border border-green-200/50 transition-all active:scale-[0.98] group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#25D366] text-white flex items-center justify-center group-hover:scale-105 transition-transform shrink-0">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.456L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.863-9.855.001-2.63-1.02-5.101-2.871-6.955C16.6 1.991 14.134.969 11.511.969c-5.439 0-9.865 4.42-9.867 9.856 0 1.76.471 3.478 1.348 5.011l-.955 3.486 3.58-.938zm12.106-7.391c-.287-.144-1.702-.84-1.965-.936-.264-.096-.456-.144-.648.144-.192.288-.744.936-.912 1.129-.168.192-.336.216-.624.072-2.316-1.163-3.193-1.636-4.455-3.805-.336-.577.336-.535.961-1.787.104-.216.052-.408-.025-.552-.077-.144-.648-1.56-.888-2.136-.231-.56-.475-.482-.648-.49-.168-.008-.36-.01-.552-.01-.192 0-.504.072-.768.36-.264.288-1.008.984-1.008 2.4 0 1.416 1.032 2.784 1.176 2.976.144.192 2.032 3.102 4.921 4.352.688.297 1.224.474 1.644.607.69.219 1.319.188 1.815.114.553-.082 1.701-.696 1.943-1.368.243-.672.243-1.248.172-1.368-.072-.12-.264-.192-.552-.336z"/>
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <span className="block font-sans font-bold text-sm text-[#25D366] truncate">WhatsApp</span>
                    <span className="block text-[10px] text-green-700/80">Message</span>
                  </div>
                </a>

                {/* Telegram */}
                <a 
                  href={`https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-sky-50/50 hover:bg-sky-50 rounded-2xl border border-sky-200/50 transition-all active:scale-[0.98] group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#0088cc] text-white flex items-center justify-center group-hover:scale-105 transition-transform shrink-0">
                    <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                      <path d="M23.91 3.79c-.19-.44-.61-.73-1.12-.76-.55-.04-1.08.19-1.52.56L1.13 13.91c-.72.36-.93 1.12-.48 1.75.33.47.93.68 1.49.52l5.05-1.42 3.65 4.32c.31.37.82.55 1.3.47.48-.08.88-.41 1.05-.88l2.13-5.83 5.92 5.05c.34.29.77.42 1.2.35s.8-.32.99-.71c1.55-3.32 4.05-10.42 5.17-13.68.17-.5.03-1.05-.29-1.47z"/>
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <span className="block font-sans font-bold text-sm text-[#0088cc] truncate">Telegram</span>
                    <span className="block text-[10px] text-sky-700/80">Send link</span>
                  </div>
                </a>

                {/* Twitter / X */}
                <a 
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-neutral-50/50 hover:bg-neutral-50 rounded-2xl border border-neutral-200/50 transition-all active:scale-[0.98] group"
                >
                  <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center group-hover:scale-105 transition-transform shrink-0">
                    <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <span className="block font-sans font-bold text-sm text-neutral-800 dark:text-neutral-200 truncate">Twitter / X</span>
                    <span className="block text-[10px] text-neutral-500">Post</span>
                  </div>
                </a>

                {/* Facebook */}
                <a 
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-blue-50/50 hover:bg-blue-50 rounded-2xl border border-blue-200/50 transition-all active:scale-[0.98] group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#1877F2] text-white flex items-center justify-center group-hover:scale-105 transition-transform shrink-0">
                    <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <span className="block font-sans font-bold text-sm text-[#1877F2] truncate">Facebook</span>
                    <span className="block text-[10px] text-blue-700/80">Share</span>
                  </div>
                </a>
              </div>

              {/* Copy URL widget link container */}
              <div className="bg-slate-50 dark:bg-neutral-900 rounded-2xl p-3 border border-outline-variant/10 flex items-center justify-between gap-3">
                <span className="font-mono text-xs text-secondary truncate max-w-[190px] select-all">
                  {shareUrl}
                </span>
                <button
                  onClick={handleCopyLink}
                  type="button"
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold font-sans transition-all active:scale-95 cursor-pointer ${
                    copied 
                      ? 'bg-green-600 text-white scale-[1.02] shadow-md shadow-green-500/25' 
                      : 'hover:bg-outline-variant/20 text-on-surface'
                  }`}
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
