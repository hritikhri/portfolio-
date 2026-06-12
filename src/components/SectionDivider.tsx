import React from 'react';
import { useTheme } from '../context/ThemeContext';

const SectionDivider: React.FC = () => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  return (
    <div className="container">
      <div className={`h-px w-full ${isDark ? 'bg-white/5' : 'bg-gray-100'}`} />
    </div>
  );
};

export default SectionDivider;
