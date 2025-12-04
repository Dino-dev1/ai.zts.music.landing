"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

interface ParallaxRevealProps {
  children: React.ReactNode;
}

export function ParallaxReveal({ children }: ParallaxRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const y = useTransform(smoothProgress, [0, 0.5], [200, 0]);
  const opacity = useTransform(smoothProgress, [0, 0.3], [0.8, 1]);
  const scale = useTransform(smoothProgress, [0, 0.5], [0.95, 1]);
  const borderRadius = useTransform(smoothProgress, [0, 0.5], [48, 0]);

  return (
    <div className="relative">
      <motion.div
        ref={containerRef}
        className="relative z-20 bg-background shadow-[0_-20px_60px_rgba(0,0,0,0.3)]"
        style={{
          y,
          opacity,
          scale,
          borderTopLeftRadius: borderRadius,
          borderTopRightRadius: borderRadius,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

