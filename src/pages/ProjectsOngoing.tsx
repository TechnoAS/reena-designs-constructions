import { useState } from "react"
import PageWrapper from "@/components/layout/PageWrapper"
import PageHeader from "@/components/ui/PageHeader"
import SubNav from "@/components/ui/SubNav"
import FilterTabs from "@/components/ui/FilterTabs"
import ProjectCard from "@/components/ui/ProjectCard"
import { SITE_CONTAINER } from "@/components/layout/constants"

const allProjects = [
  { name: "Horizon Heights", location: "Midnapur, West Bengal", type: "Residential", progress: 65, expected: "Aug 2024", tag: "Residential", img: "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?w=400&h=220&fit=crop&auto=format" },
  { name: "Blue Pearl Villa", location: "Ghatal, West Bengal", type: "Residential", progress: 40, expected: "Aug 2024", tag: "Residential", img: "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?w=400&h=220&fit=crop&auto=format" },
  { name: "Central Business Hub", location: "Kharagpur, West Bengal", type: "Commercial", progress: 30, expected: "Aug 2024", tag: "Commercial", img: "https://images.unsplash.com/photo-1783705094622-f2c01a9787b5?w=400&h=220&fit=crop&auto=format" },
  { name: "Lakewood Residency", location: "Midnapur, West Bengal", type: "Residential", progress: 55, expected: "Sep 2024", tag: "Residential", img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400&h=220&fit=crop&auto=format" },
  { name: "Pinnacle Towers", location: "Kharagpur, West Bengal", type: "Commercial", progress: 20, expected: "Sep 2024", tag: "Commercial", img: "https://images.unsplash.com/photo-1760246964044-1384f71665b9?w=400&h=220&fit=crop&auto=format" },
  { name: "Palm Crest Bungalow", location: "Salboni, West Bengal", type: "Residential", progress: 10, expected: "Oct 2024", tag: "Residential", img: "https://images.unsplash.com/photo-1706164971309-fb4785fe6ceb?w=400&h=220&fit=crop&auto=format" },
]

const tabs = ["All", "Residential", "Commercial"] as const

export default function ProjectsOngoing() {
  const [active, setActive] = useState("All")
  const filtered = active === "All" ? allProjects : allProjects.filter((p) => p.tag === active)

  return (
    <PageWrapper>
      <PageHeader
        title="ONGOING PROJECTS"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Our Work", href: "/our-work" },
          { label: "Projects" },
          { label: "Ongoing Projects" },
        ]}
      />

      <div className={`${SITE_CONTAINER} py-10`}>
        <SubNav tabs={[
          { label: "Successful Projects", href: "/our-work/projects/successful", active: false },
          { label: "Ongoing Projects", href: "/our-work/projects/ongoing", active: true },
        ]} />

        <FilterTabs tabs={tabs} active={active} onSelect={setActive} />

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <ProjectCard key={p.name} img={p.img} alt={p.name} height={180}>
              <h3 className="montserrat font-700 text-base mb-0.5" style={{ color: "#1a2744" }}>{p.name}</h3>
              <div className="text-xs text-gray-400 mb-3">{p.location}</div>

              {/* Progress bar */}
              <div className="mb-1 flex items-center justify-between">
                <span className="text-xs text-gray-500">Progress</span>
                <span className="montserrat font-700 text-xs" style={{ color: "#FF5E00" }}>{p.progress}%</span>
              </div>
              <div className="w-full rounded-full h-1.5 mb-3" style={{ background: "#f0f0f0" }}>
                <div className="h-1.5 rounded-full" style={{ width: `${p.progress}%`, background: "linear-gradient(90deg, #FF5E00, #ff8c00)" }} />
              </div>
              <div className="text-xs text-gray-500 mb-4">
                <span className="font-600" style={{ color: "#555" }}>Expected: </span>{p.expected}
              </div>
              <button className="btn-outline montserrat font-700 text-xs px-4 py-2 w-full rounded-lg">View Details</button>
            </ProjectCard>
          ))}
        </div>
      </div>
    </PageWrapper>
  )
}
