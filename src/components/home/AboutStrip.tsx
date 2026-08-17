import { Link } from "react-router-dom"
import { SITE_CONTAINER } from "@/components/layout/constants"

export default function AboutStrip() {
  return (
    <section className="py-12 bg-white">
      <div className={`${SITE_CONTAINER} grid md:grid-cols-2 gap-10 items-center`}>
        <div>
          <div className="mb-2">
            <h2 className="montserrat font-800 text-xl" style={{ color: "#1a2744" }}>ABOUT REENA</h2>
            <div className="h-0.5 w-16 mt-1.5 rounded-full" style={{ background: "#FF5E00" }} />
          </div>
          <p className="text-gray-500 text-sm leading-relaxed mt-4 mb-6 max-w-sm">
            We are a trusted construction company delivering quality and timeless projects with excellence.
          </p>
          <Link to="/about" className="btn-outline montserrat font-700 text-sm px-5 py-2.5 inline-flex items-center gap-2 rounded-lg">
            Know More
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M3 7.5h9M8 4.5l3 3-3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
          </Link>
        </div>
        <div className="rounded-xl overflow-hidden" style={{ border: "1.5px solid #e8e8e8" }}>
          <img src="https://images.unsplash.com/photo-1567943183748-3a7542120c90?w=700&h=380&fit=crop&auto=format" alt="Modern building" className="w-full h-56 object-cover" />
        </div>
      </div>
    </section>
  )
}
