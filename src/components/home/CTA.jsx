"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone, HardHat } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#012F7B] py-20 sm:py-24">
      {/* Background Elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#0182DE]/30 blur-3xl" />
        <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-[#F6BB03]/15 blur-3xl" />

        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(#ffffff_1px,transparent_1px),linear-gradient(90deg,#ffffff_1px,transparent_1px)] [background-size:50px_50px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] px-6 py-12 backdrop-blur-sm sm:px-10 sm:py-14 lg:px-16"
        >
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            {/* Content */}
            <div className="max-w-3xl">
              <div className="mb-5 inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#F6BB03]" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F6BB03]">
                  Let&apos;s Build Together
                </span>
              </div>

              <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
                Ready to Build Something
                <span className="text-[#0182DE]"> Strong?</span>
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-blue-100/80 sm:text-lg">
                From civil and road works to electrical, plumbing, HVAC,
                painting, and maintenance, Yesupadam Infra Projects delivers
                dependable solutions with quality and professional execution.
              </p>

              {/* Trust Points */}
              <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
                {[
                  "Quality Work",
                  "Reliable Service",
                  "Professional Execution",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm font-medium text-blue-100"
                  >
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#F6BB03]/15">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#F6BB03]" />
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href="/contact"
                className="group flex cursor-pointer items-center justify-center gap-3 rounded-full bg-[#F6BB03] px-7 py-3.5 text-sm font-bold text-[#012F7B] shadow-lg transition-all duration-300 hover:bg-[#ffd34d] hover:shadow-xl"
              >
                Get In Touch
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <a
                href="tel:+918978814567"
                className="flex cursor-pointer items-center justify-center gap-3 rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-white/15"
              >
                <Phone className="h-4 w-4 text-[#F6BB03]" />
                Call Us
              </a>
            </div>
          </div>

          {/* Decorative Icon */}
          <div className="pointer-events-none absolute -bottom-16 -right-8 hidden opacity-[0.05] sm:block">
            <HardHat className="h-64 w-64 text-white" strokeWidth={1} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}