"use client";

import { MaterialIcon } from "@/components/ui";
import { siteConfig, footerLinks } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-background pt-24 font-body text-sm w-full border-t border-white/5">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-16 px-8 pb-20 max-w-7xl mx-auto">
        {/* Brand */}
        <div className="space-y-8">
          <div className="flex items-center gap-2">
            <MaterialIcon icon="hexagon" className="text-primary text-2xl" filled />
            <span className="text-xl font-black tracking-tighter text-text-primary">
              {siteConfig.name}
            </span>
          </div>
          <p className="text-text-secondary leading-relaxed max-w-xs font-medium">
            Engineering digital excellence through cutting-edge design and development.
          </p>
        </div>

        {/* Explore */}
        <div>
          <h6 className="text-text-primary font-black uppercase tracking-widest text-xs mb-10">
            Explore
          </h6>
          <ul className="space-y-5 text-text-secondary font-medium">
            {footerLinks.explore.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="hover:text-primary transition-all">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h6 className="text-text-primary font-black uppercase tracking-widest text-xs mb-10">
            Contact Info
          </h6>
          <ul className="space-y-5 text-text-secondary font-medium">
            <li className="flex items-center gap-4">
              <MaterialIcon icon="mail" className="text-primary text-lg" />
              {siteConfig.email}
            </li>
            <li className="flex items-center gap-4">
              <MaterialIcon icon="call" className="text-primary text-lg" />
              {siteConfig.phone}
            </li>
            <li className="flex items-start gap-4 leading-relaxed">
              <MaterialIcon icon="location_on" className="text-primary text-lg" />
              <span dangerouslySetInnerHTML={{ __html: siteConfig.address.replace(", ", ",<br/>") }} />
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h6 className="text-text-primary font-black uppercase tracking-widest text-xs mb-10">
            Legal
          </h6>
          <ul className="space-y-5 text-text-secondary font-medium">
            {footerLinks.legal.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="hover:text-primary transition-all">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5 px-8 py-10 text-center text-text-secondary/40 text-xs font-bold tracking-widest">
        <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
