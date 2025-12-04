"use client";

import { motion } from "framer-motion";
import {
  Search,
  Calendar,
  MessageSquare,
  Shield,
  CreditCard,
  Star,
} from "lucide-react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
  forVenue?: boolean;
  forArtist?: boolean;
}

const features: Feature[] = [
  {
    icon: <Search className="h-6 w-6" />,
    title: "Smart Matching",
    description:
      "Our AI matches venues with the perfect artists based on genre, budget, location, and event type.",
    gradient: "from-violet-500 to-purple-500",
    forVenue: true,
    forArtist: true,
  },
  {
    icon: <Calendar className="h-6 w-6" />,
    title: "Easy Scheduling",
    description:
      "Post gigs with specific dates, times, and requirements. Artists can apply with one click.",
    gradient: "from-blue-500 to-cyan-500",
    forVenue: true,
  },
  {
    icon: <MessageSquare className="h-6 w-6" />,
    title: "Direct Communication",
    description:
      "Chat directly with venues or artists. Negotiate terms, share setlists, and finalize details.",
    gradient: "from-emerald-500 to-teal-500",
    forVenue: true,
    forArtist: true,
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Verified Profiles",
    description:
      "All artists and venues are verified. View portfolios, reviews, and performance history.",
    gradient: "from-amber-500 to-orange-500",
    forVenue: true,
    forArtist: true,
  },
  {
    icon: <CreditCard className="h-6 w-6" />,
    title: "Secure Payments",
    description:
      "Escrow payments protect both parties. Artists get paid on time, venues get guaranteed shows.",
    gradient: "from-rose-500 to-pink-500",
    forVenue: true,
    forArtist: true,
  },
  {
    icon: <Star className="h-6 w-6" />,
    title: "Reviews & Ratings",
    description:
      "Build your reputation with authentic reviews. Top-rated profiles get featured and more bookings.",
    gradient: "from-indigo-500 to-violet-500",
    forVenue: true,
    forArtist: true,
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
            Platform Features
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
          >
            Everything You Need to{" "}
            <span className="text-gradient">Book & Perform</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-muted-foreground"
          >
            Whether you&apos;re a venue looking for talent or an artist seeking opportunities, 
            we&apos;ve got you covered.
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

              {/* Tags */}
              <div className="mt-4 flex gap-2">
                {feature.forVenue && (
                  <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                    For Venues
                  </span>
                )}
                {feature.forArtist && (
                  <span className="rounded-full bg-pink-500/10 px-2 py-0.5 text-xs font-medium text-pink-400">
                    For Artists
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
