"use client";

import { motion } from "framer-motion";
import { UserPlus, Search, HandshakeIcon, Store, ClipboardCheck, Music } from "lucide-react";

interface Step {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const artistSteps: Step[] = [
  {
    number: "01",
    icon: <UserPlus className="h-8 w-8" />,
    title: "Create Your Profile",
    description:
      "Sign up and build your artist profile. Upload audio samples, portfolio images, and showcase your talent.",
  },
  {
    number: "02",
    icon: <Search className="h-8 w-8" />,
    title: "Browse & Apply",
    description:
      "Find gigs near you based on location, budget, and date. Apply with your bid and proposal to stand out.",
  },
  {
    number: "03",
    icon: <HandshakeIcon className="h-8 w-8" />,
    title: "Get Booked & Perform",
    description:
      "Once accepted, confirm details with the venue. Show up, perform, and build your reputation for future gigs.",
  },
];

const venueSteps: Step[] = [
  {
    number: "01",
    icon: <Store className="h-8 w-8" />,
    title: "Post Your Gig",
    description:
      "Create a gig listing with event details, budget range, venue location, and preferred artist genres.",
  },
  {
    number: "02",
    icon: <ClipboardCheck className="h-8 w-8" />,
    title: "Review Applications",
    description:
      "Browse artist profiles, listen to samples, and review bids. Select the perfect artist for your venue.",
  },
  {
    number: "03",
    icon: <Music className="h-8 w-8" />,
    title: "Book & Enjoy",
    description:
      "Confirm the booking with your chosen artist. Enjoy live music at your venue and delight your customers.",
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
            Simple Process for <span className="text-gradient">Everyone</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-muted-foreground"
          >
            Whether you&apos;re an artist looking for gigs or a venue owner seeking talent,
            our platform makes it easy.
          </motion.p>
        </div>

        {/* For Artists */}
        <div className="mt-16 lg:mt-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center text-2xl font-bold text-foreground"
          >
            For <span className="text-gradient">Artists</span>
          </motion.h3>
          <div className="relative">
            <div className="space-y-12 lg:space-y-16">
              {artistSteps.map((step, index) => (
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

        {/* For Venue Owners */}
        <div className="mt-24 lg:mt-32">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center text-2xl font-bold text-foreground"
          >
            For <span className="text-gradient">Venue Owners</span>
          </motion.h3>
          <div className="relative">
            <div className="space-y-12 lg:space-y-16">
              {venueSteps.map((step, index) => (
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
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-500/20 to-cyan-500/20 blur-xl" />
                    <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-border bg-card text-violet-500">
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


