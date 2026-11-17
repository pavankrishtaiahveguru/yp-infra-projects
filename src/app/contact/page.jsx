"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Clock3,
  Send,
} from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-[100dvh] overflow-hidden bg-[#F8FAFC]">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#0182DE]/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#F6BB03]/5 blur-3xl" />

        <div className="absolute right-[5%] top-[8%] select-none text-[16rem] font-black leading-none text-[#012F7B]/[0.025]">
          YP
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        {/* Back */}
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/"
            className="group inline-flex cursor-pointer items-center gap-2 text-[11px] font-bold uppercase tracking-[0.25em] text-slate-400 transition-colors hover:text-[#012F7B]"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
            Back to Home
          </Link>
        </motion.div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 xl:gap-20">
          {/* Left Content */}
          <motion.section
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-between lg:py-4"
          >
            <div>
              {/* Label */}
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-9 bg-[#F6BB03]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C99D20]">
                  Get In Touch
                </span>
              </div>

              {/* Heading */}
              <h1 className="max-w-xl text-5xl font-extrabold leading-[0.95] tracking-[-0.04em] text-[#0F172A] sm:text-6xl lg:text-[4.5rem]">
                Let&apos;s Build
                <br />
                <span className="text-[#012F7B]">Something</span>
                <br />
                <span className="text-[#0182DE]">Strong.</span>
              </h1>

              <p className="mt-7 max-w-lg text-base leading-8 text-slate-500 sm:text-lg">
                Whether it&apos;s a residential project, corporate
                infrastructure, road work, or complete facility maintenance,
                Yesupadam Infra Projects is ready to bring your requirements to
                life with reliable execution.
              </p>
            </div>

            {/* Contact Details */}
            <div className="mt-12 grid gap-8 sm:grid-cols-2">
              {/* Address */}
              <div className="group">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full border border-[#F6BB03]/40 text-[#C99D20]">
                  <MapPin className="h-4 w-4" />
                </div>

                <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-slate-400">
                  Our Office
                </p>

                <p className="mt-2 max-w-[230px] text-sm font-semibold leading-6 text-[#0F172A]">
                  EWSH 305, 306, Road No. 3,
                  <br />
                  KPHB Phase 2,
                  <br />
                  Hyderabad, Telangana
                </p>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=EWSH+305+306+Road+No+3+KPHB+Phase+2+Hyderabad+Telangana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex cursor-pointer items-center gap-1 text-[9px] font-bold uppercase tracking-[0.2em] text-[#C99D20] transition-colors hover:text-[#012F7B]"
                >
                  Get Directions
                  <ArrowRight className="h-3 w-3" />
                </a>
              </div>

              {/* Phone */}
              <div>
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full border border-[#F6BB03]/40 text-[#C99D20]">
                  <Phone className="h-4 w-4" />
                </div>

                <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-slate-400">
                  Direct Connect
                </p>

                <div className="mt-2 space-y-1">
                  <a
                    href="tel:+918978814567"
                    className="block cursor-pointer text-sm font-semibold text-[#0F172A] transition-colors hover:text-[#012F7B]"
                  >
                    +91 89788 14567
                  </a>

                  <a
                    href="tel:+919887871313"
                    className="block cursor-pointer text-sm font-semibold text-[#0F172A] transition-colors hover:text-[#012F7B]"
                  >
                    +91 98878 71313
                  </a>
                </div>

                <a
                  href="tel:+918978814567"
                  className="mt-3 inline-flex cursor-pointer items-center gap-1 text-[9px] font-bold uppercase tracking-[0.2em] text-[#C99D20] transition-colors hover:text-[#012F7B]"
                >
                  Call Now
                  <ArrowRight className="h-3 w-3" />
                </a>
              </div>

              {/* Email */}
              <div>
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full border border-[#F6BB03]/40 text-[#C99D20]">
                  <Mail className="h-4 w-4" />
                </div>

                <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-slate-400">
                  Email
                </p>

                <a
                  href="mailto:civil@yesupadaminfradevelop.com"
                  className="mt-2 block break-all text-sm font-semibold text-[#0F172A] transition-colors hover:text-[#012F7B]"
                >
                  civil@yesupadaminfradevelop.com
                </a>

                <a
                  href="mailto:civil@yesupadaminfradevelop.com"
                  className="mt-3 inline-flex cursor-pointer items-center gap-1 text-[9px] font-bold uppercase tracking-[0.2em] text-[#C99D20] transition-colors hover:text-[#012F7B]"
                >
                  Send Email
                  <ArrowRight className="h-3 w-3" />
                </a>
              </div>
            </div>
          </motion.section>

          {/* Form Card */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-sm border border-slate-100 bg-white p-7 shadow-[0_25px_80px_rgba(15,23,42,0.10)] sm:p-10 lg:p-12">
              {/* Card Decoration */}
              <div className="absolute right-0 top-0 h-24 w-24 bg-[#012F7B]/[0.025]" />
              <div className="absolute right-0 top-0 h-24 w-1 bg-[#F6BB03]" />

              {/* Form Heading */}
              <div className="relative">
                <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#C99D20]">
                  Project Inquiry
                </p>

                <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0F172A] sm:text-4xl">
                  Tell Us About Your Project
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Share your requirements with us and our team will get back to
                  you.
                </p>
              </div>

              {/* Form */}
              <form className="relative mt-10 space-y-7">
                {/* Name + Phone */}
                <div className="grid gap-7 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#012F7B]"
                    >
                      Your Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter your name"
                      className="mt-3 w-full border-0 border-b border-slate-200 bg-transparent px-0 pb-3 text-sm text-[#0F172A] outline-none transition-colors placeholder:text-slate-300 focus:border-[#0182DE]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#012F7B]"
                    >
                      Contact Number
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      className="mt-3 w-full border-0 border-b border-slate-200 bg-transparent px-0 pb-3 text-sm text-[#0F172A] outline-none transition-colors placeholder:text-slate-300 focus:border-[#0182DE]"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#012F7B]"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    className="mt-3 w-full border-0 border-b border-slate-200 bg-transparent px-0 pb-3 text-sm text-[#0F172A] outline-none transition-colors placeholder:text-slate-300 focus:border-[#0182DE]"
                  />
                </div>

                {/* Service */}
                <div>
                  <label
                    htmlFor="service"
                    className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#012F7B]"
                  >
                    Service Required
                  </label>

                  <select
                    id="service"
                    name="service"
                    defaultValue=""
                    className="mt-3 w-full cursor-pointer border-0 border-b border-slate-200 bg-transparent px-0 pb-3 text-sm text-[#0F172A] outline-none transition-colors focus:border-[#0182DE]"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option value="road-works">Road Works</option>
                    <option value="civil-works">Civil Works</option>
                    <option value="electrical-works">Electrical Works</option>
                    <option value="plumbing-works">Plumbing Works</option>
                    <option value="hvac-works">HVAC Works</option>
                    <option value="painting-works">Painting Works</option>
                    <option value="drain-line-works">Drain Line Works</option>
                    <option value="maintenance-works">Maintenance Works</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#012F7B]"
                  >
                    Project Details
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about your project requirements..."
                    className="mt-3 w-full resize-none border-0 border-b border-slate-200 bg-transparent px-0 pb-3 text-sm leading-6 text-[#0F172A] outline-none transition-colors placeholder:text-slate-300 focus:border-[#0182DE]"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="group flex w-full cursor-pointer items-center justify-center gap-3 rounded-sm bg-[#012F7B] px-6 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-lg shadow-[#012F7B]/15 transition-all duration-300 hover:bg-[#0151AD] hover:shadow-xl"
                >
                  Send Project Inquiry
                  <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>

                <p className="text-center text-[10px] leading-5 text-slate-400">
                  We&apos;ll review your requirements and get back to you as
                  soon as possible.
                </p>
              </form>
            </div>
          </motion.section>
        </div>
      </div>
    </main>
  );
}
