"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MaterialIcon } from "@/components/ui";
import { navLinks, siteConfig } from "@/lib/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    if (!isHome) return;

    const hashLinks = navLinks.filter((link) => link.href.startsWith("#"));
    const sectionIds = hashLinks.map((link) => link.href.replace("#", ""));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [isHome]);

  const isActive = (href: string) => {
    if (href.startsWith("#")) {
      return isHome && activeSection === href;
    }
    return pathname === href;
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#")) {
      setMobileOpen(false);
      return;
    }
    if (!isHome) {
      setMobileOpen(false);
      window.location.href = `/${href}`;
      return;
    }
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-white/5">
      <div className="flex justify-between items-center px-8 py-5 max-w-7xl mx-auto">
        <a href="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="Logo" className="w-12 h-12" />
          <span className="text-xl font-extrabold tracking-tighter text-text-primary">
            {siteConfig.name}
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            const className = `transition-colors ${
              active
                ? "text-secondary font-semibold hover:text-secondary/80"
                : "text-text-secondary hover:text-text-primary"
            }`;

            return link.href.startsWith("#") ? (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={className}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className={className}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <a href="#contact">
          <button className="hidden md:block bg-primary text-white px-7 py-2.5 cursor-pointer rounded-full font-bold hover:bg-primary/90 transition-all active:scale-95">
            Get Started
          </button>
        </a>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-text-primary"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <MaterialIcon icon={mobileOpen ? "close" : "menu"} className="text-2xl" />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-white/5 overflow-hidden"
          >
            <div className="flex flex-col gap-4 px-8 py-6">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                const className = `text-lg ${active ? "text-secondary font-semibold" : "text-text-secondary"}`;

                return link.href.startsWith("#") ? (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    className={className}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={className}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <button className="bg-primary text-white px-7 py-2.5 rounded-full font-bold mt-2 active:scale-95">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
