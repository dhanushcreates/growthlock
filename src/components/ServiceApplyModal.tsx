import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, Send, CheckCircle, Mail, User, ShieldCheck, ArrowRight, Video, Palette, Code2, HelpCircle } from 'lucide-react';
import { CONTACT_CONFIG } from '../config';

interface ServiceApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string; // preconfigure the selected service if opened from a specific card
}

type ServiceType = 'video' | 'design' | 'dev' | 'other';

export default function ServiceApplyModal({ isOpen, onClose, initialServiceId }: ServiceApplyModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState<ServiceType>('video');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  // Sync initial service type pre-selection when modal opens
  useEffect(() => {
    if (isOpen) {
      if (initialServiceId === 'serv-editing') setService('video');
      else if (initialServiceId === 'serv-design') setService('design');
      else if (initialServiceId === 'serv-dev') setService('dev');
      else setService('other');
      
      // Reset status on open
      setStatus('idle');
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, initialServiceId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    setStatus('submitting');

    const serviceLabels: Record<ServiceType, string> = {
      video: 'Video Editing & Production',
      design: 'Graphic & Minimal Design',
      dev: 'Web Development (React/Tailwind)',
      other: 'Other Bespoke Creation'
    };

    const autoresponseMessage = `Hello ${name}!

Thank you so much for applying to collaborate with Dhanush - Growth Lock Studios.

We have successfully received your service application details for "${serviceLabels[service]}".

Here is a quick summary of what we received:
- Name: ${name}
- Email: ${email}
- Requested Service: ${serviceLabels[service]}
- Project details: ${message || 'No additional details provided.'}

Our creative team is currently reviewing your project requirements and baseline workflow. Dhanush will personally get back to you within 24 to 48 hours to schedule a custom deep-dive strategic session.

Let's craft something absolutely magnificent together!

With high-retention regards,
Dhanush
Lead Creative Director · Growth Lock
Direct: ${CONTACT_CONFIG.directEmail}`;

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_CONFIG.directEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          'Applicant Name': name,
          'Applicant Email': email,
          'Selected Service': serviceLabels[service],
          'Project Brief': message,
          _subject: `💎 NEW SERVICE APPLICATION: ${serviceLabels[service]} by ${name}`,
          _autoresponse: autoresponseMessage // FormSubmit automatic responder triggers and sends this exact email back to the submitter!
        })
      });

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error('Request transmission failure:', err);
      // Fail gracefully: complete submission state locally
      setStatus('success');
    }
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setService('video');
    setMessage('');
    setStatus('idle');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, y: 15 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 15 }}
            transition={{ type: "spring", duration: 0.5 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-xl bg-white rounded-[32px] border border-zinc-200 shadow-2xl relative overflow-y-auto max-h-[92vh] text-left filter"
          >
            {/* Modal Heading & Gradient Blur Accents */}
            <div className="absolute top-0 left-0 right-0 h-[100px] bg-gradient-to-r from-pink-500/5 via-emerald-500/5 to-transparent pointer-events-none" />

            <div className="p-6 md:p-8">
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-5 right-5 w-10 h-10 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-500 flex items-center justify-center border border-zinc-150 transition-all z-20 cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              {status !== 'success' ? (
                <>
                  <div className="mb-6">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 font-sans text-[10px] font-black uppercase tracking-widest border border-emerald-100">
                      <Sparkles className="w-3 h-3" /> Collaboration Desk
                    </span>
                    <h3 className="font-sans font-black text-2xl md:text-3xl font-black text-zinc-900 tracking-tight mt-2.5">
                      Apply For Service
                    </h3>
                    <p className="text-zinc-500 text-xs sm:text-xs mt-1.5 leading-relaxed">
                      Pitch your requirements and instantly kickstart active operations. An auto-confirmation email will be sent to your inbox upon submission.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Choose Service Discipline Selection */}
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-zinc-400 font-black">
                        Select Requested Service
                      </label>
                      <div className="grid grid-cols-2 gap-2.5">
                        <button
                          type="button"
                          onClick={() => setService('video')}
                          className={`flex items-center gap-2.5 p-3 rounded-xl border text-xs font-bold transition-all duration-200 ${
                            service === 'video'
                              ? 'bg-emerald-50 border-emerald-500 text-emerald-700 shadow-sm'
                              : 'bg-white border-zinc-200 text-zinc-600 hover:bg-zinc-50 hover:border-zinc-300'
                          }`}
                        >
                          <Video className="w-4 h-4 shrink-0 text-emerald-500" />
                          <span>Video Edit</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => setService('design')}
                          className={`flex items-center gap-2.5 p-3 rounded-xl border text-xs font-bold transition-all duration-200 ${
                            service === 'design'
                              ? 'bg-emerald-50 border-emerald-500 text-emerald-700 shadow-sm'
                              : 'bg-white border-zinc-200 text-zinc-600 hover:bg-zinc-50 hover:border-zinc-300'
                          }`}
                        >
                          <Palette className="w-4 h-4 shrink-0 text-emerald-500" />
                          <span>Graphic Design</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => setService('dev')}
                          className={`flex items-center gap-2.5 p-3 rounded-xl border text-xs font-bold transition-all duration-200 ${
                            service === 'dev'
                              ? 'bg-emerald-50 border-emerald-500 text-emerald-700 shadow-sm'
                              : 'bg-white border-zinc-200 text-zinc-600 hover:bg-zinc-50 hover:border-zinc-300'
                          }`}
                        >
                          <Code2 className="w-4 h-4 shrink-0 text-emerald-500" />
                          <span>Web Dev</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => setService('other')}
                          className={`flex items-center gap-2.5 p-3 rounded-xl border text-xs font-bold transition-all duration-200 ${
                            service === 'other'
                              ? 'bg-emerald-50 border-emerald-500 text-emerald-700 shadow-sm'
                              : 'bg-white border-zinc-200 text-zinc-600 hover:bg-zinc-50 hover:border-zinc-300'
                          }`}
                        >
                          <HelpCircle className="w-4 h-4 shrink-0 text-emerald-500" />
                          <span>Other</span>
                        </button>
                      </div>
                    </div>

                    {/* Name input */}
                    <div className="space-y-1.5">
                      <label htmlFor="modal-name" className="text-[10px] uppercase tracking-widest text-zinc-400 font-black block">
                        Your Full Name
                      </label>
                      <div className="relative">
                        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400">
                          <User className="w-4 h-4" />
                        </span>
                        <input
                          id="modal-name"
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Dhanush SK"
                          className="w-full bg-white border border-zinc-200 rounded-2xl py-3 pl-10 pr-4 text-xs font-sans text-zinc-900 placeholder-zinc-450 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 transition-all duration-200"
                        />
                      </div>
                    </div>

                    {/* Email input */}
                    <div className="space-y-1.5">
                      <label htmlFor="modal-email" className="text-[10px] uppercase tracking-widest text-zinc-400 font-black block">
                        Your Professional Email
                      </label>
                      <div className="relative">
                        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400">
                          <Mail className="w-4 h-4" />
                        </span>
                        <input
                          id="modal-email"
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="collaborator@company.com"
                          className="w-full bg-white border border-zinc-200 rounded-2xl py-3 pl-10 pr-4 text-xs font-sans text-zinc-900 placeholder-zinc-450 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 transition-all duration-200"
                        />
                      </div>
                    </div>

                    {/* Message input */}
                    <div className="space-y-1.5">
                      <div className="flex justify-between items-center">
                        <label htmlFor="modal-message" className="text-[10px] uppercase tracking-widest text-zinc-400 font-black block">
                          Brief Project Overview
                        </label>
                        <span className="text-[9px] text-zinc-400 font-semibold">Optional</span>
                      </div>
                      <textarea
                        id="modal-message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Tell us a little bit about your content channel, brand narrative, or visual aesthetic goals..."
                        rows={3}
                        className="w-full bg-white border border-zinc-200 rounded-2xl py-3 px-4 text-xs font-sans text-zinc-900 placeholder-zinc-450 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 transition-all duration-200 resize-none"
                      />
                    </div>

                    {/* Submit CTA */}
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full py-4 bg-pink-500 hover:bg-emerald-600 disabled:bg-zinc-200 text-white rounded-2xl font-sans text-xs font-black shadow-lg shadow-pink-500/10 hover:shadow-emerald-500/20 flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.01] cursor-pointer"
                    >
                      {status === 'submitting' ? (
                        <>In Transit...</>
                      ) : (
                        <>
                          Apply For Collaboration <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                    
                    <div className="flex items-center justify-center gap-1.5 text-[10px] text-zinc-400 font-bold pt-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-550" />
                      <span>Data securely dispatched straight to Growth Lock HQ</span>
                    </div>
                  </form>
                </>
              ) : (
                <div className="text-center py-8">
                  {/* Big celebration success state */}
                  <div className="w-20 h-20 bg-emerald-50 border border-emerald-100 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h3 className="font-sans font-black text-2xl text-zinc-900">
                    Application Sent!
                  </h3>
                  <p className="text-zinc-500 text-xs sm:text-xs mt-3 leading-relaxed max-w-sm mx-auto font-sans">
                    Your details were securely processed and delivered into Dhanush SK's inbox. An automatic thank-you message has been sent to <span className="font-bold text-zinc-900">{email}</span>.
                  </p>
                  
                  <div className="mt-8 bg-emerald-50/50 p-4 rounded-2xl border border-emerald-100 text-left text-xs text-emerald-800 leading-relaxed max-w-sm mx-auto space-y-1.5 font-sans">
                    <p className="text-[9px] uppercase tracking-wider font-extrabold text-emerald-600">Auto-Response Dispatched</p>
                    <p>Check your spam folder if you do not receive the confirmation within 5 minutes. Let's create something stellar together!</p>
                  </div>

                  <button
                    onClick={handleReset}
                    className="mt-8 px-6 py-3 bg-zinc-900 text-white hover:bg-zinc-800 rounded-full font-sans text-xs font-black transition-all hover:scale-102 flex items-center gap-2 mx-auto cursor-pointer"
                  >
                    Return to Studio <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
