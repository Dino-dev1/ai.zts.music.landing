"use client";

import { motion } from "framer-motion";
import {
  Wand2,
  Users,
  Globe,
  Zap,
  Shield,
  BarChart3,
} from "lucide-react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
}

const features: Feature[] = [
  {
    icon: <Wand2 className="h-6 w-6" />,
    title: "AI Music Generation",
    description:
      "Create unique compositions with our advanced AI models. Generate melodies, harmonies, and beats in seconds.",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Real-time Collaboration",
    description:
      "Work together with artists from around the world. Share projects, tracks, and ideas seamlessly.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Global Distribution",
    description:
      "Distribute your music to all major streaming platforms with just one click. Reach millions of listeners.",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Lightning Fast",
    description:
      "Export and process tracks in seconds. Our cloud infrastructure ensures blazing fast performance.",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Copyright Protection",
    description:
      "Your music is safe with us. Advanced copyright protection and ownership verification included.",
    gradient: "from-rose-500 to-pink-500",
  },
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: "Analytics Dashboard",
    description:
      "Track your streams, earnings, and audience growth with detailed real-time analytics.",
    gradient: "from-indigo-500 to-violet-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
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
            Features
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
          >
            Everything You Need to{" "}
            <span className="text-gradient">Create & Share</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-muted-foreground"
          >
            Powerful tools and features designed to help you create, collaborate,
            and succeed in the music industry.
          </motion.p>
        </div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all hover:border-primary/50 hover:bg-card"
            >
              {/* Gradient background on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 transition-opacity group-hover:opacity-5`}
              />

              {/* Icon */}
              <div
                className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${feature.gradient} text-white`}
              >
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

