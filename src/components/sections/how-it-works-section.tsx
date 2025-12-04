"use client";

import { motion } from "framer-motion";
import { Building2, Search, Handshake, Mic2, Send, CheckCircle2, Banknote } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface Step {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const venueSteps: Step[] = [
  {
    number: "01",
    icon: <Building2 className="h-8 w-8" />,
    title: "Create Your Venue Profile",
    description:
      "Sign up and add your venue details - location, capacity, ambiance, and the type of events you host.",
  },
  {
    number: "02",
    icon: <Send className="h-8 w-8" />,
    title: "Post Your Gig",
    description:
      "Describe the event, date, budget, and preferred genre. Our platform broadcasts it to relevant artists.",
  },
  {
    number: "03",
    icon: <Search className="h-8 w-8" />,
    title: "Review Applications",
    description:
      "Browse artist profiles, listen to demos, read reviews, and shortlist your favorites.",
  },
  {
    number: "04",
    icon: <Handshake className="h-8 w-8" />,
    title: "Book & Enjoy",
    description:
      "Finalize the booking, handle payments securely, and host an unforgettable event.",
  },
];

const artistSteps: Step[] = [
  {
    number: "01",
    icon: <Mic2 className="h-8 w-8" />,
    title: "Build Your Profile",
    description:
      "Showcase your talent - upload demos, photos, videos, set your rates, and define your genre.",
  },
  {
    number: "02",
    icon: <Search className="h-8 w-8" />,
    title: "Discover Gigs",
    description:
      "Browse gigs by location, date, budget, and genre. Get notified about opportunities that match your profile.",
  },
  {
    number: "03",
    icon: <CheckCircle2 className="h-8 w-8" />,
    title: "Apply & Get Selected",
    description:
      "Send your application with a personalized pitch. Chat with venues and negotiate terms.",
  },
  {
    number: "04",
    icon: <Banknote className="h-8 w-8" />,
    title: "Perform & Get Paid",
    description:
      "Deliver an amazing performance. Payments are released securely after the gig.",
  },
];

export function HowItWorksSection() {
  const [activeTab, setActiveTab] = useState<"venue" | "artist">("venue");
  const steps = activeTab === "venue" ? venueSteps : artistSteps;

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
            From Search to <span className="text-gradient">Stage</span> in Minutes
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-muted-foreground"
          >
            A simple, streamlined process for both venues and artists.
          </motion.p>

          {/* Tab Switcher */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8 inline-flex rounded-full border border-border bg-card/50 p-1 backdrop-blur-sm"
          >
            <button
              onClick={() => setActiveTab("venue")}
              className={cn(
                "rounded-full px-6 py-2 text-sm font-medium transition-all",
                activeTab === "venue"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              I&apos;m a Venue
            </button>
            <button
              onClick={() => setActiveTab("artist")}
              className={cn(
                "rounded-full px-6 py-2 text-sm font-medium transition-all",
                activeTab === "artist"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              I&apos;m an Artist
            </button>
          </motion.div>
        </div>

        {/* Steps */}
        <div className="mt-16 lg:mt-24">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-border to-transparent lg:block" />

            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-12 lg:space-y-24"
            >
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
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
