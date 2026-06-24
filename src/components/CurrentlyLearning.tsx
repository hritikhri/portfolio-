import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const learningItems = [
  {
    title: 'Data Structures & Algorithms',
    emoji: '🧮',
    description: 'Solving problems consistently on LeetCode. Focus on arrays, trees, graphs, and dynamic programming.',
    progress: 35,
    tag: 'In Progress',
    tagColor: '#F59E0B',
  },
  {
    title: 'System Design',
    emoji: '🏗️',
    description: 'Learning how large-scale systems are architected. Studying load balancing, caching, databases, and microservices.',
    progress: 25,
    tag: 'Early Stage',
    tagColor: '#6366F1',
  },
  {
    title: 'Next.js 15',
    emoji: '▲',
    description: 'Deep diving into App Router, Server Components, Server Actions, and the modern Next.js paradigm.',
    progress: 60,
    tag: 'Active',
    tagColor: '#10B981',
  },
  {
  title: 'AI Coding Tools & Agents',
  emoji: '🤖',
  description: 'Exploring modern AI-powered development workflows, coding assistants, autonomous agents, and understanding how tools like Cursor, Claude Code, and AI agents can enhance software engineering productivity.',
  progress: 40,
  tag: 'Exploring',
  tagColor: '#EC4899',
},
  {
    title: 'WebRTC',
    emoji: '📡',
    description: 'Exploring peer-to-peer communication for building video calling and real-time collaboration features.',
    progress: 15,
    tag: 'Just Started',
    tagColor: '#4F8CFF',
  },
  {
    title: 'Backend Architecture',
    emoji: '⚡',
    description: 'Learning about API design patterns, middleware composition, caching strategies, and production-grade Node.js.',
    progress: 45,
    tag: 'In Progress',
    tagColor: '#F59E0B',
  },
];

const CurrentlyLearning: React.FC = () => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section className="py-24 relative">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[11px] font-semibold tracking-widest uppercase text-[#4F8CFF]">Growth</span>
            <div className="h-px w-12 bg-[#4F8CFF]/30" />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2
              className={`text-3xl sm:text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}
              style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em' }}
            >
              Currently learning
            </h2>
            <p className={`text-[15px] max-w-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
              What I'm investing time in right now.
            </p>
          </div>
        </motion.div>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {learningItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5, ease: 'easeOut' }}
              className={`card-base p-5 border group ${
                isDark
                  ? 'bg-[#111827] border-white/8 hover:border-white/15'
                  : 'bg-white border-gray-100 hover:border-gray-200 shadow-sm'
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <span className="text-2xl">{item.emoji}</span>
                  <h3
                    className={`text-[15px] font-semibold leading-tight ${isDark ? 'text-white' : 'text-gray-900'}`}
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  >
                    {item.title}
                  </h3>
                </div>
              </div>

              <span
                className="inline-flex items-center text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full mb-3"
                style={{
                  color: item.tagColor,
                  background: `${item.tagColor}15`,
                  border: `1px solid ${item.tagColor}25`,
                }}
              >
                {item.tag}
              </span>

              <p className={`text-[13px] leading-relaxed mb-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                {item.description}
              </p>

              {/* Progress bar */}
              {/* <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className={`text-[11px] font-medium ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>Progress</span>
                  <span className="text-[11px] font-semibold text-[#4F8CFF]">{item.progress}%</span>
                </div>
                <div className={`h-1 rounded-full overflow-hidden ${isDark ? 'bg-white/6' : 'bg-gray-100'}`}>
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: `linear-gradient(90deg, ${item.tagColor}, ${item.tagColor}80)` }}
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${item.progress}%` } : { width: 0 }}
                    transition={{ delay: index * 0.1 + 0.4, duration: 0.8, ease: 'easeOut' }}
                  />
                </div>
              </div> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurrentlyLearning;
