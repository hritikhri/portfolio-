import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { focusedOn, mystats } from '@/utils/stats';

const About: React.FC = () => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="py-24 relative">
      <div className="container">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="mb-4 flex items-center gap-2">
              <span className={`text-[11px] font-semibold tracking-widest uppercase ${isDark ? 'text-[#4F8CFF]' : 'text-[#4F8CFF]'}`}>
                About
              </span>
              <div className={`h-px flex-1 max-w-12 ${isDark ? 'bg-[#4F8CFF]/30' : 'bg-[#4F8CFF]/30'}`} />
            </div>

            <h2
              className={`text-3xl sm:text-4xl font-bold mb-6 leading-tight ${isDark ? 'text-white' : 'text-gray-900'}`}
              style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em' }}
            >
              A curious mind that found its home in software.
            </h2>

            <div
              className={`space-y-4 text-[16px] leading-[1.75] ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              <p>
                It started with a simple question: how does a website actually work? I was around 16, spent a weekend breaking apart random HTML and CSS from tutorials, and something just clicked. The idea that you could write text and have it become something visual — that felt like a superpower.
              </p>
              <p>
                Since starting my BCA in 2023, I've gone from building simple static pages to building full stack applications with authentication, real-time features, and actual databases behind them. It didn't happen in a straight line — there were plenty of nights staring at bugs I couldn't figure out — but that's what makes it stick.
              </p>
              <p>
                Right now, I'm focused on going deeper: understanding how systems are designed, how data flows, how software scales. I want to build things that actually matter — not just portfolio projects, but things people use.
              </p>
            </div>

            {/* Subtle quote */}
            <div className={`mt-8 pl-4 border-l-2 border-[#4F8CFF]/40`}>
              <p className={`text-[14px] italic ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                "I'm not just looking for a job. I want to find a team where I can grow, contribute, and build something worth building."
              </p>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          >
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {mystats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                  className={`p-5 rounded-2xl border ${
                    isDark
                      ? 'bg-[#111827] border-white/8 hover:border-white/15'
                      : 'bg-white border-gray-100 hover:border-gray-200 shadow-sm'
                  } transition-all duration-300`}
                >
                  <p
                    className={`text-3xl font-bold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}
                    style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em' }}
                  >
                    {stat.value}
                  </p>
                  <p className={`text-[13px] ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Current focus */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.5 }}
              className={`p-5 rounded-2xl border ${
                isDark ? 'bg-[#111827] border-white/8' : 'bg-white border-gray-100 shadow-sm'
              }`}
            >
              <p className={`text-[12px] font-semibold uppercase tracking-wider mb-3 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                Currently focused on
              </p>
              <div className="flex flex-wrap gap-2">
                {focusedOn.map(item => (
                  <span
                    key={item}
                    className={`text-[12px] px-3 py-1.5 rounded-full border font-medium ${
                      isDark
                        ? 'bg-[#4F8CFF]/10 border-[#4F8CFF]/20 text-[#4F8CFF]'
                        : 'bg-blue-50 border-blue-100 text-blue-600'
                    }`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Location / availability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.5 }}
              className={`mt-4 flex items-center gap-4 p-4 rounded-2xl border ${
                isDark ? 'bg-[#111827] border-white/8' : 'bg-white border-gray-100 shadow-sm'
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="text-lg">📍</span>
                <div>
                  <p className={`text-[13px] font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>India</p>
                  <p className={`text-[11px] ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>Based in</p>
                </div>
              </div>
              <div className={`w-px h-8 ${isDark ? 'bg-white/8' : 'bg-gray-100'}`} />
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <div>
                  <p className={`text-[13px] font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Available</p>
                  <p className={`text-[11px] ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>For opportunities</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
