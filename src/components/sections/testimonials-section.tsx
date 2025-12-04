"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star, Building2, Mic2 } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  type: "venue" | "artist";
  avatar: string;
  content: string;
  rating: number;
  venue?: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Priya Sharma",
    role: "Events Manager",
    type: "venue",
    venue: "The Grand Ballroom, Mumbai",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    content:
      "GigConnect transformed how we book entertainment. We went from spending days calling agencies to finding perfect artists in hours. The quality of performers has been exceptional.",
    rating: 5,
  },
  {
    name: "Rahul Verma",
    role: "Solo Guitarist",
    type: "artist",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    content:
      "As an independent artist, finding consistent gigs was my biggest challenge. Now I have bookings lined up weeks in advance. The secure payment system gives me peace of mind.",
    rating: 5,
  },
  {
    name: "Ananya Desai",
    role: "Restaurant Owner",
    type: "venue",
    venue: "Rhythm Café, Bangalore",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    content:
      "Live music has increased our weekend footfall by 40%. GigConnect makes it so easy to find artists who match our vibe. Our customers love the variety!",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    role: "Band Leader - The Groove Collective",
    type: "artist",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    content:
      "Managing bookings for a 6-piece band was a nightmare before. The platform handles scheduling, payments, and communication seamlessly. Our earnings have doubled!",
    rating: 5,
  },
  {
    name: "Meera Patel",
    role: "Hotel Entertainment Director",
    type: "venue",
    venue: "Sunset Resort, Goa",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
    content:
      "We host events every weekend and need diverse talent. GigConnect&apos;s filtering by genre, budget, and availability saves us hours. The verified reviews are invaluable.",
    rating: 5,
  },
  {
    name: "Arjun Kapoor",
    role: "DJ & Producer",
    type: "artist",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    content:
      "The platform helped me break into the hotel circuit which was impossible before. The portfolio feature lets venues see exactly what I bring to the table.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-24 sm:py-32">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] translate-x-1/4 translate-y-1/4 rounded-full bg-gradient-to-tl from-primary/15 to-transparent blur-3xl" />
        <div className="absolute left-0 top-1/2 h-[300px] w-[300px] -translate-x-1/4 -translate-y-1/2 rounded-full bg-gradient-to-br from-pink-500/10 to-transparent blur-3xl" />
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
            Success Stories
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
          >
            Trusted by <span className="text-gradient">Thousands</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-muted-foreground"
          >
            See what venues and artists are saying about their experience with GigConnect.
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-card"
            >
              {/* Type Badge */}
              <div className="flex items-center justify-between">
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <span
                  className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium ${
                    testimonial.type === "venue"
                      ? "bg-primary/10 text-primary"
                      : "bg-pink-500/10 text-pink-400"
                  }`}
                >
                  {testimonial.type === "venue" ? (
                    <Building2 className="h-3 w-3" />
                  ) : (
                    <Mic2 className="h-3 w-3" />
                  )}
                  {testimonial.type === "venue" ? "Venue" : "Artist"}
                </span>
              </div>

              {/* Content */}
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="mt-6 flex items-center gap-3">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <div className="font-medium text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {testimonial.role}
                    {testimonial.venue && (
                      <span className="block text-primary/80">{testimonial.venue}</span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
