"use client";

import { type ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "tertiary";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
  className?: string;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.5)] hover:bg-primary/90",
  secondary:
    "border border-white/12 bg-white/7 backdrop-blur text-text-primary hover:bg-white/12 hover:border-white/20",
  tertiary:
    "text-primary hover:underline bg-transparent",
};

export default function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`px-12 py-5 cursor-pointer rounded-2xl font-extrabold text-lg transition-all active:scale-95 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
