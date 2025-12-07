"use client"

import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook, Twitter } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const footerLinks = {
  navigation: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Menu", href: "#menu" },
    { label: "Contact", href: "#contact" },
  ],
  services: [
    { label: "Weddings", href: "#" },
    { label: "Corporate Events", href: "#" },
    { label: "Private Parties", href: "#" },
    { label: "Traditional Ceremonies", href: "#" },
  ],
}

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
]

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand - updated with logo */}
          <div className="lg:col-span-2">
            <ScrollReveal>
              <Link href="/" className="flex items-center gap-3 mb-4">
                <Image
                  src="/images/image.png"
                  alt="Goshen Kitchen Logo"
                  width={56}
                  height={56}
                  className="h-14 w-14 object-contain"
                />
                <span className="text-2xl font-bold">
                  Goshen <span className="text-primary">Kitchen</span>
                </span>
              </Link>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-secondary-foreground/70 leading-relaxed max-w-md mb-6">
                Bringing the rich flavors of Nigeria to your celebrations. Authentic cuisine, exceptional service,
                unforgettable experiences.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-secondary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Navigation */}
          <ScrollReveal delay={0.2}>
            <div>
              <h4 className="font-semibold mb-4 text-primary">Navigation</h4>
              <ul className="space-y-3">
                {footerLinks.navigation.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-secondary-foreground/70 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Services */}
          <ScrollReveal delay={0.3}>
            <div>
              <h4 className="font-semibold mb-4 text-primary">Services</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-secondary-foreground/70 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.4}>
          <div className="border-t border-secondary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-secondary-foreground/60 text-sm">
              © {new Date().getFullYear()} Goshen Kitchen. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="#" className="text-secondary-foreground/60 hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-secondary-foreground/60 hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  )
}
