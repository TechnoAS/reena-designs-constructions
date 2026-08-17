import { Link } from "react-router-dom"
import { SITE_CONTAINER } from "@/components/layout/constants"
import SectionTitle from "@/components/ui/SectionTitle"
import ProjectCard from "@/components/ui/ProjectCard"

const PROJECTS = [
  { title: "Modern Residence", location: "Kolkata, India", img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400&h=260&fit=crop&auto=format" },
  { title: "Luxury Villa", location: "Kolkata, India", img: "https://images.unsplash.com/photo-1706164971309-fb4785fe6ceb?w=400&h=260&fit=crop&auto=format" },
  { title: "Corporate Office", location: "Kolkata, India", img: "https://images.unsplash.com/photo-1783705094622-f2c01a9787b5?w=400&h=260&fit=crop&auto=format" },
  { title: "Premium Apartment", location: "Kolkata, India", img: "https://images.unsplash.com/photo-1567943183748-3a7542120c90?w=400&h=260&fit=crop&auto=format" },
]

export default function FeaturedProjects() {
  return (
    <section className="py-14 bg-white">
      <div className={SITE_CONTAINER}>
        <SectionTitle title="FEATURED PROJECTS" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.title} img={p.img} alt={p.title} height={180}>
              <div className="p-3">
                <div className="montserrat font-700 text-sm mb-0.5" style={{ color: "#1a2744" }}>{p.title}</div>
                <div className="text-gray-400" style={{ fontSize: "12px" }}>{p.location}</div>
              </div>
            </ProjectCard>
          ))}
        </div>
        <div className="flex justify-center">
          <Link to="/our-work/projects/successful" className="montserrat font-700 text-sm px-8 py-3 rounded-lg text-white inline-flex items-center gap-2" style={{ background: "#1a2744" }}>
            View All Projects
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M3 7.5h9M8 4.5l3 3-3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
