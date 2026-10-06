import { Link } from "react-router-dom"
import ProjectIndex from "@/components/ui/ProjectIndex"
import { SUCCESSFUL_PROJECTS as PROJECTS } from "@/data/projects"

const TABS = ["All", "Residential", "Commercial", "Interior", "Renovation"] as const

export default function ProjectsSuccessful() {
  return (
    <ProjectIndex
      route="/our-work/projects/successful"
      subNav={[
        { label: "Successful Projects", href: "/our-work/projects/successful" },
        { label: "Ongoing Projects", href: "/our-work/projects/ongoing" },
      ]}
      tabs={TABS}
      projects={PROJECTS}
      intro="Builds handed over to the approved drawing, on the contracted date — across Medinipur, Kharagpur, Ghatal, Belda and Jhargram."
      renderMeta={(p) => (
        <>
          <h3 className="montserrat font-700 mb-1 text-base text-navy">{p.name}</h3>
          <div className="mb-3 text-xs text-slate-500">{p.location}</div>
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
