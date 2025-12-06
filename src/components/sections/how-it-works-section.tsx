"use client";

import { motion } from "framer-motion";
import { Upload, Sparkles, Share2 } from "lucide-react";

interface Step {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: "01",
    icon: <Upload className="h-8 w-8" />,
    title: "Upload Your Idea",
    description:
      "Start with a melody, lyrics, or just an idea. Upload your samples or describe what you want to create.",
  },
  {
    number: "02",
    icon: <Sparkles className="h-8 w-8" />,
    title: "AI Enhancement",
    description:
      "Our AI analyzes your input and enhances it with professional arrangements, mixing, and mastering.",
  },
  {
    number: "03",
    icon: <Share2 className="h-8 w-8" />,
    title: "Share & Monetize",
    description:
      "Distribute your finished track to all major platforms and start earning from your music.",
  },
];

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-0 top-0 h-[500px] w-[500px] translate-x-1/4 -translate-y-1/4 rounded-full bg-gradient-to-bl from-primary/20 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-[300px] w-[300px] rounded-full bg-gradient-to-tr from-pink-500/10 to-transparent blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold uppercase tracking-wider text-primary"
          >
            How It Works
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
          >
            From Idea to <span className="text-gradient">Hit Song</span> in
            Minutes
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-muted-foreground"
          >
            Our streamlined process makes music creation accessible to everyone,
            from beginners to professionals.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="mt-16 lg:mt-24">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-border to-transparent lg:block" />

            <div className="space-y-12 lg:space-y-24">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`flex flex-col items-center gap-8 lg:flex-row ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`flex-1 text-center lg:text-left ${
                      index % 2 === 1 ? "lg:text-right" : ""
                    }`}
                  >
                    <span className="inline-block text-6xl font-bold text-primary/20">
                      {step.number}
                    </span>
                    <h3 className="mt-4 text-2xl font-bold text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-3 max-w-md text-muted-foreground">
                      {step.description}
                    </p>
                  </div>

                  {/* Icon */}
                  <div className="relative flex h-24 w-24 shrink-0 items-center justify-center">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-pink-500/20 blur-xl" />
                    <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-border bg-card text-primary">
                      {step.icon}
                    </div>
                  </div>

                  {/* Spacer */}
                  <div className="hidden flex-1 lg:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

