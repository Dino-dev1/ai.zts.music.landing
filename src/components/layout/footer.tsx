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
    title: "For Artists",
    links: [
      { href: "#", label: "Find Gigs" },
      { href: "#", label: "Create Profile" },
      { href: "#", label: "Artist Pricing" },
      { href: "#", label: "Success Stories" },
    ],
  },
  {
    title: "For Venues",
    links: [
      { href: "#", label: "Post a Gig" },
      { href: "#", label: "Browse Artists" },
      { href: "#", label: "Venue Pricing" },
      { href: "#", label: "How It Works" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "#", label: "Help Center" },
      { href: "#", label: "Safety Guidelines" },
      { href: "#", label: "Community" },
      { href: "#", label: "Contact Us" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "#", label: "Privacy Policy" },
      { href: "#", label: "Terms of Service" },
      { href: "#", label: "Booking Policy" },
      { href: "#", label: "Cookie Policy" },
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
                ZTS <span className="text-gradient">Gigs</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              India&apos;s premier live music marketplace connecting talented artists
              with venues. Find gigs, book artists, and bring live music to life.
            </p>
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
              © {new Date().getFullYear()} ZTS Gigs. All rights reserved.
            </p>
            <div className="flex gap-6">
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
                Facebook
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


