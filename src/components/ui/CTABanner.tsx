import { Link } from "react-router-dom"
import { ArrowRight, PhoneCall, CheckCircle2, Phone } from "lucide-react"
import { SITE_CONTAINER } from "@/components/layout/constants"
import { SITE } from "@/data/siteInfo"

export interface CTABannerProps {
  title: string
  subtitle?: string
  buttonText: string
  buttonHref: string
  /**
   * "bridge" renders the banner with a 50/50 background split (white top, dark navy bottom),
   * creating a true floating overlap across the footer edge without any CSS translate or negative margin hacks.
   * "card" renders as a self-contained card inside page containers.
   * "fullWidth" renders as a full-width section.
   */
  variant?: "bridge" | "card" | "fullWidth"
  /** Backward-compatible alias for fullWidth */
  fullWidth?: boolean
  /** Backward-compatible alias for bridge mode styling */
  elevated?: boolean
  badgeText?: string
  className?: string
}

export default function CTABanner({
  title,
  subtitle,
  buttonText,
  buttonHref,
  variant,
  fullWidth = false,
  elevated = false,
  badgeText = "Free Consultation & Feasibility",
  className = "",
}: CTABannerProps) {
  // Determine layout mode: default to bridge for seamless pre-footer presentation
  const mode = variant || (fullWidth ? "fullWidth" : elevated ? "bridge" : "bridge")

  const card = (
    <div
      className="relative isolate overflow-hidden rounded-2xl md:rounded-3xl border border-white/15 bg-gradient-to-br from-[#0c1527] via-[#142343] to-[#1e3462] p-8 sm:p-12 lg:p-14 shadow-2xl shadow-black/50 ring-1 ring-white/10"
    >
      {/* Blueprint grid wash */}
      <svg
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-[0.16]"
        aria-hidden="true"
      >
        <defs>
          <pattern id="cta-blueprint-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ffffff" strokeWidth="0.8" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#cta-blueprint-grid)" />
      </svg>

      {/* Warm ambient glow behind the button */}
      <div
        className="pointer-events-none absolute -right-16 top-1/2 -z-10 h-[380px] w-[380px] -translate-y-1/2 rounded-full blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(255,94,0,0.32) 0%, rgba(255,94,0,0.08) 50%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Decorative architectural crosshairs in top-right and bottom-left */}
      <div className="pointer-events-none absolute top-4 right-4 text-white/15 font-mono text-[10px]" aria-hidden="true">
        + 24°N 87°E
      </div>
      <div className="pointer-events-none absolute bottom-4 left-4 text-white/15 font-mono text-[10px]" aria-hidden="true">
        [SPEC-2026]
      </div>

      <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-14">
        {/* Copy left */}
        <div className="max-w-2xl">
          <span className="montserrat font-700 mb-3.5 inline-flex items-center gap-2 rounded-full bg-orange-500/15 border border-orange-500/30 px-3.5 py-1.5 text-[10.5px] uppercase tracking-[0.2em] text-orange-300">
            <PhoneCall size={12} strokeWidth={2.2} aria-hidden="true" />
            {badgeText}
          </span>

          <h3 className="montserrat font-800 text-2xl sm:text-3xl lg:text-[32px] leading-tight text-white">
            {title}
          </h3>

          {subtitle && (
            <p className="mt-3.5 text-sm sm:text-[15px] leading-relaxed text-white/70">
              {subtitle}
            </p>
          )}

          {/* Guarantee bullet points */}
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2.5 text-xs text-white/60">
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-orange-400 flex-none" />
              Itemized BOQ Costing
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-orange-400 flex-none" />
              Fixed Contractual Timelines
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-orange-400 flex-none" />
              Engineer-Supervised Quality
            </span>
          </div>
        </div>

        {/* Action right */}
        <div className="flex flex-none flex-col items-start sm:items-end w-full lg:w-auto">
          <Link
            to={buttonHref}
            className="btn-orange montserrat font-700 group inline-flex w-full sm:w-auto items-center justify-center gap-2.5 px-8 sm:px-10 py-4 text-[15px] sm:text-base shadow-[0_12px_32px_-8px_rgba(255,94,0,0.65)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_44px_-10px_rgba(255,94,0,0.85)]"
          >
            {buttonText}
            <ArrowRight
              size={18}
              strokeWidth={2.2}
              className="transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>

          <a
            href={SITE.phoneHref}
            className="mt-3.5 inline-flex items-center gap-2 text-xs text-white/60 transition-colors hover:text-white"
          >
            <Phone size={12} className="text-orange-400" />
            <span>
              Direct Hotline: <strong className="font-semibold text-white/90">{SITE.phones[0]}</strong>
            </span>
          </a>
        </div>
      </div>
    </div>
  )

  if (mode === "bridge") {
    return (
      <section className={`relative isolate overflow-hidden ${className}`}>
        {/*
          Natural 50/50 split background:
          The top half is white (matching the page background),
          the bottom half is #0d1527 (matching the footer background).
          This creates the floating card overlap visually, while remaining 100%
          in normal DOM flow — no translateY, no negative margins, no clipping!
        */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-white -z-10" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-[#0d1527] -z-10" aria-hidden="true" />

        <div className={`${SITE_CONTAINER} relative z-10 py-8 sm:py-10 lg:py-12`}>
          {card}
        </div>
      </section>
    )
  }

  if (mode === "fullWidth") {
    return (
      <section className={`bg-white py-12 lg:py-16 ${className}`}>
        <div className={SITE_CONTAINER}>{card}</div>
      </section>
    )
  }

  return (
    <section className={`my-8 lg:my-12 ${className}`}>
      {card}
    </section>
  )
}
