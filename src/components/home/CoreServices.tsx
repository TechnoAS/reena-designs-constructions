import { SITE_CONTAINER } from "@/components/layout/constants"
import SectionTitle from "@/components/ui/SectionTitle"

const SERVICES = [
  { title: "Building\nConstruction", icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><rect x="4" y="8" width="14" height="24" rx="1" stroke="#1a2744" strokeWidth="1.7"/><rect x="22" y="14" width="14" height="18" rx="1" stroke="#1a2744" strokeWidth="1.7"/><rect x="7" y="12" width="4" height="4" rx="0.4" fill="#FF5E00"/><rect x="15" y="12" width="4" height="4" rx="0.4" fill="#FF5E00"/><rect x="7" y="20" width="4" height="4" rx="0.4" fill="#FF5E00"/><path d="M2 32h36" stroke="#1a2744" strokeWidth="1.8" strokeLinecap="round"/></svg> },
  { title: "Architectural\nDesign", icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><rect x="6" y="5" width="28" height="30" rx="2" stroke="#1a2744" strokeWidth="1.7"/><path d="M13 14h14M13 20h10M13 26h7" stroke="#1a2744" strokeWidth="1.5" strokeLinecap="round"/><circle cx="30" cy="30" r="6" fill="#fff" stroke="#FF5E00" strokeWidth="1.6"/><path d="M28 30l1.5 1.5L33 28" stroke="#FF5E00" strokeWidth="1.3" strokeLinecap="round"/></svg> },
  { title: "Interior\nDesign", icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><path d="M20 8v8M20 16c-5 0-8 3.5-8 8v3h16v-3c0-4.5-3-8-8-8z" stroke="#1a2744" strokeWidth="1.7" strokeLinejoin="round"/><rect x="18" y="27" width="4" height="11" rx="0.5" stroke="#1a2744" strokeWidth="1.5"/><path d="M6 38h28" stroke="#1a2744" strokeWidth="1.8" strokeLinecap="round"/><path d="M12 25h5M23 25h5" stroke="#FF5E00" strokeWidth="1.4" strokeLinecap="round"/></svg> },
  { title: "Renovation &\nRemodeling", icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><path d="M8 38V20l12-12 12 12v18" stroke="#1a2744" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/><path d="M8 25l12-8 12 8" stroke="#FF5E00" strokeWidth="1.8" strokeLinecap="round"/><circle cx="32" cy="14" r="5" fill="#fff" stroke="#FF5E00" strokeWidth="1.5"/><path d="M30 14h4M32 12v4" stroke="#FF5E00" strokeWidth="1.3" strokeLinecap="round"/></svg> },
  { title: "Turnkey\nSolutions", icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="16" cy="18" r="9" stroke="#1a2744" strokeWidth="1.7"/><path d="M22 24l13 11" stroke="#1a2744" strokeWidth="1.7" strokeLinecap="round"/><circle cx="16" cy="18" r="4" fill="#FF5E00" opacity="0.7"/><path d="M30 28l-3 3M34 32l-3 3" stroke="#1a2744" strokeWidth="1.5" strokeLinecap="round"/></svg> },
]

export default function CoreServices() {
  return (
    <section className="py-14" style={{ background: "#f7f7f7" }}>
      <div className={SITE_CONTAINER}>
        <SectionTitle title="OUR CORE SERVICES" />
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {SERVICES.map((s) => (
            <div key={s.title} className="svc-card py-7 px-3 flex flex-col items-center gap-3 text-center cursor-default">
              {s.icon}
              <span className="montserrat font-700 text-xs leading-snug whitespace-pre-line" style={{ color: "#1a2744" }}>{s.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
