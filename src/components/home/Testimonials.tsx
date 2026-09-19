import { useState } from "react"
import { Quote, ChevronLeft, ChevronRight, BadgeCheck } from "lucide-react"
import { SITE_CONTAINER } from "@/components/layout/constants"
import SectionTitle from "@/components/ui/SectionTitle"
import StarRating from "@/components/ui/StarRating"
import { FEATURED_TESTIMONIALS } from "@/data/testimonials"

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const total = FEATURED_TESTIMONIALS.length
  const t = FEATURED_TESTIMONIALS[active]
  const go = (dir: number) => setActive((i) => (i + dir + total) % total)

  return (
    <section id="testimonials" className="relative bg-surface py-10 md:py-14 overflow-hidden">
      <div className={`${SITE_CONTAINER} max-w-4xl`}>
        {/* Refined Header */}
        {/* The "Rated 4.9 out of 5" line is gone: every review the site shows
            is five stars, so the average it displays is 5.0, and the figure
            was not backed by collected reviews anywhere. */}
        <SectionTitle
          level="display"
          eyebrow="Client testimonials"
          title="TRUSTED BY 200+ CLIENTS ACROSS INDIA"
          subtitle="Homeowners, business owners and developers on what it was actually like to build with us."
          className="mb-0"
        />

        {/* Unboxed Quote Stage — Zero cards, zero box borders */}
        <div
          className="mt-7 md:mt-8 text-center"
          aria-live="polite"
          aria-atomic="true"
        >
          {/* Subtle Quote Symbol & Rating */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <Quote size={20} className="text-brand/50" aria-hidden="true" />
            {/* Was five hardcoded amber stars, ignoring the `rating` on the
                record beside it — a three-star review would have rendered as
                perfect. StarRating exists for exactly this, and using it also
                settles the orange-here / amber-there split. */}
            <StarRating rating={t.rating} />
          </div>

          {/* Quote Text */}
          <blockquote className="mx-auto flex max-w-2xl items-center justify-center text-base leading-relaxed font-normal text-slate-700 sm:text-lg md:min-h-[8.25rem] md:text-xl">
            "{t.quote}"
          </blockquote>

          {/* Client Details */}
          <div className="mt-5 flex flex-col items-center">
            <div className="montserrat font-800 text-sm md:text-base text-navy">{t.name}</div>
            <div className="mt-0.5 text-xs text-slate-500">{t.role}, {t.place} · {t.project}</div>
            <div className="mt-2.5 inline-flex items-center gap-1 text-[11px] font-medium text-emerald-700 bg-emerald-50/80 px-2.5 py-0.5 rounded-full border border-emerald-200/50">
              <BadgeCheck size={12} strokeWidth={2.4} aria-hidden="true" />
              Verified client
            </div>
          </div>

          {/* Navigation Controls: Prev / Client Selector Pills / Next */}
          <div className="mt-6 flex items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300/80 text-slate-600 transition hover:border-brand hover:text-brand hover:bg-white"
            >
              <ChevronLeft size={15} strokeWidth={2.2} aria-hidden="true" />
            </button>

            {/* Client names / selector tabs */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              {FEATURED_TESTIMONIALS.map((item, i) => (
                <button
                  key={item.name}
                  onClick={() => setActive(i)}
                  aria-pressed={i === active}
                  /* Square, matching FilterTabs. These pills were a fourth
                     vocabulary for "pick one of these" alongside FilterTabs,
                     SubNav and the carousel arrows. `aria-pressed` is what
                     tells a screen-reader user which one is showing — the
                     colour alone did not. */
                  className={`montserrat font-700 border px-3 py-1.5 text-[11px] transition duration-200 sm:px-4 sm:text-xs ${
                    i === active
                      ? "border-navy bg-navy text-white"
                      : "border-slate-300 bg-white text-slate-600 hover:border-navy hover:text-navy"
                  }`}
                >
                  {item.name.split(" ")[0]}
                </button>
              ))}
            </div>

            <button
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300/80 text-slate-600 transition hover:border-brand hover:text-brand hover:bg-white"
            >
              <ChevronRight size={15} strokeWidth={2.2} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
