import { Link } from "react-router-dom"
import { ArrowRight, BadgeCheck, HardHat, Ruler } from "lucide-react"
import { SITE_CONTAINER } from "@/components/layout/constants"

const PILLARS = [
  { Icon: Ruler, title: "Design-led", copy: "Architecture and interiors resolved before a single brick is laid." },
  { Icon: HardHat, title: "Self-executed", copy: "Our own site engineers and crews — no subcontracted guesswork." },
  { Icon: BadgeCheck, title: "Accountable", copy: "Fixed-cost contracts, staged billing and a written handover date." },
]

export default function AboutStrip() {
  return (
    <section className="bg-white py-20">
      <div className={`${SITE_CONTAINER} grid items-center gap-14 md:grid-cols-2`}>
        <div>
          <p className="montserrat font-700 mb-3 text-[11px] uppercase tracking-[0.3em] text-orange-600">
            About Reena Designs &amp; Constructions
          </p>
          <h2 className="montserrat font-800 text-2xl leading-snug md:text-3xl" style={{ color: "#1a2744" }}>
            India's design-led construction partner since 2010
          </h2>
          <div className="mt-3 h-0.5 w-16 rounded-full" style={{ background: "#FF5E00" }} />

          <p className="mt-6 max-w-lg text-sm leading-7 text-slate-500">
            We are a full-service construction company based in Midnapur, Paschim Midnapur,
            delivering turnkey building construction, architectural design, interior fit-outs
            and renovation across India under one contract.
            Over 15 years and 250+ completed projects, we have built a practice around a simple
            promise: the drawing you approve is the building you receive — on the date we committed to.
          </p>

          <ul className="mt-8 space-y-4">
            {PILLARS.map(({ Icon, title, copy }) => (
              <li key={title} className="flex items-start gap-3.5">
                <span className="mt-0.5 inline-flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-orange-50 text-orange-500">
                  <Icon size={17} strokeWidth={1.9} aria-hidden="true" />
                </span>
                <div>
                  <div className="montserrat font-700 text-sm" style={{ color: "#1a2744" }}>{title}</div>
                  <div className="text-[13px] leading-relaxed text-slate-500">{copy}</div>
                </div>
              </li>
            ))}
          </ul>

          <Link
            to="/about"
            className="btn-outline montserrat font-700 group mt-9 inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm"
          >
            Know More About Us
            <ArrowRight size={15} strokeWidth={2.2} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl" style={{ border: "1.5px solid #e8e8e8" }}>
            <img
              src="https://images.unsplash.com/photo-1567943183748-3a7542120c90?w=900&h=620&fit=crop&auto=format"
              alt="Completed residential building by Reena Designs & Constructions in Midnapur, Paschim Midnapur"
              className="h-[420px] w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-5 left-6 rounded-xl bg-white px-5 py-4 shadow-xl shadow-slate-900/10 ring-1 ring-slate-100">
            <div className="montserrat font-900 text-2xl leading-none" style={{ color: "#FF5E00" }}>15+</div>
            <div className="mt-1 text-[12px] font-semibold text-slate-500">Years building across India</div>
          </div>
        </div>
      </div>
    </section>
  )
}
