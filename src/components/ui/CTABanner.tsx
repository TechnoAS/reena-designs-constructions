import { Link } from "react-router-dom"

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
    <div className={`rounded-2xl px-8 ${subtitle ? "py-10" : "py-8"} flex flex-col md:flex-row items-center justify-between gap-${subtitle ? "6" : "5"}`} style={{ background: "#1a2744" }}>
      <div>
        <h3 className={`montserrat font-800 text-xl text-white ${!fullWidth ? "text-center md:text-left" : ""} ${subtitle ? "mb-1" : ""}`}>{title}</h3>
        {subtitle && <p className="text-white/50 text-sm">{subtitle}</p>}
      </div>
      <Link to={buttonHref} className="btn-orange montserrat font-700 text-sm px-7 py-3.5 flex-shrink-0 rounded-lg">{buttonText}</Link>
    </div>
  )

  return fullWidth ? <section className="py-10 bg-white"><div className="mx-auto w-full max-w-[1700px] px-8 sm:px-9 lg:px-14">{inner}</div></section> : <section>{inner}</section>
}
