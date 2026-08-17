import { useState } from "react"
import PageWrapper from "@/components/layout/PageWrapper"
import PageHeader from "@/components/ui/PageHeader"
import SubNav from "@/components/ui/SubNav"
import FilterTabs from "@/components/ui/FilterTabs"
import ProjectCard from "@/components/ui/ProjectCard"
import { SITE_CONTAINER } from "@/components/layout/constants"

const allProjects = {
  "Living Room": [
    { title: "Modern Living Room", img: "https://images.unsplash.com/photo-1646987916641-1f3c8992daa2?w=400&h=280&fit=crop&auto=format" },
    { title: "Minimalist Lounge", img: "https://images.unsplash.com/photo-1648881806148-e5c51179c826?w=400&h=280&fit=crop&auto=format" },
    { title: "Contemporary Sitting", img: "https://images.unsplash.com/photo-1688647063090-36f36f692d95?w=400&h=280&fit=crop&auto=format" },
  ],
  Bedroom: [
    { title: "Master Bedroom Suite", img: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=400&h=280&fit=crop&auto=format" },
    { title: "Kids Bedroom", img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=400&h=280&fit=crop&auto=format" },
    { title: "Guest Room", img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400&h=280&fit=crop&auto=format" },
  ],
  Kitchen: [
    { title: "Modular Kitchen", img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=280&fit=crop&auto=format" },
    { title: "Open Kitchen", img: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=400&h=280&fit=crop&auto=format" },
    { title: "Island Kitchen", img: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=400&h=280&fit=crop&auto=format" },
  ],
  Dining: [
    { title: "Formal Dining Room", img: "https://images.unsplash.com/photo-1615873968403-89e068629265?w=400&h=280&fit=crop&auto=format" },
    { title: "Casual Dining Area", img: "https://images.unsplash.com/photo-1556742400-b5b7c512e6d3?w=400&h=280&fit=crop&auto=format" },
  ],
  Bathroom: [
    { title: "Luxury Master Bath", img: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&h=280&fit=crop&auto=format" },
    { title: "Contemporary Bathroom", img: "https://images.unsplash.com/photo-1620626011761-996317702519?w=400&h=280&fit=crop&auto=format" },
  ],
}

const tabs = ["Living Room", "Bedroom", "Kitchen", "Dining", "Bathroom"] as const

export default function InteriorResidential() {
  const [active, setActive] = useState<keyof typeof allProjects>("Living Room")

  return (
    <PageWrapper>
      <PageHeader
        title="RESIDENTIAL INTERIOR"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Our Work", href: "/our-work" },
          { label: "Interior Design" },
          { label: "Residential Interior" },
        ]}
      />

      <div className={`${SITE_CONTAINER} py-10`}>
        <SubNav tabs={[
          { label: "Residential Interior", href: "/our-work/interior/residential", active: true },
          { label: "Commercial Interior", href: "/our-work/interior/commercial", active: false },
        ]} />

        <FilterTabs tabs={tabs} active={active} onSelect={(t) => setActive(t as keyof typeof allProjects)} />

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {(allProjects[active] || []).map((p) => (
            <ProjectCard key={p.title} img={p.img} alt={p.title} height={220}>
              <h3 className="montserrat font-700 text-sm" style={{ color: "#1a2744" }}>{p.title}</h3>
            </ProjectCard>
          ))}
        </div>
      </div>
    </PageWrapper>
  )
}
