import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Footer: React.FC = () => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  return (
    <footer className={`py-10 border-t ${isDark ? 'border-white/6' : 'border-gray-100'}`}>
      <div className="container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span
              className={`font-semibold text-sm ${isDark ? 'text-white' : 'text-gray-900'}`}
              style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em' }}
            >
              hritik.
            </span>
            <span className={`text-[13px] ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
              — Built with React & Tailwind
            </span>
          </div>

          <p className={`text-[12px] ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
            © 2025 Hritik Kumar. All rights reserved.
          </p>

          <div className="flex items-center gap-1.5">
            <span className={`text-[12px] ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
              Made with
            </span>
            <span className="text-red-400 text-sm animate-pulse">♥</span>
            <span className={`text-[12px] ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
              in India
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
