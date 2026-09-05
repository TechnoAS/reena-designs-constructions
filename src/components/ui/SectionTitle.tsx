interface SectionTitleProps {
  title: string
  /** Small uppercase kicker rendered above the heading — good for keyword-rich context lines. */
  eyebrow?: string
  /** Supporting sentence rendered below the heading. */
  subtitle?: string
  align?: "center" | "left"
  accentBar?: boolean
  /** Inverts the palette for use on a dark section. */
  onDark?: boolean
}

export default function SectionTitle({
  title,
  eyebrow,
  subtitle,
  align = "center",
  accentBar = false,
  onDark = false,
}: SectionTitleProps) {
  const centered = align === "center"

  return (
    <div className={`mb-10 ${centered ? "text-center" : "text-left"}`}>
      {eyebrow && (
        <p
          className={`montserrat font-700 mb-2 text-[11px] tracking-[0.3em] uppercase ${
            onDark ? "text-orange-400" : "text-orange-600"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <div className={`section-title-row ${centered ? "" : "justify-start"}`}>
        {accentBar && <div className="h-0.5 w-10 flex-none rounded-full bg-brand" />}
        <h2 className={`montserrat font-800 text-xl md:text-2xl ${onDark ? "text-white" : "text-navy"}`}>
          {title}
        </h2>
      </div>
      {subtitle && (
        <p
          className={`mt-3 text-sm leading-relaxed ${onDark ? "text-white/60" : "text-gray-500"} ${
            centered ? "mx-auto max-w-2xl" : "max-w-2xl"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
