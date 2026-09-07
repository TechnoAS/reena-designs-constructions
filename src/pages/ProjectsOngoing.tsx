import { Link } from "react-router-dom"
import ProjectIndex from "@/components/ui/ProjectIndex"

const IMG = (id: string) => `https://images.unsplash.com/${id}?w=640&h=480&fit=crop&auto=format`

/**
 * Live sites.
 *
 * These handover dates are the one piece of content on the site that goes
 * stale on its own — every entry previously read "Expected: Aug 2024", two
 * years in the past, which reads worse than showing nothing at all. Review
 * this list whenever a project completes or a programme moves.
 */
const PROJECTS = [
  { name: "Horizon Heights", location: "Midnapur, West Bengal", type: "Residential", progress: 65, expected: "Nov 2026", tag: "Residential", img: IMG("photo-1488972685288-c3fd157d7c7a") },
  { name: "Blue Pearl Villa", location: "Ghatal, West Bengal", type: "Residential", progress: 40, expected: "Nov 2026", tag: "Residential", img: IMG("photo-1479839672679-a46483c0e7c8") },
  { name: "Central Business Hub", location: "Kharagpur, West Bengal", type: "Commercial", progress: 30, expected: "Nov 2026", tag: "Commercial", img: IMG("photo-1783705094622-f2c01a9787b5") },
  { name: "Lakewood Residency", location: "Midnapur, West Bengal", type: "Residential", progress: 55, expected: "Jan 2027", tag: "Residential", img: IMG("photo-1613490493576-7fde63acd811") },
  { name: "Pinnacle Towers", location: "Kharagpur, West Bengal", type: "Commercial", progress: 20, expected: "Jan 2027", tag: "Commercial", img: IMG("photo-1760246964044-1384f71665b9") },
  { name: "Palm Crest Bungalow", location: "Salboni, West Bengal", type: "Residential", progress: 10, expected: "Mar 2027", tag: "Residential", img: IMG("photo-1706164971309-fb4785fe6ceb") },
] as const

const TABS = ["All", "Residential", "Commercial"] as const

export default function ProjectsOngoing() {
  return (
    <ProjectIndex
      title="ONGOING PROJECTS"
      seoTitle="Ongoing Projects — Live Construction Sites"
      seoDescription="Construction currently under way with Reena Designs & Constructions across Paschim Midnapur, with build progress and expected handover dates for each live site."
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Our Work", href: "/our-work" },
        { label: "Projects" },
        { label: "Ongoing Projects" },
      ]}
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
          <div className="mb-3 text-xs text-slate-400">{p.location}</div>

          <div className="mb-1 flex items-center justify-between">
            <span className="text-xs text-slate-500">Progress</span>
            <span className="montserrat font-700 text-xs text-brand">{p.progress}%</span>
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
              style={{ width: `${p.progress}%`, background: "linear-gradient(90deg, #FF5E00, #ff8c00)" }}
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
