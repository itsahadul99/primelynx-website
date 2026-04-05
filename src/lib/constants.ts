export const siteConfig = {
  name: "Primelynx",
  title: "Primelynx | Connecting Ideas, Building the Future",
  description:
    "We design and engineer high-performance digital ecosystems that empower brands to redefine their market presence.",
  url: "https://primelynx.tech",
  email: "primelynx.bd@gmail.com",
  phone: "(718)869-0880",
  address: "US Address: 421 Grant Ave, Brooklyn, NY 11208",
  bdAddress: "BD Address: 149/A, Airport Road, Baitush Saraf-Complex (4th Floor), Farmgate, Tejgaon, Dhaka."
};

export const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
  { label: "About Us", href: "/about-us" },
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
    name: "Sarwar Hossain",
    role: "Founder & CEO",
    image: "/team/ceo.jpeg",
    skills: ["Business Strategy", "Product Vision", "Client Relations", "Team Leadership"],
    social: {
      github: "#",
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Shahadat Hossain",
    role: "Project Manager",
    image: "/team/shahadat_pm.jpeg",
    skills: ["Agile Methodologies", "Scrum Mastery", "Stakeholder Communication", "Risk Management"],
    social: {
      github: "#",
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Inthisar Ul Islam",
    role: "Backend Developer",
    image: "/team/inthishar_backend.jpeg",
    skills: ["Rust", "Axum", "Dart", "PostgreSQL", "SQLite"],
    social: {
      github: "#",
      linkedin: "#",
      twitter: "#",
    },
  },

  {
    name: "Naushad Hasan",
    role: "Dev Ops Engineer",
    image: "/team/naushad_devops.jpeg",
    skills: ["Docker", "Kubernetes", "CI/CD", "AWS"],
    social: {
      github: "#",
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Ahsan Ullah Mubin",
    role: "Backend Developer",
    image: "/team/ahsan_backend.jpeg",
    skills: ["Node.js", "Express", "PHP", "PostgreSQL", "SQLite"],
    social: {
      github: "#",
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Ahadul Islam",
    role: "Front End Developer",
    image: "/team/ahadul_frontend.jpeg",
    skills: ["Next.js", "React", "TypeScript", "Tailwind", "Shadcn", "Ant Design", "Figma"],
    social: {
      github: "https://github.com/itsahadul99",
      linkedin: "https://www.linkedin.com/in/itisahadul/",
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
    description: "A full-stack web platform for charitable organizations to manage members, collect payments, run governance, and handle operations — all with role-based access control.",
    image: "/demo.jpg",
    tags: [
      { label: "Next.js", color: "primary" },
      { label: "PostgreSQL", color: "secondary" },
    ],
    caseStudy: {
      overview:
        "CWA (Companiganj Welfare Association, Inc.) is a full-stack web application built with Next.js and Node.js, designed to help charitable welfare organizations manage members, collect fees and donations, process payments, run governance structures, and handle operational workflows — all from a single platform with role-based access control.",
      challenge:
        "The organization was managing members across departments using spreadsheets, email chains, and paper forms. Fee collection was manual, governance records were scattered, and there was no visibility into financial or operational metrics. Onboarding new members involved multi-day manual processes with no audit trail.",
      solution:
        "We built a modular platform with ~250 REST API endpoints across 18 feature modules. The Next.js App Router frontend uses Server Actions and TanStack Query, while the Express.js backend follows a module-driven MVC pattern with 50 Prisma models. Stripe handles payments, BullMQ + Redis powers background jobs, and role-based access is enforced at both middleware and UI levels.",
      features: [
        "Member management with auto-generated IDs and KYC documents",
        "Stripe-powered payments with QR code receipts and automated reminders",
        "Governance & board management with committee records",
        "BullMQ background jobs for delinquent payment detection",
        "Constitution & document management with multi-language support",
        "Role-based access control: Super Admin, Admin, Operator, User",
      ],
      results: [
        { metric: "250+", label: "REST API endpoints" },
        { metric: "50", label: "Prisma database models" },
        { metric: "18", label: "Feature modules" },
        { metric: "99.9%", label: "System uptime" },
      ],
      techStack: ["Next.js", "React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Prisma", "Stripe", "Redis", "BullMQ", "Tailwind CSS", "Ant Design"],
    },
  },
  {
    title: "Qurbani Market - E-commerce Platform",
    description: "A full-stack livestock marketplace with location-based search, media-rich listings, and seamless purchase experience built for the Qurbani season.",
    image: "/demo.jpg",
    tags: [
      { label: "Next.js", color: "primary" },
      { label: "PostgreSQL", color: "secondary" },
    ],
    caseStudy: {
      overview:
        "Qurbani Market is a full-stack livestock marketplace built with Next.js and Node.js, designed for the Qurbani (Islamic animal sacrifice) season — connecting buyers and sellers of cattle, goats, sheep, and more with location-based search, media-rich listings, and a seamless purchase experience.",
      challenge:
        "Traditional Qurbani animal purchasing involves visiting multiple farms, negotiating prices in person, and dealing with unreliable delivery. Buyers had no way to compare options by location, verify animal quality through media, or make secure transactions. Sellers lacked digital presence and struggled to reach customers beyond their local area.",
      solution:
        "We built a marketplace with PostGIS-powered geo-spatial filtering for location-based search, Cloudinary-backed media pipelines for image/video uploads, and a custom Prisma query builder for complex multi-parameter filtering. NextAuth v5 handles OAuth (Google/Facebook), while the backend issues its own JWT for stateless authentication on both sides.",
      features: [
        "PostGIS geo-spatial search with radius-based proximity queries",
        "Advanced filtering by type, breed, weight, price range & location",
        "Cloudinary media pipeline with chunked video streaming",
        "OAuth social login (Google & Facebook) with JWT bridge",
        "Persistent cart & wishlist with Zustand state management",
        "Seller portal with inventory management and verification badges",
      ],
      results: [
        { metric: "6", label: "Animal types supported" },
        { metric: "12+", label: "Filter parameters" },
        { metric: "Real-time", label: "Geo-spatial search" },
        { metric: "Zero-disk", label: "Video upload via streaming" },
      ],
      techStack: ["Next.js", "React", "TypeScript", "Node.js", "Express", "PostgreSQL", "PostGIS", "Prisma", "Cloudinary", "NextAuth", "Zustand", "Tailwind CSS"],
    },
  },
  {
    title: "Happy Restaurant - Restaurant Management",
    description: "A multi-branch restaurant management system with Flutter staff and customer apps, real-time kitchen display, and a high-performance Rust backend.",
    image: "/demo.jpg",
    tags: [
      { label: "Flutter", color: "indigo" },
      { label: "Rust", color: "secondary" },
    ],
    caseStudy: {
      overview:
        "Happy Restaurant is a full-stack multi-branch restaurant management system built with Flutter (two separate apps) and Rust (Axum backend), designed to give restaurant owners complete visibility and control across all branches — from orders and inventory to staff scheduling and customer loyalty.",
      challenge:
        "The restaurant relied on handwritten order slips causing mistakes, delayed kitchen communication, and billing errors. With multiple branches, the owner had no unified view of sales, inventory, or staff across locations. Customer engagement was non-existent — no loyalty program, no digital ordering.",
      solution:
        "We built two separate Flutter apps — a Staff App for POS, kitchen display, and management, and a Customer App for menu browsing, QR code ordering, and loyalty points. The Rust backend delivers a RESTful + WebSocket API with multi-tenant architecture, enforcing org_id scoping at every query level. Orders broadcast instantly to kitchen displays via Tokio broadcast channels.",
      features: [
        "WebSocket-powered real-time kitchen display system",
        "Multi-branch dashboard with sales, staff & inventory overview",
        "POS & order management for dine-in, takeaway, and delivery",
        "Customer app with QR code table ordering and loyalty points",
        "Role-based access across 6 roles (Owner to Customer)",
        "Centralized procurement and cross-branch stock distribution",
      ],
      results: [
        { metric: "6", label: "User roles supported" },
        { metric: "30+", label: "Database tables" },
        { metric: "Real-time", label: "WebSocket order sync" },
        { metric: "Multi-tenant", label: "Architecture" },
      ],
      techStack: ["Flutter", "Dart", "Rust", "Axum", "PostgreSQL", "SQLx", "WebSocket", "Tokio", "Riverpod", "JWT"],
    },
  },
  {
    title: "My Inventory - ERP System",
    description: "A full-stack ERP system with Flutter apps and a Rust backend for managing inventory, sales, finance, HR, and POS across multiple business locations.",
    image: "/demo.jpg",
    tags: [
      { label: "Flutter", color: "primary" },
      { label: "Rust", color: "secondary" },
    ],
    caseStudy: {
      overview:
        "My Inventory is a full-stack Enterprise Resource Planning (ERP) system built with Flutter and Rust, designed to help retail businesses manage inventory, sales, finances, and staff — all from a single platform with multi-tenant support and an offline-capable POS terminal.",
      challenge:
        "The client was a growing retail business managing products across multiple locations. Stock counts were done manually, sales processing was slow, financial records were disconnected from sales data, and there was no unified system for HR and payroll. They needed an all-in-one platform that worked even without internet at the point of sale.",
      solution:
        "We built two Flutter apps — an ERP application for full business management and an offline-first POS terminal with barcode scanning and thermal receipt printing. The Rust backend (Axum) delivers 155+ API endpoints with multi-tenant isolation enforced at the database level. Every sale automatically generates double-entry accounting journal entries.",
      features: [
        "Offline-first POS terminal with barcode scanning & receipt printing",
        "Double-entry bookkeeping with automatic journal entries on sales",
        "Multi-tenant architecture with complete data isolation",
        "Product catalog with auto-generated SKUs and batch tracking",
        "HR module with attendance, leave requests & payroll processing",
        "Promotions engine with coupon codes and discount rules",
      ],
      results: [
        { metric: "155+", label: "API endpoints" },
        { metric: "Multi-tenant", label: "Data isolation" },
        { metric: "Offline-first", label: "POS capability" },
        { metric: "Auto", label: "Database migrations" },
      ],
      techStack: ["Flutter", "Dart", "Rust", "Axum", "PostgreSQL", "SQLx", "Riverpod", "Hive", "FL Chart", "Tokio", "JWT"],
    },
  },
  {
    title: "Todo Daily - Task Management App",
    description: "A cross-platform task manager available as a React PWA and Flutter mobile app, with progress tracking, milestone celebrations, and offline-first support.",
    image: "/demo.jpg",
    tags: [
      { label: "React", color: "primary" },
      { label: "Flutter", color: "indigo" },
    ],
    caseStudy: {
      overview:
        "Todo Daily is a cross-platform task management app built in two versions — a React PWA for the web and a Flutter app for mobile/desktop. Both share the same feature set and glassmorphism design language, including progress tracking, milestone celebrations, and motivational quotes, implemented with platform-native technologies.",
      challenge:
        "Most task management apps are overloaded with features — projects, tags, subtasks, integrations — which creates friction for users who just want to plan and track their daily tasks. The goal was to build something that loads instantly on any platform, feels intuitive, and helps users focus on what matters today.",
      solution:
        "We built two platform-native apps: a React PWA with Redux Toolkit and Workbox for offline support, and a Flutter app with Riverpod and Hive for binary-fast local storage. Both feature real-time duplicate detection, milestone celebrations at 50% and 100% completion, and personalized time-of-day greetings.",
      features: [
        "Cross-platform: React PWA (web) + Flutter (mobile/desktop)",
        "Progress tracking with completion bar and milestone alerts",
        "Glassmorphism UI with dark mode and frosted glass cards",
        "Offline-first: Workbox (web) and Hive binary storage (mobile)",
        "Smart duplicate detection prevents adding the same task twice",
        "Personalized greeting with live clock and motivational quotes",
      ],
      results: [
        { metric: "2", label: "Platform-native versions" },
        { metric: "6+", label: "Platforms supported" },
        { metric: "< 1s", label: "Initial load time" },
        { metric: "Zero", label: "Backend dependency" },
      ],
      techStack: ["React", "TypeScript", "Redux Toolkit", "Flutter", "Dart", "Riverpod", "Hive", "Tailwind CSS", "Vite", "Workbox"],
    },
  },
  {
    title: "SMS All Contact - Bulk SMS Sender",
    description: "A Flutter mobile app for sending bulk SMS to multiple contacts at once with real-time progress, auto-retry, and all data kept strictly on-device.",
    image: "/demo.jpg",
    tags: [
      { label: "Flutter", color: "primary" },
      { label: "Dart", color: "secondary" },
    ],
    caseStudy: {
      overview:
        "SMS All Contact is a Flutter mobile app for sending SMS messages to multiple contacts at once. Select recipients from device contacts or paste numbers manually — the app handles permission checks, delivery retries, and progress tracking while keeping all data strictly on-device with no backend.",
      challenge:
        "Users needed a simple way to send the same message to dozens or hundreds of contacts without manually texting each one. Existing solutions required cloud services, stored user data externally, or lacked retry logic for failed messages. A privacy-first, on-device-only solution was needed.",
      solution:
        "We built a provider-based Flutter app with Riverpod where each data domain (contacts, messages, sending state, history, templates) has a dedicated notifier. The app uses the telephony API on Android for direct SMS sending with SIM selection, and launches the native Messages app on iOS. Auto-retry handles failed messages up to 3 times.",
      features: [
        "Bulk SMS sending with contact picker or manual number entry",
        "Real-time progress tracking with live sent/failed counter",
        "Auto-retry up to 3 times for failed messages",
        "Message templates for frequently sent messages",
        "Dual-SIM support with SIM card selection (Android)",
        "SMS history with full log and resend functionality",
      ],
      results: [
        { metric: "100%", label: "On-device data privacy" },
        { metric: "3x", label: "Auto-retry on failure" },
        { metric: "Dual-SIM", label: "Android support" },
        { metric: "Cross-platform", label: "Android + iOS" },
      ],
      techStack: ["Flutter", "Dart", "Riverpod", "telephony", "flutter_contacts", "SharedPreferences"],
    },
  },
  {
    title: "Personal Manager - Finance App",
    description: "A Flutter + Rust personal finance app for tracking expenses, managing accounts, planning budgets, and syncing data with offline-first support.",
    image: "/demo.jpg",
    tags: [
      { label: "Flutter", color: "primary" },
      { label: "Rust", color: "secondary" },
    ],
    caseStudy: {
      overview:
        "Personal Manager is a full-stack personal finance management application built with Flutter (frontend) and Rust (backend), designed to help users track expenses, manage multiple account types, plan budgets, and gain financial insights — all with offline-first support and automatic cloud sync.",
      challenge:
        "Users were juggling multiple apps for expense tracking, budgeting, and savings goals — all disconnected. There was no single view of finances across wallet, bank, and credit card accounts. Manual entry was tedious, recurring transactions required remembering each time, and no backup system existed for financial data.",
      solution:
        "We built a Flutter app with clean MVVM architecture using Riverpod, a dedicated service layer for each domain, and 20+ screens. Data is always written to local SQLite first, then synced to the Rust backend when connected. The Axum backend uses compile-time verified SQL queries via SQLx, ensuring zero runtime database errors.",
      features: [
        "Multi-account management: wallet, bank, credit card, savings & more",
        "Transaction tracking with 15+ categories for income & expenses",
        "Budget planning with real-time spending comparison",
        "Debt & lending tracker with settlement status",
        "Offline-first sync with automatic cloud backup",
        "PDF and Excel report generation and sharing",
      ],
      results: [
        { metric: "20+", label: "App screens" },
        { metric: "15+", label: "Transaction categories" },
        { metric: "Offline-first", label: "Data architecture" },
        { metric: "Compile-time", label: "SQL validation" },
      ],
      techStack: ["Flutter", "Dart", "Rust", "Axum", "SQLite", "SQLx", "Riverpod", "FL Chart", "Tokio", "JWT"],
    },
  },
  {
    title: "Streamit - Video Streaming Platform",
    description: "A Netflix-style Android TV streaming app built with Flutter, supporting movies, live TV, multi-quality playback, and D-pad navigation.",
    image: "/demo.jpg",
    tags: [
      { label: "Flutter", color: "primary" },
      { label: "Firebase", color: "secondary" },
    ],
    caseStudy: {
      overview:
        "Streamit is a feature-rich Android TV streaming application built with Flutter, delivering a Netflix-style content experience optimized for 10-foot viewing and D-pad navigation. It connects to a Laravel backend to provide on-demand movies, TV shows, short-form videos, and live TV channels.",
      challenge:
        "The client wanted to launch a streaming platform for Android TV with full remote control support. Off-the-shelf solutions lacked TV-specific UX, D-pad navigation, and multi-quality playback. They needed a custom app with multi-profile support, parental controls, and multiple payment gateway integrations — all optimized for the living room experience.",
      solution:
        "We built a Flutter-based TV app with 26 screen modules, a custom video player controller handling all playback logic including HLS adaptive bitrate, multi-language subtitles, and Picture-in-Picture. Firebase handles authentication (email, OTP, QR code, Google, Apple) and push notifications. Full LEANBACK_LAUNCHER compliance ensures Android TV certification.",
      features: [
        "Multi-quality video playback (480p–8K) with HLS adaptive bitrate",
        "Full D-pad/remote control navigation with audio feedback",
        "Multi-profile support with parental controls (18+ PIN gate)",
        "5-language localization including Arabic RTL support",
        "Multiple payment gateways: Stripe, Razorpay, PayPal & more",
        "QR code scan-to-login for TV-specific authentication",
      ],
      results: [
        { metric: "26", label: "Screen modules" },
        { metric: "5", label: "Languages supported" },
        { metric: "5+", label: "Payment gateways" },
        { metric: "8K", label: "Max playback quality" },
      ],
      techStack: ["Flutter", "Dart", "Laravel", "Firebase", "GetX", "HLS", "Stripe", "Razorpay", "PayPal"],
    },
  },
];

export const techCategories = [
  { title: "Frontend", color: "primary", borderColor: "border-l-primary", techs: "Next.js, React, TypeScript, Tailwind, Shadcn, Ant Design" },
  { title: "Mobile", color: "indigo-400", borderColor: "border-l-indigo-500", techs: "Flutter, Dart, Riverpod, GetX, Hive, React Native" },
  { title: "Backend", color: "secondary", borderColor: "border-l-secondary", techs: "Rust, Axum, Node.js, Express, Laravel, PostgreSQL, SQLite" },
  { title: "Tools & Services", color: "text-primary", borderColor: "border-l-text-primary", techs: "Stripe, Firebase, Cloudinary, Redis, BullMQ, Prisma" },
];

export const techMarqueeRow1 = [
  { name: "React", color: "text-text-primary" },
  { name: "Next.js", color: "text-text-primary" },
  { name: "TypeScript", color: "text-primary" },
  { name: "Flutter", color: "text-indigo-400" },
  { name: "Dart", color: "text-text-primary" },
  { name: "Rust", color: "text-secondary" },
  { name: "Node.js", color: "text-text-primary" },
  { name: "PostgreSQL", color: "text-text-primary" },
];

export const techMarqueeRow2 = [
  { name: "Axum", color: "text-secondary" },
  { name: "Riverpod", color: "text-indigo-400" },
  { name: "Prisma", color: "text-text-primary" },
  { name: "Redis", color: "text-secondary" },
  { name: "Tailwind CSS", color: "text-text-primary" },
  { name: "Firebase", color: "text-primary" },
  { name: "Stripe", color: "text-text-primary" },
  { name: "SQLite", color: "text-text-primary" },
];

export const whyChooseUs = [
  { icon: "verified", title: "Uncompromised Quality", description: "Every line of code is peer-reviewed and tested for maximum stability." },
  { icon: "schedule", title: "On-Time Delivery", description: "Our agile process ensures we hit milestones with surgical precision." },
  { icon: "visibility", title: "Total Transparency", description: "Real-time dashboards show you exactly where your project stands." },
  { icon: "support_agent", title: "Liaison Support", description: "24/7 technical assistance for post-launch peace of mind." },
];

export const testimonials = [
  {
    quote: "PrimeLynx truly understood our mission and delivered a powerful, user-friendly application that transformed how we serve our community.",
    name: "Mohammad Siddique",
    role: "President, CWA Inc. [USA]",
    avatar: "default.jpg",
  },
  {
    quote: "We don’t win by outspending competitors—we win by outthinking them, out-caring them, and delivering solutions that actually solve real problems for real people.",
    name: " Mohammad Sarwar",
    role: "Founder & CEO, Primelynx",
    avatar: "team/ceo.jpeg",
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
