import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const skillCategories = [
  {
    id: 'frontend',
    label: 'Frontend',
    emoji: '🎨',
    skills: [
      { name: 'React.js', level: 85, icon: '⚛️' },
      { name: 'Next.js', level: 75, icon: '▲' },
      { name: 'JavaScript', level: 88, icon: '🟨' },
      { name: 'TypeScript', level: 70, icon: '🔷' },
      { name: 'HTML5', level: 95, icon: '🔶' },
      { name: 'CSS3', level: 90, icon: '🔵' },
      { name: 'Tailwind CSS', level: 85, icon: '💨' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    emoji: '⚙️',
    skills: [
      { name: 'Node.js', level: 80, icon: '🟢' },
      { name: 'Express.js', level: 80, icon: '🚂' },
      { name: 'REST APIs', level: 85, icon: '🔗' },
      { name: 'Socket.IO', level: 72, icon: '🔌' },
      { name: 'JWT Auth', level: 78, icon: '🔐' },
    ],
  },
  {
    id: 'database',
    label: 'Database',
    emoji: '🗄️',
    skills: [
      { name: 'MongoDB', level: 80, icon: '🍃' },
      { name: 'Mongoose', level: 78, icon: '📦' },
    ],
  },
  {
    id: 'tools',
    label: 'Tools',
    emoji: '🛠️',
    skills: [
      { name: 'Git', level: 82, icon: '🌿' },
      { name: 'GitHub', level: 84, icon: '🐙' },
      { name: 'VS Code', level: 90, icon: '💻' },
      { name: 'Postman', level: 75, icon: '📮' },
    ],
  },
];

const SkillBar: React.FC<{ name: string; level: number; icon: string; index: number; isDark: boolean; isInView: boolean }> = ({
  name, level, icon, index, isDark, isInView,
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.06, duration: 0.4 }}
      className={`p-3.5 rounded-xl border transition-all duration-250 cursor-default ${
        hovered
          ? isDark
            ? 'border-[#4F8CFF]/30 bg-[#4F8CFF]/5'
            : 'border-blue-200 bg-blue-50/50'
          : isDark
          ? 'border-white/6 bg-[#111827]/50 hover:border-white/12'
          : 'border-gray-100 bg-white hover:border-gray-200 shadow-sm'
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-base">{icon}</span>
          <span className={`text-[13px] font-medium ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
            {name}
          </span>
        </div>
        <span className={`text-[11px] font-semibold tabular-nums ${
          hovered ? 'text-[#4F8CFF]' : isDark ? 'text-gray-500' : 'text-gray-400'
        }`}>
          {level}%
        </span>
      </div>
      <div className={`h-1 rounded-full overflow-hidden ${isDark ? 'bg-white/8' : 'bg-gray-100'}`}>
        <motion.div
          className="h-full rounded-full"
          style={{ background: 'linear-gradient(90deg, #4F8CFF, #a78bfa)' }}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ delay: index * 0.06 + 0.3, duration: 0.7, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  );
};

const Skills: React.FC = () => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';
  const [activeTab, setActiveTab] = useState('frontend');
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  const activeCategory = skillCategories.find(c => c.id === activeTab)!;

  return (
    <section id="skills" className="py-24 relative">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[11px] font-semibold tracking-widest uppercase text-[#4F8CFF]">
              Skills
            </span>
            <div className="h-px w-12 bg-[#4F8CFF]/30" />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2
              className={`text-3xl sm:text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}
              style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em' }}
            >
              What I work with
            </h2>
            <p className={`text-[15px] max-w-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
              Tools I've learned by actually using them in real projects.
            </p>
          </div>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`inline-flex items-center gap-1 p-1.5 rounded-2xl border mb-8 flex-wrap ${
            isDark ? 'bg-[#111827] border-white/8' : 'bg-gray-50 border-gray-200'
          }`}
        >
          {skillCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`relative flex items-center gap-1.5 px-4 py-2 rounded-xl text-[13px] font-medium transition-all duration-200 ${
                activeTab === cat.id
                  ? isDark
                    ? 'bg-[#1a2234] text-white shadow-sm border border-white/10'
                    : 'bg-white text-gray-900 shadow-sm border border-gray-200'
                  : isDark
                  ? 'text-gray-400 hover:text-gray-200'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <span>{cat.emoji}</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <div ref={ref}>
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3"
          >
            {activeCategory.skills.map((skill, index) => (
              <SkillBar
                key={skill.name}
                {...skill}
                index={index}
                isDark={isDark}
                isInView={isInView}
              />
            ))}
          </motion.div>
        </div>

        {/* Tech pills - all technologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12"
        >
          <p className={`text-[12px] font-semibold uppercase tracking-wider mb-4 ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
            Full tech exposure
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              'React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'Socket.IO',
              'JavaScript', 'TypeScript', 'Tailwind', 'HTML5', 'CSS3',
              'Git', 'GitHub', 'Postman', 'VS Code', 'JWT', 'REST API',
            ].map(tech => (
              <span
                key={tech}
                className={`skill-pill text-[12px] px-3 py-1.5 rounded-full border font-medium ${
                  isDark
                    ? 'border-white/8 text-gray-400 hover:border-white/20 hover:text-gray-200 bg-[#111827]/60'
                    : 'border-gray-100 text-gray-500 hover:border-gray-300 hover:text-gray-700 bg-white shadow-sm'
                }`}
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
