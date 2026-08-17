interface SectionTitleProps {
  title: string
  align?: "center" | "left"
  accentBar?: boolean
}

export default function SectionTitle({ title, align = "center", accentBar = false }: SectionTitleProps) {
  return (
    <div className={`section-title-row mb-10 ${align === "left" ? "justify-start" : ""}`}>
      {accentBar && <div className="h-0.5 w-10 rounded-full flex-none" style={{ background: "#FF5E00" }} />}
      <h2 className="montserrat font-800 text-xl md:text-2xl" style={{ color: "#1a2744" }}>{title}</h2>
    </div>
  )
}
