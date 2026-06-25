export const mystats = [
  { value: "18+", label: "Projects built" },
  { value: "18+", label: "Technologies" },
  { value: "3+", label: "Years learning" },
  { value: "6+", label: "Certifications" },
];

export const mylinks = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/hritik-kumar-dev",
  },
  {
    name: "GitHub",
    href: "https://github.com/hritikhri",
  },
  {
    name: "Email",
    href: "mailto:hritik[.dev.04@gmail.com](mailto:.dev.04@gmail.com)",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/your_username",
  },
  {
    name: "Instagram",
    href: "https://instagram.com/your_username",
  },
];

export const counters = [
  {
    value: 18,
    suffix: "+",
    label: "Projects Built",
    emoji: "🚀",
    desc: "Real-world applications shipped",
  },
  {
    value: 18,
    suffix: "+",
    label: "Technologies",
    emoji: "⚙️",
    desc: "Tools learned by building",
  },
  {
    value: 6,
    suffix: "+",
    label: "Certifications",
    emoji: "🏆",
    desc: "Verified skill credentials",
  },
  {
    value: 3,
    suffix: "+",
    label: "Years Learning",
    emoji: "📚",
    desc: "Consistent growth journey",
  },
];

export const focusedOn = [
  "DSA",
  "System Design",
  "Next.js 15",
  "Backend Architecture",
  "AI Coding Tools",
  "Full-Stack Development",
]; 

export const skillCategories = [
  {
    id: "frontend",
    label: "Frontend",
    emoji: "🎨",
    skills: [
      { name: "React.js", level: 85, icon: "⚛️" },
      { name: "Next.js", level: 75, icon: "▲" },
      { name: "JavaScript", level: 88, icon: "🟨" },
      { name: "HTML5", level: 95, icon: "🔶" },
      { name: "CSS3", level: 90, icon: "🔵" },
      { name: "Tailwind CSS", level: 85, icon: "💨" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    emoji: "⚙️",
    skills: [
      { name: "Node.js", level: 80, icon: "🟢" },
      { name: "Express.js", level: 80, icon: "🚂" },
      { name: "REST APIs", level: 85, icon: "🔗" },
      { name: "Socket.IO", level: 72, icon: "🔌" },
      { name: "JWT Auth", level: 78, icon: "🔐" },
    ],
  },
  {
    id: "database",
    label: "Database",
    emoji: "🗄️",
    skills: [
      { name: "MongoDB", level: 80, icon: "🍃" },
      { name: "Mongoose", level: 78, icon: "📦" },
    ],
  },
  {
    id: "languages",
    label: "Programming Languages",
    emoji: "💻",
    skills: [
      { name: "C", level: 75, icon: "🔹" },
      { name: "C++", level: 80, icon: "⚡" },
      { name: "Java", level: 70, icon: "☕" },
      { name: "JavaScript", level: 88, icon: "🟨" },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    emoji: "🛠️",
    skills: [
      { name: "Git", level: 82, icon: "🌿" },
      { name: "GitHub", level: 84, icon: "🐙" },
      { name: "VS Code", level: 90, icon: "💻" },
      { name: "Postman", level: 75, icon: "📮" },
    ],
  },
];

export const techExposure = [
  "React",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Mongoose",
  "Socket.IO",
  "JavaScript",
  "C",
  "C++",
  "Java",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Bootstrap",
  "Vite",
  "Git",
  "GitHub",
  "VS Code",
  "Postman",
  "JWT",
  "REST API",
  "Axios",
  "Nodemailer",
  "Cloudinary",
  "Linux",
];

export const aiProjects = [
  {
    id: "vibemeet",
    name: "VibeMeet",
    tagline: "Community Networking & Event Platform",
    shortDesc:
      "A social networking platform where users can discover communities, connect with like-minded people, create events, and engage through real-time interactions.",
    image: "/projects/vibemeet.jpg",
    color: "#7C3AED",
    colorLight: "#EDE9FE",
    status: "Built with MERN",
    year: "2025-2026",

    story:
      "I noticed that online communities are spread across multiple platforms like Discord, Reddit, and Facebook Groups, making meaningful interactions fragmented. I built VibeMeet to bring community discovery, social networking, and event-based engagement into a single unified platform.",

    why: "I wanted to build a real-world social media application that goes beyond CRUD operations and helped me gain hands-on experience with authentication, real-time features, scalable backend architecture, and complex database relationships.",

    features: [
      "Community creation and discovery",
      "User profiles and social connections",
      "Event creation, scheduling, and RSVPs",
      "Real-time activity feeds",
      "JWT-based authentication and authorization",
      "Responsive and modern user interface",
      "Secure user account management",
      "Community engagement and networking features",
    ],

    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Tailwind CSS",
    ],

    aiTools: ["ChatGPT", "Claude", "Gemini", "Cursor"],

    challenges:
      "The biggest challenge was designing relationships between users, communities, and events in MongoDB while keeping queries efficient. Managing authentication, authorization, and ensuring secure access across different user actions also required careful backend architecture.",

    learnings:
      "Learned how to design scalable database schemas for social applications, implement secure JWT authentication, structure REST APIs effectively, and manage complex state and user interactions in a full-stack MERN application.",

    github: "https://github.com/hritikhri/Vibemeet",
    url: "",
    demo: "#",
  },
];

export const projects = [
  {
    id: "inventory",
    name: "Inventory Management System",
    tagline: "Smart Stock & Product Management",
    shortDesc:
      "A complete inventory management solution for tracking products, stock levels, sales, and inventory operations efficiently.",
    image: "/projects/inventory-management.png",
    color: "#10B981",
    colorLight: "#D1FAE5",
    status: "Built",
    year: "Oct 2025 – Nov 2025",
    story:
      "I built this project to understand how real-world businesses manage inventory and product data. The goal was to create a practical system that could track stock movements, product details, and inventory updates in a structured way.",
    why: "Inventory management is a core requirement for many businesses. Building this project helped me learn CRUD operations, database management, and backend architecture while solving a real business problem.",
    features: [
      "Product inventory management",
      "Add, update, and delete products",
      "Stock quantity tracking",
      "Product search and filtering",
      "Inventory status monitoring",
      "Database-driven product storage",
      "Real-time inventory updates",
    ],
    tech: [
      "C++",
      "Object-Oriented Programming (OOP)",
      "File Handling",
      "Data Structures",
    ],
    challenges:
      "Designing an efficient product management structure, maintaining data consistency, handling inventory updates correctly, and creating a user-friendly workflow.",
    learnings:
      "Strengthened my understanding of OOP concepts, file handling, data management, and designing software that mirrors real-world business operations.",
    github: "https://github.com/hritikhri/Inventory-management-system",
    url: "",
    demo: "#",
  },
  {
    id: "chatapp",
    name: "Real-Time Chat App",
    tagline: "Socket.IO Messaging Platform",
    shortDesc:
      "Full-featured real-time messaging with rooms, typing indicators, and online presence detection.",
    image: "/projects/chat-app.jpg",
    color: "#0EA5E9",
    colorLight: "#E0F2FE",
    status: "Built",
    year: "Jan 2025 – Mar 2025",
    story:
      "After using Socket.IO in smaller features, I wanted to build something where real-time was the core feature — not an afterthought. Built this to truly understand how bidirectional communication works at the protocol level.",
    why: "WebSockets are foundational to modern apps. I needed to really learn them, not just copy-paste examples.",
    features: [
      "Real-time messaging with Socket.IO",
      "Private chatting",
      "Cloudinary available",
      "Profile Editing avilable",
      "Message history persistence",
    ],
    tech: ["React.js", "Node.js", "Socket.IO", "Express.js", "MongoDB"],
    challenges:
      "Handling disconnection edge cases, managing socket rooms efficiently, and preventing memory leaks with proper cleanup.",
    learnings:
      "Deep understanding of WebSocket lifecycle, event-driven architecture, and real-time state synchronization.",
    github: "https://github.com/hritikhri/Real-Time-Chat-System",
    url: "",
    demo: "#",
  },
  {
    id: "medicare",
    name: "Medicare",
    tagline: "Doctor-Patient Management System",
    shortDesc:
      "A healthcare management system for scheduling appointments, managing records, and doctor-patient coordination.",
    image: "/projects/medicare.jpg",
    color: "#059669",
    colorLight: "#ECFDF5",
    status: "Built",
    year: "Dec 2025 - Feb 2026",
    story:
      "Healthcare software is notoriously bad UX. I wanted to build something that could actually be used by real doctors and patients — clean, fast, and functional.",
    why: "Wanted to work with a domain that had complex business logic: appointments, availability, roles, and records.",
    features: [
      "Doctor and patient role system",
      "Appointment booking with conflict detection",
      "Patient medical record management",
      "Doctor availability calendar",
      "Admin dashboard for clinic management",
    ],
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Tailwind CSS",
    ],
    challenges:
      "Building the availability conflict detection system and designing a proper role-based access control system from scratch.",
    learnings:
      "Learned how to model complex business rules in code, design multi-role systems, and build admin dashboards with real data.",
    github: "https://github.com/hritikhri/medicare",
    url: "",
    demo: "#",
  },
  {
    id: "social-media-platform",
    name: "Social Media Platform",
    tagline: "Connect, Share, and Interact in Real Time",
    shortDesc:
      "A full-stack social networking platform where users can create posts, connect with others, interact through likes and comments, and build their online community.",
    image: "/projects/social-media-platform.jpg",
    color: "#8B5CF6",
    colorLight: "#F3E8FF",
    status: "Built",
    year: "Sep 2024 – Nov 2024",
    story:
      "Social media applications combine some of the most challenging aspects of web development—authentication, user relationships, content feeds, media handling, and real-time interactions. I built this platform to gain hands-on experience with large-scale application architecture and user-centric design.",
    why: "I wanted to understand how platforms like Instagram and Facebook manage user-generated content, social interactions, and real-time communication while maintaining a smooth user experience.",
    features: [
      "Secure user authentication and authorization",
      "Create, edit, and delete posts",
      "Like and comment on posts",
      "Follow and unfollow users",
      "Personalized user profiles",
      "Profile picture upload and management",
      "News feed with latest posts",
      "User search functionality",
      "Responsive design for mobile and desktop",
      "Real-time notifications and interactions",
    ],
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Authentication",
      "Socket.io",
      "Cloudinary",
      "Tailwind CSS",
    ],
    challenges:
      "Designing efficient relationships between users, implementing the follow/unfollow system, managing real-time updates, optimizing database queries for feeds, and ensuring secure authentication throughout the application.",
    learnings:
      "Learned how social networking platforms manage complex user relationships, handle large amounts of dynamic content, implement real-time features, and build scalable full-stack applications using the MERN stack.",
    github: "https://github.com/hritikhri/Social-Media-Platform-MERN",
    url: "",
    demo: "#",
  },
  {
    id: "linkedin-clone",
    name: "LinkedIn Clone",
    tagline: "Professional Networking Platform",
    shortDesc:
      "A full-stack LinkedIn-inspired platform where users can connect, create posts, build professional profiles, and interact with their network in real-time.",
    image: "/projects/linkedin-clone.jpg",
    color: "#0A66C2",
    colorLight: "#EAF4FF",
    status: "Built",
    year: "2024",
    story:
      "I wanted to understand how large-scale social networking platforms work behind the scenes. LinkedIn combines professional networking, content sharing, messaging, and profile management, making it a perfect project to strengthen my full-stack development skills.",
    why: "To learn how professional social media platforms handle user connections, feeds, authentication, profile management, and real-time interactions.",
    features: [
      "Professional profile creation and editing",
      "Profile picture and cover image upload",
      "Create, edit, and delete posts",
      "Like and comment on posts",
      "Send and accept connection requests",
      "News feed with post updates",
      "Search users by name and skills",
      "Responsive design for mobile and desktop",
    ],
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Socket.io",
      "Cloudinary",
      "Tailwind CSS",
    ],
    challenges:
      "Implementing the connection request system, designing an efficient news feed, managing real-time messaging with Socket.io, and handling secure authentication across the application.",
    learnings:
      "Learned how social networking platforms manage relationships between users, implement real-time communication, optimize database queries, and build scalable full-stack applications.",
    github: "https://github.com/hritikhri/Linkedin-Clone",
    url: "data:image/png;base64,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",
    demo: "#",
  },
  {
    id: "shopping-website",
    name: "Shopping Website",
    tagline: "Modern E-Commerce Platform",
    shortDesc:
      "A full-stack e-commerce application that allows users to browse products, manage carts, and place orders seamlessly.",

    image: "/projects/shopping-website.png",
    color: "#F59E0B",
    colorLight: "#FEF3C7",
    status: "Built",
    year: "2024",

    story:
      "I built this project to understand how modern e-commerce platforms work, from product management to user authentication and cart functionality.",

    why: "Building an online shopping platform helped me gain hands-on experience with full-stack development, state management, and real-world business workflows.",

    features: [
      "User authentication",
      "Product browsing",
      "Shopping cart management",
      "Product search functionality",
      "Responsive user interface",
    ],

    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],

    challenges:
      "Managing cart state across the application and implementing secure authentication while maintaining a smooth user experience.",

    learnings:
      "Learned how to build scalable MERN applications, manage application state, and create user-friendly e-commerce workflows.",

    github: "https://github.com/hritikhri/shoping-website",
    url: "",
    demo: "#",
  },
];

export const certs = [
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
  // {
  //   title: "Python Basics",
  //   issuer: "HackerRank",
  //   year: "2025",
  //   emoji: "🐍",
  //   color: "#3776AB",
  //   colorBg: "#3776AB15",
  //   badge: "⭐ Verified",
  //   url: "https://www.hackerrank.com/certificates/4609ddaf7c3e",
  //   preview: "https://www.hackerrank.com/certificates/iframe/4609ddaf7c3e",
  //   description:
  //     "Covers Python fundamentals including data types, functions, control flow, and basic OOP concepts.",
  // },
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
    badge: "📜 Certified",
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
  {
  title: "Git for Beginners",
  issuer: "Udemy",
  year: "2026",
  emoji: "🔧",
  color: "#A435F0",
  colorBg: "#A435F015",
  badge: "🎓 Certified",
  url: "https://www.udemy.com/certificate/UC-25a2d2c4-8b64-4ea0-9f7d-55e8fae035b9/",
  preview: "https://www.udemy.com/certificate/UC-25a2d2c4-8b64-4ea0-9f7d-55e8fae035b9/",
  description:
    "Demonstrates foundational knowledge of Git version control, including repositories, commits, branching, merging, and collaboration workflows using Git and GitHub.",
},
];

export const repos = [
  {
    name: "VibeMeet",
    desc: "Community networking platform for events, user connections, and social engagement.",
    stars: 24,
    lang: "JavaScript",
    color: "#7C3AED",
    url: "https://github.com/hritikhri/Vibemeet",
  },
  {
    name: "Real-Time Chat App",
    desc: "Socket.IO powered messaging platform with rooms, typing indicators, and online presence.",
    stars: 19,
    lang: "JavaScript",
    color: "#0EA5E9",
    url: "https://github.com/hritikhri/Real-Time-Chat-System",
  },
  {
    name: "Medicare",
    desc: "Doctor-patient management system with appointments, medical records, and admin controls.",
    stars: 21,
    lang: "JavaScript",
    color: "#059669",
    url: "https://github.com/hritikhri/medicare",
  },
  {
    name: "Social Media Platform",
    desc: "Full-stack social network featuring posts, likes, comments, follows, and notifications.",
    stars: 32,
    lang: "JavaScript",
    color: "#8B5CF6",
    url: "https://github.com/hritikhri/Social-Media-Platform-MERN-",
  },
  {
    name: "LinkedIn Clone",
    desc: "Professional networking platform with profiles, connections, feeds, and messaging.",
    stars: 28,
    lang: "JavaScript",
    color: "#0A66C2",
    url: "https://github.com/hritikhri/Linkedin-Clone",
  },
  {
    name: "Shopping Website",
    desc: "MERN-based e-commerce application with user authentication, product management, shopping cart, and seamless online shopping experience.",
    stars: 18,
    lang: "JavaScript",
    color: "#10B981",
    url: "https://github.com/hritikhri/shoping-website",
  },
];

export const milestones = [
  {
    year: "2020",
    title: "Curiosity Sparks",
    description:
      "Started wondering how websites actually work. Opened browser DevTools for the first time and things got interesting.",
    emoji: "🔍",
    highlight: false,
  },
  {
    year: "2022",
    title: "Class 12 Complete",
    description:
      "Finished secondary education. Knew I wanted to go into technology — the only question was which path.",
    emoji: "🎓",
    highlight: false,
  },
  {
    year: "2023",
    title: "BCA Begins",
    description:
      "Enrolled in Bachelor of Computer Applications. Started with fundamentals — C, data structures, algorithms. The foundation phase.",
    emoji: "💻",
    highlight: false,
  },
  {
    year: "2024",
    title: "Frontend Development",
    description:
      "Learned HTML, CSS, JavaScript deeply. Picked up React. Built my first real UI. Got my first taste of shipping something that looks good.",
    emoji: "⚛️",
    highlight: false,
  },
  {
    year: "2025",
    title: "Full Stack Projects",
    description:
      "Built VibeMeet, a real-time chat app, and Medicare. Learned Node.js, Express, MongoDB, Socket.IO. Started thinking like a product engineer.",
    emoji: "🚀",
    highlight: true,
  },
{
  year: "2026",
  title: "Completed BCA",
  description:
    "Completed my BCA and strengthened my foundation in C, C++, and DSA. Explored modern web technologies, built several full-stack projects, and developed a deeper understanding of Object-Oriented Programming and software development.",
  emoji: "🎓",
  highlight: true,
},
  {
    year: "2026",
    title: "Targeting Software Development Roles",
    description:
      "Mastering modern web technologies, scalable architectures, and full-stack development. Actively preparing for software engineering opportunities through continuous learning and real-world projects.",
    emoji: "🎯",
    highlight: false,
    isCurrent: true,
  },
];
