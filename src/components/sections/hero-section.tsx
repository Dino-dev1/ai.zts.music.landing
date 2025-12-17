"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

// Orbital items positioned ON the orbit borders
const orbitItems = [
  // Outer orbit (3)
  { type: "avatar", src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face", orbit: 3, angle: -30 },
  { type: "icon", iconType: "chat", orbit: 3, angle: 35 },
  { type: "avatar", src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face", orbit: 3, angle: 100 },
  { type: "icon", iconType: "users", orbit: 3, angle: 170 },
  { type: "avatar", src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face", orbit: 3, angle: 245 },
  { type: "icon", iconType: "music", orbit: 3, angle: 315 },
  
  // Middle orbit (2)
  { type: "avatar", src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face", orbit: 2, angle: 20 },
  { type: "icon", iconType: "globe", orbit: 2, angle: 140 },
  { type: "avatar", src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face", orbit: 2, angle: 260 },
  
  // Inner orbit (1)
  { type: "icon", iconType: "mic", orbit: 1, angle: 80 },
  { type: "avatar", src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face", orbit: 1, angle: 200 },
];

// Partner logos
const partners = [
  { name: "Dreamure", icon: "triangle" },
  { name: "SWITCH.WIN", icon: null, isBold: true },
  { name: "Sphere", icon: "dots" },
  { name: "PinSpace", icon: "pin" },
  { name: "Visionix", icon: "play" },
];

// Icon components
function OrbitIcon({ type }: { type: string }) {
  const cls = "h-4 w-4";
  switch (type) {
    case "chat":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cls}>
          <rect x="3" y="5" width="18" height="12" rx="2" stroke="white" strokeWidth="1.5"/>
          <circle cx="8" cy="11" r="1" fill="white"/>
          <circle cx="12" cy="11" r="1" fill="white"/>
          <circle cx="16" cy="11" r="1" fill="white"/>
        </svg>
      );
    case "users":
      return (
        <svg viewBox="0 0 24 24" fill="white" className={cls}>
          <circle cx="9" cy="8" r="2.5"/>
          <circle cx="15" cy="8" r="2.5"/>
          <ellipse cx="9" cy="16" rx="4" ry="2.5"/>
          <path d="M15 13.5c2.5 0 4 1.5 4 2.5"/>
        </svg>
      );
    case "globe":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" className={cls}>
          <circle cx="12" cy="12" r="8"/>
          <ellipse cx="12" cy="12" rx="3.5" ry="8"/>
          <path d="M4 12h16"/>
        </svg>
      );
    case "music":
      return (
        <svg viewBox="0 0 24 24" fill="white" className={cls}>
          <path d="M9 17V6l10-2v11"/>
          <circle cx="6" cy="17" r="2.5"/>
          <circle cx="16" cy="15" r="2.5"/>
        </svg>
      );
    case "mic":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cls}>
          <rect x="9" y="3" width="6" height="10" rx="3" fill="white"/>
          <path d="M6 11v1a6 6 0 0012 0v-1" stroke="white" strokeWidth="1.5"/>
          <path d="M12 18v3" stroke="white" strokeWidth="1.5"/>
        </svg>
      );
    default:
      return null;
  }
}

function PartnerIcon({ type }: { type: string }) {
  const cls = "h-4 w-4";
  switch (type) {
    case "triangle":
      return (
        <svg viewBox="0 0 20 20" fill="currentColor" className={cls}>
          <path d="M10 3L3 17h14L10 3z"/>
        </svg>
      );
    case "dots":
      return (
        <svg viewBox="0 0 20 20" fill="currentColor" className={cls}>
          <circle cx="10" cy="4" r="2"/>
          <circle cx="4" cy="10" r="2"/>
          <circle cx="16" cy="10" r="2"/>
          <circle cx="10" cy="16" r="2"/>
        </svg>
      );
    case "pin":
      return (
        <svg viewBox="0 0 20 20" fill="currentColor" className={cls}>
          <path d="M10 2C7 2 4.5 4.5 4.5 7.5c0 4 5.5 9.5 5.5 9.5s5.5-5.5 5.5-9.5C15.5 4.5 13 2 10 2zm0 7a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"/>
        </svg>
      );
    case "play":
      return (
        <svg viewBox="0 0 20 20" fill="currentColor" className={cls}>
          <rect x="2" y="2" width="16" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M8 6v8l5-4-5-4z"/>
        </svg>
      );
    default:
      return null;
  }
}

export function HeroSection() {
  const orbitRadii = [95, 155, 225];
  
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background gradient - matching reference: warm tan/cream top-left → purple → dark */}
      <div className="absolute inset-0 -z-10">
        {/* Base: very dark blue-black */}
        <div className="absolute inset-0 bg-[#0c0c16]" />
        
        {/* Layer 0: Warm tan/cream at VERY TOP LEFT corner - more visible */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 50% 50% at 0% 0%, rgba(235, 195, 145, 0.95) 0%, rgba(220, 180, 130, 0.7) 15%, rgba(200, 160, 110, 0.45) 30%, transparent 50%)"
          }}
        />
        
        {/* Layer 1: Warm golden/peach glow - extends from corner */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 55% 55% at 10% 15%, rgba(215, 170, 115, 0.8) 0%, rgba(195, 150, 95, 0.5) 25%, rgba(180, 135, 80, 0.25) 40%, transparent 60%)"
          }}
        />
        
        {/* Layer 2: Purple/violet - now more towards CENTER-LEFT */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 65% 65% at 30% 35%, rgba(139, 92, 246, 0.6) 0%, rgba(124, 58, 237, 0.4) 25%, rgba(109, 40, 217, 0.2) 50%, transparent 70%)"
          }}
        />
        
        {/* Layer 3: Extended purple glow - covers orbital area (center-right) */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 50% 50% at 55% 45%, rgba(139, 92, 246, 0.35) 0%, rgba(124, 58, 237, 0.18) 35%, rgba(109, 40, 217, 0.06) 55%, transparent 75%)"
          }}
        />
        
        {/* Layer 4: Subtle purple accent - far right side */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(circle at 75% 40%, rgba(124, 58, 237, 0.12) 0%, transparent 30%)"
          }}
        />
      </div>

      <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-4 pt-20 sm:px-6 lg:px-8">
        <div className="flex flex-1 flex-col items-center gap-6 py-6 lg:flex-row lg:items-center lg:gap-4 lg:py-0">
          {/* Left - Typography */}
          <div className="flex-1 text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="leading-[1.0] tracking-tight"
              style={{ 
                fontSize: "clamp(2rem, 5vw, 4rem)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
              }}
            >
              {/* Dark text for contrast against light gradient area */}
              <span className="text-gray-900">Discover Top</span>
              <br />
              <span className="text-gray-900">Music Talent</span>
              <br />
              <span className="text-gray-900">You Thought Was</span>
              <br />
              <span className="text-gray-900">Out of Reach –</span>
              <br />
              {/* Bright purple accent lines */}
              <span className="text-white">Now Just One</span>
              <br />
              <span className="text-white">Click Away!</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:items-start"
            >
              <button className="group inline-flex h-11 items-center gap-2.5 rounded-full bg-gray-900 px-6 text-sm font-medium text-white transition-all hover:bg-gray-800">
                Start Booking
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
              
         
            </motion.div>
          </div>

          {/* Right - Orbital */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex h-[300px] w-full max-w-[400px] items-center justify-center sm:h-[360px] lg:h-[500px] lg:max-w-[500px]"
          >
            {/* Orbital rings */}
            {orbitRadii.map((radius, index) => (
              <motion.div
                key={index}
                className="absolute rounded-full"
                style={{
                  width: radius * 2,
                  height: radius * 2,
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              />
            ))}

            {/* Center stat */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="relative z-20 flex flex-col items-center text-center"
            >
              <span className="text-4xl font-medium text-white sm:text-5xl">5k+</span>
              <span className="mt-1 text-sm text-gray-400">Artists</span>
            </motion.div>

            {/* Orbital items */}
            {orbitItems.map((item, index) => {
              const radius = orbitRadii[item.orbit - 1];
              const angleRad = (item.angle * Math.PI) / 180;
              const x = Math.cos(angleRad) * radius;
              const y = Math.sin(angleRad) * radius;

              return (
                <motion.div
                  key={index}
                  className="absolute z-10"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    transform: "translate(-50%, -50%)",
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.35, 
                    delay: 0.55 + index * 0.04,
                    type: "spring",
                    stiffness: 180,
                  }}
                >
                  {item.type === "avatar" ? (
                    <div className="h-9 w-9 overflow-hidden rounded-full border-2 border-white/15 sm:h-11 sm:w-11">
                      <Image
                        src={item.src!}
                        alt="Artist"
                        width={44}
                        height={44}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#1a1a2e] sm:h-9 sm:w-9">
                      <OrbitIcon type={item.iconType!} />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom - Partner logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="border-t border-white/[0.06] py-5"
        >
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-10 lg:justify-between">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ delay: 1.1 + index * 0.08 }}
                whileHover={{ opacity: 0.65 }}
                className="flex items-center gap-2 text-gray-500 transition-opacity"
              >
                {partner.icon && <PartnerIcon type={partner.icon} />}
                <span className={`text-sm ${partner.isBold ? "font-bold tracking-[0.15em]" : "font-medium tracking-wide"}`}>
                  {partner.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
