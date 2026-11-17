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

  const handleBrandClick = (event) => {
    setIsOpen(false);

    if (window.location.pathname === "/") {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur-md">
      <nav className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <Link
          href="/"
          aria-label="Yesupadam Infra Projects"
          onClick={handleBrandClick}
          className="flex cursor-pointer items-center gap-3"
        >
          <Image
            src="/logo/yp-logo.png"
            alt="Yesupadam Infra Projects logo"
            width={58}
            height={58}
            priority
            className="h-18 w-18 object-contain"
          />

          <span className="flex flex-col leading-none">
            <span className="text-lg font-extrabold tracking-tight text-[#012F7B] sm:text-3xl lg:text-[2rem]">
              Yesupadam Infra Projects
            </span>

            
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 lg:flex xl:gap-9">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="group relative cursor-pointer text-[15px] font-medium text-slate-700 transition-colors duration-300 hover:text-[#0151AD]"
            >
              {link.name}

              <span className="absolute -bottom-2 left-0 h-[2px] w-0 rounded-full bg-[#F6BB03] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="group hidden cursor-pointer items-center gap-2 rounded-full bg-[#012F7B] px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-[#0151AD] hover:shadow-lg lg:flex"
        >
          Get In Touch
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl border border-slate-200 bg-white text-[#012F7B] transition-all duration-300 hover:border-[#012F7B]/30 hover:bg-slate-50 lg:hidden"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-t border-slate-100 bg-white lg:hidden"
          >
            <div className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6">
              <div className="flex flex-col">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.2,
                      delay: index * 0.05,
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="flex cursor-pointer items-center justify-between border-b border-slate-100 py-4 text-base font-semibold text-slate-700 transition-colors duration-300 hover:text-[#0151AD]"
                    >
                      <span>{link.name}</span>
                      <ArrowRight className="h-4 w-4 text-[#F6BB03]" />
                    </Link>
                  </motion.div>
                ))}

                {/* Mobile CTA */}
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="mt-5 flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#012F7B] px-5 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-[#0151AD]"
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
