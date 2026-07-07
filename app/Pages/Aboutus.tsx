"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

/* React Icons */
import {
  HiOutlineBadgeCheck,
  HiOutlineClock,
  HiOutlineCurrencyRupee,
  HiOutlineLightBulb,
  HiOutlineUserGroup,
  HiOutlineShieldCheck,
  HiOutlineOfficeBuilding,
  HiOutlineHeart,
  HiOutlineEye,
  HiOutlineFlag,
  HiOutlineCheck,
} from "react-icons/hi";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const stats = [
  { value: "15+", label: "Years of Experience" },
  { value: "500+", label: "Projects Delivered" },
  { value: "200+", label: "Happy Families" },
  { value: "50+", label: "Ongoing Projects" },
];

const values = [
  {
    icon: <HiOutlineBadgeCheck className="w-7 h-7" />,
    title: "Uncompromising Quality",
    text: "Every project is built to the highest standards of craftsmanship, using premium materials and time-tested construction practices that stand the test of time.",
  },
  {
    icon: <HiOutlineClock className="w-7 h-7" />,
    title: "On-Time Delivery",
    text: "We respect your time. Our disciplined project management ensures every milestone is met on schedule — no delays, no excuses.",
  },
  {
    icon: <HiOutlineCurrencyRupee className="w-7 h-7" />,
    title: "Transparent Pricing",
    text: "No hidden costs, no surprise bills. We provide detailed, upfront quotations so you always know exactly where your investment goes.",
  },
  {
    icon: <HiOutlineLightBulb className="w-7 h-7" />,
    title: "Innovation-Driven Design",
    text: "We blend contemporary aesthetics with functional engineering, bringing fresh ideas and modern solutions to every residential and commercial space.",
  },
  {
    icon: <HiOutlineUserGroup className="w-7 h-7" />,
    title: "Client-First Approach",
    text: "Your vision is our blueprint. We listen, collaborate, and refine at every stage to ensure the final result is nothing short of what you imagined.",
  },
  {
    icon: <HiOutlineShieldCheck className="w-7 h-7" />,
    title: "Safety & Compliance",
    text: "We strictly adhere to all building codes, safety regulations, and environmental standards — ensuring every structure is safe, legal, and sustainable.",
  },
];

const milestones = [
  { year: "2009", event: "Founded by Reena with a small team and a big vision for quality construction." },
  { year: "2013", event: "Expanded into interior design services, offering end-to-end solutions under one roof." },
  { year: "2017", event: "Completed our 200th project — spanning villas, apartments, and commercial spaces." },
  { year: "2021", event: "Introduced 3D visualisation and sustainable building practices across all projects." },
  { year: "2025", event: "Crossed 500+ completed projects with an expanding footprint across multiple cities." },
];

const whyChooseUs = [
  "End-to-end project management — from architectural planning to final handover",
  "A dedicated team of licensed architects, structural engineers, and interior designers",
  "In-house quality control with multi-stage inspection at every construction phase",
  "Use of ISI-certified, premium-grade materials sourced from trusted suppliers",
  "Advanced 3D walkthroughs so you can experience your space before it's built",
  "Post-construction support with comprehensive warranty and maintenance assistance",
];

/* ------------------------------------------------------------------ */
/*  Scroll-reveal hook                                                 */
/* ------------------------------------------------------------------ */

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function AboutUs() {
  const story = useReveal();
  const valuesSection = useReveal();
  const timeline = useReveal();
  const why = useReveal();
  const cta = useReveal();

  return (
    <main className="bg-white">
      {/* ============================================================= */}
      {/*  HERO                                                         */}
      {/* ============================================================= */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-white">
        {/* Decorative accent */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF5F1F]/8 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-400/8 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gray-100/60 rounded-full blur-[100px]" />

        <div className="relative z-10 text-center px-6 max-w-3xl py-32">
          <p className="text-[#FF5F1F] tracking-[0.35em] uppercase text-xs font-light mb-5">
            About Us
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-gray-900 leading-tight mb-6">
            More Than Builders —{" "}
            <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5F1F] to-amber-400">
              We Are Your Construction Partners
            </span>
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            At Reena Designs &amp; Constructions, we don&apos;t just build structures — we craft
            spaces that reflect your aspirations, rooted in trust, transparency, and
            an unwavering commitment to excellence.
          </p>
        </div>
      </section>

      {/* ============================================================= */}
      {/*  AT A GLANCE — Stats                                          */}
      {/* ============================================================= */}
      <section className="relative z-20 px-6 py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl shadow-lg shadow-black/5 border border-gray-100 p-6 text-center hover:shadow-2xl hover:-translate-y-1 transition-all duration-500"
            >
              <p className="text-3xl sm:text-4xl font-light text-[#FF5F1F] mb-1 group-hover:scale-110 transition-transform duration-300">
                {s.value}
              </p>
              <p className="text-xs sm:text-sm text-gray-500 font-light tracking-wide uppercase">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================= */}
      {/*  OUR STORY                                                    */}
      {/* ============================================================= */}
      <section className="bg-white py-24 sm:py-32 px-6">
        <div
          ref={story.ref}
          className={`max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center transition-all duration-700 ${
            story.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Left — decorative block */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 flex items-center justify-center overflow-hidden">
              {/* Blueprint-style decorative grid */}
              <div className="absolute inset-0 opacity-[0.04]" style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.3) 1px, transparent 1px)`,
                backgroundSize: '30px 30px'
              }} />
              <div className="relative text-center p-8">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#FF5F1F] to-amber-400 flex items-center justify-center">
                  <HiOutlineOfficeBuilding className="w-8 h-8 text-white" />
                </div>
                <p className="text-gray-400 text-sm font-light">Established 2009</p>
                <p className="text-gray-700 text-lg font-light mt-1">Building with Purpose</p>
              </div>
            </div>
            {/* Floating accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-[#FF5F1F]/10 -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-amber-400/10 -z-10" />
          </div>

          {/* Right — text */}
          <div>
            <p className="text-[#FF5F1F] tracking-[0.3em] uppercase text-xs font-light mb-3">
              Our Story
            </p>
            <h2 className="text-3xl sm:text-4xl font-light text-gray-900 leading-snug mb-6">
              A Legacy Built on{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5F1F] to-amber-400">
                Trust &amp; Excellence
              </span>
            </h2>
            <div className="space-y-4 text-gray-500 text-base font-light leading-relaxed">
              <p>
                What started as a modest construction firm in 2009 has grown into one of
                the region&apos;s most trusted names in residential and commercial construction.
                Founded by Reena, the company was born from a simple yet powerful belief:
                every family deserves a home built with integrity, and every business
                deserves a space designed for success.
              </p>
              <p>
                Over the past 15 years, we have evolved from a traditional building
                contractor into a full-service construction and interior design studio. Our
                multidisciplinary team of architects, structural engineers, and designers
                works in concert to deliver projects that are not just structurally sound
                but aesthetically inspiring.
              </p>
              <p>
                Today, with over 500 completed projects and a growing portfolio of landmark
                developments, we continue to push the boundaries of design and construction —
                always with our clients at the centre of everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/*  CORE VALUES                                                  */}
      {/* ============================================================= */}
      <section className="bg-gray-50 py-24 sm:py-32 px-6">
        <div
          ref={valuesSection.ref}
          className={`max-w-6xl mx-auto transition-all duration-700 ${
            valuesSection.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-16">
            <p className="text-[#FF5F1F] tracking-[0.3em] uppercase text-xs font-light mb-3">
              What We Stand For
            </p>
            <h2 className="text-3xl sm:text-4xl font-light text-gray-900">
              Our Core Values
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl border border-gray-100 p-8 hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1 transition-all duration-500"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-[#FF5F1F]/10 text-[#FF5F1F] flex items-center justify-center mb-5 group-hover:bg-[#FF5F1F] group-hover:text-white transition-all duration-300">
                  {v.icon}
                </div>
                <h3 className="text-lg font-normal text-gray-900 mb-2">{v.title}</h3>
                <p className="text-sm text-gray-500 font-light leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/*  TIMELINE / MILESTONES                                        */}
      {/* ============================================================= */}
      <section className="bg-white py-24 sm:py-32 px-6">
        <div
          ref={timeline.ref}
          className={`max-w-4xl mx-auto transition-all duration-700 ${
            timeline.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-16">
            <p className="text-[#FF5F1F] tracking-[0.3em] uppercase text-xs font-light mb-3">
              Our Journey
            </p>
            <h2 className="text-3xl sm:text-4xl font-light text-gray-900">
              Key Milestones
            </h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#FF5F1F]/30 via-amber-400/30 to-transparent" />

            <div className="space-y-12">
              {milestones.map((m, i) => (
                <div
                  key={i}
                  className={`relative flex items-start gap-8 md:gap-12 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#FF5F1F] ring-4 ring-[#FF5F1F]/20 z-10" />

                  {/* Content */}
                  <div className={`ml-14 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <span className="inline-block text-[#FF5F1F] text-sm font-normal tracking-wide mb-1">
                      {m.year}
                    </span>
                    <p className="text-gray-600 text-sm font-light leading-relaxed">
                      {m.event}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/*  WHY CHOOSE US                                                */}
      {/* ============================================================= */}
      <section className="bg-gray-50 py-24 sm:py-32 px-6">
        <div
          ref={why.ref}
          className={`max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center transition-all duration-700 ${
            why.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div>
            <p className="text-[#FF5F1F] tracking-[0.3em] uppercase text-xs font-light mb-3">
              Why Reena Designs
            </p>
            <h2 className="text-3xl sm:text-4xl font-light text-gray-900 leading-snug mb-6">
              What Sets Us{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5F1F] to-amber-400">
                Apart
              </span>
            </h2>
            <p className="text-gray-500 text-base font-light leading-relaxed mb-8">
              Choosing the right construction partner is one of the most important
              decisions you&apos;ll make. Here&apos;s why hundreds of families and businesses
              have placed their trust in us.
            </p>
          </div>

          <div className="space-y-4">
            {whyChooseUs.map((point, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-white rounded-xl border border-gray-100 p-5 hover:shadow-lg hover:shadow-black/5 transition-all duration-300"
              >
                <div className="mt-0.5 w-6 h-6 flex-shrink-0 rounded-full bg-[#FF5F1F]/10 flex items-center justify-center">
                  <HiOutlineCheck className="w-3.5 h-3.5 text-[#FF5F1F]" />
                </div>
                <p className="text-gray-600 text-sm font-light leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/*  PURPOSE, VISION & MISSION                                    */}
      {/* ============================================================= */}
      <section className="bg-white py-24 sm:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#FF5F1F] tracking-[0.3em] uppercase text-xs font-light mb-3">
              Guiding Principles
            </p>
            <h2 className="text-3xl sm:text-4xl font-light text-gray-900">
              Purpose, Vision &amp; Mission
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Purpose */}
            <div className="relative bg-gradient-to-br from-gray-950 to-gray-900 rounded-2xl p-8 text-white overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF5F1F]/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-lg bg-[#FF5F1F]/20 flex items-center justify-center mb-5">
                  <HiOutlineHeart className="w-5 h-5 text-[#FF5F1F]" />
                </div>
                <h3 className="text-lg font-normal mb-3">Our Purpose</h3>
                <p className="text-gray-400 text-sm font-light leading-relaxed">
                  To create spaces that enhance the quality of life — homes that families
                  cherish, and workplaces that inspire productivity and growth.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="relative bg-gradient-to-br from-[#FF5F1F] to-amber-500 rounded-2xl p-8 text-white overflow-hidden group">
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center mb-5">
                  <HiOutlineEye className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-normal mb-3">Our Vision</h3>
                <p className="text-white/90 text-sm font-light leading-relaxed">
                  To be the most trusted name in construction and design — known for
                  redefining living and working spaces through innovation, sustainability,
                  and unmatched craftsmanship.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="relative bg-gradient-to-br from-gray-950 to-gray-900 rounded-2xl p-8 text-white overflow-hidden group">
              <div className="absolute top-0 left-0 w-32 h-32 bg-amber-400/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-lg bg-[#FF5F1F]/20 flex items-center justify-center mb-5">
                  <HiOutlineFlag className="w-5 h-5 text-[#FF5F1F]" />
                </div>
                <h3 className="text-lg font-normal mb-3">Our Mission</h3>
                <p className="text-gray-400 text-sm font-light leading-relaxed">
                  To deliver world-class construction and interior design solutions that
                  exceed expectations — on time, within budget, and with an unwavering
                  focus on quality and client satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/*  CTA                                                          */}
      {/* ============================================================= */}
      <section className="relative bg-gray-950 py-24 sm:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF5F1F]/5 rounded-full blur-[150px]" />

        <div
          ref={cta.ref}
          className={`relative z-10 max-w-2xl mx-auto text-center transition-all duration-700 ${
            cta.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-[#FF5F1F] tracking-[0.3em] uppercase text-xs font-light mb-5">
            Let&apos;s Build Together
          </p>
          <h2 className="text-3xl sm:text-4xl font-light text-white mb-6 leading-snug">
            Ready to Turn Your Vision{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5F1F] to-amber-400">
              Into Reality?
            </span>
          </h2>
          <p className="text-gray-400 text-base font-light leading-relaxed mb-10 max-w-lg mx-auto">
            Whether you&apos;re planning a new home, renovating an existing space, or
            designing a commercial property — our team is ready to bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="rounded-full bg-[#FF5F1F] px-8 py-3.5 text-sm font-light text-white hover:bg-[#e65519] transition-colors duration-300"
            >
              Start Your Project
            </Link>
            <Link
              href="/projects"
              className="rounded-full border border-gray-700 px-8 py-3.5 text-sm font-light text-gray-300 hover:border-gray-500 hover:text-white transition-all duration-300"
            >
              View Our Portfolio
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
