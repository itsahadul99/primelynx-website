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
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
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
    title: "Aeris Dashboard",
    description: "Real-time cloud infrastructure monitoring platform for enterprise-scale logistics.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBhjJOZluIGhYqq0f-vroDyrng1Oszt8GObOAJJw3l5pYyGGcQBQLNYMgyogbvE6o-75F3lGQTql5eAJQfDMODsq-53QVLeiOR_tCuHlt3Eo55qTTHzmetJHoHauiTxxwne0KRdp58Vtg99kGpNI2RimGNsGzLO9eqR8SBWkg2XYujP5uJXgBZbVPf6-qrbgMyacHUuWNiCoSJdrzlEgAPM33Z0ARpggMMp4I9EuZ1CdyjBIjEoYgMLXd8jluQsri74ePq6GZ0kE40",
    tags: [
      { label: "Next.js", color: "primary" },
      { label: "TypeScript", color: "secondary" },
    ],
  },
  {
    title: "Flux Wallet",
    description: "A secure, high-performance crypto wallet focusing on seamless user experience.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCyb8yOsOqfXxA86qidQlYJoBG2Btjht2eWd0iQPpmZjYP3XoW3nLWWPQNaLAKJhLrRFitwOXl3SSDNwbSD24itAX0F_c1mV8kDBxnVMwe0dZ1-8sxQ41bPiy7mEdRLdJ9nQJkqED2xjPeFN6e9vfYR0qQ7ps5AoornZ5ks_oZ8KmFaD84GevWJX2Sr9h00htIYRzbV1iufL-CneSsQUI7a6yYHBT29DUrgMDcbBMfwEbUMQXgh5VEAcDQ3PF2ExUuxZHt4qfG3tMo",
    tags: [
      { label: "React Native", color: "indigo" },
      { label: "Node.js", color: "secondary" },
    ],
  },
  {
    title: "Nexus Core",
    description: "Backend infrastructure overhaul for a global media conglomerate.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAkyXQw9sWS8A4WGkaBAsR6oA69UJe2V6Wza1WmuWbkxzFl2W0peeC0V3Bxmv_ngMHFnMt5YHtMpQMiANCA6V9OPNnn8aGayo9CIdnwzj41gqBVvIrRbwWc1bFTRwoJDbst8kd6DCDyHnSFn8JnrlVQ9l_Fc9HdxRhY-_jkhEE-o6EWRpzK0YFOHOvbQPhCug_I4bZOaT6fFb3Vogm0wDRTmpk0tGpzdxhCqdsiuTwqp8UnwShO1pUp2VjOLBXNVDCrINQFBXS16ro",
    tags: [
      { label: "AWS", color: "primary" },
      { label: "Docker", color: "secondary" },
    ],
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
