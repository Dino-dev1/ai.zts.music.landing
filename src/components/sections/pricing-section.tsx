"use client";

import { motion } from "framer-motion";
import { Check, Building2, Mic2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  buttonText: string;
}

const venuePlans: PricingPlan[] = [
  {
    name: "Starter",
    price: "₹0",
    period: "/month",
    description: "Perfect for small venues testing the waters.",
    features: [
      "3 gig postings per month",
      "Basic artist search",
      "In-app messaging",
      "Standard support",
      "Basic analytics",
    ],
    buttonText: "Get Started Free",
  },
  {
    name: "Professional",
    price: "₹1,999",
    period: "/month",
    description: "For venues with regular entertainment needs.",
    features: [
      "Unlimited gig postings",
      "Priority in artist feeds",
      "Advanced filters & search",
      "Dedicated account manager",
      "Detailed analytics dashboard",
      "Verified venue badge",
      "Contract templates",
    ],
    isPopular: true,
    buttonText: "Start Pro Trial",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For hotel chains and large venue networks.",
    features: [
      "Everything in Professional",
      "Multi-venue management",
      "API access",
      "Custom integrations",
      "White-label options",
      "Bulk booking discounts",
      "24/7 priority support",
      "Dedicated success team",
    ],
    buttonText: "Contact Sales",
  },
];

const artistPlans: PricingPlan[] = [
  {
    name: "Free",
    price: "₹0",
    period: "/forever",
    description: "Start your journey and get discovered.",
    features: [
      "Create your profile",
      "Apply to 5 gigs/month",
      "Basic profile analytics",
      "In-app messaging",
      "Community access",
    ],
    buttonText: "Join Free",
  },
  {
    name: "Pro Artist",
    price: "₹499",
    period: "/month",
    description: "Stand out and get more bookings.",
    features: [
      "Unlimited gig applications",
      "Featured profile placement",
      "Priority in search results",
      "Advanced analytics",
      "Portfolio showcase",
      "Verified artist badge",
      "Early access to new gigs",
    ],
    isPopular: true,
    buttonText: "Go Pro",
  },
  {
    name: "Band/Agency",
    price: "₹1,499",
    period: "/month",
    description: "Manage multiple artists or band members.",
    features: [
      "Everything in Pro",
      "Multi-profile management",
      "Team collaboration tools",
      "Bulk booking management",
      "Revenue analytics",
      "Custom branding",
      "Dedicated support",
      "Commission tracking",
    ],
    buttonText: "Contact Us",
  },
];

export function PricingSection() {
  const [activeTab, setActiveTab] = useState<"venue" | "artist">("venue");
  const plans = activeTab === "venue" ? venuePlans : artistPlans;

  return (
    <section id="pricing" className="relative py-24 sm:py-32">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-gradient-to-b from-primary/10 to-transparent blur-3xl" />
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
            Pricing
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
          >
            Plans for <span className="text-gradient">Every Stage</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-muted-foreground"
          >
            Flexible pricing for venues and artists. Start free, scale as you grow.
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
                "flex items-center gap-2 rounded-full px-6 py-2 text-sm font-medium transition-all",
                activeTab === "venue"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Building2 className="h-4 w-4" />
              For Venues
            </button>
            <button
              onClick={() => setActiveTab("artist")}
              className={cn(
                "flex items-center gap-2 rounded-full px-6 py-2 text-sm font-medium transition-all",
                activeTab === "artist"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Mic2 className="h-4 w-4" />
              For Artists
            </button>
          </motion.div>
        </div>

        {/* Pricing Cards */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-16 grid gap-8 lg:grid-cols-3"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn(
                "relative overflow-hidden rounded-2xl border bg-card p-8",
                plan.isPopular
                  ? "border-primary shadow-lg shadow-primary/10"
                  : "border-border/50"
              )}
            >
              {/* Popular badge */}
              {plan.isPopular && (
                <div className="absolute -right-12 top-6 rotate-45 bg-gradient-to-r from-primary to-pink-500 px-12 py-1 text-xs font-semibold text-white">
                  Popular
                </div>
              )}

              {/* Plan header */}
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  {plan.name}
                </h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  <span className="ml-1 text-muted-foreground">
                    {plan.period}
                  </span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">
                  {plan.description}
                </p>
              </div>

              {/* Features */}
              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                className={cn(
                  "mt-8 w-full",
                  plan.isPopular
                    ? "bg-gradient-to-r from-primary to-pink-500 hover:opacity-90"
                    : ""
                )}
                variant={plan.isPopular ? "default" : "outline"}
              >
                {plan.buttonText}
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
