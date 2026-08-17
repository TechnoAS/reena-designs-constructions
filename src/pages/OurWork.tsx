import { Link } from "react-router-dom"
import PageWrapper from "@/components/layout/PageWrapper"
import PageHeader from "@/components/ui/PageHeader"
import { SITE_CONTAINER } from "@/components/layout/constants"

const categories = [
  {
    num: 1, label: "Projects", href: "/our-work/projects/successful",
    icon: <svg width="44" height="44" viewBox="0 0 44 44" fill="none"><path d="M6 40V18L22 6l16 12v22" stroke="#1a2744" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><rect x="15" y="26" width="14" height="14" rx="1" stroke="#1a2744" strokeWidth="1.6"/><path d="M6 24l16-10 16 10" stroke="#FF5E00" strokeWidth="1.8" strokeLinecap="round"/></svg>,
  },
  {
    num: 2, label: "Interior Design", href: "/our-work/interior/residential",
    icon: <svg width="44" height="44" viewBox="0 0 44 44" fill="none"><path d="M22 8v9M22 17c-5.5 0-9 4-9 9v3h18v-3c0-5-3.5-9-9-9z" stroke="#1a2744" strokeWidth="1.8" strokeLinejoin="round"/><rect x="19" y="29" width="6" height="11" rx="0.5" stroke="#1a2744" strokeWidth="1.6"/><path d="M7 38h30" stroke="#1a2744" strokeWidth="1.8" strokeLinecap="round"/><path d="M13 26h7M24 26h7" stroke="#FF5E00" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  },
  {
    num: 3, label: "Exterior Design", href: "/our-work/exterior",
    icon: <svg width="44" height="44" viewBox="0 0 44 44" fill="none"><path d="M5 40V20L22 6l17 14v20" stroke="#1a2744" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><path d="M5 24l17-12 17 12" stroke="#FF5E00" strokeWidth="1.8" strokeLinecap="round"/><rect x="16" y="28" width="12" height="12" rx="0.5" stroke="#1a2744" strokeWidth="1.5"/><path d="M10 34h4M30 34h4" stroke="#1a2744" strokeWidth="1.4" strokeLinecap="round" opacity="0.4"/></svg>,
  },
  {
    num: 4, label: "Architecture Gallery", href: "/our-work/architecture",
    icon: <svg width="44" height="44" viewBox="0 0 44 44" fill="none"><rect x="5" y="8" width="34" height="28" rx="3" stroke="#1a2744" strokeWidth="1.8"/><path d="M5 22h34" stroke="#1a2744" strokeWidth="1.5" strokeLinecap="round"/><path d="M18 8v28M26 8v28" stroke="#1a2744" strokeWidth="1.3" strokeLinecap="round" opacity="0.4"/><circle cx="33" cy="14" r="3" fill="#FF5E00" opacity="0.7"/></svg>,
  },
  {
    num: 5, label: "3D Design & Elevation", href: "/our-work/3d-design",
    icon: <svg width="44" height="44" viewBox="0 0 44 44" fill="none"><path d="M22 5L38 14v18L22 40 6 32V14L22 5z" stroke="#1a2744" strokeWidth="1.8" strokeLinejoin="round"/><path d="M22 5v35M6 14l16 9 16-9" stroke="#FF5E00" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  },
  {
    num: 6, label: "Renovation Projects", href: "/our-work/renovation",
    icon: <svg width="44" height="44" viewBox="0 0 44 44" fill="none"><path d="M9 40V20l13-13 13 13v20" stroke="#1a2744" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><circle cx="35" cy="15" r="6" fill="#fff" stroke="#FF5E00" strokeWidth="1.7"/><path d="M32 15h6M35 12v6" stroke="#FF5E00" strokeWidth="1.4" strokeLinecap="round"/><rect x="17" y="27" width="10" height="13" rx="0.5" stroke="#1a2744" strokeWidth="1.5"/></svg>,
  },
  {
    num: 7, label: "Before & After Gallery", href: "/our-work/before-after",
    icon: <svg width="44" height="44" viewBox="0 0 44 44" fill="none"><rect x="4" y="8" width="16" height="28" rx="2" stroke="#1a2744" strokeWidth="1.8"/><rect x="24" y="8" width="16" height="28" rx="2" stroke="#1a2744" strokeWidth="1.8"/><path d="M20 22h4" stroke="#FF5E00" strokeWidth="2" strokeLinecap="round"/><path d="M17 19l-3 3 3 3M27 19l3 3-3 3" stroke="#FF5E00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  },
  {
    num: 8, label: "Client Testimonials", href: "/our-work/testimonials",
    icon: <svg width="44" height="44" viewBox="0 0 44 44" fill="none"><circle cx="18" cy="16" r="7" stroke="#1a2744" strokeWidth="1.8"/><path d="M8 38c0-5.52 4.48-10 10-10s10 4.48 10 10" stroke="#1a2744" strokeWidth="1.8" strokeLinecap="round"/><path d="M30 22l3 3 6-6" stroke="#FF5E00" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  },
]

export default function OurWork() {
  return (
    <PageWrapper>
      <PageHeader title="OUR WORK" crumbs={[{ label: "Home", href: "/" }, { label: "Our Work" }]} />

      <div className={`${SITE_CONTAINER} py-14`}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {categories.map((cat) => (
            <Link key={cat.num} to={cat.href} className="svc-card p-8 flex flex-col items-center gap-4 text-center group">
              <div className="montserrat font-800 text-3xl" style={{ color: "rgba(26,39,68,0.08)" }}>{cat.num}.</div>
              <div className="w-16 h-16 flex items-center justify-center rounded-xl transition-colors" style={{ background: "#f7f7f7" }}>
                {cat.icon}
              </div>
              <span className="montserrat font-700 text-sm leading-snug" style={{ color: "#1a2744" }}>{cat.label}</span>
              <div className="flex items-center gap-1 text-xs font-500 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: "#FF5E00" }}>
                View Gallery
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </PageWrapper>
  )
}
