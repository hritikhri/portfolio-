import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ExternalLink, ArrowUpRight, X, Sparkles } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { aiProjects } from "@/utils/stats";

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

interface AICaseStudyModalProps {
  project: (typeof aiProjects)[0];
  onClose: () => void;
  isDark: boolean;
}

const AICaseStudyModal: React.FC<AICaseStudyModalProps> = ({
  project,
  onClose,
  isDark,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={`relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-3xl border shadow-2xl ${
          isDark ? "bg-[#0B0F19] border-white/10" : "bg-white border-gray-200"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className="sticky top-0 z-10 flex items-center justify-between p-6 pb-4 border-b backdrop-blur-sm"
          style={{
            borderColor: isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)",
            background: isDark
              ? "rgba(11,15,25,0.95)"
              : "rgba(255,255,255,0.95)",
          }}
        >
          <div>
            <h3
              className={`text-xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              {project.name}
            </h3>
            <p
              className={`text-[13px] ${isDark ? "text-gray-500" : "text-gray-400"}`}
            >
              {project.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
              isDark
                ? "text-gray-400 hover:text-white hover:bg-white/8"
                : "text-gray-400 hover:text-gray-700 hover:bg-gray-100"
            }`}
          >
            <X size={18} />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Image */}
          <div className="img-zoom rounded-2xl overflow-hidden aspect-video">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Story */}
          <div>
            <h4
              className={`text-[13px] font-semibold uppercase tracking-wider mb-2 ${
                isDark ? "text-gray-500" : "text-gray-400"
              }`}
            >
              The Story
            </h4>
            <p
              className={`text-[14px] leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}
            >
              {project.story}
            </p>
          </div>

          {/* Why */}
          <div>
            <h4
              className={`text-[13px] font-semibold uppercase tracking-wider mb-2 ${
                isDark ? "text-gray-500" : "text-gray-400"
              }`}
            >
              Why I Built It
            </h4>
            <p
              className={`text-[14px] leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}
            >
              {project.why}
            </p>
          </div>

          {/* Features */}
          <div>
            <h4
              className={`text-[13px] font-semibold uppercase tracking-wider mb-3 ${
                isDark ? "text-gray-500" : "text-gray-400"
              }`}
            >
              Key Features
            </h4>
            <ul className="space-y-2">
              {project.features.map((feature) => (
                <li
                  key={feature}
                  className={`flex items-center gap-2.5 text-[14px] ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4F8CFF] flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Challenges & Learnings */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div
              className={`p-4 rounded-2xl ${isDark ? "bg-[#111827]" : "bg-gray-50"}`}
            >
              <h4
                className={`text-[12px] font-semibold uppercase tracking-wider mb-2 ${
                  isDark ? "text-gray-500" : "text-gray-400"
                }`}
              >
                Challenges
              </h4>
              <p
                className={`text-[13px] leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}
              >
                {project.challenges}
              </p>
            </div>

            <div
              className={`p-4 rounded-2xl ${isDark ? "bg-[#111827]" : "bg-gray-50"}`}
            >
              <h4
                className={`text-[12px] font-semibold uppercase tracking-wider mb-2 ${
                  isDark ? "text-gray-500" : "text-gray-400"
                }`}
              >
                Learnings
              </h4>
              <p
                className={`text-[13px] leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}
              >
                {project.learnings}
              </p>
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h4
              className={`text-[13px] font-semibold uppercase tracking-wider mb-3 ${
                isDark ? "text-gray-500" : "text-gray-400"
              }`}
            >
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className={`text-[12px] px-3 py-1.5 rounded-full font-medium border ${
                    isDark
                      ? "border-white/10 text-gray-300 bg-white/5"
                      : "border-gray-200 text-gray-600 bg-gray-50"
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* AI Tools */}
          <div>
            <h4
              className={`text-[13px] font-semibold uppercase tracking-wider mb-3 ${
                isDark ? "text-gray-500" : "text-gray-400"
              }`}
            >
              AI Tools Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.aiTools.map((tool) => (
                <span
                  key={tool}
                  className="text-[12px] px-3 py-1.5 rounded-full font-medium border"
                  style={{
                    color: project.color,
                    borderColor: `${project.color}30`,
                    background: `${project.color}10`,
                  }}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-3 pt-2">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn-primary border flex-1 justify-center text-[13px] ${
                isDark
                  ? "border-white/10 text-gray-300 hover:bg-white/5"
                  : "border-gray-200 text-gray-700 hover:bg-gray-50"
              }`}
            >
              <GithubIcon /> GitHub
            </a>

            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary bg-[#4F8CFF] hover:bg-[#3a75e8] text-white flex-1 justify-center text-[13px]"
            >
              <ExternalLink size={14} /> Live Demo
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const BuiltWithAI: React.FC = () => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const [selectedProject, setSelectedProject] = useState<
    (typeof aiProjects)[0] | null
  >(null);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="built-with-ai" className="py-24 relative">
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
            <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-widest uppercase text-[#4F8CFF]">
              <Sparkles size={12} />
              Built using AI
            </span>
            <div className="h-px w-12 bg-[#4F8CFF]/30" />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2
              className={`text-3xl sm:text-4xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                letterSpacing: "-0.02em",
              }}
            >
              Things I’ve built with AI
            </h2>

            <p
              className={`text-[15px] max-w-xs ${isDark ? "text-gray-500" : "text-gray-400"}`}
            >
              Practical AI apps, workflows, and experiments built to solve real
              problems.
            </p>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div ref={ref} className="grid grid-cols-1 gap-6">
          {aiProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 18 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: index * 0.08,
                duration: 0.5,
                ease: "easeOut",
              }}
              className={`project-card group rounded-3xl border overflow-hidden flex flex-col lg:flex-row ${
                isDark
                  ? "bg-[#111827] border-white/8 hover:border-white/15 hover:shadow-2xl hover:shadow-black/30"
                  : "bg-white border-gray-100 hover:border-gray-200 hover:shadow-xl hover:shadow-black/5"
              }`}
            >
              {/* Image */}
              <div className="relative lg:w-120 flex items-center justify-center lg:flex-shrink-0">
                <div className="img-zoom h-48 sm:h-56 lg:h-60 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="object-cover w-full h-full"
                  />
                </div>

                <div
                  className="absolute inset-0 lg:hidden"
                  style={{
                    background: isDark
                      ? "linear-gradient(to bottom, rgba(17,24,39,0.55), transparent 55%)"
                      : "linear-gradient(to bottom, rgba(255,255,255,0.7), transparent 55%)",
                  }}
                />
              </div>

              {/* Content */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  {/* Status + Year */}
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border"
                      style={{
                        color: project.color,
                        borderColor: `${project.color}30`,
                        background: `${project.color}10`,
                      }}
                    >
                      {project.status}
                    </span>

                    <span
                      className={`text-[11px] ${isDark ? "text-gray-600" : "text-gray-400"}`}
                    >
                      {project.year}
                    </span>
                  </div>

                  <h3
                    className={`text-xl sm:text-2xl font-bold ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                    style={{
                      fontFamily: "Space Grotesk, sans-serif",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {project.name}
                  </h3>

                  <p
                    className={`text-[13px] font-medium mt-1 ${
                      isDark ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    {project.tagline}
                  </p>

                  <p
                    className={`text-[14px] leading-relaxed mt-4 mb-5 ${
                      isDark ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {project.shortDesc}
                  </p>
                </div>
                {/* Tech Stack */}
                <div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className={`text-[12px] px-3 py-1.5 rounded-full font-medium border ${
                          isDark
                            ? "border-white/10 text-gray-300 bg-white/5"
                            : "border-gray-200 text-gray-600 bg-gray-50"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Actions */}
                <div className="flex items-center gap-2.5 flex-wrap pt-2">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className={`btn-primary text-[13px] border font-medium ${
                      isDark
                        ? "border-white/10 text-gray-300 hover:border-white/20 hover:bg-white/5"
                        : "border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    Case Study <ArrowUpRight size={13} />
                  </button>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn-primary text-[13px] border font-medium ${
                      isDark
                        ? "border-white/10 text-gray-300 hover:border-white/20 hover:bg-white/5"
                        : "border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    <GithubIcon /> GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <AICaseStudyModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
            isDark={isDark}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default BuiltWithAI;
