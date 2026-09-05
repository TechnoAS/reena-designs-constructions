import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import HeroBlueprint from "./HeroBlueprint"
import { SITE_CONTAINER } from "@/components/layout/constants"

export default function Hero() {
  return (
    // `min-h-screen` is 100vh, which on iOS Safari is measured against the
    // collapsed chrome — so the hero ran under the URL bar and the CTAs sat
    // below the fold. `100svh` is the small-viewport height, which is the one
    // actually visible on load.
    <section
      id="home"
      className="relative flex min-h-[100svh] w-full items-center overflow-hidden bg-slate-50"
    >
      {/* Blueprint artwork — full-bleed across the hero rather than boxed on
          the right, then masked so it dissolves into the section instead of
          ending at a hard edge. The mask fades it out behind the headline on
          the left and softens all four margins. */}
      <div className="pointer-events-none absolute inset-0 select-none">
        {/* Faint drafting grid over the whole section */}
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(26,39,68,0.055) 1px, transparent 1px), linear-gradient(to bottom, rgba(26,39,68,0.055) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
            maskImage: "radial-gradient(120% 100% at 60% 50%, #000 40%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(120% 100% at 60% 50%, #000 40%, transparent 100%)",
          }}
        />

        {/* The drawing, spanning the full width */}
        <div
          className="absolute inset-0 hidden items-center justify-center md:flex"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.10) 18%, rgba(0,0,0,0.55) 34%, #000 52%, #000 88%, transparent 100%), linear-gradient(to bottom, transparent 0%, #000 14%, #000 84%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.10) 18%, rgba(0,0,0,0.55) 34%, #000 52%, #000 88%, transparent 100%), linear-gradient(to bottom, transparent 0%, #000 14%, #000 84%, transparent 100%)",
            maskComposite: "intersect",
            WebkitMaskComposite: "source-in",
          }}
        >
          <div className="h-full w-full max-w-[1700px] px-4">
            <HeroBlueprint />
          </div>
        </div>

        {/* Warm accent bloom so the drawing sits in light rather than on top of it */}
        <div
          className="absolute right-[8%] top-1/2 h-[46rem] w-[46rem] -translate-y-1/2 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,94,0,0.10) 0%, transparent 68%)" }}
        />

        {/* Keep the headline on clean ground */}
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-slate-50 via-slate-50/70 to-transparent" />
      </div>

      <div className={`${SITE_CONTAINER} relative z-10 w-full py-32 md:py-40`}>
        <div className="max-w-xl md:max-w-[65%]">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-orange-600">Construction &amp; interior design across India</p>
          <h1 className="text-4xl font-black leading-[0.95] tracking-[-0.04em] text-[#1a2744] md:text-6xl" style={{ fontFamily: "Inter, sans-serif" }}>
            Building <span className="text-orange-500">dreams</span>
            <span className="mt-2 block">creating</span>
            <span className="mt-2 block text-orange-500">reality</span>
          </h1>
          <p className="mt-6 max-w-md text-sm leading-7 text-slate-600 md:text-base font-medium">
            Turnkey building construction, architecture and interiors under one accountable contract.
            Fifteen years, 250+ delivered projects, and a completion date we put in writing.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link to="/contact" className="group inline-flex items-center gap-2 rounded-lg bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/30 transition hover:bg-orange-400">
              Get a Free Quote
              <ArrowRight size={16} strokeWidth={2.2} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </Link>
            <Link to="/our-work" className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white/60 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-orange-500 hover:text-orange-600 backdrop-blur-sm">
              Explore Projects
            </Link>
          </div>
        </div>
      </div>

    </section>
  )
}

