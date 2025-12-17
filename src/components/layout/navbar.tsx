"use client";

import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavLink {
  href: string;
  label: string;
}

const navLinks: NavLink[] = [
  { href: "#features", label: "For Artists" },
  { href: "#how-it-works", label: "For Venues" },
  { href: "#pricing", label: "Pricing" },
  { href: "#testimonials", label: "About" },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    // Hide navbar when scrolling down past 100px, show when scrolling up
    if (latest > previous && latest > 100) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  });

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: isHidden ? -100 : 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed left-0 right-0 top-0 z-50"
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          {/* Clean geometric icon */}
          <div className="flex h-7 w-7 items-center justify-center">
            <svg viewBox="0 0 28 28" fill="none" className="h-6 w-6">
              <rect x="2" y="2" width="10" height="10" rx="2" className="fill-white" />
              <rect x="16" y="2" width="10" height="10" rx="2" className="fill-white" />
              <rect x="2" y="16" width="10" height="10" rx="2" className="fill-white" />
              <rect x="16" y="16" width="10" height="10" rx="2" className="fill-white" fillOpacity="0.4" />
            </svg>
          </div>
          <span className="text-base font-semibold tracking-tight text-white">
            ZTS Gigs
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden items-center gap-4 md:flex">
          <Link
            href="#"
            className="text-sm font-medium text-white/80 transition-colors hover:text-white"
          >
            Log In
          </Link>
          
          {/* Lightning border button */}
          <Link href="#" className="relative group">
            {/* Button content */}
            <span className="relative z-10 inline-flex h-10 items-center justify-center rounded-full bg-[#1a1a2e] px-6 text-sm font-medium text-white">
              Join Now
            </span>
            
            {/* Animated lightning border */}
            <span className="absolute inset-0 rounded-full overflow-hidden">
              {/* Base border glow */}
              <span className="absolute inset-0 rounded-full border border-purple-500/40" />
              
              {/* Animated lightning effect - travels right to left */}
              <span 
                className="absolute inset-0 rounded-full"
                style={{
                  background: "conic-gradient(from 0deg, transparent 0%, transparent 75%, rgba(139, 92, 246, 0.8) 85%, rgba(192, 132, 252, 1) 90%, rgba(139, 92, 246, 0.8) 95%, transparent 100%)",
                  animation: "lightning-spin 3s linear infinite reverse",
                }}
              />
              
              {/* Inner mask to show only the border */}
              <span className="absolute inset-[1px] rounded-full bg-[#1a1a2e]" />
              
              {/* Subtle glow effect */}
              <span 
                className="absolute inset-0 rounded-full opacity-50 blur-sm"
                style={{
                  background: "conic-gradient(from 0deg, transparent 0%, transparent 75%, rgba(139, 92, 246, 0.6) 85%, rgba(192, 132, 252, 0.8) 90%, rgba(139, 92, 246, 0.6) 95%, transparent 100%)",
                  animation: "lightning-spin 3s linear infinite reverse",
                }}
              />
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="flex h-10 w-10 items-center justify-center md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-5 w-5 text-white" />
          ) : (
            <Menu className="h-5 w-5 text-white" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          height: isMobileMenuOpen ? "auto" : 0,
          opacity: isMobileMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
        className={cn(
          "overflow-hidden bg-[#1a1a2e]/95 backdrop-blur-xl md:hidden",
          !isMobileMenuOpen && "pointer-events-none"
        )}
      >
        <div className="flex flex-col gap-4 px-4 py-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/80"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex flex-col gap-3 border-t border-white/10 pt-4">
            <Link href="#" className="text-sm font-medium text-white/80">
              Log In
            </Link>
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-full bg-purple-600 px-5 text-sm font-medium text-white"
            >
              Join Now
            </Link>
          </div>
        </div>
      </motion.div>
      
      {/* CSS for lightning animation */}
      <style jsx global>{`
        @keyframes lightning-spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </motion.header>
  );
}
