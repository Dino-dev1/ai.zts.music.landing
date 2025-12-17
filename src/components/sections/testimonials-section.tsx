"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Priya Sharma",
    role: "Solo Singer, Mumbai",
    avatar: "https://placekitten.com/100/100",
    content:
      "I've booked 15+ gigs in 3 months through ZTS! The platform makes it so easy to find venues that match my style. Finally earning from my passion!",
    rating: 5,
  },
  {
    name: "Rajesh Khanna",
    role: "The Rooftop Lounge, Delhi",
    avatar: "https://placekitten.com/101/101",
    content:
      "Finding quality artists was always a hassle. Now I can browse portfolios, listen to samples, and book the perfect artist for my venue in minutes.",
    rating: 5,
  },
  {
    name: "DJ Arjun",
    role: "DJ & Producer, Bangalore",
    avatar: "https://placekitten.com/102/102",
    content:
      "The bidding system is transparent and fair. I've built regular relationships with multiple venues. ZTS helped me turn side gigs into a full-time career!",
    rating: 5,
  },
  {
    name: "Meera Iyer",
    role: "Café Harmony, Chennai",
    avatar: "https://placekitten.com/103/103",
    content:
      "We host live music every Friday. ZTS connects us with talented local artists who understand our vibe. Our customer footfall increased by 40%!",
    rating: 5,
  },
  {
    name: "The Acoustic Trio",
    role: "Band, Pune",
    avatar: "https://placekitten.com/104/104",
    content:
      "From restaurants to corporate events, ZTS helps us find diverse opportunities. The real-time notifications ensure we never miss a great gig!",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    role: "Sky High Restaurant, Jaipur",
    avatar: "https://placekitten.com/105/105",
    content:
      "Professional, reliable, and efficient. ZTS verified artist profiles give me confidence. Our guests love the live music experience we now offer!",
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
            Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
          >
            Loved by <span className="text-gradient">Artists & Venues</span> Across India
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-muted-foreground"
          >
            Join thousands of artists and venue owners who have transformed their
            live music experience with ZTS.
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
              {/* Rating */}
              <div className="flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                  />
                ))}
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
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
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


