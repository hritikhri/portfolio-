import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const counters = [
  { value: 15, suffix: '+', label: 'Projects Built', emoji: '🚀', desc: 'Real-world applications shipped' },
  { value: 18, suffix: '+', label: 'Technologies', emoji: '⚙️', desc: 'Tools learned by building' },
  { value: 5, suffix: '+', label: 'Certifications', emoji: '🏆', desc: 'Verified skill credentials' },
  { value: 3, suffix: '+', label: 'Years Learning', emoji: '📚', desc: 'Consistent growth journey' },
];

const useCounter = (target: number, isInView: boolean, duration = 1500) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, target, duration]);

  return count;
};

const CounterCard: React.FC<{
  counter: typeof counters[0];
  index: number;
  isInView: boolean;
  isDark: boolean;
}> = ({ counter, index, isInView, isDark }) => {
  const count = useCounter(counter.value, isInView, 1200 + index * 100);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6, ease: 'easeOut' }}
      className={`card-base p-6 border text-center group ${
        isDark
          ? 'bg-[#111827] border-white/8 hover:border-white/15 hover:shadow-lg hover:shadow-black/30'
          : 'bg-white border-gray-100 hover:border-gray-200 hover:shadow-lg hover:shadow-black/5'
      }`}
    >
      <div className="text-3xl mb-3">{counter.emoji}</div>
      <div className="flex items-end justify-center gap-0.5 mb-1">
        <span
          className={`text-4xl font-bold tabular-nums ${isDark ? 'text-white' : 'text-gray-900'}`}
          style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.03em' }}
        >
          {count}
        </span>
        <span
          className="text-2xl font-bold text-[#4F8CFF] mb-0.5"
          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
        >
          {counter.suffix}
        </span>
      </div>
      <p className={`text-[14px] font-semibold mb-1 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
        {counter.label}
      </p>
      <p className={`text-[12px] ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
        {counter.desc}
      </p>
    </motion.div>
  );
};

const Achievements: React.FC = () => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="py-20 relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2
            className={`text-2xl sm:text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}
            style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em' }}
          >
            By the numbers
          </h2>
          <p className={`mt-2 text-[15px] ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
            Progress measured in shipped work, not just studied theory.
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {counters.map((counter, i) => (
            <CounterCard
              key={counter.label}
              counter={counter}
              index={i}
              isInView={isInView}
              isDark={isDark}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
