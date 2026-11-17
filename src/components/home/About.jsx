"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Compass,
  Layers3,
  ShieldCheck,
  Wrench,
} from "lucide-react";

const features = [
  {
    icon: Compass,
    title: "PRECISION",
    description:
      "Careful planning and professional execution from foundation to finish.",
  },
  {
    icon: Layers3,
    title: "QUALITY",
    description:
      "Reliable materials and workmanship built for long-term performance.",
  },
  {
    icon: Wrench,
    title: "VERSATILITY",
    description:
      "Complete civil, maintenance, road, electrical and infrastructure solutions.",
  },
  {
    icon: ShieldCheck,
    title: "RELIABILITY",
    description:
      "Dependable execution focused on quality, timelines and client trust.",
  },
];

const leadership = [
  {
    role: "Proprietor",
    name: "KUDARI YESUPADAM",
  },
  {
    role: "Executive Director",
    name: "Kudari Ratna Kishore",
  },
];

export default function About() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      {/* Large Background Letter */}
      <div className="pointer-events-none absolute -right-10 top-0 select-none text-[18rem] font-serif font-bold leading-none text-slate-100/70 sm:text-[24rem] lg:text-[30rem]">
        Y
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-[#C9A84E] sm:text-xs">
            Our Philosophy
          </p>

          <h2 className="mt-4 max-w-3xl font-serif text-4xl font-medium leading-[1.05] text-[#0F172A] sm:text-5xl lg:text-6xl">
            Building With Purpose.
            <br />
            <span className="italic text-[#C9A84E]">
              Infrastructure That Lasts.
            </span>
          </h2>
        </motion.div>

        {/* Main Content */}
        <div className="mt-14 grid items-center gap-12 lg:mt-20 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto w-full max-w-[470px]"
          >
            <div className="relative aspect-[0.82] overflow-hidden rounded-sm">
              <Image
                src="/images/about-infra.jpg"
                alt="Yesupadam Infra Projects construction work"
                fill
                sizes="(max-width: 639px) calc(100vw - 2rem), 470px"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Decorative block */}
            <div className="absolute -bottom-8 -right-8 -z-10 h-40 w-40 bg-[#F3F0E8]" />

            {/* Small label */}
            <div className="absolute -bottom-5 left-5 bg-white px-5 py-4 shadow-lg sm:left-8">
              <p className="text-2xl font-bold text-[#012F7B]">2011</p>
              <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                Established
              </p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="max-w-2xl text-base leading-8 text-slate-500 sm:text-lg">
              Yesupadam Infra Projects is an established infrastructure and
              civil works company providing dependable solutions for
              residential, corporate and commercial projects.
            </p>

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-500 sm:text-lg">
              Since 2011, we have delivered professional construction,
              maintenance and infrastructure services with a strong focus on
              quality, reliability and practical execution.
            </p>

            {/* Leadership */}
            <div className="mt-8 grid gap-5 border-y border-slate-200 py-6 sm:grid-cols-2">
              {leadership.map((person, index) => (
                <motion.div
                  key={person.role}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C9A84E] sm:text-xs">
                    {person.role}
                  </p>

                  <p className="mt-2 text-base font-bold text-[#012F7B] sm:text-lg">
                    {person.name}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Gold Line */}
            <div className="mt-8 h-[2px] w-20 bg-[#C9A84E]" />

            {/* Features */}
            <div className="mt-10 grid gap-x-10 gap-y-9 sm:grid-cols-2">
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                    }}
                    className="group"
                  >
                    <Icon className="h-6 w-6 text-[#C9A84E] transition-transform duration-300 group-hover:-translate-y-1" />

                    <h3 className="mt-5 text-sm font-bold tracking-wide text-[#0F172A]">
                      {feature.title}
                    </h3>

                    <p className="mt-2 max-w-xs text-sm leading-6 text-slate-400">
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA */}
            <Link
              href="/about"
              className="group mt-10 inline-flex cursor-pointer items-center gap-3 text-sm font-bold uppercase tracking-[0.12em] text-[#012F7B]"
            >
              Discover More
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#C9A84E] transition-all duration-300 group-hover:bg-[#C9A84E] group-hover:text-white">
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
