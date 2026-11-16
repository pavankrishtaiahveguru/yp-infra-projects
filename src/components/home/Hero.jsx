"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] overflow-hidden">
      {/* Full Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="h-full w-full object-cover"
        >
          <source src="/videos/yp-infra-hero.mp4" type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#012F7B]/45" />

        {/* Left Dark Gradient for Text */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#001F52]/30 via-[#012F7B]/15 to-[#012F7B]/20" />

        {/* Bottom Gradient */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#012F7B]/40 to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          {/* Established Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 backdrop-blur-md"
          >
            <span className="h-2 w-2 rounded-full bg-[#F6BB03]" />

            <span className="text-xs font-bold uppercase tracking-[0.18em] text-white sm:text-sm">
              Established in 2011
            </span>
          </motion.div>

          {/* Main Heading */}
          <h1 className="max-w-4xl text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            Building
            <br />
            <span className="text-white">Infrastructure</span>
            <br />
            <span className="text-[#F6BB03]">That Lasts.</span>
          </h1>

          {/* Accent */}
          <div className="mt-7 flex items-center gap-2">
            <span className="h-1 w-20 rounded-full bg-[#F6BB03]" />
            <span className="h-1 w-6 rounded-full bg-[#00B6FD]" />
          </div>

          {/* Description */}
          <p className="mt-7 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
            Yesupadam Infra Projects provides reliable civil, infrastructure,
            maintenance, and building solutions for residential and corporate
            projects.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/services"
              className="group flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#F6BB03] px-7 py-4 text-sm font-bold text-[#012F7B] shadow-xl transition-all duration-300 hover:bg-white hover:shadow-2xl"
            >
              Explore Services
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/contact"
              className="group flex cursor-pointer items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur-md transition-all duration-300 hover:border-white hover:bg-white hover:text-[#012F7B]"
            >
              Get In Touch
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Highlights */}
          <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3">
            {["Quality Work", "Reliable Service", "Professional Execution"].map(
              (item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle2 className="h-4 w-4 text-[#00B6FD]" />

                  <span className="text-xs font-semibold text-white/85 sm:text-sm">
                    {item}
                  </span>
                </motion.div>
              ),
            )}
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-7 right-8 z-10 hidden flex-col items-center gap-2 lg:flex"
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/60">
          Scroll
        </span>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="h-10 w-px bg-gradient-to-b from-[#F6BB03] to-transparent"
        />
      </motion.div>
    </section>
  );
}
