import { Link } from "react-router-dom"
import { ArrowRight, PhoneCall } from "lucide-react"

interface CTABannerProps {
  title: string
  subtitle?: string
  buttonText: string
  buttonHref: string
  /** If true, renders as a full-width section with container padding. If false, renders as a card. */
  fullWidth?: boolean
}

export default function CTABanner({ title, subtitle, buttonText, buttonHref, fullWidth = false }: CTABannerProps) {
  const inner = (
    <div
      className="relative isolate overflow-hidden rounded-2xl px-8 py-16 text-center md:px-16 md:py-20"
      style={{ background: "linear-gradient(135deg, #111a2e 0%, #1a2744 55%, #23355c 100%)" }}
    >
      {/* Blueprint grid wash */}
      <svg className="pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-[0.18]" aria-hidden="true">
        <defs>
          <pattern id="cta-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ffffff" strokeWidth="0.8" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#cta-grid)" />
      </svg>
      {/* Warm glow behind the centred content */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(255,94,0,0.28) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="mx-auto flex max-w-2xl flex-col items-center">
        <span className="montserrat font-700 mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-[10px] uppercase tracking-[0.25em] text-orange-300 ring-1 ring-white/15">
          <PhoneCall size={12} strokeWidth={2.2} aria-hidden="true" />
          Free consultation
        </span>

        <h3 className="montserrat font-800 text-2xl leading-snug text-white md:text-3xl">{title}</h3>

        {subtitle && <p className="mt-4 text-sm leading-7 text-white/60">{subtitle}</p>}

        <Link
          to={buttonHref}
          className="btn-orange montserrat font-700 group mt-9 inline-flex items-center gap-2 rounded-lg px-8 py-4 text-sm shadow-lg shadow-orange-500/25"
        >
          {buttonText}
          <ArrowRight size={16} strokeWidth={2.2} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
        </Link>

        <p className="mt-5 text-[12px] text-white/40">
          Transparent costing · Fixed timelines · Engineer-supervised quality
        </p>
      </div>
    </div>
  )

  return fullWidth ? (
    <section className="bg-white py-14">
      <div className="mx-auto w-full max-w-[1700px] px-8 sm:px-9 lg:px-14">{inner}</div>
    </section>
  ) : (
    <section>{inner}</section>
  )
}
