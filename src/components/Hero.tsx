import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { useTypewriter } from "@/hooks/useTypewriter";

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const techIcons = [
  {
    label: "React",
    emoji: "⚛️",
    delay: 0,
    pos: "top-[12%] right-[8%]",
    floatClass: "float-1",
  },
  {
    label: "Node.js",
    emoji: "🟢",
    delay: 0.3,
    pos: "top-[42%] right-[3%]",
    floatClass: "float-2",
  },
  {
    label: "MongoDB",
    emoji: "🍃",
    delay: 0.6,
    pos: "bottom-[25%] right-[8%]",
    floatClass: "float-3",
  },
  {
    label: "Next.js",
    emoji: "▲",
    delay: 0.2,
    pos: "top-[15%] left-[4%]",
    floatClass: "float-2",
  },
  {
    label: "TypeScript",
    emoji: "🔷",
    delay: 0.5,
    pos: "bottom-[32%] left-[3%]",
    floatClass: "float-1",
  },
];

const Hero: React.FC = () => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex pt-5 items-center overflow-hidden"
    >
      {/* Cursor glow */}
      <div ref={cursorRef} className="cursor-glow hidden lg:block" />

      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(${isDark ? "#fff" : "#000"} 1px, transparent 1px), linear-gradient(90deg, ${isDark ? "#fff" : "#000"} 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-[0.06]"
          style={{
            background: "radial-gradient(circle, #4F8CFF, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full opacity-[0.04]"
          style={{
            background: "radial-gradient(circle, #a78bfa, transparent 70%)",
          }}
        />
      </div>

      {/* Floating tech icons - desktop only */}
      {techIcons.map((icon) => (
        <motion.div
          key={icon.label}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: icon.delay + 0.8,
            duration: 0.5,
            ease: "backOut",
          }}
          className={`absolute hidden xl:flex ${icon.pos} ${icon.floatClass} flex-col items-center gap-1.5`}
        >
          <div
            className={`w-11 h-11 rounded-2xl flex items-center justify-center text-lg border shadow-sm ${
              isDark
                ? "bg-[#1a2234]/90 border-white/10"
                : "bg-white border-gray-200/80 shadow-black/5"
            }`}
          >
            {icon.emoji}
          </div>
          <span
            className={`text-[10px] font-medium ${isDark ? "text-gray-500" : "text-gray-400"}`}
          >
            {icon.label}
          </span>
        </motion.div>
      ))}

      <div className="container relative z-10 pt-24 pb-16">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-20">
          {/* Left - Text content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1, delayChildren: 0.2 },
              },
            }}
            className="flex-1 text-center lg:text-left"
          >
            {/* Status badge */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <div
                className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[12px] font-medium border ${
                  isDark
                    ? "bg-green-500/10 border-green-500/20 text-green-400"
                    : "bg-green-50 border-green-200 text-green-600"
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Open to opportunities
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className={`text-4xl sm:text-4xl lg:text-6xl font-bold leading-[1.1] mb-4 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                letterSpacing: "-0.03em",
              }}
            >
              Hi, I'm <span className="gradient-text">Hritik.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className={`text-lg sm:text-xl font-medium mb-5 ${
                isDark ? "text-gray-300" : "text-gray-700"
              }`}
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                letterSpacing: "-0.01em",
              }}
            >
              A BCA student who enjoys turning ideas into real software
              products.
            </motion.p>

            {/* Description */}
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className={`text-base sm:text-[15px] leading-relaxed max-w-xl ${
                isDark ? "text-gray-400" : "text-gray-500"
              }`}
            >
              I build full stack web applications using React, Next.js, and
              Node.js. Not looking to check boxes — I'm genuinely interested in
              how software gets made and what makes products actually work for
              people.
            </motion.p>

            {/* CTA Buttons */}
            {/* <div className="sm:flex bg-red-900 item-center"> */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="flex flex-col sm:flex-row items-center lg:items-start gap-3 mt-8"
            >
              <motion.a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`btn-primary ripple w-full sm:w-auto justify-center font-semibold ${
                  isDark
                    ? "bg-[#4F8CFF] hover:bg-[#3a75e8] text-white shadow-lg shadow-blue-500/20"
                    : "bg-[#4F8CFF] hover:bg-[#3a75e8] text-white shadow-lg shadow-blue-500/25"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                View My Work <ArrowRight size={15} />
              </motion.a>
              <motion.a
                href="/Hritik_Kumar_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={`btn-primary w-full sm:w-auto justify-center font-medium border ${
                  isDark
                    ? "border-white/10 text-gray-300 hover:border-white/20 hover:bg-white/5"
                    : "border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                <Download size={15} /> Download Resume
              </motion.a>
            </motion.div>
            {/* </div> */}

            {/* Social links */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="flex items-center justify-center lg:justify-start gap-3 mt-6"
            >
              {[
                {
                  icon: <GithubIcon />,
                  href: "https://github.com/hritikhri",
                  label: "GitHub",
                },
                {
                  icon: <LinkedinIcon />,
                  href: "http://www.linkedin.com/in/hritik-kumar-2b6b9724a",
                  label: "LinkedIn",
                },
                {
                  icon: <Mail size={17} />,
                  href: "mailto:hritik.dev.04@gmail.com",
                  label: "Email",
                },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-200 ${
                    isDark
                      ? "border-white/10 text-gray-400 hover:border-white/20 hover:text-white hover:bg-white/5"
                      : "border-gray-200 text-gray-500 hover:border-gray-300 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
              <span
                className={`text-sm ml-1 ${isDark ? "text-gray-500" : "text-gray-400"}`}
              >
                Let's connect
              </span>
            </motion.div>
          </motion.div>

          {/* Right - Profile photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
            className="relative flex-shrink-0"
          >
            <div className="relative">
              {/* Glow behind photo */}
              <div
                className="absolute inset-0 rounded-3xl opacity-30 blur-3xl"
                style={{
                  background: "linear-gradient(135deg, #4F8CFF, #a78bfa)",
                  transform: "scale(0.95)",
                }}
              />

              {/* Photo frame */}
              <div
                className={`relative w-56 h-56 sm:w-72 sm:h-72 rounded-3xl overflow-hidden border-2 ${
                  isDark
                    ? "border-white/10"
                    : "border-white shadow-2xl shadow-black/10"
                }`}
              >
                <img
                  src="/profile.jpg"
                  alt="Hritik Kumar"
                  className="w-full h-full object-cover"
                  // loading="eager"
                />
              </div>

              {/* Floating info card */}
              {/* <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className={`absolute -bottom-4 -left-4 sm:-left-8 px-4 py-3 rounded-2xl border shadow-xl ${
                  isDark ? 'bg-[#111827] border-white/10' : 'bg-white border-gray-200/80'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center text-white text-sm font-bold">
                    HK
                  </div>
                  <div>
                    <p
                      className={`text-[12px] font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}
                      style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                    >
                      Hritik Kumar
                    </p>
                    <p className={`text-[10px] ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                      Full Stack Developer
                    </p>
                  </div>
                </div>
              </motion.div> */}

              {/* Stack badge */}
              {/* <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.5 }}
                className={`absolute -top-3 -right-3 sm:-right-6 px-3 py-1.5 rounded-xl border text-[11px] font-medium ${
                  isDark
                    ? 'bg-[#111827] border-white/10 text-gray-300'
                    : 'bg-white border-gray-200/80 text-gray-600 shadow-sm'
                }`}
              >
                React · Node · Mongo
              </motion.div> */}
            </div>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span
            className={`text-[11px] font-medium tracking-widest uppercase ${
              isDark ? "text-gray-600" : "text-gray-400"
            }`}
          >
            scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className={`w-px h-8 ${
              isDark
                ? "bg-gradient-to-b from-gray-600 to-transparent"
                : "bg-gradient-to-b from-gray-400 to-transparent"
            }`}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
