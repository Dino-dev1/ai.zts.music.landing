import Link from "next/link";
import { Music2 } from "lucide-react";

interface FooterLink {
  href: string;
  label: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const footerSections: FooterSection[] = [
  {
    title: "For Venues",
    links: [
      { href: "#", label: "Post a Gig" },
      { href: "#", label: "Browse Artists" },
      { href: "#", label: "Pricing" },
      { href: "#", label: "Enterprise" },
    ],
  },
  {
    title: "For Artists",
    links: [
      { href: "#", label: "Find Gigs" },
      { href: "#", label: "Create Profile" },
      { href: "#", label: "Pro Features" },
      { href: "#", label: "Success Tips" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "#", label: "About Us" },
      { href: "#", label: "Blog" },
      { href: "#", label: "Careers" },
      { href: "#", label: "Press" },
    ],
  },
  {
    title: "Support",
    links: [
      { href: "#", label: "Help Center" },
      { href: "#", label: "Contact" },
      { href: "#", label: "Privacy Policy" },
      { href: "#", label: "Terms of Service" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-6">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-pink-500">
                <Music2 className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight">
                Gig<span className="text-gradient">Connect</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              The platform connecting venues with talented artists. Find the perfect 
              entertainment for your restaurant, hotel, or event.
            </p>
            <div className="mt-4 flex gap-4">
              <div className="rounded-lg bg-primary/10 px-3 py-1.5">
                <span className="text-2xl font-bold text-primary">5k+</span>
                <span className="ml-1 text-xs text-muted-foreground">Artists</span>
              </div>
              <div className="rounded-lg bg-pink-500/10 px-3 py-1.5">
                <span className="text-2xl font-bold text-pink-400">2k+</span>
                <span className="ml-1 text-xs text-muted-foreground">Venues</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-foreground">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-border/40 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} GigConnect. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="#"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Twitter
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Instagram
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                LinkedIn
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
