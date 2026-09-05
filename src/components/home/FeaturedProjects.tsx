import { useCallback, useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, ChevronLeft, ChevronRight, MapPin } from "lucide-react"
import { SITE_CONTAINER } from "@/components/layout/constants"
import RollingRibbon from "./RollingRibbon"

/** Full-bleed slides, so these are requested wide rather than card sized. */
const shot = (id: string) => `https://images.unsplash.com/${id}?w=1400&h=900&fit=crop&auto=format`

const PROJECTS = [
  { title: "Modern Residence", type: "Residential Construction", location: "Midnapur, West Bengal", blurb: "A four-bedroom home built to the approved drawing and handed over eleven days ahead of the contracted date.", img: shot("photo-1613490493576-7fde63acd811") },
  { title: "Luxury Villa", type: "Architecture & Interiors", location: "Kharagpur, West Bengal", blurb: "Architecture and interiors resolved under one contract, from the elevation through to the joinery and lighting layer.", img: shot("photo-1706164971309-fb4785fe6ceb") },
  { title: "Corporate Office", type: "Commercial Fit-out", location: "Midnapur, West Bengal", blurb: "A working office refitted around a live business — delivered without the client losing a single trading day.", img: shot("photo-1783705094622-f2c01a9787b5") },
  { title: "Premium Apartment", type: "Turnkey Delivery", location: "Ghatal, West Bengal", blurb: "Design, sanction, structure and finishing under a single accountable contract and one fixed cost.", img: shot("photo-1567943183748-3a7542120c90") },
  { title: "Riverside Duplex", type: "Residential Construction", location: "Midnapur, West Bengal", blurb: "A split-level duplex on a narrow riverside plot, planned around the site's setback and flood levels.", img: shot("photo-1600596542815-ffad4c1539a9") },
  { title: "Heritage Restoration", type: "Renovation", location: "Belda, West Bengal", blurb: "A structural retrofit that modernised the property without touching the frame the family wanted kept.", img: shot("photo-1648881806148-e5c51179c826") },
  { title: "Boutique Retail Fit-out", type: "Commercial Fit-out", location: "Kharagpur, West Bengal", blurb: "Shopfront, joinery and lighting built to a retail launch date that could not move.", img: shot("photo-1441984904996-e0b6ba687e04") },
  { title: "Garden Villa", type: "Turnkey Delivery", location: "Jhargram, West Bengal", blurb: "A landscaped villa taken from bare plot to keys in hand by a single team on one timeline.", img: shot("photo-1564013799919-ab600027ffc6") },
]

const PROJECT_LINKS: Record<string, string> = {
  "Residential Construction": "/our-work/projects/successful",
  "Architecture & Interiors": "/our-work/interior/residential",
  "Commercial Fit-out": "/our-work/interior/commercial",
  "Turnkey Delivery": "/our-work/projects/successful",
  "Renovation": "/our-work/renovation",
}

const AUTOPLAY_MS = 6000

export default function FeaturedProjects() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const [warm, setWarm] = useState(false)
  const regionRef = useRef<HTMLDivElement>(null)
  const timer = useRef<number | null>(null)
  const touchStartRef = useRef<number | null>(null)

  const go = useCallback((next: number) => {
    setActive((next + PROJECTS.length) % PROJECTS.length)
  }, [])

  /**
   * Fetch every photograph once the slider comes into view.
   */
  useEffect(() => {
    const el = regionRef.current
    if (!el || warm) return
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return
        for (const p of PROJECTS) {
          const pre = new Image()
          pre.decoding = "async"
          pre.src = p.img
        }
        setWarm(true)
        io.disconnect()
      },
      { rootMargin: "300px" },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [warm])

  /**
   * Autoplay, held back whenever the visitor is engaged with the slider.
   */
  useEffect(() => {
    if (paused) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const tick = () => setActive((i) => (i + 1) % PROJECTS.length)
    timer.current = window.setInterval(tick, AUTOPLAY_MS)

    const onVisibility = () => {
      if (document.hidden && timer.current !== null) {
        clearInterval(timer.current)
        timer.current = null
      } else if (!document.hidden && timer.current === null) {
        timer.current = window.setInterval(tick, AUTOPLAY_MS)
      }
    }
    document.addEventListener("visibilitychange", onVisibility)

    return () => {
      if (timer.current !== null) clearInterval(timer.current)
      timer.current = null
      document.removeEventListener("visibilitychange", onVisibility)
    }
  }, [paused])

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") { e.preventDefault(); go(active + 1) }
    if (e.key === "ArrowLeft") { e.preventDefault(); go(active - 1) }
  }

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartRef.current = e.touches[0].clientX
  }

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartRef.current === null) return
    const diff = touchStartRef.current - e.changedTouches[0].clientX
    if (diff > 45) {
      go(active + 1)
    } else if (diff < -45) {
      go(active - 1)
    }
    touchStartRef.current = null
  }

  return (
    <section id="featured-work" className="relative bg-navy overflow-hidden">
      {/* Top background blend: smoothly continues from top blue/navy of services */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#111a2e] to-transparent" />

      {/* Two Crossed Rolling Ribbons in high z-index over FEATURED WORK */}
      <div className="relative pt-4 md:pt-6">
        <RollingRibbon />
      </div>

      {/* Centered Heading in middle */}
      <div className={`${SITE_CONTAINER} relative z-10 pt-4 pb-10 md:pt-6 md:pb-14 text-center`}>
        <h2 className="montserrat font-900 text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wider text-white uppercase drop-shadow-sm">
          FEATURED WORK
        </h2>

        {/* Subtitle */}
        <p className="mx-auto mt-4 md:mt-5 max-w-2xl text-sm sm:text-base md:text-lg font-normal leading-relaxed text-slate-300">
          A curated showcase of residential builds, luxury villas, commercial fit-outs and turnkey executions delivered across West Bengal and India.
        </p>
      </div>

      {/* Full-bleed showcase slider with slight top blend */}
      <div
        ref={regionRef}
        className="relative h-[34rem] overflow-hidden bg-navy md:h-[44rem]"
        role="region"
        aria-roledescription="carousel"
        aria-label="Featured projects"
        tabIndex={0}
        onKeyDown={onKeyDown}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        {/* Soft top blend directly into carousel */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-navy via-navy/60 to-transparent z-10"
          aria-hidden="true"
        />

        {PROJECTS.map((p, i) => {
          const isActive = i === active
          const projectUrl = PROJECT_LINKS[p.type] || "/our-work/projects/successful"

          return (
            <div
              key={p.title}
              className={`absolute inset-0 transition-opacity duration-[1100ms] ease-out ${
                isActive ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
              aria-hidden={!isActive}
            >
              {/* Still frame — no zoom, no drift. The only motion in the
                  slider is the cross-dissolve between one photograph and the
                  next. */}
              <img
                src={p.img}
                alt={`${p.title} — ${p.type} in ${p.location}`}
                loading={i === 0 ? "eager" : "lazy"}
                decoding="async"
                className="h-full w-full object-cover"
              />

              {/* Gradient dissolve */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-navy via-navy/75 to-navy/10 md:bg-gradient-to-l md:from-navy md:via-navy/70 md:to-transparent"
                aria-hidden="true"
              />

              {/* Copy on right half */}
              <div className={`${SITE_CONTAINER} absolute inset-0 flex items-end pb-24 md:items-center md:pb-0`}>
                <div
                  className={`w-full transition-all duration-700 ease-out md:ml-auto md:w-1/2 md:max-w-lg md:pl-6 ${
                    isActive ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
                  }`}
                >
                  <div className="montserrat font-700 mb-3 md:mb-4 flex items-center gap-3 text-[11px] tracking-[0.28em] uppercase text-orange-400">
                    <span className="h-px w-8 bg-orange-400/70" aria-hidden="true" />
                    {p.type}
                  </div>
                  <h3 className="montserrat font-800 text-3xl leading-[1.1] text-white md:text-5xl">
                    {p.title}
                  </h3>
                  <div className="mt-3 md:mt-4 flex items-center gap-1.5 text-[13px] text-white/60">
                    <MapPin size={14} strokeWidth={2} aria-hidden="true" />
                    {p.location}
                  </div>
                  <p className="mt-4 md:mt-6 max-w-md text-xs md:text-sm leading-6 md:leading-7 text-white/75">
                    {p.blurb}
                  </p>
                  <Link
                    to={projectUrl}
                    className="montserrat font-700 group mt-6 md:mt-8 inline-flex items-center gap-2 border-b-2 border-brand pb-1.5 text-[13px] text-white transition-colors duration-300 hover:text-orange-300"
                    tabIndex={isActive ? 0 : -1}
                  >
                    View this project
                    <ArrowRight
                      size={14}
                      strokeWidth={2.2}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </div>
            </div>
          )
        })}

        {/* Two quiet arrows are the only chrome on the slider.

            No position tracker and no 01/08 counter: they were competing with
            the photography for attention, and neither told the visitor
            anything they needed. Position is still available to assistive tech
            through each slide's aria-hidden state, and the slider can be
            driven by swipe, arrow keys or these two buttons. */}
        <div className={`${SITE_CONTAINER} pointer-events-none absolute inset-x-0 bottom-6 md:bottom-10 z-20`}>
          <div className="pointer-events-auto flex items-center gap-2 md:gap-3">
            <button
              type="button"
              onClick={() => go(active - 1)}
              aria-label="Previous project"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/70 backdrop-blur-sm transition duration-300 hover:border-brand hover:bg-brand hover:text-white md:h-12 md:w-12"
            >
              <ChevronLeft size={18} strokeWidth={2} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => go(active + 1)}
              aria-label="Next project"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/70 backdrop-blur-sm transition duration-300 hover:border-brand hover:bg-brand hover:text-white md:h-12 md:w-12"
            >
              <ChevronRight size={18} strokeWidth={2} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom blend into the next section.

          Deepened from 4rem to 8rem: against a 44rem dark slider, a 4rem fade
          still read as a line rather than a transition. The target colour is
          `surface` because that is what WhyChooseUs below actually uses — a
          blend to white would leave a visible seam against it. */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-32 bg-gradient-to-b from-transparent to-surface" />
    </section>
  )
}
