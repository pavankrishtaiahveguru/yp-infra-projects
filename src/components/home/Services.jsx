"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Road Works",
    image: "/images/services/road-works.jpg",
  },
  {
    number: "02",
    title: "Civil Works",
    image: "/images/services/civil-works.jpg",
  },
  {
    number: "03",
    title: "Electrical Works",
    image: "/images/services/electrical-works.jpg",
  },
  {
    number: "04",
    title: "Plumbing Works",
    image: "/images/services/plumbing-works.jpg",
  },
  {
    number: "05",
    title: "HVAC Works",
    image: "/images/services/hvac-works.jpg",
  },
  {
    number: "06",
    title: "Painting Works",
    image: "/images/services/painting-works.jpg",
  },
  {
    number: "07",
    title: "Drain Line Works",
    image: "/images/services/drain-line-works.jpg",
  },
  {
    number: "08",
    title: "Maintenance Works",
    image: "/images/services/maintenance-works.jpg",
  },
];

export default function Services() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-20 sm:py-24 lg:py-28">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-[#0182DE]/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[450px] w-[450px] rounded-full bg-[#F6BB03]/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mb-12 flex flex-col justify-between gap-6 sm:mb-16 lg:flex-row lg:items-end"
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#C9A84E]">
              Our Services
            </p>

            <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-[#0F172A] sm:text-5xl lg:text-6xl">
              What We <span className="text-[#012F7B]">Build.</span>
            </h2>

            <div className="mt-5 flex items-center gap-2">
              <span className="h-[2px] w-16 bg-[#F6BB03]" />
              <span className="h-[2px] w-5 bg-[#0182DE]" />
            </div>
          </div>

          <p className="max-w-lg text-sm leading-7 text-slate-500 sm:text-base">
            Reliable construction, infrastructure and maintenance solutions
            delivered with quality, precision and professional execution.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className="group"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-200">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#012F7B]/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Number */}
                <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center bg-white/95 text-xs font-bold text-[#012F7B]">
                  {service.number}
                </div>
              </div>

              {/* Content */}
              <div className="pt-5">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-bold leading-tight text-[#0F172A] transition-colors duration-300 group-hover:text-[#012F7B] sm:text-xl">
                    {service.title}
                  </h3>

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#012F7B]/20 text-[#012F7B] transition-all duration-300 group-hover:border-[#F6BB03] group-hover:bg-[#F6BB03]">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>

                {/* Gold Line */}
                <div className="mt-4 h-[2px] w-10 bg-[#F6BB03] transition-all duration-500 group-hover:w-16" />

                {/* Contact Button */}
                <Link
                  href="/contact"
                  className="mt-5 inline-flex cursor-pointer items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#012F7B] transition-colors duration-300 hover:text-[#0182DE]"
                >
                  Contact Us
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 flex flex-col items-start justify-between gap-5 border-t border-slate-200 pt-8 sm:flex-row sm:items-center"
        >
          <div>
            <p className="text-sm font-semibold text-[#0F172A] sm:text-base">
              Have a project in mind?
            </p>
            <p className="mt-1 text-sm text-slate-500">
              Let's discuss how we can help.
            </p>
          </div>

          <Link
            href="/contact"
            className="flex cursor-pointer items-center gap-2 rounded-full bg-[#012F7B] px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-[#0151AD] hover:shadow-lg"
          >
            Get In Touch
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
