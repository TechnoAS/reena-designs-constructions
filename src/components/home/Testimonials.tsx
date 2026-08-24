import { useState } from "react"
import { Quote, Star, ChevronLeft, ChevronRight, BadgeCheck } from "lucide-react"
import SectionTitle from "@/components/ui/SectionTitle"

const testimonials = [
  {
    name: "Rajesh Mehta",
    role: "Homeowner, Midnapur",
    project: "3,200 sq ft residence",
    quote:
      "Reena Designs & Constructions handed over our home eleven days ahead of the contracted date, and the finish matched the 3D elevation almost exactly. Costing stayed where it started — no revised estimates halfway through.",
  },
  {
    name: "Priya Dutta",
    role: "Director, Dutta & Associates",
    project: "Office fit-out, Kharagpur",
    quote:
      "They ran our office renovation around a live workday without losing a single hour of business. The site engineer sent progress photographs every evening. That level of communication is rare in this trade.",
  },
  {
    name: "Amit Banerjee",
    role: "Property Owner, Ghatal",
    project: "Structural renovation",
    quote:
      "I had three quotes. Reena's was not the cheapest, but it was the only one that itemised every material grade. Eighteen months on, not one snag has resurfaced. Worth every rupee.",
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const total = testimonials.length
  const t = testimonials[active]
  const go = (dir: number) => setActive((i) => (i + dir + total) % total)

  return (
    <section className="py-20" style={{ background: "#f7f7f7" }}>
      <div className="mx-auto max-w-4xl px-6">
        <SectionTitle
          eyebrow="Client testimonials"
          title="TRUSTED BY 200+ CLIENTS ACROSS INDIA"
          subtitle="Rated 4.9 out of 5 across 200+ completed residential and commercial projects."
        />

        <div className="relative rounded-2xl bg-white px-8 py-10 text-center md:px-14" style={{ border: "1.5px solid #e8e8e8" }}>
          <Quote size={36} strokeWidth={1.5} className="mx-auto mb-5 text-orange-500/25" aria-hidden="true" />

          <div className="mb-5 flex justify-center gap-1" aria-label="Rated 5 out of 5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={15} strokeWidth={0} className="fill-orange-500" aria-hidden="true" />
            ))}
          </div>

          <blockquote className="mx-auto max-w-2xl text-base leading-8 text-slate-600">
            {t.quote}
          </blockquote>

          <div className="montserrat font-800 mt-7 text-sm" style={{ color: "#1a2744" }}>{t.name}</div>
          <div className="mt-1 text-[12px] text-slate-400">{t.role} · {t.project}</div>
          <div className="mt-2.5 inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-600">
            <BadgeCheck size={13} strokeWidth={2.2} aria-hidden="true" />
            Verified client
          </div>

          <div className="mt-8 flex items-center justify-center gap-5">
            <button
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:border-orange-400 hover:text-orange-500"
            >
              <ChevronLeft size={16} strokeWidth={2.2} aria-hidden="true" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((item, i) => (
                <button
                  key={item.name}
                  onClick={() => setActive(i)}
                  aria-label={`Show testimonial from ${item.name}`}
                  aria-current={i === active}
                  className="h-1.5 rounded-full transition-all duration-300"
                  style={i === active ? { width: 28, background: "#FF5E00" } : { width: 10, background: "#ddd" }}
                />
              ))}
            </div>

            <button
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:border-orange-400 hover:text-orange-500"
            >
              <ChevronRight size={16} strokeWidth={2.2} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
