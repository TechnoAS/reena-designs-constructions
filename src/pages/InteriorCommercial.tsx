import { useState } from "react"
import PageWrapper from "@/components/layout/PageWrapper"
import Seo from "@/components/Seo"
import PageHeader from "@/components/ui/PageHeader"
import SubNav from "@/components/ui/SubNav"
import FilterTabs from "@/components/ui/FilterTabs"
import ProjectCard from "@/components/ui/ProjectCard"
import { SITE_CONTAINER } from "@/components/layout/constants"

const allProjects = {
  Office: [
    { title: "Corporate Office Suite", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=280&fit=crop&auto=format" },
    { title: "Open Plan Office", img: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400&h=280&fit=crop&auto=format" },
    { title: "Executive Boardroom", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=280&fit=crop&auto=format" },
  ],
  Restaurant: [
    { title: "Fine Dining Restaurant", img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=280&fit=crop&auto=format" },
    { title: "Cafe & Bistro", img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&h=280&fit=crop&auto=format" },
  ],
  "Retail Shop": [
    { title: "Luxury Boutique", img: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=400&h=280&fit=crop&auto=format" },
    { title: "Clothing Showroom", img: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=400&h=280&fit=crop&auto=format" },
  ],
  Hotel: [
    { title: "Hotel Lobby", img: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&h=280&fit=crop&auto=format" },
    { title: "Hotel Suite", img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=280&fit=crop&auto=format" },
    { title: "Hotel Restaurant", img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=280&fit=crop&auto=format" },
  ],
  Others: [
    { title: "Hospital Reception", img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=280&fit=crop&auto=format" },
    { title: "School Interiors", img: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&h=280&fit=crop&auto=format" },
  ],
}

const tabs = ["Office", "Restaurant", "Retail Shop", "Hotel", "Others"] as const

export default function InteriorCommercial() {
  const [active, setActive] = useState<keyof typeof allProjects>("Office")

  return (
    <PageWrapper>
      <Seo
        title="Commercial Interior Design — Offices, Retail & Hotels"
        description="Office, restaurant, retail, hotel and institutional interiors delivered on commercial timelines with minimal disruption to trading, across Midnapur, Kharagpur and West Bengal."
      />
      <PageHeader
        title="COMMERCIAL INTERIOR"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Our Work", href: "/our-work" },
          { label: "Interior Design" },
          { label: "Commercial Interior" },
        ]}
      />

      <div className={`${SITE_CONTAINER} py-10`}>
        <SubNav tabs={[
          { label: "Residential Interior", href: "/our-work/interior/residential" },
          { label: "Commercial Interior", href: "/our-work/interior/commercial" },
        ]} />

        <FilterTabs tabs={tabs} active={active} onSelect={(t) => setActive(t as keyof typeof allProjects)} />

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {(allProjects[active] || []).map((p) => (
            <ProjectCard key={p.title} img={p.img} alt={p.title} height={220}>
              <h3 className="montserrat font-700 text-sm text-navy">{p.title}</h3>
            </ProjectCard>
          ))}
        </div>
      </div>
    </PageWrapper>
  )
}
