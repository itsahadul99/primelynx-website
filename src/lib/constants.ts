export const siteConfig = {
  name: "Primelynx",
  title: "Primelynx | Connecting Ideas, Building the Future",
  description:
    "We design and engineer high-performance digital ecosystems that empower brands to redefine their market presence.",
  url: "https://primelynx.tech",
  email: "hello@primelynx.tech",
  phone: "+1 (555) 000-LYNX",
  address: "101 Design Way, San Francisco, CA 94103",
};

export const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export const heroStats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "12+", label: "Global Clients" },
  { value: "99%", label: "Success Rate" },
];

export const aboutStats = [
  { value: "50+", label: "Projects", color: "text-primary" },
  { value: "5+", label: "Years Exp.", color: "text-secondary", offsetTop: true },
  { value: "20+", label: "Awards", color: "text-indigo-400", offsetBottom: true },
  { value: "10+", label: "Specialists", color: "text-primary" },
];

export const teamMembers = [
  {
    name: "Ahadul Islam",
    role: "Full-Stack Developer",
    image: "/demo.jpg",
    skills: ["Next.js", "React", "Node.js", "MongoDB"],
    social: {
      github: "https://github.com/itsahadul99",
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Rakibul Hasan",
    role: "Frontend Developer",
    image: "/demo.jpg",
    skills: ["React", "TypeScript", "Tailwind", "Figma"],
    social: {
      github: "#",
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Sajid Rahman",
    role: "Backend Engineer",
    image: "/demo.jpg",
    skills: ["Node.js", "PostgreSQL", "Redis", "AWS"],
    social: {
      github: "#",
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Tanvir Ahmed",
    role: "UI/UX Designer",
    image: "/demo.jpg",
    skills: ["Figma", "Adobe XD", "Prototyping", "Design Systems"],
    social: {
      github: "#",
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Fahim Chowdhury",
    role: "DevOps Engineer",
    image: "/demo.jpg",
    skills: ["Docker", "AWS", "Kubernetes", "CI/CD"],
    social: {
      github: "#",
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Nusrat Jahan",
    role: "Mobile Developer",
    image: "/demo.jpg",
    skills: ["React Native", "Flutter", "Firebase", "TypeScript"],
    social: {
      github: "#",
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Maruf Karim",
    role: "Full-Stack Developer",
    image: "/demo.jpg",
    skills: ["Next.js", "Node.js", "PostgreSQL", "Redis"],
    social: {
      github: "#",
      linkedin: "#",
      twitter: "#"
    },
  },
  {
    name: "Tasnia Akter",
    role: "Frontend Developer",
    image: "/demo.jpg",
    skills: ["React", "Vue.js", "Tailwind", "TypeScript"],
    social: {
      github: "#",
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Raihan Uddin",
    role: "QA Engineer",
    image: "/demo.jpg",
    skills: ["Cypress", "Jest", "Selenium", "Playwright"],
    social: {
      github: "#",
      linkedin: "#",
      twitter: "#",
    },
  },
];

export const services = [
  {
    icon: "code",
    title: "Web Development",
    description: "Responsive, lightning-fast web applications built with the latest modern frameworks.",
    iconColor: "text-primary",
    iconBg: "bg-primary/20",
  },
  {
    icon: "smartphone",
    title: "Mobile Solutions",
    description: "Native and cross-platform mobile experiences that provide seamless user engagement.",
    iconColor: "text-secondary",
    iconBg: "bg-secondary/20",
  },
  {
    icon: "draw",
    title: "UI/UX Design",
    description: "Intuitive, research-driven interfaces that prioritize user clarity and brand storytelling.",
    iconColor: "text-indigo-400",
    iconBg: "bg-indigo-500/20",
  },
  {
    icon: "cloud",
    title: "Cloud Infrastructure",
    description: "Secure, elastic cloud architectures optimized for performance and cost-efficiency.",
    iconColor: "text-primary",
    iconBg: "bg-primary/20",
  },
  {
    icon: "psychology",
    title: "AI Integration",
    description: "Harnessing machine learning and automation to drive smarter business decisions.",
    iconColor: "text-secondary",
    iconBg: "bg-secondary/20",
  },
  {
    icon: "lightbulb",
    title: "Tech Consulting",
    description: "Strategic roadmaps and architectural audits to future-proof your digital investments.",
    iconColor: "text-indigo-400",
    iconBg: "bg-indigo-500/20",
  },
];

export const projects = [
  {
    title: "CWA - Organization Management",
    description: "A complete organization management system for handling members, roles, and internal operations efficiently.",
    image: "/demo.jpg",
    tags: [
      { label: "Next.js", color: "primary" },
      { label: "MongoDB", color: "secondary" },
    ],
    caseStudy: {
      overview:
        "CWA needed a centralized platform to manage their growing organization — from member onboarding and role assignments to internal communications and operational workflows. We built a comprehensive management system that replaced fragmented spreadsheets and manual processes with a unified digital hub.",
      challenge:
        "The organization was managing 500+ members across multiple departments using spreadsheets, email chains, and paper forms. Role assignments were inconsistent, communication was fragmented, and there was no visibility into operational metrics. Onboarding a new member took an average of 3 days.",
      solution:
        "We designed a role-based access control system with an intuitive admin dashboard. The platform features automated onboarding workflows, real-time member directories, department-level permissions, and comprehensive audit logs. Server-side rendering with Next.js ensures fast load times even with large datasets.",
      features: [
        "Role-based access control with granular permissions",
        "Automated member onboarding & offboarding workflows",
        "Real-time organizational directory with search & filters",
        "Department management with hierarchical structure",
        "Activity audit logs and compliance reporting",
        "Bulk operations for member and role management",
      ],
      results: [
        { metric: "80%", label: "Faster member onboarding" },
        { metric: "500+", label: "Members managed" },
        { metric: "60%", label: "Reduction in admin overhead" },
        { metric: "99.9%", label: "System uptime" },
      ],
      techStack: ["Next.js", "MongoDB", "NextAuth.js", "Tailwind CSS", "Vercel"],
    },
  },
  {
    title: "Qurbani Market - E-commerce Platform",
    description: "A full-featured e-commerce platform for buying and selling Qurbani animals with filtering, booking, and payment features.",
    image: "/demo.jpg",
    tags: [
      { label: "React", color: "primary" },
      { label: "Stripe", color: "secondary" },
    ],
    caseStudy: {
      overview:
        "Qurbani Market is a seasonal e-commerce platform that connects livestock sellers with buyers during the Eid ul-Adha season. The platform needed to handle high traffic spikes, provide detailed animal listings with advanced filtering, and process secure payments — all within a tight seasonal window.",
      challenge:
        "Traditional Qurbani animal purchasing involves visiting multiple farms, negotiating prices in person, and dealing with unreliable delivery. Buyers had no way to compare options, verify animal quality, or make secure payments. Sellers lacked digital presence and struggled to reach customers beyond their local area.",
      solution:
        "We built a marketplace with rich animal profiles including photos, weight, breed, age, and health certifications. Advanced filtering lets buyers find exactly what they need. The Stripe-powered checkout supports split payments and escrow-style holds until delivery confirmation. A real-time booking system prevents double-selling.",
      features: [
        "Advanced filtering by breed, weight, price range & location",
        "Detailed animal profiles with photo galleries",
        "Secure Stripe payment integration with escrow",
        "Real-time availability and booking system",
        "Seller dashboard with inventory management",
        "Delivery scheduling and tracking",
      ],
      results: [
        { metric: "2,000+", label: "Animals listed in first season" },
        { metric: "95%", label: "Successful transaction rate" },
        { metric: "3x", label: "Seller reach vs. traditional methods" },
        { metric: "45s", label: "Average time to checkout" },
      ],
      techStack: ["React", "Node.js", "Stripe", "Express", "MongoDB", "Cloudinary"],
    },
  },
  {
    title: "Happy Restaurant - Restaurant Management System",
    description: "Restaurant management system with order tracking, billing, and admin dashboard for smooth operations.",
    image: "/demo.jpg",
    tags: [
      { label: "React Native", color: "indigo" },
      { label: "Node.js", color: "secondary" },
    ],
    caseStudy: {
      overview:
        "Happy Restaurant needed a cross-platform mobile solution to manage dine-in orders, kitchen workflows, and billing from a single interface. We delivered a React Native app used by waitstaff on tablets and an admin dashboard for the restaurant owner to monitor operations in real time.",
      challenge:
        "The restaurant relied on handwritten order slips that frequently led to mistakes, delayed kitchen communication, and billing errors. During peak hours, order turnaround was slow, and the owner had no visibility into daily revenue or popular menu items without manually counting receipts at the end of each day.",
      solution:
        "We built a tablet-first mobile app for waitstaff to take orders that instantly sync to the kitchen display. The Node.js backend handles real-time order state management via WebSockets. An admin dashboard provides live sales data, menu management, and staff performance tracking. The billing module auto-calculates taxes and supports split bills.",
      features: [
        "Real-time order sync between waitstaff and kitchen",
        "Table management with visual floor plan",
        "Auto-calculated billing with tax and split-bill support",
        "Menu management with categories and modifiers",
        "Daily/weekly/monthly revenue analytics",
        "Kitchen display system with order queue prioritization",
      ],
      results: [
        { metric: "40%", label: "Faster order turnaround" },
        { metric: "90%", label: "Reduction in order errors" },
        { metric: "Real-time", label: "Revenue visibility" },
        { metric: "25%", label: "Increase in table turnover" },
      ],
      techStack: ["React Native", "Node.js", "Socket.io", "Express", "MongoDB", "Expo"],
    },
  },
  {
    title: "My Inventory - Inventory Management System",
    description: "Inventory management system to track stock, manage products, and monitor business operations in real time.",
    image: "/demo.jpg",
    tags: [
      { label: "MERN", color: "primary" },
      { label: "MongoDB", color: "secondary" },
    ],
    caseStudy: {
      overview:
        "My Inventory is a full-stack inventory management system built for small-to-medium businesses that need real-time visibility into their stock levels, product catalog, and supply chain operations without the complexity of enterprise-grade ERP software.",
      challenge:
        "The client was a growing retail business managing 1,000+ SKUs across multiple storage locations. Stock counts were done manually, leading to frequent overselling, lost inventory, and missed reorder points. They needed a system that was powerful enough to handle their scale but simple enough for non-technical staff.",
      solution:
        "We built a MERN stack application with a clean, intuitive interface that provides real-time stock tracking with automatic low-stock alerts. Barcode scanning integration speeds up stock intake. The dashboard surfaces key metrics like turnover rate, dead stock, and reorder suggestions powered by historical sales data.",
      features: [
        "Real-time stock level tracking with auto alerts",
        "Barcode scanning for quick stock intake",
        "Multi-location warehouse management",
        "Purchase order generation and tracking",
        "Sales analytics and inventory turnover reports",
        "User roles for staff, managers, and admins",
      ],
      results: [
        { metric: "70%", label: "Fewer stockout incidents" },
        { metric: "1,000+", label: "SKUs managed effortlessly" },
        { metric: "5min", label: "Stock count vs. 2hrs manual" },
        { metric: "35%", label: "Reduction in dead stock" },
      ],
      techStack: ["React", "Node.js", "Express", "MongoDB", "Chart.js", "JWT"],
    },
  },
  {
    title: "Todo Daily - Task Management App",
    description: "Simple and efficient daily task management app with clean UI and task tracking features.",
    image: "/demo.jpg",
    tags: [
      { label: "React", color: "primary" },
      { label: "Tailwind", color: "secondary" },
    ],
    caseStudy: {
      overview:
        "Todo Daily is a minimalist productivity app designed for people who want a clean, distraction-free way to plan their day. Focused on daily task management rather than complex project planning, it emphasizes simplicity, speed, and a delightful user experience.",
      challenge:
        "Most task management apps are overloaded with features — projects, tags, subtasks, integrations — which creates friction for users who just want to plan and track their daily tasks. The goal was to build something that loads instantly, feels intuitive, and helps users focus on what matters today.",
      solution:
        "We built a lightweight React app with Tailwind CSS that prioritizes speed and simplicity. Tasks are organized by day with drag-and-drop reordering. A focus mode highlights the current task and hides everything else. Local storage ensures zero-latency persistence, with optional cloud sync for cross-device access.",
      features: [
        "Daily task lists with drag-and-drop reordering",
        "Focus mode for single-task concentration",
        "Recurring task templates for daily habits",
        "Progress tracking with daily completion streaks",
        "Light/dark mode with smooth transitions",
        "Local-first storage with optional cloud sync",
      ],
      results: [
        { metric: "< 1s", label: "Initial load time" },
        { metric: "4.8/5", label: "User satisfaction rating" },
        { metric: "92%", label: "Daily active retention" },
        { metric: "Zero", label: "Learning curve" },
      ],
      techStack: ["React", "Tailwind CSS", "DnD Kit", "LocalStorage", "Vite"],
    },
  },
  {
    title: "Bulk SMS Sender - SMS Campaign Tool",
    description: "Tool for sending bulk SMS campaigns with contact management and delivery tracking system.",
    image: "/demo.jpg",
    tags: [
      { label: "Node.js", color: "primary" },
      { label: "API", color: "secondary" },
    ],
    caseStudy: {
      overview:
        "Bulk SMS Sender is a campaign management tool that enables businesses to send targeted SMS messages to thousands of contacts with delivery tracking, scheduling, and analytics. Built as a backend-heavy Node.js application with a clean web interface for campaign management.",
      challenge:
        "The client, a marketing agency, was using multiple third-party SMS services with no unified dashboard. They couldn't track delivery rates across providers, had no way to schedule campaigns, and contact management was scattered across CSV files. They needed a single tool to manage everything.",
      solution:
        "We built a unified SMS campaign platform that integrates with multiple SMS gateway APIs (Twilio, MessageBird) through a provider-agnostic abstraction layer. A queue-based architecture handles rate limiting and retries. The dashboard provides real-time delivery tracking, contact segmentation, and campaign analytics.",
      features: [
        "Multi-provider SMS gateway integration",
        "Contact management with CSV import and segmentation",
        "Campaign scheduling with timezone support",
        "Real-time delivery tracking and status updates",
        "Template management with dynamic variable injection",
        "Detailed analytics with delivery rate and cost reports",
      ],
      results: [
        { metric: "50K+", label: "Messages sent per campaign" },
        { metric: "98%", label: "Delivery success rate" },
        { metric: "60%", label: "Cost reduction vs. previous tools" },
        { metric: "< 5min", label: "Campaign setup time" },
      ],
      techStack: ["Node.js", "Express", "Bull Queue", "Redis", "PostgreSQL", "Twilio API"],
    },
  },
  {
    title: "Personal Manager - Personal Productivity App",
    description: "Personal productivity app to manage tasks, notes, and daily activities in one place.",
    image: "/demo.jpg",
    tags: [
      { label: "Next.js", color: "primary" },
      { label: "TypeScript", color: "secondary" },
    ],
    caseStudy: {
      overview:
        "Personal Manager is an all-in-one productivity hub that combines task management, note-taking, habit tracking, and daily journaling into a single Next.js application. Designed as a personal operating system for people who want to organize their life without juggling five different apps.",
      challenge:
        "Users were juggling Notion for notes, Todoist for tasks, a habit tracker app, and a separate journal — all disconnected. There was no single view of their day, no cross-referencing between notes and tasks, and switching between apps caused constant context-switching overhead.",
      solution:
        "We built a unified dashboard where tasks, notes, habits, and journal entries coexist. Everything is interlinked — a note can reference a task, a journal entry can reflect on habits completed. The Next.js App Router provides fast navigation between modules, and TypeScript ensures type safety across the entire full-stack codebase.",
      features: [
        "Unified daily dashboard with tasks, notes, and habits",
        "Rich text note editor with markdown support",
        "Habit tracker with streaks and analytics",
        "Daily journal with mood tracking",
        "Cross-module linking between notes, tasks, and entries",
        "Full-text search across all content types",
      ],
      results: [
        { metric: "1 app", label: "Replaced 4 separate tools" },
        { metric: "30%", label: "More tasks completed daily" },
        { metric: "100%", label: "Type-safe codebase" },
        { metric: "< 200ms", label: "Page navigation speed" },
      ],
      techStack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS", "TipTap"],
    },
  },
  {
    title: "Streamit - Video Streaming Platform",
    description: "Video streaming platform with content browsing, playback system, and modern UI experience.",
    image: "/demo.jpg",
    tags: [
      { label: "React", color: "primary" },
      { label: "Firebase", color: "secondary" },
    ],
    caseStudy: {
      overview:
        "Streamit is a video streaming platform inspired by modern OTT services, featuring content discovery, adaptive playback, user profiles, and watchlists. Built with React and Firebase for a serverless, scalable architecture that handles media-heavy workloads efficiently.",
      challenge:
        "The client wanted to launch a niche video platform for educational and entertainment content targeted at a specific regional audience. Off-the-shelf solutions like Vimeo OTT were too expensive and lacked customization. They needed a custom-built platform that could scale while keeping costs predictable.",
      solution:
        "We built a React-based streaming frontend with lazy-loaded content grids, infinite scroll, and adaptive video playback via HLS. Firebase handles authentication, real-time database for user interactions, and Cloud Storage for media assets. Cloud Functions manage video processing pipelines and recommendation logic.",
      features: [
        "Adaptive bitrate video streaming (HLS)",
        "Content discovery with categories and search",
        "User profiles with watchlists and watch history",
        "Continue watching feature with progress sync",
        "Content recommendation engine",
        "Admin panel for content upload and management",
      ],
      results: [
        { metric: "10K+", label: "Active monthly users" },
        { metric: "99.5%", label: "Stream uptime" },
        { metric: "< 2s", label: "Video start time" },
        { metric: "70%", label: "Lower cost vs. OTT platforms" },
      ],
      techStack: ["React", "Firebase", "Cloud Functions", "HLS.js", "Algolia", "Tailwind CSS"],
    },
  },
];

export const techCategories = [
  { title: "Frontend", color: "primary", borderColor: "border-l-primary", techs: "Next.js, React, TypeScript, Tailwind, Shadcn, Ant Design" },
  { title: "Backend", color: "secondary", borderColor: "border-l-secondary", techs: "Rust, Node.js, Express, Redis, PostgreSQL, SQL" },
  { title: "Cloud & DevOps", color: "indigo-400", borderColor: "border-l-indigo-500", techs: "AWS, Docker, Kubernetes, Terraform, CI/CD" },
  { title: "Design", color: "text-primary", borderColor: "border-l-text-primary", techs: "Figma, Adobe Suite, Prototyping, Design Systems" },
];

export const techMarqueeRow1 = [
  { name: "React", color: "text-text-primary" },
  { name: "Next.js", color: "text-text-primary" },
  { name: "TypeScript", color: "text-primary" },
  { name: "Node.js", color: "text-text-primary" },
  { name: "Python", color: "text-secondary" },
  { name: "AWS", color: "text-text-primary" },
  { name: "Docker", color: "text-text-primary" },
  { name: "GraphQL", color: "text-text-primary" },
];

export const techMarqueeRow2 = [
  { name: "Kubernetes", color: "text-text-primary" },
  { name: "Figma", color: "text-indigo-400" },
  { name: "PostgreSQL", color: "text-text-primary" },
  { name: "Redis", color: "text-secondary" },
  { name: "Tailwind CSS", color: "text-text-primary" },
  { name: "Terraform", color: "text-primary" },
  { name: "Framer Motion", color: "text-text-primary" },
  { name: "Rust", color: "text-text-primary" },
];

export const whyChooseUs = [
  { icon: "verified", title: "Uncompromised Quality", description: "Every line of code is peer-reviewed and tested for maximum stability." },
  { icon: "schedule", title: "On-Time Delivery", description: "Our agile process ensures we hit milestones with surgical precision." },
  { icon: "visibility", title: "Total Transparency", description: "Real-time dashboards show you exactly where your project stands." },
  { icon: "support_agent", title: "Liaison Support", description: "24/7 technical assistance for post-launch peace of mind." },
];

export const testimonials = [
  {
    quote: "Primelynx transformed our outdated platform into a powerhouse of productivity. Their attention to detail is unmatched.",
    name: "David Chen",
    role: "CTO, Flux Media",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuB4h21ttTLgd7k6Uy7v3cuL1bsP67OcZQvwVcL2tmfswzIrrkjFDjAGvnT_iOa3ahtGjSGgFe2w0wjhaTiwEneIoJR6tExxlKdyxSqrR3G4pbRIc-VgQWhX1sHCdGKtxqPdxqLTe-dSRjaFYfkE-oipI99RGxqddSGdLhraDcoKikoU5QFCwOssLgi0NfK9lr5AEFQnvgQD375Gk9fbLHZqMGl0ExP0xJMpCscbfF9IUm9ThRKE6ykAjO5oZu3uDxRrsJEa8nOIqsI",
  },
  {
    quote: "Working with them was a seamless experience. They understood our complex requirements from day one.",
    name: "Sarah Jenkins",
    role: "Product Lead, NeoSoft",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCSlSoS8Qo_mlwIsLF89ap_BpoO-KZ3tZIrsuicF3hP5WXlXlT-fuaXq-gXLnsOpnDMpstY9cDAZVDUMCcXpMr-t16aZDpHvVBu7XQXIb0yWn1CccDFjXqeRf-30L50ZcDGemUbOEVkz09a6PmI8Ca5tlGO5ijnxE396YOZcgeJ97cqXur1dQik7ghOC_Hfh3EWYPRJG8n_O7nvsgmtaI-Z7XlUqnMTJFKSf_D2xTx26g6WEvTT2l4uR-0CA5yqoOxZ5Zm6KCF-Js8",
  },
  {
    quote: "Their engineering standards are incredibly high. The cloud infrastructure handles massive scale effortlessly.",
    name: "Marcus Thorne",
    role: "VP Engineering, Aeris",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCryYVDEGxVnV-veaydegN6bgPMfjfcBlfKXICLGJ_m7XWqdbE_F1zLHd2MeS7rnRd2gcBa52ilQZABJaX_QnMnJ-gcylx-4cG_wDfbTdySPwxe1RL7sUi5s48lNnIEeDTDB8X0duGg6Xu3KAWmil7ehooT4R4xSCYMxVWfua_w1hGZKXwhS3zEmFLo0J8-TzGN7jNz9wDoEoFZDjLgkhnTxfd5nD1f5AeqWpjSQDpwDaIO7H8FswZxin0dm3YTaLXO-vc3j8pi1dA",
  },
];

export const footerLinks = {
  explore: [
    { label: "Portfolio", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "About Us", href: "#about" },
    { label: "Careers", href: "#" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
    { label: "Support", href: "#" },
  ],
};

export const socialLinks = [
  { label: "Twitter", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "GitHub", href: "#" },
  { label: "Dribbble", href: "#" },
];
