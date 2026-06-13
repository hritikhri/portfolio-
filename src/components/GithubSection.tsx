import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

// Generate a realistic-looking contribution grid
const generateContributions = () => {
  const weeks = 52;
  const days = 7;
  const grid: number[][] = [];
  for (let w = 0; w < weeks; w++) {
    const week: number[] = [];
    for (let d = 0; d < days; d++) {
      const rand = Math.random();
      if (rand < 0.35) week.push(0);
      else if (rand < 0.6) week.push(1);
      else if (rand < 0.78) week.push(2);
      else if (rand < 0.9) week.push(3);
      else week.push(4);
    }
    grid.push(week);
  }
  return grid;
};

const contributions = generateContributions();

const languages = [
  { name: 'JavaScript', percent: 42, color: '#F7DF1E' },
  { name: 'TypeScript', percent: 22, color: '#3178C6' },
  { name: 'CSS', percent: 16, color: '#264DE4' },
  { name: 'HTML', percent: 12, color: '#E34F26' },
  { name: 'Other', percent: 8, color: '#8B949E' },
];

const repos = [
  {
    name: 'VibeMeet',
    desc: 'Community networking platform for events, user connections, and social engagement.',
    stars: 24,
    lang: 'JavaScript',
    color: '#7C3AED',
    url: 'https://github.com/hritikhri/Vibemeet',
  },
  {
    name: 'Real-Time Chat App',
    desc: 'Socket.IO powered messaging platform with rooms, typing indicators, and online presence.',
    stars: 19,
    lang: 'JavaScript',
    color: '#0EA5E9',
    url: 'https://github.com/hritikhri/Real-Time-Chat-System',
  },
  {
    name: 'Medicare',
    desc: 'Doctor-patient management system with appointments, medical records, and admin controls.',
    stars: 21,
    lang: 'JavaScript',
    color: '#059669',
    url: 'https://github.com/hritikhri/medicare',
  },
  {
    name: 'Social Media Platform',
    desc: 'Full-stack social network featuring posts, likes, comments, follows, and notifications.',
    stars: 32,
    lang: 'JavaScript',
    color: '#8B5CF6',
    url: 'https://github.com/hritikhri/Social-Media-Platform-MERN-',
  },
  {
    name: 'LinkedIn Clone',
    desc: 'Professional networking platform with profiles, connections, feeds, and messaging.',
    stars: 28,
    lang: 'JavaScript',
    color: '#0A66C2',
    url: 'https://github.com/hritikhri/Linkedin-Clone',
  },
];

const levelColors = {
  dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
  light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
};

const GithubSection: React.FC = () => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const colors = isDark ? levelColors.dark : levelColors.light;

  return (
<section className="py-12 sm:py-16 lg:py-24 relative">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-8 sm:mb-10"
    >
      <div className="flex items-center gap-2 mb-4">
        <span className="text-[11px] font-semibold tracking-widest uppercase text-[#4F8CFF]">
          Code
        </span>
        <div className="h-px w-12 bg-[#4F8CFF]/30" />
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center gap-3">
        <h2
          className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}
          style={{
            fontFamily: 'Space Grotesk, sans-serif',
            letterSpacing: '-0.02em',
          }}
        >
          GitHub Activity
        </h2>

        <div
          className={`flex items-center gap-1.5 ${
            isDark ? 'text-gray-400' : 'text-gray-500'
          }`}
        >
          <GithubIcon />
        </div>
      </div>

      <p
        className={`mt-2 text-sm sm:text-[15px] ${
          isDark ? 'text-gray-500' : 'text-gray-400'
        }`}
      >
        Consistent, intentional progress — shipped in public.
      </p>
    </motion.div>

    <div
      ref={ref}
      className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6"
    >
      {/* Contribution Graph */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className={`lg:col-span-2 p-4 sm:p-5 lg:p-6 rounded-2xl sm:rounded-3xl border ${
          isDark
            ? 'bg-[#111827] border-white/8'
            : 'bg-white border-gray-100 shadow-sm'
        }`}
      >
        <div className="flex items-center justify-between mb-4">
          <p
            className={`text-xs sm:text-[13px] font-semibold ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}
          >
            Contribution Activity
          </p>

          <span
            className={`text-[11px] sm:text-[12px] ${
              isDark ? 'text-gray-500' : 'text-gray-400'
            }`}
          >
            Past year
          </span>
        </div>

        <div className="overflow-x-auto no-scrollbar pb-2">
          <div
            className="flex gap-[2px] sm:gap-[3px]"
            style={{ minWidth: 'max-content' }}
          >
            {contributions.map((week, wi) => (
              <div key={wi} className="flex flex-col gap-[2px] sm:gap-[3px]">
                {week.map((level, di) => (
                  <motion.div
                    key={di}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{
                      delay: (wi * 7 + di) * 0.001,
                      duration: 0.2,
                    }}
                    className="w-[8px] h-[8px] sm:w-[10px] sm:h-[10px] rounded-[2px]"
                    style={{
                      backgroundColor: colors[level],
                    }}
                    title={`${level} contributions`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-1.5 mt-4 flex-wrap">
          <span
            className={`text-[10px] sm:text-[11px] ${
              isDark ? 'text-gray-600' : 'text-gray-400'
            }`}
          >
            Less
          </span>

          {colors.map((c, i) => (
            <div
              key={i}
              className="w-[8px] h-[8px] sm:w-[10px] sm:h-[10px] rounded-[2px]"
              style={{ backgroundColor: c }}
            />
          ))}

          <span
            className={`text-[10px] sm:text-[11px] ${
              isDark ? 'text-gray-600' : 'text-gray-400'
            }`}
          >
            More
          </span>
        </div>
      </motion.div>

      {/* Languages */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.15, duration: 0.6 }}
        className={`p-4 sm:p-5 lg:p-6 rounded-2xl sm:rounded-3xl border ${
          isDark
            ? 'bg-[#111827] border-white/8'
            : 'bg-white border-gray-100 shadow-sm'
        }`}
      >
        <p
          className={`text-xs sm:text-[13px] font-semibold mb-4 ${
            isDark ? 'text-gray-300' : 'text-gray-700'
          }`}
        >
          Languages
        </p>

        <div className="flex h-2 rounded-full overflow-hidden mb-5">
          {languages.map((lang) => (
            <motion.div
              key={lang.name}
              initial={{ width: 0 }}
              animate={
                isInView
                  ? { width: `${lang.percent}%` }
                  : { width: 0 }
              }
              transition={{
                delay: 0.4,
                duration: 0.8,
                ease: 'easeOut',
              }}
              style={{ backgroundColor: lang.color }}
            />
          ))}
        </div>

        <div className="space-y-3">
          {languages.map((lang) => (
            <div
              key={lang.name}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <div
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: lang.color }}
                />

                <span
                  className={`text-xs sm:text-[13px] ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  {lang.name}
                </span>
              </div>

              <span
                className={`text-[11px] sm:text-[12px] font-medium tabular-nums ${
                  isDark ? 'text-gray-500' : 'text-gray-400'
                }`}
              >
                {lang.percent}%
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Repo Cards */}
      {repos.map((repo, i) => (
        <motion.a
          key={repo.name}
          href={repo.url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            delay: i * 0.1 + 0.2,
            duration: 0.5,
          }}
          className={`group p-4 sm:p-5 rounded-xl sm:rounded-2xl border transition-all duration-300 block ${
            isDark
              ? 'bg-[#111827] border-white/8 hover:border-white/20 hover:shadow-lg hover:shadow-black/30'
              : 'bg-white border-gray-100 hover:border-gray-200 hover:shadow-md shadow-sm'
          }`}
        >
          <div className="flex items-start justify-between mb-2 gap-2">
            <div className="flex items-center gap-2 min-w-0">
              <GithubIcon />

              <span
                className={`text-[13px] sm:text-[14px] font-semibold truncate ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                }}
              >
                {repo.name}
              </span>
            </div>
          </div>

          <p
            className={`text-[11px] sm:text-[12px] mb-3 line-clamp-2 ${
              isDark ? 'text-gray-500' : 'text-gray-400'
            }`}
          >
            {repo.desc}
          </p>

          <div className="flex items-center gap-3 flex-wrap">
            <div className="flex items-center gap-1.5">
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: repo.color }}
              />

              <span
                className={`text-[10px] sm:text-[11px] ${
                  isDark ? 'text-gray-600' : 'text-gray-400'
                }`}
              >
                {repo.lang}
              </span>
            </div>

            <div className="flex items-center gap-1">
              <span
                className={`text-[10px] sm:text-[11px] ${
                  isDark ? 'text-gray-600' : 'text-gray-400'
                }`}
              >
                ⭐ {repo.stars}
              </span>
            </div>
          </div>
        </motion.a>
      ))}
    </div>
  </div>
</section>
  );
};

export default GithubSection;
