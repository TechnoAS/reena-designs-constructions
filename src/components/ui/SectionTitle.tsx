interface SectionTitleProps {
  title: string
  /** Small uppercase kicker rendered above the heading — good for keyword-rich context lines. */
  eyebrow?: string
  /** Supporting sentence rendered below the heading. */
  subtitle?: string
  align?: "center" | "left"
  accentBar?: boolean
}

export default function SectionTitle({ title, eyebrow, subtitle, align = "center", accentBar = false }: SectionTitleProps) {
  const centered = align === "center"
  return (
    <div className={`mb-10 ${centered ? "text-center" : "text-left"}`}>
      {eyebrow && (
        <p className={`montserrat font-700 mb-2 text-[11px] uppercase tracking-[0.3em] text-orange-600 ${centered ? "" : ""}`}>
          {eyebrow}
        </p>
      )}
      <div className={`section-title-row ${centered ? "" : "justify-start"}`}>
        {accentBar && <div className="h-0.5 w-10 rounded-full flex-none" style={{ background: "#FF5E00" }} />}
        <h2 className="montserrat font-800 text-xl md:text-2xl" style={{ color: "#1a2744" }}>{title}</h2>
      </div>
      {subtitle && (
        <p className={`mt-3 text-sm leading-relaxed text-gray-500 ${centered ? "mx-auto max-w-2xl" : "max-w-2xl"}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
