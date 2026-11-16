"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Building2, Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative flex min-h-[calc(100vh-80px)] items-center justify-center overflow-hidden bg-[#F8FAFC] px-4 py-16 sm:px-6 lg:px-8">
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-[#0182DE]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-32 h-96 w-96 rounded-full bg-[#F6BB03]/10 blur-3xl" />

      <div className="relative mx-auto w-full max-w-3xl text-center">
        {/* Icon */}
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-[#012F7B] shadow-xl shadow-[#012F7B]/20"
        >
          <Building2 className="h-10 w-10 text-white" />
        </motion.div>

        {/* 404 */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-8 text-[clamp(6rem,20vw,11rem)] font-extrabold leading-none tracking-tight text-[#012F7B]"
        >
          404
        </motion.h1>

        {/* Gold Accent */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mt-4 h-1 rounded-full bg-[#F6BB03]"
        />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="mt-7 text-2xl font-bold text-[#0F172A] sm:text-3xl">
            Page Not Found
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
            The page you're looking for doesn't exist or may have been moved.
            Let's get you back to the Yesupadam Infra Projects website.
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Link
            href="/"
            className="group flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-[#012F7B] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#012F7B]/20 transition-all duration-300 hover:bg-[#0151AD] hover:shadow-xl sm:w-auto"
          >
            <Home className="h-4 w-4" />
            Back to Home
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <Link
            href="/contact"
            className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-full border border-[#012F7B]/20 bg-white px-6 py-3 text-sm font-semibold text-[#012F7B] transition-all duration-300 hover:border-[#0151AD] hover:bg-[#F8FAFC] sm:w-auto"
          >
            Contact Us
          </Link>
        </motion.div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 flex items-center justify-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-400"
        >
          <span className="h-px w-8 bg-[#F6BB03]" />
          Yesupadam Infra Projects
          <span className="h-px w-8 bg-[#F6BB03]" />
        </motion.div>
      </div>
    </main>
  );
}
