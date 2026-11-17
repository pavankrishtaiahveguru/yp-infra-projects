"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Construction,
  Droplets,
  Hammer,
  Paintbrush,
  Settings,
  Wrench,
  Zap,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "IT Facility Maintenance Works",
    image: "/images/services/maintenance-works.jpg",
    icon: Settings,
    description:
      "Comprehensive building and facility maintenance services helping residential and corporate properties remain functional and reliable.",
    points: [
      "Building maintenance",
      "Corporate facility maintenance",
      "Repair and preventive maintenance",
    ],
  },
  {
    number: "02",
    title: "Road Works",
    image: "/images/services/road-works.jpg",
    icon: Construction,
    description:
      "Professional road construction and infrastructure works focused on durability, safety, and reliable execution.",
    points: [
      "Road construction and development",
      "Road maintenance and repair",
      "Surface preparation and finishing",
    ],
  },
  {
    number: "03",
    title: "Civil Works",
    image: "/images/services/civil-works.jpg",
    icon: Hammer,
    description:
      "Complete civil construction solutions delivered with attention to structural quality, workmanship, and project requirements.",
    points: [
      "Building and structural works",
      "Concrete and masonry works",
      "General civil construction",
    ],
  },
  {
    number: "04",
    title: "Electrical Works",
    image: "/images/services/electrical-works.jpg",
    icon: Zap,
    description:
      "Reliable electrical installation and maintenance solutions for residential, commercial, and corporate environments.",
    points: [
      "Electrical installation",
      "Maintenance and repair",
      "Electrical infrastructure works",
    ],
  },
  {
    number: "05",
    title: "Plumbing Works",
    image: "/images/services/plumbing-works.jpg",
    icon: Droplets,
    description:
      "Professional plumbing solutions covering installation, maintenance, repairs, and complete plumbing infrastructure.",
    points: [
      "Water supply systems",
      "Plumbing installation and repair",
      "Maintenance and pipeline works",
    ],
  },
  {
    number: "06",
    title: "HVAC Works",
    image: "/images/services/hvac-works.jpg",
    icon: Settings,
    description:
      "HVAC installation and maintenance services designed to provide dependable and efficient building climate solutions.",
    points: [
      "HVAC installation",
      "Maintenance and servicing",
      "Building ventilation solutions",
    ],
  },
  {
    number: "07",
    title: "Painting Works",
    image: "/images/services/painting-works.jpg",
    icon: Paintbrush,
    description:
      "Quality painting and finishing works that improve the appearance, protection, and overall finish of your property.",
    points: [
      "Interior and exterior painting",
      "Surface preparation",
      "Professional finishing works",
    ],
  },
  {
    number: "08",
    title: "Drain Line Works",
    image: "/images/services/drain-line-works.jpg",
    icon: Wrench,
    description:
      "Efficient drainage and pipeline solutions for proper water flow, maintenance, and long-term infrastructure performance.",
    points: [
      "Drain line installation",
      "Pipeline and drainage works",
      "Repair and maintenance",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="overflow-hidden bg-white">
      {/* Page Hero */}
      <section className="relative isolate flex min-h-[calc(100dvh-5rem)] items-center overflow-hidden bg-[#012F7B]">
        <Image
          src="/images/services/road-works.jpg"
          alt="Road construction and infrastructure works"
          fill
          priority
          loading="eager"
          sizes="100vw"
          className="object-cover object-[58%_center]"
        />
        <div className="absolute inset-0 bg-[#012F7B]/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#012F7B]/90 via-[#012F7B]/60 to-[#012F7B]/20" />

        <div className="relative mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="max-w-[700px]">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-4 py-2 shadow-sm backdrop-blur-sm"
            >
              <span className="h-2 w-2 rounded-full bg-[#F6BB03]" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-white sm:text-sm">
                What We Do
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08, ease: "easeOut" }}
              className="text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Complete <span className="text-[#F6BB03]">Infrastructure</span>{" "}
              <span className="text-white">Solutions.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16, ease: "easeOut" }}
              className="mt-6 max-w-2xl text-base leading-7 text-white/90 sm:text-lg sm:leading-8"
            >
              From civil construction and road works to electrical, plumbing,
              HVAC, painting, drainage, and maintenance, Yesupadam Infra
              Projects delivers dependable solutions for diverse project
              requirements.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.24, ease: "easeOut" }}
              className="mt-7 flex flex-wrap gap-3"
            >
              <Link
                href="/contact"
                className="group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#F6BB03] px-6 py-3.5 text-sm font-bold text-[#012F7B] shadow-lg transition-colors hover:bg-white"
              >
                Discuss Your Project
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="#services"
                className="inline-flex cursor-pointer items-center justify-center rounded-full border border-white/60 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
              >
                Explore Services
              </Link>
            </motion.div>

            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
              {[
                "Quality Work",
                "Reliable Service",
                "Professional Execution",
              ].map((highlight) => (
                <span
                  key={highlight}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white/95"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#F6BB03]" />
                  {highlight}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-white py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-20 sm:space-y-24 lg:space-y-32">
            {services.map((service, index) => {
              const Icon = service.icon;
              const reverse = index % 2 !== 0;

              return (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.7 }}
                  className="group"
                >
                  <div
                    className={`grid items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-20 ${
                      reverse ? "md:[&>div:first-child]:order-2" : ""
                    }`}
                  >
                    {/* Image */}
                    <div className="relative">
                      <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-2xl bg-[#F6BB03]/10 sm:-bottom-6 sm:-left-6 sm:h-32 sm:w-32" />

                      <div className="relative h-[320px] overflow-hidden rounded-[1.5rem] bg-slate-100 shadow-xl sm:h-[400px] md:h-[440px] lg:h-[500px] sm:rounded-[2rem]">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          sizes="(max-width: 639px) calc(100vw - 2rem), (max-width: 767px) calc(100vw - 3rem), (max-width: 1023px) calc(50vw - 3rem), (max-width: 1279px) calc(50vw - 4.5rem), 35.5rem"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-[#012F7B]/60 via-transparent to-transparent opacity-70" />

                        <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/90 shadow-lg backdrop-blur-sm sm:left-7 sm:top-7 sm:h-14 sm:w-14">
                          <Icon className="h-6 w-6 text-[#012F7B]" />
                        </div>

                        <div className="absolute bottom-5 left-5 sm:bottom-7 sm:left-7">
                          <span className="text-xs font-bold tracking-[0.25em] text-[#F6BB03]">
                            SERVICE {service.number}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Information */}
                    <div className="relative">
                      <div className="flex items-center gap-4">
                        <span className="text-sm font-bold tracking-[0.25em] text-[#F6BB03]">
                          {service.number}
                        </span>

                        <span className="h-px w-12 bg-[#F6BB03]" />
                      </div>

                      <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
                        {service.title}
                      </h2>

                      <div className="mt-5 h-1 w-16 rounded-full bg-[#0182DE]" />

                      <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
                        {service.description}
                      </p>

                      <div className="mt-7 space-y-3">
                        {service.points.map((point) => (
                          <div key={point} className="flex items-start gap-3">
                            <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#0182DE]" />

                            <span className="text-sm font-medium leading-6 text-slate-700 sm:text-base">
                              {point}
                            </span>
                          </div>
                        ))}
                      </div>

                      <Link
                        href="/contact"
                        className="group/link mt-8 inline-flex cursor-pointer items-center gap-2 text-sm font-bold text-[#012F7B]"
                      >
                        Discuss This Service
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#012F7B] py-20 sm:py-24">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[450px] w-[450px] rounded-full bg-[#0182DE]/20 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-[#F6BB03]/10 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#F6BB03]">
              Let&apos;s Build Together
            </p>

            <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
              Have a project in mind?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-blue-100/80">
              Tell us about your requirements and let our team help you with the
              right infrastructure and civil solutions.
            </p>

            <Link
              href="/contact"
              className="group mt-8 inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#F6BB03] px-8 py-4 text-sm font-bold text-[#012F7B] shadow-lg transition-all duration-300 hover:bg-[#ffd04a] hover:shadow-xl"
            >
              Get In Touch
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
