import { Link } from "react-router-dom"
import ProjectIndex from "@/components/ui/ProjectIndex"

const IMG = (id: string) => `https://images.unsplash.com/${id}?w=640&h=480&fit=crop&auto=format`

const PROJECTS = [
  { name: "Sunrise Villa", location: "Midnapur, West Bengal", type: "Residential", area: "3200 Sq.ft", completed: "Jan 2024", tag: "Residential", img: IMG("photo-1613490493576-7fde63acd811") },
  { name: "Greenfield Apartment", location: "Kharagpur, West Bengal", type: "Residential", area: "2500 Sq.ft", completed: "Jan 2024", tag: "Residential", img: IMG("photo-1567943183748-3a7542120c90") },
  { name: "Metro Plaza", location: "Midnapur, West Bengal", type: "Commercial", area: "8500 Sq.ft", completed: "Jan 2024", tag: "Commercial", img: IMG("photo-1783705094622-f2c01a9787b5") },
  { name: "The Prestige Tower", location: "Kharagpur, West Bengal", type: "Commercial", area: "12000 Sq.ft", completed: "Mar 2024", tag: "Commercial", img: IMG("photo-1760246964044-1384f71665b9") },
  { name: "Serene Heights", location: "Ghatal, West Bengal", type: "Residential", area: "4100 Sq.ft", completed: "Feb 2024", tag: "Residential", img: IMG("photo-1706164971309-fb4785fe6ceb") },
  { name: "Luxe Living Room", location: "Midnapur, West Bengal", type: "Interior", area: "1200 Sq.ft", completed: "Apr 2024", tag: "Interior", img: IMG("photo-1646987916641-1f3c8992daa2") },
  { name: "Heritage Bungalow", location: "Belda, West Bengal", type: "Residential", area: "5500 Sq.ft", completed: "May 2024", tag: "Renovation", img: IMG("photo-1479839672679-a46483c0e7c8") },
  { name: "Skyline Office", location: "Kharagpur, West Bengal", type: "Commercial", area: "6200 Sq.ft", completed: "Jun 2024", tag: "Commercial", img: IMG("photo-1488972685288-c3fd157d7c7a") },
  { name: "Golden Gate Villa", location: "Jhargram, West Bengal", type: "Renovation", area: "3800 Sq.ft", completed: "Jul 2024", tag: "Renovation", img: IMG("photo-1518005020951-eccb494ad742") },
] as const

const TABS = ["All", "Residential", "Commercial", "Interior", "Renovation"] as const

export default function ProjectsSuccessful() {
  return (
    <ProjectIndex
      title="SUCCESSFUL PROJECTS"
      seoTitle="Successful Projects — Completed Builds & Handovers"
      seoDescription="Completed residential, commercial, interior and renovation projects across Midnapur, Kharagpur, Ghatal, Belda and Jhargram — each delivered to the approved drawing on the contracted date."
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Our Work", href: "/our-work" },
        { label: "Projects" },
        { label: "Successful Projects" },
      ]}
      subNav={[
        { label: "Successful Projects", href: "/our-work/projects/successful" },
        { label: "Ongoing Projects", href: "/our-work/projects/ongoing" },
      ]}
      tabs={TABS}
      projects={PROJECTS}
      intro="Builds handed over to the approved drawing, on the contracted date — across Midnapur, Kharagpur, Ghatal, Belda and Jhargram."
      renderMeta={(p) => (
        <>
          <h3 className="montserrat font-700 mb-1 text-base text-navy">{p.name}</h3>
          <div className="mb-3 text-xs text-slate-400">{p.location}</div>
          <div className="mb-4 grid grid-cols-2 gap-2 text-xs text-slate-500">
            <div>
              <span className="font-600 text-slate-600">Type: </span>
              {p.type}
            </div>
            <div>
              <span className="font-600 text-slate-600">Area: </span>
              {p.area}
            </div>
            <div className="col-span-2">
              <span className="font-600 text-slate-600">Completed: </span>
              {p.completed}
            </div>
          </div>
          {/* Was a <button> with no handler. There is no per-project detail
              route, so it now opens an enquiry naming this build. */}
          <Link
            to={`/contact?project=${encodeURIComponent(p.name)}`}
            className="btn-outline montserrat font-700 mt-auto w-full px-4 py-2.5 text-xs"
          >
            Enquire about this project
          </Link>
        </>
      )}
    />
  )
}
