import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Monitor, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Journey', href: '#journey' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [visible, setVisible] = useState(true);
  const [activeSection, setActiveSection] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [themeMenuOpen, setThemeMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(() => {
          const currentY = window.scrollY;
          if (currentY < 80) {
            setVisible(true);
          } else if (currentY > lastScrollY.current + 5) {
            setVisible(false);
            setMobileOpen(false);
          } else if (currentY < lastScrollY.current - 5) {
            setVisible(true);
          }
          lastScrollY.current = currentY;
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.map((l) => l.href.slice(1));
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: '-30% 0px -60% 0px' }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const isDark = resolvedTheme === 'dark';

  const themeIcon =
    theme === 'dark' ? (
      <Moon size={15} />
    ) : theme === 'light' ? (
      <Sun size={15} />
    ) : (
      <Monitor size={15} />
    );

  return (
    <>
      <AnimatePresence>
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
          className="fixed top-4 left-0 right-0 z-50 flex justify-center px-3 sm:px-6 md:px-8"
        >
          {/* ===== MAIN NAV CONTAINER ===== */}
          <div
            className={`w-full max-w-[720px] flex items-center gap-1 px-2 sm:px-3 py-1.5 sm:py-2 rounded-full border transition-colors duration-200 ${
              isDark
                ? 'bg-[#111827]/80 border-white/10'
                : 'bg-white/80 border-black/8 shadow-lg shadow-black/5'
            }`}
          >
            {/* Logo */}
            <span
              className={`font-semibold text-sm mr-1 sm:mr-3 pl-1.5 sm:pl-2 cursor-pointer shrink-0 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                letterSpacing: '-0.02em',
              }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              hritik.
            </span>

            {/* Desktop nav links — hidden on mobile, visible md+ */}
            <div className="hidden md:flex items-center gap-0.5 flex-1 justify-center">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={`relative px-3.5 py-1.5 rounded-full text-[13px] font-medium transition-all duration-200 whitespace-nowrap ${
                      isActive
                        ? isDark
                          ? 'text-white bg-white/10'
                          : 'text-gray-900 bg-black/8'
                        : isDark
                        ? 'text-gray-400 hover:text-white hover:bg-white/8'
                        : 'text-gray-500 hover:text-gray-900 hover:bg-black/5'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#4F8CFF]"
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Right actions: theme + hamburger */}
            <div className="flex items-center gap-1 sm:gap-1.5 ml-auto shrink-0">
              {/* Theme toggle */}
              <div className="relative">
                <button
                  onClick={() => setThemeMenuOpen(!themeMenuOpen)}
                  className={`flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1.5 rounded-full text-[13px] font-medium transition-all duration-200 ${
                    isDark
                      ? 'text-gray-400 hover:text-white hover:bg-white/8'
                      : 'text-gray-500 hover:text-gray-900 hover:bg-black/5'
                  }`}
                >
                  {themeIcon}
                  {/* Hide label on very small screens */}
                  <span className="hidden lg:inline">
                    {theme === 'system'
                      ? 'System'
                      : theme === 'dark'
                      ? 'Dark'
                      : 'Light'}
                  </span>
                </button>

                <AnimatePresence>
                  {themeMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95, y: -8 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: -8 }}
                      transition={{ duration: 0.15 }}
                      className={`absolute right-0 top-full mt-2 rounded-2xl border overflow-hidden shadow-xl z-50 ${
                        isDark
                          ? 'bg-[#1a2234] border-white/10'
                          : 'bg-white border-black/8'
                      }`}
                      style={{ minWidth: '140px' }}
                      onMouseLeave={() => setThemeMenuOpen(false)}
                    >
                      {[
                        {
                          value: 'light' as const,
                          icon: <Sun size={13} />,
                          label: 'Light',
                        },
                        {
                          value: 'dark' as const,
                          icon: <Moon size={13} />,
                          label: 'Dark',
                        },
                        {
                          value: 'system' as const,
                          icon: <Monitor size={13} />,
                          label: 'System',
                        },
                      ].map((opt) => (
                        <button
                          key={opt.value}
                          onClick={() => {
                            setTheme(opt.value);
                            setThemeMenuOpen(false);
                          }}
                          className={`w-full flex items-center gap-2.5 px-4 py-2.5 text-[13px] font-medium transition-colors duration-150 ${
                            theme === opt.value
                              ? isDark
                                ? 'text-white bg-white/10'
                                : 'text-gray-900 bg-black/5'
                              : isDark
                              ? 'text-gray-400 hover:text-white hover:bg-white/5'
                              : 'text-gray-500 hover:text-gray-900 hover:bg-black/3'
                          }`}
                        >
                          {opt.icon}
                          {opt.label}
                          {theme === opt.value && (
                            <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#4F8CFF]" />
                          )}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile hamburger — visible below md */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`md:hidden p-1.5 rounded-full transition-colors duration-150 ${
                  isDark
                    ? 'text-gray-400 hover:text-white hover:bg-white/8'
                    : 'text-gray-500 hover:text-gray-900 hover:bg-black/5'
                }`}
              >
                {mobileOpen ? <X size={16} /> : <Menu size={16} />}
              </button>
            </div>
          </div>

          {/* ===== MOBILE DROPDOWN MENU ===== */}
          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.97 }}
                transition={{ duration: 0.2 }}
                className={`absolute top-full left-3 right-3 sm:left-6 sm:right-6 md:hidden rounded-2xl border p-3 z-50 ${
                  isDark
                    ? 'bg-[#111827]/95 border-white/10 backdrop-blur-xl'
                    : 'bg-white/95 border-black/8 shadow-xl backdrop-blur-xl'
                }`}
              >
                <div className="flex flex-col gap-0.5">
                  {navLinks.map((link) => (
                    <button
                      key={link.href}
                      onClick={() => handleNavClick(link.href)}
                      className={`w-full text-left px-4 py-3 rounded-xl text-[14px] font-medium transition-colors duration-150 ${
                        activeSection === link.href.slice(1)
                          ? isDark
                            ? 'text-white bg-white/10'
                            : 'text-gray-900 bg-black/5'
                          : isDark
                          ? 'text-gray-400 hover:text-white hover:bg-white/5'
                          : 'text-gray-500 hover:text-gray-900 hover:bg-black/3'
                      }`}
                    >
                      {link.label}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      </AnimatePresence>
    </>
  );
};

export default Navbar;