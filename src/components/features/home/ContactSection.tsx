"use client";

import { socialLinks } from "@/lib/constants";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useRef, useState, type FormEvent } from "react";
import { toast, Toaster } from "sonner";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

export default function ContactSection() {
  const [isSending, setIsSending] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLInputElement>(null); // ✅ Ref for clearing input

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      toast.error("Email service not configured. Please contact support.");
      console.error("Email service not configured. Please contact support.");
      return;
    }

    setIsSending(true);

    try {
      const result = await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        e.currentTarget,
        { publicKey: PUBLIC_KEY }
      );

      console.log("EmailJS success:", result);
      toast.success("Thanks! We'll be in touch shortly.");
      
      // ✅ Clear the input after successful send
      if (inputRef.current) {
        inputRef.current.value = "";
      }
      formRef.current?.reset(); // Fallback reset
      
    } catch (error) {
      console.error("EmailJS error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSending(false);
    }
  }

  return (
    <>
      <Toaster 
        position="top-center" 
        richColors 
        toastOptions={{
          style: {
            background: "#1a1a2e",
            color: "#fff",
            border: "1px solid rgba(255,255,255,0.1)",
          },
          duration: 4000,
        }}
      />
      
      <section id="contact" className="py-20 md:py-40 px-8 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-10 leading-[1.1]">
            Ready to build something great?
          </h2>
          <p className="text-text-secondary text-xl mb-16 leading-relaxed">
            Let&apos;s discuss how we can turn your vision into a market-leading digital product.
          </p>

          <form
            ref={formRef}
            className="flex flex-col gap-5 max-w-xl mx-auto mb-6"
            onSubmit={handleSubmit}
          >
            <div className="relative group">
              <input
                ref={inputRef} // ✅ Attach ref for clearing
                name="user_email"
                type="email"
                placeholder="Enter your email address"
                required
                disabled={isSending}
                className="w-full bg-surface-elevated/95 border border-white/10 rounded-2xl px-8 py-6 focus:ring-2 focus:ring-primary text-text-primary placeholder:text-text-secondary/55 outline-none transition-all disabled:opacity-60"
              />
              <button
                type="submit"
                disabled={isSending}
                className="absolute right-3 top-3 bottom-3 px-8 bg-linear-to-r from-primary to-secondary text-white rounded-xl font-black hover:opacity-95 transition-all active:scale-95 disabled:opacity-60 disabled:active:scale-100"
              >
                {isSending ? "Sending…" : "Get Started"}
              </button>
            </div>
          </form>

          <div className="flex justify-center gap-12 text-text-secondary font-black tracking-widest text-sm uppercase mt-10">
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} className="hover:text-primary transition-colors">
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
}