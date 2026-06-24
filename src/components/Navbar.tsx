import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Monitor, Menu, X } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Journey", href: "#journey" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar: React.FC = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hritik");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [themeMenuOpen, setThemeMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const themeMenuRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const navContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check(); // run on mount
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Scroll: detect scrolled state for shrink/grow
// Scroll: detect scrolled state for shrink/grow
useEffect(() => {
  let lastScrollY = window.scrollY;

  const handleScroll = () => {
    const currentY = window.scrollY;

    // Scroll DOWN → shrink
    if (currentY > lastScrollY && currentY > 50) {
      setScrolled(true);
      setMobileOpen(false);
      setThemeMenuOpen(false);
    }
    // Scroll UP → grow back
    else if (currentY < lastScrollY) {
      setScrolled(false);
    }

    lastScrollY = currentY;
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      const target = e.target as Node;

      if (
        themeMenuOpen &&
        themeMenuRef.current &&
        !themeMenuRef.current.contains(target)
      ) {
        setThemeMenuOpen(false);
      }

      if (
        mobileOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(target) &&
        navContainerRef.current &&
        !navContainerRef.current.contains(target)
      ) {
        setMobileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [themeMenuOpen, mobileOpen]);

  // Section observer
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
        { rootMargin: "-30% 0px -60% 0px" },
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
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const isDark = resolvedTheme === "dark";

  const themeIcon =
    theme === "dark" ? (
      <Moon size={15} />
    ) : theme === "light" ? (
      <Sun size={15} />
    ) : (
      <Monitor size={15} />
    );

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-3 sm:px-6 md:px-8"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        pointerEvents: "none",
      }}
    >
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        className="w-full flex flex-col items-center"
        style={{ pointerEvents: "auto" }}
      >
        {/* ===== MAIN NAV CONTAINER ===== */}
        <motion.div
          ref={navContainerRef}
          animate={{
            // mobile: 320 → 240   |   desktop: 720 → 420
            maxWidth: scrolled
              ? isMobile ? 280 : 520 // ← AFTER scroll
              : isMobile ? 320 : 720, // ← BEFORE scroll
            marginTop: scrolled ? 10 : 16,
          }}
          transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
          className={`w-full flex items-center gap-1 rounded-full border transition-colors duration-300 ${
            isDark
              ? "bg-[#111827]/80 border-white/10 backdrop-blur-xl"
              : "bg-white/80 border-black/8 shadow-lg shadow-black/5 backdrop-blur-xl"
          }`}
          style={{
            padding: scrolled ? "4px 10px" : "6px 12px",
            transition: "padding 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          {/* Logo */}
          <span
            className={`font-semibold mr-1 sm:mr-3 pl-1.5 sm:pl-2 cursor-pointer shrink-0 transition-all duration-300 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              letterSpacing: "-0.02em",
              fontSize: scrolled ? "12px" : "14px",
            }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            {/* hritik. */}
            <img src="Linkedin_profile_pic.png" alt="profile picture" className="object-cover h-8 rounded-3xl" />
          </span>

          {/* Desktop nav links — hidden on mobile, visible md+ */}
          <div className="hidden md:flex items-center gap-0.5 flex-1 justify-center">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`relative py-1.5 rounded-full font-medium whitespace-nowrap transition-all duration-300 ${
                    isActive
                      ? isDark
                        ? "text-white bg-white/10"
                        : "text-gray-900 bg-black/8"
                      : isDark
                        ? "text-gray-400 hover:text-white hover:bg-white/8"
                        : "text-gray-500 hover:text-gray-900 hover:bg-black/5"
                  }`}
                  style={{
                    paddingLeft: scrolled ? 8 : 14,
                    paddingRight: scrolled ? 8 : 14,
                    fontSize: scrolled ? "13px" : "13px",
                    transition:
                      "padding 0.35s cubic-bezier(0.4,0,0.2,1), font-size 0.35s cubic-bezier(0.4,0,0.2,1)",
                  }}
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
            <div className="relative" ref={themeMenuRef}>
           <button
  onClick={() => setThemeMenuOpen(!themeMenuOpen)}
  className={`flex items-center justify-center p-2 rounded-full transition-all duration-200 ${
    isDark
      ? "text-gray-400 hover:text-white hover:bg-white/8"
      : "text-gray-500 hover:text-gray-900 hover:bg-black/5"
  }`}
>
  {themeIcon}
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
                        ? "bg-[#1a2234] border-white/10"
                        : "bg-white border-black/8"
                    }`}
                    style={{ minWidth: "140px" }}
                  >
                    {[
                      {
                        value: "light" as const,
                        icon: <Sun size={13} />,
                        label: "Light",
                      },
                      {
                        value: "dark" as const,
                        icon: <Moon size={13} />,
                        label: "Dark",
                      },
                      {
                        value: "system" as const,
                        icon: <Monitor size={13} />,
                        label: "System",
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
                              ? "text-white bg-white/10"
                              : "text-gray-900 bg-black/5"
                            : isDark
                              ? "text-gray-400 hover:text-white hover:bg-white/5"
                              : "text-gray-500 hover:text-gray-900 hover:bg-black/3"
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
                  ? "text-gray-400 hover:text-white hover:bg-white/8"
                  : "text-gray-500 hover:text-gray-900 hover:bg-black/5"
              }`}
            >
              {mobileOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </motion.div>

        {/* ===== MOBILE DROPDOWN MENU ===== */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              ref={mobileMenuRef}
              initial={{ opacity: 0, y: -10, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className={`w-[calc(100%-24px)] sm:w-[calc(100%-48px)] md:hidden rounded-2xl border p-2 mt-0 z-50 ${
                isDark
                  ? "bg-[#111827]/95 border-white/10 backdrop-blur-xl"
                  : "bg-white/95 border-black/8 shadow-xl backdrop-blur-xl"
              }`}
              style={{ maxWidth: 190 }}
            >
              <div className="flex flex-col gap-0.5">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={`w-full text-left px-4 py-2 flex items-center justify-center rounded-xl text-[14px] font-medium transition-colors duration-150 ${
                      activeSection === link.href.slice(1)
                        ? isDark
                          ? "text-white bg-white/10"
                          : "text-gray-900 bg-black/5"
                        : isDark
                          ? "text-gray-400 hover:text-white hover:bg-white/5"
                          : "text-gray-500 hover:text-gray-900 hover:bg-black/3"
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </nav>
  );
};

export default Navbar;
