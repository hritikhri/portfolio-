import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LeetCodeIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.394L.394 12.522a1.374 1.374 0 0 0 0 1.942l12.128 12.128a1.374 1.374 0 1 0 1.942-1.942L3.307 13.493 14.464 2.336A1.374 1.374 0 0 0 13.483 0z" transform="translate(4.8 -1.7) scale(.82)"/>
    <path d="M9.996 6.905a1.374 1.374 0 0 1 1.942 0l4.581 4.581a1.374 1.374 0 0 1 0 1.942l-4.58 4.58a1.374 1.374 0 1 1-1.943-1.942l3.61-3.609-3.61-3.61a1.374 1.374 0 0 1 0-1.942z"/>
    <path d="M8.2 11.1h10.3a1.2 1.2 0 1 1 0 2.4H8.2a1.2 1.2 0 1 1 0-2.4z"/>
  </svg>
);

const CodeforcesIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
    <rect x="3" y="9" width="4" height="10" rx="1.2" fill="#ef4444" />
    <rect x="10" y="5" width="4" height="14" rx="1.2" fill="#f59e0b" />
    <rect x="17" y="3" width="4" height="16" rx="1.2" fill="#2563eb" />
  </svg>
);

const CodeChefIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M7.5 3.5h9a1 1 0 0 1 1 1v2.2a3.6 3.6 0 0 1 2.5 3.4 3.6 3.6 0 0 1-3.6 3.6h-.1a6.3 6.3 0 0 1-3.8 2.2V18h2.4a1 1 0 1 1 0 2H9.1a1 1 0 1 1 0-2h2.4v-2.1a6.3 6.3 0 0 1-3.8-2.2h-.1A3.6 3.6 0 0 1 4 10.1a3.6 3.6 0 0 1 2.5-3.4V4.5a1 1 0 0 1 1-1Zm9 5.4v1.3a1.6 1.6 0 0 0 0-.2 1.6 1.6 0 0 0 0-1.1Zm-9 0a1.6 1.6 0 0 0 0 1.1 1.6 1.6 0 0 0 0 .2V8.9Zm1 .6a4.5 4.5 0 1 0 9 0V5.5h-9v4Z" />
  </svg>
);

const profiles = [
  {
    name: 'GitHub',
    handle: '@hritikhri',
    href: 'https://github.com/hritikhri',
    icon: <GithubIcon />,
    accent: '#111827',
    accentBg: '#11182715',
    note: 'Projects, commits, and code history',
  },
  {
    name: 'LeetCode',
    handle: 'hritikkumar_12',
    href: 'https://leetcode.com/u/hritikkumar_12/',
    icon: <LeetCodeIcon />,
    accent: '#f59e0b',
    accentBg: '#f59e0b15',
    note: 'DSA practice and problem solving',
  },
  {
    name: 'Codeforces',
    handle: 'Hritik_Kumar_',
    href: 'https://codeforces.com/profile/Hritik_Kumar_',
    icon: <CodeforcesIcon />,
    accent: '#2563eb',
    accentBg: '#2563eb15',
    note: 'Contests and competitive programming',
  },
  {
    name: 'CodeChef',
    handle: 'Hritik Kumar',
    href: 'https://www.codechef.com/users/hritik_723',
    icon: <CodeChefIcon />,
    accent: '#7c4a22',
    accentBg: '#7c4a2215',
    note: 'Practice track and rated challenges',
  },
];

const CodingProfiles: React.FC = () => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section className="py-54 relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[11px] font-semibold tracking-widest uppercase text-[#4F8CFF]">Profiles</span>
            <div className="h-px w-12 bg-[#4F8CFF]/30" />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2
                className={`text-3xl sm:text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}
                style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em' }}
              >
                Coding profiles
              </h2>
              <p className={`mt-2 text-[15px] max-w-lg ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                A quick way to see how I code, practice, and stay consistent outside project work.
              </p>
            </div>
          </div>
        </motion.div>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {profiles.map((profile, index) => (
            <motion.a
              key={profile.name}
              href={profile.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.08, duration: 0.5, ease: 'easeOut' }}
              className={`group p-5 rounded-2xl border block transition-all duration-300 ${
                isDark
                  ? 'bg-[#111827] border-white/8 hover:border-white/18 hover:shadow-lg hover:shadow-black/30'
                  : 'bg-white border-gray-100 hover:border-gray-200 hover:shadow-md shadow-sm'
              }`}
            >
              <div className="flex items-start justify-between gap-3 mb-4">
                <div
                  className="w-11 h-11 rounded-2xl flex items-center justify-center"
                  style={{ background: profile.accentBg, color: profile.accent }}
                >
                  {profile.icon}
                </div>
                <ArrowUpRight
                  size={15}
                  className={`mt-1 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                    isDark ? 'text-gray-600' : 'text-gray-300'
                  }`}
                />
              </div>

              <h3
                className={`text-[16px] font-bold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                {profile.name}
              </h3>
              <p className={`text-[13px] font-medium mb-2`} style={{ color: profile.accent }}>
                {profile.handle}
              </p>
              <p className={`text-[12px] leading-relaxed ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                {profile.note}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;
