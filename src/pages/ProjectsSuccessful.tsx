import { useState } from "react"
import PageWrapper from "@/components/layout/PageWrapper"
import PageHeader from "@/components/ui/PageHeader"
import SubNav from "@/components/ui/SubNav"
import FilterTabs from "@/components/ui/FilterTabs"
import ProjectCard from "@/components/ui/ProjectCard"
import { SITE_CONTAINER } from "@/components/layout/constants"

const allProjects = [
  { name: "Sunrise Villa", location: "Midnapur, West Bengal", type: "Residential", area: "3200 Sq.ft", completed: "Jan 2024", tag: "Residential", img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400&h=260&fit=crop&auto=format" },
  { name: "Greenfield Apartment", location: "Kharagpur, West Bengal", type: "Residential", area: "2500 Sq.ft", completed: "Jan 2024", tag: "Residential", img: "https://images.unsplash.com/photo-1567943183748-3a7542120c90?w=400&h=260&fit=crop&auto=format" },
  { name: "Metro Plaza", location: "Midnapur, West Bengal", type: "Commercial", area: "8500 Sq.ft", completed: "Jan 2024", tag: "Commercial", img: "https://images.unsplash.com/photo-1783705094622-f2c01a9787b5?w=400&h=260&fit=crop&auto=format" },
  { name: "The Prestige Tower", location: "Kharagpur, West Bengal", type: "Commercial", area: "12000 Sq.ft", completed: "Mar 2024", tag: "Commercial", img: "https://images.unsplash.com/photo-1760246964044-1384f71665b9?w=400&h=260&fit=crop&auto=format" },
  { name: "Serene Heights", location: "Ghatal, West Bengal", type: "Residential", area: "4100 Sq.ft", completed: "Feb 2024", tag: "Residential", img: "https://images.unsplash.com/photo-1706164971309-fb4785fe6ceb?w=400&h=260&fit=crop&auto=format" },
  { name: "Luxe Living Room", location: "Midnapur, West Bengal", type: "Interior", area: "1200 Sq.ft", completed: "Apr 2024", tag: "Interior", img: "https://images.unsplash.com/photo-1646987916641-1f3c8992daa2?w=400&h=260&fit=crop&auto=format" },
  { name: "Heritage Bungalow", location: "Belda, West Bengal", type: "Residential", area: "5500 Sq.ft", completed: "May 2024", tag: "Renovation", img: "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?w=400&h=260&fit=crop&auto=format" },
  { name: "Skyline Office", location: "Kharagpur, West Bengal", type: "Commercial", area: "6200 Sq.ft", completed: "Jun 2024", tag: "Commercial", img: "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?w=400&h=260&fit=crop&auto=format" },
  { name: "Golden Gate Villa", location: "Jhargram, West Bengal", type: "Renovation", area: "3800 Sq.ft", completed: "Jul 2024", tag: "Renovation", img: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=400&h=260&fit=crop&auto=format" },
]

const tabs = ["All", "Residential", "Commercial", "Interior", "Renovation"] as const

export default function ProjectsSuccessful() {
  const [active, setActive] = useState("All")
  const filtered = active === "All" ? allProjects : allProjects.filter((p) => p.tag === active)

  return (
    <PageWrapper>
      <PageHeader
        title="SUCCESSFUL PROJECTS"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Our Work", href: "/our-work" },
          { label: "Projects" },
          { label: "Successful Projects" },
        ]}
      />

      <div className={`${SITE_CONTAINER} py-10`}>
        <SubNav tabs={[
          { label: "Successful Projects", href: "/our-work/projects/successful", active: true },
          { label: "Ongoing Projects", href: "/our-work/projects/ongoing", active: false },
        ]} />

        <FilterTabs tabs={tabs} active={active} onSelect={setActive} />

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
          {filtered.map((p) => (
            <ProjectCard key={p.name} img={p.img} alt={p.name} height={200}>
              <h3 className="montserrat font-700 text-base mb-1" style={{ color: "#1a2744" }}>{p.name}</h3>
              <div className="text-xs text-gray-400 mb-3">{p.location}</div>
              <div className="grid grid-cols-2 gap-2 text-xs text-gray-500 mb-4">
                <div><span className="font-600" style={{ color: "#555" }}>Type: </span>{p.type}</div>
                <div><span className="font-600" style={{ color: "#555" }}>Area: </span>{p.area}</div>
                <div className="col-span-2"><span className="font-600" style={{ color: "#555" }}>Completed: </span>{p.completed}</div>
              </div>
              <button className="btn-outline montserrat font-700 text-xs px-4 py-2 w-full rounded-lg">View Details</button>
            </ProjectCard>
          ))}
        </div>
      </div>
    </PageWrapper>
  )
}
