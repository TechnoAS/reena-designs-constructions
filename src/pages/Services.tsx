import {
  Home,
  Building2,
  DraftingCompass,
  Frame,
  Hammer,
  Sofa,
  Trees,
  KeyRound,
} from "lucide-react"
import PageWrapper from "@/components/layout/PageWrapper"
import PageHeader from "@/components/ui/PageHeader"
import SectionTitle from "@/components/ui/SectionTitle"
import CTABanner from "@/components/ui/CTABanner"
import BuildSimulator from "@/components/ui/BuildSimulator"
import { SITE_CONTAINER } from "@/components/layout/constants"

const services = [
  { title: "Residential Construction", Icon: Home, copy: "Independent homes and apartments built to your approved drawing, with certified steel and cement at every stage." },
  { title: "Commercial Construction", Icon: Building2, copy: "Offices, showrooms and retail shells delivered on commercial timelines, with minimal disruption to trading." },
  { title: "Architectural Design", Icon: DraftingCompass, copy: "Site-responsive planning, working drawings and sanction-ready documentation prepared in-house." },
  { title: "Structural Engineering", Icon: Frame, copy: "Load calculations, RCC detailing and seismic-compliant framing signed off by qualified structural engineers." },
  { title: "Renovation & Remodeling", Icon: Hammer, copy: "Structural retrofits and full-property makeovers that modernise ageing buildings without touching their integrity." },
  { title: "Interior Design", Icon: Sofa, copy: "Bespoke interiors resolved to the joinery, lighting layer and material palette before execution begins." },
  { title: "Exterior Design", Icon: Trees, copy: "Elevations, facade treatments and landscaping that give the building its street presence." },
  { title: "Turnkey Construction", Icon: KeyRound, copy: "Design to handover under one contract — a single team, one timeline and one fixed cost." },
]

export default function Services() {
  return (
    <PageWrapper>
      <PageHeader title="OUR SERVICES" crumbs={[{ label: "Home", href: "/" }, { label: "Services" }]} />

      <div className={`${SITE_CONTAINER} flex flex-col gap-20 py-16`}>
        {/* Services We Provide */}
        <section>
          <SectionTitle
            eyebrow="Full-service capability"
            title="SERVICES WE PROVIDE"
            subtitle="Eight construction and design disciplines delivered in-house across India — so responsibility for your project never changes hands."
          />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map(({ title, Icon, copy }) => (
              <article key={title} className="svc-card group flex flex-col gap-3 p-6">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-orange-500 transition duration-300 group-hover:bg-orange-500 group-hover:text-white">
                  <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
                </span>
                <h3 className="montserrat font-800 text-sm leading-snug" style={{ color: "#1a2744" }}>{title}</h3>
                <p className="text-[13px] leading-relaxed text-slate-500">{copy}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Work Process */}
        <section>
          <SectionTitle
            eyebrow="How we work"
            title="WATCH YOUR BUILDING TAKE SHAPE"
            subtitle="Nineteen steps, four phases, one documented sequence — from bare plot to keys in your hand. Press play, or step through it yourself."
          />
          <BuildSimulator />
        </section>

        <CTABanner
          title="READY TO START YOUR PROJECT?"
          subtitle="Tell us about your site and requirements. You will get a detailed, itemised quote and a realistic completion date — with no obligation."
          buttonText="Get a Free Quote"
          buttonHref="/contact"
        />
      </div>
    </PageWrapper>
  )
}
