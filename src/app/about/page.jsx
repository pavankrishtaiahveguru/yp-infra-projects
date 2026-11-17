"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  HardHat,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";

const highlights = [
  {
    icon: Building2,
    title: "Established in 2011",
    description:
      "Built on years of practical experience across civil and infrastructure projects.",
  },
  {
    icon: ShieldCheck,
    title: "Quality & Reliability",
    description:
      "Focused on dependable execution, quality workmanship, and long-term results.",
  },
  {
    icon: Users,
    title: "Experienced Team",
    description:
      "A professional team committed to delivering projects with precision and responsibility.",
  },
  {
    icon: Target,
    title: "Professional Execution",
    description:
      "From planning to completion, every project is handled with attention to detail.",
  },
];

const clients = [
  "Wipro",
  "ISB",
  "LTI Mindtree",
  "Franklin Templeton",
  "Netlec",
  "Bluspring",
];

const leadership = [
  {
    name: "KUDARI YESUPADAM",
    role: "Proprietor",
    description:
      "Leading Yesupadam Infra Projects with a strong focus on quality, reliability, and dependable project execution.",
  },
  {
    name: "Kudari Ratna Kishore",
    role: "Executive Director",
    description:
      "Supporting the organization's growth through professional project coordination, client relationships, and effective execution.",
  },
];

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-white">
      {/* Hero */}
      <section className="relative isolate flex min-h-[calc(100dvh-5rem)] items-center overflow-hidden bg-[#012F7B]">
        <Image
          src="/images/about-infra.jpg"
          alt="Infrastructure and civil construction project"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-[#012F7B]/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#012F7B]/90 via-[#012F7B]/60 to-[#012F7B]/20" />

        <div className="relative mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-4 py-2 backdrop-blur-sm"
            >
              <span className="h-2 w-2 rounded-full bg-[#F6BB03]" />
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-white sm:text-sm sm:tracking-[0.2em]">
                About Yesupadam Infra Projects
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08, ease: "easeOut" }}
              className="text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Building with <span className="text-sky-300">Experience.</span>
              <br />
              Delivering with <span className="text-[#F6BB03]">Trust.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16, ease: "easeOut" }}
              className="mt-6 max-w-2xl text-base leading-7 text-white/90 sm:text-lg sm:leading-8"
            >
              Yesupadam Infra Projects is an established infrastructure and
              civil works company delivering reliable solutions for residential,
              corporate, and maintenance projects.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.24, ease: "easeOut" }}
              className="mt-7 flex flex-wrap gap-3"
            >
              <Link
                href="/services"
                className="group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#F6BB03] px-6 py-3.5 text-sm font-bold text-[#012F7B] shadow-lg transition-colors hover:bg-white"
              >
                Our Services
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/contact"
                className="group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-white/60 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
              >
                Get In Touch
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main About */}
      <section className="relative bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative h-[520px] overflow-hidden rounded-[2rem] sm:h-[620px]">
                <Image
                  src="/images/about-infra.jpg"
                  alt="Yesupadam Infra Projects construction work"
                  fill
                  sizes="(max-width: 639px) calc(100vw - 2rem), (max-width: 1023px) calc(100vw - 3rem), (max-width: 1279px) calc(45vw - 4.05rem), 32rem"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#012F7B]/70 via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-9">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F6BB03]">
                    Yesupadam Infra Projects
                  </p>

                  <h2 className="mt-2 max-w-md text-3xl font-bold leading-tight text-white sm:text-4xl">
                    Strong foundations.
                    <br />
                    Dependable results.
                  </h2>
                </div>
              </div>

              {/* Experience Card */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-6 -right-4 rounded-2xl border border-slate-200 bg-white px-6 py-5 shadow-xl sm:-right-7"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F6BB03]/15">
                    <HardHat className="h-6 w-6 text-[#012F7B]" />
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
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#F6BB03]">
                Who We Are
              </p>

              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
                Infrastructure built on{" "}
                <span className="text-[#012F7B]">experience.</span>
              </h2>

              <div className="mt-6 h-1 w-20 rounded-full bg-[#F6BB03]" />

              <div className="mt-7 space-y-5 text-base leading-8 text-slate-600">
                <p>
                  Established in 2011, Yesupadam Infra Projects has been
                  providing professional civil, infrastructure, and maintenance
                  solutions across a wide range of projects.
                </p>

                <p>
                  Our work covers residential projects, IT company maintenance,
                  civil works, road works, electrical works, plumbing, HVAC,
                  painting, drain line works, and other related infrastructure
                  requirements.
                </p>

                <p>
                  We believe successful projects are built through quality
                  workmanship, reliable service, professional execution, and a
                  strong commitment to every client&apos;s requirements.
                </p>
              </div>

              <Link
                href="/contact"
                className="group mt-8 inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#012F7B] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#012F7B]/20 transition-all duration-300 hover:bg-[#0151AD] hover:shadow-xl"
              >
                Discuss Your Project
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-[#F8FAFC] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#F6BB03]">
              Our Leadership
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-[#0F172A] sm:text-4xl lg:text-5xl">
              Leadership Behind
              <span className="text-[#012F7B]"> Our Vision.</span>
            </h2>

            <div className="mt-5 flex items-center justify-center gap-2">
              <span className="h-1 w-14 rounded-full bg-[#F6BB03]" />
              <span className="h-1 w-5 rounded-full bg-[#0182DE]" />
            </div>

            <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
              Guided by experienced leadership with a commitment to quality,
              reliability, and long-term client relationships.
            </p>
          </motion.div>

          <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
            {leadership.map((person, index) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0182DE]/30 hover:shadow-xl sm:p-8"
              >
                <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-[#012F7B]/5 transition-colors duration-300 group-hover:bg-[#0182DE]/10" />

                <div className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#012F7B]/10">
                    <Users className="h-7 w-7 text-[#012F7B]" />
                  </div>

                  <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-[#F6BB03]">
                    {person.role}
                  </p>

                  <h3 className="mt-2 text-2xl font-extrabold text-[#0F172A] sm:text-3xl">
                    {person.name}
                  </h3>

                  <div className="mt-4 flex items-center gap-2">
                    <span className="h-1 w-10 rounded-full bg-[#F6BB03]" />
                    <span className="h-1 w-4 rounded-full bg-[#0182DE]" />
                  </div>

                  <p className="mt-5 text-sm leading-7 text-slate-600">
                    {person.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#F6BB03]">
              Our Approach
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-[#0F172A] sm:text-4xl">
              Why clients choose us
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              We focus on dependable execution and practical solutions that
              create lasting value.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#0182DE]/30 hover:shadow-xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#012F7B]/5 transition-colors duration-300 group-hover:bg-[#012F7B]">
                    <Icon className="h-6 w-6 text-[#012F7B] transition-colors duration-300 group-hover:text-[#F6BB03]" />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-[#0F172A]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="bg-[#012F7B] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#F6BB03]">
                Our Clients
              </p>

              <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
                Trusted by leading organizations.
              </h2>

              <p className="mt-4 max-w-md text-sm leading-7 text-blue-100/75">
                Our experience includes working with established organizations
                across corporate and infrastructure environments.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-3 sm:grid-cols-3"
            >
              {clients.map((client) => (
                <div
                  key={client}
                  className="flex min-h-[80px] items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 text-center text-sm font-bold text-white transition-colors duration-300 hover:bg-white/10"
                >
                  {client}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative overflow-hidden bg-white py-20 sm:py-24">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[400px] w-[400px] rounded-full bg-[#0182DE]/10 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#F6BB03]">
              Let&apos;s Build Together
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-[#0F172A] sm:text-4xl lg:text-5xl">
              Have a project in mind?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600">
              Talk to Yesupadam Infra Projects about your civil, infrastructure,
              maintenance, or building requirements.
            </p>

            <Link
              href="/contact"
              className="group mt-8 inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#012F7B] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#012F7B]/20 transition-all duration-300 hover:bg-[#0151AD] hover:shadow-xl"
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
