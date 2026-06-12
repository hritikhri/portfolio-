import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const milestones = [
  {
    year: '2020',
    title: 'Curiosity Sparks',
    description: 'Started wondering how websites actually work. Opened browser DevTools for the first time and things got interesting.',
    emoji: '🔍',
    highlight: false,
  },
  {
    year: '2022',
    title: 'Class 12 Complete',
    description: 'Finished secondary education. Knew I wanted to go into technology — the only question was which path.',
    emoji: '🎓',
    highlight: false,
  },
  {
    year: '2023',
    title: 'BCA Begins',
    description: 'Enrolled in Bachelor of Computer Applications. Started with fundamentals — C, data structures, algorithms. The foundation phase.',
    emoji: '💻',
    highlight: false,
  },
  {
    year: '2024',
    title: 'Frontend Development',
    description: 'Learned HTML, CSS, JavaScript deeply. Picked up React. Built my first real UI. Got my first taste of shipping something that looks good.',
    emoji: '⚛️',
    highlight: true,
  },
  {
    year: '2025',
    title: 'Full Stack Projects',
    description: 'Built VibeMeet, a real-time chat app, and Medicare. Learned Node.js, Express, MongoDB, Socket.IO. Started thinking like a product engineer.',
    emoji: '🚀',
    highlight: true,
  },
  {
    year: '2026',
    title: 'Targeting SWE Roles',
    description: 'Sharpening DSA, system design, and architecture. Preparing for software engineering opportunities. Ready to contribute to real teams.',
    emoji: '🎯',
    highlight: false,
    isCurrent: true,
  },
];

const Journey: React.FC = () => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="journey" className="py-24 relative">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className={`text-[11px] font-semibold tracking-widest uppercase text-[#4F8CFF]`}>
              Timeline
            </span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}
            style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em' }}
          >
            How I got here
          </h2>
          <p className={`mt-3 text-[16px] max-w-md mx-auto ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
            Not a straight path, but every step was deliberate.
          </p>
        </motion.div>

        {/* Timeline */}
        <div ref={ref} className="relative max-w-2xl mx-auto">
          {/* Vertical line */}
          <div className={`absolute left-[28px] top-0 bottom-0 w-px ${isDark ? 'bg-white/8' : 'bg-gray-100'}`} />
          
          {/* Animated line overlay */}
          <motion.div
            className="absolute left-[28px] top-0 w-px bg-gradient-to-b from-[#4F8CFF] to-[#a78bfa]"
            initial={{ height: 0 }}
            animate={isInView ? { height: '100%' } : { height: 0 }}
            transition={{ duration: 1.5, ease: 'easeOut', delay: 0.2 }}
          />

          <div className="space-y-2">
            {milestones.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.12 + 0.3, duration: 0.5, ease: 'easeOut' }}
                className="relative flex gap-6 pl-14"
              >
                {/* Dot */}
                <div
                  className={`absolute left-[20px] top-6 w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                    item.isCurrent
                      ? 'bg-[#4F8CFF] border-[#4F8CFF] shadow-lg shadow-blue-500/40'
                      : item.highlight
                      ? isDark ? 'bg-[#4F8CFF]/20 border-[#4F8CFF]/60' : 'bg-blue-50 border-blue-300'
                      : isDark ? 'bg-[#111827] border-white/20' : 'bg-white border-gray-200'
                  }`}
                >
                  {item.isCurrent && (
                    <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`flex-1 p-5 rounded-2xl border mb-3 transition-all duration-300 ${
                    item.isCurrent
                      ? isDark
                        ? 'bg-[#4F8CFF]/8 border-[#4F8CFF]/20'
                        : 'bg-blue-50/60 border-blue-100'
                      : item.highlight
                      ? isDark
                        ? 'bg-[#111827] border-white/10 hover:border-white/20'
                        : 'bg-white border-gray-100 hover:border-gray-200 shadow-sm'
                      : isDark
                      ? 'bg-transparent border-white/5 hover:border-white/10'
                      : 'bg-transparent border-gray-100 hover:border-gray-150'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="flex items-center gap-2.5">
                      <span className="text-lg">{item.emoji}</span>
                      <div>
                        <div className="flex items-center gap-2">
                          <span
                            className={`text-[11px] font-bold tracking-wider ${
                              item.isCurrent ? 'text-[#4F8CFF]' : isDark ? 'text-[#4F8CFF]/70' : 'text-blue-400'
                            }`}
                          >
                            {item.year}
                          </span>
                          {item.isCurrent && (
                            <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                              isDark ? 'bg-[#4F8CFF]/15 text-[#4F8CFF]' : 'bg-blue-100 text-blue-600'
                            }`}>
                              Now
                            </span>
                          )}
                        </div>
                        <h3
                          className={`text-[15px] font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}
                          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                        >
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                  <p className={`text-[14px] leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
