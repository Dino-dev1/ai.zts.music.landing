"use client";

import { motion } from "framer-motion";
import {
  Search,
  Users,
  MapPin,
  Zap,
  Shield,
  IndianRupee,
} from "lucide-react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
}

const features: Feature[] = [
  {
    icon: <Search className="h-6 w-6" />,
    title: "Smart Gig Discovery",
    description:
      "Find live performance opportunities at restaurants, rooftops, cafes, and bars. Filter by city, budget, date, and genre.",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Verified Artist Profiles",
    description:
      "Showcase your talent with portfolio images, audio samples, and performance videos. Build your reputation with verified credentials.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: <MapPin className="h-6 w-6" />,
    title: "Location-Based Matching",
    description:
      "Discover gigs near you with geospatial search. Find opportunities in your city or explore new markets across India.",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Real-Time Bidding",
    description:
      "Artists bid on gigs with instant notifications. Venue owners review applications and accept the best fit for their event.",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Secure Booking System",
    description:
      "Safe and transparent booking process. Both artists and venue owners are verified for trust and reliability.",
    gradient: "from-rose-500 to-pink-500",
  },
  {
    icon: <IndianRupee className="h-6 w-6" />,
    title: "Flexible Budget Options",
    description:
      "Set your budget range or bid according to your rates. Transparent pricing helps both parties find the perfect match.",
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
            <span className="text-gradient">Book & Perform</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-muted-foreground"
          >
            Powerful tools connecting artists with live performance opportunities
            at venues across India. Find gigs or book talent seamlessly.
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


