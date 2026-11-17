"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUp,
  Building2,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
} from "lucide-react";
import DevelopedByStaffArc from "../common/DevelopedByStaffArc";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Clients", href: "/clients" },
  { name: "Contact Us", href: "/contact" },
];

const services = [
  "Road Works",
  "Civil Works",
  "Electrical Works",
  "Plumbing Works",
  "HVAC Works",
  "Painting Works",
  "Drain Line Works",
];

export default function Footer() {
  const handleLogoClick = (event) => {
    if (window.location.pathname === "/") {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  };

  return (
    <footer className="relative overflow-hidden bg-[#012F7B] text-white">
      {/* Decorative Background */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#0182DE]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-[#00B6FD]/10 blur-3xl" />

      {/* Gold Top Line */}
      <div className="h-1 w-full bg-gradient-to-r from-[#F6BB03] via-[#FFD84D] to-[#F6BB03]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* Company */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block" onClick={handleLogoClick}>
              <Image
                src="/logo/yp-logo.png"
                alt="Yesupadam Infra Projects"
                width={180}
                height={120}
                className="h-16 w-auto object-contain brightness-0 invert"
              />
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-blue-100/80">
              Established in 2011, Yesupadam Infra Projects provides
              professional civil, infrastructure, maintenance, and building
              services for residential and corporate projects.
            </p>

            <Link
              href="/about"
              className="group mt-5 inline-flex cursor-pointer items-center gap-2 text-sm font-semibold text-[#F6BB03] transition-colors hover:text-white"
            >
              Learn More
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>

            <div className="mt-5 h-0.5 w-10 bg-[#F6BB03]" />

            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex cursor-pointer items-center gap-2 text-sm text-blue-100/80 transition-colors duration-300 hover:text-white"
                  >
                    <ArrowRight className="h-3.5 w-3.5 text-[#F6BB03] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white">Our Services</h3>

            <div className="mt-5 h-0.5 w-10 bg-[#F6BB03]" />

            <ul className="mt-5 space-y-3">
              {services.map((service) => (
                <li
                  key={service}
                  className="flex items-center gap-2 text-sm text-blue-100/80"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#00B6FD]" />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>

            <div className="mt-5 h-0.5 w-10 bg-[#F6BB03]" />

            <div className="mt-5 space-y-5">
              {/* Address */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=EWSH+305+306+Road+No+3+KPHB+Phase+2+Hyderabad+Telangana"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex cursor-pointer gap-3"
              >
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-[#00B6FD] transition-colors group-hover:bg-[#00B6FD] group-hover:text-white">
                  <MapPin className="h-4 w-4" />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#F6BB03]">
                    Address
                  </p>
                  <p className="mt-1 text-sm leading-6 text-blue-100/80 transition-colors group-hover:text-white">
                    EWSH 305, 306, Road No. 3,
                    <br />
                    KPHB Phase 2, Hyderabad,
                    <br />
                    Telangana
                  </p>
                </div>
              </a>

              {/* Phone */}
              <div className="flex gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-[#00B6FD]">
                  <Phone className="h-4 w-4" />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#F6BB03]">
                    Phone
                  </p>

                  <div className="mt-1 flex flex-col">
                    <a
                      href="tel:+918978814567"
                      className="cursor-pointer text-sm text-blue-100/80 transition-colors hover:text-white"
                    >
                      +91 89788 14567
                    </a>

                    <a
                      href="tel:+919887871313"
                      className="cursor-pointer text-sm text-blue-100/80 transition-colors hover:text-white"
                    >
                      +91 98878 71313
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <a
                href="mailto:civil@yesupadaminfradevelop.com"
                className="group flex cursor-pointer gap-3"
              >
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-[#00B6FD] transition-colors group-hover:bg-[#00B6FD] group-hover:text-white">
                  <Mail className="h-4 w-4" />
                </div>

                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#F6BB03]">
                    Email
                  </p>

                  <p className="mt-1 break-all text-sm text-blue-100/80 transition-colors group-hover:text-white">
                    civil@yesupadaminfradevelop.com
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Clients Strip */}
        <div className="border-t border-white/10 py-7">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F6BB03]">
                Trusted By
              </p>
              <p className="mt-2 text-sm text-blue-100/60">
                Wipro · ISB · LTIMindtree · Franklin Templeton · Netlec ·
                BluSpring
              </p>
            </div>

            <div className="flex items-center gap-2 text-sm text-blue-100/60">
              <Building2 className="h-4 w-4 text-[#00B6FD]" />
              <span>Infrastructure & Civil Works Since 2011</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col gap-4 border-t border-white/10 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-blue-100/60">
            © {new Date().getFullYear()} Yesupadam Infra Projects. All rights
            reserved.
          </p>

          <DevelopedByStaffArc />

          <div className="flex items-center gap-5">
            {/* Back to Top */}
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-white/20 text-white transition-all duration-300 hover:border-[#F6BB03] hover:bg-[#F6BB03] hover:text-[#012F7B]"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
