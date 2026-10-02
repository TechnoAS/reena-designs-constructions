import { Link } from "react-router-dom"
import ProjectIndex from "@/components/ui/ProjectIndex"
import { ONGOING_PROJECTS as PROJECTS } from "@/data/projects"

const TABS = ["All", "Residential", "Commercial"] as const

export default function ProjectsOngoing() {
  return (
    <ProjectIndex
      route="/our-work/projects/ongoing"
      subNav={[
        { label: "Successful Projects", href: "/our-work/projects/successful" },
        { label: "Ongoing Projects", href: "/our-work/projects/ongoing" },
      ]}
      tabs={TABS}
      projects={PROJECTS}
      intro="Sites currently under way, with build progress and the expected handover date for each one. Reviewed as each programme moves."
      renderMeta={(p) => (
        <>
          <h3 className="montserrat font-700 mb-0.5 text-base text-navy">{p.name}</h3>
          <div className="mb-3 text-xs text-slate-500">{p.location}</div>

          <div className="mb-1 flex items-center justify-between">
            <span className="text-xs text-slate-500">Progress</span>
            <span className="montserrat font-700 text-xs text-brand-ink">{p.progress}%</span>
          </div>
          <div
            className="mb-3 h-1.5 w-full rounded-full bg-slate-100"
            role="progressbar"
            aria-valuenow={p.progress}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label={`${p.name} build progress`}
          >
            <div
              className="h-1.5 rounded-full"
              style={{ width: `${p.progress}%`, background: "linear-gradient(90deg, var(--color-brand), var(--color-brand-light))" }}
            />
          </div>

          <div className="mb-5 text-xs text-slate-500">
            <span className="font-600 text-slate-600">Expected: </span>
            {p.expected}
          </div>

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
