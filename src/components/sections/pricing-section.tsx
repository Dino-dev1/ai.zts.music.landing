"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  buttonText: string;
}

const plans: PricingPlan[] = [
  {
    name: "Starter",
    price: "$0",
    period: "/month",
    description: "Perfect for hobbyists and beginners exploring music creation.",
    features: [
      "5 AI generations per month",
      "Basic audio quality (128kbps)",
      "Community support",
      "1 project at a time",
      "Standard templates",
    ],
    buttonText: "Get Started Free",
  },
  {
    name: "Pro",
    price: "$19",
    period: "/month",
    description: "For serious musicians ready to take their craft to the next level.",
    features: [
      "Unlimited AI generations",
      "HD audio quality (320kbps)",
      "Priority support",
      "Unlimited projects",
      "Advanced templates",
      "Collaboration tools",
      "Basic analytics",
    ],
    isPopular: true,
    buttonText: "Start Pro Trial",
  },
  {
    name: "Enterprise",
    price: "$49",
    period: "/month",
    description: "Full suite of tools for professional studios and labels.",
    features: [
      "Everything in Pro",
      "Lossless audio (FLAC)",
      "24/7 dedicated support",
      "White-label exports",
      "API access",
      "Advanced analytics",
      "Team management",
      "Custom AI training",
    ],
    buttonText: "Contact Sales",
  },
];

export function PricingSection() {
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
            Simple, <span className="text-gradient">Transparent</span> Pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-muted-foreground"
          >
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
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
        </div>
      </div>
    </section>
  );
}

