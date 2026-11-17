"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Clients", href: "/clients" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogoClick = (event) => {
    setIsOpen(false);

    if (window.location.pathname === "/") {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          aria-label="Yesupadam Infra Projects"
          className="flex h-16 shrink-0 items-center gap-2 sm:gap-3"
          onClick={handleLogoClick}
        >
          <Image
            src="/logo/yp-logo.png"
            alt="Yesupadam Infra Projects"
            width={180}
            height={120}
            priority
            className="h-full w-auto object-contain"
          />
          <span className="flex flex-col leading-tight">
            <span className="text-base font-bold leading-tight text-[#012F7B] sm:text-xl lg:text-2xl">
              Yesupadam
            </span>
            <span className="text-sm font-semibold leading-tight text-[#0151AD] sm:text-lg lg:text-xl">
              Infra Projects
            </span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="group relative cursor-pointer text-[15px] font-medium text-slate-700 transition-colors duration-300 hover:text-[#0151AD]"
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-[#F6BB03] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden items-center lg:flex">
          <Link
            href="/contact"
            className="group flex cursor-pointer items-center gap-2 rounded-full bg-[#012F7B] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#0151AD] hover:shadow-lg"
          >
            Get In Touch
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-slate-200 text-[#012F7B] transition-colors hover:bg-slate-50 lg:hidden"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-slate-100 bg-white lg:hidden"
          >
            <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6">
              <div className="flex flex-col">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="flex cursor-pointer items-center justify-between border-b border-slate-100 py-4 text-base font-medium text-slate-700 transition-colors hover:text-[#0151AD]"
                    >
                      {link.name}
                      <ArrowRight className="h-4 w-4 text-[#F6BB03]" />
                    </Link>
                  </motion.div>
                ))}

                {/* Mobile CTA */}
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="mt-5 flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#012F7B] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0151AD]"
                >
                  Get In Touch
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
