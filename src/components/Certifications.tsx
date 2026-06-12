import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { X, Award, ExternalLink } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const certs = [
  // {
  //   title: "REST API",
  //   issuer: "HackerRank",
  //   year: "2025",
  //   emoji: "🔗",
  //   color: "#00B98E",
  //   colorBg: "#00B98E15",
  //   badge: "⭐ Verified",
  //   url: "https://www.hackerrank.com/certificates/992656be24de",
  //   preview: "https://www.hackerrank.com/certificates/iframe/992656be24de",
  //   description:
  //     "Demonstrates proficiency in REST API design principles, HTTP methods, status codes, and integration patterns.",
  // },
  {
    title: "Python Basics",
    issuer: "HackerRank",
    year: "2025",
    emoji: "🐍",
    color: "#3776AB",
    colorBg: "#3776AB15",
    badge: "⭐ Verified",
    url: "https://www.hackerrank.com/certificates/4609ddaf7c3e",
    preview: "https://www.hackerrank.com/certificates/iframe/4609ddaf7c3e",
    description:
      "Covers Python fundamentals including data types, functions, control flow, and basic OOP concepts.",
  },
   {
    title: "CSS, Bootstrap, JavaScript, Web Development Course",
    issuer: "Udemy",
    year: "2025",
    emoji: "🌐",
    color: "#61DAFB",
    colorBg: "#61DAFB15",
    badge: "📜 Certified",
    url: "https://www.udemy.com/certificate/UC-cd4d3975-8570-49c5-85e4-6cce3c97d7a7/",
    preview: "",
    description:
      "Learned core web development concepts including CSS, Bootstrap, and JavaScript, and built responsive, user-friendly websites.",
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    year: "2025",
    emoji: "📱",
    color: "#3d3db3",
    colorBg: "#12337015",
    badge: "🏆 300hrs",
    url: "",
    preview: "",
    description:
      "Completed 300 hours of coursework covering HTML, CSS, Flexbox, Grid, and responsive design principles.",
  },

  {
    title: "React: All You Need to Know with Practical Project",
    issuer: "Udemy",
    year: "2025",
    emoji: "⚛️",
    color: "#61DAFB",
    colorBg: "#61DAFB15",
    badge: "📜 Certified",
    url: "https://udemy-certificate.s3.amazonaws.com/image/UC-f4d0c38e-6bdd-48b1-8107-0e5927ee04ba.jpg",
    preview: "",
    description:
      "Mastered modern React.js development including reusable components, Hooks, Context API, React Router, API integration, state management, and building production-ready frontend applications through practical projects.",
  },
 
];

const Certifications: React.FC = () => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const [selected, setSelected] = useState<(typeof certs)[0] | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

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
            <span className="text-[11px] font-semibold tracking-widest uppercase text-[#4F8CFF]">
              Credentials
            </span>
            <div className="h-px w-12 bg-[#4F8CFF]/30" />
          </div>
          <h2
            className={`text-3xl sm:text-4xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              letterSpacing: "-0.02em",
            }}
          >
            Certifications
          </h2>
          <p
            className={`mt-2 text-[15px] ${isDark ? "text-gray-500" : "text-gray-400"}`}
          >
            Formal verification of skills learned by doing.
          </p>
        </motion.div>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certs.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              onClick={() => setSelected(cert)}
              className={`cert-card cursor-pointer p-5 rounded-2xl border group ${
                isDark
                  ? "bg-[#111827] border-white/8 hover:border-white/20 hover:shadow-xl hover:shadow-black/30"
                  : "bg-white border-gray-100 hover:border-gray-200 hover:shadow-lg shadow-sm"
              }`}
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{ background: cert.colorBg }}
              >
                {cert.emoji}
              </div>

              {/* Badge */}
              <span
                className={`text-[10px] font-semibold uppercase tracking-wider ${isDark ? "text-gray-600" : "text-gray-400"}`}
              >
                {cert.badge}
              </span>

              <h3
                className={`text-[16px] font-bold mt-1 mb-0.5 ${isDark ? "text-white" : "text-gray-900"}`}
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                {cert.title}
              </h3>
              <p
                className={`text-[13px] mb-1 font-medium`}
                style={{ color: cert.color }}
              >
                {cert.issuer}
              </p>
              <p
                className={`text-[12px] ${isDark ? "text-gray-600" : "text-gray-400"}`}
              >
                {cert.year}
              </p>

              {/* Hover hint */}
              <div
                className={`mt-3 flex items-center gap-1.5 text-[12px] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200`}
                style={{ color: "#4F8CFF" }}
              >
                <Award size={12} /> View Certificate
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.25 }}
              className={`relative w-full max-w-md rounded-3xl border p-6 shadow-2xl ${
                isDark
                  ? "bg-[#111827] border-white/10"
                  : "bg-white border-gray-200"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className={`absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                  isDark
                    ? "text-gray-400 hover:text-white hover:bg-white/8"
                    : "text-gray-400 hover:text-gray-700 hover:bg-gray-100"
                }`}
              >
                <X size={16} />
              </button>

              <div
                className="w-16 h-16 rounded-3xl flex items-center justify-center text-3xl mb-5"
                style={{ background: selected.colorBg }}
              >
                {selected.emoji}
              </div>

              <span
                className={`text-[11px] font-bold uppercase tracking-wider`}
                style={{ color: selected.color }}
              >
                {selected.issuer}
              </span>
              <h3
                className={`text-2xl font-bold mt-1 mb-3 ${isDark ? "text-white" : "text-gray-900"}`}
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                {selected.title}
              </h3>
              <p
                className={`text-[14px] leading-relaxed mb-4 ${isDark ? "text-gray-400" : "text-gray-600"}`}
              >
                {selected.description}
              </p>

              <div
                className={`flex items-center justify-between text-[13px] pt-4 border-t ${isDark ? "border-white/8" : "border-gray-100"}`}
              >
                <span className={isDark ? "text-gray-500" : "text-gray-400"}>
                  Earned {selected.year}
                </span>
                <a href={selected.url}>
                  <span className="font-medium text-[#4F8CFF] flex items-center gap-1.5 cursor-pointer hover:underline">
                    <ExternalLink size={13} /> View on {selected.issuer}
                  </span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;
