import { Link } from "react-router-dom"
import { Building2, DraftingCompass, Sofa, Hammer, KeyRound, ArrowUpRight } from "lucide-react"
import { SITE_CONTAINER } from "@/components/layout/constants"
import SectionTitle from "@/components/ui/SectionTitle"

const SERVICES = [
  {
    title: "Building Construction",
    href: "/services",
    Icon: Building2,
    copy: "Structurally engineered residential and commercial builds, executed to IS-code standards with third-party tested materials.",
  },
  {
    title: "Architectural Design",
    href: "/services",
    Icon: DraftingCompass,
    copy: "Site-responsive planning, working drawings and municipal-ready documentation — sanctioned faster, built cleaner.",
  },
  {
    title: "Interior Design",
    href: "/our-work/interior/residential",
    Icon: Sofa,
    copy: "Bespoke residential and workspace interiors, detailed down to the joinery, lighting layer and material palette.",
  },
  {
    title: "Renovation & Remodeling",
    href: "/our-work/renovation",
    Icon: Hammer,
    copy: "Structural retrofits and full-home makeovers that modernise ageing property without compromising its frame.",
  },
  {
    title: "Turnkey Solutions",
    href: "/contact",
    Icon: KeyRound,
    copy: "One accountable contract from drawing board to handover — a single team, one timeline, one fixed cost.",
  },
]

export default function CoreServices() {
  return (
    <section id="services" className="py-20" style={{ background: "#f7f7f7" }}>
      <div className={SITE_CONTAINER}>
        <SectionTitle
          eyebrow="What we do"
          title="OUR CORE SERVICES"
          subtitle="Five disciplines under one roof — construction, architecture, interiors, renovation and turnkey delivery — so your project never loses momentum between vendors."
        />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {SERVICES.map(({ title, href, Icon, copy }) => (
            <Link
              key={title}
              to={href}
              className="svc-card group flex flex-col gap-3 p-6 text-left"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-orange-500 transition duration-300 group-hover:bg-orange-500 group-hover:text-white">
                <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
              </span>
              <h3 className="montserrat font-800 text-sm leading-snug" style={{ color: "#1a2744" }}>
                {title}
              </h3>
              <p className="text-[13px] leading-relaxed text-slate-500">{copy}</p>
              <span className="mt-auto inline-flex items-center gap-1 pt-2 text-[12px] font-bold text-orange-600 opacity-0 transition duration-300 group-hover:opacity-100">
                Explore
                <ArrowUpRight size={13} strokeWidth={2.4} aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
