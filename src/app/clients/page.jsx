"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Handshake,
  ShieldCheck,
  Users,
} from "lucide-react";

const clients = [
  {
    name: "Wipro",
    logo: "/images/clients/wipro.webp",
  },
  {
    name: "ISB",
    logo: "/images/clients/isb.webp",
  },
  {
    name: "LTI Mindtree",
    logo: "/images/clients/lti-mindtree.webp",
  },
  {
    name: "Franklin Templeton",
    logo: "/images/clients/franklin-templeton.webp",
  },
  {
    name: "Netlec",
    logo: "/images/clients/netlec.webp",
  },
  {
    name: "Bluspring",
    logo: "/images/clients/bluspring.webp",
  },
];

const values = [
  {
    icon: ShieldCheck,
    title: "Trusted Execution",
    description:
      "We focus on quality workmanship, dependable timelines, and professional project execution.",
  },
  {
    icon: Handshake,
    title: "Long-Term Relationships",
    description:
      "Our approach is built around transparency, communication, and lasting client relationships.",
  },
  {
    icon: Building2,
    title: "Complete Solutions",
    description:
      "From civil works to maintenance, we provide integrated solutions for diverse project needs.",
  },
];

export default function ClientsPage() {
  return (
    <main className="overflow-hidden bg-white">
      {/* Hero */}
      <section className="relative min-h-[calc(100dvh-5rem)] overflow-hidden bg-[#012F7B]">
        <Image
          src="/images/clients-hero.jpg"
          alt="Yesupadam Infra Projects client projects"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[#012F7B]/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#012F7B]/35 via-[#012F7B]/15 to-[#012F7B]/25" />

        <div className="relative mx-auto flex min-h-[calc(100dvh-5rem)] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-[#F6BB03]" />
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-white sm:text-sm">
                Our Clients
              </span>
            </div>

            <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Building Relationships.
              <br />
              <span className="text-[#F6BB03]">Delivering Results.</span>
            </h1>

            <div className="mt-7 flex items-center gap-2">
              <span className="h-1 w-16 rounded-full bg-[#F6BB03]" />
              <span className="h-1 w-5 rounded-full bg-[#0182DE]" />
            </div>

            <p className="mt-7 max-w-2xl text-base leading-8 text-blue-50/90 sm:text-lg">
              Yesupadam Infra Projects works with residential, corporate,
              industrial, and institutional clients to deliver dependable
              infrastructure and civil works solutions.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/projects"
                className="group flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#F6BB03] px-7 py-3.5 text-sm font-bold text-[#012F7B] shadow-lg transition-all duration-300 hover:bg-white hover:shadow-xl"
              >
                View Our Projects
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/contact"
                className="group flex cursor-pointer items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-[#012F7B]"
              >
                Get In Touch
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-[#F8FAFC] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-[#012F7B]">
                <Image
                  src="/images/client-meeting.jpg"
                  alt="Yesupadam Infra Projects client meeting"
                  fill
                  sizes="(max-width: 639px) calc(100vw - 2rem), (max-width: 1023px) calc(100vw - 3rem), (max-width: 1279px) calc(45vw - 4.05rem), 32rem"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#012F7B]/60 to-transparent" />
              </div>

              <div className="absolute -bottom-6 -right-4 rounded-2xl border border-slate-200 bg-white px-6 py-5 shadow-xl sm:-right-7">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F6BB03]/15">
                    <Users className="h-6 w-6 text-[#012F7B]" />
                  </div>

                  <div>
                    <p className="text-2xl font-extrabold leading-none text-[#012F7B]">
                      15+
                    </p>
                    <p className="mt-1 text-xs font-medium text-slate-500">
                      Years of Experience
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-[#012F7B]/10 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#012F7B] shadow-sm">
                <span className="h-2 w-2 rounded-full bg-[#F6BB03]" />
                Client First Approach
              </span>

              <h2 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
                Strong Partnerships.
                <br />
                <span className="text-[#0182DE]">Stronger Projects.</span>
              </h2>

              <div className="mt-6 flex items-center gap-2">
                <span className="h-1 w-14 rounded-full bg-[#F6BB03]" />
                <span className="h-1 w-5 rounded-full bg-[#0182DE]" />
              </div>

              <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
                Every successful project starts with understanding the
                client&apos;s requirements. At Yesupadam Infra Projects, we work
                closely with our clients to understand their goals, plan
                effectively, and deliver dependable results.
              </p>

              <p className="mt-4 text-base leading-8 text-slate-600">
                Whether it is a residential development, corporate facility,
                civil infrastructure project, or ongoing maintenance
                requirement, our focus remains the same — quality, reliability,
                and professional execution.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                {[
                  "Quality Work",
                  "Reliable Service",
                  "Professional Execution",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm font-semibold text-slate-700"
                  >
                    <CheckCircle2 className="h-4 w-4 text-[#0182DE]" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Actual Clients */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[#012F7B]/10 bg-[#F8FAFC] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#012F7B]">
              <span className="h-2 w-2 rounded-full bg-[#F6BB03]" />
              Our Clients
            </span>

            <h2 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-[#0F172A] sm:text-5xl">
              Trusted by Leading
              <span className="text-[#0182DE]"> Organizations.</span>
            </h2>

            <div className="mt-6 flex items-center justify-center gap-2">
              <span className="h-1 w-16 rounded-full bg-[#F6BB03]" />
              <span className="h-1 w-5 rounded-full bg-[#0182DE]" />
            </div>

            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
              We are proud to work with reputed organizations across corporate,
              institutional, industrial, and infrastructure projects.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {clients.map((client, index) => (
              <motion.article
                key={client.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0182DE]/30 hover:shadow-xl sm:p-8"
              >
                <div className="relative flex h-32 w-full items-center justify-center rounded-xl bg-[#F8FAFC] px-6">
                  <Image
                    src={client.logo}
                    alt={`${client.name} logo`}
                    fill
                    sizes="(max-width: 639px) calc(100vw - 5rem), (max-width: 1023px) calc(50vw - 4rem), 340px"
                    className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="mt-6 text-center">
                  <h3 className="text-lg font-bold text-[#0F172A]">
                    {client.name}
                  </h3>

                  <div className="mx-auto mt-3 flex items-center justify-center gap-2">
                    <span className="h-1 w-8 rounded-full bg-[#F6BB03]" />
                    <span className="h-1 w-3 rounded-full bg-[#0182DE]" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#F8FAFC] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {values.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#012F7B]/10">
                    <Icon className="h-7 w-7 text-[#012F7B]" />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-[#0F172A]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#012F7B] py-20 sm:py-24">
        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#0182DE]/30 blur-3xl" />
        <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-[#F6BB03]/10 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F6BB03]">
              Start Your Project
            </span>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
              Looking for a Reliable
              <br />
              <span className="text-[#0182DE]">Infrastructure Partner?</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-blue-100/80">
              Let&apos;s discuss your requirements and build a solution that
              meets your project goals.
            </p>

            <Link
              href="/contact"
              className="group mt-8 inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#F6BB03] px-8 py-4 text-sm font-bold text-[#012F7B] transition-all duration-300 hover:bg-white"
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
