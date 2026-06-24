import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const interests = [
  {
    emoji: '🗣️',
    title: 'Learning English',
    description: "Actively working on communication skills — both written and spoken. Clear communication is as important as clean code, and I take both seriously.",
    color: '#4F8CFF',
  },
  {
    emoji: '💡',
    title: 'Exploring Startup Ideas',
    description: "I spend time thinking about problems worth solving. Not all of them become products, but the habit of noticing friction is what leads to good ideas.",
    color: '#F59E0B',
  },
  {
    emoji: '📖',
    title: 'Technology Research',
    description: "I read about emerging tech, new frameworks, and engineering decisions at companies like Vercel, Linear, and Stripe. Understanding 'why' matters more than 'what'.",
    color: '#10B981',
  },
  {
    emoji: '📊',
    title: 'SaaS Business Models',
    description: "Fascinated by how software businesses work — pricing, retention, growth loops. Understanding the business side makes me a better engineer.",
    color: '#8B5CF6',
  },
  {
    emoji: '📺',
    title: 'Engineering Content',
    description: "Channels like Fireship, Theo, Primeagen. Not just watching — actually taking notes, building things, and forming opinions.",
    color: '#EF4444',
  },
  {
  emoji: '🏗️',
  title: 'Product Thinking',
  description: "I love thinking beyond code — understanding user problems, simplifying experiences, and building solutions that create real impact. Great software starts with empathy, not features.",
  color: '#14B8A6',
}
];

const BeyondCoding: React.FC = () => {
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
            <span className="text-[11px] font-semibold tracking-widest uppercase text-[#4F8CFF]">Interests</span>
            <div className="h-px w-12 bg-[#4F8CFF]/30" />
          </div>
          <h2
            className={`text-3xl sm:text-4xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}
            style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em' }}
          >
            Beyond coding
          </h2>
          <p className={`text-[15px] max-w-md ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
            The things I think about when I'm not writing code.
          </p>
        </motion.div>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {interests.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.08, duration: 0.5, ease: 'easeOut' }}
              className={`card-base p-5 border group ${
                isDark
                  ? 'bg-[#111827] border-white/8 hover:border-white/15'
                  : 'bg-white border-gray-100 hover:border-gray-200 shadow-sm'
              }`}
            >
              <div className="flex items-start gap-3.5">
                <div
                  className="w-10 h-10 rounded-2xl flex items-center justify-center text-xl flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${item.color}15` }}
                >
                  {item.emoji}
                </div>
                <div>
                  <h3
                    className={`text-[15px] font-semibold mb-1.5 ${isDark ? 'text-white' : 'text-gray-900'}`}
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  >
                    {item.title}
                  </h3>
                  <p className={`text-[13px] leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeyondCoding;
