import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ExternalLink, ArrowUpRight, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const projects = [
  // {
  //   id: 'vibemeet',
  //   name: 'VibeMeet',
  //   tagline: 'Community Networking Platform',
  //   shortDesc: 'A platform for communities to connect, share events, and build genuine relationships online.',
  //   image: '/projects/vibemeet.jpg',
  //   color: '#7C3AED',
  //   colorLight: '#EDE9FE',
  //   status: 'Built',
  //   year: '2025',
  //   story: 'I noticed how scattered online communities were — Discord, Reddit, Facebook groups, all fragmented. VibeMeet started as an idea to consolidate community discovery and event-based networking into one clean interface.',
  //   why: 'Wanted to build something with real authentication flows, social features, and a proper backend — not just a CRUD app.',
  //   features: [
  //     'Community creation and discovery',
  //     'Event scheduling and RSVPs',
  //     'Real-time activity feeds',
  //     'User profiles and connections',
  //     'JWT authentication system',
  //   ],
  //   tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Tailwind CSS'],
  //   challenges: 'Managing complex relational data in MongoDB without SQL was a mental shift. Also had to architect the authentication middleware carefully to handle different permission levels.',
  //   learnings: 'Understood how to design schemas for social graph data, and how to build scalable REST APIs with proper error handling.',
  //   github: 'https://github.com/hritikhri/Vibemeet',
  //   url:"",
  //   demo: '#',
  // },
  {
  id: 'inventory',
  name: 'Inventory Management System',
  tagline: 'Smart Stock & Product Management',
  shortDesc: 'A complete inventory management solution for tracking products, stock levels, sales, and inventory operations efficiently.',
  image: '/projects/inventory-management.png',
  color: '#10B981',
  colorLight: '#D1FAE5',
  status: 'Built',
  year: '2025',
  story: 'I built this project to understand how real-world businesses manage inventory and product data. The goal was to create a practical system that could track stock movements, product details, and inventory updates in a structured way.',
  why: 'Inventory management is a core requirement for many businesses. Building this project helped me learn CRUD operations, database management, and backend architecture while solving a real business problem.',
  features: [
    'Product inventory management',
    'Add, update, and delete products',
    'Stock quantity tracking',
    'Product search and filtering',
    'Inventory status monitoring',
    'Responsive user interface',
    'Database-driven product storage',
    'Real-time inventory updates'
  ],
  tech: [
    'C++',
    'Object-Oriented Programming (OOP)',
    'File Handling',
    'Data Structures'
  ],
  challenges: 'Designing an efficient product management structure, maintaining data consistency, handling inventory updates correctly, and creating a user-friendly workflow.',
  learnings: 'Strengthened my understanding of OOP concepts, file handling, data management, and designing software that mirrors real-world business operations.',
  github: 'https://github.com/hritikhri/Inventory-management-system',
  url: '',
  demo: '#',
},
  {
    id: 'chatapp',
    name: 'Real-Time Chat App',
    tagline: 'Socket.IO Messaging Platform',
    shortDesc: 'Full-featured real-time messaging with rooms, typing indicators, and online presence detection.',
    image: '/projects/chat-app.jpg',
    color: '#0EA5E9',
    colorLight: '#E0F2FE',
    status: 'Built',
    year: '2025',
    story: 'After using Socket.IO in smaller features, I wanted to build something where real-time was the core feature — not an afterthought. Built this to truly understand how bidirectional communication works at the protocol level.',
    why: 'WebSockets are foundational to modern apps. I needed to really learn them, not just copy-paste examples.',
    features: [
      'Real-time messaging with Socket.IO',
      'Public and private chat rooms',
      'Typing indicators',
      'Online/offline presence',
      'Message history persistence',
      'Responsive mobile UI',
    ],
    tech: ['React.js', 'Node.js', 'Socket.IO', 'Express.js', 'MongoDB'],
    challenges: 'Handling disconnection edge cases, managing socket rooms efficiently, and preventing memory leaks with proper cleanup.',
    learnings: 'Deep understanding of WebSocket lifecycle, event-driven architecture, and real-time state synchronization.',
    github: 'https://github.com/hritikhri/Real-Time-Chat-System',
    url:"",
    demo: '#',
  },
  {
    id: 'medicare',
    name: 'Medicare',
    tagline: 'Doctor-Patient Management System',
    shortDesc: 'A healthcare management system for scheduling appointments, managing records, and doctor-patient coordination.',
    image: '/projects/medicare.jpg',
    color: '#059669',
    colorLight: '#ECFDF5',
    status: 'Built',
    year: '2025',
    story: 'Healthcare software is notoriously bad UX. I wanted to build something that could actually be used by real doctors and patients — clean, fast, and functional.',
    why: 'Wanted to work with a domain that had complex business logic: appointments, availability, roles, and records.',
    features: [
      'Doctor and patient role system',
      'Appointment booking with conflict detection',
      'Patient medical record management',
      'Doctor availability calendar',
      'Admin dashboard for clinic management',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Tailwind CSS'],
    challenges: 'Building the availability conflict detection system and designing a proper role-based access control system from scratch.',
    learnings: 'Learned how to model complex business rules in code, design multi-role systems, and build admin dashboards with real data.',
    github: 'https://github.com/hritikhri/medicare',
    url:"",
    demo: '#',
  },{
  id: 'social-media-platform',
  name: 'Social Media Platform',
  tagline: 'Connect, Share, and Interact in Real Time',
  shortDesc: 'A full-stack social networking platform where users can create posts, connect with others, interact through likes and comments, and build their online community.',
  image: '/projects/social-media-platform.jpg',
  color: '#8B5CF6',
  colorLight: '#F3E8FF',
  status: 'Built',
  year: '2025',
  story: 'Social media applications combine some of the most challenging aspects of web development—authentication, user relationships, content feeds, media handling, and real-time interactions. I built this platform to gain hands-on experience with large-scale application architecture and user-centric design.',
  why: 'I wanted to understand how platforms like Instagram and Facebook manage user-generated content, social interactions, and real-time communication while maintaining a smooth user experience.',
  features: [
    'Secure user authentication and authorization',
    'Create, edit, and delete posts',
    'Like and comment on posts',
    'Follow and unfollow users',
    'Personalized user profiles',
    'Profile picture upload and management',
    'News feed with latest posts',
    'User search functionality',
    'Responsive design for mobile and desktop',
    'Real-time notifications and interactions'
  ],
  tech: [
    'React.js',
    'Node.js',
    'Express.js',
    'MongoDB',
    'JWT Authentication',
    'Socket.io',
    'Cloudinary',
    'Tailwind CSS'
  ],
  challenges: 'Designing efficient relationships between users, implementing the follow/unfollow system, managing real-time updates, optimizing database queries for feeds, and ensuring secure authentication throughout the application.',
  learnings: 'Learned how social networking platforms manage complex user relationships, handle large amounts of dynamic content, implement real-time features, and build scalable full-stack applications using the MERN stack.',
  github: 'https://github.com/hritikhri/Social-Media-Platform-MERN-',
  url:"",
  demo: '#'
}, {
  id: "linkedin-clone",
  name: "LinkedIn Clone",
  tagline: "Professional Networking Platform",
  shortDesc: "A full-stack LinkedIn-inspired platform where users can connect, create posts, build professional profiles, and interact with their network in real-time.",
  image: "/projects/linkedin-clone.jpg",
  color: "#0A66C2",
  colorLight: "#EAF4FF",
  status: "Built",
  year: "2026",
  story: "I wanted to understand how large-scale social networking platforms work behind the scenes. LinkedIn combines professional networking, content sharing, messaging, and profile management, making it a perfect project to strengthen my full-stack development skills.",
  why: "To learn how professional social media platforms handle user connections, feeds, authentication, profile management, and real-time interactions.",
  features: [
    "User authentication and authorization",
    "Professional profile creation and editing",
    "Profile picture and cover image upload",
    "Create, edit, and delete posts",
    "Like and comment on posts",
    "Send and accept connection requests",
    "Real-time messaging system",
    "News feed with post updates",
    "Search users by name and skills",
    "Responsive design for mobile and desktop"
  ],
  tech: [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JWT",
    "Socket.io",
    "Cloudinary",
    "Tailwind CSS"
  ],
  challenges: "Implementing the connection request system, designing an efficient news feed, managing real-time messaging with Socket.io, and handling secure authentication across the application.",
  learnings: "Learned how social networking platforms manage relationships between users, implement real-time communication, optimize database queries, and build scalable full-stack applications.",
  github: "https://github.com/hritikhri/Linkedin-Clone",
  url:"data:image/png;base64,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",
  demo: "#"
}
];

interface CaseStudyModalProps {
  project: typeof projects[0];
  onClose: () => void;
  isDark: boolean;
}

const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose, isDark }) => {
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
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className={`relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-3xl border shadow-2xl ${
          isDark ? 'bg-[#0B0F19] border-white/10' : 'bg-white border-gray-200'
        }`}
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between p-6 pb-4 border-b backdrop-blur-sm"
          style={{ borderColor: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)', background: isDark ? 'rgba(11,15,25,0.95)' : 'rgba(255,255,255,0.95)' }}
        >
          <div>
            <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`} style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              {project.name}
            </h3>
            <p className={`text-[13px] ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>{project.tagline}</p>
          </div>
          <button
            onClick={onClose}
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
              isDark ? 'text-gray-400 hover:text-white hover:bg-white/8' : 'text-gray-400 hover:text-gray-700 hover:bg-gray-100'
            }`}
          >
            <X size={18} />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Image */}
          <div className="img-zoom rounded-2xl overflow-hidden aspect-video">
            <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
          </div>

          {/* Story */}
          <div>
            <h4 className={`text-[13px] font-semibold uppercase tracking-wider mb-2 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>The Story</h4>
            <p className={`text-[14px] leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{project.story}</p>
          </div>

          {/* Why */}
          <div>
            <h4 className={`text-[13px] font-semibold uppercase tracking-wider mb-2 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>Why I Built It</h4>
            <p className={`text-[14px] leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{project.why}</p>
          </div>

          {/* Features */}
          <div>
            <h4 className={`text-[13px] font-semibold uppercase tracking-wider mb-3 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>Key Features</h4>
            <ul className="space-y-2">
              {project.features.map(f => (
                <li key={f} className={`flex items-center gap-2.5 text-[14px] ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4F8CFF] flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Challenges & Learnings */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className={`p-4 rounded-2xl ${isDark ? 'bg-[#111827]' : 'bg-gray-50'}`}>
              <h4 className={`text-[12px] font-semibold uppercase tracking-wider mb-2 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>Challenges</h4>
              <p className={`text-[13px] leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{project.challenges}</p>
            </div>
            <div className={`p-4 rounded-2xl ${isDark ? 'bg-[#111827]' : 'bg-gray-50'}`}>
              <h4 className={`text-[12px] font-semibold uppercase tracking-wider mb-2 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>Learnings</h4>
              <p className={`text-[13px] leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{project.learnings}</p>
            </div>
          </div>

          {/* Tech */}
          <div>
            <h4 className={`text-[13px] font-semibold uppercase tracking-wider mb-3 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map(t => (
                <span key={t} className={`text-[12px] px-3 py-1.5 rounded-full font-medium border ${
                  isDark ? 'border-white/10 text-gray-300 bg-white/5' : 'border-gray-200 text-gray-600 bg-gray-50'
                }`}>{t}</span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-3 pt-2">
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              className={`btn-primary border flex-1 justify-center text-[13px] ${
                isDark ? 'border-white/10 text-gray-300 hover:bg-white/5' : 'border-gray-200 text-gray-700 hover:bg-gray-50'
              }`}
            >
              <GithubIcon /> GitHub
            </a>
            <a href={project.demo} target="_blank" rel="noopener noreferrer"
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

const Projects: React.FC = () => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="projects" className="py-24 relative">
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
            <span className="text-[11px] font-semibold tracking-widest uppercase text-[#4F8CFF]">Projects</span>
            <div className="h-px w-12 bg-[#4F8CFF]/30" />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2
              className={`text-3xl sm:text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}
              style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em' }}
            >
              Things I've built
            </h2>
            <p className={`text-[15px] max-w-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
              Real projects. Real problems. Real learning.
            </p>
          </div>
        </motion.div>

        {/* Projects */}
        <div ref={ref} className="space-y-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.6, ease: 'easeOut' }}
              className={`project-card group rounded-3xl border overflow-hidden ${
                isDark
                  ? 'bg-[#111827] border-white/8 hover:border-white/15 hover:shadow-2xl hover:shadow-black/30'
                  : 'bg-white border-gray-100 hover:border-gray-200 hover:shadow-xl hover:shadow-black/5'
              }`}
            >
              <div className="flex flex-col  rounded-lg lg:flex-row">
                {/* Image */}
                <div className={`lg:w-[45%] mt-10 ml-5 rounded-lg relative overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="img-zoom rounded-lg h-52 sm:h-64 lg:h-full max-h-[300px] min-h-[200px]">
                    <img
                      src={project.image || project.url}
                      alt={project.name}
                      className="object-cover rounded-lg "
                      height={"100px"}
                      // loading="lazy" 
                    />
                    <div className="absolute inset-0" style={{
                      background: isDark
                        ? 'linear-gradient(to right, rgba(17,24,39,0.4), transparent)'
                        : 'linear-gradient(to right, rgba(255,255,255,0.2), transparent)',
                    }} />
                  </div>
                </div>

                {/* Content */}
                <div className={`flex-1 p-6 sm:p-8 flex flex-col justify-between ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div>
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border`}
                            style={{
                              color: project.color,
                              borderColor: `${project.color}30`,
                              background: `${project.color}10`,
                            }}
                          >
                            {project.status}
                          </span>
                          <span className={`text-[11px] ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>{project.year}</span>
                        </div>
                        <h3
                          className={`text-xl sm:text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}
                          style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em' }}
                        >
                          {project.name}
                        </h3>
                        <p className={`text-[13px] font-medium mt-0.5 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                          {project.tagline}
                        </p>
                      </div>
                    </div>

                    <p className={`text-[14px] sm:text-[15px] leading-relaxed mb-5 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {project.shortDesc}
                    </p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tech.map(t => (
                        <span
                          key={t}
                          className={`text-[11px] px-2.5 py-1 rounded-lg font-medium border ${
                            isDark
                              ? 'border-white/8 text-gray-400 bg-white/3'
                              : 'border-gray-100 text-gray-500 bg-gray-50'
                          }`}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className={`btn-primary text-[13px] border font-medium ${
                        isDark
                          ? 'border-white/10 text-gray-300 hover:border-white/20 hover:bg-white/5'
                          : 'border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50'
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
                          ? 'border-white/10 text-gray-300 hover:border-white/20 hover:bg-white/5'
                          : 'border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      <GithubIcon /> GitHub
                    </a>
                    {/* <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary bg-[#4F8CFF] hover:bg-[#3a75e8] text-white text-[13px] font-medium shadow-lg shadow-blue-500/20"
                    >
                      <ExternalLink size={13} /> Live Demo
                    </a> */}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <CaseStudyModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
            isDark={isDark}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
