import PageWrapper from "@/components/layout/PageWrapper"
import PageHeader from "@/components/ui/PageHeader"
import SectionTitle from "@/components/ui/SectionTitle"
import CTABanner from "@/components/ui/CTABanner"
import { SITE_CONTAINER } from "@/components/layout/constants"

const processRows = [
  [
    { num: 1, label: "Consultation" },
    { num: 2, label: "Site Inspection" },
    { num: 3, label: "Planning" },
    { num: 4, label: "Architectural Design" },
    { num: 5, label: "Structural Design" },
  ],
  [
    { num: 6, label: "3D Elevation" },
    { num: 7, label: "Govt Approval" },
    { num: 8, label: "Cost Estimation" },
    { num: 9, label: "Material Procurement" },
    { num: 10, label: "Foundation Work" },
  ],
  [
    { num: 11, label: "Construction" },
    { num: 12, label: "Electrical Installation" },
    { num: 13, label: "Plumbing Work" },
    { num: 14, label: "Flooring & Tiling" },
    { num: 15, label: "Painting & Finishing" },
  ],
  [
    { num: 16, label: "Interior Design" },
    { num: 17, label: "Furniture & Decor" },
    { num: 18, label: "Quality Inspection" },
    { num: 19, label: "Project Handover" },
  ],
]

const services = [
  {
    title: "Residential\nConstruction",
    icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><path d="M6 38V18L20 6l14 12v20" stroke="#1a2744" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/><rect x="14" y="24" width="12" height="14" rx="1" stroke="#1a2744" strokeWidth="1.5"/><path d="M6 22l14-10 14 10" stroke="#FF5E00" strokeWidth="1.8" strokeLinecap="round"/></svg>,
  },
  {
    title: "Commercial\nConstruction",
    icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><rect x="4" y="10" width="16" height="28" rx="1" stroke="#1a2744" strokeWidth="1.7"/><rect x="24" y="18" width="12" height="20" rx="1" stroke="#1a2744" strokeWidth="1.7"/><rect x="8" y="14" width="4" height="4" rx="0.5" fill="#FF5E00"/><rect x="16" y="14" width="4" height="4" rx="0.5" fill="#FF5E00"/><rect x="8" y="22" width="4" height="4" rx="0.5" fill="#FF5E00"/><path d="M3 38h34" stroke="#1a2744" strokeWidth="1.8" strokeLinecap="round"/></svg>,
  },
  {
    title: "Architectural\nDesign",
    icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><rect x="6" y="5" width="28" height="30" rx="2" stroke="#1a2744" strokeWidth="1.7"/><path d="M13 14h14M13 20h10M13 26h7" stroke="#1a2744" strokeWidth="1.5" strokeLinecap="round"/><circle cx="30" cy="30" r="6" fill="#fff" stroke="#FF5E00" strokeWidth="1.6"/><path d="M28 30l1.5 1.5L33 28" stroke="#FF5E00" strokeWidth="1.3" strokeLinecap="round"/></svg>,
  },
  {
    title: "Structural\nEngineering",
    icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><path d="M10 36V10M30 36V10M10 10h20M10 20h20M10 30h20" stroke="#1a2744" strokeWidth="1.7" strokeLinecap="round"/><rect x="15" y="28" width="10" height="8" rx="0.5" stroke="#FF5E00" strokeWidth="1.5"/></svg>,
  },
  {
    title: "Renovation &\nRemodeling",
    icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><path d="M8 38V20l12-12 12 12v18" stroke="#1a2744" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/><path d="M8 25l12-8 12 8" stroke="#FF5E00" strokeWidth="1.8" strokeLinecap="round"/><circle cx="32" cy="14" r="5" fill="#fff" stroke="#FF5E00" strokeWidth="1.5"/><path d="M30 14h4M32 12v4" stroke="#FF5E00" strokeWidth="1.3" strokeLinecap="round"/></svg>,
  },
  {
    title: "Interior\nDesign",
    icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><path d="M20 8v8M20 16c-5 0-8 3.5-8 8v3h16v-3c0-4.5-3-8-8-8z" stroke="#1a2744" strokeWidth="1.7" strokeLinejoin="round"/><rect x="18" y="27" width="4" height="11" rx="0.5" stroke="#1a2744" strokeWidth="1.5"/><path d="M6 35h28" stroke="#1a2744" strokeWidth="1.8" strokeLinecap="round"/><path d="M12 25h6M22 25h6" stroke="#FF5E00" strokeWidth="1.4" strokeLinecap="round"/></svg>,
  },
  {
    title: "Exterior\nDesign",
    icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><path d="M4 38V18L20 5l16 13v20" stroke="#1a2744" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/><rect x="15" y="26" width="10" height="12" rx="0.5" stroke="#1a2744" strokeWidth="1.5"/><path d="M4 22l16-11 16 11" stroke="#FF5E00" strokeWidth="1.8" strokeLinecap="round"/><path d="M12 32h5M23 32h5" stroke="#1a2744" strokeWidth="1.3" strokeLinecap="round" opacity="0.5"/></svg>,
  },
  {
    title: "Turnkey\nConstruction",
    icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="16" cy="18" r="9" stroke="#1a2744" strokeWidth="1.7"/><path d="M22 24l13 11" stroke="#1a2744" strokeWidth="1.7" strokeLinecap="round"/><circle cx="16" cy="18" r="4" fill="#FF5E00" opacity="0.7"/><path d="M30 28l-3 3M34 32l-3 3" stroke="#1a2744" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  },
]

function ProcessStep({ num, label, arrow }: { num: number; label: string; arrow: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex flex-col items-center gap-1.5">
        <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ border: "2px solid #FF5E00", background: "#fff" }}>
          <span className="montserrat font-800 text-xs" style={{ color: "#1a2744" }}>{num}</span>
        </div>
        <span className="text-center montserrat font-600 leading-tight" style={{ fontSize: "10px", color: "#1a2744", maxWidth: 72 }}>{label}</span>
      </div>
      {arrow && (
        <svg width="20" height="16" viewBox="0 0 20 16" fill="none" className="flex-shrink-0 mb-5">
          <path d="M0 8h16M12 4l4 4-4 4" stroke="#FF5E00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )}
    </div>
  )
}

export default function Services() {
  return (
    <PageWrapper>
      <PageHeader title="OUR SERVICES" crumbs={[{ label: "Home", href: "/" }, { label: "Services" }]} />

      <div className={`${SITE_CONTAINER} py-14 flex flex-col gap-16`}>

        {/* Work Process */}
        <section>
          <SectionTitle title="OUR WORK PROCESS" />
          <div className="rounded-2xl p-8" style={{ background: "#fff", border: "1.5px solid #e8e8e8" }}>
            <div className="flex flex-col gap-8">
              {processRows.map((row, ri) => (
                <div key={ri} className="flex flex-wrap items-start gap-2">
                  {row.map((step, si) => (
                    <ProcessStep key={step.num} num={step.num} label={step.label} arrow={si < row.length - 1} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services We Provide */}
        <section>
          <SectionTitle title="SERVICES WE PROVIDE" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {services.map((s) => (
              <div key={s.title} className="svc-card py-8 px-4 flex flex-col items-center gap-3 text-center cursor-default">
                {s.icon}
                <span className="montserrat font-700 text-sm leading-snug whitespace-pre-line" style={{ color: "#1a2744" }}>{s.title}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Banner */}
        <CTABanner
          title="READY TO START YOUR PROJECT?"
          subtitle="Get a free consultation and detailed quote from our experts."
          buttonText="Get a Free Quote"
          buttonHref="/contact"
        />
      </div>
    </PageWrapper>
  )
}
