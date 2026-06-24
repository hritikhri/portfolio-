import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Send, ArrowUpRight, Check } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import emailjs from '@emailjs/browser';

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

// ─── REPLACE THESE WITH YOUR ACTUAL EMAILJS VALUES ───────────────────────────
const EMAILJS_SERVICE_ID  = 'your_service_id';   // e.g. "service_abc123"
const EMAILJS_TEMPLATE_ID = 'your_template_id';  // e.g. "template_xyz789"
const EMAILJS_PUBLIC_KEY  = 'your_public_key';   // e.g. "A1B2C3D4E5F6G7H8"
// ─────────────────────────────────────────────────────────────────────────────

const Contact: React.FC = () => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // ── Only this function was added/changed ────────────────────────────────────
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:  form.name,      // matches {{from_name}}  in your template
          from_email: form.email,     // matches {{from_email}} in your template
          message:    form.message,   // matches {{message}}    in your template
          to_email:   'hritik.dev.04@gmail.com',
        },
        EMAILJS_PUBLIC_KEY
      );

      setSubmitted(true);
    } catch (err) {
      console.error('EmailJS error:', err);
      setError('Something went wrong. Please try again or email me directly.');
    } finally {
      setLoading(false);
    }
  };
  // ───────────────────────────────────────────────────────────────────────────

  const inputClass = `w-full px-4 py-3 rounded-2xl text-[14px] border outline-none transition-all duration-200 font-inter ${
    isDark
      ? 'bg-[#0B0F19] border-white/8 text-gray-200 placeholder-gray-600 focus:border-[#4F8CFF]/50 focus:bg-[#111827]'
      : 'bg-gray-50 border-gray-200 text-gray-800 placeholder-gray-400 focus:border-[#4F8CFF]/40 focus:bg-white focus:ring-2 focus:ring-[#4F8CFF]/10'
  }`;

  return (
    <section id="contact" className="py-20  relative">
      <div className="container">
        <div ref={ref} className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="text-[11px] font-semibold tracking-widest uppercase text-[#4F8CFF]">Contact</span>
            </div>
            <h2
              className={`text-3xl sm:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}
              style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em' }}
            >
              Let's talk
            </h2>
            <p className={`text-[16px] leading-relaxed max-w-lg mx-auto ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              Thanks for stopping by. Whether it's an opportunity, a project discussion, or simply a conversation about technology — I'd be happy to connect.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Left - Contact info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="lg:col-span-2 space-y-4"
            >
              {/* Email */}
              <a
                href="mailto:hritik.dev.04@gmail.com"
                className={`flex items-center gap-3.5 p-4 rounded-2xl border transition-all duration-200 group ${
                  isDark
                    ? 'bg-[#111827] border-white/8 hover:border-white/20 hover:shadow-lg hover:shadow-black/30'
                    : 'bg-white border-gray-100 hover:border-gray-200 hover:shadow-md shadow-sm'
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  isDark ? 'bg-[#4F8CFF]/10' : 'bg-blue-50'
                }`}>
                  <Mail size={17} className="text-[#4F8CFF]" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className={`text-[11px] font-semibold uppercase tracking-wider mb-0.5 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                    Email
                  </p>
                  <p className={`text-[13px] font-medium truncate ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                    hritik.dev.04@gmail.com
                  </p>
                </div>
                <ArrowUpRight size={14} className={`flex-shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${isDark ? 'text-gray-600' : 'text-gray-300'}`} />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/hritikhri"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3.5 p-4 rounded-2xl border transition-all duration-200 group ${
                  isDark
                    ? 'bg-[#111827] border-white/8 hover:border-white/20 hover:shadow-lg hover:shadow-black/30'
                    : 'bg-white border-gray-100 hover:border-gray-200 hover:shadow-md shadow-sm'
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  isDark ? 'bg-white/5' : 'bg-gray-50'
                }`}>
                  <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>
                    <GithubIcon />
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className={`text-[11px] font-semibold uppercase tracking-wider mb-0.5 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                    GitHub
                  </p>
                  <p className={`text-[13px] font-medium ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                    github.com/hritikhri
                  </p>
                </div>
                <ArrowUpRight size={14} className={`flex-shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${isDark ? 'text-gray-600' : 'text-gray-300'}`} />
              </a>

              {/* LinkedIn */}
              <a
                href="http://www.linkedin.com/in/hritik-kumar-2b6b9724a"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3.5 p-4 rounded-2xl border transition-all duration-200 group ${
                  isDark
                    ? 'bg-[#111827] border-white/8 hover:border-white/20 hover:shadow-lg hover:shadow-black/30'
                    : 'bg-white border-gray-100 hover:border-gray-200 hover:shadow-md shadow-sm'
                }`}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#0A66C2]/10">
                  <span className="text-[#0A66C2]">
                    <LinkedinIcon />
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className={`text-[11px] font-semibold uppercase tracking-wider mb-0.5 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                    LinkedIn
                  </p>
                  <p className={`text-[13px] font-medium ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                    linkedin.com/in/hritik-kumar-dev
                  </p>
                </div>
                <ArrowUpRight size={14} className={`flex-shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${isDark ? 'text-gray-600' : 'text-gray-300'}`} />
              </a>

              {/* Response time */}
              <div className={`p-4 rounded-2xl border ${isDark ? 'bg-[#111827]/50 border-white/5' : 'bg-gray-50 border-gray-100'}`}>
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className={`text-[12px] font-semibold ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    Usually responds within 24 hours
                  </span>
                </div>
                <p className={`text-[12px] ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
                  Best reached via email or LinkedIn.
                </p>
              </div>
            </motion.div>

            {/* Right - Contact form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className={`lg:col-span-3 p-6 rounded-3xl border ${
                isDark ? 'bg-[#111827] border-white/8' : 'bg-white border-gray-100 shadow-sm'
              }`}
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-8"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-4">
                    <Check size={28} className="text-green-400" />
                  </div>
                  <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    Message sent!
                  </h3>
                  <p className={`text-[14px] ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    Thanks for reaching out. I'll get back to you as soon as I can.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', message: '' }); }}
                    className={`mt-6 text-[13px] font-medium text-[#4F8CFF] hover:underline`}
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className={`block text-[12px] font-semibold mb-1.5 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        Name
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        placeholder="Your name"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className={`block text-[12px] font-semibold mb-1.5 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        placeholder="your@email.com"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label className={`block text-[12px] font-semibold mb-1.5 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      placeholder="What's on your mind? An opportunity, a project, or just saying hi..."
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  {/* Error message — invisible until triggered, takes no layout space */}
                  {error && (
                    <p className="text-[13px] text-red-400 text-center">{error}</p>
                  )}

                  <motion.button
                    type="submit"
                    disabled={loading}
                    className={`w-full btn-primary justify-center font-semibold text-[14px] ${
                      loading
                        ? 'opacity-70 cursor-not-allowed bg-[#4F8CFF] text-white'
                        : 'bg-[#4F8CFF] hover:bg-[#3a75e8] text-white shadow-lg shadow-blue-500/20'
                    }`}
                    whileHover={loading ? {} : { scale: 1.01 }}
                    whileTap={loading ? {} : { scale: 0.98 }}
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send size={15} /> Send Message
                      </span>
                    )}
                  </motion.button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;