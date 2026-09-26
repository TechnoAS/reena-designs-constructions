import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
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
      {/* Full-bleed showreel.

          `object-cover` on a w/h-full video is what makes a portrait phone
          clip fill a landscape viewport without letterboxing. Muted +
          playsInline are both required for autoplay to be allowed on iOS.

          These layers sit at z-0/z-1 rather than behind the section: the app
          shell is `bg-white`, and a negative z-index here paints *under* that
          ancestor background, which hid the video entirely. */}
      <video
        className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover"
        src="/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
      />

      {/* Scrim. Two passes: a flat wash so nothing in the footage can wash the
          type out, and a stronger gradient on the side the copy sits on. */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-navy/45" />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-l from-navy/80 via-navy/40 to-transparent" />
      {/* Drafting rule along the foot of the sheet. */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-px bg-white/15" />

      {/* A laptop at 600–768px tall has to fit the same eight elements as a
          27" display. Fixed `py-28/36` pushed the CTAs off the bottom there,
          so the padding and the headline both step down by viewport *height*,
          not width — a short window is not a narrow one. */}
      <div
        className={`${SITE_CONTAINER} relative z-10 w-full pt-24 pb-12 md:pt-32 md:pb-20 [@media(min-height:820px)]:py-36`}
      >
        <div className="max-w-xl md:ml-auto md:max-w-[62%] md:text-right">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-orange-400 [@media(min-height:820px)]:mb-5">
            Construction &amp; interiors across India
          </p>
          {/* Two lines, not three. The stacked "creating" had no punctuation
              holding it to either half, so the headline read as three
              fragments rather than one phrase. */}
          <h1 className="montserrat font-900 text-4xl leading-[0.95] tracking-[-0.04em] text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.45)] md:text-5xl [@media(min-height:820px)]:md:text-6xl">
            Building <span className="text-orange-500">dreams</span>,
            <span className="mt-2 block">
              creating <span className="text-orange-500">reality</span>
            </span>
          </h1>
          {/* The second sentence used to carry "fifteen years, 250+ projects".
              Both numbers appear again in AboutStrip directly below, in
              WhyChooseUs and in the footer — three repeats bought with the
              scarcest copy on the site. */}
          <p className="mt-4 max-w-md text-sm font-medium leading-7 text-white/85 md:ml-auto md:text-base [@media(min-height:820px)]:mt-6">
            Turnkey construction, architecture and interiors under one contract — with a completion
            date in writing.
          </p>

          {/* Search, then the two CTAs.
              A visitor who already knows what they want should not have to
              guess which of eight nav items hides it; one who does not still
              has the buttons. `md:items-end` keeps the field's right edge on
              the same line as the headline's. */}
          <div className="mt-6 flex flex-col gap-4 md:items-end [@media(min-height:820px)]:mt-8 [@media(min-height:820px)]:gap-6">
            <SiteSearch />

            <div className="flex flex-wrap items-center gap-4 md:justify-end">
              <Link
                to="/contact"
                className="btn-orange group gap-2 px-6 py-3 shadow-lg shadow-orange-500/30"
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
                className="btn-outline gap-2 border-white/40 bg-white/10 px-6 py-3 text-white backdrop-blur-sm hover:border-orange-400 hover:bg-white/20 hover:text-white"
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
