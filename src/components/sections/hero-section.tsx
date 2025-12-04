"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight, Music2, Mic2, Guitar, Headphones, PartyPopper } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface OrbitingItem {
  id: number;
  type: "avatar" | "icon";
  src?: string;
  icon?: React.ReactNode;
  size: number;
  orbitRadius: number;
  duration: number;
  delay: number;
  gradient?: string;
}

const orbitingItems: OrbitingItem[] = [
  // Inner orbit - avatars
  { id: 1, type: "avatar", src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face", size: 56, orbitRadius: 120, duration: 25, delay: 0 },
  { id: 2, type: "icon", icon: <Mic2 className="h-5 w-5" />, size: 48, orbitRadius: 120, duration: 25, delay: -8, gradient: "from-blue-500 to-cyan-500" },
  { id: 3, type: "avatar", src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face", size: 52, orbitRadius: 120, duration: 25, delay: -16 },
  
  // Middle orbit - mix
  { id: 4, type: "icon", icon: <Guitar className="h-6 w-6" />, size: 52, orbitRadius: 180, duration: 35, delay: 0, gradient: "from-rose-500 to-pink-500" },
  { id: 5, type: "avatar", src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face", size: 60, orbitRadius: 180, duration: 35, delay: -9 },
  { id: 6, type: "icon", icon: <Headphones className="h-5 w-5" />, size: 44, orbitRadius: 180, duration: 35, delay: -18, gradient: "from-violet-500 to-purple-500" },
  { id: 7, type: "avatar", src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face", size: 48, orbitRadius: 180, duration: 35, delay: -27 },
  
  // Outer orbit
  { id: 8, type: "avatar", src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face", size: 64, orbitRadius: 250, duration: 45, delay: 0 },
  { id: 9, type: "icon", icon: <PartyPopper className="h-6 w-6" />, size: 52, orbitRadius: 250, duration: 45, delay: -11, gradient: "from-amber-500 to-orange-500" },
  { id: 10, type: "avatar", src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face", size: 56, orbitRadius: 250, duration: 45, delay: -22 },
  { id: 11, type: "icon", icon: <Music2 className="h-5 w-5" />, size: 48, orbitRadius: 250, duration: 45, delay: -33, gradient: "from-emerald-500 to-teal-500" },
];

const companyLogos = [
  { name: "Marriott", icon: "🏨" },
  { name: "Taj Hotels", icon: "🏛️" },
  { name: "ITC Hotels", icon: "⭐" },
  { name: "Zomato", icon: "🍽️" },
  { name: "Swiggy", icon: "🛵" },
];

function OrbitingElement({ item }: { item: OrbitingItem }) {
  return (
    <motion.div
      className="absolute"
      style={{
        width: item.size,
        height: item.size,
      }}
      animate={{
        rotate: 360,
      }}
      transition={{
        duration: item.duration,
        repeat: Infinity,
        ease: "linear",
        delay: item.delay,
      }}
    >
      <motion.div
        className="absolute"
        style={{
          left: "50%",
          top: "50%",
          marginLeft: -item.size / 2,
          marginTop: -item.orbitRadius,
        }}
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: item.duration,
          repeat: Infinity,
          ease: "linear",
          delay: item.delay,
        }}
      >
        {item.type === "avatar" ? (
          <div
            className="overflow-hidden rounded-full border-2 border-white/20 shadow-lg shadow-primary/20"
            style={{ width: item.size, height: item.size }}
          >
            <Image
              src={item.src || ""}
              alt="User"
              width={item.size}
              height={item.size}
              className="h-full w-full object-cover"
            />
          </div>
        ) : (
          <div
            className={`flex items-center justify-center rounded-2xl bg-gradient-to-br ${item.gradient} text-white shadow-lg`}
            style={{ width: item.size, height: item.size }}
          >
            {item.icon}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

function OrbitRing({ radius, opacity = 0.1 }: { radius: number; opacity?: number }) {
  return (
    <div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border"
      style={{
        width: radius * 2,
        height: radius * 2,
        borderColor: `rgba(139, 92, 246, ${opacity})`,
      }}
    />
  );
}

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const y = useTransform(smoothProgress, [0, 1], [0, -150]);
  const scale = useTransform(smoothProgress, [0, 0.5], [1, 0.9]);
  const opacity = useTransform(smoothProgress, [0, 0.5], [1, 0]);
  const borderRadius = useTransform(smoothProgress, [0, 0.3], [0, 48]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden"
      style={{ perspective: "1000px" }}
    >
      <motion.div
        className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0f0a1e] via-[#1a1333] to-[#0d0815]"
        style={{
          y: isMounted ? y : 0,
          scale: isMounted ? scale : 1,
          opacity: isMounted ? opacity : 1,
          borderRadius: isMounted ? borderRadius : 0,
        }}
      >
        {/* Background effects */}
        <div className="absolute inset-0">
          {/* Purple glow left */}
          <div className="absolute -left-32 top-1/3 h-[600px] w-[600px] rounded-full bg-purple-600/20 blur-[120px]" />
          {/* Purple glow right */}
          <div className="absolute -right-32 top-1/2 h-[500px] w-[500px] rounded-full bg-violet-600/15 blur-[100px]" />
          {/* Subtle orange/peach glow bottom */}
          <div className="absolute bottom-0 left-1/4 h-[400px] w-[600px] rounded-full bg-gradient-to-t from-orange-500/10 to-transparent blur-[80px]" />
        </div>

        {/* Navigation */}
        <nav className="relative z-50 mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm">
              <Music2 className="h-5 w-5 text-white" />
            </div>
            <span className="text-lg font-semibold text-white">GigConnect</span>
          </div>
          <div className="hidden items-center gap-8 md:flex">
            <a href="#how-it-works" className="text-sm text-white/70 transition-colors hover:text-white">How it Works</a>
            <a href="#features" className="text-sm text-white/70 transition-colors hover:text-white">For Venues</a>
            <a href="#pricing" className="text-sm text-white/70 transition-colors hover:text-white">For Artists</a>
            <a href="#testimonials" className="text-sm text-white/70 transition-colors hover:text-white">Success Stories</a>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="text-white/80 hover:bg-white/10 hover:text-white">
              Log In
            </Button>
            <Button size="sm" className="bg-white text-black hover:bg-white/90">
              Join Now
            </Button>
          </div>
        </nav>

        {/* Main Content */}
        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-16 lg:grid-cols-2 lg:py-24">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center"
          >
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Find the Perfect{" "}
              <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Artist
              </span>{" "}
              for Your Venue – Just One Click Away!
            </h1>
            <p className="mt-6 max-w-lg text-lg text-white/60">
              Connect with talented musicians, DJs, and performers for your restaurant, 
              hotel, or event. The easiest way to book live entertainment.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 flex items-center gap-4"
            >
              <Button
                size="lg"
                className="group bg-white px-8 text-black hover:bg-white/90"
              >
                Post a Gig
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 bg-white/5 text-white backdrop-blur-sm hover:bg-white/10"
              >
                Find Gigs
              </Button>
            </motion.div>

            {/* Cursor indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="mt-8 flex items-center gap-2"
            >
              <div className="h-4 w-4 rotate-[-20deg]">
                <svg viewBox="0 0 24 24" fill="none" className="h-full w-full">
                  <path d="M5 3L19 12L12 13L9 20L5 3Z" fill="#a78bfa" />
                </svg>
              </div>
              <span className="rounded-full bg-violet-500 px-3 py-1 text-xs font-medium text-white">
                David
              </span>
            </motion.div>
          </motion.div>

          {/* Right Content - Orbiting Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative h-[500px] w-[500px] lg:h-[600px] lg:w-[600px]">
              {/* Orbit rings */}
              <OrbitRing radius={120} opacity={0.15} />
              <OrbitRing radius={180} opacity={0.1} />
              <OrbitRing radius={250} opacity={0.08} />

              {/* Center stat */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.5 }}
                >
                  <div className="text-5xl font-bold text-white lg:text-6xl">5k+</div>
                  <div className="mt-1 text-sm font-medium tracking-wider text-white/60">
                    Artists & Venues
                  </div>
                </motion.div>
              </div>

              {/* Orbiting elements */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                {orbitingItems.map((item) => (
                  <OrbitingElement key={item.id} item={item} />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Company Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="relative z-10 border-t border-white/5 bg-black/20 py-8 backdrop-blur-sm"
        >
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-8 px-6 sm:gap-12 lg:gap-16">
            {companyLogos.map((company) => (
              <div
                key={company.name}
                className="flex items-center gap-2 text-white/40 transition-colors hover:text-white/60"
              >
                <span className="text-2xl">{company.icon}</span>
                <span className="text-sm font-medium">{company.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
