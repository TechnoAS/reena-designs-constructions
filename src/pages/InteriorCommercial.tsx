import { useState } from "react"
import PageWrapper from "@/components/layout/PageWrapper"
import Seo from "@/components/Seo"
import { serviceSchema, webPageSchema, serviceAreaSchema, pageGraph } from "@/data/structuredData"
import PageHeader from "@/components/ui/PageHeader"
import SubNav from "@/components/ui/SubNav"
import FilterTabs from "@/components/ui/FilterTabs"
import ProjectCard from "@/components/ui/ProjectCard"
import { SITE_CONTAINER } from "@/components/layout/constants"

const allProjects = {
  Office: [
    { title: "Corporate Office Suite", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=640&h=480&fit=crop&auto=format" },
    { title: "Open Plan Office", img: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=640&h=480&fit=crop&auto=format" },
    { title: "Executive Boardroom", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=640&h=480&fit=crop&auto=format" },
  ],
  Restaurant: [
    { title: "Fine Dining Restaurant", img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=640&h=480&fit=crop&auto=format" },
    { title: "Cafe & Bistro", img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=640&h=480&fit=crop&auto=format" },
  ],
  "Retail Shop": [
    { title: "Luxury Boutique", img: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=640&h=480&fit=crop&auto=format" },
    { title: "Clothing Showroom", img: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=640&h=480&fit=crop&auto=format" },
  ],
  Hotel: [
    { title: "Hotel Lobby", img: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=640&h=480&fit=crop&auto=format" },
    { title: "Hotel Suite", img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=640&h=480&fit=crop&auto=format" },
    { title: "Hotel Restaurant", img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=640&h=480&fit=crop&auto=format" },
  ],
  Others: [
    { title: "Hospital Reception", img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=640&h=480&fit=crop&auto=format" },
    { title: "School Interiors", img: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=640&h=480&fit=crop&auto=format" },
  ],
}

const tabs = ["Office", "Restaurant", "Retail Shop", "Hotel", "Others"] as const

const INTRO =
  "Offices, restaurants, retail floors and hotels fitted out on commercial timelines — sequenced around your trading hours so the doors stay open."

export default function InteriorCommercial() {
  const [active, setActive] = useState<keyof typeof allProjects>("Office")
  const visible = allProjects[active] ?? []

  return (
    <PageWrapper
      cta={{
        title: "Planning a commercial fit-out?",
        subtitle: "Free site visit, itemised quote, and a completion date in writing.",
        buttonText: "Talk to Our Team",
        buttonHref: "/contact",
      }}
    >
      <Seo
        title="Commercial Interior Design — Offices, Retail & Hotels"
        description="Office, restaurant, retail, hotel and institutional interiors delivered on commercial timelines with minimal disruption to trading, across Midnapur, Kharagpur and West Bengal."
        schema={pageGraph(
          webPageSchema({
            path: "/our-work/interior/commercial",
            name: "Commercial Interior Design — Offices, Retail & Hotels in West Bengal",
            description:
              "Office, restaurant, retail, showroom, hotel and institutional interiors delivered on commercial timelines across Midnapur, Kharagpur and West Bengal.",
            type: "CollectionPage",
          }),
          serviceSchema(
            "Commercial Interior Design",
            "Office, restaurant, retail, showroom, hotel and institutional interior design and fit-out, delivered on commercial timelines with minimal disruption to trading.",
            "/our-work/interior/commercial",
          ),
          serviceAreaSchema("/our-work/interior/commercial"),
        )}
      />
      <PageHeader
        title="COMMERCIAL INTERIOR"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Our Work", href: "/our-work" },
          { label: "Interior Design" },
          { label: "Commercial Interior" },
        ]}
        backdrop
      />

      <section className={`${SITE_CONTAINER} pt-10`}>
        <SubNav
          tabs={[
            { label: "Residential Interior", href: "/our-work/interior/residential" },
            { label: "Commercial Interior", href: "/our-work/interior/commercial" },
          ]}
        />

        <div className="mb-9 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <p className="max-w-2xl text-sm leading-7 text-slate-500">{INTRO}</p>
          <p className="flex-none text-[10.5px] uppercase tracking-[0.16em] text-slate-400">
            {visible.length} {visible.length === 1 ? "project" : "projects"}
          </p>
        </div>

        <FilterTabs
          tabs={tabs}
          active={active}
          onSelect={(t) => setActive(t as keyof typeof allProjects)}
        />
      </section>

      <div className="grid gap-px border-y border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {visible.map((p, i) => (
          <ProjectCard key={p.title} img={p.img} alt={p.title} priority={i < 4}>
            <h3 className="montserrat font-700 text-sm text-navy">{p.title}</h3>
            <p className="mt-1 text-xs text-slate-400">{active}</p>
          </ProjectCard>
        ))}
      </div>
    </PageWrapper>
  )
}
