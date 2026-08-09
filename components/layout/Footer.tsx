"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/data/site";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/courses", label: "Courses" },
  { href: "/contact", label: "Contact Us" },
];

const courseLinks = [
  { href: "/courses/ielts", label: "IELTS" },
  { href: "/courses/pte", label: "PTE" },
  { href: "/courses/computer-ict", label: "Computer & ICT" },
  { href: "/courses/german", label: "German Language" },
  { href: "/courses/nurse-aide", label: "Nurse Aide" },
  { href: "/courses/caregiving-disability", label: "Caregiving & Disability" },
];

const socialLinks = [
  { key: "facebook", label: "Facebook", url: siteConfig.social.facebook, path: "M13 22v-8h2.7l.4-3H13V9c0-.9.2-1.5 1.5-1.5H16V5c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H7.5v3H9.8v8H13z" },
  { key: "instagram", label: "Instagram", url: siteConfig.social.instagram, path: "M12 2c2.7 0 3.1 0 4.1.1 1.1 0 1.8.2 2.2.4.5.2.9.5 1.4.9.4.4.7.9.9 1.4.2.4.4 1.1.4 2.2.1 1 .1 1.4.1 4.1s0 3.1-.1 4.1c0 1.1-.2 1.8-.4 2.2-.2.5-.5.9-.9 1.4-.4.4-.9.7-1.4.9-.4.2-1.1.4-2.2.4-1 .1-1.4.1-4.1.1s-3.1 0-4.1-.1c-1.1 0-1.8-.2-2.2-.4-.5-.2-.9-.5-1.4-.9-.4-.4-.7-.9-.9-1.4-.2-.4-.4-1.1-.4-2.2-.1-1-.1-1.4-.1-4.1s0-3.1.1-4.1c0-1.1.2-1.8.4-2.2.2-.5.5-.9.9-1.4.4-.4.9-.7 1.4-.9.4-.2 1.1-.4 2.2-.4C8.9 2 9.3 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm0 8.2a3.2 3.2 0 110-6.4 3.2 3.2 0 010 6.4zm5.2-8.4a1.2 1.2 0 100-2.4 1.2 1.2 0 000 2.4z" },
  { key: "linkedin", label: "LinkedIn", url: siteConfig.social.linkedin, path: "M6.9 8.4H3.6V20h3.3V8.4zM5.3 3.5a1.9 1.9 0 100 3.9 1.9 1.9 0 000-3.9zM20.4 20h-3.3v-6.1c0-1.5-.5-2.5-1.8-2.5-1 0-1.5.7-1.8 1.3-.1.2-.1.6-.1.9V20h-3.3s.1-10.6 0-11.6h3.3v1.6c.4-.7 1.2-1.7 3-1.7 2.2 0 3.9 1.4 3.9 4.5V20z" },
  { key: "tiktok", label: "TikTok", url: siteConfig.social.tiktok, path: "M16.6 5.82c-.9-.99-1.4-2.28-1.4-3.61h-3.2v13.44c0 1.62-1.32 2.94-2.94 2.94a2.94 2.94 0 01-2.94-2.94 2.94 2.94 0 012.94-2.94c.28 0 .55.04.8.11V9.6a6.15 6.15 0 00-.8-.05A6.16 6.16 0 003 15.7a6.16 6.16 0 006.16 6.16 6.16 6.16 0 006.16-6.16V9.01a9.05 9.05 0 005.29 1.7V7.5a5.6 5.6 0 01-4.01-1.68z" },
];

const columnReveal: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
};

export function Footer() {
  const prefersReducedMotion = useReducedMotion();

  const reveal = (index: number) =>
    prefersReducedMotion
      ? {}
      : {
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true, margin: "-80px" },
          variants: columnReveal,
          custom: index,
        };

  return (
    <footer className="bg-navy text-white">
      <div className="container-app grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <motion.div {...reveal(0)}>
          <Link href="/" className="mb-4 inline-flex items-center gap-2.5">
            <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-white p-1.5">
              <Image
                src="/logo/aussiz-logo.png"
                alt="Aussiz Education & Training"
                width={44}
                height={33}
                className="h-full w-full object-contain"
              />
            </span>
            <span className="font-heading text-base font-bold">
              Aussiz Education &amp; Training
            </span>
          </Link>
          <p className="text-sm font-medium italic text-white/85">
            &ldquo;Your Goals Are Our Goals. Your Success Is Our Success.&rdquo;
          </p>
          <p className="mt-3 text-sm leading-relaxed text-white/65">
            Aussiz Education &amp; Training provides language, ICT and professional
            training designed to help learners move confidently toward their goals.
          </p>
        </motion.div>

        <motion.div {...reveal(1)}>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white/90">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm text-white/65">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="focus-ring rounded-md transition-colors hover:text-orange">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div {...reveal(2)}>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white/90">
            Courses &amp; Services
          </h4>
          <ul className="space-y-2 text-sm text-white/65">
            {courseLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="focus-ring rounded-md transition-colors hover:text-orange">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div {...reveal(3)}>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white/90">
            Contact
          </h4>
          <ul className="space-y-3 text-sm text-white/65">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-orange" />
              <span>{siteConfig.contact.phone}</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-orange" />
              <span>{siteConfig.contact.email}</span>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 shrink-0 text-orange" />
              <span>{siteConfig.contact.location}</span>
            </li>
          </ul>

          <div className="mt-5 flex items-center gap-3">
            {socialLinks.map((social) =>
              social.url ? (
                <a
                  key={social.key}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="focus-ring flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-orange"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                    <path d={social.path} />
                  </svg>
                </a>
              ) : (
                <span
                  key={social.key}
                  aria-label={`${social.label} (link not yet available)`}
                  title={`${social.label} — link not yet available`}
                  className="flex h-9 w-9 cursor-not-allowed items-center justify-center rounded-full bg-white/5 opacity-40"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                    <path d={social.path} />
                  </svg>
                </span>
              )
            )}
          </div>
        </motion.div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-app flex flex-col items-center justify-between gap-2 py-5 text-xs text-white/55 sm:flex-row">
          <p>© 2026 Aussiz Education &amp; Training. All Rights Reserved.</p>
          <p>{siteConfig.partnership.trustBadge} · {siteConfig.partnership.statement}</p>
        </div>
      </div>
    </footer>
  );
}
