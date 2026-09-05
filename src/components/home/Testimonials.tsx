import { useState } from "react"
import { Quote, Star, ChevronLeft, ChevronRight, BadgeCheck } from "lucide-react"
import { SITE_CONTAINER } from "@/components/layout/constants"

const testimonials = [
  {
    name: "Rajesh Mehta",
    rating: 5,
    role: "Homeowner, Midnapur",
    project: "3,200 sq ft residence",
    quote:
      "Reena Designs & Constructions handed over our home eleven days ahead of the contracted date, and the finish matched the 3D elevation almost exactly. Costing stayed where it started — no revised estimates halfway through.",
  },
  {
    name: "Priya Dutta",
    rating: 5,
    role: "Director, Dutta & Associates",
    project: "Office fit-out, Kharagpur",
    quote:
      "They ran our office renovation around a live workday without losing a single hour of business. The site engineer sent progress photographs every evening. That level of communication is rare in this trade.",
  },
  {
    name: "Amit Banerjee",
    rating: 5,
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
    <section id="testimonials" className="relative bg-surface py-10 md:py-14 overflow-hidden">
      <div className={`${SITE_CONTAINER} max-w-4xl`}>
        {/* Refined Header */}
        <div className="text-center">
          <p className="montserrat font-700 text-[11px] tracking-[0.25em] text-brand uppercase mb-1.5">
            Client testimonials
          </p>
          <h2 className="montserrat font-800 text-xl sm:text-2xl md:text-3xl tracking-wide text-navy uppercase">
            TRUSTED BY 200+ CLIENTS ACROSS INDIA
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-500 leading-relaxed max-w-md mx-auto">
            Rated 4.9 out of 5 across 200+ completed residential and commercial projects.
          </p>
        </div>

        {/* Unboxed Quote Stage — Zero cards, zero box borders */}
        <div
          className="mt-7 md:mt-8 text-center"
          aria-live="polite"
          aria-atomic="true"
        >
          {/* Subtle Quote Symbol & Rating */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <Quote size={20} className="text-brand/50" aria-hidden="true" />
            <div className="flex gap-1" role="img" aria-label={`Rated ${t.rating} out of 5 stars`}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  strokeWidth={0}
                  className="fill-amber-400"
                  aria-hidden="true"
                />
              ))}
            </div>
          </div>

          {/* Quote Text */}
          <blockquote className="mx-auto flex max-w-2xl items-center justify-center text-base leading-relaxed font-normal text-slate-700 sm:text-lg md:min-h-[8.25rem] md:text-xl">
            "{t.quote}"
          </blockquote>

          {/* Client Details */}
          <div className="mt-5 flex flex-col items-center">
            <div className="montserrat font-800 text-sm md:text-base text-navy">{t.name}</div>
            <div className="mt-0.5 text-xs text-slate-500">{t.role} · {t.project}</div>
            <div className="mt-2.5 inline-flex items-center gap-1 text-[11px] font-medium text-emerald-600 bg-emerald-50/80 px-2.5 py-0.5 rounded-full border border-emerald-200/50">
              <BadgeCheck size={12} strokeWidth={2.4} aria-hidden="true" />
              Verified client
            </div>
          </div>

          {/* Navigation Controls: Prev / Client Selector Pills / Next */}
          <div className="mt-6 flex items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-300/80 text-slate-600 transition hover:border-brand hover:text-brand hover:bg-white"
            >
              <ChevronLeft size={15} strokeWidth={2.2} aria-hidden="true" />
            </button>

            {/* Client names / selector tabs */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              {testimonials.map((item, i) => (
                <button
                  key={item.name}
                  onClick={() => setActive(i)}
                  className={`montserrat font-700 text-[11px] sm:text-xs px-3 sm:px-4 py-1.5 rounded-full transition-all duration-300 ${
                    i === active
                      ? "bg-navy text-white shadow-xs"
                      : "bg-white/60 text-slate-600 hover:bg-white hover:text-navy border border-slate-200/60"
                  }`}
                >
                  {item.name.split(" ")[0]}
                </button>
              ))}
            </div>

            <button
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-300/80 text-slate-600 transition hover:border-brand hover:text-brand hover:bg-white"
            >
              <ChevronRight size={15} strokeWidth={2.2} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
