import { SITE_CONTAINER } from "@/components/layout/constants"
import SectionTitle from "@/components/ui/SectionTitle"

const stats = [
  { num: "250+", label: "Projects Completed", icon: <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><circle cx="13" cy="12" r="5" stroke="#1a2744" strokeWidth="1.6"/><circle cx="23" cy="12" r="5" stroke="#1a2744" strokeWidth="1.6"/><path d="M4 31c0-5 4-9 9-9M14 31c0-5 4-9 9-9" stroke="#1a2744" strokeWidth="1.6" strokeLinecap="round"/></svg> },
  { num: "15+", label: "Years of Experience", icon: <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><path d="M7 33V16l11-9 11 9v17" stroke="#1a2744" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><rect x="13" y="22" width="10" height="11" rx="0.5" stroke="#1a2744" strokeWidth="1.5"/><path d="M7 20l11-8 11 8" stroke="#FF5E00" strokeWidth="1.7" strokeLinecap="round"/></svg> },
  { num: "200+", label: "Happy Clients", icon: <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><circle cx="13" cy="12" r="5" stroke="#1a2744" strokeWidth="1.6"/><circle cx="23" cy="12" r="5" stroke="#1a2744" strokeWidth="1.6"/><path d="M4 31c0-5 4-9 9-9M14 31c0-5 4-9 9-9" stroke="#1a2744" strokeWidth="1.6" strokeLinecap="round"/><path d="M25 22l2.5 2.5L33 19" stroke="#FF5E00" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg> },
  { num: "100%", label: "Quality Assurance", icon: <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><path d="M18 4l3 8h8l-6.5 4.7 2.5 8L18 20.2l-7 4.5 2.5-8L7 12h8L18 4z" stroke="#1a2744" strokeWidth="1.6" strokeLinejoin="round"/></svg> },
]

export default function WhyChooseUs() {
  return (
    <section className="py-10 border-t border-b" style={{ background: "#fff", borderColor: "#f0f0f0" }}>
      <div className={SITE_CONTAINER}>
        <SectionTitle title="WHY CHOOSE US" />
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="stat-item flex items-center gap-4 px-6 py-4">
              {s.icon}
              <div>
                <div className="montserrat font-900 text-2xl" style={{ color: "#FF5E00" }}>{s.num}</div>
                <div className="text-sm text-gray-500">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
