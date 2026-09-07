import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import HeroStructure from "./HeroStructure"
import SiteSearch from "@/components/ui/SiteSearch"
import { SITE_CONTAINER } from "@/components/layout/constants"

export default function Hero() {
  return (
    // `min-h-screen` is 100vh, which on iOS Safari is measured against the
    // collapsed chrome — so the hero ran under the URL bar and the CTAs sat
    // below the fold. `100svh` is the small-viewport height, which is the one
    // actually visible on load.
    <section
      id="home"
      className="relative flex min-h-[100svh] w-full items-center overflow-hidden"
    >
      {/*
        Ground.

        Three layers rather than a flat fill: a cool paper base, a warm bloom
        low on the left where the built half of the artwork sits, and a cool
        one high on the right behind the headline. The two tints are what stop
        a full-bleed line drawing from reading as a screenshot of a CAD window
        — the sheet has light falling across it.
      */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#f7f8fa]" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 90% at 22% 78%, rgba(255,94,0,0.10) 0%, rgba(255,94,0,0.03) 34%, transparent 62%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(90% 80% at 88% 12%, rgba(26,39,68,0.09) 0%, transparent 58%)",
          }}
        />
        {/* Drafting rule along the foot of the sheet. */}
        <div className="absolute inset-x-0 bottom-0 h-px bg-navy/10" />
      </div>

      {/* Artwork — full bleed, masked so it dissolves into the section rather
          than ending at a hard edge, and pulled clear of the copy on the right. */}
      <div className="pointer-events-none absolute inset-0 select-none">
        <div
          className="absolute inset-0 opacity-70"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(26,39,68,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(26,39,68,0.05) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
            maskImage: "radial-gradient(120% 100% at 38% 55%, #000 38%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(120% 100% at 38% 55%, #000 38%, transparent 100%)",
          }}
        />

        <div
          className="absolute inset-0 hidden items-center justify-center md:flex"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, #000 10%, #000 58%, rgba(0,0,0,0.35) 76%, transparent 94%), linear-gradient(to bottom, transparent 0%, #000 12%, #000 86%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, #000 10%, #000 58%, rgba(0,0,0,0.35) 76%, transparent 94%), linear-gradient(to bottom, transparent 0%, #000 12%, #000 86%, transparent 100%)",
            maskComposite: "intersect",
            WebkitMaskComposite: "source-in",
          }}
        >
          <div className="h-full w-full max-w-[1700px] px-4">
            <HeroStructure />
          </div>
        </div>

        {/* Clean ground under the copy. */}
        <div className="absolute inset-y-0 right-0 w-[46%] bg-gradient-to-l from-[#f7f8fa] via-[#f7f8fa]/85 to-transparent" />
      </div>

      <div className={`${SITE_CONTAINER} relative z-10 w-full py-28 md:py-36`}>
        <div className="max-w-xl md:ml-auto md:max-w-[62%] md:text-right">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-orange-600">
            Construction &amp; interiors across India
          </p>
          {/* Two lines, not three. The stacked "creating" had no punctuation
              holding it to either half, so the headline read as three
              fragments rather than one phrase. */}
          <h1
            className="text-4xl font-black leading-[0.95] tracking-[-0.04em] text-[#1a2744] md:text-6xl"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Building <span className="text-orange-500">dreams</span>,
            <span className="mt-2 block">
              creating <span className="text-orange-500">reality</span>
            </span>
          </h1>
          {/* The second sentence used to carry "fifteen years, 250+ projects".
              Both numbers appear again in AboutStrip directly below, in
              WhyChooseUs and in the footer — three repeats bought with the
              scarcest copy on the site. */}
          <p className="mt-6 max-w-md text-sm leading-7 text-slate-600 md:ml-auto md:text-base font-medium">
            Turnkey construction, architecture and interiors under one contract — with a completion
            date in writing.
          </p>

          {/* Search, then the two CTAs.
              A visitor who already knows what they want should not have to
              guess which of eight nav items hides it; one who does not still
              has the buttons. `md:items-end` keeps the field's right edge on
              the same line as the headline's. */}
          <div className="mt-8 flex flex-col gap-6 md:items-end">
            <SiteSearch />

            <div className="flex flex-wrap items-center gap-4 md:justify-end">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-lg bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/30 transition hover:bg-orange-400"
              >
                Get a Free Quote
                <ArrowRight
                  size={16}
                  strokeWidth={2.2}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
              <Link
                to="/our-work"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white/60 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-orange-500 hover:text-orange-600 backdrop-blur-sm"
              >
                Explore Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
