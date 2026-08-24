import { Link } from "react-router-dom"
import { ArrowRight, MapPin } from "lucide-react"
import { SITE_CONTAINER } from "@/components/layout/constants"
import SectionTitle from "@/components/ui/SectionTitle"
import ProjectCard from "@/components/ui/ProjectCard"

const PROJECTS = [
  { title: "Modern Residence", type: "Residential Construction", location: "Midnapur, West Bengal", img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&h=400&fit=crop&auto=format" },
  { title: "Luxury Villa", type: "Architecture & Interiors", location: "Kharagpur, West Bengal", img: "https://images.unsplash.com/photo-1706164971309-fb4785fe6ceb?w=600&h=400&fit=crop&auto=format" },
  { title: "Corporate Office", type: "Commercial Fit-out", location: "Midnapur, West Bengal", img: "https://images.unsplash.com/photo-1783705094622-f2c01a9787b5?w=600&h=400&fit=crop&auto=format" },
  { title: "Premium Apartment", type: "Turnkey Delivery", location: "Ghatal, West Bengal", img: "https://images.unsplash.com/photo-1567943183748-3a7542120c90?w=600&h=400&fit=crop&auto=format" },
]

export default function FeaturedProjects() {
  return (
    <section className="bg-white py-20">
      <div className={SITE_CONTAINER}>
        <SectionTitle
          eyebrow="Selected work"
          title="FEATURED PROJECTS"
          subtitle="A closer look at recent residential, commercial and turnkey builds delivered across Paschim Midnapur and beyond — each handed over on schedule and to the approved drawing."
        />
        <div className="mb-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.title} img={p.img} alt={`${p.title} — ${p.type} project in ${p.location}`} height={220}>
              <div className="p-4">
                <div className="montserrat font-700 mb-1 text-[10px] uppercase tracking-[0.18em] text-orange-600">
                  {p.type}
                </div>
                <div className="montserrat font-800 text-sm" style={{ color: "#1a2744" }}>{p.title}</div>
                <div className="mt-1.5 flex items-center gap-1.5 text-[12px] text-slate-400">
                  <MapPin size={12} strokeWidth={2} aria-hidden="true" />
                  {p.location}
                </div>
              </div>
            </ProjectCard>
          ))}
        </div>
        <div className="flex justify-center">
          <Link
            to="/our-work/projects/successful"
            className="montserrat font-700 group inline-flex items-center gap-2 rounded-lg px-8 py-3.5 text-sm text-white transition duration-300 hover:opacity-90"
            style={{ background: "#1a2744" }}
          >
            View All Projects
            <ArrowRight size={15} strokeWidth={2.2} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
